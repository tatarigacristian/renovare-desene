// Detaliul D-06 — pașii de montaj, pentru fereastra animată din desene/js/pasi.js. Format: JSON strict după „= ”.
// Secțiune orizontală, în cm: x de-a lungul peretelui (0 = fața laturii nișei, negativ = spre mijlocul nișei),
// y de la peretele existent spre cameră. Câmpurile sunt descrise în desene/README.md.
window.DETALII = window.DETALII || {};
window.DETALII["D-06"] = {
 "id": "D-06",
 "nume": "Panoul de rocă și banda LED",
 "subtitlu": "Secțiune orizontală prin latura nișei cu banda LED, privită de sus. Pașii sunt scriși pentru panoul de lângă balcon (D01, banda M2); la panoul de lângă birou (D02) benzile sunt pe ambele laturi, iar adâncimea măștii e întrebare deschisă (13 cm în planșe, 19,25 cm în D-06)",
 "sursa": "A.02 D-06, cu cotele scrise de mână de arhitectă; mesajele arhitectei din 19.10.2026",
 "revizie": {"nr": 1, "data": "2026-11-02"},
 "nota": "Ordinea pașilor e propunerea noastră. Se confirmă cu arhitecta, cu echipa de gips-carton și cu firma de rocă.",
 "vedere": {"x0": -25, "x1": 18, "y0": -4.5, "y1": 28},
 "sectiune3d": {"plan": "orizontal", "adancime": 24, "privire": [16, -32]},
 "forme": [
  {"id": "zid", "tip": "dreptunghi", "x": -25, "y": -4, "w": 43, "h": 4, "umplere": "zid"},
  {"id": "str-roca", "tip": "structura", "x": -25, "y": 0, "w": 25, "h": 8.75, "profile": [-22, -10]},
  {"id": "str-masca", "tip": "structura", "x": 1.25, "y": 0, "w": 16.75, "h": 18, "profile": [10]},
  {"id": "tub", "tip": "tub", "x": 5, "y": 4, "r": 1.1, "z3d": 6},
  {"id": "placa-suport", "tip": "dreptunghi", "x": -25, "y": 8.75, "w": 25, "h": 1.25, "umplere": "ciment"},
  {"id": "latura", "tip": "dreptunghi", "x": 0, "y": 0, "w": 1.25, "h": 18, "umplere": "gips"},
  {"id": "roca-baza", "tip": "roca", "x0": -25, "x1": 0, "y0": 10, "y1": 12.4, "amp": 0.5, "umplere": "roca-crud"},
  {"id": "roca-relief", "tip": "roca", "x0": -25, "x1": 0, "y0": 10, "y1": 15, "amp": 0.9, "umplere": "roca-crud"},
  {"id": "roca-culoare", "tip": "roca", "x0": -25, "x1": 0, "y0": 10, "y1": 15, "amp": 0.9, "umplere": "roca-final"},
  {"id": "zona-max5", "tip": "dreptunghi", "x": -5, "y": 10, "w": 5, "h": 5, "umplere": "zona", "temporar": true},
  {"id": "lumina", "tip": "lumina", "puncte": [[-2, 15.7], [-2, 17.9], [-5, 18], [-25, 21.5], [-25, 11.8], [-9, 13.2], [-3.2, 14.6]]},
  {"id": "fata", "tip": "dreptunghi", "x": -5, "y": 18, "w": 23, "h": 1.25, "umplere": "gips"},
  {"id": "cablu", "tip": "linie", "puncte": [[5, 5.1], [5, 14.2], [3.6, 16.4], [-0.5, 16.4]], "stil": "cablu", "z3d": 6},
  {"id": "profil", "tip": "profil", "x": -2, "y": 15.66, "w": 2, "h": 2.34},
  {"id": "banda", "tip": "dreptunghi", "x": -0.45, "y": 16.03, "w": 0.3, "h": 1.6, "umplere": "banda"},
  {"id": "sablon", "tip": "dreptunghi", "x": -4.4, "y": 15, "w": 1.8, "h": 3, "umplere": "sablon", "temporar": true},
  {"id": "fantoma", "tip": "contur", "dreptunghiuri": [[-25, 0, 25, 10], [-25, 10, 25, 5], [0, 0, 1.25, 18], [1.25, 0, 16.75, 18], [-5, 18, 23, 1.25]], "temporar": true},
  {"id": "ochi", "tip": "ochi", "x": -12, "y": 25, "linie": [[-12, 24.4], [-5, 18], [-1.75, 15.05]]},
  {"id": "t-zid", "tip": "text", "x": -24.5, "y": -1.4, "text": "peretele existent"},
  {"id": "t-camera", "tip": "text", "x": 17.6, "y": 27.4, "text": "camera ↓", "anc": "end"},
  {"id": "c-10", "tip": "cota", "a": [-21.5, 0], "b": [-21.5, 10], "text": "10", "parte": "dr"},
  {"id": "c-5", "tip": "cota", "a": [-21.5, 10], "b": [-21.5, 15], "text": "5", "parte": "dr"},
  {"id": "c-3", "tip": "cota", "a": [-7, 15], "b": [-7, 18], "text": "3", "parte": "st", "martori": [[-5, 18, -7.6, 18]]},
  {"id": "c-125", "tip": "cota", "a": [-7, 18], "b": [-7, 19.25], "text": "1,25", "parte": "st", "martori": [[-5, 19.25, -7.6, 19.25]]},
  {"id": "c-18", "tip": "cota", "a": [13.3, 0], "b": [13.3, 18], "text": "18", "parte": "st"},
  {"id": "c-total", "tip": "cota", "a": [16.3, 0], "b": [16.3, 19.25], "text": "19,25", "parte": "st"},
  {"id": "c-buza", "tip": "cota", "a": [-5, 21], "b": [0, 21], "text": "buză 5", "parte": "jos", "martori": [[-5, 19.25, -5, 21.6], [0, 19.25, 0, 21.6]]},
  {"id": "c-retragere", "tip": "cota", "a": [-11, 15], "b": [-11, 19.25], "text": "~4,25", "parte": "st", "martori": [[-5, 19.25, -11.6, 19.25]]},
  {"id": "c-8", "tip": "cota", "a": [-11, 10], "b": [-11, 18], "text": "8", "parte": "dr", "culoare": "intre", "martori": [[-5, 18, -11.6, 18]]},
  {"id": "c-rez", "tip": "cota", "a": [-1.2, 15], "b": [-1.2, 15.66], "text": "6,6 mm", "parte": "st"},
  {"id": "e0-nisa", "tip": "eticheta", "x": -24, "y": 23.6, "lat": 25, "text": "nișa: aici vine roca", "spre": [-17, 12.5]},
  {"id": "e0-latura", "tip": "eticheta", "x": 3, "y": 23.6, "text": "latura cu banda LED (spre dulapul M12)", "spre": [0.6, 13]},
  {"id": "e1-profile", "tip": "eticheta", "x": -24, "y": 23.6, "lat": 25, "text": "profile metalice", "spre": [-22, 4.5]},
  {"id": "e1-masca", "tip": "eticheta", "x": 3, "y": 23.6, "text": "structura măștii", "spre": [10, 9]},
  {"id": "e2-tub", "tip": "eticheta", "x": 3, "y": 23.6, "text": "TB1: tub pentru cablul benzii", "spre": [5, 4]},
  {"id": "e2-cablu", "tip": "eticheta", "x": -24, "y": 23.6, "lat": 25, "text": "cablul iese aici, la capătul benzii", "spre": [-0.5, 16.4]},
  {"id": "e3-placa", "tip": "eticheta", "x": -24, "y": 23.6, "lat": 25, "text": "placa suport: ciment sau OSB", "spre": [-16, 9.4]},
  {"id": "e4-latura", "tip": "eticheta", "x": 3, "y": 23.6, "text": "latura nișei, gips-carton", "spre": [0.6, 9]},
  {"id": "e5-buza", "tip": "eticheta", "x": -24, "y": 23.6, "lat": 18, "text": "buza ascunde latura și profilul", "spre": [-3, 18.6]},
  {"id": "e6-roca", "tip": "eticheta", "x": -24, "y": 23.6, "lat": 25, "text": "primele straturi de rocă", "spre": [-15, 11.4]},
  {"id": "e7-zona", "tip": "eticheta", "x": -24, "y": 23.6, "lat": 25, "text": "sub buză: rocă de max. 5 cm", "spre": [-2.5, 12.5]},
  {"id": "e8-sablon", "tip": "eticheta", "x": -10.6, "y": 21.6, "lat": 15, "text": "șipcă de 3 cm, trecută pe toată înălțimea", "spre": [-3.5, 16.5]},
  {"id": "e9-culoare", "tip": "eticheta", "x": -24, "y": 23.6, "lat": 25, "text": "culoare similară cu a pereților", "spre": [-15, 13]},
  {"id": "e10-profil", "tip": "eticheta", "x": -10.6, "y": 21.6, "lat": 15, "text": "profil 23,4 × 20 mm, prins de latură", "spre": [-1, 16.8]},
  {"id": "e11-banda", "tip": "eticheta", "x": 4.6, "y": 21.6, "anc": "end", "lat": 7, "text": "banda Hue Flux M2", "spre": [-0.3, 16.8]},
  {"id": "e11-difuzor", "tip": "eticheta", "x": -10.6, "y": 21.6, "lat": 8, "text": "difuzorul, spre rocă", "spre": [-2, 17]},
  {"id": "e12-ochi", "tip": "eticheta", "x": -10.3, "y": 25.4, "text": "din cameră: roca luminată, profilul ascuns"}
 ],
 "pasi": [
  {
   "titlu": "Ce se construiește",
   "cine": "toată echipa",
   "stare": "proiect",
   "apar": ["zid", "fantoma", "t-zid", "t-camera", "c-10", "c-5", "c-3", "c-125", "c-total", "c-retragere", "e0-nisa", "e0-latura"],
   "text": "Masca are 19,25 cm: 10 cm structură cu placă suport, 5 cm rocă, 3 cm spațiu pentru profilul LED și 1,25 cm placa din față. Fața rocii rămâne cu ~4,25 cm în spatele feței finite a peretelui.",
   "verifica": [
    "Arhitecta a aprobat mostra de rocă (~50 × 50 cm), pe poze, cu lumină din lateral.",
    "Firma de rocă a ales placa suport și a spus greutatea rocii în kg/mp.",
    "Profilul LED e ales. Dacă e trimless, se montează la pasul 4, odată cu latura."
   ],
   "sursa": "A.02 D-06 cu cotele scrise de mână; arhitecta, 19.10.2026 (R2, R5, R12)"
  },
  {
   "titlu": "Structura de profile",
   "cine": "echipa de gips-carton",
   "stare": "confirmat",
   "apar": ["str-roca", "str-masca", "e1-profile", "e1-masca"],
   "text": "Profile metalice pe peretele existent, pe toată nișa, și structura măștii în dreapta laturii. Cu placa suport de la pasul 3, structura din spatele rocii are 10 cm.",
   "puncte": [
    "Distanța dintre profile o dă firma de rocă, după greutatea rocii.",
    "Suportul îl construim parțial noi (arhitecta, 19.10.2026)."
   ],
   "verifica": ["Profilele sunt în același plan (dreptar de 2 m)."],
   "sursa": "D-06 (10 cm structură + placă); arhitecta, 19.10.2026 (R8)"
  },
  {
   "titlu": "Tubul pentru cablul benzii",
   "cine": "electrician",
   "stare": "propunere",
   "apar": ["tub", "cablu", "e2-tub", "e2-cablu"],
   "text": "Prin masca peretelui trece tubul TB1 pentru cablul de joasă tensiune, de la priza de după perdea până la banda M2. Sursa benzii stă la priză, nu în mască.",
   "puncte": [
    "Prin tub trebuie să treacă mufa cablului prelungitor Hue Flux, fără coturi strânse.",
    "Cablul iese prin latura nișei, în spațiul de 3 cm, la capătul benzii. Capătul (sus sau jos) e de stabilit cu electricianul."
   ],
   "verifica": [
    "Mufa cablului prelungitor trece prin tub de la un capăt la altul.",
    "Cablul de 230 V tras pentru M2 (CB-M2), dacă rămâne nefolosit: într-o doză cu capac, accesibilă, sau scos din circuit."
   ],
   "atentie": "Tubul se pune înainte să se închidă masca.",
   "sursa": "specs/06 G7 (01.11.2026); elementele TB1 și CB-M2 din desen"
  },
  {
   "titlu": "Placa suport pentru rocă",
   "cine": "echipa de gips-carton, după indicațiile firmei de rocă",
   "stare": "confirmat",
   "apar": ["placa-suport", "c-10", "e3-placa"],
   "text": "Placa pe care se face roca acoperă toată nișa. Fața plăcii stă la 10 cm de peretele existent.",
   "puncte": ["Materialul îl alege firma de rocă. Arhitecta preferă placa de ciment, care e mai rezistentă; se poate și OSB."],
   "verifica": [
    "Fața plăcii e la 10 cm de perete pe toată înălțimea nișei (240 cm).",
    "Placa e prinsă pe toate profilele."
   ],
   "sursa": "arhitecta, 19.10.2026 (R8)"
  },
  {
   "titlu": "Latura nișei",
   "cine": "echipa de gips-carton",
   "stare": "proiect",
   "apar": ["latura", "e4-latura"],
   "text": "Latura dreaptă a nișei se face din gips-carton, de la peretele existent până la fața măștii. Laturile sunt la 10 și la 100 cm de zidăria din colț, deci nișa are 90 cm lățime.",
   "puncte": [
    "Pe această latură se prinde profilul LED (pasul 10).",
    "Dacă se alege profilul trimless de 24 mm, se încastrează acum în latură."
   ],
   "verifica": ["Latura e verticală pe toată înălțimea.", "Între laturi sunt 90 cm."],
   "sursa": "A.15 D01 (10 + 90); specs/04, profile LED"
  },
  {
   "titlu": "Fața măștii și buza de 5 cm",
   "cine": "echipa de gips-carton",
   "stare": "proiect",
   "apar": ["fata", "c-buza", "c-18", "c-total", "c-8", "e5-buza"],
   "text": "Placa din față, de 1,25 cm, închide masca și intră 5 cm peste nișă. Buza ascunde latura și profilul LED. Fața finită a peretelui ajunge la 19,25 cm de peretele existent.",
   "puncte": ["Propunem buza înainte de rocă: așa se poate verifica direct spațiul de 3 cm. De confirmat cu firma de rocă."],
   "verifica": [
    "Între placa suport și fața interioară a buzei sunt 8 cm: 5 cm pentru rocă și 3 cm pentru profil.",
    "Buza are 5 cm pe toată înălțimea."
   ],
   "sursa": "D-06 cu cotele din 01.11.2026"
  },
  {
   "titlu": "Roca: primele straturi",
   "cine": "firma de rocă",
   "stare": "confirmat",
   "apar": ["roca-baza", "e6-roca"],
   "text": "Roca se face manual, strat peste strat, pe placa suport, după mostra aprobată. Se lucrează și sub buză, până la latură.",
   "puncte": ["Aspectul se mai poate ajusta pe șantier (arhitecta, 19.10.2026)."],
   "sursa": "arhitecta, 19.10.2026"
  },
  {
   "titlu": "Roca: relieful, max. 5 cm lângă LED",
   "cine": "firma de rocă",
   "stare": "confirmat",
   "apar": ["roca-relief", "zona-max5", "c-5", "e7-zona"],
   "text": "Roca are 5–6 cm. Lângă latura cu LED, pe primii ~5 cm (sub buză), are cel mult 5 cm, ca să rămână 3 cm pentru profil.",
   "puncte": [
    "Propunerea noastră pentru lumina din lateral (R4, fără răspuns): relief jos, de 1–2 cm, pe primii 10–15 cm de lângă bandă, apoi 2–5 cm spre centru.",
    "Întrebare deschisă (R6): roca îmbracă și laturile nișei?"
   ],
   "atentie": "Cu 6 cm de rocă lângă LED, spațiul scade la 2 cm și profilul nu mai încape.",
   "sursa": "arhitecta, 19.10.2026 (5–6 cm); calculul din 01.11.2026 (max. 5 cm lângă LED)"
  },
  {
   "titlu": "Verificarea: 3 cm liberi sub buză",
   "vedere": {"x0": -11, "x1": 5, "y0": 9, "y1": 23},
   "cine": "noi, cu firma de rocă",
   "stare": "propunere",
   "apar": ["sablon", "c-3", "e8-sablon"],
   "text": "Înainte de culoare, se trece între rocă și buză o șipcă de 3 cm grosime, pe toată înălțimea (240 cm). Unde nu trece, roca se mai șlefuiește.",
   "puncte": ["Profilul are 23,4 mm, deci după montaj rămân ~6,6 mm până la vârfurile rocii."],
   "verifica": ["Șipca de 3 cm trece liber de sus până jos."],
   "sursa": "D-06 cu cotele din 01.11.2026; specs/04, „Înainte de comandă”, punctul 2"
  },
  {
   "titlu": "Culoarea rocii",
   "cine": "firma de rocă",
   "stare": "confirmat",
   "apar": ["roca-culoare", "e9-culoare"],
   "text": "Roca primește o culoare similară cu a pereților. În proiect, pereții sunt San Marco P764 Petronilla; nuanța se verifică pe paletar.",
   "puncte": ["Nu știm încă dacă roca se vopsește după uscare sau se colorează în masă (R7)."],
   "sursa": "arhitecta, 19.10.2026 (R7); specs/07 (P764)"
  },
  {
   "titlu": "Profilul LED",
   "vedere": {"x0": -11, "x1": 5, "y0": 9, "y1": 23},
   "cine": "electrician sau noi",
   "stare": "propunere",
   "apar": ["profil", "c-rez", "e10-profil"],
   "text": "Profilul de 23,4 × 20 mm se prinde cu cleme pe latura nișei, sub buză, cu deschiderea spre rocă. Se pune dintr-o bucată pe toată înălțimea, deci trebuie bară de 3 m (bara de 2 m nu ajunge).",
   "puncte": ["Între profil și vârfurile rocii rămân ~6,6 mm.", "Profilul S7, de 30 mm, nu încape."],
   "verifica": ["Profilul nu atinge roca pe nicio porțiune.", "Profilul nu se vede din fața nișei."],
   "sursa": "specs/04, profile LED; elementul M2 din desen"
  },
  {
   "titlu": "Banda Hue Flux și cablul",
   "vedere": {"x0": -11, "x1": 5, "y0": 9, "y1": 23},
   "cine": "electrician sau noi",
   "stare": "propunere",
   "apar": ["banda", "e11-banda", "e11-difuzor"],
   "text": "Banda M2 se taie la ~232 cm (14 segmente) și se lipește în profil. Cablul prelungitor din tub se leagă la capătul benzii, apoi se pune difuzorul.",
   "verifica": ["Banda se aprinde înainte să se pună difuzorul.", "Cablul nu e întins și nu e strivit de buză."],
   "sursa": "elementul M2 din desen; specs/06 G7"
  },
  {
   "titlu": "Proba de lumină",
   "cine": "noi",
   "stare": "proiect",
   "apar": ["lumina", "ochi", "e12-ochi"],
   "text": "Lumina iese din profil spre rocă și o luminează din lateral. Din cameră se vede roca luminată, iar profilul rămâne ascuns după buză.",
   "puncte": ["Calculat pe secțiune: marginea difuzorului se poate vedea doar privind din stânga nișei, de la mai puțin de ~70 cm de perete."],
   "verifica": ["Lumina e uniformă pe toată înălțimea, fără puncte vizibile.", "Culorile din aplicația Hue arată bine pe culoarea rocii."],
   "sursa": "A.02 D-06 (banda ascunsă sub buză)"
  }
 ]
};
