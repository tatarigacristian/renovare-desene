/* Culorile, texturile și materialele comune vederilor 3D: pereții camerelor (js/vedere3d.js) și pașii de
   montaj în 3D. Texturile sunt desenate în canvas, fără imagini descărcate. Unitățile sunt cm.
   Exporturile existente nu își schimbă semnătura; se pot adăuga exporturi noi. */
import * as THREE from './vendor/three/three.module.min.js';

// ---------------------------------------------------------------- culori și texturi
// bejul e luat din randările dormitorului mic (consola), nucul și parchetul din randări și din legende
export const CULORI = {
  bej: '#bdb2a3', alb: '#f4f2ee', negru: '#1f1f1f', antracit: '#3a3b3e', p751: '#8a7b75', p722: '#929f8e',
  'sand-moon': '#e9e3d8', 'sand-moon-str': '#e3dccf', blat: '#d8ccb9', perete: '#efece6', tavan: '#f6f5f2',
  mobilier: '#cdb79c', riflaj: '#d6c4a6', ac: '#f3f3f1',
};
export const FLUIDE = { rece: '#1f6fd1', calda: '#d1453b', scurgere: '#6b5e55', gaz: '#d9a400' };
export const STRAT = { electric: '#c0392b', mobila: '#93622f', sanitare: '#2f6f9f', led: '#b07800', gips: '#6f737a', finisaje: '#8d8270', structura: '#57534e' };
export const ORDINE = { finisaje: 0, structura: 1, gips: 2, mobila: 3, sanitare: 4, electric: 5, led: 6 };

let seed = 11;
const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
export function canvasTex(w, h, draw) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 8;
  return t;
}
let TEX = null;
export function texturi() {
  if (TEX) return TEX;
  seed = 11;
  const zgomot = (baza, amp) => canvasTex(256, 256, (g, w, h) => {
    g.fillStyle = baza; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 2600; i++) { g.fillStyle = `rgba(${rnd() < .5 ? '0,0,0' : '255,255,255'},${rnd() * amp})`; g.fillRect(rnd() * w, rnd() * h, 1.5, 1.5); }
  });
  TEX = {
    // PAL Nuc Parona: fibră verticală, maro cald
    nuc: canvasTex(256, 1024, (g, w, h) => {
      g.fillStyle = '#8a6646'; g.fillRect(0, 0, w, h);
      for (let i = 0; i < 14; i++) { g.fillStyle = `rgba(${rnd() < .5 ? '70,46,28' : '168,128,88'},${0.06 + rnd() * 0.08})`; g.fillRect(rnd() * w, 0, 10 + rnd() * 40, h); }
      for (let i = 0; i < 110; i++) {
        const x0 = rnd() * w, a = 1.5 + rnd() * 4, f = 0.003 + rnd() * 0.006, ph = rnd() * 6;
        g.strokeStyle = rnd() < 0.7 ? `rgba(52,33,19,${0.05 + rnd() * 0.12})` : `rgba(178,136,94,${0.05 + rnd() * 0.1})`;
        g.lineWidth = 0.5 + rnd() * 1.1; g.beginPath();
        for (let y = 0; y <= h; y += 8) { const x = x0 + Math.sin(y * f + ph) * a; y ? g.lineTo(x, y) : g.moveTo(x, y); }
        g.stroke();
      }
    }),
    // lemn deschis pentru mobila fără finisaj și pentru lamele
    lemn: canvasTex(256, 1024, (g, w, h) => {
      g.fillStyle = '#cdb38f'; g.fillRect(0, 0, w, h);
      for (let i = 0; i < 90; i++) {
        const x0 = rnd() * w, a = 1 + rnd() * 3, f = 0.004 + rnd() * 0.006, ph = rnd() * 6;
        g.strokeStyle = `rgba(140,104,66,${0.06 + rnd() * 0.12})`; g.lineWidth = 0.5 + rnd(); g.beginPath();
        for (let y = 0; y <= h; y += 8) { const x = x0 + Math.sin(y * f + ph) * a; y ? g.lineTo(x, y) : g.moveTo(x, y); }
        g.stroke();
      }
    }),
    // parchetul Egger Stejar Waltham: plăci de ~20 × 120 cm, stejar mediu
    parchet: canvasTex(1024, 1024, (g, w, h) => {
      const pl = w / 8;
      for (let c = 0; c < 8; c++) {
        let y = -rnd() * 600;
        while (y < h) {
          const L = 520 + rnd() * 200, t = rnd();
          g.fillStyle = `rgb(${178 + t * 22},${138 + t * 18},${94 + t * 16})`; g.fillRect(c * pl, y, pl, L);
          for (let i = 0; i < 24; i++) { g.strokeStyle = `rgba(105,72,40,${0.08 + rnd() * 0.12})`; g.lineWidth = 0.8; g.beginPath(); const x = c * pl + rnd() * pl; g.moveTo(x, y); g.bezierCurveTo(x + 6, y + L * .3, x - 6, y + L * .6, x + 2, y + L); g.stroke(); }
          g.fillStyle = 'rgba(80,56,32,.5)'; g.fillRect(c * pl, y, pl, 2); y += L;
        }
        g.fillStyle = 'rgba(80,56,32,.45)'; g.fillRect(c * pl, 0, 2, h);
      }
    }),
    // piatra panourilor de rocă: bej cald, cu vinișoare
    roca: canvasTex(512, 512, (g, w, h) => {
      g.fillStyle = '#d6c2a8'; g.fillRect(0, 0, w, h);
      for (let i = 0; i < 4000; i++) { g.fillStyle = `rgba(${rnd() < .5 ? '90,70,52' : '255,248,236'},${rnd() * .08})`; g.fillRect(rnd() * w, rnd() * h, 2, 2); }
      for (let i = 0; i < 18; i++) {
        g.strokeStyle = `rgba(120,96,74,${0.1 + rnd() * .15})`; g.lineWidth = 0.6 + rnd() * 1.5; g.beginPath();
        let x = rnd() * w, y = 0; g.moveTo(x, y);
        while (y < h) { x += (rnd() - .5) * 30; y += 20 + rnd() * 30; g.lineTo(x, y); }
        g.stroke();
      }
    }),
    perete: zgomot(CULORI.perete, 0.035),
    bej: zgomot(CULORI.bej, 0.04),
    // caloriferul: elementele verticale, la 4 cm
    calorifer: canvasTex(64, 16, (g, w, h) => { g.fillStyle = '#f5f5f3'; g.fillRect(0, 0, w, h); g.fillStyle = '#c9cdd2'; g.fillRect(0, 0, 6, h); }),
  };
  return TEX;
}
// faianța: o placă cu rostul ei, repetată pe suprafață, pornind din colțul dat de „pornire”
export function texFaianta(e) {
  const [pl, ph] = e.placa || [60, 60], r = e.rost || .3, k = 4;
  const t = canvasTex(Math.round((pl + r) * k), Math.round((ph + r) * k), (g, w, h) => {
    g.fillStyle = e.finisaj === 'sand-moon-str' ? CULORI['sand-moon-str'] : CULORI['sand-moon']; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 900; i++) { g.fillStyle = `rgba(120,104,84,${rnd() * .05})`; g.fillRect(rnd() * w, rnd() * h, 2, 2); }
    if (e.finisaj === 'sand-moon-str') for (let y = 0; y < h; y += 6) { g.fillStyle = 'rgba(110,96,78,.07)'; g.fillRect(0, y, w, 2); }
    g.fillStyle = '#b9ad98'; g.fillRect(0, 0, w, Math.max(1, r * k)); g.fillRect(0, 0, Math.max(1, r * k), h);
  });
  const p0 = e.pornire || { x: e.x, h: e.h };
  t.repeat.set(e.lat / (pl + r), e.inalt / (ph + r));
  t.offset.set(((e.x - p0.x) / (pl + r)) % 1, ((e.h - p0.h) / (ph + r)) % 1);
  return t;
}
// găurile perforațiilor: puncte închise pe fond transparent
export function texPerforatii(e) {
  const n = e.n || 1, m = e.randuri || 1, r = (e.diam || 3) / 2, k = 6;
  return canvasTex(Math.max(8, Math.round(e.lat * k)), Math.max(8, Math.round(e.inalt * k)), (g, w, h) => {
    const pas = n > 1 ? (e.lat - 2 * r) / (n - 1) : 0, pasV = m > 1 ? (e.inalt - 2 * r) / (m - 1) : 0;
    g.fillStyle = '#1e1813';
    for (let j = 0; j < m; j++) for (let i = 0; i < n; i++) {
      const cx = (r + i * pas) * k, cy = h - (m > 1 ? (r + j * pasV) * k : h / 2);
      g.beginPath(); g.arc(cx, cy, r * k, 0, Math.PI * 2); g.fill();
    }
  });
}

// ---------------------------------------------------------------- materialele
export function material(tip, w, h) {
  const T = texturi(), S = o => new THREE.MeshStandardMaterial(Object.assign({ envMapIntensity: .55 }, o));
  const cu = (t, rx, ry) => { const c = t.clone(); c.needsUpdate = true; c.repeat.set(Math.max(.2, rx), Math.max(.2, ry)); return c; };
  switch (tip) {
    case 'nuc': return S({ map: cu(T.nuc, w / 110, h / 260), roughness: .6 });
    case 'lemn': return S({ map: cu(T.lemn, w / 110, h / 260), roughness: .65 });
    case 'bej': return S({ map: cu(T.bej, w / 80, h / 80), roughness: .85 });
    case 'perete': return S({ map: cu(T.perete, w / 60, h / 60), roughness: .95 });
    case 'parchet': return S({ map: cu(T.parchet, w / 160, h / 160), roughness: .55 });
    case 'roca': return S({ map: cu(T.roca, w / 90, h / 90), roughness: .8 });
    case 'calorifer': return S({ map: cu(T.calorifer, w / 4, 1), roughness: .4 });
    case 'tavan': return S({ color: CULORI.tavan, roughness: .95, emissive: '#3a3732', emissiveIntensity: .45 });
    case 'oglinda': return S({ color: '#dfe6ea', metalness: 1, roughness: .04, envMapIntensity: 1.3 });
    case 'inox': return S({ color: '#c8ccd0', metalness: .85, roughness: .32, envMapIntensity: 1 });
    case 'ceramica': return S({ color: '#fbfbfa', roughness: .18, envMapIntensity: .9 });
    case 'sticla': return S({ color: '#cfe0ea', transparent: true, opacity: .28, roughness: .05, metalness: .1, envMapIntensity: 1.2, depthWrite: false });
    case 'cer': return S({ color: '#d7e8f4', emissive: '#bcd8ee', emissiveIntensity: .75, roughness: .1 });
    case 'ecran': return S({ color: '#06080b', roughness: .08, metalness: .1, envMapIntensity: 1.2 });
    case 'umbra': return S({ color: '#4a433b', roughness: 1 });
    case 'led': return new THREE.MeshStandardMaterial({ color: '#ffdca6', emissive: '#ffc070', emissiveIntensity: 3 });
    case 'flacara': return new THREE.MeshStandardMaterial({ color: '#ff9a3c', emissive: '#ff7a1a', emissiveIntensity: 2.4 });
    default: return S({ color: CULORI[tip] || tip, roughness: tip === 'negru' ? .45 : .7 });
  }
}
export const finisajMat = (e, w, h, implicit = 'mobilier') => {
  const f = e.finisaj;
  if (f === 'nuc') return material('nuc', w, h);
  if (f === 'bej') return material('bej', w, h);
  if (f === 'oglinda') return material('oglinda');
  if (f === 'inox') return material('inox');
  if (f && CULORI[f]) return material(f);
  return implicit === 'mobilier' ? material('lemn', w, h) : material(implicit, w, h);
};

// ---------------------------------------------------------------- umplerile secțiunilor (js/sectiune3d.js)
// Texturile umplerilor din detalii (data/detalii/*.js): fiecare are perioada ei în cm, [textură, lățime, înălțime].
let TEXU = null;
export function texUmpleri() {
  if (TEXU) return TEXU;
  let s = 23;
  const r = () => (s = (s * 16807) % 2147483647) / 2147483647;
  const zgomot = (g, w, h, n, amp, m = 1.5) => {
    for (let i = 0; i < n; i++) { g.fillStyle = `rgba(${r() < .5 ? '0,0,0' : '255,255,255'},${r() * amp})`; g.fillRect(r() * w, r() * h, m, m); }
  };
  const simplu = (baza, amp, n = 2600, m = 1.5) => canvasTex(256, 256, (g, w, h) => { g.fillStyle = baza; g.fillRect(0, 0, w, h); zgomot(g, w, h, n, amp, m); });
  const T = texturi();
  TEXU = {
    // zidăria: cărămizi de 24 × 6,3 cm, cu rosturi de 1 cm, în rânduri decalate
    zid: [canvasTex(500, 292, (g, w, h) => {
      g.fillStyle = '#d2cabe'; g.fillRect(0, 0, w, h);
      for (let rd = 0; rd < 4; rd++) for (let c = -1; c < 3; c++) {
        const x = c * 250 + (rd % 2 ? 125 : 0) + 5, y = rd * 73 + 5, t = r();
        g.fillStyle = `rgb(${168 + t * 20},${128 + t * 14},${108 + t * 12})`; g.fillRect(x, y, 240, 63);
        for (let i = 0; i < 260; i++) { g.fillStyle = `rgba(${r() < .5 ? '70,40,25' : '235,200,170'},${r() * .12})`; g.fillRect(x + r() * 240, y + r() * 63, 2, 2); }
      }
    }), 50, 29.2],
    // betonul plăcii și al grinzilor: gri, cu agregate și pori
    ciment: [canvasTex(512, 512, (g, w, h) => {
      g.fillStyle = '#b6b3ac'; g.fillRect(0, 0, w, h);
      for (let i = 0; i < 1800; i++) { const t = r(), q = .8 + r() * 2.6; g.fillStyle = `rgba(${t < .5 ? '100,98,94' : '208,205,198'},${.06 + r() * .12})`; g.beginPath(); g.arc(r() * w, r() * h, q, 0, 7); g.fill(); }
      for (let i = 0; i < 160; i++) { g.fillStyle = 'rgba(70,68,64,.22)'; g.beginPath(); g.arc(r() * w, r() * h, .5 + r() * .9, 0, 7); g.fill(); }
      zgomot(g, w, h, 4000, .05);
    }), 40, 40],
    // fețele tencuite ale zidurilor și fețele netede ale betonului (tăietura are cărămida, respectiv agregatele)
    tencuiala: [simplu('#ebe7e0', .03), 60, 60],
    'ciment-neted': [simplu('#c3c0b9', .045), 40, 40],
    sapa: [simplu('#c6bfb1', .09, 5200, 1.2), 30, 30],
    gips: [simplu('#eeebe5', .025), 60, 60],
    'gips-rf': [simplu('#eccfc7', .03), 60, 60],
    'gips-ru': [simplu('#bfd2b6', .03), 60, 60],
    'gips-miez': [simplu('#f3f1ec', .05, 3000, 1), 20, 20],
    silicat: [canvasTex(256, 256, (g, w, h) => {
      g.fillStyle = '#e9e5dc'; g.fillRect(0, 0, w, h);
      for (let i = 0; i < 700; i++) { g.fillStyle = `rgba(150,144,136,${.2 + r() * .3})`; g.fillRect(r() * w, r() * h, 1 + r() * 2, 1 + r() * 2); }
    }), 30, 30],
    // miezul PAL-ului: așchii presate, deschise și închise
    pal: [canvasTex(256, 256, (g, w, h) => {
      g.fillStyle = '#c9a77f'; g.fillRect(0, 0, w, h);
      for (let i = 0; i < 1500; i++) {
        g.fillStyle = `rgba(${r() < .5 ? '120,86,52' : '232,206,166'},${.25 + r() * .35})`;
        g.save(); g.translate(r() * w, r() * h); g.rotate(r() * 3.2); g.fillRect(0, 0, 2 + r() * 6, 1 + r() * 2); g.restore();
      }
    }), 12, 12],
    // tabla zincată: pete de zincare, foarte fine
    otel: [canvasTex(256, 256, (g, w, h) => {
      g.fillStyle = '#c2c6c9'; g.fillRect(0, 0, w, h);
      for (let i = 0; i < 60; i++) { g.fillStyle = `rgba(${r() < .5 ? '160,166,172' : '216,220,224'},${.06 + r() * .1})`; g.beginPath(); const x = r() * w, y = r() * h; g.moveTo(x, y); for (let k = 0; k < 5; k++) g.lineTo(x + (r() - .5) * 60, y + (r() - .5) * 60); g.fill(); }
      zgomot(g, w, h, 1500, .05, 1);
    }), 20, 20],
    // plăcile de 60 × 60 cu rostul de 3 mm (Sand Moon)
    faianta: [canvasTex(302, 302, (g, w, h) => {
      g.fillStyle = CULORI['sand-moon']; g.fillRect(0, 0, w, h);
      for (let i = 0; i < 1600; i++) { g.fillStyle = `rgba(120,104,84,${r() * .05})`; g.fillRect(r() * w, r() * h, 3, 3); }
      g.fillStyle = '#b3a791'; g.fillRect(0, 0, w, 2); g.fillRect(0, 0, 2, h);
    }), 60.3, 60.3],
    'faianta-miez': [simplu('#d8c6ad', .08, 2000, 1.2), 10, 10],
    adeziv: [canvasTex(128, 128, (g, w, h) => {
      g.fillStyle = '#c7c6c0'; g.fillRect(0, 0, w, h);
      for (let y = 0; y < h; y += 16) { g.fillStyle = 'rgba(110,110,104,.25)'; g.fillRect(0, y, w, 5); }
      zgomot(g, w, h, 900, .08, 1);
    }), 8, 8],
    hidroizolatie: [canvasTex(256, 256, (g, w, h) => {
      g.fillStyle = '#6f9dbf'; g.fillRect(0, 0, w, h);
      for (let i = 0; i < 90; i++) { g.strokeStyle = `rgba(${r() < .5 ? '50,90,125' : '160,195,220'},${.03 + r() * .05})`; g.lineWidth = 3 + r() * 8; g.beginPath(); const y = r() * h; g.moveTo(0, y); g.bezierCurveTo(w * .3, y + (r() - .5) * 30, w * .7, y + (r() - .5) * 30, w, y + (r() - .5) * 20); g.stroke(); }
    }), 40, 40],
    folie: [simplu('#a9cbe8', .04), 30, 30],
    glet: [simplu('#f6f5f1', .02), 40, 40],
    'banda-hartie': [canvasTex(128, 128, (g, w, h) => {
      g.fillStyle = '#efdf9f'; g.fillRect(0, 0, w, h);
      for (let i = 0; i < 400; i++) { g.strokeStyle = `rgba(170,140,70,${r() * .2})`; g.lineWidth = .7; g.beginPath(); const x = r() * w, y = r() * h; g.moveTo(x, y); g.lineTo(x + (r() - .5) * 14, y + (r() - .5) * 14); g.stroke(); }
    }), 6, 6],
    'roca-crud': [simplu('#c8bfb4', .1, 5000, 1.6), 25, 25],
    roca: [T.roca, 90, 90],
    parchet: [T.parchet, 160, 160],
    nuc: [T.nuc, 110, 260],
    lemn: [T.lemn, 110, 260],
    bej: [T.bej, 80, 80],
  };
  return TEXU;
}

// numele umplerilor din detalii, plus cele folosite doar în 3D (prin „umplere3d” pe formă)
export const UMPLERI_3D = ['zid', 'ciment', 'gips', 'gips-rf', 'gips-ru', 'gips-miez', 'silicat', 'pal', 'otel', 'ac', 'aluminiu', 'sapa', 'folie', 'parchet',
  'glet', 'banda-hartie', 'roca-crud', 'roca-final', 'zona', 'sablon', 'banda', 'hidroizolatie', 'adeziv', 'faianta', 'faianta-miez', 'sticla', 'pvc',
  'cauciuc', 'alb', 'negru', 'tencuiala', 'ciment-neted', 'opal', 'oglinda', 'nuc', 'bej', 'p751', 'p722', 'sand-moon', 'gaz', 'apa', 'calda', 'scurgere', 'cablu', 'voal',
  'draperie', 'laser', 'led', 'flacara', 'inox', 'tub-gofrat', 'focar', 'focar-interior', 'arzator'];

// materialUmplere(nume, w, h): materialul unei umpleri. Cu w și h, textura se repetă pe o față de w × h cm cu UV-uri 0–1
// (ca material()). Fără w și h, repeat = 1 / perioadă, pentru UV-uri măsurate în cm (cum le face js/sectiune3d.js).
export function materialUmplere(nume, w, h) {
  const U = texUmpleri(), S = o => new THREE.MeshStandardMaterial(Object.assign({ envMapIntensity: .55 }, o));
  const tx = k => {
    const [t, pw, ph] = U[k], c = t.clone(); c.needsUpdate = true;
    if (w && h) c.repeat.set(Math.max(.2, w / pw), Math.max(.2, h / ph)); else c.repeat.set(1 / pw, 1 / ph);
    return c;
  };
  const transp = (culoare, opacity) => S({ color: culoare, transparent: true, opacity, depthWrite: false, roughness: .5 });
  switch (nume) {
    case 'zid': return S({ map: tx('zid'), roughness: .92 });
    case 'ciment': return S({ map: tx('ciment'), roughness: .9 });
    case 'tencuiala': return S({ map: tx('tencuiala'), roughness: .95 });
    case 'ciment-neted': return S({ map: tx('ciment-neted'), roughness: .9 });
    case 'sapa': return S({ map: tx('sapa'), roughness: .95 });
    case 'gips': case 'gips-rf': case 'gips-ru': case 'gips-miez': return S({ map: tx(nume), roughness: .9 });
    case 'silicat': return S({ map: tx('silicat'), roughness: .9 });
    case 'pal': return S({ map: tx('pal'), roughness: .8 });
    case 'otel': return S({ map: tx('otel'), metalness: .45, roughness: .42, envMapIntensity: .9 });
    case 'aluminiu': return S({ color: '#2f3033', metalness: .6, roughness: .38, envMapIntensity: .9 });
    case 'inox': return material('inox');
    case 'ac': return S({ color: CULORI.ac, roughness: .32 });
    case 'folie': return S({ map: tx('folie'), roughness: .35 });
    case 'parchet': return S({ map: tx('parchet'), roughness: .55 });
    case 'glet': return S({ map: tx('glet'), roughness: .95 });
    case 'banda-hartie': return S({ map: tx('banda-hartie'), roughness: .85 });
    case 'roca-crud': return S({ map: tx('roca-crud'), roughness: .95 });
    case 'roca-final': return S({ map: tx('roca'), roughness: .85 });
    case 'zona': return transp('#c0392b', .16);
    case 'sablon': return transp('#2563eb', .32);
    case 'banda': return S({ color: '#f1bd52', emissive: '#a86a00', emissiveIntensity: .35, roughness: .5 });
    case 'hidroizolatie': return S({ map: tx('hidroizolatie'), roughness: .6 });
    case 'adeziv': return S({ map: tx('adeziv'), roughness: .95 });
    case 'faianta': return S({ map: tx('faianta'), roughness: .22, envMapIntensity: .8 });
    case 'faianta-miez': return S({ map: tx('faianta-miez'), roughness: .9 });
    case 'sand-moon': return S({ color: CULORI['sand-moon'], roughness: .25 });
    case 'sticla': return material('sticla');
    // oglinda din secțiuni: luminoasă și din unghiuri în care reflexia mediului ar fi închisă
    case 'oglinda': return S({ color: '#dfe7ec', metalness: .55, roughness: .06, envMapIntensity: 1.5 });
    case 'pvc': return S({ color: '#cfd1d2', roughness: .45 });
    case 'cauciuc': return S({ color: '#2a2a2c', roughness: .9 });
    case 'alb': return S({ color: '#f5f5f3', roughness: .42 });
    case 'negru': return S({ color: '#1d1d1e', roughness: .3, envMapIntensity: .8 });
    case 'opal': return S({ color: '#fbf8f1', roughness: .5, transparent: true, opacity: .88, emissive: '#fff0d8', emissiveIntensity: .08 });
    case 'nuc': case 'lemn': return S({ map: tx(nume), roughness: .6 });
    case 'bej': return S({ map: tx('bej'), roughness: .85 });
    case 'p751': case 'p722': return S({ color: CULORI[nume], roughness: .7 });
    case 'gaz': return S({ color: '#d9a400', roughness: .4, metalness: .2 });
    case 'apa': return S({ color: FLUIDE.rece, roughness: .4 });
    case 'calda': return S({ color: FLUIDE.calda, roughness: .4 });
    case 'scurgere': return S({ color: '#a7abae', roughness: .45 });
    case 'cablu': return S({ color: '#2b2b2b', roughness: .6 });
    case 'tub-gofrat': return S({ color: '#d9dbdc', roughness: .55 });
    case 'voal': return S({ color: '#f7f5f0', roughness: 1, transparent: true, opacity: .6, side: THREE.DoubleSide, depthWrite: false });
    case 'draperie': return S({ color: '#a08977', roughness: .95, side: THREE.DoubleSide });
    case 'laser': return new THREE.MeshBasicMaterial({ color: '#ff2a1a', transparent: true, opacity: .9 });
    case 'led': return material('led');
    case 'flacara': return material('flacara');
    case 'focar': return S({ color: '#161616', roughness: .55, metalness: .4 });
    case 'focar-interior': return S({ color: '#2b2a29', roughness: .9 });
    case 'arzator': return S({ color: '#5b5854', roughness: .45, metalness: .6 });
    default: return CULORI[nume] ? material(nume) : S({ color: /^#/.test(nume || '') ? nume : '#bdb7ae', roughness: .7 });
  }
}

// ---------------------------------------------------------------- materialele pieselor detaliate (js/modele3d.js)
// materialPiesa(nume): un material comun pe nume, creat o singură dată și refolosit de toate piesele (puține
// programe și texturi pe telefon). Texturile se repetă cu perioada lor în cm: geometria are UV-uri măsurate în cm.
// Finisajele mobilei: „f:<finisaj>” (f:nuc, f:bej, f:lemn, f:p751, f:blat, f:sand-moon, f:oglinda …);
// fundul riflajului (umbra dintre lamele): „fund:<finisaj>”.
let TEXP = null;
function texPiese() {
  if (TEXP) return TEXP;
  let s = 41;
  const r = () => (s = (s * 16807) % 2147483647) / 2147483647;
  TEXP = {
    // țesătura tapițeriei: fire fine pe două direcții, deschisă (se nuanțează cu culoarea materialului); perioada 8 cm
    textil: canvasTex(128, 128, (g, w, h) => {
      g.fillStyle = '#f4f4f4'; g.fillRect(0, 0, w, h);
      for (let y = 0; y < h; y += 2) { g.fillStyle = `rgba(0,0,0,${.03 + r() * .05})`; g.fillRect(0, y, w, 1); }
      for (let x = 0; x < w; x += 2) { g.fillStyle = `rgba(0,0,0,${.02 + r() * .04})`; g.fillRect(x, 0, 1, h); }
      for (let i = 0; i < 900; i++) { g.fillStyle = `rgba(${r() < .5 ? '0,0,0' : '255,255,255'},${r() * .08})`; g.fillRect(r() * w, r() * h, 2, 2); }
    }),
    // bouclé-ul pernelor: bucle mici, cu umbră și lumină; perioada 12 cm
    boucle: canvasTex(192, 192, (g, w, h) => {
      g.fillStyle = '#f2f2f2'; g.fillRect(0, 0, w, h);
      for (let i = 0; i < 2600; i++) {
        const x = r() * w, y = r() * h, q = 1.2 + r() * 2.4;
        g.fillStyle = `rgba(90,80,70,${.08 + r() * .12})`; g.beginPath(); g.arc(x + .8, y + .8, q, 0, 7); g.fill();
        g.fillStyle = `rgba(255,255,255,${.25 + r() * .3})`; g.beginPath(); g.arc(x, y, q * .75, 0, 7); g.fill();
      }
    }),
    // grătarul rigolei și al sifonului: inox periat cu fante transversale; perioada 2 × 5 cm
    gratar: canvasTex(64, 160, (g, w, h) => {
      g.fillStyle = '#c9cdd1'; g.fillRect(0, 0, w, h);
      for (let y = 0; y < h; y += 2) { g.fillStyle = `rgba(${r() < .5 ? '120,126,132' : '235,238,240'},${.12 + r() * .15})`; g.fillRect(0, y, w, 1); }
      g.fillStyle = '#1b1d1f'; g.fillRect(24, 16, 16, 128);
    }),
    // plita cu inducție, văzută de sus: sticlă neagră, patru zone și comenzile tactile în față
    plita: canvasTex(512, 448, (g, w, h) => {
      g.fillStyle = '#0b0b0c'; g.fillRect(0, 0, w, h);
      g.strokeStyle = '#3d3d41'; g.lineWidth = 3;
      for (const [x, y, q] of [[135, 120, 92], [380, 120, 72], [135, 300, 72], [380, 300, 92]]) {
        g.beginPath(); g.arc(x, y, q, 0, 7); g.stroke();
        g.beginPath(); g.arc(x, y, q * .62, 0, 7); g.globalAlpha = .45; g.stroke(); g.globalAlpha = 1;
      }
      g.fillStyle = '#6f6f73'; g.fillRect(170, 408, 172, 3);
      for (let i = 0; i < 6; i++) { g.beginPath(); g.arc(150 + i * 42, 426, 6, 0, 7); g.fill(); }
    }),
    // flacăra bioetanolului: limbi galbene și portocalii pe negru (se adună peste focar, cu amestecare aditivă)
    flacara: canvasTex(128, 256, (g, w, h) => {
      g.fillStyle = '#000'; g.fillRect(0, 0, w, h);
      g.globalCompositeOperation = 'lighter';
      for (let i = 0; i < 12; i++) {
        const x = 16 + r() * (w - 32), q = 5 + r() * 8, ht = h * (.4 + r() * .5);
        g.save(); g.translate(x, h - 2); g.scale(1, ht / q / 2);
        const gr = g.createRadialGradient(0, 0, 0, 0, 0, q * 2);
        gr.addColorStop(0, 'rgba(255,226,150,.55)'); gr.addColorStop(.4, 'rgba(255,128,30,.32)'); gr.addColorStop(1, 'rgba(255,70,0,0)');
        g.fillStyle = gr; g.beginPath(); g.arc(0, 0, q * 2, Math.PI, 0); g.fill(); g.restore();
      }
    }),
    // blatul de bucătărie: piatră compozită deschisă, cu granule fine; perioada 40 cm
    blat: canvasTex(256, 256, (g, w, h) => {
      g.fillStyle = CULORI.blat; g.fillRect(0, 0, w, h);
      for (let i = 0; i < 3200; i++) { g.fillStyle = `rgba(${r() < .55 ? '120,104,84' : '250,246,238'},${r() * .16})`; g.fillRect(r() * w, r() * h, 1 + r() * 1.5, 1 + r() * 1.5); }
    }),
    // reflexia oglinzilor: camera luminată, ca degrade vertical cu două dungi oblice de lumină (fără a doua randare)
    reflexie: canvasTex(128, 256, (g, w, h) => {
      const gr = g.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, '#c9cfd2'); gr.addColorStop(.55, '#aab1b5'); gr.addColorStop(1, '#8d9396');
      g.fillStyle = gr; g.fillRect(0, 0, w, h);
      g.globalCompositeOperation = 'lighter';
      for (const [x, q, a] of [[30, 26, .16], [84, 12, .1]]) {
        g.save(); g.translate(x, h / 2); g.rotate(-.35); const l = g.createLinearGradient(-q, 0, q, 0);
        l.addColorStop(0, 'rgba(255,255,255,0)'); l.addColorStop(.5, `rgba(255,255,255,${a})`); l.addColorStop(1, 'rgba(255,255,255,0)');
        g.fillStyle = l; g.fillRect(-q, -h, 2 * q, 2 * h); g.restore();
      }
    }),
    // compozitul granitic al chiuvetei (antracit), cu granule deschise; perioada 20 cm
    granit: canvasTex(128, 128, (g, w, h) => {
      g.fillStyle = '#35373b'; g.fillRect(0, 0, w, h);
      for (let i = 0; i < 1300; i++) { g.fillStyle = `rgba(${r() < .6 ? '200,200,200' : '10,10,12'},${r() * .22})`; g.fillRect(r() * w, r() * h, 1.2, 1.2); }
    }),
  };
  return TEXP;
}
const CACHE_PIESE = new Map();
const intunecat = (hex, k) => '#' + new THREE.Color(hex).multiplyScalar(k).getHexString();
export function materialPiesa(nume) {
  if (CACHE_PIESE.has(nume)) return CACHE_PIESE.get(nume);
  const T = texturi(), P = texPiese(), S = o => new THREE.MeshStandardMaterial(Object.assign({ envMapIntensity: .55 }, o));
  const cm = (t, pw, ph) => { const c = t.clone(); c.needsUpdate = true; c.repeat.set(1 / pw, 1 / ph); return c; };
  const BAZA = { nuc: '#8a6646', lemn: '#cdb38f' };
  let m;
  if (nume.startsWith('f:')) {
    const f = nume.slice(2);
    if (f === 'nuc') m = S({ map: cm(T.nuc, 110, 260), roughness: .58 });
    else if (f === 'lemn') m = S({ map: cm(T.lemn, 110, 260), roughness: .62 });
    else if (f === 'bej') m = S({ map: cm(T.bej, 80, 80), roughness: .78 });
    else if (f === 'blat') m = S({ map: cm(P.blat, 40, 40), roughness: .4, envMapIntensity: .7 });
    else if (f === 'sand-moon' || f === 'sand-moon-str') m = S({ map: texFaianta({ placa: [60, 60], rost: .3, finisaj: f, lat: 1, inalt: 1, x: 0, h: 0 }), roughness: .25, envMapIntensity: .8 });
    else if (f === 'oglinda') m = material('oglinda');
    else if (f === 'inox') m = material('inox');
    else m = S({ color: CULORI[f] || f, roughness: f === 'negru' ? .45 : .6 });
  } else if (nume.startsWith('fund:')) {
    const f = nume.slice(5);
    m = S({ color: intunecat(BAZA[f] || CULORI[f] || '#9a8670', .5), roughness: .9 });
  } else switch (nume) {
    case 'rost': m = S({ color: '#211c17', roughness: 1, envMapIntensity: .1 }); break;          // umbra din rosturile fronturilor
    case 'interior-negru': m = S({ color: '#121212', roughness: .95, envMapIntensity: .15 }); break;
    case 'crom': m = S({ color: '#e9ecef', metalness: .9, roughness: .16, envMapIntensity: 1.5 }); break;
    case 'inox': m = material('inox'); break;
    case 'negru-mat': m = S({ color: '#1c1c1e', metalness: .35, roughness: .48, envMapIntensity: .7 }); break; // bateriile și clapetele negre
    case 'metal-negru': m = S({ color: '#161617', metalness: .55, roughness: .5, envMapIntensity: .7 }); break; // profile, rame, picioare
    case 'ceramica': m = material('ceramica'); break;
    case 'ceramica-neagra': m = S({ color: '#121213', roughness: .3, envMapIntensity: .9 }); break;
    // interiorul cuvelor negre: puțin mai deschis și mai mat, ca pereții și fundul să se deosebească în umbra golului
    case 'ceramica-neagra-cuva': m = S({ color: '#2c2c2f', roughness: .5, envMapIntensity: 1.1 }); break;
    case 'capac-negru': m = S({ color: '#17171a', roughness: .38, envMapIntensity: .8 }); break;
    case 'granit': m = S({ map: cm(P.granit, 20, 20), roughness: .55 }); break;
    case 'ecran-tv': m = S({ color: '#040507', roughness: .06, metalness: .2, envMapIntensity: 1.4, emissive: '#ffffff', emissiveMap: P.reflexie, emissiveIntensity: .075 }); break;
    case 'rama-tv': m = S({ color: '#1b1c1f', metalness: .6, roughness: .35, envMapIntensity: .9 }); break;
    case 'spate-tv': m = S({ color: '#1a1a1c', roughness: .7 }); break;
    case 'sticla-dus': m = S({ color: '#eef6f4', transparent: true, opacity: .16, roughness: .03, envMapIntensity: 1.6, depthWrite: false, side: THREE.DoubleSide }); break;
    case 'sticla-fumurie': m = S({ color: '#2a2622', transparent: true, opacity: .6, roughness: .05, envMapIntensity: 1.3, depthWrite: false }); break;
    case 'muchie-oglinda': m = S({ color: '#a9bab3', roughness: .25, envMapIntensity: .8 }); break;
    case 'oglinda': m = material('oglinda'); break;
    // oglinda pieselor: metal lucios cu mediul, plus reflexia unei camere luminate (degradeul emisiv), ca să nu pară neagră
    case 'oglinda-piesa': m = S({ color: '#c4cacd', metalness: 1, roughness: .04, envMapIntensity: 1.4, emissive: '#ffffff', emissiveMap: P.reflexie, emissiveIntensity: .62 }); break;
    case 'textil': m = S({ map: cm(P.textil, 8, 8), color: '#c9bdac', roughness: 1, envMapIntensity: .3 }); break;
    case 'cearceaf': m = S({ map: cm(P.textil, 8, 8), color: '#ece7de', roughness: 1, envMapIntensity: .3 }); break;
    case 'patura': m = S({ map: cm(P.textil, 6, 6), color: '#6f5b4b', roughness: 1, envMapIntensity: .3 }); break;
    case 'boucle': m = S({ map: cm(P.boucle, 12, 12), color: '#eee9e0', roughness: 1, envMapIntensity: .3 }); break;
    case 'gratar': m = S({ map: cm(P.gratar, 2, 5), metalness: .8, roughness: .32, envMapIntensity: 1 }); break;
    case 'plita': m = S({ map: P.plita, roughness: .08, metalness: .1, envMapIntensity: 1.2 }); break;
    case 'cuptor-sticla': m = S({ color: '#0a0b0d', roughness: .06, metalness: .1, envMapIntensity: 1.3 }); break;
    case 'cuptor-fereastra': m = S({ color: '#1c1a19', roughness: .1, envMapIntensity: 1.1, emissive: '#1a0d05', emissiveIntensity: .4 }); break;
    case 'display': m = new THREE.MeshStandardMaterial({ color: '#ffb366', emissive: '#ff9a3c', emissiveIntensity: 1.4 }); break;
    case 'lemn-inchis': m = S({ map: cm(T.nuc, 110, 260), color: '#8f7d6c', roughness: .55 }); break;   // viziera hotei
    case 'focar': m = S({ color: '#161616', roughness: .55, metalness: .4 }); break;
    case 'focar-interior': m = S({ color: '#262524', roughness: .92 }); break;
    case 'jar': m = new THREE.MeshStandardMaterial({ color: '#ff8a3a', emissive: '#ff5a10', emissiveIntensity: 1.6 }); break;
    case 'flacara': P.flacara.wrapS = P.flacara.wrapT = THREE.ClampToEdgeWrapping; m = new THREE.MeshBasicMaterial({ map: P.flacara, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide }); break;
    case 'roca-relief': m = S({ map: cm(T.perete, 30, 30), color: '#ffffff', vertexColors: true, roughness: .93, envMapIntensity: .45 }); break;
    case 'alb-lucios': m = S({ color: '#f5f5f3', roughness: .32 }); break;       // centrala, ventilatorul
    case 'led': m = material('led'); break;
    // golul din blat: scrie doar adâncimea, ca blatul să nu se mai deseneze peste cuvă (vezi js/modele3d.js)
    case 'masca-gol': m = new THREE.MeshBasicMaterial({ colorWrite: false }); break;
    default: m = S({ color: CULORI[nume] || (/^#/.test(nume) ? nume : '#bdb7ae'), roughness: .7 });
  }
  CACHE_PIESE.set(nume, m);
  return m;
}
