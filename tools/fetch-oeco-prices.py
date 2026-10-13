"""Read public Oeco choice steps only: never posts a customer enquiry.
Run: python3 tools/fetch-oeco-prices.py [outdir] (default research/audit-<today>). Raw public source hashes and all 2,130 prices
are retained for comparison; website markup changes fail loudly.
"""
from pathlib import Path
import urllib.request, urllib.parse, json, re, html, hashlib, concurrent.futures, time, datetime
VERIFIED_AT=datetime.datetime.now(datetime.timezone.utc).isoformat()
import sys
ROOT=Path(sys.argv[1]) if len(sys.argv)>1 else Path(__file__).resolve().parent.parent/'research'/('audit-'+datetime.date.today().isoformat())
ROOT.mkdir(exist_ok=True)
URL='https://www.oecogardenrooms.co.uk/garden-rooms.html'
SHAPES={'cube':'Cube','canopy':'Canopy','corner':'Corner','concave':'Concave','canopy-corner':'Canopy Corner'}
STYLES={'Contemporary Thermowood Timber':'thermo-contemporary','Classic Thermowood Timber':'thermo-classic','Composite Smoothgrain':'smoothgrain','Composite ProClad Woodgrain':'woodgrain','Contemporary Western Red Cedar Timber':'cedar-contemporary','Classic Western Red Cedar Timber':'cedar-classic'}
def fetch(url,payload=None):
 for attempt in range(3):
  try:
   req=urllib.request.Request(url,data=urllib.parse.urlencode(payload).encode() if payload else None,headers={'User-Agent':'Mozilla/5.0 Public catalogue verification'})
   return urllib.request.urlopen(req,timeout=30).read()
  except Exception:
   if attempt==2:raise
   time.sleep(1)
def text(s):return re.sub(r'\s+',' ',html.unescape(re.sub('<[^>]+>',' ',s))).strip()
manifest=[]
for name,path in [('product','garden-rooms.html'),('extras','pages/optional-extras.html'),('exterior','pages/exterior-specifications.html'),('interior','pages/interior-specifications.html'),('brochure','brochure.html'),('showroom','visit.html'),('contact','contact.html'),('resources','resources.html'),('ready-to-order','pages/ready-to-order.html'),('homepage','')]:
 url='https://www.oecogardenrooms.co.uk/'+path;b=fetch(url);(ROOT/(name+'.html')).write_bytes(b);manifest.append({'url':url,'sha256':hashlib.sha256(b).hexdigest(),'file':name+'.html'})
extras=[]
for name,price,body in re.findall(r'<h2 class="h5">(.*?)</h5>\s*<p class="extra__price">(.*?)</p>(.*?)</div>',(ROOT/'extras.html').read_text(),re.S):
 amount=text(price);extras.append({'name':text(name),'price':int(amount.replace('£','').replace(',','')) if amount.startswith('£') else None,'text':text(price+' '+body)})
assert len(extras)==34,len(extras)
(ROOT/'extras.json').write_text(json.dumps({'verifiedAt':VERIFIED_AT,'extras':[{'name':o['name'],'price':o['price'],'sourceUnit':('m²' if 'Price per m2' in o['text'] else 'each' if 'Price each' in o['text'] else 'upgrade' if 'Upgrade price only' in o['text'] else None)} for o in extras]},indent=2))
base={};size_hashes=[]
for key,shape in SHAPES.items():
 b=fetch(URL,{'shape':shape,'step':'size'});h=b.decode();(ROOT/(key+'-sizes.html')).write_bytes(b);size_hashes.append({'payload':{'shape':shape,'step':'size'},'file':key+'-sizes.html','sha256':hashlib.sha256(b).hexdigest()})
 cards=re.findall(r'<input type="radio" name="size"[^>]*value="([\d.]+)-([\d.]+)"[^>]*>\s*<label.*?(?:strong|span)>&pound;([\d,]+)</(?:strong|span)>',h,re.S)
 base[key]=[{'width':float(w),'depth':float(d),'price':int(p.replace(',',''))} for w,d,p in cards]
 assert len(base[key])==71,(key,len(base[key]))
 print(key,'sizes',len(base[key]),flush=True)
(ROOT/'sizes-prices.json').write_text(json.dumps({'verifiedAt':VERIFIED_AT,'catalogue':base},indent=2))
def style(job):
 key,row=job;payload={'shape':SHAPES[key],'size':f"{row['width']:.2f}-{row['depth']:.2f}",'step':'style'}
 b=fetch(URL,payload);h=b.decode();a=h.index('product__configurator');end=h.find('product__features',a);h=h[a:end]
 cards=re.findall(r'<input type="radio" name="style"[^>]*value="([^"]+)"[^>]*>\s*<label.*?(?:strong|span)>&pound;([\d,]+)</(?:strong|span)>',h,re.S)
 styles={STYLES[s]:{'price':int(p.replace(',','')),'wasPrice':None,'sourceStyle':s} for s,p in cards}
 assert len(styles)==6,(key,row,len(styles))
 # Keep a compact reproducible oracle and hash of exact response rather than 30MB of HTML.
 return key,{'width':row['width'],'depth':row['depth'],'styles':styles}, {'payload':payload,'sha256':hashlib.sha256(b).hexdigest()}
result={key:[] for key in SHAPES};hashes=[];jobs=[(key,row) for key,rows in base.items() for row in rows]
with concurrent.futures.ThreadPoolExecutor(max_workers=6) as ex:
 for i,(key,row,entry) in enumerate(ex.map(style,jobs),1):
  result[key].append(row);hashes.append(entry)
  if i%25==0:print('prices',i,'/',len(jobs),flush=True)
(ROOT/'style-prices.json').write_text(json.dumps({'verifiedAt':VERIFIED_AT,'catalogue':result},indent=2));(ROOT/'source-manifest.json').write_text(json.dumps({'verified':'2026-10-13','verifiedAt':VERIFIED_AT,'pages':manifest,'styleResponses':hashes,'sizeResponses':size_hashes},indent=2))
# Compare with the configurator's catalogue (tools/data/catalogue.json).
cat=json.loads((Path(__file__).resolve().parent/'data'/'catalogue.json').read_text());order=cat['styles'];changes=[]
for key,rows in result.items():
 old={(r[0],r[1]):r[2:] for r in cat['prices'][key]}
 for row in rows:
  new=[row['styles'][k]['price'] for k in order]
  if old.get((row['width'],row['depth']))!=new:changes.append({'shape':key,'size':[row['width'],row['depth']],'new':new,'old':old.get((row['width'],row['depth']))})
xold={e['name']:e['price'] for e in cat['extras']}
for e in extras:
 if xold.get(e['name'])!=e['price']:changes.append({'extra':e['name'],'new':e['price'],'old':xold.get(e['name'])})
(ROOT/'price-changes.json').write_text(json.dumps({'verifiedAt':VERIFIED_AT,'changes':changes},indent=2));print('Complete:',sum(len(r['styles']) for rows in result.values() for r in rows),'prices;',len(changes),'differences from tools/data/catalogue.json',flush=True)
