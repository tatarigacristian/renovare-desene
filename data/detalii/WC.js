// Masca WC cu rezervorul încastrat (baie și GS) — pașii de montaj, pentru fereastra animată din desene/js/pasi.js.
// Format: JSON strict după „= ”. Secțiune verticală prin axa WC din GS, în cm: x de la zidul din spatele măștii
// spre cameră, y = −h (h de la pardoseala finită). Câmpurile sunt descrise în desene/README.md.
window.DETALII = window.DETALII || {};
window.DETALII["WC"] = {
 "id": "WC",
 "nume": "Masca WC cu rezervorul încastrat",
 "subtitlu": "Secțiune verticală prin axa WC, privită din lateral. Desenul e pentru GS (masca MWC, 20 cm); baia (masca MS1, 25 cm) are aceiași pași, iar diferențele sunt scrise la fiecare pas",
 "orientare": "Stânga: zidul din spatele măștii. Dreapta: camera.",
 "camera": "gs",
 "perete": "E",
 "sursa": "A.01, A.03, A.24, A.25, A.27; specs/04, specs/07, specs/08 A; analiza/01, analiza/07, analiza/11; gs.js, baie.js",
 "revizie": {
  "nr": 1,
  "data": "2026-11-02"
 },
 "nota": "Ordinea pașilor e propunerea noastră, după analiza/01. Cotele de montaj ale cadrului se iau din fișa Laufen INEO NOVA, care se citește înainte de montaj. Se confirmă cu instalatorul, cu echipa de gips-carton și cu tâmplarul.",
 "vedere": {
  "x0": -12,
  "x1": 76,
  "y0": -126,
  "y1": 12
 },
 "forme": [
  {
   "id": "tavan",
   "tip": "dreptunghi",
   "x": -10,
   "y": -262,
   "w": 270,
   "h": 12,
   "umplere": "ciment"
  },
  {
   "id": "placa",
   "tip": "dreptunghi",
   "x": -10,
   "y": 6,
   "w": 270,
   "h": 10,
   "umplere": "ciment"
  },
  {
   "id": "zid",
   "tip": "dreptunghi",
   "x": -10,
   "y": -250,
   "w": 10,
   "h": 256,
   "umplere": "zid"
  },
  {
   "id": "str",
   "tip": "structura",
   "x": 0,
   "y": -118,
   "w": 17.5,
   "h": 119.3,
   "profile": []
  },
  {
   "id": "sapa",
   "tip": "dreptunghi",
   "x": 0,
   "y": 1.6,
   "w": 260,
   "h": 4.4,
   "umplere": "sapa"
  },
  {
   "id": "hidro",
   "tip": "dreptunghi",
   "x": 0,
   "y": 1.3,
   "w": 260,
   "h": 0.3,
   "umplere": "hidroizolatie"
  },
  {
   "id": "adeziv",
   "tip": "dreptunghi",
   "x": 20,
   "y": 0.8,
   "w": 240,
   "h": 0.5,
   "umplere": "adeziv"
  },
  {
   "id": "gresie",
   "tip": "dreptunghi",
   "x": 20,
   "y": 0,
   "w": 240,
   "h": 0.8,
   "umplere": "faianta"
  },
  {
   "id": "s2-cadru",
   "tip": "poligon",
   "puncte": [
    [
     4.5,
     -112
    ],
    [
     17.5,
     -112
    ],
    [
     17.5,
     0
    ],
    [
     17,
     0
    ],
    [
     17,
     6
    ],
    [
     15.5,
     6
    ],
    [
     15.5,
     0
    ],
    [
     6.5,
     0
    ],
    [
     6.5,
     6
    ],
    [
     5,
     6
    ],
    [
     5,
     0
    ],
    [
     4.5,
     0
    ],
    [
     4.5,
     -106.8
    ],
    [
     0,
     -106.8
    ],
    [
     0,
     -108
    ],
    [
     4.5,
     -108
    ],
    [
     4.5,
     -110.8
    ],
    [
     5.7,
     -110.8
    ],
    [
     5.7,
     -1.2
    ],
    [
     15.8,
     -1.2
    ],
    [
     15.8,
     -110.8
    ],
    [
     5.7,
     -110.8
    ],
    [
     4.5,
     -110.8
    ]
   ],
   "umplere": "otel"
  },
  {
   "id": "s2-rezervor",
   "tip": "dreptunghi",
   "x": 5.7,
   "y": -110.8,
   "w": 10.1,
   "h": 46,
   "umplere": "pvc"
  },
  {
   "id": "s2-cutie",
   "tip": "dreptunghi",
   "x": 15.8,
   "y": -113,
   "w": 4.2,
   "h": 12.4,
   "umplere": "pvc"
  },
  {
   "id": "s2-apa",
   "tip": "fir",
   "puncte": [
    [
     2.2,
     6
    ],
    [
     2.2,
     -100
    ],
    [
     5.7,
     -100
    ]
   ],
   "culoare": "apa",
   "gros": 2
  },
  {
   "id": "uw-sus",
   "tip": "dreptunghi",
   "x": 0,
   "y": -118,
   "w": 17.5,
   "h": 0.6,
   "umplere": "otel"
  },
  {
   "id": "capac",
   "tip": "dreptunghi",
   "x": 0,
   "y": -120,
   "w": 20,
   "h": 2,
   "umplere": "gips"
  },
  {
   "id": "ru1-sus",
   "tip": "dreptunghi",
   "x": 17.5,
   "y": -118,
   "w": 1.25,
   "h": 5,
   "umplere": "gips"
  },
  {
   "id": "ru1-jos",
   "tip": "dreptunghi",
   "x": 17.5,
   "y": -100.6,
   "w": 1.25,
   "h": 101.9,
   "umplere": "gips"
  },
  {
   "id": "ru2-sus",
   "tip": "dreptunghi",
   "x": 18.75,
   "y": -118,
   "w": 1.25,
   "h": 5,
   "umplere": "gips"
  },
  {
   "id": "ru2-jos",
   "tip": "dreptunghi",
   "x": 18.75,
   "y": -100.6,
   "w": 1.25,
   "h": 101.9,
   "umplere": "gips"
  },
  {
   "id": "or1-sus",
   "tip": "dreptunghi",
   "x": 20,
   "y": -120,
   "w": 1.18,
   "h": 5,
   "umplere": "pvc"
  },
  {
   "id": "or1-jos",
   "tip": "dreptunghi",
   "x": 20,
   "y": -98.6,
   "w": 1.18,
   "h": 98.6,
   "umplere": "pvc"
  },
  {
   "id": "s2-racord",
   "tip": "dreptunghi",
   "x": 11,
   "y": -28.5,
   "w": 10.5,
   "h": 11,
   "umplere": "pvc"
  },
  {
   "id": "s2-scurgere",
   "tip": "cerc",
   "x": 11,
   "y": -23,
   "r": 5.5,
   "umplere": "pvc"
  },
  {
   "id": "s2-tije",
   "tip": "fir",
   "puncte": [
    [
     15.8,
     -33
    ],
    [
     26,
     -33
    ]
   ],
   "culoare": "#52525b",
   "gros": 3
  },
  {
   "id": "s3",
   "tip": "dreptunghi",
   "x": 20,
   "y": -115,
   "w": 1.3,
   "h": 16.4,
   "umplere": "negru"
  },
  {
   "id": "s1",
   "tip": "poligon",
   "puncte": [
    [
     21.2,
     -45
    ],
    [
     66,
     -45
    ],
    [
     69.5,
     -44.2
    ],
    [
     71.2,
     -42
    ],
    [
     71,
     -38.5
    ],
    [
     68.5,
     -34.5
    ],
    [
     63,
     -30.5
    ],
    [
     54,
     -27.5
    ],
    [
     44,
     -25
    ],
    [
     36,
     -21.5
    ],
    [
     30,
     -16.5
    ],
    [
     27,
     -12
    ],
    [
     21.2,
     -12
    ]
   ],
   "umplere": "negru"
  },
  {
   "id": "dwc-cutie",
   "tip": "dreptunghi",
   "x": 0,
   "y": -250,
   "w": 18,
   "h": 130,
   "umplere": "alb"
  },
  {
   "id": "dwc-raft1",
   "tip": "dreptunghi",
   "x": 0,
   "y": -153.6,
   "w": 18,
   "h": 1.8,
   "umplere": "pal"
  },
  {
   "id": "dwc-raft2",
   "tip": "dreptunghi",
   "x": 0,
   "y": -190.4,
   "w": 18,
   "h": 1.8,
   "umplere": "pal"
  },
  {
   "id": "dwc-raft3",
   "tip": "dreptunghi",
   "x": 0,
   "y": -222.2,
   "w": 18,
   "h": 1.8,
   "umplere": "pal"
  },
  {
   "id": "dwc-usa",
   "tip": "dreptunghi",
   "x": 18,
   "y": -250,
   "w": 2,
   "h": 130,
   "umplere": "alb"
  },
  {
   "id": "dwc-or2",
   "tip": "dreptunghi",
   "x": 20,
   "y": -250,
   "w": 1.18,
   "h": 130,
   "umplere": "pvc"
  },
  {
   "id": "reper",
   "tip": "linie",
   "puncte": [
    [
     -10,
     0
    ],
    [
     260,
     0
    ]
   ],
   "temporar": true
  },
  {
   "id": "fantoma",
   "tip": "contur",
   "dreptunghiuri": [
    [
     0,
     -120,
     21.2,
     120
    ],
    [
     0,
     -250,
     21.2,
     130
    ],
    [
     4.5,
     -112,
     13,
     112
    ],
    [
     21.2,
     -45,
     50,
     33
    ]
   ],
   "temporar": true
  },
  {
   "id": "fata-masca",
   "tip": "contur",
   "dreptunghiuri": [
    [
     17.5,
     -120,
     3.7,
     121.3
    ]
   ],
   "temporar": true
  },
  {
   "id": "t-zid",
   "tip": "text",
   "x": -0.6,
   "y": -128,
   "text": "zidărie",
   "anc": "end"
  },
  {
   "id": "t-camera",
   "tip": "text",
   "x": 120,
   "y": -5,
   "text": "camera →",
   "anc": "end"
  },
  {
   "id": "c-120",
   "tip": "cota",
   "a": [
    -20,
    0
   ],
   "b": [
    -20,
    -120
   ],
   "text": "120",
   "parte": "st",
   "martori": [
    [
     0,
     -120,
     -20.6,
     -120
    ]
   ]
  },
  {
   "id": "c-130",
   "tip": "cota",
   "a": [
    -20,
    -120
   ],
   "b": [
    -20,
    -250
   ],
   "text": "130",
   "parte": "st",
   "martori": [
    [
     0,
     -250,
     -20.6,
     -250
    ]
   ]
  },
  {
   "id": "c-112",
   "tip": "cota",
   "a": [
    26,
    0
   ],
   "b": [
    26,
    -112
   ],
   "text": "112",
   "martori": [
    [
     17.5,
     -112,
     26.6,
     -112
    ]
   ]
  },
  {
   "id": "c-13",
   "tip": "cota",
   "a": [
    4.5,
    -116
   ],
   "b": [
    17.5,
    -116
   ],
   "text": "13",
   "martori": [
    [
     4.5,
     -116.6,
     4.5,
     -112
    ],
    [
     17.5,
     -116.6,
     17.5,
     -112
    ]
   ]
  },
  {
   "id": "c-20",
   "tip": "cota",
   "a": [
    0,
    -124
   ],
   "b": [
    20,
    -124
   ],
   "text": "20",
   "martori": [
    [
     20,
     -124.6,
     20,
     -118
    ]
   ]
  },
  {
   "id": "c-25",
   "tip": "cota",
   "a": [
    17.5,
    -80
   ],
   "b": [
    20,
    -80
   ],
   "text": "2,5"
  },
  {
   "id": "c-45gol",
   "tip": "cota",
   "a": [
    0,
    -80
   ],
   "b": [
    4.5,
    -80
   ],
   "text": "4,5",
   "culoare": "intre"
  },
  {
   "id": "c-45",
   "tip": "cota",
   "a": [
    75,
    0
   ],
   "b": [
    75,
    -45
   ],
   "text": "45",
   "martori": [
    [
     71.2,
     -45,
     75.6,
     -45
    ]
   ]
  },
  {
   "id": "c-70",
   "tip": "cota",
   "a": [
    75,
    -45
   ],
   "b": [
    75,
    -115
   ],
   "text": "70",
   "martori": [
    [
     21.3,
     -115,
     75.6,
     -115
    ]
   ]
  },
  {
   "id": "c-50",
   "tip": "cota",
   "a": [
    21.2,
    -50
   ],
   "b": [
    71.2,
    -50
   ],
   "text": "~50",
   "martori": [
    [
     21.2,
     -50.6,
     21.2,
     -45
    ],
    [
     71.2,
     -50.6,
     71.2,
     -42
    ]
   ]
  },
  {
   "id": "e0-dulap",
   "tip": "eticheta",
   "x": 100,
   "y": -215,
   "text": "GS: dulapul DWC, de la 120 până la placă. Baie: dulapul M09-D, în mască",
   "spre": [
    10,
    -190
   ]
  },
  {
   "id": "e0-cadru",
   "tip": "eticheta",
   "x": 100,
   "y": -170,
   "text": "cadrul Laufen INEO NOVA (112 × 45 × 13), cu rezervorul în el",
   "spre": [
    11,
    -95
   ]
  },
  {
   "id": "e0-masca",
   "tip": "eticheta",
   "x": 100,
   "y": -105,
   "text": "masca de gips-carton RU: 20 cm în GS, 25 cm în baie",
   "spre": [
    8,
    -60
   ]
  },
  {
   "id": "e0-vas",
   "tip": "eticheta",
   "x": 100,
   "y": -55,
   "text": "vasul NOVELA BM și clapeta PL NV1, negre",
   "spre": [
    45,
    -30
   ]
  },
  {
   "id": "e1-fata",
   "tip": "eticheta",
   "x": 80,
   "y": -116,
   "text": "aici vin plăcile și profilul ORAC: fața măștii la 20 cm de zid (în baie, 25)",
   "spre": [
    19.4,
    -108
   ]
  },
  {
   "id": "e1-cadru",
   "tip": "eticheta",
   "x": 80,
   "y": -92,
   "text": "cadrul S2: consolele în zid, picioarele pe placa brută",
   "spre": [
    16.6,
    -80
   ]
  },
  {
   "id": "e1-tije",
   "tip": "eticheta",
   "x": 80,
   "y": -48,
   "text": "tijele vasului (cota, din fișa cadrului)",
   "spre": [
    24,
    -33
   ]
  },
  {
   "id": "e1-reper",
   "tip": "eticheta",
   "x": 80,
   "y": -14,
   "text": "reperul pardoselii finite (±0)",
   "spre": [
    60,
    0
   ]
  },
  {
   "id": "e2-apa",
   "tip": "eticheta",
   "x": 80,
   "y": -84,
   "text": "apa rece urcă în spatele cadrului și intră în rezervor pe sus",
   "spre": [
    2.2,
    -70
   ]
  },
  {
   "id": "e2-scurgere",
   "tip": "eticheta",
   "x": 80,
   "y": -46,
   "text": "scurgerea Ø 110, la ~23 cm (cota, din fișa cadrului), cu dop",
   "spre": [
    19,
    -23
   ]
  },
  {
   "id": "e3-hidro",
   "tip": "eticheta",
   "x": 36,
   "y": -22,
   "text": "hidroizolația, pe toată pardoseala, și sub mască",
   "spre": [
    24,
    1.45
   ]
  },
  {
   "id": "e3-sapa",
   "tip": "eticheta",
   "x": 36,
   "y": -13,
   "text": "șapa, turnată în jurul picioarelor cadrului",
   "spre": [
    48,
    4
   ]
  },
  {
   "id": "e4-profil",
   "tip": "eticheta",
   "x": 80,
   "y": -112,
   "text": "profilul de sus, sub capac (GS: la 118)",
   "spre": [
    10,
    -117.7
   ]
  },
  {
   "id": "e4-str",
   "tip": "eticheta",
   "x": 80,
   "y": -84,
   "text": "structura măștii, în jurul cadrului",
   "spre": [
    3.2,
    -40
   ]
  },
  {
   "id": "e5-decupaj",
   "tip": "eticheta",
   "x": 26,
   "y": -112,
   "text": "golul pentru clapetă și cutia rezervorului",
   "spre": [
    18.5,
    -106
   ]
  },
  {
   "id": "e5-placa",
   "tip": "eticheta",
   "x": 26,
   "y": -88,
   "text": "două plăci RU (propunerea noastră)",
   "spre": [
    18.75,
    -75
   ]
  },
  {
   "id": "e6-baie",
   "tip": "eticheta",
   "x": 30,
   "y": -26,
   "text": "baie: hidroizolație și faianța F4 pe partea măștii din duș (în afara secțiunii)"
  },
  {
   "id": "e6-gresie",
   "tip": "eticheta",
   "x": 36,
   "y": -16,
   "text": "gresia, până la plăcile măștii",
   "spre": [
    28,
    0.4
   ]
  },
  {
   "id": "e7-gol",
   "tip": "eticheta",
   "x": 26,
   "y": -112,
   "text": "golul clapetei, decupat și în ORAC",
   "spre": [
    20.6,
    -106
   ]
  },
  {
   "id": "e7-orac",
   "tip": "eticheta",
   "x": 26,
   "y": -88,
   "text": "GS: profil ORAC W109, 11,8 mm. Baie: riflaj M09-P, 2 cm",
   "spre": [
    20.6,
    -75
   ]
  },
  {
   "id": "e8-clapeta",
   "tip": "eticheta",
   "x": 83,
   "y": -110,
   "text": "clapeta PL NV1, negru mat",
   "spre": [
    21.3,
    -107
   ]
  },
  {
   "id": "e8-vas",
   "tip": "eticheta",
   "x": 83,
   "y": -84,
   "text": "vasul NOVELA BM, prins pe tije, lipit de mască",
   "spre": [
    50,
    -38
   ]
  },
  {
   "id": "e8-s6",
   "tip": "eticheta",
   "x": 83,
   "y": -20,
   "text": "GS: bateria S6 la 35 cm, la 30 cm de axa WC (în afara secțiunii)"
  },
  {
   "id": "e9-dwc",
   "tip": "eticheta",
   "x": 100,
   "y": -200,
   "text": "GS: dulapul DWC, adânc de 20 cm, cu uși placate cu ORAC (OR2)",
   "spre": [
    10,
    -170
   ]
  },
  {
   "id": "e9-baie",
   "tip": "eticheta",
   "x": 100,
   "y": -150,
   "text": "baie: dulapul M09-D e în mască, de la ~120 la ~245,5"
  }
 ],
 "pasi": [
  {
   "titlu": "Ce se construiește",
   "cine": "toată echipa",
   "stare": "proiect",
   "vedere": {
    "x0": -30,
    "x1": 190,
    "y0": -264,
    "y1": 18
   },
   "apar": [
    "tavan",
    "placa",
    "zid",
    "fantoma",
    "t-zid",
    "t-camera",
    "c-120",
    "c-130",
    "c-45",
    "c-70",
    "e0-dulap",
    "e0-cadru",
    "e0-masca",
    "e0-vas"
   ],
   "text": "Vasul WC suspendat stă pe cadrul Laufen INEO NOVA (112 × 45 × 13 cm), cu rezervorul în el. Cadrul se ascunde într-o mască de gips-carton RU. Desenul e secțiunea prin axa WC din GS; baia are același cadru, același vas și aceeași clapetă, într-o mască mai adâncă.",
   "puncte": [
    "GS (masca MWC): 20 cm de la zid la fața plăcilor, 120 cm înălțime, capac la 118–120. Pe față, profil ORAC W109 VALLEY. Deasupra, dulapul DWC, până la placă.",
    "Baie (masca MS1): 25 cm de la zid, până la placă. În dreptul WC-ului, pe față, riflajul M09-P (MDF P751, 2 cm); deasupra cadrului, dulapul M09-D, în mască. Partea măștii din duș (155–206 cm de colț) e sub faianța F4.",
    "În ambele camere: vasul NOVELA BM negru, cu marginea de sus la 45 cm, și clapeta Laufen PL NV1 negru mat, cu marginea de sus la 115 cm."
   ],
   "verifica": [
    "Fișa de montaj Laufen INEO NOVA (OS39217): înălțimea cadrului față de pardoseala finită, cotele racordurilor, distanța dintre tije și grosimea placării.",
    "Unde e coloana de canalizare în baie și în GS și dacă se poate face panta de 2 % până la ea (analiza/07, întrebarea 7).",
    "Clapeta PL NV1 se potrivește pe INEO NOVA (specs/04: se confirmă la comandă).",
    "GS: modelul dușului igienic Kludi Bozz (aparent sau încastrat), ales înainte de cadru."
   ],
   "sursa": "A.01 („Mască WC încastrat”); A.03; A.24, A.25 B05–B07 (GS); A.27 B01 (baie); specs/04 (vasul, cadrul, clapeta); specs/08 A"
  },
  {
   "titlu": "Cadrul S2, prins în placă și în zid",
   "cine": "instalatorul",
   "stare": "proiect",
   "vedere": {
    "x0": -16,
    "x1": 122,
    "y0": -132,
    "y1": 16
   },
   "apar": [
    "s2-cadru",
    "s2-rezervor",
    "s2-cutie",
    "s2-tije",
    "reper",
    "fata-masca",
    "c-112",
    "c-13",
    "c-20",
    "e1-fata",
    "e1-cadru",
    "e1-tije",
    "e1-reper"
   ],
   "text": "Se trasează axa WC și reperul pardoselii finite (±0). Cadrul se prinde cu picioarele în placa brută și cu consolele în zid, apoi se reglează la înălțime și la verticală. Picioarele se reglează după reperul ±0: șapa și gresia vin după.",
   "puncte": [
    "Axa WC: în GS la 58 cm de colțul N-E (82 cm de peretele lavoarului); în baie la 120 cm de colțul S-V (37,5 + 82,5).",
    "Cadrul stă lipit de spatele plăcilor măștii, ca în baie.js. GS: 20 − 2,5 cm de plăci = 17,5 cm de la zid, deci în spatele cadrului rămân ~4,5 cm. Baie: ~9,5 cm (A.03: ~10).",
    "Tijele vasului și cotul de scurgere vin cu cadrul; cotele lor sunt în fișa Laufen."
   ],
   "verifica": [
    "Cadrul e vertical pe ambele direcții și centrat pe axa WC.",
    "Marcajul de înălțime de pe cadru e la cota din fișă, măsurată de la reperul ±0.",
    "GS: consolele ajung la zid peste golul de ~4,5 cm (cât se reglează, din fișa cadrului)."
   ],
   "sursa": "A.03 (axa WC); specs/04 și specs/08 A (Laufen INEO NOVA OS39217, 112 × 45 × 13 cm); gs.js S2, MWC; baie.js S2"
  },
  {
   "titlu": "Apa, scurgerea Ø 110 și proba de presiune",
   "cine": "instalatorul",
   "stare": "propunere",
   "vedere": {
    "x0": -16,
    "x1": 122,
    "y0": -132,
    "y1": 16
   },
   "apar": [
    "s2-apa",
    "s2-racord",
    "s2-scurgere",
    "e2-apa",
    "e2-scurgere"
   ],
   "text": "Apa rece se leagă la rezervor, sus pe cadru, iar scurgerea Ø 110 pleacă din cotul cadrului spre coloană, cu pantă de min. 2 %. Înainte să se închidă ceva, se face proba de presiune.",
   "puncte": [
    "GS: scurgerea R1 la ~23 cm (valoarea obișnuită la cadrele de 112 cm; cota exactă, din fișă) și apa R2 sus, pe cadru. Lângă cadru, spre sud, țevile dușului igienic: R3 (caldă) și R4 (rece), la 35 cm.",
    "Baie: apa R1 și scurgerea R2, în axa WC. Până la ghena GH1 sunt ~85 cm de țeavă.",
    "Racordurile rămân cu dopurile puse până la montajul vasului."
   ],
   "verifica": [
    "Proba de presiune la apă: min. 6 bar, 2 ore (analiza/01, 2.11).",
    "Panta scurgerii, cu nivela, pe toată lungimea.",
    "Poze la toate traseele, cu ruleta în cadru (analiza/01, 2.12)."
   ],
   "atentie": "GS: între marginea cadrului (80,5 cm de colț) și axa bateriei S6 (88 cm) rămân ~7 cm pentru robinet și țevi. Modelul Kludi Bozz se alege înainte de montajul cadrului.",
   "sursa": "gs.js R1–R4 și avertismentul despre S2 și S6; baie.js R1, R2; specs/08 A și F; analiza/01 2.11–2.12"
  },
  {
   "titlu": "Șapa și hidroizolația pardoselii",
   "cine": "echipa de șape și hidroizolație",
   "stare": "proiect",
   "vedere": {
    "x0": -12,
    "x1": 66,
    "y0": -30,
    "y1": 14
   },
   "apar": [
    "sapa",
    "hidro",
    "e3-sapa",
    "e3-hidro"
   ],
   "text": "Șapa se toarnă în jurul picioarelor cadrului, până la nivelul cerut de gresie. Peste ea, hidroizolația pensulabilă acoperă toată pardoseala, inclusiv locul măștii.",
   "puncte": [
    "Baie și GS: hidroizolație pe toată pardoseala; în baie, și pe pereții dușului (specs/07 G). Masca se construiește după, pe pardoseala hidroizolată (analiza/01: faza 3, apoi faza 4).",
    "În baie, grosimea șapei depinde de rigola dușului, încă nealeasă (analiza/07, întrebarea 9)."
   ],
   "verifica": [
    "Hidroizolația e continuă în jurul picioarelor cadrului și al țevilor care ies din pardoseală.",
    "Testul de inundare de 24 h, înainte de placări (specs/08 F; analiza/01, 3.4)."
   ],
   "sursa": "specs/07 G; specs/08 F; analiza/01 faza 3"
  },
  {
   "titlu": "Structura măștii",
   "cine": "echipa de gips-carton",
   "stare": "proiect",
   "vedere": {
    "x0": -16,
    "x1": 122,
    "y0": -132,
    "y1": 16
   },
   "apar": [
    "str",
    "uw-sus",
    "e4-str",
    "e4-profil"
   ],
   "text": "Structura metalică a măștii se face în jurul cadrului, fără să-l miște din poziție. GS: până la 118 cm, cu profilul pe care stă capacul. Baie: până la placă, cu locul dulapului M09-D deasupra cadrului.",
   "puncte": [
    "GS: 97,9 cm lungime; latura de nord rămâne în spatele dulapului M03.",
    "Baie: de la 90 la 206 cm de colțul S-V. Peretele de sticlă S8 se prinde de mască, la ~158 cm.",
    "Profilele și distanța dintre ele nu sunt în planșe: le alege echipa de gips-carton."
   ],
   "verifica": [
    "Fața structurii e verticală și în plan, la 17,5 cm de zid în GS (cu placă dublă).",
    "Baie: tâmplarul a dat adâncimea interioară a lui M09-D peste cadrul de 13 cm (BA10)."
   ],
   "atentie": "Baie: în aceeași mască intră corpul bateriei dușului S4 și țeava spre capul de duș S5. Se pozează și se probează înainte de plăci.",
   "sursa": "A.01; A.24 și A.25 B06 (GS: 20, 97,9, 120); A.03 (baie: 25, 90–206); gs.js MWC; baie.js MS1, S4, S5, S8"
  },
  {
   "titlu": "Placa RU dublă, cu golurile",
   "cine": "echipa de gips-carton",
   "stare": "propunere",
   "vedere": {
    "x0": -6,
    "x1": 46,
    "y0": -128,
    "y1": -52
   },
   "apar": [
    "capac",
    "ru1-sus",
    "ru1-jos",
    "ru2-sus",
    "ru2-jos",
    "c-20",
    "c-25",
    "c-45gol",
    "e5-placa",
    "e5-decupaj"
   ],
   "text": "Masca se închide cu două plăci de gips-carton RU. În plăci se decupează golul clapetei și trecerile pentru scurgere, apă și cele două tije. GS: tot acum se închide capacul de la 118–120 și se fac golurile bateriei S6.",
   "puncte": [
    "Planșele scriu doar „gips-carton RU”. Placa dublă e propunerea noastră: vasul se strânge pe tije peste placare.",
    "GS: 4,5 + 13 + 2,5 = 20 cm. Cu o singură placă, în spatele cadrului ar rămâne ~5,75 cm.",
    "Baie: fața plăcilor la 25 cm de zid."
   ],
   "verifica": [
    "Fața măștii e la 20 cm de zid în GS și la 25 cm în baie, pe toată lungimea.",
    "Racordurile și tijele ies cât cere fișa cadrului pentru toată grosimea placării: GS ~3,7 cm (plăcile + ORAC 1,18 cm), baie ~4,5 cm (plăcile + riflajul de 2 cm).",
    "Dopurile sunt încă pe racorduri."
   ],
   "sursa": "specs/07 F (RU în baie și GS); gs.js MWC, OR1 și avertismentul despre S2 și S6; baie.js MS1, M09-P"
  },
  {
   "titlu": "Gresia și, în baie, faianța din duș",
   "cine": "faianțarul",
   "stare": "proiect",
   "vedere": {
    "x0": -12,
    "x1": 66,
    "y0": -30,
    "y1": 14
   },
   "apar": [
    "adeziv",
    "gresie",
    "e6-gresie",
    "e6-baie"
   ],
   "text": "Gresia se pune până la fața plăcilor măștii. În baie, partea măștii din duș se hidroizolează și se placează cu faianța F4, până la tavanul fals (225 cm).",
   "puncte": [
    "Pe masca din GS nu vine faianță: fața ei se placează cu profil ORAC.",
    "Baie: hidroizolația acoperă toți pereții dușului, deci și masca WC între 155 și 206 cm (specs/07 G). Faianța F4 are rostul vertical la 41,5 cm de masca de nord, în axa bateriei S4.",
    "Gresia din GS continuă rosturile din hol (A.04)."
   ],
   "verifica": [
    "Gresia din fața măștii e la reperul ±0.",
    "Baie: muchia faianței F4 de la 155 cm e verticală; lângă ea vine riflajul M09-P."
   ],
   "sursa": "specs/07 A, B și G; baie.js F4; gs.js (rosturile gresiei, A.04)"
  },
  {
   "titlu": "Fața măștii: ORAC în GS, riflaj în baie",
   "cine": "finisorul (GS) sau tâmplarul (baie)",
   "stare": "proiect",
   "vedere": {
    "x0": -6,
    "x1": 46,
    "y0": -128,
    "y1": -52
   },
   "apar": [
    "or1-sus",
    "or1-jos",
    "e7-orac",
    "e7-gol"
   ],
   "text": "GS: panourile ORAC W109 VALLEY (11,8 mm) se lipesc pe mască, de la pardoseală până la capac, și se vopsesc San Marco P722 Alloro. Baie: riflajul M09-P (MDF P751, 2 cm) acoperă masca de la pardoseală până la 120 cm. În ambele se decupează golul clapetei și trecerile racordurilor.",
   "puncte": [
    "GS: pe lățime intră 3 panouri de 24,9 cm (74,7 cm), de la latura lui M03 până la capătul măștii. Se decupează și locul bateriei S6.",
    "Profilul ORAC nu e în lista de achiziții (analiza/05 A16). Cine îl lipește nu e scris; vopsirea lui e la vopsitorii (analiza/01, 7.6)."
   ],
   "verifica": [
    "Canelurile ORAC sunt verticale, iar decupajele sunt curate în jurul golului clapetei și al racordurilor."
   ],
   "atentie": "Baie: baie.js propune riflajul M09-P demontabil, pentru acces la cadru. Vasul se strânge pe tije prin riflaj, deci cu vasul montat riflajul nu se scoate. Ce rămâne demontabil se stabilește cu tâmplarul.",
   "sursa": "A.25 (profilul ORAC W109 VALLEY, P722 Alloro); gs.js OR1; baie.js M09-P; specs/07 C și D; analiza/01 7.6"
  },
  {
   "titlu": "Vasul S1 și clapeta S3",
   "cine": "instalatorul",
   "stare": "proiect",
   "vedere": {
    "x0": -16,
    "x1": 122,
    "y0": -132,
    "y1": 16
   },
   "apar": [
    "s3",
    "s1",
    "c-45",
    "c-70",
    "c-50",
    "e8-clapeta",
    "e8-vas",
    "e8-s6"
   ],
   "text": "Vasul NOVELA BM se prinde pe tijele cadrului, lipit de fața măștii, cu marginea de sus la 45 cm de pardoseala finită. Clapeta PL NV1 se pune pe golul ei, cu marginea de sus la 115 cm (45 + 70).",
   "puncte": [
    "Vasul iese ~50 cm din mască.",
    "Prin golul clapetei se ajunge la robinetul de serviciu și la mecanismul rezervorului.",
    "GS: bateria dușului igienic S6 la 35 cm, cu axa la 30 cm de axa WC, spre sud; agățătoarea parei S7 la 70 cm."
   ],
   "verifica": [
    "Vasul e la nivel și nu se mișcă pe mască.",
    "Ambele butoane ale clapetei (6 L și 3 L) trag apa, iar racordurile nu curg."
   ],
   "sursa": "A.25 B06 și A.27 B01 (45 și 70); A.03 (axa lui S6); specs/04 (NOVELA BM, PL NV1, Kludi Bozz); gs.js S1, S3, S6, S7; baie.js S1, S3"
  },
  {
   "titlu": "Dulapul de deasupra măștii",
   "cine": "tâmplarul / firma de mobilă",
   "stare": "proiect",
   "vedere": {
    "x0": -30,
    "x1": 190,
    "y0": -264,
    "y1": 18
   },
   "apar": [
    "dwc-cutie",
    "dwc-raft1",
    "dwc-raft2",
    "dwc-raft3",
    "dwc-usa",
    "dwc-or2",
    "c-120",
    "c-130",
    "e9-dwc",
    "e9-baie"
   ],
   "text": "GS: dulapul DWC stă pe capacul măștii, de la 120 cm până la placă, adânc de 20 cm, cu două uși placate cu profil ORAC (OR2). Baie: dulapul M09-D e în mască, de la ~120 la ~245,5 cm, cu două uși de 32,5 cm cu riflaj.",
   "puncte": [
    "GS: rafturi la ~152–154, ~189–190 și ~221–222 cm (A.25 B05).",
    "Rostul dintre ușile lui DWC (~60 cm de colț) trebuie să cadă între două caneluri ORAC."
   ],
   "verifica": [
    "GS: profilul ORAC de pe uși (OR2) e în același plan cu cel de pe mască (OR1)."
   ],
   "atentie": "DWC nu are cod în planșe și nu e în specs/09 sau în antemăsurători. Oferta MobConcept din 02.11.2026 îl include (74 × 130 × 20 cm, uși placate cu ORAC); cine pune și vopsește profilul pe uși e întrebarea 14 din analiza/14. Dulap sau placare fixă și prinderea ușilor rămân întrebarea GS1. În baie, adâncimea interioară a lui M09-D e întrebarea BA10.",
   "sursa": "A.25 B05–B07; A.26; A.27 B01; gs.js DWC, OR2; baie.js M09-D; analiza/11 GS1, BA10; analiza/14 (oferta MobConcept)"
  }
 ]
};
