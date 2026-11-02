// Circuitul cu buton cu revenire (Push-DIM) pentru benzile LED de 24 V — pașii de montaj, pentru fereastra
// animată din desene/js/pasi.js. Format: JSON strict după „= ”. Schemă electrică, nu la scară: x spre dreapta,
// y în jos, în unități arbitrare. Câmpurile sunt descrise în desene/README.md.
window.DETALII = window.DETALII || {};
window.DETALII["PUSH"] = {
 "id": "PUSH",
 "nume": "Circuitul cu buton cu revenire pentru benzile LED de 24 V",
 "subtitlu": "Schema legăturilor pentru banda G din bucătărie: butonul G din I2 (hol), sursa Push-DIM din corpul de 40 (D2) și banda G1. La fel în baie (banda H, sursa D9) și în GS (benzile D și E, sursa D8)",
 "orientare": "Schemă electrică, nu la scară.",
 "camera": "bucatarie",
 "perete": "N",
 "schema": true,
 "sursa": "specs/04 (29.10.2026); specs/06 A, E, F, G; analiza/11 BC17, L7, HL9, HL12, BA11, GS6; analiza/13 (3); fișa LTECH LM-150-24-G1A2 (cdn.shopify.com/s/files/1/2241/3179/files/LM-150-24-G1A2.pdf); manualul 1-light 89150VLL (1-light.eu/Assets/materials/files/Installation%20manual/89150VLL-MANUAL.pdf)",
 "revizie": {
  "nr": 1,
  "data": "2026-11-02"
 },
 "nota": "Schema e propunerea noastră, după fișa sursei. Se confirmă cu electricianul și cu LedHome.",
 "vedere": {
  "x0": -18,
  "x1": 168,
  "y0": -9,
  "y1": 104
 },
 "forme": [
  {
   "id": "corp",
   "tip": "dreptunghi",
   "x": 80,
   "y": 0,
   "w": 87,
   "h": 54,
   "umplere": "faianta"
  },
  {
   "id": "fantoma",
   "tip": "contur",
   "temporar": true,
   "dreptunghiuri": [
    [
     0,
     0,
     46,
     50
    ],
    [
     84,
     4,
     10,
     40
    ],
    [
     104,
     4,
     50,
     46
    ],
    [
     30,
     72,
     90,
     12
    ],
    [
     140,
     72,
     24,
     12
    ]
   ]
  },
  {
   "id": "t-hol",
   "tip": "text",
   "x": -16,
   "y": -3,
   "text": "hol: doza I2"
  },
  {
   "id": "t-buc",
   "tip": "text",
   "x": 166,
   "y": -3,
   "text": "bucătărie: corpul de 40",
   "anc": "end"
  },
  {
   "id": "doza-i2",
   "tip": "dreptunghi",
   "x": 0,
   "y": 0,
   "w": 46,
   "h": 50,
   "umplere": "alb"
  },
  {
   "id": "tub",
   "tip": "dreptunghi",
   "x": 46,
   "y": 6,
   "w": 38,
   "h": 36,
   "umplere": "pvc"
  },
  {
   "id": "d2",
   "tip": "dreptunghi",
   "x": 84,
   "y": 4,
   "w": 10,
   "h": 40,
   "umplere": "alb"
  },
  {
   "id": "t-d2",
   "tip": "text",
   "x": 89,
   "y": 49.5,
   "text": "D2",
   "anc": "middle"
  },
  {
   "id": "w-l",
   "tip": "fir",
   "puncte": [
    [
     -18,
     24
    ],
    [
     90,
     24
    ]
   ],
   "culoare": "faza"
  },
  {
   "id": "w-n",
   "tip": "fir",
   "puncte": [
    [
     -18,
     31
    ],
    [
     90,
     31
    ]
   ],
   "culoare": "nul"
  },
  {
   "id": "w-pe",
   "tip": "fir",
   "puncte": [
    [
     -18,
     38
    ],
    [
     89,
     38
    ]
   ],
   "culoare": "pamant"
  },
  {
   "id": "t-230",
   "tip": "text",
   "x": -17,
   "y": 21,
   "text": "230 V"
  },
  {
   "id": "buton",
   "tip": "simbol",
   "x": 4,
   "y": 4,
   "w": 38,
   "h": 13,
   "text": "Buton G",
   "umplere": "pvc"
  },
  {
   "id": "w-lb",
   "tip": "fir",
   "puncte": [
    [
     12,
     24
    ],
    [
     12,
     17
    ]
   ],
   "culoare": "faza"
  },
  {
   "id": "dot-l",
   "tip": "cerc",
   "x": 12,
   "y": 24,
   "r": 1.1,
   "umplere": "negru"
  },
  {
   "id": "w-cmd",
   "tip": "fir",
   "puncte": [
    [
     42,
     10.5
    ],
    [
     90,
     10.5
    ]
   ],
   "culoare": "comanda"
  },
  {
   "id": "sursa",
   "tip": "simbol",
   "x": 104,
   "y": 4,
   "w": 50,
   "h": 46,
   "text": "Sursa\nPush-DIM",
   "umplere": "alb"
  },
  {
   "id": "t-push",
   "tip": "text",
   "x": 105.6,
   "y": 11.6,
   "text": "PUSH"
  },
  {
   "id": "t-l",
   "tip": "text",
   "x": 105.6,
   "y": 25.1,
   "text": "L"
  },
  {
   "id": "t-n",
   "tip": "text",
   "x": 105.6,
   "y": 32.1,
   "text": "N"
  },
  {
   "id": "t-n1",
   "tip": "text",
   "x": 105.6,
   "y": 45.1,
   "text": "N"
  },
  {
   "id": "t-minus",
   "tip": "text",
   "x": 152.6,
   "y": 23.1,
   "text": "−",
   "anc": "end"
  },
  {
   "id": "t-plus",
   "tip": "text",
   "x": 152.6,
   "y": 33.1,
   "text": "+",
   "anc": "end"
  },
  {
   "id": "c-cmd",
   "tip": "fir",
   "puncte": [
    [
     90,
     10.5
    ],
    [
     104,
     10.5
    ]
   ],
   "culoare": "comanda"
  },
  {
   "id": "c-l",
   "tip": "fir",
   "puncte": [
    [
     90,
     24
    ],
    [
     104,
     24
    ]
   ],
   "culoare": "faza"
  },
  {
   "id": "c-n",
   "tip": "fir",
   "puncte": [
    [
     90,
     31
    ],
    [
     104,
     31
    ]
   ],
   "culoare": "nul"
  },
  {
   "id": "c-n1",
   "tip": "fir",
   "puncte": [
    [
     98,
     31
    ],
    [
     98,
     44
    ],
    [
     104,
     44
    ]
   ],
   "culoare": "nul"
  },
  {
   "id": "dot-n",
   "tip": "cerc",
   "x": 98,
   "y": 31,
   "r": 1.1,
   "umplere": "negru"
  },
  {
   "id": "wago",
   "tip": "cerc",
   "x": 90,
   "y": 38,
   "r": 1.8,
   "umplere": "banda"
  },
  {
   "id": "tz-push",
   "tip": "text",
   "x": 116,
   "y": 11.6,
   "text": "(LTECH: L1 · 1-light: DA)",
   "temporar": true
  },
  {
   "id": "tz-n1",
   "tip": "text",
   "x": 116,
   "y": 45.1,
   "text": "(LTECH: N1 · 1-light: DA)",
   "temporar": true
  },
  {
   "id": "g1",
   "tip": "simbol",
   "x": 30,
   "y": 72,
   "w": 90,
   "h": 12,
   "text": "Banda G1 · 145 cm",
   "umplere": "banda"
  },
  {
   "id": "g3",
   "tip": "simbol",
   "x": 140,
   "y": 72,
   "w": 24,
   "h": 12,
   "text": "G3",
   "umplere": "banda-hartie"
  },
  {
   "id": "o-minus",
   "tip": "fir",
   "puncte": [
    [
     154,
     22
    ],
    [
     162,
     22
    ],
    [
     162,
     62
    ],
    [
     116,
     62
    ],
    [
     116,
     72
    ]
   ],
   "culoare": "v24-minus",
   "gros": 2.4
  },
  {
   "id": "o-plus",
   "tip": "fir",
   "puncte": [
    [
     154,
     32
    ],
    [
     158,
     32
    ],
    [
     158,
     58
    ],
    [
     112,
     58
    ],
    [
     112,
     72
    ]
   ],
   "culoare": "v24-plus",
   "gros": 2.4
  },
  {
   "id": "l3-plus",
   "tip": "fir",
   "puncte": [
    [
     120,
     75.5
    ],
    [
     140,
     75.5
    ]
   ],
   "culoare": "v24-plus",
   "gros": 2.4,
   "intrerupt": true
  },
  {
   "id": "l3-minus",
   "tip": "fir",
   "puncte": [
    [
     120,
     80.5
    ],
    [
     140,
     80.5
    ]
   ],
   "culoare": "v24-minus",
   "gros": 2.4,
   "intrerupt": true
  },
  {
   "id": "t-hota",
   "tip": "text",
   "x": 130,
   "y": 70.5,
   "text": "hota",
   "anc": "middle"
  },
  {
   "id": "t8-baie",
   "tip": "text",
   "x": -14,
   "y": 136,
   "text": "baie: banda H"
  },
  {
   "id": "bh",
   "tip": "simbol",
   "x": -14,
   "y": 144,
   "w": 32,
   "h": 13,
   "text": "Buton H",
   "umplere": "pvc"
  },
  {
   "id": "s9",
   "tip": "simbol",
   "x": 52,
   "y": 141,
   "w": 46,
   "h": 19,
   "text": "Push-DIM\nD9",
   "umplere": "alb"
  },
  {
   "id": "h1",
   "tip": "simbol",
   "x": 126,
   "y": 139,
   "w": 40,
   "h": 10,
   "text": "H1 · nișa",
   "umplere": "banda"
  },
  {
   "id": "h2",
   "tip": "simbol",
   "x": 126,
   "y": 154,
   "w": 40,
   "h": 10,
   "text": "H2 · oglinda",
   "umplere": "banda"
  },
  {
   "id": "f9-cmd",
   "tip": "fir",
   "puncte": [
    [
     18,
     150.5
    ],
    [
     52,
     150.5
    ]
   ],
   "culoare": "comanda",
   "gros": 3
  },
  {
   "id": "f9-230",
   "tip": "fir",
   "puncte": [
    [
     75,
     133
    ],
    [
     75,
     141
    ]
   ],
   "culoare": "faza",
   "gros": 3
  },
  {
   "id": "t9-230",
   "tip": "text",
   "x": 78,
   "y": 136.5,
   "text": "230 V"
  },
  {
   "id": "f9-24",
   "tip": "fir",
   "puncte": [
    [
     98,
     150.5
    ],
    [
     114,
     150.5
    ]
   ],
   "culoare": "v24-plus",
   "gros": 3
  },
  {
   "id": "f9-24b",
   "tip": "fir",
   "puncte": [
    [
     126,
     144
    ],
    [
     114,
     144
    ],
    [
     114,
     159
    ],
    [
     126,
     159
    ]
   ],
   "culoare": "v24-plus",
   "gros": 3
  },
  {
   "id": "dot-9",
   "tip": "cerc",
   "x": 114,
   "y": 150.5,
   "r": 1.1,
   "umplere": "negru"
  },
  {
   "id": "t9-cmd",
   "tip": "text",
   "x": 35,
   "y": 148.3,
   "text": "comandă",
   "anc": "middle"
  },
  {
   "id": "t9-24",
   "tip": "text",
   "x": 106,
   "y": 148.3,
   "text": "24 V",
   "anc": "middle"
  },
  {
   "id": "t8-gs",
   "tip": "text",
   "x": -14,
   "y": 179,
   "text": "GS: benzile D și E"
  },
  {
   "id": "bde",
   "tip": "simbol",
   "x": -14,
   "y": 186,
   "w": 32,
   "h": 13,
   "text": "Buton DE",
   "umplere": "pvc"
  },
  {
   "id": "s8",
   "tip": "simbol",
   "x": 52,
   "y": 183,
   "w": 46,
   "h": 19,
   "text": "Push-DIM\nD8",
   "umplere": "alb"
  },
  {
   "id": "d1",
   "tip": "simbol",
   "x": 126,
   "y": 181,
   "w": 40,
   "h": 10,
   "text": "D1 · tavan",
   "umplere": "banda"
  },
  {
   "id": "e1",
   "tip": "simbol",
   "x": 126,
   "y": 196,
   "w": 40,
   "h": 10,
   "text": "E1 · oglinda",
   "umplere": "banda"
  },
  {
   "id": "f8-cmd",
   "tip": "fir",
   "puncte": [
    [
     18,
     192.5
    ],
    [
     52,
     192.5
    ]
   ],
   "culoare": "comanda",
   "gros": 3
  },
  {
   "id": "f8-230",
   "tip": "fir",
   "puncte": [
    [
     75,
     175
    ],
    [
     75,
     183
    ]
   ],
   "culoare": "faza",
   "gros": 3
  },
  {
   "id": "t8-230",
   "tip": "text",
   "x": 78,
   "y": 178.5,
   "text": "230 V"
  },
  {
   "id": "f8-24",
   "tip": "fir",
   "puncte": [
    [
     98,
     192.5
    ],
    [
     114,
     192.5
    ]
   ],
   "culoare": "v24-plus",
   "gros": 3
  },
  {
   "id": "f8-24b",
   "tip": "fir",
   "puncte": [
    [
     126,
     186
    ],
    [
     114,
     186
    ],
    [
     114,
     201
    ],
    [
     126,
     201
    ]
   ],
   "culoare": "v24-plus",
   "gros": 3
  },
  {
   "id": "dot-8",
   "tip": "cerc",
   "x": 114,
   "y": 192.5,
   "r": 1.1,
   "umplere": "negru"
  },
  {
   "id": "t8-cmd",
   "tip": "text",
   "x": 35,
   "y": 190.3,
   "text": "comandă",
   "anc": "middle"
  },
  {
   "id": "t8-24",
   "tip": "text",
   "x": 106,
   "y": 190.3,
   "text": "24 V",
   "anc": "middle"
  },
  {
   "id": "e0-buton",
   "tip": "eticheta",
   "x": -14,
   "y": 62,
   "text": "butonul G, cu revenire, în întrerupătorul I2 din hol",
   "spre": [
    23,
    44
   ],
   "lat": 44
  },
  {
   "id": "e0-sursa",
   "tip": "eticheta",
   "x": 40,
   "y": 60,
   "text": "sursa Push-DIM, în corpul suspendat de 40, lângă doza D2",
   "spre": [
    129,
    50
   ],
   "lat": 56
  },
  {
   "id": "e0-banda",
   "tip": "eticheta",
   "x": 40,
   "y": 96,
   "text": "banda G1 sub trei corpuri; G3, opțională, sub corpul din colț",
   "spre": [
    75,
    84
   ],
   "lat": 110
  },
  {
   "id": "e1-i2",
   "tip": "eticheta",
   "x": -14,
   "y": 62,
   "text": "doza I2: peretele cu oglinda din hol, x 289,8, h 110 (presupusă)",
   "spre": [
    23,
    50
   ],
   "lat": 44
  },
  {
   "id": "e1-tub",
   "tip": "eticheta",
   "x": 48,
   "y": 58,
   "text": "tubul de la I2 la D2, înainte de tencuială",
   "spre": [
    62,
    42
   ],
   "lat": 44
  },
  {
   "id": "e1-d2",
   "tip": "eticheta",
   "x": 100,
   "y": 64,
   "text": "doza D2: peretele cu chiuveta, x 187, h 196, în spatele corpului de 40",
   "spre": [
    89,
    44
   ],
   "lat": 66
  },
  {
   "id": "e2-230",
   "tip": "eticheta",
   "x": -14,
   "y": 62,
   "text": "230 V tot timpul: faza, nulul și pământul",
   "spre": [
    -8,
    38
   ],
   "lat": 42
  },
  {
   "id": "e2-capete",
   "tip": "eticheta",
   "x": 100,
   "y": 64,
   "text": "capetele rămân în D2 până se montează mobila",
   "spre": [
    90,
    31
   ],
   "lat": 66
  },
  {
   "id": "e3-buton",
   "tip": "eticheta",
   "x": -14,
   "y": 62,
   "text": "butonul G: la apăsare, faza trece pe firul de comandă",
   "spre": [
    20,
    17
   ],
   "lat": 42
  },
  {
   "id": "e3-cmd",
   "tip": "eticheta",
   "x": 42,
   "y": 18.5,
   "text": "firul de comandă (L′), la 230 V",
   "spre": [
    52,
    10.5
   ],
   "lat": 40
  },
  {
   "id": "e4-sursa",
   "tip": "eticheta",
   "x": 40,
   "y": 60,
   "text": "se vede și se scoate când se deschide frontul corpului",
   "spre": [
    120,
    50
   ],
   "lat": 56
  },
  {
   "id": "e4-aer",
   "tip": "eticheta",
   "x": 100,
   "y": 64,
   "text": "aer în jur; la min. 15 cm de altă sursă (LTECH)",
   "spre": [
    154,
    46
   ],
   "lat": 66
  },
  {
   "id": "e5-pe",
   "tip": "eticheta",
   "x": 80,
   "y": 56,
   "text": "pământul: izolat în D2, într-o clemă",
   "spre": [
    90,
    39.8
   ],
   "lat": 30
  },
  {
   "id": "e5-dim",
   "tip": "eticheta",
   "x": 118,
   "y": 56,
   "text": "LTECH: DIM+ și DIM− rămân libere",
   "spre": [
    146,
    50
   ],
   "lat": 46
  },
  {
   "id": "e6-g1",
   "tip": "eticheta",
   "x": -14,
   "y": 96,
   "text": "banda G1 în profil, sub corpuri (h 142)",
   "spre": [
    40,
    84
   ],
   "lat": 44
  },
  {
   "id": "e6-pol",
   "tip": "eticheta",
   "x": 108,
   "y": 69,
   "text": "plus la plus, minus la minus",
   "spre": [
    112,
    66
   ],
   "lat": 56,
   "anc": "end"
  },
  {
   "id": "e6-g3",
   "tip": "eticheta",
   "x": 100,
   "y": 97,
   "text": "G3, opțională: cablul trece pe lângă corpul hotei",
   "spre": [
    152,
    84
   ],
   "lat": 66
  },
  {
   "id": "e7-buton",
   "tip": "eticheta",
   "x": -14,
   "y": 62,
   "text": "apăsare scurtă: aprins sau stins; apăsare lungă: reglajul intensității",
   "spre": [
    23,
    17
   ],
   "lat": 44
  },
  {
   "id": "e7-mem",
   "tip": "eticheta",
   "x": 40,
   "y": 60,
   "text": "sursa ține minte ultimul nivel (LTECH, specs/04)",
   "spre": [
    129,
    50
   ],
   "lat": 56
  },
  {
   "id": "e8-ih",
   "tip": "eticheta",
   "x": -14,
   "y": 169,
   "text": "butonul H: în IH (codul I1, peretele holului spre baie)",
   "spre": [
    2,
    157
   ],
   "lat": 62
  },
  {
   "id": "e8-h",
   "tip": "eticheta",
   "x": 104,
   "y": 174,
   "text": "H1 IP67 în duș, H2 IP65 la oglindă",
   "spre": [
    128,
    164
   ],
   "lat": 62
  },
  {
   "id": "e8-de",
   "tip": "eticheta",
   "x": -14,
   "y": 215,
   "text": "butonul DE: în I3 (peretele cu oglinda din hol)",
   "spre": [
    2,
    199
   ],
   "lat": 50
  },
  {
   "id": "e8-tav",
   "tip": "eticheta",
   "x": 40,
   "y": 215,
   "text": "D8 și D9: în tavanul fals din hol, cu trapă de vizitare",
   "spre": [
    75,
    202
   ],
   "lat": 60
  },
  {
   "id": "e8-un",
   "tip": "eticheta",
   "x": 104,
   "y": 215,
   "text": "o sursă și un buton pentru D1 și E1 (HL12)",
   "spre": [
    114,
    192.5
   ],
   "lat": 62
  }
 ],
 "pasi": [
  {
   "titlu": "Ce se construiește",
   "cine": "electricianul, cu firma de mobilă",
   "stare": "propunere",
   "apar": [
    "corp",
    "fantoma",
    "t-hol",
    "t-buc",
    "e0-buton",
    "e0-sursa",
    "e0-banda"
   ],
   "text": "Banda G din bucătărie se comandă de pe perete, de la butonul G din întrerupătorul I2 din hol. Butonul e cu revenire: apăsarea scurtă aprinde sau stinge banda, apăsarea lungă reglează intensitatea, iar sursa ține minte ultimul nivel. Sursa Push-DIM de 24 V stă în corpul suspendat de 40, lângă doza D2, și alimentează banda de sub corpuri.",
   "puncte": [
    "Banda G1: 145 cm, sub corpurile de 45, 60 și 40 din stânga hotei. G3: 55 cm, opțională, sub corpul din colț (BC17).",
    "Sursa nu e aleasă încă: 1-light de la LedHome (cod VEL89150VLL, 361 lei) sau LTECH LM-150-24-G1A2 de pe eMAG (320 lei). Bornele au alte nume, dar schema e aceeași.",
    "Clapa F din I2 rămâne întrerupător obișnuit, pentru spoturile F1–F3."
   ],
   "verifica": [
    "Ce sursă se cumpără: de ea depind numele bornelor (pașii 5 și 6).",
    "Sub ce corpuri e banda G și dacă se face G3 (BC17, L3).",
    "1-light scrie 45–150 W, iar o zonă consumă ~25–35 W: de întrebat la LedHome dacă sursa merge sub 45 W. LTECH: 0–150 W.",
    "Aparatajul din I2: o clapă obișnuită (F) și un buton cu revenire (G). Lista din proiect are aici un întrerupător dublu (specs/06 A, poziția 6)."
   ],
   "sursa": "specs/04 (29.10.2026: sursă Push-DIM, buton cu revenire, prețuri); bucătărie: D2, G1, G3; hol: I2; analiza/11 BC17, L3; manualul 1-light 89150VLL (1-light.eu/Assets/materials/files/Installation%20manual/89150VLL-MANUAL.pdf); fișa LTECH LM-150-24-G1A2 (cdn.shopify.com/s/files/1/2241/3179/files/LM-150-24-G1A2.pdf)"
  },
  {
   "titlu": "Tubul și dozele",
   "cine": "electricianul",
   "stare": "propunere",
   "apar": [
    "doza-i2",
    "tub",
    "d2",
    "t-d2",
    "e1-i2",
    "e1-tub",
    "e1-d2"
   ],
   "text": "Doza I2 e pe peretele cu oglinda din hol, la 15 cm de golul ușii spre bucătărie. Doza D2 e pe peretele cu chiuveta, în spatele corpului suspendat de 40. Între ele se pune un tub, înainte de tencuială și înainte de mobilă.",
   "puncte": [
    "I2: x 289,8 de la colțul N-E al holului, h 110. Înălțimea e presupusă: A.06 nu o dă.",
    "D2: x 187, h 196, în corpul de 40 (x 167–207, h 143–203,2).",
    "Bucătăria nu are tavan fals, deci tubul trece prin pereți. Traseul îl stabilește electricianul.",
    "De la buton la sursă sunt ~5–8 m de fir (estimarea din analiza/13)."
   ],
   "verifica": [
    "Tubul e continuu de la I2 la D2, fără coturi strânse, și firele trec prin el.",
    "D2 rămâne în interiorul corpului de 40 după montajul mobilei."
   ],
   "atentie": "Dacă pereții sunt din panouri prefabricate, în ei nu se pot face șanțuri (specs/06 F). Dacă golul ușii U4 se mută cu 7 cm (BC2), se mută și I2.",
   "sursa": "hol: I2 (A.06: 15 cm de la golul ușii); bucătărie: D2, M01-S1, înălțimea fără tavan fals; specs/06 F; analiza/11 BC2, BC17; analiza/13, întrebarea 15"
  },
  {
   "titlu": "Cablul de 230 V până în D2",
   "cine": "electricianul",
   "stare": "propunere",
   "apar": [
    "w-l",
    "w-n",
    "w-pe",
    "t-230",
    "e2-230",
    "e2-capete"
   ],
   "text": "Sursa are nevoie de 230 V tot timpul: butonul nu taie alimentarea, doar trimite comanda. Cablul cu faza (L), nulul (N) și pământul (PE) vine din circuitul de iluminat, trece prin doza I2 și ajunge în D2.",
   "puncte": [
    "Propunerea noastră: cablul trece prin I2, ca faza butonului și alimentarea sursei să vină din același circuit. În schemele din fișe, butonul ia faza de pe aceeași linie L–N ca sursa.",
    "Circuitul și siguranța le alege electricianul (specs/06 E): de confirmat.",
    "Capetele rămân în D2 până după montajul mobilei."
   ],
   "verifica": [
    "Cu siguranța pornită, în D2 sunt 230 V între L și N, fără să se apese butonul.",
    "Pământul ajunge până în D2."
   ],
   "sursa": "specs/04 (pe perete e un buton cu revenire, nu un întrerupător); fișa LTECH LM-150-24-G1A2 (cdn.shopify.com/s/files/1/2241/3179/files/LM-150-24-G1A2.pdf), „Push DIM Connection”; manualul 1-light 89150VLL (1-light.eu/Assets/materials/files/Installation%20manual/89150VLL-MANUAL.pdf), „Push to Dim wiring diagram”; specs/06 E"
  },
  {
   "titlu": "Firul de comandă de la butonul G",
   "cine": "electricianul",
   "stare": "propunere",
   "apar": [
    "buton",
    "w-lb",
    "dot-l",
    "w-cmd",
    "e3-buton",
    "e3-cmd"
   ],
   "text": "Butonul G e cu revenire: contactul se închide doar cât e apăsat. Faza intră în buton, iar din buton pleacă firul de comandă (L′) până în D2, unde se leagă la borna Push a sursei.",
   "puncte": [
    "Firul de comandă e la 230 V: e faza trecută prin buton. Se trage și se izolează ca un fir de fază, nu ca un fir de semnal.",
    "Clapa F din aceeași doză rămâne întrerupător obișnuit, cu firul ei spre spoturile F1–F3.",
    "Propunerea noastră: buton simplu, fără lămpiță, până răspunde LedHome (întrebarea 14).",
    "Mecanismul se montează la finisaje. Până atunci, capetele stau în doza I2."
   ],
   "verifica": [
    "Firul de comandă e marcat la ambele capete, ca să nu se confunde cu faza.",
    "Lungimea maximă a firului de comandă nu e în fișe: de întrebat la LedHome (întrebarea 15)."
   ],
   "sursa": "fișa LTECH LM-150-24-G1A2 (cdn.shopify.com/s/files/1/2241/3179/files/LM-150-24-G1A2.pdf), „Push DIM Connection”; manualul 1-light 89150VLL (1-light.eu/Assets/materials/files/Installation%20manual/89150VLL-MANUAL.pdf), „Push to Dim wiring diagram”; hol: I2; analiza/13, întrebările 13–15"
  },
  {
   "titlu": "Sursa în corpul de 40",
   "cine": "firma de mobilă, cu electricianul",
   "stare": "propunere",
   "apar": [
    "sursa",
    "t-push",
    "t-l",
    "t-n",
    "t-n1",
    "t-minus",
    "t-plus",
    "e4-sursa",
    "e4-aer"
   ],
   "text": "După montajul mobilei, sursa se prinde în corpul suspendat de 40, lângă doza D2. Rămâne accesibilă: se vede și se scoate când se deschide frontul corpului. Nu se închide în spatele gips-cartonului sau al unui panou fix.",
   "puncte": [
    "Dimensiuni: LTECH 352 × 43 × 30 mm; 1-light 350 × 30 × 18 mm (LedHome scrie 362 × 30 × 21 mm).",
    "LTECH cere aer în jurul sursei, fără alte surse deasupra sau dedesubt, la cel puțin 15 cm una de alta. Temperatura aerului: −20…50 °C. 1-light: max. 45 °C.",
    "Ambele surse sunt pentru interior, fără protecție la apă (LTECH; 1-light: IP20)."
   ],
   "verifica": [
    "Sursa încape pe lățimea interioară a corpului de 40. Grosimea pereților corpului nu e în date: o dă firma de mobilă.",
    "Pe unde intră cablurile din D2 în corp: de stabilit cu firma de mobilă."
   ],
   "atentie": "Corpul de 40 e lângă corpul hotei. Aerul din corp trebuie să rămână sub temperatura maximă din fișa sursei.",
   "sursa": "fișa LTECH LM-150-24-G1A2 (cdn.shopify.com/s/files/1/2241/3179/files/LM-150-24-G1A2.pdf) (Dimensions, Installation Precautions, Attentions); manualul 1-light 89150VLL (1-light.eu/Assets/materials/files/Installation%20manual/89150VLL-MANUAL.pdf) și fișa produsului; pagina LedHome a sursei; specs/06 E și G4 (sursele rămân accesibile); bucătărie: M01-S1, E5"
  },
  {
   "titlu": "Legăturile la bornele sursei",
   "cine": "electricianul",
   "stare": "propunere",
   "vedere": {
    "x0": 78,
    "x1": 168,
    "y0": -5,
    "y1": 63
   },
   "apar": [
    "c-cmd",
    "c-l",
    "c-n",
    "c-n1",
    "dot-n",
    "wago",
    "tz-push",
    "tz-n1",
    "e5-pe",
    "e5-dim"
   ],
   "text": "Din D2, faza se leagă la L și nulul la N. Firul de comandă merge la borna Push, iar a doua bornă Push primește nulul. Pământul se oprește în D2, izolat: la intrare, ambele surse au doar L și N.",
   "puncte": [
    "LTECH LM-150-24-G1A2: butonul la L1, nulul la N1. Bornele DIM+ și DIM− rămân libere: după fișă, intrarea 0–10 V are prioritate față de Push.",
    "1-light 89150VLL: butonul la o bornă DA, nulul la cealaltă DA. Aceleași borne DA sunt pentru DALI; manualul le arată în două scheme separate.",
    "LTECH: bornele de intrare primesc fir de 0,75–1,5 mm², dezizolat 8–9 mm. 1-light nu dă secțiunea."
   ],
   "verifica": [
    "Firul de comandă e la borna Push (L1 sau DA), nu la L.",
    "Nicio porțiune dezizolată nu iese din borne."
   ],
   "sursa": "fișa LTECH LM-150-24-G1A2 (cdn.shopify.com/s/files/1/2241/3179/files/LM-150-24-G1A2.pdf), „Wiring Diagram: Push DIM Connection”; manualul 1-light 89150VLL (1-light.eu/Assets/materials/files/Installation%20manual/89150VLL-MANUAL.pdf), „Push to Dim wiring diagram”"
  },
  {
   "titlu": "Cablul de 24 V spre banda G1",
   "cine": "electricianul, cu firma de mobilă",
   "stare": "propunere",
   "apar": [
    "g1",
    "g3",
    "o-minus",
    "o-plus",
    "l3-plus",
    "l3-minus",
    "t-hota",
    "e6-g1",
    "e6-pol",
    "e6-g3"
   ],
   "text": "De la ieșirea sursei (− și +), un cablu de 24 V coboară prin corpul de 40 până la capătul benzii G1, în profilul de sub corpuri. Plusul se leagă la plusul benzii, minusul la minus.",
   "puncte": [
    "LTECH: o pereche de borne, LED− și LED+, pentru fir de 1,5–2,5 mm², dezizolat 6–7 mm. 1-light: două perechi, − și +.",
    "Consumul e de ~25–35 W pe zonă (specs/04), adică ~1–1,5 A la 24 V. Sursa de 150 W ajunge cu rezervă.",
    "Secțiunea cablului de 24 V: de calculat de electrician, după lungimea măsurată pe mobilă.",
    "G3, opțională: cablul ei de 24 V trece pe lângă corpul hotei, de la capătul lui G1 sau de la sursă. Traseul se stabilește cu firma de mobilă."
   ],
   "verifica": [
    "Polaritatea, înainte să se pună difuzorul profilului.",
    "Cablul nu e strivit de fronturi sau de rafturi."
   ],
   "sursa": "fișa LTECH LM-150-24-G1A2 (cdn.shopify.com/s/files/1/2241/3179/files/LM-150-24-G1A2.pdf) (LED−, LED+); manualul 1-light 89150VLL (1-light.eu/Assets/materials/files/Installation%20manual/89150VLL-MANUAL.pdf) (OUTPUT); specs/04 (consumul pe zonă); bucătărie: G1 și G3 (h 142, în profil în fundul corpurilor)"
  },
  {
   "titlu": "Proba",
   "cine": "electricianul, cu noi",
   "stare": "propunere",
   "apar": [
    "e7-buton",
    "e7-mem"
   ],
   "text": "Cu banda legată, se pornește siguranța și se încearcă butonul G. Apăsarea scurtă aprinde sau stinge banda. Apăsarea lungă reglează intensitatea.",
   "puncte": [
    "LTECH: la fiecare apăsare lungă, reglajul își schimbă sensul. După stingere și reaprindere, banda revine la ultimul nivel.",
    "1-light: apăsarea scurtă aprinde sau stinge, apăsarea lungă reglează în sus sau în jos. Memoria nivelului nu e scrisă în manual.",
    "Propunerea noastră: o probă înainte de tencuială, cu sursa legată provizoriu în D2, și proba finală după mobilă."
   ],
   "verifica": [
    "Banda nu pâlpâie la intensitate mică.",
    "Clapa F aprinde doar spoturile F1–F3."
   ],
   "sursa": "fișa LTECH LM-150-24-G1A2 (cdn.shopify.com/s/files/1/2241/3179/files/LM-150-24-G1A2.pdf) (Push DIM: on/off, stepless dimming, dimming memory); manualul 1-light 89150VLL (1-light.eu/Assets/materials/files/Installation%20manual/89150VLL-MANUAL.pdf) (NOTE); specs/04"
  },
  {
   "titlu": "Același circuit în baie și în GS",
   "cine": "electricianul",
   "stare": "propunere",
   "vedere": {
    "x0": -18,
    "x1": 168,
    "y0": 129,
    "y1": 237
   },
   "apar": [
    "t8-baie",
    "bh",
    "s9",
    "h1",
    "h2",
    "f9-cmd",
    "f9-230",
    "t9-230",
    "f9-24",
    "f9-24b",
    "dot-9",
    "t9-cmd",
    "t9-24",
    "t8-gs",
    "bde",
    "s8",
    "d1",
    "e1",
    "f8-cmd",
    "f8-230",
    "t8-230",
    "f8-24",
    "f8-24b",
    "dot-8",
    "t8-cmd",
    "t8-24",
    "e8-ih",
    "e8-h",
    "e8-de",
    "e8-tav",
    "e8-un"
   ],
   "text": "Baia și GS-ul au aceeași schemă ca bucătăria. Sursele stau în tavanul fals din hol, în afara zonelor umede. Aici fiecare linie e un cablu întreg; firele se leagă ca în pașii 2–6.",
   "puncte": [
    "Baie: butonul H din întrerupătorul IH (codul I1 de pe peretele holului spre baie, x 141,5) → sursa D9 → benzile H1 (nișa din duș, IP67) și H2 (oglinda, IP65).",
    "GS: butonul DE din I3 (peretele cu oglinda din hol, x 525,9) → sursa D8 → benzile D1 (pe tavan) și E1 (oglinda). Cu o singură sursă, un buton aprinde ambele benzi.",
    "Mai multe surse pe același buton: manualul 1-light cere sincronizarea, cu butonul ținut apăsat peste 10 s. Fișa LTECH nu spune nimic despre asta.",
    "1-light are două perechi de ieșire, deci H1 și H2 pot avea câte o pereche. LTECH are una singură."
   ],
   "verifica": [
    "Trapele de vizitare pentru D8 și D9: fără ele, sursele nu se pot ajunge (HL9).",
    "Arhitecta acceptă sursele în tavanul fals din hol (L7).",
    "Un buton pentru D și E sau două surse cu butoane separate (HL12).",
    "Pe unde trec cablurile spre benzile din baie (BA11) și spre banda D1 din GS (GS6). D1 e pe tavan sau deasupra oglinzii (L4)?"
   ],
   "sursa": "specs/04 (sursele GS și băii în tavanul fals din hol, D8 și D9); hol: I1 (IH), I3, D8, D9; baie: H1, H2; GS: D1, E1; manualul 1-light 89150VLL (1-light.eu/Assets/materials/files/Installation%20manual/89150VLL-MANUAL.pdf) (Synchronization); analiza/11 L4, L7, HL9, HL12, BA11, GS6"
  }
 ]
};
