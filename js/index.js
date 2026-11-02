/* Pagina camerelor: secțiunea „Pași de montaj animați”, cu desenul fiecărui detaliu, semnul ▶ pe cardurile camerelor
   cu pași și revizia fiecărei camere. Citește datele camerelor (window.CAMERE) și ale detaliilor (window.DETALII),
   aceleași fișiere ca paginile camerelor; desenul detaliului îl face Pasi.miniatura (js/pasi.js).
   Fără JavaScript, pagina rămâne lista statică a camerelor, cu randările. */
(function () {
  'use strict';
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const reda = '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5l12 7-12 7z"/></svg>';
  const C = window.CAMERE || {}, D = window.DETALII || {};
  const vederi = c => c.pereti.concat(c.tavan && c.tavan.tip === 'tavan' ? [c.tavan] : []);
  const progres = id => { try { const st = JSON.parse(localStorage.getItem('desene:pasi:' + id)); return st ? st.vazute.filter(k => k > 0).length : 0; } catch (_) { return 0; } };
  const data = s => /^\d{4}-\d\d-\d\d$/.test(s || '') ? s.split('-').reverse().join('.') : s;

  // pentru fiecare detaliu cu pași: camera și pereții pe care apare
  const lista = [];
  for (const [cid, c] of Object.entries(C)) {
    const n = {};
    for (const v of vederi(c)) for (const e of v.elemente) {
      if (!e.detaliu || !D[e.detaliu]) continue;
      (n[e.detaliu] = n[e.detaliu] || []).includes(v) || n[e.detaliu].push(v);
    }
    for (const [id, pereti] of Object.entries(n)) lista.push({ id, d: D[id], cid, c, pereti });
    const a = document.querySelector(`.camere a[href^="${cid}.html"]`);
    if (!a) continue;
    const rev = a.querySelector('.card-rev');
    if (rev && c.revizie && c.revizie.nr) rev.textContent = `Revizia ${c.revizie.nr} · ${data(c.revizie.data)}`;
    const k = Object.keys(n).length;
    if (k) a.querySelector('.card-vizual').insertAdjacentHTML('beforeend', `<span class="tag-pasi">${reda}${k} ${k === 1 ? 'detaliu' : 'detalii'} cu pași</span>`);
  }
  if (!lista.length) return;
  const unde = x => x.pereti.length === 1 ? `${x.c.nume}, ${x.pereti[0].nume.replace(/^Peretele/, 'peretele').replace(/^Tavanul/, 'tavanul')}` : `${x.c.nume}, ${x.pereti.length} pereți`;
  const html = lista.map(x => {
    const n = x.d.pasi.length - 1, v = progres(x.id);
    const href = `${x.cid}.html#${encodeURIComponent(x.pereti[0].id)}?pasi=${encodeURIComponent(x.id).replace(/'/g, '%27')}`;
    return `<a class="card card-pasi" href="${href}" data-id="${esc(x.id)}">
      <span class="card-vizual"><svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Secțiunea detaliului ${esc(x.id)}"></svg>
        <span class="pp-semn">${reda}</span></span>
      <span class="card-text"><b>${esc(x.d.nume)}</b><small><span class="badge">${esc(x.id)}</span> ${esc(unde(x))}</small>
        <span class="card-rev">${n} pași${v ? ` · ai văzut ${v >= n ? 'tot' : v + ' din ' + n}` : ''}</span></span></a>`;
  }).join('');
  document.querySelector('.camere').insertAdjacentHTML('beforebegin', `<section class="index-pasi"><h2>Pași de montaj animați</h2><div class="carduri">${html}</div></section><h2 class="index-titlu">Camerele</h2>`);
  if (window.Pasi && Pasi.miniatura) for (const a of document.querySelectorAll('.card-pasi')) Pasi.miniatura(a.dataset.id, a.querySelector('svg'));
})();
