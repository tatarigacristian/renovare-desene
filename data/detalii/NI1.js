// Nișa din duș cu banda H1 (NI1) — pașii de montaj, pentru fereastra animată din desene/js/pasi.js.
// Format: JSON strict după „= ”. Secțiune verticală prin nișă, în cm: x de la fața zidului exterior spre duș
// (fața brută a măștii MN1 la 15), y = −h (h de la pardoseala finită). Grosimile straturilor sunt schematice.
// Câmpurile sunt descrise în desene/README.md.
window.DETALII = window.DETALII || {};
window.DETALII["NI1"] = {
 "id": "NI1",
 "nume": "Nișa din duș cu banda H1",
 "subtitlu": "Secțiune verticală prin nișa din masca dușului MN1, perpendiculară pe peretele cu nișa, privind spre peretele de est",
 "orientare": "Stânga: zidul exterior. Dreapta: dușul. Sus: tavanul fals TF1 și placa.",
 "sursa": "A.27 B02 și B03 (30.10.2026); A.01, A.03, A.06; specs/04, specs/06 G2, specs/07 G; analiza/11 L5, BA11",
 "revizie": {"nr": 1, "data": "2026-11-02"},
 "nota": "Ordinea pașilor e propunerea noastră. Se confirmă cu arhitecta, cu echipa de gips-carton, cu electricianul și cu faianțarul.",
 "vedere": {"x0": -16, "x1": 34, "y0": -130, "y1": -86},
 "forme": [
  {"id": "zid", "tip": "dreptunghi", "x": -22, "y": -250, "w": 22, "h": 258, "umplere": "zid"},
  {"id": "placa", "tip": "dreptunghi", "x": -22, "y": -262, "w": 172, "h": 12, "umplere": "ciment"},
  {"id": "pardoseala", "tip": "dreptunghi", "x": 0, "y": 0, "w": 150, "h": 8, "umplere": "sapa"},
  {"id": "fantoma", "tip": "contur", "dreptunghiuri": [[0, -225.0, 15.0, 225.0], [0, -120.0, 16.9, 25.0], [15.0, -250, 83, 25.0]], "temporar": true},
  {"id": "str-jos", "tip": "structura", "x": 0, "y": -91.85, "w": 13.75, "h": 91.85, "profile": []},
  {"id": "str-sus", "tip": "structura", "x": 0, "y": -225.0, "w": 13.75, "h": 101.85, "profile": []},
  {"id": "rama-jos", "tip": "dreptunghi", "x": 0, "y": -91.85, "w": 13.75, "h": 0.6, "umplere": "otel"},
  {"id": "rama-sus", "tip": "dreptunghi", "x": 0, "y": -123.75, "w": 13.75, "h": 0.6, "umplere": "otel"},
  {"id": "tf1-str", "tip": "structura", "x": 15.0, "y": -250, "w": 81.75, "h": 23.75, "profile": []},
  {"id": "tf1", "tip": "dreptunghi", "x": 15.0, "y": -226.25, "w": 83.0, "h": 1.25, "umplere": "gips"},
  {"id": "tf1-latura", "tip": "dreptunghi", "x": 96.75, "y": -250, "w": 1.25, "h": 23.75, "umplere": "gips"},
  {"id": "tub", "tip": "linie", "puncte": [[6, -240], [6, -124.35], [11.6, -124.35]]},
  {"id": "fir-plus", "tip": "fir", "puncte": [[6.4, -240], [6.4, -124.05], [12.2, -124.05], [12.2, -119.65]], "culoare": "v24-plus", "gros": 1.8},
  {"id": "fir-minus", "tip": "fir", "puncte": [[5.6, -240], [5.6, -124.65], [12.7, -124.65], [12.7, -119.65]], "culoare": "v24-minus", "gros": 1.8},
  {"id": "d9", "tip": "simbol", "x": 40, "y": -247, "w": 34, "h": 16, "text": "spre D9\n(hol)", "umplere": "alb"},
  {"id": "fir-d9", "tip": "fir", "puncte": [[6, -240], [6, -239.5], [40, -239.5]], "culoare": "v24-plus", "gros": 1.8, "intrerupt": true},
  {"id": "placa-fata-jos", "tip": "dreptunghi", "x": 13.75, "y": -91.85, "w": 1.25, "h": 91.85, "umplere": "gips"},
  {"id": "placa-fata-sus", "tip": "dreptunghi", "x": 13.75, "y": -225.0, "w": 1.25, "h": 101.85, "umplere": "gips"},
  {"id": "placa-jos", "tip": "dreptunghi", "x": 0, "y": -93.1, "w": 15.0, "h": 1.25, "umplere": "gips"},
  {"id": "placa-sus", "tip": "dreptunghi", "x": 0, "y": -123.15, "w": 15.0, "h": 1.25, "umplere": "gips"},
  {"id": "h1", "tip": "poligon", "puncte": [[15.0, 0.0], [15.0, -93.1], [0, -93.1], [0, -121.9], [15.0, -121.9], [15.0, -225.0], [15.3, -225.0], [15.3, -121.6], [0.3, -121.6], [0.3, -93.4], [15.3, -93.4], [15.3, 0.0]], "umplere": "hidroizolatie"},
  {"id": "b-spate-jos", "tip": "poligon", "puncte": [[0, -98.1], [0.3, -98.1], [0.3, -93.4], [5, -93.4], [5, -93.1], [0, -93.1]], "umplere": "banda-hartie"},
  {"id": "b-spate-sus", "tip": "poligon", "puncte": [[0, -116.9], [0.3, -116.9], [0.3, -121.6], [5, -121.6], [5, -121.9], [0, -121.9]], "umplere": "banda-hartie"},
  {"id": "b-fata-jos", "tip": "poligon", "puncte": [[11.0, -93.1], [15.0, -93.1], [15.0, -89.1], [15.3, -89.1], [15.3, -93.4], [11.0, -93.4]], "umplere": "banda-hartie"},
  {"id": "b-fata-sus", "tip": "poligon", "puncte": [[11.0, -121.9], [15.0, -121.9], [15.0, -125.9], [15.3, -125.9], [15.3, -121.6], [11.0, -121.6]], "umplere": "banda-hartie"},
  {"id": "manseta", "tip": "dreptunghi", "x": 11.5, "y": -121.9, "w": 1.9, "h": 0.3, "umplere": "banda-hartie"},
  {"id": "h2", "tip": "poligon", "puncte": [[15.3, 0.0], [15.3, -93.4], [0.3, -93.4], [0.3, -121.6], [15.3, -121.6], [15.3, -225.0], [15.6, -225.0], [15.6, -121.3], [0.6, -121.3], [0.6, -93.7], [15.6, -93.7], [15.6, 0.0]], "umplere": "folie"},
  {"id": "adeziv", "tip": "poligon", "puncte": [[15.6, 0.0], [15.6, -93.7], [0.6, -93.7], [0.6, -121.3], [15.6, -121.3], [15.6, -225.0], [16.0, -225.0], [16.0, -120.9], [1.0, -120.9], [1.0, -94.1], [16.0, -94.1], [16.0, 0.0]], "umplere": "adeziv"},
  {"id": "f-r1", "tip": "dreptunghi", "x": 16.0, "y": -59.7, "w": 0.9, "h": 59.7, "umplere": "faianta"},
  {"id": "f-r2", "tip": "dreptunghi", "x": 16.0, "y": -94.1, "w": 0.9, "h": 34.1, "umplere": "faianta"},
  {"id": "f-r3", "tip": "dreptunghi", "x": 16.0, "y": -179.7, "w": 0.9, "h": 59.7, "umplere": "faianta"},
  {"id": "f-r4", "tip": "dreptunghi", "x": 16.0, "y": -225.0, "w": 0.9, "h": 45.0, "umplere": "faianta"},
  {"id": "f-jos", "tip": "dreptunghi", "x": 1.0, "y": -95.0, "w": 15.9, "h": 0.9, "umplere": "faianta"},
  {"id": "f-fund", "tip": "dreptunghi", "x": 1.0, "y": -120.0, "w": 0.9, "h": 25.0, "umplere": "faianta"},
  {"id": "f-sus", "tip": "dreptunghi", "x": 1.0, "y": -120.9, "w": 15.0, "h": 0.9, "umplere": "faianta"},
  {"id": "profil", "tip": "dreptunghi", "x": 11.6, "y": -120.0, "w": 1.66, "h": 1.06, "umplere": "otel"},
  {"id": "banda-led", "tip": "dreptunghi", "x": 11.9, "y": -119.85, "w": 1.06, "h": 0.25, "umplere": "banda"},
  {"id": "difuzor", "tip": "dreptunghi", "x": 11.7, "y": -119.14, "w": 1.46, "h": 0.2, "umplere": "alb"},
  {"id": "lumina", "tip": "lumina", "puncte": [[13.16, -118.94], [16.4, -95.2], [2.1, -95.2], [2.1, -116.0], [11.7, -118.94]]},
  {"id": "t-zid", "tip": "text", "x": -21, "y": -236, "text": "zidul exterior"},
  {"id": "t-dus", "tip": "text", "x": 148, "y": -236, "text": "dușul →", "anc": "end"},
  {"id": "c-95", "tip": "cota", "a": [24, 0], "b": [24, -95.0], "text": "95", "parte": "st", "martori": [[16.9, -95.0, 25, -95.0]]},
  {"id": "c-25", "tip": "cota", "a": [24, -95.0], "b": [24, -120.0], "text": "25", "parte": "st", "martori": [[16.9, -120.0, 25, -120.0]]},
  {"id": "c-225", "tip": "cota", "a": [90, 0], "b": [90, -225.0], "text": "225", "parte": "st"},
  {"id": "c-15", "tip": "cota", "a": [0, -136], "b": [15.0, -136], "text": "15", "martori": [[0, -136, 0, -120.0], [15.0, -136, 15.0, -123.15]]},
  {"id": "c-25z", "tip": "cota", "a": [21, -95.0], "b": [21, -120.0], "text": "25", "parte": "st", "martori": [[16.9, -95.0, 22, -95.0], [16.9, -120.0, 22, -120.0]]},
  {"id": "c-15z", "tip": "cota", "a": [1.9, -126.5], "b": [16.9, -126.5], "text": "15", "martori": [[1.9, -126.5, 1.9, -120.0], [16.9, -126.5, 16.9, -120.9]]},
  {"id": "e0-tf1", "tip": "eticheta", "x": 34, "y": -205, "text": "caseta TF1, fața la 225, până la linia peretelui de sticlă", "spre": [60, -226], "lat": 110},
  {"id": "e0-masca", "tip": "eticheta", "x": 34, "y": -165, "text": "masca dușului MN1: gips-carton RU, 15 cm, de la pardoseală la tavanul fals", "spre": [8, -185], "lat": 110},
  {"id": "e0-nisa", "tip": "eticheta", "x": 34, "y": -135, "text": "nișa NI1: 105,6 × 25 cm, adâncă de 15, între 95 și 120", "spre": [9, -108], "lat": 110},
  {"id": "e0-banda", "tip": "eticheta", "x": 34, "y": -78, "text": "banda H1 sub fața de sus a nișei", "spre": [13, -119], "lat": 110},
  {"id": "e1-str", "tip": "eticheta", "x": 24, "y": -150, "text": "structura măștii: profile, la 15 cm de zid cu tot cu placa", "spre": [7, -175], "lat": 70},
  {"id": "e1-rama", "tip": "eticheta", "x": 24, "y": -112, "text": "profilele ramei, sus și jos: golul brut e mai înalt decât 25 cu straturile", "spre": [7, -91.5], "lat": 70},
  {"id": "e2-tub", "tip": "eticheta", "x": 24, "y": -200, "text": "tubul cablului de 24 V, din caseta TF1 până deasupra nișei", "spre": [6, -180], "lat": 70},
  {"id": "e2-d9", "tip": "eticheta", "x": 24, "y": -160, "text": "sursa D9 e comandată de butonul H din întrerupătorul IH (hol)", "spre": [52, -233], "lat": 70},
  {"id": "e3-placi", "tip": "eticheta", "x": 24, "y": -130, "text": "plăci RU pe fața măștii și pe fețele nișei; fundul e zidul", "spre": [14.4, -150], "lat": 70},
  {"id": "e3-gaura", "tip": "eticheta", "x": 24, "y": -104, "text": "gaura cablului în placa de sus", "spre": [12.45, -122.5], "lat": 70},
  {"id": "e4-banda", "tip": "eticheta", "x": 25, "y": -90, "text": "banda de colț, în colțuri și pe muchii", "spre": [0.15, -95.5], "lat": 18},
  {"id": "e4-manseta", "tip": "eticheta", "x": 25, "y": -112, "text": "manșeta la trecerea cablului", "spre": [12.45, -121.75], "lat": 18},
  {"id": "e4-strat1", "tip": "eticheta", "x": 25, "y": -100, "text": "amorsa și primul strat", "spre": [0.15, -105], "lat": 18},
  {"id": "e5-strat2", "tip": "eticheta", "x": 25, "y": -110, "text": "al doilea strat, pe toate fețele", "spre": [15.45, -124], "lat": 18},
  {"id": "e6-rost", "tip": "eticheta", "x": 25, "y": -112, "text": "rostul de la 120, la fața de sus a nișei", "spre": [16.5, -120.3], "lat": 18},
  {"id": "e6-jos", "tip": "eticheta", "x": 25, "y": -90, "text": "placa de jos acoperă muchia faianței de sub nișă", "spre": [16.3, -94.55], "lat": 18},
  {"id": "e6-fund", "tip": "eticheta", "x": 25, "y": -102, "text": "fundul: faianță pe zid", "spre": [1.5, -108], "lat": 18},
  {"id": "e8-lumina", "tip": "eticheta", "x": 25, "y": -100, "text": "lumina cade pe fundul și pe raftul nișei", "spre": [6, -104], "lat": 18},
  {"id": "e7-profil", "tip": "eticheta", "x": 17.5, "y": -114.5, "text": "profil ~16,6 × 10,6 mm, lipit sub fața de sus", "spre": [12.1, -119.05], "lat": 4.4},
  {"id": "e7-banda", "tip": "eticheta", "x": 17.5, "y": -117, "text": "banda 24 V, 3000K, IP67, ~105,6 cm", "spre": [12.8, -119.72], "lat": 4.4}
 ],
 "pasi": [
  {
   "titlu": "Ce se construiește",
   "cine": "toată echipa",
   "stare": "proiect",
   "vedere": {
    "x0": -24,
    "x1": 150,
    "y0": -264,
    "y1": 10
   },
   "apar": [
    "zid",
    "placa",
    "pardoseala",
    "fantoma",
    "t-zid",
    "t-dus",
    "c-95",
    "c-25",
    "c-225",
    "e0-masca",
    "e0-nisa",
    "e0-banda",
    "e0-tf1"
   ],
   "text": "Masca dușului MN1 e din gips-carton RU, adâncă de 15 cm, pe toată lățimea dușului, de la pardoseală până la tavanul fals. În ea e nișa NI1: 105,6 × 25 cm, adâncă de 15, între 95 și 120 cm, de la 30 cm de masca WC până la peretele de est. Sub fața de sus a nișei e banda H1. Nișa e hidroizolată și placată cu faianță pe toate fețele.",
   "puncte": [
    "Cotele 95, 120 și 15 sunt la fața faianței (A.27).",
    "Banda H1: 24 V, 3000K, IP67, în profil, pe toată lungimea nișei. Sursa e D9, în tavanul fals din hol; butonul H e în IH, în hol."
   ],
   "verifica": [
    "Banda: IP67 și locul profilului în nișă (analiza/11 L5). Planșele nu desenează profilul.",
    "Profilul: A.06 și specs/06 G2 cer profil slim de max. 12 mm; comparația din specs/04 dă un profil aplicat de ~16,6 × 10,6 mm.",
    "Traseul cablului de la hol până în duș (BA11).",
    "Fundul nișei e zidul exterior. Dacă fațada nu e izolată (analiza/12), în nișă poate apărea condens: de discutat cu arhitecta."
   ],
   "sursa": "A.27 B02 și B03 (105,6; 95 + 25; 15); A.01 („Mască raft duș”); elementele MN1, NI1, H1 și F6 din desen; specs/06 G2"
  },
  {
   "titlu": "Structura măștii și rama nișei",
   "cine": "echipa de gips-carton",
   "stare": "proiect",
   "vedere": {
    "x0": -14,
    "x1": 96,
    "y0": -262,
    "y1": -78
   },
   "apar": [
    "str-jos",
    "str-sus",
    "rama-jos",
    "rama-sus",
    "tf1-str",
    "tf1",
    "tf1-latura",
    "c-15",
    "e1-str",
    "e1-rama"
   ],
   "text": "Structura măștii se face pe toată lățimea dușului (136 cm), la 15 cm de zid cu tot cu placa. În ea se lasă golul nișei, pe 105,6 cm, cu profile orizontale sus și jos. Nișa ajunge până la zid: fundul ei e zidul exterior.",
   "puncte": [
    "Golul brut e mai înalt decât 25 cm cu grosimea plăcii RU, a hidroizolației, a adezivului și a faianței, sus și jos. Se calculează cu faianțarul, după placa aleasă.",
    "Fața de sus a nișei trebuie să cadă la 120, pe rostul faianței (pasul 6)."
   ],
   "verifica": [
    "Profilele ramei sunt orizontale (nivela).",
    "Lungimea golului dă 105,6 cm la fața faianței."
   ],
   "sursa": "elementele MN1 (A.01, A.03: 15) și NI1 (A.27 B02 și B03); propunerea noastră pentru golul brut"
  },
  {
   "titlu": "Tubul pentru cablul benzii H1",
   "cine": "electricianul",
   "stare": "propunere",
   "vedere": {
    "x0": -14,
    "x1": 96,
    "y0": -262,
    "y1": -78
   },
   "apar": [
    "tub",
    "fir-plus",
    "fir-minus",
    "d9",
    "fir-d9",
    "e2-tub",
    "e2-d9"
   ],
   "text": "Înainte de plăci, electricianul pozează tubul pentru cablul de 24 V: din caseta TF1, prin structura măștii, până deasupra nișei, la capătul benzii. Cablul vine de la sursa Push-DIM D9 din tavanul fals al holului.",
   "puncte": [
    "Pe unde trece cablul de la hol până la caseta TF1 nu e hotărât (BA11).",
    "Capătul benzii (spre masca WC sau spre peretele de est) se stabilește cu electricianul."
   ],
   "verifica": [
    "Cablul trece prin tub fără să se agațe.",
    "Capătul cablului iese prin locul găurii din placa de sus, cu rezervă pentru legătura benzii."
   ],
   "atentie": "Sursa rămâne în hol, în afara zonei umede. În duș ajunge doar tensiunea de 24 V.",
   "sursa": "elementul H1 (A.06; specs/06 G2); specs/04 (sursele băii în tavanul fals din hol, D9); analiza/11 BA11 și L7"
  },
  {
   "titlu": "Plăcile RU",
   "cine": "echipa de gips-carton",
   "stare": "proiect",
   "vedere": {
    "x0": -14,
    "x1": 96,
    "y0": -262,
    "y1": -78
   },
   "apar": [
    "placa-fata-jos",
    "placa-fata-sus",
    "placa-jos",
    "placa-sus",
    "e3-placi",
    "e3-gaura"
   ],
   "text": "Fața măștii și fețele nișei se închid cu plăci de gips-carton RU: jos, sus și latura dinspre masca WC. Fundul nișei rămâne zidul exterior, curățat și reparat; capătul de est al nișei e peretele de est. În placa de sus se face gaura pentru cablu, la capătul profilului.",
   "puncte": [
    "Propunem fundul nișei cu o pantă ușoară spre duș, ca apa să nu stea pe el. Panta se stabilește cu faianțarul."
   ],
   "verifica": [
    "Muchiile din față sunt drepte și în planul feței măștii.",
    "Zidul din fundul nișei e plan: faianța se lipește direct pe el, peste hidroizolație."
   ],
   "sursa": "elementul MN1 (gips-carton RU); specs/07 F (RU în baie și GS)"
  },
  {
   "titlu": "Amorsa, banda de colț și primul strat",
   "cine": "faianțarul",
   "stare": "propunere",
   "vedere": {
    "x0": -8,
    "x1": 44,
    "y0": -130,
    "y1": -86
   },
   "apar": [
    "h1",
    "b-spate-jos",
    "b-spate-sus",
    "b-fata-jos",
    "b-fata-sus",
    "manseta",
    "e4-banda",
    "e4-manseta",
    "e4-strat1"
   ],
   "text": "Pe plăci și pe zid se dă amorsa, apoi primul strat de hidroizolație. În primul strat se lipește banda de colț în colțurile din spate și pe muchiile din față, de jur împrejurul nișei. Gaura cablului se etanșează cu o manșetă din același sistem.",
   "verifica": [
    "Banda e continuă de jur împrejurul nișei, fără cute.",
    "Cablul nu se mișcă în gaură după etanșare."
   ],
   "sursa": "specs/07 G; elementul F6 („Nișa se placează pe toate fețele. Hidroizolație pe tot peretele”); fișa sistemului de hidroizolație (de ales)"
  },
  {
   "titlu": "Al doilea strat",
   "cine": "faianțarul",
   "stare": "proiect",
   "vedere": {
    "x0": -8,
    "x1": 44,
    "y0": -130,
    "y1": -86
   },
   "apar": [
    "h2",
    "e5-strat2"
   ],
   "text": "Al doilea strat se dă după uscarea primului, pe toate fețele nișei și pe toată fața măștii, până la tavanul fals (225). Se leagă de hidroizolația pardoselii dușului (detaliul DUS).",
   "verifica": [
    "Nicio zonă descoperită în colțuri și în jurul cablului.",
    "Timpul de uscare din fișă, înainte de faianță."
   ],
   "sursa": "specs/07 G (pereții zonei de duș integral); elementul F6"
  },
  {
   "titlu": "Faianța F6 și rostul de la 120",
   "cine": "faianțarul",
   "stare": "proiect",
   "vedere": {
    "x0": -8,
    "x1": 44,
    "y0": -130,
    "y1": -86
   },
   "apar": [
    "adeziv",
    "f-r1",
    "f-r2",
    "f-r3",
    "f-r4",
    "f-jos",
    "f-fund",
    "f-sus",
    "c-25z",
    "c-15z",
    "e6-rost",
    "e6-jos",
    "e6-fund"
   ],
   "text": "Faianța F6 pornește din colțul cu peretele de est, de la pardoseală, cu rândurile la 60, 120 și 180. Rostul de la 120 cade la fața de sus a nișei: rândul de deasupra pornește de la muchia ei. Fundul nișei (95) cade în rândul 60–120, deci placa de sub nișă se taie. Nișa se placează pe toate fețele.",
   "puncte": [
    "Propunerea noastră la muchii: placa de jos a nișei acoperă muchia faianței de sub nișă, iar faianța de deasupra acoperă muchia plăcii de sus.",
    "Varianta cu muchii tăiate la 45° sau cu profil de colț se alege cu arhitecta."
   ],
   "verifica": [
    "Fața de sus a nișei e la 120 și în linie cu rostul, pe toată lungimea de 105,6 cm.",
    "Fața de jos e la 95 de la pardoseala finită."
   ],
   "sursa": "elementele F6 și NI1 (A.27 B02: pornirea în colțul de est, rândurile la 60, 120, 180; B03: 95 + 25, 15)"
  },
  {
   "titlu": "Profilul și banda H1",
   "cine": "electricianul",
   "stare": "propunere",
   "vedere": {
    "x0": 4,
    "x1": 22,
    "y0": -127,
    "y1": -112
   },
   "apar": [
    "profil",
    "banda-led",
    "difuzor",
    "e7-profil",
    "e7-banda"
   ],
   "text": "Profilul se lipește sub fața de sus a nișei, lângă muchia din față, pe toată lungimea. Banda de 24 V, 3000K, IP67 se pune în profil și se leagă la cablul din gaură. Apoi se pun difuzorul și capacele de capăt.",
   "puncte": [
    "Propunem profilul lipit, nu înșurubat, ca să nu se găurească hidroizolația.",
    "Banda se taie la punctul de tăiere cel mai apropiat de 105,6 cm, spre interior."
   ],
   "verifica": [
    "Banda și legătura cu cablul sunt IP67, cu capace de capăt.",
    "Banda se aprinde de la butonul H din IH, iar apăsarea lungă reglează lumina (Push-DIM)."
   ],
   "atentie": "Locul profilului în nișă nu e desenat în planșe. Se confirmă cu arhitecta înainte de plăci, pentru gaura cablului (L5).",
   "sursa": "elementul H1 (A.06: „LED nișă - orizontal”; specs/06 G2); specs/04 (comparația LedHome: profil aplicat 16,6 × 10,6 mm; benzile 24 V cu Push-DIM)"
  },
  {
   "titlu": "Siliconul și proba de lumină",
   "cine": "faianțarul și electricianul",
   "stare": "propunere",
   "vedere": {
    "x0": -8,
    "x1": 44,
    "y0": -130,
    "y1": -86
   },
   "apar": [
    "lumina",
    "e8-lumina"
   ],
   "text": "Colțurile nișei și capetele profilului se închid cu silicon sanitar. Lumina cade din profil pe fundul și pe raftul nișei.",
   "verifica": [
    "Lumina e uniformă pe toată lungimea, fără puncte.",
    "Profilul nu se vede de la intrarea în duș. Dacă se vede, se mută mai în spate."
   ],
   "sursa": "A.06 (H, „LED nișă - orizontal”); propunerea noastră"
  }
 ]
};
