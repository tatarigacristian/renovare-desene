/* Pașii de montaj ai unui detaliu (window.DETALII, din desene/data/detalii/), într-o fereastră cu animații.
   Desenul e o secțiune în cm. Formele apar la pasul în care sunt listate în „apar” și rămân pe desen la pașii
   următori; cotele, etichetele și formele „temporar” apar doar la pașii care le listează.
   Folosire: Pasi.deschide('D-06'). */
(function () {
  'use strict';

  const NS = 'http://www.w3.org/2000/svg';
  const NSS = { 'vector-effect': 'non-scaling-stroke' };
  const TEMP = new Set(['cota', 'eticheta']);
  const STARE = {
    proiect: { nume: 'din planșă', culoare: '#6b7280' },
    confirmat: { nume: 'confirmat de arhitectă', culoare: '#15803d' },
    propunere: { nume: 'propunerea noastră', culoare: '#2563eb' },
  };
  const UMPLERE = {
    zid: { fill: 'url(#ps-zid)', stroke: '#8f8a82' },
    ciment: { fill: 'url(#ps-ciment)', stroke: '#6b6b6b' },
    gips: { fill: '#ece9e4', stroke: '#7d7870' },
    'roca-crud': { fill: '#cbc2b8', stroke: '#8a7d70' },
    'roca-final': { fill: '#dcc7ad', stroke: '#8a6d63' },
    zona: { fill: 'url(#ps-zona)', stroke: '#b42318', 'stroke-dasharray': '5 3' },
    sablon: { fill: 'rgba(37, 99, 235, .28)', stroke: '#1d4ed8' },
    banda: { fill: '#f5b547', stroke: '#a66f00' },
    'gips-rf': { fill: '#f6dcd6', stroke: '#b42318' },
    silicat: { fill: 'url(#ps-silicat)', stroke: '#78716c' },
    pal: { fill: 'url(#ps-pal)', stroke: '#7a5a3a' },
    otel: { fill: '#d4d4d8', stroke: '#52525b' },
    ac: { fill: '#ffffff', stroke: '#3f3f46', 'stroke-dasharray': '4 3' },
    aluminiu: { fill: '#27272a', stroke: '#000' },
    sapa: { fill: 'url(#ps-ciment)', stroke: '#6b6b6b' },
    folie: { fill: '#93c5fd', stroke: '#1d4ed8' },
    parchet: { fill: 'url(#ps-parchet)', stroke: '#7a5a3a' },
    glet: { fill: '#f5f5f4', stroke: '#a8a29e' },
    'banda-hartie': { fill: '#fde68a', stroke: '#b45309' },
    hidroizolatie: { fill: '#7fb0d6', stroke: '#2f5f86' },
    adeziv: { fill: '#c9c8c2', stroke: '#8a8a84' },
    faianta: { fill: '#ebe4d6', stroke: '#9c8f7a' },
    sticla: { fill: 'rgba(147, 197, 253, .35)', stroke: '#1d4ed8' },
    pvc: { fill: '#d6d3d1', stroke: '#78716c' },
    cauciuc: { fill: '#3f3f46', stroke: '#18181b' },
    alb: { fill: '#ffffff', stroke: '#374151' },
    negru: { fill: '#1f1f1f', stroke: '#000' },
  };
  // culorile firelor din scheme (forma „fir”)
  const FIRE = { faza: '#8b5a2b', nul: '#2563eb', pamant: '#65a30d', comanda: '#7c3aed', 'v24-plus': '#dc2626', 'v24-minus': '#111827',
    apa: '#2563eb', calda: '#dc2626', scurgere: '#78716c', gaz: '#ca8a04' };
  const IC = {
    inapoi: '<path d="M15 18l-6-6 6-6"/>', inainte: '<path d="M9 18l6-6-6-6"/>', inchide: '<path d="M6 6l12 12M18 6L6 18"/>',
    reda: '<path d="M7 5l12 7-12 7z"/>', pauza: '<path d="M8 5v14M16 5v14"/>', reia: '<path d="M4 12a8 8 0 1 0 2.5-5.8M4 4v4h4"/>',
    mesaj: '<path d="M20 12a8 8 0 0 1-11.8 7L4 20l1.1-4A8 8 0 1 1 20 12z"/>',
  };
  const ic = n => `<svg class="ic" viewBox="0 0 24 24" aria-hidden="true">${IC[n]}</svg>`;
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  // numere: pe ecran îngust etichetele devin numere, cu textul lor în lista „Pe desen” (legenda)
  const P = { det: null, k: 0, dlg: null, svg: null, reda: false, timer: 0, ro: null, numere: false, legenda: [], elemente: [], arata: null, reluat: false };

  // pașii văzuți, în acest browser: „desene:pasi:D03'” = { vazute: [1, 2, 4], ultim: 4 }
  const LSP = 'desene:pasi:';
  const citeste = id => { try { return JSON.parse(localStorage.getItem(LSP + id)) || { vazute: [], ultim: 0 }; } catch (_) { return { vazute: [], ultim: 0 }; } };
  function noteaza(id, k) {
    const st = citeste(id);
    if (!st.vazute.includes(k)) st.vazute.push(k);
    st.ultim = k;
    try { localStorage.setItem(LSP + id, JSON.stringify(st)); } catch (_) { /* fără spațiu: nu se ține minte */ }
  }
  // câți pași (fără „Pe scurt”) s-au văzut și unde s-a rămas
  function progres(id) {
    const st = citeste(id);
    return { vazute: st.vazute.filter(k => k > 0).length, ultim: st.ultim };
  }
  const reducere = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

  function el(tag, a, parent, text) {
    const e = document.createElementNS(NS, tag);
    for (const k in a) if (a[k] !== undefined && a[k] !== null) e.setAttribute(k, a[k]);
    if (text !== undefined) e.textContent = text;
    if (parent) parent.appendChild(e);
    return e;
  }
  const linie = (g, x1, y1, x2, y2, c, w, da) => el('line', Object.assign({ x1, y1, x2, y2, stroke: c, 'stroke-width': w, 'stroke-dasharray': da }, NSS), g);

  function defs(svg) {
    const d = el('defs', {}, svg);
    const pat = (id, w, h, kids) => { const p = el('pattern', { id, width: w, height: h, patternUnits: 'userSpaceOnUse' }, d); kids(p); };
    pat('ps-zid', 1, 1, p => { el('rect', { width: 1, height: 1, fill: '#d6d3cd' }, p); el('path', { d: 'M0,1 L1,0', stroke: '#9b968d', 'stroke-width': .12 }, p); });
    pat('ps-ciment', .7, .7, p => { el('rect', { width: .7, height: .7, fill: '#cfcfcc' }, p); el('circle', { cx: .35, cy: .35, r: .09, fill: '#8d8d88' }, p); });
    pat('ps-zona', .8, .8, p => { el('rect', { width: .8, height: .8, fill: 'rgba(180, 35, 24, .07)' }, p); el('path', { d: 'M0,.8 L.8,0', stroke: 'rgba(180, 35, 24, .45)', 'stroke-width': .08 }, p); });
    pat('ps-silicat', 1, 1, p => { el('rect', { width: 1, height: 1, fill: '#ece8e0' }, p); [[.2, .3], [.7, .15], [.55, .7], [.15, .8]].forEach(([cx, cy]) => el('circle', { cx, cy, r: .07, fill: '#a8a29e' }, p)); });
    pat('ps-pal', 2, 6, p => { el('rect', { width: 2, height: 6, fill: '#c9a57b' }, p); el('path', { d: 'M.6,0 C.4,2 .8,4 .6,6 M1.5,0 C1.7,2.5 1.3,4 1.5,6', fill: 'none', stroke: '#b08a5e', 'stroke-width': .08 }, p); });
    pat('ps-parchet', 6, 1, p => { el('rect', { width: 6, height: 1, fill: '#d8b98c' }, p); el('path', { d: 'M0,.5 C2,.4 4,.6 6,.5', fill: 'none', stroke: '#b8956a', 'stroke-width': .06 }, p); });
    const fl = el('linearGradient', { id: 'ps-flacara', x1: '0', y1: '1', x2: '0', y2: '0' }, d);
    el('stop', { offset: '0', 'stop-color': '#ff6a00' }, fl);
    el('stop', { offset: '.5', 'stop-color': '#ffb347' }, fl);
    el('stop', { offset: '1', 'stop-color': '#ffe08a', 'stop-opacity': '0' }, fl);
    const lg = el('linearGradient', { id: 'ps-lumina', x1: '1', y1: '0', x2: '0', y2: '0' }, d);
    el('stop', { offset: '0', 'stop-color': '#ffcf70', 'stop-opacity': '.85' }, lg);
    el('stop', { offset: '1', 'stop-color': '#ffcf70', 'stop-opacity': '0' }, lg);
  }

  // fața neregulată a rocii: vârfurile ajung la y1, adânciturile până la y1 − amp
  function fataRocii(x, s) {
    const v = .35 + .3 * Math.sin(x * 1.7) + .25 * Math.sin(x * .6 + 1);
    return s.y1 - Math.max(0, Math.min(.9, v)) * s.amp / .9;
  }

  // cuvintele unei etichete pe rânduri, după lățimea disponibilă (cm)
  function randuri(text, fs, lat) {
    const max = Math.max(8, Math.floor(lat / (fs * .56))), out = [];
    let r = '';
    for (const w of text.split(' ')) {
      if (r && (r + ' ' + w).length > max) { out.push(r); r = w; } else r = r ? r + ' ' + w : w;
    }
    if (r) out.push(r);
    return out;
  }
  function text(g, x, y, s, fs, a) {
    return el('text', Object.assign({ x, y, 'font-size': fs, style: `paint-order:stroke;stroke:#fff;stroke-width:${fs * .3}px;stroke-linejoin:round` }, a), g, s);
  }

  const FORME = {
    dreptunghi(g, s) { el('rect', Object.assign({ x: s.x, y: s.y, width: s.w, height: s.h, 'stroke-width': 1 }, UMPLERE[s.umplere], NSS), g); },
    structura(g, s) {
      el('rect', Object.assign({ x: s.x, y: s.y, width: s.w, height: s.h, fill: 'rgba(120, 120, 120, .08)', stroke: '#a1a1aa', 'stroke-width': 1, 'stroke-dasharray': '4 3' }, NSS), g);
      // profilele, în secțiune: inima perpendiculară pe perete, tălpile paralele cu el
      for (const p of s.profile || []) {
        el('path', Object.assign({ d: `M${p + 5},${s.y + .3} L${p},${s.y + .3} L${p},${s.y + s.h - .1} L${p + 5},${s.y + s.h - .1}`, fill: 'none', stroke: '#6b7280', 'stroke-width': 1.6 }, NSS), g);
      }
    },
    tub(g, s) {
      el('circle', Object.assign({ cx: s.x, cy: s.y, r: s.r, fill: '#f5f5f4', stroke: '#57534e', 'stroke-width': 1.3 }, NSS), g);
      el('circle', { cx: s.x, cy: s.y, r: s.r * .35, fill: '#1f2937' }, g);
    },
    roca(g, s) {
      let d = `M${s.x0},${s.y0} L${s.x1},${s.y0}`;
      for (let x = s.x1; x >= s.x0 - .01; x -= .5) d += ` L${x},${fataRocii(x, s).toFixed(3)}`;
      el('path', Object.assign({ d: d + ' Z', 'stroke-width': 1.1 }, UMPLERE[s.umplere], NSS), g);
    },
    lumina(g, s) { el('polygon', { points: s.puncte.map(p => p.join(',')).join(' '), fill: 'url(#ps-lumina)', class: 'ps-lumina' }, g); },
    linie(g, s) {
      el('polyline', Object.assign({ points: s.puncte.map(p => p.join(',')).join(' '), fill: 'none', stroke: '#1f2937', 'stroke-width': 1.6, 'stroke-dasharray': '5 3', 'stroke-linejoin': 'round' }, NSS), g);
    },
    profil(g, s) {
      el('rect', Object.assign({ x: s.x, y: s.y, width: s.w, height: s.h, rx: .15, fill: '#e5e7eb', stroke: '#52525b', 'stroke-width': 1.3 }, NSS), g);
      // difuzorul, pe fața spre rocă
      el('rect', Object.assign({ x: s.x - .12, y: s.y + .12, width: .24, height: s.h - .24, fill: '#f8fafc', stroke: '#94a3b8', 'stroke-width': 1 }, NSS), g);
    },
    // focarul, în secțiune: corpul de oțel, camera de ardere și arzătorul
    focar(g, s) {
      const p = Math.min(2, s.w / 10);
      el('rect', Object.assign({ x: s.x, y: s.y, width: s.w, height: s.h, fill: '#171717', stroke: '#000', 'stroke-width': 1.4 }, NSS), g);
      el('rect', Object.assign({ x: s.x + p, y: s.y + p, width: s.w - 2 * p, height: s.h - 2 * p, fill: '#2a2a2a', stroke: '#404040', 'stroke-width': 1 }, NSS), g);
      el('rect', Object.assign({ x: s.x + s.w * .3, y: s.y + s.h - p - 3.5, width: s.w * .5, height: 3.5, fill: '#57534e', stroke: '#1c1917', 'stroke-width': 1 }, NSS), g);
    },
    flacara(g, s) {
      const jos = s.y + s.h, fl = [[.15, .5], [.32, .85], [.5, 1], [.68, .8], [.85, .45]];
      const d = fl.map(([k, f]) => { const cx = s.x + s.w * k, hh = s.h * f, r = s.w * .08;
        return `M${cx - r},${jos} C${cx - r},${jos - hh * .45} ${cx - r * .2},${jos - hh * .6} ${cx},${jos - hh} C${cx + r * .2},${jos - hh * .6} ${cx + r},${jos - hh * .45} ${cx + r},${jos} Z`; }).join(' ');
      el('path', { d, fill: 'url(#ps-flacara)', class: 'ps-lumina' }, g);
    },
    contur(g, s) {
      for (const [x, y, w, h] of s.dreptunghiuri) el('rect', Object.assign({ x, y, width: w, height: h, fill: 'none', stroke: '#8a5a2b', 'stroke-width': 1.2, 'stroke-dasharray': '6 4' }, NSS), g);
    },
    ochi(g, s) {
      el('polyline', Object.assign({ points: s.linie.map(p => p.join(',')).join(' '), fill: 'none', stroke: '#1d4ed8', 'stroke-width': 1.3, 'stroke-dasharray': '4 3' }, NSS), g);
      el('ellipse', Object.assign({ cx: s.x, cy: s.y, rx: 1.2, ry: .65, fill: '#fff', stroke: '#1f2937', 'stroke-width': 1.3 }, NSS), g);
      el('circle', { cx: s.x, cy: s.y, r: .3, fill: '#1f2937' }, g);
    },
    text(g, s, u) { text(g, s.x, s.y, s.text, 11 * u, { fill: '#57534e', 'text-anchor': s.anc || 'start' }); },
    // poligon umplut cu un material: șapa cu pantă, membrana pe pantă, piese oblice
    poligon(g, s) { el('polygon', Object.assign({ points: s.puncte.map(p => p.join(',')).join(' '), 'stroke-width': 1, 'stroke-linejoin': 'round' }, UMPLERE[s.umplere] || UMPLERE.gips, NSS), g); },
    // fir sau țeavă în schemă: linie frântă colorată; „culoare” e o cheie din FIRE sau un cod #rrggbb
    fir(g, s) {
      el('polyline', Object.assign({ points: s.puncte.map(p => p.join(',')).join(' '), fill: 'none', stroke: FIRE[s.culoare] || s.culoare || '#1f2937',
        'stroke-width': s.gros || 2, 'stroke-dasharray': s.intrerupt ? '6 4' : null, 'stroke-linejoin': 'round', 'stroke-linecap': 'round' }, NSS), g);
    },
    cerc(g, s) { el('circle', Object.assign({ cx: s.x, cy: s.y, r: s.r, 'stroke-width': 1.2 }, UMPLERE[s.umplere] || UMPLERE.alb, NSS), g); },
    // componentă de schemă: dreptunghi cu numele în mijloc (sursa, butonul, banda, doza)
    simbol(g, s, u) {
      el('rect', Object.assign({ x: s.x, y: s.y, width: s.w, height: s.h, rx: Math.min(s.w, s.h) * .12, 'stroke-width': 1.3 }, UMPLERE[s.umplere] || UMPLERE.alb, NSS), g);
      const fs = 11 * u, rs = (s.text || '').split('\n');
      const t = el('text', { x: s.x + s.w / 2, y: s.y + s.h / 2 - (rs.length - 1) * fs * .6 + fs * .35, 'font-size': fs, 'text-anchor': 'middle', fill: s.umplere === 'negru' || s.umplere === 'cauciuc' ? '#fff' : '#1f2937', 'font-weight': 600 }, g);
      rs.forEach((r, i) => el('tspan', { x: s.x + s.w / 2, dy: i ? fs * 1.2 : 0 }, t, r));
    },
    cota(g, s, u) {
      const c = s.culoare === 'intre' ? '#1d4ed8' : '#b42318', [ax, ay] = s.a, [bx, by] = s.b, fs = 11.5 * u;
      for (const m of s.martori || []) linie(g, m[0], m[1], m[2], m[3], c, .8, '3 3');
      linie(g, ax, ay, bx, by, c, 1.1);
      for (const [x, y] of [s.a, s.b]) linie(g, x - 2.5 * u, y + 2.5 * u, x + 2.5 * u, y - 2.5 * u, c, 1.6);
      const vert = Math.abs(ax - bx) < 1e-6, L = Math.hypot(bx - ax, by - ay), lat = (s.text.length * .6 + .8) * fs;
      const st = s.parte === 'st', a = { fill: c, 'font-weight': 700 };
      if (vert && L >= lat) {
        const x = st ? ax - 4 * u : ax + 4 * u + fs * .8, y = (ay + by) / 2;
        text(g, x, y, s.text, fs, Object.assign(a, { 'text-anchor': 'middle', transform: `rotate(-90 ${x} ${y})` }));
      } else if (vert) {
        text(g, st ? ax - 5 * u : ax + 5 * u, (ay + by) / 2 + fs * .35, s.text, fs, Object.assign(a, { 'text-anchor': st ? 'end' : 'start' }));
      } else {
        text(g, (ax + bx) / 2, s.parte === 'jos' ? ay + 4 * u + fs * .8 : ay - 4 * u, s.text, fs, Object.assign(a, { 'text-anchor': 'middle' }));
      }
    },
    eticheta(g, s, u) {
      const v = P.vedere || P.det.vedere, fs = 12 * u, anc = s.anc || 'start';
      if (P.numere) {
        // pe ecran îngust: un număr în cerc, cu linia spre punct; textul apare în lista „Pe desen”
        const nr = P.legenda.push(s.text), r = 8.5 * u, cx = anc === 'end' ? s.x - r : s.x + r, cy = s.y - fs * .35;
        if (s.spre) {
          const [px, py] = s.spre;
          el('path', Object.assign({ d: `M${cx},${cy} L${px},${py}`, fill: 'none', stroke: '#1f2937', 'stroke-width': 1 }, NSS), g);
          el('circle', { cx: px, cy: py, r: 2.6 * u, fill: '#1f2937', stroke: '#fff', 'stroke-width': .8 * u }, g);
        }
        el('circle', { cx, cy, r, fill: '#1f2937', stroke: '#fff', 'stroke-width': 1.4 * u }, g);
        el('text', { x: cx, y: cy + fs * .36, 'font-size': fs * .95, 'text-anchor': 'middle', fill: '#fff', 'font-weight': 700 }, g, String(nr));
        return;
      }
      const lat = s.lat || (anc === 'end' ? s.x - v.x0 : v.x1 - s.x) - .5;
      const rs = randuri(s.text, fs, lat);
      if (s.spre) {
        const [px, py] = s.spre, lx = anc === 'end' ? s.x - .4 : s.x + .4;
        el('path', Object.assign({ d: `M${lx},${s.y - fs * 1.05} L${px},${py}`, fill: 'none', stroke: '#1f2937', 'stroke-width': 1 }, NSS), g);
        el('circle', { cx: px, cy: py, r: 2.6 * u, fill: '#1f2937', stroke: '#fff', 'stroke-width': .8 * u }, g);
      }
      const t = text(g, s.x, s.y, '', fs, { fill: '#1f2937', 'text-anchor': anc, 'font-weight': 600 });
      rs.forEach((r, i) => el('tspan', { x: s.x, dy: i ? fs * 1.2 : 0 }, t, r));
    },
  };

  // ---------------------------------------------------------------- animații (Web Animations API)
  function animeaza(g, s, i) {
    const tip = reducere() ? 'apare' : s.anim || ({ structura: 'din-perete', dreptunghi: 'din-perete', roca: 'creste', linie: 'deseneaza', tub: 'pop', profil: 'din-camera',
      lumina: 'lumina', ochi: 'apare', contur: 'apare', cota: 'apare', eticheta: 'apare', text: 'apare', focar: 'din-dreapta', flacara: 'lumina',
      poligon: 'din-perete', fir: 'deseneaza', cerc: 'pop', simbol: 'pop' })[s.tip] || 'apare';
    const o = { duration: 850, delay: 120 + i * 380, easing: 'cubic-bezier(.2, .7, .2, 1)', fill: 'backwards' };
    const b = g.getBBox();
    g.style.transformBox = 'fill-box';
    if (tip === 'din-perete') g.animate([{ transform: `translateY(${-Math.min(b.height + 2, 6)}px)`, opacity: 0 }, { transform: 'none', opacity: 1 }], o);
    else if (tip === 'din-dreapta') g.animate([{ transform: `translateX(${Math.min(b.width, 14)}px)`, opacity: 0 }, { transform: 'none', opacity: 1 }], Object.assign(o, { duration: 1100 }));
    else if (tip === 'din-stanga') g.animate([{ transform: `translateX(${-Math.min(b.width, 6)}px)`, opacity: 0 }, { transform: 'none', opacity: 1 }], o);
    else if (tip === 'din-camera') g.animate([{ transform: `translateY(${Math.max(b.height, 4)}px)`, opacity: 0 }, { transform: 'none', opacity: 1 }], o);
    else if (tip === 'creste') { g.style.transformOrigin = '50% 0'; g.animate([{ transform: 'scaleY(0)' }, { transform: 'none' }], Object.assign(o, { duration: 1300 })); }
    else if (tip === 'pop') { g.style.transformOrigin = '50% 50%'; g.animate([{ transform: 'scale(.2)', opacity: 0 }, { transform: 'none', opacity: 1 }], o); }
    else if (tip === 'lumina') g.animate([{ opacity: 0 }, { opacity: 1 }], Object.assign(o, { duration: 1500 }));
    else if (tip === 'deseneaza') {
      g.querySelectorAll('polyline, path, line').forEach(p => {
        // pathLength = 1 doar cât ține animația; altfel linia întreruptă ar deveni continuă
        p.setAttribute('pathLength', 1);
        const an = p.animate([{ strokeDasharray: '1 1', strokeDashoffset: 1 }, { strokeDasharray: '1 1', strokeDashoffset: 0 }], Object.assign({}, o, { duration: 1200, fill: 'both' }));
        an.onfinish = () => { p.removeAttribute('pathLength'); an.cancel(); };
      });
    } else g.animate([{ opacity: 0 }, { opacity: 1 }], o);
    return o.delay + o.duration;
  }

  // ---------------------------------------------------------------- desenul pasului
  const vb = v => `${v.x0} ${v.y0} ${v.x1 - v.x0} ${v.y1 - v.y0}`;
  // mișcarea de cameră dintre vederea întreagă și cea mărită a unui pas
  function mutaVederea(a, b) {
    cancelAnimationFrame(P.rafV);
    const t0 = performance.now(), ease = x => 1 - Math.pow(1 - x, 3);
    const pas = now => {
      const x = ease(Math.min(1, (now - t0) / 750)), m = k => a[k] + (b[k] - a[k]) * x;
      P.svg.setAttribute('viewBox', vb({ x0: m('x0'), x1: m('x1'), y0: m('y0'), y1: m('y1') }));
      if (x < 1) P.rafV = requestAnimationFrame(pas);
    };
    P.rafV = requestAnimationFrame(pas);
  }

  function deseneaza(cuAnimatie) {
    const d = P.det, k = P.k, pas = d.pasi[k], svg = P.svg, v = pas.vedere || d.vedere;
    const r = svg.getBoundingClientRect();
    if (!r.width || !r.height) return;
    svg.getAnimations({ subtree: true }).forEach(a => a.cancel());
    cancelAnimationFrame(P.rafV);
    const inainte = P.vedere, muta = cuAnimatie && !reducere() && inainte && vb(inainte) !== vb(v);
    P.vedere = v;
    svg.setAttribute('viewBox', vb(muta ? inainte : v));
    if (muta) mutaVederea(inainte, v);
    const u = Math.max((v.x1 - v.x0) / r.width, (v.y1 - v.y0) / r.height);   // cm pe pixel
    P.numere = r.width < 520;
    P.legenda = [];
    svg.textContent = '';
    defs(svg);
    const prima = {};
    d.pasi.forEach((p, i) => p.apar.forEach(id => { if (!(id in prima)) prima[id] = i; }));
    const temporar = s => TEMP.has(s.tip) || s.temporar;
    const vizibil = s => temporar(s) ? pas.apar.includes(s.id) : prima[s.id] !== undefined && prima[s.id] <= k;
    const nou = s => pas.apar.includes(s.id) && (temporar(s) || prima[s.id] === k);
    const gF = el('g', {}, svg), gC = el('g', {}, svg), gE = el('g', {}, svg), contururi = [];
    let sfarsit = 0;
    for (const s of d.forme) {
      if (!vizibil(s) || !FORME[s.tip]) continue;
      const g = el('g', { class: 'ps-forma' }, s.tip === 'eticheta' ? gE : s.tip === 'cota' ? gC : gF);
      FORME[s.tip](g, s, u);
      if (nou(s) && cuAnimatie) sfarsit = Math.max(sfarsit, animeaza(g, s, pas.apar.indexOf(s.id)));
      if (k && nou(s) && !temporar(s) && !['text', 'contur', 'lumina', 'ochi', 'flacara'].includes(s.tip)) contururi.push([g, pas.apar.indexOf(s.id)]);
    }
    // conturul albastru arată ce s-a adăugat la acest pas
    for (const [g, i] of contururi) {
      const b = g.getBBox(), p = 3 * u;
      const c = el('rect', Object.assign({ x: b.x - p, y: b.y - p, width: b.width + 2 * p, height: b.height + 2 * p, rx: 4 * u, fill: 'none', stroke: '#2563eb', 'stroke-width': 1.6, 'stroke-dasharray': '5 3', class: 'ps-nou' }, NSS), gF);
      if (cuAnimatie && !reducere()) c.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 400, delay: 120 + i * 380 + 700, fill: 'backwards' });
    }
    const leg = P.dlg.querySelector('.ps-legenda');
    if (leg) leg.innerHTML = P.numere && P.legenda.length ? `<h4>Pe desen</h4><ol>${P.legenda.map(t => `<li>${esc(t)}</li>`).join('')}</ol>` : '';
    return sfarsit;
  }

  function textPas() {
    const d = P.det, k = P.k, p = d.pasi[k], st = STARE[p.stare] || STARE.proiect, n = d.pasi.length - 1;
    const lista = (a, cls) => a && a.length ? `<ul class="${cls}">${a.map(x => `<li>${esc(x)}</li>`).join('')}</ul>` : '';
    const aplica = P.elemente.length ? `<div class="ps-aplica"><h4>Se aplică la</h4><div class="ps-els">${P.elemente.map(e =>
      `<button type="button" class="badge" data-p="arata" data-per="${esc(e.perete)}" data-el="${esc(e.id)}" style="background:${e.culoare}" title="${esc(e.id)}: ${esc(e.nume)} (${esc(e.unde)}). Arată pe perete">${esc(e.et || e.id)}</button>`).join('')}</div>
      <small>Un cod închide fereastra și arată elementul pe peretele lui.</small></div>` : '';
    P.dlg.querySelector('.ps-text').innerHTML = `
      <div class="ps-meta"><span class="ps-nr">${k ? `Pasul ${k} din ${n}` : 'Pe scurt'}</span>
        <span class="ps-cine">${esc(p.cine)}</span>${P.reluat ? '<span class="ps-reluat">aici ai rămas data trecută</span>' : ''}</div>
      <h3>${esc(p.titlu)}</h3>
      ${k ? '' : `<p class="ps-despre">${esc(d.subtitlu)}. ${esc(d.nota)}</p>`}
      <p>${esc(p.text)}</p>
      ${lista(p.puncte, 'ps-puncte')}
      <div class="ps-legenda"></div>
      ${p.atentie ? `<p class="ps-atentie">${esc(p.atentie)}</p>` : ''}
      ${p.verifica ? `<h4>${k ? 'De verificat' : 'Înainte de început'}</h4>${lista(p.verifica, 'ps-verifica')}` : ''}
      <p class="ps-sursa"><span class="ps-stare" style="--c:${st.culoare}"><i></i>${st.nume}</span> Sursa: ${esc(p.sursa)}</p>
      ${aplica}`;
    const nav = P.dlg.querySelector('.ps-puncte-nav'), vazute = citeste(d.id).vazute;
    nav.querySelectorAll('button').forEach((b, i) => {
      b.classList.toggle('on', i === k); b.classList.toggle('vazut', i !== k && vazute.includes(i)); b.setAttribute('aria-current', i === k ? 'step' : 'false');
      if (i === k && nav.scrollWidth > nav.clientWidth) nav.scrollTo({ left: b.offsetLeft - nav.clientWidth / 2, behavior: 'smooth' });
    });
    P.dlg.querySelector('[data-p="inapoi"]').disabled = k === 0;
    P.dlg.querySelector('[data-p="inainte"]').disabled = k === n;
  }

  function mergiLa(k, cuAnimatie = true) {
    P.k = Math.max(0, Math.min(P.det.pasi.length - 1, k));
    noteaza(P.det.id, P.k);
    textPas();
    P.reluat = false;
    P.dlg.querySelector('.ps-text').scrollTop = 0;
    const t = deseneaza(cuAnimatie);
    clearTimeout(P.timer);
    if (P.reda) {
      if (P.k === P.det.pasi.length - 1) seteazaReda(false);
      else P.timer = setTimeout(() => mergiLa(P.k + 1), (t || 0) + 4200);
    }
  }
  function seteazaReda(da) {
    P.reda = da;
    const b = P.dlg.querySelector('[data-p="reda"]');
    b.innerHTML = da ? `${ic('pauza')}Oprește` : `${ic('reda')}<span class="ps-et">Redă<span class="ps-lung"> toți pașii</span></span>`;
    b.setAttribute('aria-pressed', da);
    if (!da) clearTimeout(P.timer);
  }

  // ---------------------------------------------------------------- fereastra
  function construieste() {
    const dlg = document.createElement('dialog');
    dlg.className = 'pasi';
    dlg.setAttribute('aria-labelledby', 'ps-titlu');
    dlg.innerHTML = `
      <header class="ps-cap"><span class="badge ps-cod"></span>
        <div class="ps-titluri"><h2 id="ps-titlu"></h2><span class="ps-sub"></span></div>
        <button type="button" class="buton ps-link" data-p="link" title="Trimite pe WhatsApp linkul spre pasul de acum" hidden>${ic('mesaj')}<span>Trimite linkul</span></button>
        <button type="button" class="buton-icon" data-p="inchide" aria-label="Închide">${ic('inchide')}</button></header>
      <div class="ps-corp">
        <figure class="ps-scena"><svg xmlns="${NS}" role="img" aria-label="Secțiunea detaliului"></svg>
          <figcaption></figcaption></figure>
        <section class="ps-text" aria-live="polite"></section>
      </div>
      <footer class="ps-jos">
        <div class="ps-puncte-nav" role="group" aria-label="Pașii"></div>
        <div class="ps-butoane">
          <button type="button" class="buton" data-p="inapoi">${ic('inapoi')}Înapoi</button>
          <button type="button" class="buton principal" data-p="reda" aria-pressed="false"></button>
          <button type="button" class="buton" data-p="reia" title="Reia animația pasului" aria-label="Reia animația pasului">${ic('reia')}</button>
          <button type="button" class="buton" data-p="inainte">Înainte${ic('inainte')}</button>
        </div>
      </footer>`;
    document.body.appendChild(dlg);
    dlg.addEventListener('click', ev => {
      if (ev.target === dlg) return dlg.close();
      const b = ev.target.closest('[data-p]');
      if (!b || b.disabled) return;
      const a = b.dataset.p;
      if (a === 'inchide') dlg.close();
      else if (a === 'inapoi') mergiLa(P.k - 1);
      else if (a === 'inainte') mergiLa(P.k + 1);
      else if (a === 'reia') mergiLa(P.k);
      else if (a === 'pas') mergiLa(+b.dataset.k);
      else if (a === 'arata' && P.arata) { P.arata(b.dataset.per, b.dataset.el); dlg.close(); }
      else if (a === 'link' && P.link) {
        const d = P.det, n = d.pasi.length - 1, unde = P.k ? `pasul ${P.k} din ${n}` : 'pe scurt';
        window.open('https://wa.me/?text=' + encodeURIComponent(`${d.id} — ${d.nume}, ${unde}: ${P.link(P.k)}`), '_blank', 'noopener');
      }
      else if (a === 'reda') { const da = !P.reda; seteazaReda(da); if (da) mergiLa(P.k === P.det.pasi.length - 1 ? 0 : P.k + 1); }
    });
    dlg.addEventListener('keydown', ev => {
      if (ev.target.matches('input, textarea')) return;
      if (ev.key === 'ArrowRight') { ev.preventDefault(); mergiLa(P.k + 1); }
      else if (ev.key === 'ArrowLeft') { ev.preventDefault(); mergiLa(P.k - 1); }
    });
    const corp = dlg.querySelector('.ps-corp');
    let g0 = null;
    corp.addEventListener('pointerdown', ev => { g0 = ev.pointerType === 'mouse' ? null : { x: ev.clientX, y: ev.clientY, t: ev.timeStamp }; });
    corp.addEventListener('pointerup', ev => {
      if (!g0) return;
      const dx = ev.clientX - g0.x, dy = ev.clientY - g0.y, dt = ev.timeStamp - g0.t;
      g0 = null;
      if (Math.abs(dx) > 60 && Math.abs(dx) > 1.6 * Math.abs(dy) && dt < 900) { seteazaReda(false); mergiLa(P.k + (dx < 0 ? 1 : -1)); }
    });
    corp.addEventListener('pointercancel', () => { g0 = null; });
    dlg.addEventListener('close', () => { seteazaReda(false); P.vedere = null; cancelAnimationFrame(P.rafV); P.svg.getAnimations({ subtree: true }).forEach(a => a.cancel()); });
    P.dlg = dlg;
    P.svg = dlg.querySelector('.ps-scena svg');
    let t = 0;
    P.ro = new ResizeObserver(() => { if (!dlg.open) return; cancelAnimationFrame(t); t = requestAnimationFrame(() => deseneaza(false)); });
    P.ro.observe(P.svg);
  }

  // opt.pas: pasul de la care se deschide (din linkul direct); opt.link(k): adresa pasului k, pentru „Trimite linkul”
  function deschide(id, opt = {}) {
    const d = window.DETALII && window.DETALII[id];
    if (!d) return false;
    if (!P.dlg) construieste();
    P.det = d;
    P.link = opt.link || null;
    P.elemente = opt.elemente || [];
    P.arata = opt.arata || null;
    P.dlg.querySelector('[data-p="link"]').hidden = !P.link;
    const dlg = P.dlg;
    dlg.querySelector('.ps-cod').textContent = d.id;
    dlg.querySelector('#ps-titlu').textContent = d.nume;
    dlg.querySelector('.ps-sub').textContent = `${d.subtitlu}. ${d.nota}`;
    // „orientare”: unde e peretele și unde e camera pe desen; D-06 e văzut de sus
    dlg.querySelector('figcaption').textContent = `${d.orientare || 'Sus: peretele existent. Jos: camera.'}${d.schema ? '' : ' Cote în cm.'} Albastru: ce se adaugă acum.`;
    dlg.querySelector('.ps-puncte-nav').innerHTML = d.pasi.map((p, i) =>
      `<button type="button" data-p="pas" data-k="${i}" title="${i ? i + '. ' : ''}${esc(p.titlu)}" aria-label="${i ? 'Pasul ' + i : 'Pe scurt'}: ${esc(p.titlu)}">${i || '•'}</button>`).join('');
    seteazaReda(false);
    dlg.showModal();
    // fără pas cerut (din link): de unde s-a rămas, dacă pașii nu s-au terminat
    const st = citeste(id), n = d.pasi.length - 1, cerut = opt.pas !== undefined && opt.pas !== null;
    const start = cerut ? +opt.pas || 0 : st.ultim > 0 && st.ultim < n ? st.ultim : 0;
    P.reluat = !cerut && start > 0;
    mergiLa(start);
    return true;
  }

  // desenul întreg al detaliului, fără animații: formele care rămân după ultimul pas, fără cote, etichete, texte,
  // forme „temporar” și ochiul privitorului. Pentru cardurile din pagina camerelor (index.html).
  function miniatura(id, svg) {
    const d = window.DETALII && window.DETALII[id];
    if (!d || !svg) return false;
    const pus = new Set(d.pasi.flatMap(p => p.apar));
    svg.setAttribute('viewBox', vb(d.vedere));
    svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    svg.textContent = '';
    defs(svg);
    const u = Math.max((d.vedere.x1 - d.vedere.x0) / 240, (d.vedere.y1 - d.vedere.y0) / 150);   // miniatura are ~240 × 150 px
    for (const s of d.forme) {
      if (!pus.has(s.id) || TEMP.has(s.tip) || s.temporar || ['text', 'ochi'].includes(s.tip) || !FORME[s.tip]) continue;
      FORME[s.tip](el('g', {}, svg), s, u);
    }
    return true;
  }

  window.Pasi = { deschide, miniatura, progres, dialog: () => P.dlg, numar: id => window.DETALII && window.DETALII[id] ? window.DETALII[id].pasi.length - 1 : 0 };
})();
