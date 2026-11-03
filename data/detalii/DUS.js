// Dușul walk-in (DUS) — pașii de montaj, pentru fereastra animată din desene/js/pasi.js. Format: JSON strict după „= ”.
// Secțiune verticală, în cm, perpendiculară pe peretele cu WC-ul, la capătul de nord al rigolei, privind spre prag:
// x = 0 la fața brută a ghenei și a măștii WC; negativ = în duș, spre peretele de est (−136); pozitiv = ghena și zidul.
// y = −h (h de la cota 0). Grosimile straturilor și panta sunt schematice. Câmpurile sunt descrise în desene/README.md.
window.DETALII = window.DETALII || {};
window.DETALII["DUS"] = {
 "id": "DUS",
 "nume": "Dușul walk-in: pardoseala cu rigola",
 "subtitlu": "Secțiune verticală perpendiculară pe peretele cu WC-ul, la capătul de nord al rigolei S6, prin ieșirea R8 și ghena GH1, privind spre prag",
 "orientare": "Privit spre prag (spre sud). Dreapta: ghena GH1, în planul măștii WC. Stânga: dușul, până la peretele de est. Jos: placa.",
 "camera": "baie",
 "perete": "V",
 "sursa": "A.03, A.04, A.27 B01 și B03; specs/04, specs/07, specs/08; analiza/07, analiza/11",
 "revizie": {
  "nr": 1,
  "data": "2026-11-02"
 },
 "nota": "Ordinea pașilor e propunerea noastră. Se confirmă cu arhitecta, cu instalatorul, cu faianțarul și cu fișele rigolei și ale hidroizolației, care nu sunt alese încă.",
 "vedere": {
  "x0": -46,
  "x1": 40,
  "y0": -32,
  "y1": 26
 },
 "sectiune3d": {"plan": "vertical", "adancime": 84, "privire": [-22, 22]},
 "forme": [
  {
   "id": "placa",
   "tip": "dreptunghi",
   "x": -156,
   "y": 12.0,
   "w": 202,
   "h": 14.0,
   "umplere": "ciment"
  },
  {
   "id": "zid-est",
   "tip": "dreptunghi",
   "x": -146.0,
   "y": -236,
   "w": 10.0,
   "h": 248.0,
   "umplere": "zid"
  },
  {
   "id": "zid-vest",
   "tip": "dreptunghi",
   "x": 25,
   "y": -236,
   "w": 21,
   "h": 248.0,
   "umplere": "zid"
  },
  {
   "id": "ghena",
   "tip": "dreptunghi",
   "x": 0,
   "y": -236,
   "w": 10,
   "h": 248.0,
   "umplere": "zid"
  },
  {
   "id": "coloana",
   "tip": "dreptunghi",
   "x": 13,
   "y": -236,
   "w": 11,
   "h": 262.0,
   "umplere": "pvc",
   "cilindru3d": "y"
  },
  {
   "id": "tf1",
   "tip": "dreptunghi",
   "x": -136.0,
   "y": -227.25,
   "w": 136.0,
   "h": 2.25,
   "umplere": "gips"
  },
  {
   "id": "fantoma",
   "tip": "contur",
   "dreptunghiuri": [
    [
     -9.35,
     0,
     9.35,
     5.5
    ],
    [
     -136.0,
     -5,
     136,
     5
    ],
    [
     -70,
     -205,
     67.8,
     200
    ]
   ],
   "temporar": true
  },
  {
   "id": "sapa-veche",
   "tip": "dreptunghi",
   "x": -136.0,
   "y": -3,
   "w": 136.0,
   "h": 15.0,
   "umplere": "zona",
   "temporar": true
  },
  {
   "id": "reper",
   "tip": "linie",
   "puncte": [
    [
     -156,
     0
    ],
    [
     46,
     0
    ]
   ],
   "temporar": true
  },
  {
   "id": "prag-miez",
   "tip": "poligon",
   "puncte": [
    [
     -136.0,
     -3.1
    ],
    [
     0,
     -3.1
    ],
    [
     0,
     1.9
    ],
    [
     -13.35,
     1.9
    ],
    [
     -136.0,
     -0.1
    ]
   ],
   "umplere": "glet",
   "temporar": true,
   "z3d": 74,
   "adanc3d": 10
  },
  {
   "id": "prag-hidro",
   "tip": "poligon",
   "puncte": [
    [
     -136.0,
     -3.7
    ],
    [
     0,
     -3.7
    ],
    [
     0,
     1.9
    ],
    [
     -13.35,
     1.9
    ],
    [
     -136.0,
     -0.1
    ]
   ],
   "umplere": "hidroizolatie",
   "temporar": true,
   "z3d": 74,
   "adanc3d": 10
  },
  {
   "id": "prag-placare",
   "tip": "poligon",
   "puncte": [
    [
     -136.0,
     -5
    ],
    [
     0,
     -5
    ],
    [
     0,
     0
    ],
    [
     -13.35,
     0
    ],
    [
     -136.0,
     -2.0
    ]
   ],
   "umplere": "faianta",
   "z3d": 74,
   "adanc3d": 10
  },
  {
   "id": "sticla",
   "tip": "dreptunghi",
   "x": -70,
   "y": -205,
   "w": 66.8,
   "h": 200,
   "umplere": "sticla",
   "z3d": 78.6,
   "adanc3d": 0.8
  },
  {
   "id": "sticla-profil",
   "tip": "dreptunghi",
   "x": -3.2,
   "y": -205,
   "w": 1.05,
   "h": 200,
   "umplere": "aluminiu",
   "z3d": 77.5,
   "adanc3d": 3
  },
  {
   "id": "sapa-panta",
   "tip": "poligon",
   "puncte": [
    [
     -136.0,
     -0.1
    ],
    [
     -13.35,
     1.9
    ],
    [
     -13.35,
     2.2
    ],
    [
     -9.35,
     2.2
    ],
    [
     -9.35,
     12.0
    ],
    [
     -136.0,
     12.0
    ]
   ],
   "umplere": "sapa"
  },
  {
   "id": "sapa-sub",
   "tip": "dreptunghi",
   "x": -9.35,
   "y": 5.5,
   "w": 9.35,
   "h": 6.5,
   "umplere": "sapa"
  },
  {
   "id": "teava-r8",
   "tip": "poligon",
   "puncte": [
    [
     -7.2,
     5.5
    ],
    [
     -7.2,
     10.6
    ],
    [
     13,
     11.2
    ],
    [
     13,
     6.2
    ],
    [
     -2.2,
     5.75
    ],
    [
     -2.2,
     5.5
    ]
   ],
   "umplere": "pvc",
   "tub3d": {"axa": [[-4.7, 5.5], [-4.7, 8.2], [13, 8.7]], "r": 2.5}
  },
  {
   "id": "ramificatie",
   "tip": "dreptunghi",
   "x": 11.4,
   "y": 5.6,
   "w": 1.6,
   "h": 6.2,
   "umplere": "pvc",
   "cilindru3d": "x"
  },
  {
   "id": "rig-pat",
   "tip": "dreptunghi",
   "x": -9.35,
   "y": 5.5,
   "w": 1.9,
   "h": 6.5,
   "umplere": "ciment",
   "adanc3d": 73
  },
  {
   "id": "rig-corp",
   "tip": "poligon",
   "puncte": [
    [
     -9.35,
     0
    ],
    [
     -0.25,
     0
    ],
    [
     -0.25,
     -6
    ],
    [
     0,
     -6
    ],
    [
     0,
     5.5
    ],
    [
     -9.35,
     5.5
    ]
   ],
   "umplere": "otel",
   "adanc3d": 73,
   "umplere3d": "inox",
   "puncte3d": [[-9.35, 0], [-8.9, 0], [-8.9, 4.9], [-1.95, 4.9], [-1.95, 0], [-0.25, 0], [-0.25, -6], [0, -6], [0, 5.5], [-9.35, 5.5]]
  },
  {
   "id": "rig-canal",
   "tip": "dreptunghi",
   "x": -8.9,
   "y": 0.45,
   "w": 6.95,
   "h": 4.45,
   "umplere": "alb",
   "corp3d": "ascuns",
   "adanc3d": 73
  },
  {
   "id": "rig-gratar",
   "tip": "dreptunghi",
   "x": -9.15,
   "y": 0,
   "w": 7.0,
   "h": 0.45,
   "umplere": "aluminiu",
   "adanc3d": 73
  },
  {
   "id": "rig-flansa",
   "tip": "dreptunghi",
   "x": -13.35,
   "y": 1.9,
   "w": 4.0,
   "h": 0.3,
   "umplere": "otel",
   "adanc3d": 73,
   "umplere3d": "inox"
  },
  {
   "id": "h1-pard",
   "tip": "poligon",
   "puncte": [
    [
     -136.0,
     -0.4
    ],
    [
     -13.35,
     1.6
    ],
    [
     -9.35,
     1.6
    ],
    [
     -9.35,
     1.9
    ],
    [
     -13.35,
     1.9
    ],
    [
     -136.0,
     -0.1
    ]
   ],
   "umplere": "hidroizolatie"
  },
  {
   "id": "h1-ghena",
   "tip": "poligon",
   "puncte": [
    [
     0,
     -225
    ],
    [
     0,
     -6
    ],
    [
     -0.25,
     -6
    ],
    [
     -0.25,
     0
    ],
    [
     -0.55,
     0
    ],
    [
     -0.55,
     -225
    ]
   ],
   "umplere": "hidroizolatie"
  },
  {
   "id": "h1-est",
   "tip": "dreptunghi",
   "x": -136.0,
   "y": -225,
   "w": 0.3,
   "h": 224.9,
   "umplere": "hidroizolatie"
  },
  {
   "id": "banda-est",
   "tip": "poligon",
   "puncte": [
    [
     -136.0,
     -9
    ],
    [
     -135.7,
     -9
    ],
    [
     -135.7,
     -0.4
    ],
    [
     -128.0,
     -0.27
    ],
    [
     -128.0,
     0.03
    ],
    [
     -136.0,
     -0.1
    ]
   ],
   "umplere": "banda-hartie"
  },
  {
   "id": "banda-rig",
   "tip": "poligon",
   "puncte": [
    [
     -19.35,
     1.5
    ],
    [
     -13.35,
     1.6
    ],
    [
     -9.35,
     1.6
    ],
    [
     -9.35,
     1.9
    ],
    [
     -13.35,
     1.9
    ],
    [
     -19.35,
     1.8
    ]
   ],
   "umplere": "banda-hartie",
   "adanc3d": 73
  },
  {
   "id": "banda-perete",
   "tip": "poligon",
   "puncte": [
    [
     0,
     -12
    ],
    [
     0,
     -6
    ],
    [
     -0.25,
     -6
    ],
    [
     -0.25,
     0
    ],
    [
     -0.55,
     0
    ],
    [
     -0.55,
     -12
    ]
   ],
   "umplere": "banda-hartie"
  },
  {
   "id": "h2-pard",
   "tip": "poligon",
   "puncte": [
    [
     -136.0,
     -0.7
    ],
    [
     -13.35,
     1.3
    ],
    [
     -9.35,
     1.3
    ],
    [
     -9.35,
     1.6
    ],
    [
     -13.35,
     1.6
    ],
    [
     -136.0,
     -0.4
    ]
   ],
   "umplere": "folie"
  },
  {
   "id": "h2-ghena",
   "tip": "dreptunghi",
   "x": -0.85,
   "y": -225,
   "w": 0.3,
   "h": 225,
   "umplere": "folie"
  },
  {
   "id": "h2-est",
   "tip": "dreptunghi",
   "x": -135.7,
   "y": -225,
   "w": 0.3,
   "h": 224.6,
   "umplere": "folie"
  },
  {
   "id": "apa",
   "tip": "poligon",
   "puncte": [
    [
     -135.4,
     -4.2
    ],
    [
     -9.35,
     -4.2
    ],
    [
     -9.35,
     1.3
    ],
    [
     -13.35,
     1.3
    ],
    [
     -135.4,
     -0.69
    ]
   ],
   "umplere": "sablon",
   "temporar": true,
   "adanc3d": 74
  },
  {
   "id": "adeziv-pard",
   "tip": "poligon",
   "puncte": [
    [
     -136.0,
     -1.1
    ],
    [
     -13.35,
     0.9
    ],
    [
     -9.35,
     0.9
    ],
    [
     -9.35,
     1.3
    ],
    [
     -13.35,
     1.3
    ],
    [
     -136.0,
     -0.7
    ]
   ],
   "umplere": "adeziv"
  },
  {
   "id": "gresie-1",
   "tip": "poligon",
   "puncte": [
    [
     -134.1,
     -1.97
    ],
    [
     -74.1,
     -0.99
    ],
    [
     -74.1,
     -0.09
    ],
    [
     -134.1,
     -1.07
    ]
   ],
   "umplere": "faianta"
  },
  {
   "id": "gresie-2",
   "tip": "poligon",
   "puncte": [
    [
     -73.8,
     -0.99
    ],
    [
     -13.8,
     -0.01
    ],
    [
     -13.8,
     0.89
    ],
    [
     -73.8,
     -0.09
    ]
   ],
   "umplere": "faianta"
  },
  {
   "id": "gresie-3",
   "tip": "poligon",
   "puncte": [
    [
     -13.5,
     -0.0
    ],
    [
     -13.35,
     0.0
    ],
    [
     -9.35,
     0.0
    ],
    [
     -9.35,
     0.9
    ],
    [
     -13.35,
     0.9
    ],
    [
     -13.5,
     0.9
    ]
   ],
   "umplere": "faianta"
  },
  {
   "id": "adeziv-ghena",
   "tip": "dreptunghi",
   "x": -1.25,
   "y": -225,
   "w": 0.4,
   "h": 224.7,
   "umplere": "adeziv"
  },
  {
   "id": "faianta-f4",
   "tip": "dreptunghi",
   "x": -2.15,
   "y": -225,
   "w": 0.9,
   "h": 224.7,
   "umplere": "faianta"
  },
  {
   "id": "adeziv-est",
   "tip": "dreptunghi",
   "x": -135.4,
   "y": -225,
   "w": 0.4,
   "h": 224.3,
   "umplere": "adeziv"
  },
  {
   "id": "faianta-f7",
   "tip": "dreptunghi",
   "x": -135.0,
   "y": -225,
   "w": 0.9,
   "h": 222.73,
   "umplere": "faianta"
  },
  {
   "id": "t-est",
   "tip": "text",
   "x": -144.0,
   "y": -26,
   "text": "peretele de est"
  },
  {
   "id": "t-ghena",
   "tip": "text",
   "x": 1,
   "y": -26,
   "text": "ghena GH1"
  },
  {
   "id": "c-136",
   "tip": "cota",
   "a": [
    -136.0,
    -14
   ],
   "b": [
    0,
    -14
   ],
   "text": "136",
   "martori": [
    [
     -136.0,
     -14,
     -136.0,
     -8
    ],
    [
     0,
     -14,
     0,
     -8
    ]
   ]
  },
  {
   "id": "c-25",
   "tip": "cota",
   "a": [
    0,
    -14
   ],
   "b": [
    25,
    -14
   ],
   "text": "25",
   "martori": [
    [
     25,
     -14,
     25,
     -8
    ]
   ]
  },
  {
   "id": "c-h",
   "tip": "cota",
   "a": [
    -22,
    12.0
   ],
   "b": [
    -22,
    0
   ],
   "text": "H: de măsurat",
   "parte": "st",
   "martori": [
    [
     -14,
     12.0,
     -23,
     12.0
    ]
   ]
  },
  {
   "id": "c-7",
   "tip": "cota",
   "a": [
    -9.15,
    -9
   ],
   "b": [
    -2.15,
    -9
   ],
   "text": "7",
   "martori": [
    [
     -9.15,
     -9,
     -9.15,
     0
    ],
    [
     -2.15,
     -9,
     -2.15,
     -0.3
    ]
   ]
  },
  {
   "id": "c-5",
   "tip": "cota",
   "a": [
    -24,
    0
   ],
   "b": [
    -24,
    -5
   ],
   "text": "5",
   "parte": "st",
   "martori": [
    [
     -30,
     -5,
     -23,
     -5
    ]
   ]
  },
  {
   "id": "c-70",
   "tip": "cota",
   "a": [
    -70,
    -213
   ],
   "b": [
    0,
    -213
   ],
   "text": "70",
   "martori": [
    [
     -70,
     -213,
     -70,
     -205
    ],
    [
     0,
     -213,
     0,
     -205
    ]
   ]
  },
  {
   "id": "c-66",
   "tip": "cota",
   "a": [
    -136.0,
    -213
   ],
   "b": [
    -70,
    -213
   ],
   "text": "66",
   "martori": [
    [
     -136.0,
     -213,
     -136.0,
     -205
    ]
   ]
  },
  {
   "id": "c-200",
   "tip": "cota",
   "a": [
    -76,
    -5
   ],
   "b": [
    -76,
    -205
   ],
   "text": "200",
   "parte": "st",
   "martori": [
    [
     -70,
     -205,
     -77,
     -205
    ]
   ]
  },
  {
   "id": "c-225",
   "tip": "cota",
   "a": [
    -128,
    0
   ],
   "b": [
    -128,
    -225
   ],
   "text": "225",
   "martori": [
    [
     -128,
     -225,
     -134,
     -225
    ]
   ]
  },
  {
   "id": "e0-sticla",
   "tip": "eticheta",
   "x": -128,
   "y": -88,
   "text": "peretele de sticlă S8, 70 × 200, pe prag (în spate)",
   "spre": [
    -40,
    -108
   ],
   "lat": 62
  },
  {
   "id": "e0-prag",
   "tip": "eticheta",
   "x": -112,
   "y": -50,
   "text": "pragul PD1, 10 × 5 cm, în spatele secțiunii",
   "spre": [
    -122,
    -3
   ],
   "lat": 50
  },
  {
   "id": "e0-rigola",
   "tip": "eticheta",
   "x": -12,
   "y": -50,
   "text": "rigola S6, 7 × 73 cm, lipită de fața ghenei și a măștii WC",
   "spre": [
    -5,
    1.5
   ],
   "anc": "end",
   "lat": 52
  },
  {
   "id": "e0-coloana",
   "tip": "eticheta",
   "x": 43,
   "y": -66,
   "text": "coloana de canalizare din ghenă",
   "spre": [
    18,
    -100
   ],
   "anc": "end",
   "lat": 30
  },
  {
   "id": "e1-veche",
   "tip": "eticheta",
   "x": -90,
   "y": -36,
   "text": "cabina zidită și șapa veche se scot până la placă",
   "spre": [
    -100,
    6
   ],
   "lat": 62
  },
  {
   "id": "e1-reper",
   "tip": "eticheta",
   "x": -132,
   "y": -58,
   "text": "cota 0 = pardoseala finită a băii, trasată pe pereți",
   "spre": [
    -141,
    0
   ],
   "lat": 72
  },
  {
   "id": "e2-teava",
   "tip": "eticheta",
   "x": -29,
   "y": 17,
   "text": "țeava R8, Ø50, cu pantă spre coloană, prin peretele ghenei",
   "spre": [
    5,
    8.4
   ],
   "lat": 27
  },
  {
   "id": "e2-coloana",
   "tip": "eticheta",
   "x": 33,
   "y": 17,
   "text": "ramificația coloanei: de verificat pe teren",
   "spre": [
    12.2,
    7
   ],
   "anc": "end",
   "lat": 15
  },
  {
   "id": "e3-pat",
   "tip": "eticheta",
   "x": -29,
   "y": 17,
   "text": "pat de mortar sau picioarele rigolei",
   "spre": [
    -8.35,
    8.5
   ],
   "lat": 14
  },
  {
   "id": "e3-gratar",
   "tip": "eticheta",
   "x": -13,
   "y": 17,
   "text": "grătarul la cota 0 (propunere)",
   "spre": [
    -6.65,
    0.2
   ],
   "lat": 13
  },
  {
   "id": "e3-corp",
   "tip": "eticheta",
   "x": 1.5,
   "y": 17,
   "text": "corpul, la nivel pe lungime, lipit de perete",
   "spre": [
    -4.65,
    3
   ],
   "lat": 14
  },
  {
   "id": "e3-flansa",
   "tip": "eticheta",
   "x": 18,
   "y": 17,
   "text": "flanșa de perete urcă pe ghenă",
   "spre": [
    -0.12,
    -4
   ],
   "lat": 15
  },
  {
   "id": "e4-panta",
   "tip": "eticheta",
   "x": -60,
   "y": -30,
   "text": "șapa de pantă: o singură pantă, spre rigolă. Panta după fișa rigolei, de confirmat; aici e schematică",
   "spre": [
    -70,
    4
   ],
   "lat": 58
  },
  {
   "id": "e4-prag",
   "tip": "eticheta",
   "x": -112,
   "y": -58,
   "text": "miezul pragului PD1, în spatele secțiunii (dacă rămâne, BA1)",
   "spre": [
    -122,
    -2.5
   ],
   "lat": 50
  },
  {
   "id": "e5-banda-rig",
   "tip": "eticheta",
   "x": -12,
   "y": -4,
   "text": "manșeta rigolei, pe flanșă",
   "spre": [
    -15.85,
    1.75
   ],
   "lat": 10
  },
  {
   "id": "e5-banda-perete",
   "tip": "eticheta",
   "x": -2,
   "y": -11,
   "text": "banda peste flanșa de perete",
   "spre": [
    -0.4,
    -9
   ],
   "anc": "end",
   "lat": 16
  },
  {
   "id": "e5-strat1",
   "tip": "eticheta",
   "x": -14,
   "y": 9.5,
   "text": "amorsa și primul strat",
   "spre": [
    -18.5,
    1.67
   ],
   "lat": 12
  },
  {
   "id": "e6-strat2",
   "tip": "eticheta",
   "x": -40,
   "y": -36,
   "text": "al doilea strat, pe toată pardoseala băii",
   "spre": [
    -50,
    0.85
   ],
   "lat": 40
  },
  {
   "id": "e6-perete",
   "tip": "eticheta",
   "x": -6,
   "y": -56,
   "text": "pe pereții dușului, până la 225",
   "spre": [
    -0.7,
    -40
   ],
   "anc": "end",
   "lat": 40
  },
  {
   "id": "e6-prag",
   "tip": "eticheta",
   "x": -112,
   "y": -58,
   "text": "pragul, acoperit pe toate fețele",
   "spre": [
    -122,
    -3
   ],
   "lat": 50
  },
  {
   "id": "e7-apa",
   "tip": "eticheta",
   "x": -60,
   "y": -30,
   "text": "proba de inundare: 24 de ore, cu rigola astupată",
   "spre": [
    -70,
    -2.5
   ],
   "lat": 58
  },
  {
   "id": "e8-gresie",
   "tip": "eticheta",
   "x": -90,
   "y": -36,
   "text": "gresia Sand Moon 60 × 60, rost 3 mm, pe planul înclinat",
   "spre": [
    -100,
    -1.2
   ],
   "lat": 62
  },
  {
   "id": "e8-fasie",
   "tip": "eticheta",
   "x": -16,
   "y": -20,
   "text": "lângă rigolă: fâșie îngustă",
   "spre": [
    -11.4,
    -0.4
   ],
   "anc": "end",
   "lat": 34
  },
  {
   "id": "e9-f4",
   "tip": "eticheta",
   "x": -4,
   "y": -16,
   "text": "faianța F4 pe ghenă și pe masca WC, până la 225",
   "spre": [
    -1.7,
    -12
   ],
   "anc": "end",
   "lat": 24
  },
  {
   "id": "e9-rost",
   "tip": "eticheta",
   "x": -29,
   "y": 17,
   "text": "rost elastic între faianță și rigolă",
   "spre": [
    -1.7,
    -0.15
   ],
   "lat": 24
  },
  {
   "id": "e10-prag",
   "tip": "eticheta",
   "x": -112,
   "y": -58,
   "text": "pragul PD1 placat cu gresie Sand Moon",
   "spre": [
    -122,
    -3
   ],
   "lat": 50
  },
  {
   "id": "e11-sticla",
   "tip": "eticheta",
   "x": -124,
   "y": -150,
   "text": "SanSwiss Easy walk-in, 70 × 200, negru mat",
   "spre": [
    -40,
    -180
   ],
   "lat": 46
  },
  {
   "id": "e11-profil",
   "tip": "eticheta",
   "x": 44,
   "y": -140,
   "text": "prinderea pe masca WC, după fișa produsului",
   "spre": [
    -2.65,
    -170
   ],
   "anc": "end",
   "lat": 40
  }
 ],
 "pasi": [
  {
   "titlu": "Ce se construiește",
   "cine": "toată echipa",
   "stare": "proiect",
   "vedere": {
    "x0": -152,
    "x1": 44,
    "y0": -120,
    "y1": 28
   },
   "apar": [
    "placa",
    "zid-est",
    "zid-vest",
    "ghena",
    "coloana",
    "tf1",
    "fantoma",
    "t-est",
    "t-ghena",
    "c-136",
    "c-25",
    "e0-rigola",
    "e0-prag",
    "e0-sticla",
    "e0-coloana"
   ],
   "text": "Dușul are 136 × 73 cm. Rigola liniară S6, de 7 × 73 cm, stă în pardoseală, lipită de fața măștii WC, de la prag până la masca de nord. Beneficiarul a confirmat locul pe 02.11.2026. Pardoseala are o singură pantă, de la peretele de est spre rigolă. Hidroizolația acoperă pardoseala și pereții dușului; peste ea vin gresia și faianța Sand Moon. Pragul PD1 (10 × 5) și peretele de sticlă S8 despart dușul de baie.",
   "puncte": [
    "Secțiunea e la capătul de nord al rigolei, unde ieșirea R8 merge spre coloana din ghena GH1. Acolo peretele e ghena, în planul măștii WC.",
    "De la prag până la ghenă, peretele de lângă rigolă e masca WC (MS1, gips-carton RU). Hidroizolația și faianța se fac la fel.",
    "Pragul și sticla nu sunt tăiate de secțiune: se văd în spate, spre baie."
   ],
   "verifica": [
    "Modelul rigolei și înălțimea ei de montaj (analiza/07 A9).",
    "Grosimea disponibilă între placă și cota 0 (analiza/07, întrebarea 9).",
    "Pragul PD1: ridicat de 5 cm, cum îl desenează A.27, sau la nivelul pardoselii (BA1).",
    "Produsul de hidroizolație, cu banda de colț și manșetele din același sistem: specs/07 G nu dă marca.",
    "Clasa antiderapantă a gresiei din duș (analiza/11 F4)."
   ],
   "sursa": "A.03 (rigola lipită de masca WC; 70 + 66); A.27 B01 și B03 (73; PD1 10 × 5); A.01 (25 + 136); elementele S6, PD1, S8 și GH1 din desen; beneficiarul, 02.11.2026"
  },
  {
   "titlu": "Placa și cota 0",
   "cine": "echipa de construcții, cu instalatorul",
   "stare": "propunere",
   "vedere": {
    "x0": -152,
    "x1": 44,
    "y0": -76,
    "y1": 28
   },
   "apar": [
    "sapa-veche",
    "reper",
    "c-h",
    "e1-veche",
    "e1-reper"
   ],
   "text": "Se demolează cabina de duș zidită și se scoate șapa veche până la placă. Apoi se trasează pe pereți cota 0, adică fața pardoselii finite a băii. Se măsoară H, de la placă până la cota 0, lângă ghenă și lângă peretele de est.",
   "puncte": [
    "analiza/03 estimează 8–12 cm pentru o rigolă liniară (corp, racord, pantă). Cifra reală o dă fișa rigolei alese.",
    "Dacă H nu ajunge: rigolă extra-plată sau sifon punctual (analiza/08, D23)."
   ],
   "verifica": [
    "H e scris pe perete, în dreptul rigolei și la peretele de est.",
    "Rigola se comandă după ce se știe H."
   ],
   "sursa": "A.01, lista de lucrări (poziția 4, trasare cota 0); analiza/01 (1.2, 1.10); analiza/07, întrebarea 9 și A9; analiza/03, punctul 16"
  },
  {
   "titlu": "Țeava R8 până la coloana din ghenă",
   "cine": "instalatorul",
   "stare": "propunere",
   "vedere": {
    "x0": -30,
    "x1": 34,
    "y0": -24,
    "y1": 26
   },
   "apar": [
    "teava-r8",
    "ramificatie",
    "e2-teava",
    "e2-coloana"
   ],
   "text": "Instalatorul verifică coloana de canalizare din ghena GH1: unde are ramificație și la ce înălțime. Țeava R8, Ø50, pleacă de la ieșirea rigolei, la capătul de nord, trece prin peretele ghenei și intră în coloană.",
   "puncte": [
    "Ieșirea rigolei (laterală sau verticală) și locul ei: după fișa modelului ales.",
    "Țeava are pantă spre coloană pe toată lungimea. Valoarea pantei o stabilește instalatorul."
   ],
   "verifica": [
    "Țeava nu are porțiuni orizontale sau în contrapantă.",
    "Proba de scurgere: apa turnată în ieșire ajunge în coloană, fără pierderi la îmbinări.",
    "Robinetele de pe coloanele din ghenă rămân accesibile după placare (BA9)."
   ],
   "atentie": "Planșele nu dau cota racordului R8. Dacă ramificația coloanei e mai sus decât ieșirea rigolei, apa nu curge: se anunță arhitecta înainte de șapă.",
   "sursa": "elementele S6, R8 și GH1 din desen (R8: Ø50, „de verificat”); analiza/11 BA9; analiza/07, întrebarea 7"
  },
  {
   "titlu": "Rigola la cota finală",
   "cine": "instalatorul",
   "stare": "propunere",
   "vedere": {
    "x0": -30,
    "x1": 34,
    "y0": -24,
    "y1": 26
   },
   "apar": [
    "rig-pat",
    "rig-corp",
    "rig-canal",
    "rig-gratar",
    "rig-flansa",
    "c-7",
    "e3-corp",
    "e3-gratar",
    "e3-flansa",
    "e3-pat"
   ],
   "text": "Corpul rigolei se lipește de fața peretelui pe toată lungimea de 73 cm, de la prag până la masca de nord. Se racordează la R8 și se reglează pe înălțime: grătarul ajunge la nivelul gresiei de lângă el. Pe lungime, rigola stă la nivel; panta e doar pe lățimea dușului.",
   "puncte": [
    "Propunerea noastră: grătarul la cota 0, iar pardoseala dușului urcă spre peretele de est. Dacă pragul PD1 nu se face (BA1), grătarul coboară sub cota 0 și se refac rândurile de faianță (pasul 9).",
    "Corpul se fixează pe pat de mortar sau pe picioarele lui, ca să nu se miște la turnarea șapei.",
    "Flanșa de perete a rigolei urcă pe ghenă și pe masca WC. Peste ea trece hidroizolația."
   ],
   "verifica": [
    "Rigola e la nivel pe toată lungimea (nivela pe corp).",
    "Înălțimea grătarului e măsurată de la cota 0, nu de la placă.",
    "Rigola rămâne acoperită cu capacul de protecție până la final."
   ],
   "sursa": "elementul S6 (A.03: lipită de masca WC, lată de ~7 cm; A.27 B01: 73); beneficiarul, 02.11.2026; fișa rigolei (de primit)"
  },
  {
   "titlu": "Șapa de pantă și miezul pragului",
   "cine": "echipa de construcții",
   "stare": "propunere",
   "vedere": {
    "x0": -152,
    "x1": 44,
    "y0": -76,
    "y1": 28
   },
   "apar": [
    "sapa-panta",
    "sapa-sub",
    "prag-miez",
    "e4-panta",
    "e4-prag"
   ],
   "text": "Șapa se trage cu o singură pantă: de la peretele de est spre rigolă, pe toată lățimea dușului (136 cm). Lângă rigolă, fața șapei ajunge la flanșa ei, fără treaptă. Odată cu șapa se face miezul pragului PD1, pe toată lățimea băii.",
   "puncte": [
    "Panta: după fișa rigolei, de confirmat. Pe desen e schematică.",
    "Cu o singură pantă, pardoseala e un plan înclinat: plăcile de 60 × 60 se pun fără tăieturi pe diagonală.",
    "Miezul pragului e mai jos decât 5 cm cu grosimea hidroizolației, a adezivului și a gresiei."
   ],
   "verifica": [
    "Apa turnată pe șapă ajunge la rigolă din orice punct, fără să băltească.",
    "Șapa e uscată înainte de hidroizolație; timpul, din fișa șapei."
   ],
   "atentie": "Șapa autonivelantă de 0,5–1 cm din specs/07 G nu se toarnă peste panta din duș: ar umple panta.",
   "sursa": "specs/07 G (șapa de pantă, grosime variabilă, 5 mp pentru baie și GS); analiza/01 (3.1); elementul PD1 (A.27 B01 și B03)"
  },
  {
   "titlu": "Amorsa, banda de colț și primul strat",
   "cine": "faianțarul",
   "stare": "propunere",
   "vedere": {
    "x0": -20,
    "x1": 14,
    "y0": -14,
    "y1": 14
   },
   "apar": [
    "h1-pard",
    "h1-ghena",
    "h1-est",
    "banda-est",
    "banda-rig",
    "banda-perete",
    "e5-banda-rig",
    "e5-banda-perete",
    "e5-strat1"
   ],
   "text": "Pe șapa uscată și pe pereți se dă amorsa sistemului de hidroizolație, apoi primul strat. În primul strat se lipesc: banda de colț între pardoseală și pereți, manșeta rigolei pe flanșa ei și banda peste flanșa de perete.",
   "puncte": [
    "Pe pereții dușului: manșete la ieșirile țevilor bateriei S4 (R6, R7) și ale capului de duș S5.",
    "Toate piesele sunt din același sistem cu hidroizolația, după fișa producătorului."
   ],
   "verifica": [
    "Banda de colț e continuă: masca WC, ghena, masca de nord MN1, peretele de est și pragul.",
    "Manșeta rigolei e lipită pe toată flanșa, fără cute."
   ],
   "atentie": "În analiza/01, hidroizolația (faza 3) e trecută înaintea gips-cartonului (faza 4). În duș, hidroizolația urcă pe măștile MS1 și MN1, deci se face după ce măștile sunt închise cu plăci RU și țevile din ele au trecut proba de presiune.",
   "sursa": "specs/07 G (hidroizolație pensulabilă: pardoseală și pereții zonei de duș integral, 21,35 mp); analiza/01 (fazele 3 și 4, proba 2.11); fișa sistemului de hidroizolație (de ales)"
  },
  {
   "titlu": "Al doilea strat, pe pardoseală și pe pereți",
   "cine": "faianțarul",
   "stare": "proiect",
   "vedere": {
    "x0": -152,
    "x1": 44,
    "y0": -76,
    "y1": 28
   },
   "apar": [
    "h2-pard",
    "h2-ghena",
    "h2-est",
    "prag-hidro",
    "e6-strat2",
    "e6-perete",
    "e6-prag"
   ],
   "text": "Al doilea strat se dă după uscarea primului, pe toată pardoseala băii și pe pereții dușului, până la tavanul fals TF1 (225). Pe rigolă, hidroizolația acoperă manșeta. Pragul PD1 se acoperă pe toate fețele, ca hidroizolația dușului să continue pe pardoseala băii.",
   "puncte": [
    "Pereții dușului: masca WC și ghena (F4), masca de nord MN1 cu nișa (F6, detaliul NI1), peretele de est (F7).",
    "Numărul de straturi, consumul și timpul de uscare: după fișa produsului."
   ],
   "verifica": [
    "Nicio porțiune descoperită la colțuri, la rigolă și la prag.",
    "Grosimea stratului, verificată cu consumul din fișă (kg/mp)."
   ],
   "sursa": "specs/07 G (hidroizolație pensulabilă: pardoseală și pereții zonei de duș integral, 21,35 mp); elementele F4, F6 și F7 (hidroizolație pe toată suprafața)"
  },
  {
   "titlu": "Proba de inundare, 24 de ore",
   "cine": "instalatorul, cu faianțarul",
   "stare": "propunere",
   "vedere": {
    "x0": -152,
    "x1": 44,
    "y0": -76,
    "y1": 28
   },
   "apar": [
    "apa",
    "prag-hidro",
    "e7-apa"
   ],
   "text": "Cu rigola astupată, dușul se umple cu apă peste hidroizolație și se lasă 24 de ore. Pragul ține apa în duș; fără prag, se face unul provizoriu.",
   "verifica": [
    "Nivelul apei nu scade: semn pe perete la început și la sfârșit.",
    "La vecinul de dedesubt nu apar pete.",
    "Se fac poze la probă și la trasee, înainte de gresie (analiza/07, întrebarea 52)."
   ],
   "atentie": "Apartamentul e la etajul 4: o infiltrație ajunge direct la vecin. Gresia se pune numai după probă.",
   "sursa": "specs/08 F (test de inundare 24 h obligatoriu); analiza/01 (3.4); analiza/07, întrebarea 51"
  },
  {
   "titlu": "Gresia pe pantă",
   "cine": "faianțarul",
   "stare": "proiect",
   "vedere": {
    "x0": -152,
    "x1": 44,
    "y0": -76,
    "y1": 28
   },
   "apar": [
    "adeziv-pard",
    "gresie-1",
    "gresie-2",
    "gresie-3",
    "prag-hidro",
    "e8-gresie",
    "e8-fasie"
   ],
   "text": "Gresia Sand Moon 60 × 60 se lipește pe hidroizolație, cu rost de 3 mm, pe planul înclinat al șapei. Spre rigolă, ultima placă ajunge la marginea ei, la nivelul grătarului.",
   "puncte": [
    "Rosturile din duș, după A.04: rândurile pornesc de la peretele de est, iar pe lungime rostul e la 36,5 cm de masca de nord.",
    "A.04 nu desenează rigola. Cu două rânduri de 60 de la peretele de est, lângă rigolă rămâne o fâșie de ~5–7 cm (calculul nostru)."
   ],
   "verifica": [
    "Placa de lângă rigolă e la nivelul grătarului, fără treaptă.",
    "Apa turnată ajunge la rigolă din orice punct.",
    "Clasa antiderapantă a gresiei din duș (F4)."
   ],
   "sursa": "specs/07 A (Sand Moon 60 × 60, rost 3 mm); A.04 (stereotomia băii, rostul la 36,5); analiza/11 F4"
  },
  {
   "titlu": "Faianța F4 până la rigolă",
   "cine": "faianțarul",
   "stare": "proiect",
   "vedere": {
    "x0": -30,
    "x1": 34,
    "y0": -24,
    "y1": 26
   },
   "apar": [
    "adeziv-ghena",
    "faianta-f4",
    "adeziv-est",
    "faianta-f7",
    "e9-f4",
    "e9-rost"
   ],
   "text": "Faianța F4 urcă pe ghenă și pe masca WC până la tavanul fals (225). Rândul de jos se așază pe marginea rigolei, cu rost elastic. Rândurile sunt la 60, 120 și 180, iar rostul vertical e la 41,5 cm de masca de nord, în axa bateriei S4.",
   "puncte": [
    "Pe peretele de est (F7), punctul de pornire e la 83 cm de masca de nord.",
    "În colțurile dușului și lângă rigolă, rostul e cu silicon sanitar."
   ],
   "verifica": [
    "Rândul de jos stă pe marginea rigolei, nu pe grătar: grătarul se scoate la curățat."
   ],
   "atentie": "Rândurile de 60 se măsoară de la cota 0. Dacă grătarul coboară sub cota 0, primul rând are peste 60 cm și nu iese dintr-o placă.",
   "sursa": "elementele F4 (A.27 B01: rândurile la 60, 120, 180; rostul la 41,5) și F7 (A.27 B03: pornirea la 83)"
  },
  {
   "titlu": "Pragul PD1 placat",
   "cine": "faianțarul",
   "stare": "proiect",
   "vedere": {
    "x0": -152,
    "x1": 44,
    "y0": -76,
    "y1": 28
   },
   "apar": [
    "prag-placare",
    "c-5",
    "e10-prag"
   ],
   "text": "Pragul PD1, de 10 × 5 cm, se placează cu Sand Moon pe toate fețele vizibile, pe toată lățimea băii, de la masca WC până la peretele de est. Fâșia de 10 cm e cea din A.03 și A.04.",
   "verifica": [
    "Fața de sus a pragului e la nivel și dreaptă: pe ea stă peretele de sticlă."
   ],
   "atentie": "A.27 desenează pragul înalt de 5 cm, deși dușul e walk-in (BA1). Fără prag, apa nu mai e ținută în duș: grătarul coboară sub cota 0, iar faianța și peretele de sticlă se refac.",
   "sursa": "elementul PD1 (A.27 B01 și B03: 10 × 5; A.03 și A.04: fâșia de 10); analiza/11 BA1"
  },
  {
   "titlu": "Peretele de sticlă S8",
   "cine": "instalatorul",
   "stare": "proiect",
   "vedere": {
    "x0": -156,
    "x1": 46,
    "y0": -236,
    "y1": 30
   },
   "apar": [
    "sticla",
    "sticla-profil",
    "c-70",
    "c-66",
    "c-200",
    "c-225",
    "e11-sticla",
    "e11-profil"
   ],
   "text": "Peretele SanSwiss Easy walk-in, 70 × 200 cm, negru mat, stă pe prag, perpendicular pe masca WC, și se prinde de ea. Între sticlă și peretele de est rămân 66 cm de trecere.",
   "puncte": [
    "Prinderea pe perete și bara de stabilizare: după fișa produsului (STR4P0700607). Bara nu e desenată în planșe.",
    "Găurile pentru prinderi trec prin faianță și hidroizolație: se umplu cu silicon sanitar înainte de șuruburi."
   ],
   "verifica": [
    "Sticla e verticală (nivela pe muchie).",
    "Cu dușul pornit, apa nu trece pe sub sticlă spre baie."
   ],
   "sursa": "elementul S8 (A.03: 70 + 66; A.27 B01: pe prag); specs/04, rândul 29"
  }
 ]
};
