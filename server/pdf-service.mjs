import { generateDesignPdf } from './design-pdf.mjs';
import { acceptedSession, enquiryStore, sameOrigin, PRIVATE_HEADERS, QuoteInputError, json, digest, createRateLimiter } from './quote-service.mjs';

export function createPdfHandler({ getStore, now = Date.now, generate = generateDesignPdf, rateLimit = createRateLimiter({ now }) } = {}) {
  return async (request, context = {}) => {
    if (request.method !== 'GET') return json({ error: 'Download your design pack from the configurator.' }, 405, { Allow: 'GET' });
    try {
      sameOrigin(request); rateLimit(context.ip || 'local', 'PDF');
      const store = enquiryStore(getStore, context), { design, leadRecord } = await acceptedSession(request, store, now);
      let preview = null;
      if (design.preview) {
        // The authenticated record determines the image; arbitrary keys and remote image URLs are never accepted.
        if (design.preview.key !== `previews/${design.id}`) throw new Error('PreviewAssociationError');
        preview = await store.get(design.preview.key, { type: 'arrayBuffer' });
        if (!preview || digest(Buffer.from(preview)) !== design.preview.digest) throw new Error('PreviewIntegrityError');
      }
      const bytes = await generate(design, leadRecord, preview, { origin: new URL(request.url).origin });
      return new Response(bytes, { headers: { ...PRIVATE_HEADERS, 'Content-Type': 'application/pdf', 'Content-Disposition': `attachment; filename="${design.reference}-revision-${design.revision}-design-pack.pdf"`, 'Content-Length': String(bytes.byteLength), 'Content-Security-Policy': "default-src 'none'; sandbox" } });
    } catch (error) {
      if (error instanceof QuoteInputError) return json({ error: error.message }, error.status);
      console.warn('Oeco design pack unavailable', error?.name || 'StorageError');
      return json({ error: 'We could not prepare your design pack yet. Please try again.' }, 503);
    }
  };
}
