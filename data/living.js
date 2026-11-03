// Datele livingului — SURSA UNICĂ pentru desenele din desene/. Format: JSON strict după „= ”.
// Cote în cm. Câmpurile sunt descrise în desene/README.md.
window.CAMERE = window.CAMERE || {};
window.CAMERE["living"] = {
 "id": "living",
 "nume": "Living",
 "revizie": {
  "nr": 7,
  "data": "2026-11-03",
  "modificari": [
   "Revizia 7: șinele magnetice J și K sunt montate deja, cu sursa în șină (03.11.2026): sursele separate SJK și pașii de montaj J-K au fost scoși. Unitatea AC de pe planul tavanului, mutată în față, ca pe peretele TV.",
   "Revizia 6: compartimentul AC din masca M11 desenat ca în dormitorul mic: coboară la 189,2 cm, unitatea vine în față, aerul cald intră prin capacul de sus cu lamele verticale (în loc de 9 găuri), cel rece iese prin fanta de jos, cu clapa CL; pașii de montaj D03' actualizați. De confirmat cu arhitecta (03.11.2026).",
   "Revizia 5: compartimentul AC din masca M11: aerul rece iese liber printr-o fantă jos, iar compartimentul coboară dacă manualul unității cere mai mult spațiu deasupra (decizia din 03.11.2026, de confirmat cu arhitecta).",
   "Revizia 4: pașii de montaj animați pentru scafa draperiei (D-09) și pentru șinele magnetice J și K (J-K) (02.11.2026).",
   "Revizia 3: ușa de balcon U2 desenată cu sticlă, iar fereastra F2 cu un singur geam, fără montant la mijloc (02.11.2026).",
   "Pereții E (cu biroul), S (TV) și V (cu fereastra) și planul tavanului refăcuți din planșe (A.01, A.05–A.07, A.15, A.16, D-09).",
   "Panoul 2 (lângă birou) desenat în ambele poziții până răspunde arhitecta (R10); pozițiile diferă cu ~1 cm.",
   "Adâncimea camerei: 590 cm între zidării (580 pornea de la fața grinzii peretelui cu M12).",
   "Înălțimea liberă: 243 cm sub tavanul fals de 7 cm (era 245).",
   "Peretele cu M12: stâlpul ST1 și grinda GR3 adăugate; masca peretelui cu biroul (G5) are 13 cm; banca B1 mutată cu 0,5 cm.",
   "Coduri unice în cameră: tavanul fals e TF1 peste tot; s-au redenumit G1→G6, G2→G7 (peretele cu biroul), G1→G8, G2→G9 (peretele TV), G3a→G10, G3b→G11, U1→U2 (peretele cu fereastra) și capetele de cablu (CB-M12, CB-M2, CB-M3, CB-M4, CB-AC). Prizele și întrerupătoarele se numerotează pe fiecare perete.",
   "Peretele TV desenat cu finisajele din A.16: riflajul cu lamele, comoda M10 (Nuc Parona) cu consola (Bej nisip), televizorul și șemineul. Televizorul trece în stratul Mobilă.",
   "Pași de montaj animați pentru masca șemineului (D03', din A.29) și pentru plinta ascunsă (G3)."
  ]
 },
 "referinte": {
  "orizontal": "x: de la fața zidăriei, în colțul din stânga (privind peretele din cameră). Cotele sunt cumulate de la acest colț: se măsoară cu ruleta de la colț, nu din aproape în aproape.",
  "vertical": "h: de la pardoseala finită. Dacă pardoseala nu e pusă încă, de la reperul de nivel trasat pe perete, cu diferența până la pardoseala finită."
 },
 "inaltime": {
  "valoare": 243,
  "stare": "de-verificat",
  "nota": "Înălțimea liberă sub tavanul fals: 243 cm. A.15 (D01, D02), A.16 și D-09 desenează fața tavanului fals la 243 cm și placa la 250 cm (tavan fals 7 cm). Legenda A.05 scrie 10 cm: de confirmat cu arhitecta."
 },
 "plan": {
  "latime": 467.1,
  "adancime": 590,
  "nota": "x de la fața grinzii de deasupra ferestrelor (zidăria cu fereastra e cu 27 cm mai în spate), y de la zidăria peretelui TV (sud). Ca în A.01, A.05 și A.15; A.06 și A.07 măsoară x de la zidăria cu fereastra (+27)."
 },
 "pereti": [
  {
   "id": "N",
   "nume": "Peretele cu dulapul M12",
   "subtitlu": "piatra de lângă balcon (D01) · N pe planșă",
   "lungime": 467.1,
   "etapa": 1,
   "origine": "colțul cu peretele cu fereastra",
   "plan": [
    [
     0,
     590
    ],
    [
     467.1,
     590
    ]
   ],
   "elemente": [
    {
     "id": "G1",
     "strat": "gips",
     "tip": "masca",
     "nume": "Masca din gips-carton a peretelui",
     "x": 0,
     "lat": 310,
     "h": 0,
     "inalt": 243,
     "adanc": 19.25,
     "stare": "de-verificat",
     "sursa": "A.15 D01 (fața finită de la colț până la M12); adâncimea din D-06 cu cotele din 01.11.2026",
     "eticheta": {
      "x": 205,
      "h": 205
     },
     "nota": "Adâncime ~19,25 cm: 10 structură + placă suport, 5 rocă, 3 spațiu pentru profilul LED, 1,25 placa din față. Unde se oprește masca lângă M12 nu e cotat."
    },
    {
     "id": "G2",
     "strat": "gips",
     "tip": "nisa",
     "nume": "Nișa panoului de piatră (laturile, ascunse după buze)",
     "x": 10,
     "lat": 90,
     "h": 0,
     "inalt": 240,
     "stare": "proiect",
     "sursa": "A.15 D01: 10 + 90",
     "detaliu": "D-06",
     "eticheta": {
      "x": 10,
      "h": 20
     },
     "nota": "Laturile nișei la 10 și 100 cm de zidărie. Buzele din față au câte 5 cm (10–15 și 95–100) și ascund laturile și profilul LED."
    },
    {
     "id": "R1",
     "strat": "gips",
     "tip": "roca",
     "nume": "Rocă manuală — piatra de lângă balcon (D01)",
     "x": 15,
     "lat": 80,
     "h": 0,
     "inalt": 240,
     "adanc": 5,
     "stare": "confirmat",
     "sursa": "A.15 D01 (80 × 240); arhitecta 19.10.2026",
     "detaliu": "D-06",
     "nota": "Vizibil 80 × 240 cm. Grosime 5–6 cm; lângă latura cu LED max. 5 cm pe primii ~5 cm, ca să rămână 3 cm pentru profil. Culoare similară cu a pereților. Placa suport o alege firma (arhitecta preferă placă de ciment)."
    },
    {
     "id": "G3",
     "strat": "gips",
     "tip": "plinta",
     "nume": "Plintă ascunsă (shadow gap, aluminiu negru 20 mm)",
     "x": 100,
     "lat": 210,
     "h": 0,
     "inalt": 2,
     "stare": "proiect",
     "sursa": "A.15 D01; specs/04 rândul 14",
     "eticheta": {
      "x": 205,
      "h": 10
     },
     "coteH": false,
     "detaliu": "G3"
    },
    {
     "id": "TF1",
     "strat": "gips",
     "tip": "tavan-fals",
     "nume": "Tavan fals din gips-carton (7 cm)",
     "x": 0,
     "lat": 467.1,
     "h": 243,
     "inalt": 7,
     "stare": "de-verificat",
     "sursa": "A.15 D01 (fața la 243, placa la 250); D-09; legenda A.05 scrie 10 cm",
     "eticheta": {
      "x": 160,
      "h": 252
     },
     "nota": "Fața tavanului fals la 243 cm, placa la 250 cm (A.15, A.16, D-09). Legenda A.05 scrie 10 cm: de confirmat. Același cod pe toți pereții și pe planul tavanului.",
     "adanc": 565
    },
    {
     "id": "GR3",
     "strat": "structura",
     "tip": "grinda",
     "nume": "Grinda de beton de pe acest perete",
     "x": 0,
     "lat": 449,
     "h": 205,
     "inalt": 38,
     "adanc": 10,
     "ascuns": true,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "A.05 (fața la 580 de la peretele TV, zidăria la 590); A.15 D02 (secțiune ~25 × 45); A.06 (cota 100 pornește de la fața ei)",
     "nota": "Iese 10 cm din zidărie, cu fața de jos la ~205 cm. E acoperită de masca G1 și e în spatele lui M12, care stă la ~13 cm de zidărie (A.15 plan): rămân ~3 cm între M12 și grindă."
    },
    {
     "id": "ST1",
     "strat": "structura",
     "tip": "stalp",
     "nume": "Stâlpul din colțul cu peretele cu biroul (nord-est)",
     "x": 449,
     "lat": 18.1,
     "h": 0,
     "inalt": 243,
     "adanc": 55,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "A.01 (449 de la grinda ferestrelor), A.15 plan și D01, A.06 (desenat, necotat)",
     "nota": "Stâlp de beton existent: ~18 cm din zidăria peretelui cu biroul, 55 cm din zidăria acestui perete. M12 se termină la fața lui. Același cod pe peretele cu biroul și pe planul tavanului."
    },
    {
     "id": "G5",
     "strat": "gips",
     "tip": "masca",
     "nume": "Masca peretelui cu biroul (est), văzută în secțiune",
     "x": 454.1,
     "lat": 13,
     "h": 0,
     "inalt": 243,
     "stare": "de-verificat",
     "sursa": "A.15 D01 (placa măștii tăiată la 454,1–455,9); A.01 (449 + 5 + 13 = 467)",
     "eticheta": {
      "x": 454.1,
      "h": 150
     },
     "nota": "Masca peretelui cu biroul are în planșe ~13 cm de la zidărie. Adâncimea ei e întrebare deschisă (13 cm în planșe, 19,25 cm după D-06); vezi peretele cu biroul."
    },
    {
     "id": "M12",
     "strat": "mobila",
     "tip": "dulap",
     "nume": "Dulap M12",
     "x": 310,
     "lat": 138.6,
     "h": 0,
     "inalt": 243,
     "adanc": 41.8,
     "stare": "proiect",
     "sursa": "A.15 (M12, D01)",
     "fronturi": [
      {
       "lat": 1.8,
       "tip": "lateral"
      },
      {
       "lat": 60,
       "tip": "lemn"
      },
      {
       "lat": 30,
       "tip": "sticla"
      },
      {
       "lat": 45,
       "tip": "lemn"
      },
      {
       "lat": 1.8,
       "tip": "lateral"
      }
     ],
     "nota": "Fronturi: ușă 60, sticlă fumurie 30, ușă 45 (PAL H1775 ST12 Nuc Parona, A.15). Adâncime 41,8 cm. Stă la ~13 cm de zidăria peretelui (A.15 plan), ca să treacă de grinda GR3 (10 cm)."
    },
    {
     "id": "B1",
     "strat": "mobila",
     "tip": "birou-capat",
     "nume": "Biroul de pe peretele cu biroul — capătul, văzut din lateral",
     "x": 402.3,
     "lat": 51.8,
     "h": 52,
     "inalt": 20,
     "stare": "proiect",
     "sursa": "A.15 D01 (51,8 × 20, la 52 cm, de la fața măștii de la 454,1)",
     "inFata": "M12",
     "nota": "Biroul (205,9 cm, cu riflaj și sertar) stă pe peretele de est, în fața părții din dreapta a lui M12.",
     "adanc": 205.9,
     "vedereaPrincipala": "E"
    },
    {
     "id": "P1",
     "strat": "electric",
     "tip": "priza",
     "nume": "Priză în M12 pentru sursele Hue",
     "x": 426,
     "h": 225,
     "punct": true,
     "pozitie": "aprox",
     "in": "M12",
     "stare": "propunere",
     "sursa": "specs/06 G7 (01.11.2026)",
     "nota": "Legată la firele trase pentru LED-ul M12. Sursa M12 și, dacă se alege așa, sursele M3 + M4 (3 surse). Tâmplarul trebuie să știe decupajul înainte de execuție. Compartimentul exact: de stabilit."
    },
    {
     "id": "CB-M12",
     "strat": "electric",
     "tip": "iesire-cablu",
     "nume": "Capătul cablului de 230 V tras pentru LED-ul M12",
     "pozitie": "necunoscuta",
     "stare": "de-verificat",
     "sursa": "A.06 (marcajul M12)",
     "nota": "Poziția reală se măsoară pe șantier și se trece aici. Priza P1 se leagă la acest cablu."
    },
    {
     "id": "CB-M2",
     "strat": "electric",
     "tip": "iesire-cablu",
     "nume": "Capătul cablului de 230 V tras pentru LED-ul M2 (lângă nișă)",
     "pozitie": "necunoscuta",
     "stare": "de-verificat",
     "sursa": "A.06 (marcajul M2); specs/06 G7",
     "nota": "Sursa M2 stă după perdea, pe peretele cu fereastra. Dacă acest cablu rămâne nefolosit: se leagă într-o doză cu capac, accesibilă, sau se scoate din circuit. Nu rămâne liber în spatele gips-cartonului."
    },
    {
     "id": "TB1",
     "strat": "electric",
     "tip": "tub",
     "nume": "Tub pentru cablul de joasă tensiune: de la priza de după perdea până la banda M2",
     "pozitie": "necunoscuta",
     "stare": "propunere",
     "sursa": "specs/06 G7 (01.11.2026)",
     "nota": "Prin masca acestui perete. Diametru prin care trece mufa cablului prelungitor Hue Flux, fără coturi strânse. Se pune înainte să se închidă masca."
    },
    {
     "id": "M2",
     "strat": "led",
     "tip": "banda-led",
     "nume": "Bandă Hue Flux M2 — piatra de lângă balcon",
     "x": 98,
     "lat": 2,
     "h": 4,
     "inalt": 232,
     "ascuns": true,
     "stare": "de-verificat",
     "sursa": "A.06 (latura dreaptă); D-06 cu cotele din 01.11.2026",
     "detaliu": "D-06",
     "nota": "Pe latura dreaptă a nișei (spre M12), ca în A.06; de confirmat latura. Banda tăiată la ~232 cm (14 segmente). Profil propus 23,4 × 20 mm, prins pe latura nișei, ascuns după buza de 5 cm; spațiul pentru profil e de 3 cm. Bara de profil trebuie să aibă 3 m (240 cm dintr-o bucată)."
    },
    {
     "id": "M12-B",
     "strat": "led",
     "tip": "banda-led",
     "nume": "Bandă Hue Flux în M12 (compartimentul cu sticlă)",
     "x": 398.6,
     "lat": 1.6,
     "h": 5.5,
     "inalt": 232,
     "pozitie": "aprox",
     "in": "M12",
     "eticheta": {
      "x": 374,
      "h": 150
     },
     "stare": "propunere",
     "sursa": "A.15 (bandă în interiorul dulapului); propunerea de profil din 01.11.2026",
     "nota": "În colțul din spate-dreapta al compartimentului cu sticlă, cu lumina spre față-stânga. Profil de colț la 45° cu difuzor opal (CRN14, CRN 4 sau CRN 5). Lungimea: 199 cm (o bară de 2 m) sau ~232 cm (două bare îmbinate). Arhitecta a desenat profil încastrat."
    }
   ],
   "avertismente": [
    {
     "nivel": "atentie",
     "text": "A.06 și A.15 pun panoul de piatră în locuri diferite: A.06 la ~25–115 cm (banda la ~120), A.15 la 10–100 cm (cotat). Diferență de 15 cm. Desenul urmează A.15. De întrebat arhitecta, ca la R10.",
     "sursa": "A.06, A.15",
     "ids": [
      "R1",
      "G2"
     ]
    },
    {
     "nivel": "atentie",
     "text": "M12: în A.06 e lipit de colț (328,5–467,1); în A.15 e la 310–448,6 cm (cotat), până la fața stâlpului ST1 (449–467,1). Masca peretelui cu biroul (G5) are 13 cm în planșe. Se clarifică la măsurătoarea pentru mobilier.",
     "sursa": "A.06, A.15",
     "ids": [
      "M12",
      "ST1"
     ]
    },
    {
     "nivel": "info",
     "text": "R13: arhitecta spune că «piatra din spatele mesei» îmbracă și grinda și stâlpul. Nu știm încă dacă e panoul acesta.",
     "sursa": "arhitecta, 19.10.2026",
     "ids": [
      "R1"
     ]
    }
   ]
  },
  {
   "id": "E",
   "nume": "Peretele cu biroul",
   "subtitlu": "piatra de lângă birou (D02), banca, ușa spre hol · E pe planșă",
   "lungime": 590.0,
   "origine": "colțul cu M12",
   "etapa": 1,
   "plan": [
    [
     467.1,
     590.0
    ],
    [
     467.1,
     0
    ]
   ],
   "variante": {
    "id": "R10",
    "nume": "Poziția panoului 2 (R10)",
    "nota": "R10 e încă deschisă la arhitectă, dar cu originea la zidărie planșele dau aceeași poziție (vezi avertismentele).",
    "optiuni": [
     {
      "id": "A15",
      "nume": "A.15 D02 și A.01 (cotat)",
      "scurt": "A.15",
      "nota": "Nișa 210–300, roca vizibilă 215–295, benzile la 210 și 298: cotat de la fața stâlpului ST1 (A.01: 160 + 80; planul din A.15: sertarul de 160)."
     },
     {
      "id": "A06",
      "nume": "A.06 (măsurat pe plan)",
      "scurt": "A.06",
      "nota": "Nișa ~209–299, benzile la ~210 și ~297, măsurate pe A.06 de la zidăria peretelui cu M12. Diferă de A.15 cu ~1 cm. Valorile 216 și 308 din R10 erau centrele simbolurilor de lumină, măsurate de la grinda peretelui cu M12."
     }
    ],
    "implicit": "A15"
   },
   "elemente": [
    {
     "id": "ST1",
     "strat": "structura",
     "tip": "stalp",
     "nume": "Stâlpul din colțul cu M12 (nord-est)",
     "x": 0,
     "lat": 55,
     "h": 0,
     "inalt": 243,
     "adanc": 18,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "A.15 plan și D01, A.01, A.06 (desenat, necotat)",
     "nota": "Stâlp de beton existent: 55 cm din colț, iese 18 cm din zidăria peretelui, cu ~5 cm în fața măștii. M12 stă lipit de fața lui de vest. Fața de sud (x = 55) e reperul tuturor cotelor de pe acest perete. Se poate măsura acum."
    },
    {
     "id": "ST2",
     "strat": "structura",
     "tip": "stalp",
     "nume": "Stâlpul din colțul cu peretele TV (sud-est)",
     "x": 530,
     "lat": 60,
     "h": 0,
     "inalt": 243,
     "adanc": 18,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "A.01, A.06, A.15 D02 (desenat, necotat)",
     "nota": "Stâlp de beton existent: 60 cm din colț, iese 18 cm din zidărie, cu ~5 cm în fața măștii. Golul ușii se termină la fața lui (x = 530). Între ușă și colț nu e mască."
    },
    {
     "id": "GR2",
     "strat": "structura",
     "tip": "grinda",
     "nume": "Grinda de beton de pe peretele cu biroul",
     "x": 55,
     "lat": 475,
     "h": 205,
     "inalt": 38,
     "adanc": 18,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "A.15 D02 (linia de la 205 cm) și D01 (grinda în secțiune, 18 cm în cameră); A.15 plan (linie întreruptă); A.16",
     "eticheta": {
      "x": 340,
      "h": 224
     },
     "nota": "Fața de jos la 205 cm: acolo se opresc nișa, roca și benzile (cotat în D02). Fața la ~18 cm de zidărie, adică ~5 cm în fața măștii. Tavanul fals se oprește la fața ei. Același cod ca în planul tavanului."
    },
    {
     "id": "U1",
     "strat": "structura",
     "tip": "usa",
     "nume": "Ușa spre hol (cu tocul și pervazul)",
     "x": 435,
     "lat": 95,
     "h": 0,
     "inalt": 204,
     "stare": "proiect",
     "sursa": "A.01 (140 de la rocă + 95; «capăt ramă toc» la 435); A.06 (golul 440–530, foaia ~82 cm); A.15 D02 (~204 cm, necotat)",
     "nota": "Rama tocului începe la 435 (A.01: punctul de plecare pentru stereotomia pardoselii) și se termină la fața stâlpului ST2 (530). Golul din zidărie ~440–530 (90 cm), foaia ~82 cm (A.06, măsurat). Se deschide spre living, cu balamalele spre stâlpul ST2 (A.06). Înălțimea nu e cotată: pe D02 tocul are ~204 cm, sub grinda de la 205."
    },
    {
     "id": "G6",
     "strat": "gips",
     "tip": "masca",
     "nume": "Masca din gips-carton a peretelui (de la stâlpul ST1 până la ușă)",
     "x": 55,
     "lat": 380,
     "h": 0,
     "inalt": 205,
     "adanc": 13,
     "stare": "de-verificat",
     "sursa": "A.01 (160 + 80 + 140 de la fața stâlpului; 449 + 5 până la fața măștii, camera 467); A.06 și A.15 (plan, D01): ~13 cm, necotat direct",
     "eticheta": {
      "x": 330,
      "h": 190
     },
     "nota": "Fața finită la ~13 cm de zidărie: placa de gips-carton + ~11 cm gol pentru cabluri. Sus se oprește sub grinda GR2 (205), la dreapta în rama ușii (435). Banca B1 se prinde în mască (pe planșe nu are picioare): întărituri la h 52–72, pe 55–215, înainte de închiderea plăcilor. Adâncimea e în conflict cu decizia de ~19,25 cm (vezi avertismentul)."
    },
    {
     "id": "G7",
     "strat": "gips",
     "tip": "nisa",
     "nume": "Nișa panoului de piatră (laturile, ascunse după buze)",
     "x": 210,
     "lat": 90,
     "h": 0,
     "inalt": 205,
     "stare": "proiect",
     "sursa": "A.15 D02 (90; 205); A.01 (160 de la fața stâlpului + 5 cm buza)",
     "detaliu": "D-06",
     "varianta": "A15",
     "eticheta": {
      "x": 210,
      "h": 20
     },
     "nota": "Laturile nișei la 210 și 300 cm. Buzele din față au câte 5 cm (210–215 și 295–300) și ascund laturile și benzile M3, M4. Sus, nișa se termină sub grinda GR2 (205)."
    },
    {
     "id": "G7",
     "strat": "gips",
     "tip": "nisa",
     "nume": "Nișa panoului de piatră (laturile, ascunse după buze)",
     "x": 208.9,
     "lat": 90,
     "h": 0,
     "inalt": 205,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "A.06 (roca de 9 cm din proiect, măsurat pe plan de la zidăria peretelui cu M12)",
     "detaliu": "D-06",
     "varianta": "A06",
     "eticheta": {
      "x": 208.9,
      "h": 20
     },
     "nota": "Pe A.06 nișa e la ~209–299: practic aceeași poziție ca în A.15 (diferență ~1 cm)."
    },
    {
     "id": "R2",
     "strat": "gips",
     "tip": "roca",
     "nume": "Rocă manuală — piatra de lângă birou (D02)",
     "x": 215,
     "lat": 80,
     "h": 0,
     "inalt": 205,
     "adanc": 5,
     "stare": "proiect",
     "sursa": "A.15 D02 (80 × 205); A.01 (80, între cele două măști); arhitecta 19.10.2026 (rocă manuală 5–6 cm)",
     "detaliu": "D-06",
     "varianta": "A15",
     "nota": "Vizibil 80 × 205 cm, de la 215 la 295. Grosime 5–6 cm; lângă laturile cu LED max. 5 cm pe primii ~5 cm, ca să rămână 3 cm pentru profil. Benzi pe ambele laturi (M3, M4). Cu masca de 13 cm din planșe, fața rocii e la ~8,75 cm de zidărie, deci rămân ~3,75 cm pentru placa suport. Banca B1 acoperă partea din stânga, 215–260,9, la h 52–72 (R11)."
    },
    {
     "id": "R2",
     "strat": "gips",
     "tip": "roca",
     "nume": "Rocă manuală — piatra de lângă birou (D02)",
     "x": 215,
     "lat": 79.9,
     "h": 0,
     "inalt": 205,
     "adanc": 5,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "A.06 (capetele măștilor la 215 și ~295, măsurat pe plan)",
     "detaliu": "D-06",
     "varianta": "A06",
     "nota": "Aceeași poziție ca în A.15. Vezi R2 din varianta A.15 pentru execuție."
    },
    {
     "id": "G3",
     "strat": "gips",
     "tip": "plinta",
     "nume": "Plintă ascunsă (shadow gap, aluminiu negru 20 mm)",
     "x": 55,
     "lat": 380,
     "h": 0,
     "inalt": 2,
     "stare": "proiect",
     "sursa": "A.09 (plinta ascunsă pe tot peretele, de la stâlp la ușă); A.15 D02; specs/04 rândul 14",
     "eticheta": {
      "x": 340,
      "h": 10
     },
     "coteH": false,
     "nota": "A.09 și D02 o desenează continuu, și sub rocă: de confirmat dacă sub rocă rămâne plinta. Se montează după mobilier (A.09). Pe sub ea pot trece cablurile de joasă tensiune ale benzilor (specs/06 G7), dacă profilul are loc.",
     "detaliu": "G3"
    },
    {
     "id": "TF1",
     "strat": "gips",
     "tip": "tavan-fals",
     "nume": "Tavan fals din gips-carton (7 cm)",
     "x": 0,
     "lat": 590,
     "h": 243,
     "inalt": 7,
     "stare": "de-verificat",
     "sursa": "A.15 D02 și D01 (fața la 243, placa la 250); A.02 D-09 (7 cm); A.16",
     "eticheta": {
      "x": 160,
      "h": 252
     },
     "nota": "Fața tavanului fals la 243 cm, placa la 250 cm (A.15, A.16, D-09). Legenda A.05 scrie 10 cm: de confirmat. Același cod pe toți pereții și pe planul tavanului.",
     "adanc": 434
    },
    {
     "id": "M12",
     "strat": "mobila",
     "tip": "dulap",
     "nume": "Dulapul M12 (văzut din lateral)",
     "x": 13.2,
     "lat": 41.8,
     "h": 0,
     "inalt": 243,
     "adanc": 138.6,
     "stare": "proiect",
     "sursa": "A.15 (plan: 41,8; D01: 243; D02, în secțiune)",
     "fronturi": [
      {
       "lat": 41.8,
       "tip": "lateral"
      }
     ],
     "nota": "Fața lui M12 e aliniată cu fața stâlpului ST1 (x = 55). Spatele e la ~13 cm de zidăria peretelui cu M12 (necotat): în spate e grinda de ~10 cm a acelui perete, plus ~3 cm. Lateralul din dreapta e lipit de stâlpul ST1, la 18 cm de zidăria acestui perete.",
     "vedereaPrincipala": "N"
    },
    {
     "id": "B1",
     "strat": "mobila",
     "tip": "birou",
     "nume": "Banca cu riflaj (sertar 160 + parte fixă rotunjită 45)",
     "x": 55,
     "lat": 205.9,
     "h": 52,
     "inalt": 20,
     "adanc": 51.8,
     "inFata": "G6",
     "stare": "proiect",
     "sursa": "A.15 D02 (205,9; 52 + 20); A.15 plan (51,8; sertar 160, parte fixă 45)",
     "nota": "Începe la fața lui M12 (x = 55). Adâncime 51,8 cm de la fața măștii. Front bej nisip, panou flexibil vopsit (A.15). Pe planșe nu are picioare: se prinde în mască, cu întărituri. Partea fixă (215–260,9) stă în fața rocii (R11)."
    },
    {
     "id": "P1",
     "strat": "electric",
     "tip": "priza",
     "nume": "Priză triplă",
     "x": 75,
     "h": 45,
     "punct": true,
     "stare": "proiect",
     "sursa": "A.06 (20 de la fața stâlpului, h = 45); A.15 D02 (20; 45)",
     "nota": "Sub bancă: axa la 45 cm, banca începe la 52. Ștecherele intră orizontal."
    },
    {
     "id": "P2",
     "strat": "electric",
     "tip": "priza",
     "nume": "2 prize simple + priză TV și internet (DV)",
     "x": 105,
     "h": 125,
     "punct": true,
     "stare": "proiect",
     "sursa": "A.06 (20 + 30 de la fața stâlpului, h = 125); A.15 D02 (50; 125); Necesar prize și întrerupătoare, poz. 4",
     "nota": "Deasupra băncii, la 53 cm peste blat. Doză triplă."
    },
    {
     "id": "CC1",
     "strat": "electric",
     "tip": "tub",
     "nume": "Canal de legătură pentru cabluri (A.15 D02)",
     "x": 94,
     "lat": 2,
     "h": 45,
     "inalt": 70,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "A.15 D02 (eticheta; 40 de la M12; lanțul de cote 45 + 70 + 10)",
     "nota": "Planșa nu desenează canalul, doar săgeata și cotele. Citirea noastră: vertical, la 40 cm de M12 (x = 95), de la h 45 la 115, adică de la nivelul prizei P1 până la 10 cm sub P2. De confirmat cu arhitecta ce este și cum trece pe lângă bancă.",
     "adanc": 2
    },
    {
     "id": "I1",
     "strat": "electric",
     "tip": "intrerupator",
     "nume": "Întrerupător cvadruplu JK / LM",
     "x": 420,
     "h": 110,
     "punct": true,
     "stare": "de-verificat",
     "sursa": "A.06 (15 de la rama ușii); Necesar prize și întrerupătoare, poz. 8",
     "nota": "Clapele J și K (șinele), L (consola TV), M (benzile M). Doză adâncă, pentru Hue Wall Switch Module (specs/06 G6). Înălțimea nu e dată în A.06: 110 cm e presupusă."
    },
    {
     "id": "P3",
     "strat": "electric",
     "tip": "priza",
     "nume": "Priză pentru sursele Hue M3 + M4 (sub bancă)",
     "x": 195,
     "h": 30,
     "punct": true,
     "pozitie": "aprox",
     "stare": "propunere",
     "sursa": "specs/06 G7 (01.11.2026)",
     "nota": "Dublă, pentru cele două surse. Alimentare permanentă, nu prin întrerupătorul LM (specs/06 G4). Sursele stau sub bancă, accesibile. Alternativa: priza P1 din M12, pe peretele cu M12. Cablurile de joasă tensiune până la M3 și M4 trec prin tubul TB3."
    },
    {
     "id": "CB-M3",
     "strat": "electric",
     "tip": "iesire-cablu",
     "nume": "Capătul cablului de 230 V tras pentru LED-ul M3",
     "pozitie": "necunoscuta",
     "stare": "de-verificat",
     "sursa": "A.06 (marcajul M din stânga nișei)",
     "nota": "Poziția reală se măsoară pe șantier. Dacă sursele stau în priza P3, cablul alimentează P3 sau se leagă într-o doză cu capac, accesibilă. Nu rămâne liber în spatele gips-cartonului."
    },
    {
     "id": "CB-M4",
     "strat": "electric",
     "tip": "iesire-cablu",
     "nume": "Capătul cablului de 230 V tras pentru LED-ul M4",
     "pozitie": "necunoscuta",
     "stare": "de-verificat",
     "sursa": "A.06 (marcajul M din dreapta nișei)",
     "nota": "Ca la CB-M3."
    },
    {
     "id": "TB3",
     "strat": "electric",
     "tip": "tub",
     "nume": "Tub pentru cablurile de joasă tensiune: de la sursele de sub bancă la M3 și M4",
     "pozitie": "necunoscuta",
     "stare": "propunere",
     "sursa": "specs/06 G7 (01.11.2026)",
     "nota": "Prin golul de ~11 cm din spatele măștii sau pe sub plinta ascunsă, până la capătul de jos al fiecărei benzi. Spre M4 trece pe sub rocă sau prin placa suport: de stabilit cu firma de rocă. Diametru prin care trece mufa cablului prelungitor Hue Flux, fără coturi strânse. Se pune înainte să se închidă masca."
    },
    {
     "id": "M3",
     "strat": "led",
     "tip": "banda-led",
     "nume": "Bandă Hue Flux M3 — latura stângă a nișei",
     "x": 210,
     "lat": 2,
     "h": 3,
     "inalt": 199,
     "ascuns": true,
     "stare": "proiect",
     "sursa": "A.15 D02 și A.02 (D-06, trimis din D02); A.01 și A.06 (marcajele LED); specs/06 G3 (Hue Flux ~199 cm)",
     "detaliu": "D-06",
     "varianta": "A15",
     "nota": "Pe latura stângă a nișei, ascunsă după buza de 5 cm, cu lumina spre dreapta. Banda tăiată la ~199 cm (12 segmente) din kitul de 3 m, capetele la ~3 și ~202 cm. Profilul de 23,4 × 20 mm pe toată înălțimea nișei (205 cm): bară de 3 m, nu de 2 m. Banca B1 trece prin fața ei la h 52–72 (R11)."
    },
    {
     "id": "M4",
     "strat": "led",
     "tip": "banda-led",
     "nume": "Bandă Hue Flux M4 — latura dreaptă a nișei",
     "x": 298,
     "lat": 2,
     "h": 3,
     "inalt": 199,
     "ascuns": true,
     "stare": "proiect",
     "sursa": "A.15 D02 și A.02 (D-06, trimis din D02); A.01 și A.06 (marcajele LED); specs/06 G3 (Hue Flux ~199 cm)",
     "detaliu": "D-06",
     "varianta": "A15",
     "nota": "Pe latura dreaptă a nișei (spre ușă), ascunsă după buza de 5 cm, cu lumina spre stânga. Banda tăiată la ~199 cm (12 segmente) din kitul de 3 m, capetele la ~3 și ~202 cm. Profilul de 23,4 × 20 mm pe toată înălțimea nișei (205 cm): bară de 3 m, nu de 2 m."
    },
    {
     "id": "M3",
     "strat": "led",
     "tip": "banda-led",
     "nume": "Bandă Hue Flux M3 — latura stângă a nișei",
     "x": 209.1,
     "lat": 2,
     "h": 3,
     "inalt": 199,
     "ascuns": true,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "A.06 (marcajul galben de LED, măsurat pe plan)",
     "detaliu": "D-06",
     "varianta": "A06",
     "nota": "Pe A.06 marcajul e la ~210, ca în A.15. Execuția: vezi M3 din varianta A.15."
    },
    {
     "id": "M4",
     "strat": "led",
     "tip": "banda-led",
     "nume": "Bandă Hue Flux M4 — latura dreaptă a nișei",
     "x": 296,
     "lat": 2,
     "h": 3,
     "inalt": 199,
     "ascuns": true,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "A.06 (marcajul galben de LED, măsurat pe plan)",
     "detaliu": "D-06",
     "varianta": "A06",
     "nota": "Pe A.06 marcajul e la ~297, cu ~1 cm înaintea laturii din A.15. Execuția: vezi M4 din varianta A.15."
    }
   ],
   "avertismente": [
    {
     "nivel": "info",
     "text": "R10: cu originea la zidăria peretelui cu M12, A.15 (D02 și planul), A.01 și A.06 pun panoul 2 în același loc: nișa 210–300, roca vizibilă 215–295, benzile la ~210 și ~298. Cele două variante diferă cu ~1 cm. Diferența de ~20 cm din R10 vine din citire: 216 și 308 sunt centrele simbolurilor de lumină din A.06, măsurate de la fața grinzii peretelui cu M12 (la 10 cm de zidărie); 196 și 287 sunt D02 măsurat ca și cum M12 ar sta lipit de zidărie (stă la ~13 cm). De confirmat cu arhitecta într-un rând.",
     "sursa": "A.01, A.06, A.15 (măsurat pe vectori, 02.11.2026)",
     "ids": [
      "G7",
      "R2",
      "M3",
      "M4"
     ]
    },
    {
     "nivel": "atentie",
     "text": "R11: banca B1 (55–260,9, h 52–72) trece prin fața rocii pe 215–260,9 (~46 cm din cei 80 vizibili) și prin fața buzei și a benzii M3 (210–215). Partea fixă rotunjită de 45 cm nu are mască de gips-carton în spate: de stabilit de ce se prinde (de corpul cu sertar sau printr-un suport în rocă). Verificările automate B1–G7 și B1–R2 sunt aceeași problemă.",
     "sursa": "A.15 D02 și plan",
     "ids": [
      "B1",
      "R2"
     ]
    },
    {
     "nivel": "atentie",
     "text": "Masca acestui perete are în A.01, A.06 și A.15 ~13 cm de la zidărie (A.01: fața stâlpului la 449, plus 5 cm până la mască; camera are 467), cu roca de 9 cm direct pe zidărie. D-06, la care trimite D02 în A.02, are ~23 cm, iar decizia de ~19,25 cm a fost calculată pentru D-06. Cu cotele noi (rocă 5 + 3 cm + buză 1,25), masca de 13 cm lasă ~3,75 cm pentru placa suport. Cu 19,25 cm, masca ar ieși ~1,25 cm în fața stâlpilor și a grinzii (18 cm), iar banca s-ar muta ~6 cm spre cameră. De întrebat arhitecta.",
     "sursa": "A.01, A.02 (D02 → D-06), A.06, A.15; analiza/11 (19,25 cm)",
     "ids": [
      "G6",
      "GR2"
     ]
    },
    {
     "nivel": "atentie",
     "text": "Peretele are 590 cm între zidăria peretelui cu M12 și zidăria peretelui TV (A.01, A.05, A.06, A.15 D02), nu 580. Cota de 580 din A.05 pornește de la fața grinzii peretelui cu M12, la 10 cm de zidărie. Aici x = 0 e zidăria peretelui cu M12, în spatele stâlpului ST1; în planul camerei y = 590 − x.",
     "sursa": "A.01, A.05, A.06, A.15",
     "ids": [
      "ST1"
     ]
    },
    {
     "nivel": "info",
     "text": "Colțul din stânga e în stâlpul ST1. Planșele cotează tot ce e pe acest perete de la fața stâlpului ST1, care e și fața lui M12, la x = 55 (necotat; același în A.01, A.06 și A.15). Pe șantier se măsoară de la fața stâlpului și se adună 55.",
     "sursa": "A.01, A.06, A.15",
     "ids": [
      "ST1",
      "M12"
     ]
    },
    {
     "nivel": "info",
     "text": "Sursele Hue M3 + M4 (specs/06 G7): în priza P3 de sub bancă sau în priza P1 din M12 (peretele cu M12), împreună cu sursa M12. Se alege una și se scoate cealaltă din date.",
     "sursa": "specs/06 G7 (01.11.2026)",
     "ids": [
      "P3"
     ]
    }
   ]
  },
  {
   "id": "S",
   "nume": "Peretele TV",
   "subtitlu": "televizorul, comoda M10, masca șemineului și a AC-ului M11 (D03) · S pe planșă",
   "lungime": 467.1,
   "etapa": 1,
   "origine": "colțul cu peretele cu biroul (fața zidăriei, ascunsă în colț de stâlpul de ~18 cm)",
   "plan": [
    [
     467.1,
     0
    ],
    [
     0,
     0
    ]
   ],
   "elemente": [
    {
     "id": "ST2",
     "strat": "structura",
     "tip": "stalp",
     "nume": "Stâlpul din colțul cu peretele cu biroul",
     "x": 0,
     "lat": 18.1,
     "h": 0,
     "inalt": 243,
     "adanc": 60,
     "stare": "de-verificat",
     "sursa": "A.01, A.06, A.10 (măsurat pe desen, necotat); A.16 D03",
     "nota": "Iese ~18 cm din zidăria peretelui cu biroul, pe 60 cm de la acest perete. Lângă fața lui dinspre cameră începe ușa spre hol (A.01: 45 cm de la fața pilastrului PI1). Cotele de pe acest perete pornesc de la zidăria din spatele stâlpului: pe șantier se măsoară de la fața stâlpului și se adună 18,1 cm. În desen are 18,1 cm, ca peretele să aibă 467,1 cm. Pe planul tavanului are același cod (ST2)."
    },
    {
     "id": "PI1",
     "strat": "structura",
     "tip": "stalp",
     "nume": "Pilastrul de lângă stâlp (iese ~15 cm din perete)",
     "x": 18.1,
     "lat": 50,
     "h": 0,
     "inalt": 205,
     "adanc": 15,
     "stare": "proiect",
     "sursa": "A.01 (50, cotat); A.06, A.10 (adâncimea de 15 cm, măsurată); A.16 D03",
     "nota": "Fața lui e cu ~15 cm în fața peretelui dintre pilaștri, sub grinda GR1. Între stâlp și riflaj nu se montează nimic pe el, în afară de plinta D03."
    },
    {
     "id": "PI2",
     "strat": "structura",
     "tip": "stalp",
     "nume": "Pilastrul din spatele măștii M11",
     "x": 417.1,
     "lat": 50,
     "h": 0,
     "inalt": 205,
     "adanc": 15,
     "ascuns": true,
     "stare": "de-verificat",
     "sursa": "A.01, A.06, A.10 (măsurat pe desen, necotat)",
     "nota": "Rămâne închis în masca M11. Iese ~15 cm din perete, iar focarul SEM trece cu ~20 cm în dreptul lui: vezi avertismentul despre adâncimea nișei."
    },
    {
     "id": "GR1",
     "strat": "structura",
     "tip": "grinda",
     "nume": "Grinda de beton de-a lungul peretelui",
     "x": 18.1,
     "lat": 449,
     "h": 205,
     "inalt": 45,
     "adanc": 15,
     "stare": "de-verificat",
     "sursa": "A.16 D03 (h 205 = 33 + 172 = 58 + 102,7 + 44,3); A.29 D03' (iese 15 cm, măsurat); A.01 (placa la 2,50 m)",
     "nota": "Grindă existentă, lată ~25 cm, din care ~15 cm ies din peretele dintre pilaștri; coboară 45 cm sub placă, cu fața de jos la 205 cm. Același cod (GR1) pe planul tavanului; tavanul fals se oprește la fața ei. Riflajul și spațiul de deasupra televizorului se opresc sub ea. Peste capătul dinspre fereastră e masca M11; unitatea AC se prinde de ea printr-un panou-suport."
    },
    {
     "id": "D03",
     "strat": "gips",
     "tip": "masca",
     "nume": "Masca din gips-carton RF pentru șemineu și AC (structura lui M11)",
     "x": 367.1,
     "lat": 100,
     "h": 0,
     "inalt": 242.2,
     "adanc": 50,
     "stare": "proiect",
     "detaliu": "D03'",
     "sursa": "A.01 (100 × 50, cotat); A.16 D03; A.29 D03, D03'",
     "nota": "Perete din gips-carton RF (rezistent la foc) pe structură de prindere, cu placă de silicat de calciu de 30 mm în jurul focarului (A.29). Se placează cu PAL (M11). Adâncime 50 cm de la peretele dintre pilaștri. Urcă până sub tavanul fals (242,2); pe ultimii ~15 cm spre fereastră, în dreptul scafei draperiei, urcă până la placă și închide capătul scafei. Înăuntru: focarul SEM jos, unitatea AC sus. Pe planul tavanului are același cod (D03)."
    },
    {
     "id": "G8",
     "strat": "gips",
     "tip": "plinta",
     "nume": "Plintă duropolimer 8 cm pe stâlp și pe pilastru",
     "x": 0,
     "lat": 68.1,
     "h": 0,
     "inalt": 8,
     "stare": "proiect",
     "sursa": "A.09 (plintă duropolimer, 8 cm)",
     "nota": "Ocolește stâlpul ST2: fața lui dinspre cameră (18 cm), latura lui (45 cm, perpendiculară pe perete, nu apare în desen) și fața pilastrului PI1 (50 cm). Se montează după mobilier (A.09). A.09 cere 8 cm; produsul din listă are 6 cm (întrebarea A1).",
     "finisaj": "alb"
    },
    {
     "id": "G9",
     "strat": "gips",
     "tip": "plinta",
     "nume": "Plintă duropolimer 8 cm în spatele corpului M10",
     "x": 68.1,
     "lat": 299,
     "h": 0,
     "inalt": 8,
     "stare": "de-verificat",
     "sursa": "A.09",
     "nota": "A.09 desenează plinta și pe peretele din spatele corpului M10. Corpul are 40 cm adâncime și stă la 8 cm de pardoseală, iar plinta se montează după mobilier: de întrebat arhitecta dacă aici se pune plintă sau dacă se montează înaintea corpului.",
     "finisaj": "alb"
    },
    {
     "id": "TF1",
     "strat": "gips",
     "tip": "tavan-fals",
     "nume": "Tavan fals din gips-carton",
     "x": 18.1,
     "lat": 433.7,
     "h": 243,
     "inalt": 7,
     "stare": "de-verificat",
     "sursa": "A.16 D03 și A.29 D03' (măsurat pe desen); A.05",
     "nota": "În desfășurarea D03 fața tavanului fals e la ~243 cm, iar placa la 250 cm (A.01: Hu 2,50 m). A.05 scrie grosime 10 cm. Înălțimea liberă nu e cotată (întrebarea L6). Grinda GR1 coboară sub tavan până la 205 cm. Tavanul se oprește la scafa draperiei; în dreptul ei masca D03 (placată cu M11) urcă până la placă. Tavanul fals se oprește la fața grinzii GR1. Pe planul tavanului are același cod (TF1).",
     "adanc": 565
    },
    {
     "id": "RF",
     "strat": "mobila",
     "tip": "riflaj",
     "nume": "Riflaj vertical",
     "x": 68.1,
     "lat": 125.1,
     "h": 33,
     "inalt": 172,
     "adanc": 3,
     "stare": "proiect",
     "sursa": "A.16 versiunea 03/2026 (125,1 × 172; pornește de la 8 + 25)",
     "nota": "Lamele verticale bej, de pe corpul M10 (h 33) până sub grinda GR1 (h 205). Pe desen: lamele de ~3 cm cu ~2 cm între ele, adâncime ~3 cm (A.06, A.10), necotate. Trece în spatele consolei M10-C și al părții din stânga a televizorului. Capătul din dreapta (x 193,2) acoperă ~2,5 cm din rama prizei P2. În A.16 din PT (02/2026) avea ~121 cm.",
     "lamela": 3,
     "rost": 2
    },
    {
     "id": "M10",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Corpul de jos al comodei TV (M10)",
     "x": 68.1,
     "lat": 299,
     "h": 8,
     "inalt": 25,
     "adanc": 40,
     "stare": "proiect",
     "sursa": "A.16 D03 (8 + 25; 49 + 250 = 299); A.01 (299); A.08 (M10, 299 × 40)",
     "nota": "PAL H1775 ST12 Nuc Parona (legenda A.16). Suspendat la 8 cm de pardoseală, între pilastrul PI1 și masca M11. Trei fronturi de ~99,7 cm (rosturi la x ≈ 167,8 și 267,5, măsurat). În perete, în spatele lui, sunt prizele P1 și P3 și doza D1 a tubului de cabluri: tâmplarul lasă spatele deschis sau decupaje în dreptul lor.",
     "finisaj": "nuc",
     "fronturi": [
      {
       "lat": 99.7
      },
      {
       "lat": 99.7
      },
      {
       "lat": 99.6
      }
     ]
    },
    {
     "id": "M10-C",
     "strat": "mobila",
     "tip": "corp",
     "nume": "Consola suspendată a comodei TV (M10)",
     "x": 117.1,
     "lat": 250,
     "h": 43,
     "inalt": 15,
     "adanc": 30,
     "stare": "proiect",
     "sursa": "A.16 D03 (49 + 250; 10 + 15); A.08 (250 × 30)",
     "nota": "Bej (U156 Bej nisip mat, singura culoare bej din legenda A.16; pe desen e mai deschisă decât riflajul, de confirmat). Trei fronturi de ~83,3 cm. Între ea și corpul de jos rămân 10 cm, luminați de banda L. În stânga (x 117,1–193,2) e în fața riflajului: prinderea în perete o stabilește tâmplarul. Înăuntru, în dreapta, priza P4 pentru sursa benzii L.",
     "finisaj": "bej",
     "fronturi": [
      {
       "lat": 83.3
      },
      {
       "lat": 83.4
      },
      {
       "lat": 83.3
      }
     ]
    },
    {
     "id": "M11",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Placarea din PAL a măștii șemineului și a AC-ului (M11)",
     "x": 367.1,
     "lat": 100,
     "h": 0,
     "inalt": 242.2,
     "adanc": 50,
     "inFata": "D03",
     "stare": "proiect",
     "detaliu": "D03'",
     "sursa": "A.16 D03 (100; 65 + 48 + 92,2 + 36,8); A.29; A.08 (M11)",
     "nota": "PAL H1775 ST12 Nuc Parona pe masca de gips-carton D03. Focarul SEM e lipit de marginea dinspre TV. Sus e compartimentul AC: capacul de sus M11-C și, sub el, clapa CL.",
     "finisaj": "nuc"
    },
    {
     "id": "M11-C",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Capacul de sus cu lamele al compartimentului AC",
     "x": 367.1,
     "lat": 100,
     "h": 207.2,
     "inalt": 35,
     "inFata": "D03",
     "stare": "propunere",
     "sursa": "A.16 D03 (capac de 36,8 cm, rabatabil); propunerea din 03.11.2026, ca în dormitorul mic (de confirmat cu arhitecta, LV2)",
     "nota": "Partea de sus a frontului, între 207,2 și 242,2 cm, pe toată lățimea măștii: o ramă cu lamelele LM. Pe aici intră aerul cald spre grila de sus a unității. Se rabatează în jos, cu balamale la marginea de jos și un opritor (ca în A.16), ca să ajungi la filtre fără să-l dai jos; pentru service se poate și demonta. În A.16 capacul era între 205,2 și 242,2, rabatabil, cu 9 găuri.",
     "finisaj": "nuc"
    },
    {
     "id": "CL",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Clapa fantei AC: vara se rabatează și intră sub unitate",
     "x": 367.1,
     "lat": 100,
     "h": 189.2,
     "inalt": 18,
     "adanc": 50,
     "inFata": [
      "D03",
      "AC"
     ],
     "stare": "propunere",
     "sursa": "propunerea din 03.11.2026, ca în dormitorul mic (de confirmat cu arhitecta, LV2)",
     "finisaj": "nuc",
     "pozitie": "aprox",
     "nota": "Între 189,2 și 207,2 cm, pe toată lățimea măștii, fără găuri: vara e deschisă, iar iarna aerul condiționat e oprit. Vara se rabatează în jos și se împinge ~18 cm sub unitate, pe două glisiere, iar aerul rece iese liber prin fantă. Înainte de pornirea AC-ului clapa trebuie deschisă."
    },
    {
     "id": "LM",
     "strat": "mobila",
     "tip": "riflaj",
     "nume": "Lamelele capacului de sus: 3 cm, la ~2,2 cm",
     "x": 369.1,
     "lat": 96,
     "h": 208.2,
     "inalt": 33,
     "lamela": 3,
     "rost": 2.3,
     "finisaj": "nuc",
     "inFata": [
      "D03",
      "AC"
     ],
     "stare": "propunere",
     "sursa": "A.16 D03 (9 găuri Ø 3 cm); propunerea din 03.11.2026, ca în dormitorul mic (de confirmat cu arhitecta, LV2)",
     "pozitie": "aprox",
     "nota": "19 lamele verticale de 3 cm din PAL nuc, pe 96 × 33 cm, cu ~2,2 cm între ele: ~41% din capac e gol (~0,13 m²). În spatele lamelelor, fundul compartimentului se vopsește negru, ca unitatea să nu se vadă. În A.16 erau doar 9 găuri Ø 3 cm, într-un rând."
    },
    {
     "id": "SEM",
     "strat": "mobila",
     "tip": "semineu",
     "nume": "Șemineul bio DELTA (focar 70 × 48 cm)",
     "x": 367.1,
     "lat": 70,
     "h": 65,
     "inalt": 48,
     "adanc": 39,
     "in": "M11",
     "inFata": "D03",
     "stare": "proiect",
     "detaliu": "D03'",
     "sursa": "A.16 D03 (70 × 48, la 65 cm); A.29 D03' (39 cm de la fața măștii); specs/04 (DELTA colț dreapta 70 × 48 × 28, cumpărat)",
     "nota": "Focar cu bioetanol, deja cumpărat. Lipit de marginea dinspre TV a măștii; latura deschisă e spre TV (D03'). Între focar și marginea dinspre fereastră rămân 30 cm. Se montează pe placa de silicat de calciu, fără joc."
    },
    {
     "id": "TV",
     "strat": "mobila",
     "tip": "tv",
     "nume": "Televizorul (dimensiunile din planșă)",
     "x": 143.3,
     "lat": 178.3,
     "h": 58,
     "inalt": 102.7,
     "adanc": 5,
     "stare": "proiect",
     "sursa": "A.16 versiunea 03/2026 (75,2 + 178,3 + 46; 58 + 102,7 + 44,3)",
     "nota": "Planșa desenează un televizor de 178,3 × 102,7 cm (~81 inch), cu partea de jos pe consola M10-C (h 58). Televizorul cumpărat (Philips Ambilight) se măsoară și se compară (întrebarea A13). Pe plan (A.06, A.10) spatele lui e la ~12 cm de perete. Fără bandă LED în spatele lui (are Ambilight).",
     "inFata": [
      "P2",
      "D2",
      "STV",
      "TB4"
     ]
    },
    {
     "id": "STV",
     "strat": "electric",
     "tip": "cutie",
     "nume": "Suportul TV încastrat în perete",
     "x": 217.5,
     "lat": 30,
     "h": 87.1,
     "inalt": 30,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "A.16 D03 („suport încastrare TV”, măsurat pe desen)",
     "nota": "Cutie de ~30 × 30 cm încastrată în perete, centrată pe televizor (axa la x 232,5), la h ~87–117. Dimensiunile depind de suportul ales. Ambilight are nevoie de distanță față de perete: suport cu distanță reglabilă (întrebarea A8b)."
    },
    {
     "id": "P1",
     "strat": "electric",
     "tip": "priza",
     "nume": "Priză triplă, în spatele corpului M10",
     "x": 118,
     "h": 19,
     "punct": true,
     "in": "M10",
     "stare": "proiect",
     "sursa": "A.06 (priză cu 3 doze, h=20); A.16 D03 (rama între 15 și 23 cm)",
     "nota": "Ramă orizontală de 3 module (desenată de 20 cm). A.06 dă h=20; A.16 cotează rama între 15 și 23 cm, cu axa la 19. Accesul prin corpul M10."
    },
    {
     "id": "P2",
     "strat": "electric",
     "tip": "priza",
     "nume": "2 prize + priză TV și internet, în spatele televizorului",
     "x": 203.3,
     "h": 127,
     "punct": true,
     "stare": "proiect",
     "sursa": "A.06 (3 doze + DV, h=130); A.16 D03 (rama între 123 și 131 cm); Necesar prize (2 prize simple + TV și internet)",
     "nota": "Ramă orizontală de ~25 cm (x 190,7–215,8). A.06 dă h=130; A.16 cotează rama între 123 și 131 cm, cu axa la 127. Riflajul RF acoperă ~2,5 cm din capătul ei din stânga: de hotărât cu arhitecta dacă se mută priza spre dreapta sau se scurtează riflajul."
    },
    {
     "id": "P3",
     "strat": "electric",
     "tip": "priza",
     "nume": "Priză triplă, în spatele corpului M10",
     "x": 220.8,
     "h": 19,
     "punct": true,
     "in": "M10",
     "stare": "proiect",
     "sursa": "A.06 (priză cu 3 doze, h=20); A.16 D03 („priza”, rama între 15 și 23 cm)",
     "nota": "Ramă orizontală de ~26,6 cm (x 207,4–234,1). A.06 o pune la ~223 cm și h=20; A.16 cotează rama între 15 și 23 cm, cu axa la 19. Accesul prin corpul M10."
    },
    {
     "id": "D1",
     "strat": "electric",
     "tip": "doza",
     "nume": "Doza de jos a tubului de cabluri TV, în spatele corpului M10",
     "x": 197.5,
     "h": 21,
     "punct": true,
     "pozitie": "aprox",
     "in": "M10",
     "stare": "de-verificat",
     "sursa": "A.16 D03 (măsurat pe desen)",
     "nota": "Doză de ~10 × 8 cm, la h ~17–25. Capătul de jos al tubului TB4: de aici urcă spre televizor cablurile HDMI și de antenă de la aparatele din corpul M10."
    },
    {
     "id": "TB4",
     "strat": "electric",
     "tip": "tub",
     "nume": "Tub încastrat pentru cablurile televizorului",
     "x": 195.8,
     "lat": 4,
     "h": 25,
     "inalt": 87,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "A.16 D03 („tub încastrat cablaj”, măsurat pe desen)",
     "nota": "În perete, vertical, între dozele D1 și D2. Pe desen are ~4 cm lățime; diametrul nu e cotat. Propunere: min. Ø 40 mm, fără coturi, ca să treacă mufele HDMI. Se pozează înainte de tencuială.",
     "adanc": 4
    },
    {
     "id": "D2",
     "strat": "electric",
     "tip": "doza",
     "nume": "Doza de sus a tubului de cabluri TV, în spatele televizorului",
     "x": 197.5,
     "h": 116,
     "punct": true,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "A.16 D03 (măsurat pe desen)",
     "nota": "Doză de ~10 × 8 cm, la h ~112–120, chiar sub priza P2. Capătul de sus al tubului TB4."
    },
    {
     "id": "P4",
     "strat": "electric",
     "tip": "priza",
     "nume": "Priză în consolă pentru sursa Hue a benzii L",
     "x": 335,
     "h": 50,
     "punct": true,
     "pozitie": "aprox",
     "in": "M10-C",
     "stare": "propunere",
     "sursa": "specs/06 G7 (01.11.2026); A.06 (alimentarea benzii L la x ≈ 335)",
     "nota": "Priză simplă în perete, în interiorul consolei, legată la firele trase pentru banda L. Sursa Hue se bagă aici; cablul ei (1,5 m) ajunge la banda de sub consolă fără prelungitor. Rama de 8 cm încape în consola de 15 cm doar cu spatele consolei deschis în dreptul ei; accesul prin frontul din dreapta. Tâmplarul trebuie să știe decupajul înainte de execuție."
    },
    {
     "id": "AC",
     "strat": "electric",
     "tip": "ac",
     "nume": "Unitatea interioară AC, în masca M11",
     "x": 380.2,
     "lat": 78,
     "h": 196.2,
     "inalt": 29,
     "adanc": 19,
     "pozitie": "aprox",
     "in": "M11",
     "stare": "propunere",
     "sursa": "A.07 („cât mai aproape de tavan”); propunerea din 03.11.2026, ca în dormitorul mic (de confirmat cu arhitecta, LV2); spațiul de deasupra după manualele LG și Pioneer (15–20 cm)",
     "nota": "Modelul nu e ales: desenat ca un split tipic, ~78 × 29 × 19 cm. Stă în față, pe un panou-suport prins în grinda GR1, cu fața la ~6 cm în spatele capacului, ca să aibă loc clapeta lui. Deasupra rămân ~15 cm. Aerul cald intră prin capacul de sus M11-C, cel rece iese prin fanta de jos, cu clapa CL deschisă. Scurgerea e la ~h 197, deci gaura spre fațadă trebuie să fie mai jos (traseul: LV3). În A.16 unitatea stătea cu spatele pe grindă, în compartimentul de 37 cm (205,2–242,2).",
     "ascuns": true
    },
    {
     "id": "BL",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Placa scurtă cu garnitură, la marginea de jos a capacului de sus",
     "x": 369.1,
     "lat": 96,
     "h": 207.2,
     "inalt": 1.5,
     "adanc": 6,
     "ascuns": true,
     "in": "M11",
     "stare": "propunere",
     "sursa": "propunerea din 03.11.2026, ca în dormitorul mic (de confirmat cu arhitecta, LV2)",
     "pozitie": "aprox",
     "nota": "Între fața unității și capacul de sus, pe ~6 cm adâncime, cu garnitură: aerul rece care iese prin fantă nu se întoarce în spatele capacului, spre aspirație.",
     "inFata": "D03"
    },
    {
     "id": "CB-AC",
     "strat": "electric",
     "tip": "iesire-cablu",
     "nume": "Cablul de alimentare al unității AC",
     "pozitie": "necunoscuta",
     "stare": "de-verificat",
     "sursa": "A.07 („unitățile se vor conecta direct la doză”)",
     "nota": "Se termină într-o doză cu capac în compartimentul de sus al măștii, accesibilă prin capacul M11-C. Poziția și circuitul nu sunt pe planșe."
    },
    {
     "id": "TB2",
     "strat": "electric",
     "tip": "tub",
     "nume": "Traseul de freon și de condens al unității AC",
     "pozitie": "necunoscuta",
     "stare": "de-verificat",
     "sursa": "A.07; specs/08 E",
     "nota": "De la unitatea AC la unitatea exterioară de pe fațada cu fereastra. Traseul nu e desenat. Se pozează înainte de închiderea măștii D03 și a tavanului fals; condensul cere pantă sau pompă."
    },
    {
     "id": "L",
     "strat": "led",
     "tip": "banda-led",
     "nume": "Bandă Hue Flux L sub consola TV (~249 cm)",
     "x": 117.6,
     "lat": 249,
     "h": 43,
     "inalt": 1.5,
     "ascuns": true,
     "stare": "propunere",
     "sursa": "A.06, A.16 D03 (bandă pe toată consola); decizia Hue Flux din 29.10.2026; specs/04 (plan de tăiere)",
     "nota": "Pe fața de jos a consolei M10-C, pe toată lungimea, cu lumina în jos, pe corpul M10 și pe riflaj. A.16 scrie bandă LED 3000K; decizia din 29.10.2026 este Hue Flux: un kit de 4 m tăiat la ~249 cm (15 segmente). Profil încastrat în consolă, frezat de tâmplar, lățime interioară min. 17–18 mm (întrebarea L1). Distanța profilului față de fața consolei nu e cotată. Sursa în priza P4."
    }
   ],
   "avertismente": [
    {
     "nivel": "atentie",
     "sursa": "A.01, A.10, A.16 D03",
     "ids": [
      "ST2"
     ],
     "text": "Între fețele stâlpilor din colțuri peretele are 449 cm (A.01: 100 + 299 + 50; desfășurarea D03 din A.16 e desenată pe 449,0 cm). Cotele din desen pornesc de la zidăria peretelui cu biroul, care în colț e ascunsă de stâlpul ST2 (~18 cm, necotat). Pe șantier: cota măsurată de la fața stâlpului + 18,1 = cota din desen."
    },
    {
     "nivel": "atentie",
     "sursa": "A.16 din PT (02/2026) și A16 Desfasurare Living 2.pdf (03/2026)",
     "ids": [
      "RF",
      "P2"
     ],
     "text": "Versiunea din 03/2026 a A.16 lărgește riflajul la 125,1 cm (în PT avea ~121 cm). Capătul lui (x 193,2) acoperă ~2,5 cm din rama prizei P2 (x 190,7–215,8). De hotărât cu arhitecta: se mută priza spre dreapta sau se scurtează riflajul."
    },
    {
     "nivel": "atentie",
     "sursa": "A.07, A.16 D03, A.29; decizia din 03.11.2026; manualele LG și Pioneer; analiza/11",
     "ids": [
      "AC",
      "M11-C",
      "CL",
      "LM",
      "BL"
     ],
     "text": "Compartimentul AC e desenat după propunerea din 03.11.2026, ca în dormitorul mic: coboară la 189,2 cm (53 cm în loc de 37), unitatea vine în față, cu ~15 cm liberi deasupra (manualele cer de obicei 15–20 cm). Aerul cald intră prin capacul de sus cu lamele, cel rece iese prin fanta de jos, cu o clapă care vara intră sub unitate. În A.16 compartimentul avea 37 cm și doar 9 găuri. De confirmat cu arhitecta (LV2) și cu firma de AC; înălțimea finală după manualul modelului ales."
    },
    {
     "nivel": "atentie",
     "sursa": "A.16 D03, A.29 D03'; specs/04 rândul 17",
     "ids": [
      "SEM"
     ],
     "text": "Șemineul cumpărat e „DELTA colț dreapta”. În A.16 și A.29 latura deschisă e spre televizor, adică pe stânga privind șemineul. De verificat pe fișa produsului care latură are sticla, înainte de construcția măștii."
    },
    {
     "nivel": "atentie",
     "sursa": "A.01, A.10, A.29 D03' (măsurat)",
     "ids": [
      "SEM",
      "PI2"
     ],
     "text": "Focarul trece cu ~20 cm în dreptul pilastrului PI2, care iese ~15 cm din perete. D03' cotează nișa la 39 cm de la fața măștii, adică spatele ei la ~11 cm de perete, în pilastru. De verificat adâncimea reală: focar 28 cm + placa de silicat de calciu + gips-carton."
    },
    {
     "nivel": "atentie",
     "sursa": "A.16 D03, A.29",
     "ids": [
      "SEM",
      "TV",
      "AC"
     ],
     "text": "Focarul cu bioetanol e la 46 cm de televizor, cu latura deschisă spre el, iar unitatea AC e la ~83 cm deasupra lui (cu compartimentul coborât; în A.16, ~92), în aceeași mască placată cu PAL. De verificat distanțele minime din manualul șemineului față de materiale combustibile și aparate electrice."
    },
    {
     "nivel": "info",
     "sursa": "A.16; analiza/07 A8b, A13",
     "ids": [
      "TV",
      "STV",
      "D2"
     ],
     "text": "Televizorul și suportul sunt desenate după planșă (178,3 × 102,7 cm). Se compară cu televizorul cumpărat (A13) și cu suportul ales pentru Ambilight (A8b) înainte de tencuială: doza D2, priza P2 și cutia suportului se zidesc în perete."
    },
    {
     "nivel": "info",
     "sursa": "A.09",
     "ids": [
      "G9",
      "M10"
     ],
     "text": "A.09 pune plintă duropolimer și pe peretele din spatele corpului M10 (40 cm adâncime, la 8 cm de pardoseală), iar plinta se montează după mobilier. De întrebat dacă acolo rămâne plintă."
    },
    {
     "nivel": "info",
     "sursa": "A.06, A.16 D03",
     "ids": [
      "P1",
      "P2",
      "P3"
     ],
     "text": "A.06 dă prizele la h=20 și h=130; A.16 cotează ramele între 15 și 23 cm și între 123 și 131 cm. Desenul urmează A.16 (axele la 19 și 127). P3: A.06 ~223 cm, A.16 ~220,8 cm."
    },
    {
     "nivel": "info",
     "sursa": "A.16 versiunea 03/2026",
     "ids": [
      "TV"
     ],
     "text": "Cotele televizorului (75,2 + 178,3 + 46 = 299,5) ies cu 0,5 cm peste cele ale consolei (49 + 250 = 299). Desenul pornește din stânga (75,2 de la riflaj)."
    },
    {
     "nivel": "info",
     "sursa": "A.29; specs/04 rândul 18; specs/07",
     "ids": [
      "D03"
     ],
     "text": "Placa de silicat de calciu: A.29 cere 30 mm; în lista de achiziții e „EnclosureBoard 2,5” (3 buc.). De verificat grosimea plăcii cumpărate."
    }
   ]
  },
  {
   "id": "V",
   "nume": "Peretele cu fereastra",
   "subtitlu": "zidăria cu fereastra și ușa de balcon, retrasă 27 cm în spatele stâlpilor și al grinzii · scafa draperiei · V pe planșă",
   "lungime": 590.0,
   "origine": "colțul cu peretele TV (fața zidăriei peretelui TV); se desenează zidăria cu fereastra și ușa, la 27 cm în spatele fețelor stâlpilor și ale grinzii (x = 0 în planul camerei)",
   "etapa": 1,
   "plan": [
    [
     0,
     0
    ],
    [
     0,
     590.0
    ]
   ],
   "elemente": [
    {
     "id": "ST-SV",
     "strat": "structura",
     "tip": "stalp",
     "nume": "Stâlpul din colțul cu peretele TV",
     "x": 0,
     "lat": 65,
     "h": 0,
     "inalt": 250,
     "adanc": 27,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "A.01, A.06, A.07, A.08 (zid secționat, necotat; 65 × 27 cm pe toate patru)",
     "nota": "Fața stâlpului e planul x = 0 din planul camerei (fața grinzii GR-V). Iese 27 cm în fața zidăriei cu fereastra (A.01 cotează 27). Pe x 0–50 e acoperit de masca M11; rămân vizibili 15 cm (50–65). Probabil beton armat: fără șanțuri adânci."
    },
    {
     "id": "GR-V",
     "strat": "structura",
     "tip": "grinda",
     "nume": "Grinda de deasupra ferestrei și a ușii de balcon",
     "x": 65,
     "lat": 470,
     "h": 205,
     "inalt": 45,
     "adanc": 27,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "A.15 D01 și A.16 (fața de jos la 205 cm, 1:20, măsurat); A.29 D03' (grinda peretelui TV, tot la 205); A.01 (27); D-09 («Grindă»)",
     "nota": "Fața grinzii e în același plan cu fețele stâlpilor (x = 0 în planul camerei); de la ea se măsoară scafa de 15 cm (D-09). Sub grindă, între stâlpi (x 65–535), zidăria cu fereastra și ușa e retrasă cu 27 cm. Fața de jos la ~205 cm se potrivește și cu fotografia din stare_actuala."
    },
    {
     "id": "ST-NV",
     "strat": "structura",
     "tip": "stalp",
     "nume": "Stâlpul din colțul cu peretele N (spre balcon)",
     "x": 535,
     "lat": 55,
     "h": 0,
     "inalt": 250,
     "adanc": 27,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "A.01, A.06, A.31 (zid secționat, necotat; 55 × 27 cm de la zidăria peretelui N)",
     "nota": "Are 55 cm pe lungimea peretelui, până la zidăria peretelui N (590). Grinda peretelui N iese 10 cm (580–590, fața de jos la ~205); A.05 cotează 580 până la fața ei. De la ~570,75 stâlpul e acoperit de masca G1. Pe fața lui stau prizele P2 și P3. Probabil beton armat: dozele se fac fără șanțuri adânci."
    },
    {
     "id": "F1",
     "strat": "structura",
     "tip": "fereastra",
     "nume": "Fereastra (200 cm, două canaturi)",
     "x": 65,
     "lat": 200,
     "h": 82,
     "inalt": 120,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "A.01, A.06, A.07, A.08, A.31 (golul la 65–265 de colț, necotat, la fel pe toate); înălțimile estimate din fotografia d0257d9f-875a-41aa-9de1-d669d63be499.jpg din stare_actuala/camera de zi",
     "nota": "Tâmplărie PVC existentă, se păstrează. În zidăria retrasă cu 27 cm. Pervaz ~82 cm, capul ~202 cm (sub grinda de la 205), estimat din fotografie (±5 cm): de măsurat. Montantul dintre canaturi la ~150 (A.06). Sub fereastră: caloriferul CF1."
    },
    {
     "id": "U2",
     "strat": "structura",
     "tip": "usa",
     "sticla": true,
     "nume": "Ușa de balcon cu sticlă (89 cm), în aceeași tâmplărie cu F2",
     "x": 395,
     "lat": 89,
     "h": 0,
     "inalt": 202,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "A.01, A.06, A.31 (golul de 89 cm la 395–484, necotat); înălțimea estimată din fotografia din stare_actuala",
     "nota": "Ușa e cu sticlă (02.11.2026). Tâmplărie PVC existentă, se păstrează. Balamalele pe latura dinspre fereastra F1 (x 395); se deschide spre cameră (~85 cm, A.06) și trece prin planul draperiei: draperia se trage înainte de deschidere. Capul ~202 cm, de măsurat."
    },
    {
     "id": "F2",
     "strat": "structura",
     "tip": "fereastra",
     "canaturi": 1,
     "nume": "Fereastra laterală a ușii de balcon (51 cm, un singur geam)",
     "x": 484,
     "lat": 51,
     "h": 82,
     "inalt": 120,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "A.01, A.06, A.31 (golul de 51 cm la 484–535, necotat); înălțimile estimate din fotografia din stare_actuala",
     "nota": "Un singur geam, fără montant la mijloc (02.11.2026). În aceeași tâmplărie cu ușa U2, cu parapet. Pervaz ~82 cm (la nivelul traversei ușii), de măsurat. Sub ea: caloriferul CF2."
    },
    {
     "id": "CF1",
     "strat": "structura",
     "tip": "calorifer",
     "nume": "Calorifer Mexen CF33 600 × 1200 sub fereastră",
     "x": 105,
     "lat": 120,
     "h": 10,
     "inalt": 60,
     "adanc": 16.4,
     "pozitie": "aprox",
     "stare": "propunere",
     "sursa": "specs/08 (configurația aleasă 28.10.2026: CF33 600 × 1200, «sub fereastra mare»)",
     "nota": "Centrat sub F1 (propunere). Adâncime 16,4 cm, racord lateral 4 × G½\", distanța de racordare 55 cm. Stă în nișa de 27 cm și nu iese în fața stâlpilor. Pervazul (~82) lasă ~12 cm deasupra. Țevile sunt acum aparente la plintă: traseul nou îl stabilește instalatorul. În fața lui: draperia și canapeaua (A.08)."
    },
    {
     "id": "CF2",
     "strat": "structura",
     "tip": "calorifer",
     "nume": "Calorifer Mexen CF33 600 × 400 sub fereastra laterală",
     "x": 489.5,
     "lat": 40,
     "h": 10,
     "inalt": 60,
     "adanc": 16.4,
     "pozitie": "aprox",
     "stare": "propunere",
     "sursa": "specs/08 (CF33 600 × 400, «lângă ușa de balcon», 28.10.2026); fotografia din stare_actuala (caloriferul vechi e tot aici)",
     "nota": "Centrat sub F2 (propunere), ca radiatorul vechi. Adâncime 16,4 cm, în nișă. Draperia trasă îl acoperă."
    },
    {
     "id": "UE",
     "strat": "structura",
     "tip": "ac",
     "nume": "Unitatea exterioară AC, pe fațadă (în spatele acestui perete)",
     "pozitie": "necunoscuta",
     "stare": "de-verificat",
     "sursa": "A.07 (pe fața exterioară a peretelui, în dreptul x ≈ 13–91, măsurat pe desen)",
     "nota": "Nu se vede din cameră. A.07 o pune pe fațadă, în dreptul stâlpului din colț și al primilor ~26 cm ai ferestrei F1 (x 65–91). Înălțimea și prinderea nu sunt desenate. Montajul pe fațadă poate cere acordul asociației."
    },
    {
     "id": "TF1",
     "strat": "gips",
     "tip": "tavan-fals",
     "nume": "Marginea tavanului fals (7 cm), la 15 cm de grindă",
     "x": 15,
     "lat": 565,
     "h": 243,
     "inalt": 7,
     "stare": "de-verificat",
     "detaliu": "D-09",
     "sursa": "A.02/A.05 D-09 (7 cm); A.15, A.16, A.29 D03' (tavanul fals la 243, placa la 250); A.05 (cota 15)",
     "eticheta": {
      "x": 300,
      "h": 238
     },
     "nota": "Marginea e o bucată verticală de gips-carton de la placă până la fața tavanului fals (243). Planul ei e la 15 cm în fața grinzii GR-V. Merge de la fața grinzii peretelui TV (15) până la fața grinzii peretelui N (580), ca în A.05. Legenda A.05 scrie «grosime 10 cm»; D-09 și secțiunile dau 7 cm.",
     "adanc": 434
    },
    {
     "id": "SC",
     "strat": "gips",
     "tip": "scafa",
     "nume": "Scafa draperiei (fanta de 15 cm dintre grindă și tavanul fals)",
     "x": 15,
     "lat": 565,
     "h": 243,
     "inalt": 7,
     "adanc": 15,
     "ascuns": true,
     "stare": "proiect",
     "detaliu": "D-09",
     "sursa": "A.05 (cota 15, pe toată lungimea); A.02 și A.05, detaliul D-09 (1:5)",
     "nota": "În fantă, prinse de placa de beton (250): șina dublă SD la 4–10 cm de grindă și banda M1 la 12,6–15 cm, lipită de marginea tavanului fals. Lungimea utilă: de la masca M11 (50) până la masca G1 (~570,75), ~520,75 cm."
    },
    {
     "id": "G1",
     "strat": "gips",
     "tip": "masca",
     "nume": "Masca peretelui N (cu M12), văzută în secțiune",
     "x": 570.75,
     "lat": 19.25,
     "h": 0,
     "inalt": 250,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "living.js peretele N (G1, 19,25 cm); A.31 și A.05 (zidăria N la 590, masca veche de 23 cm cu fața la 567); A.08 (lanțul de cote 35 + 80 + 180 + 87 + 100 + 70 până la 567)",
     "nota": "Fața la 590 − 19,25 = ~570,75 de colț (cu masca veche din A.05/A.08: 567). Între 580 și 590 îmbracă grinda peretelui N (10 cm). În dreptul stâlpului ST-NV o vedem în secțiune, până la zidăria N (590). La capăt urcă până la placă, ca să închidă scafa (de confirmat). Aici se opresc draperia și banda M1.",
     "adanc": 310,
     "vedereaPrincipala": "N"
    },
    {
     "id": "G10",
     "strat": "gips",
     "tip": "plinta",
     "nume": "Plintă duropolimer 8 cm (stâlp + sub fereastră și spalet)",
     "x": 50,
     "lat": 345,
     "h": 0,
     "inalt": 8,
     "stare": "proiect",
     "sursa": "A.09 (plintă duropolimer, 8 cm înălțime)",
     "nota": "Pe fața stâlpului ST-SV (50–65), pe latura lui (27 cm) și pe zidăria din nișă până la ușă (65–395), pe după caloriferul CF1. Se montează după mobilier (A.09). În dreptul ușii nu se pune.",
     "finisaj": "alb"
    },
    {
     "id": "G11",
     "strat": "gips",
     "tip": "plinta",
     "nume": "Plintă duropolimer 8 cm (sub F2 + stâlpul din colț)",
     "x": 484,
     "lat": 86.75,
     "h": 0,
     "inalt": 8,
     "stare": "proiect",
     "sursa": "A.09 (plintă duropolimer, 8 cm înălțime)",
     "nota": "Sub F2 (484–535), pe latura stâlpului ST-NV (27 cm) și pe fața lui până la masca G1. Pe masca G1 urmează plinta ascunsă (peretele N). Total pe acest perete, cu laturile stâlpilor: ~4,8 m.",
     "finisaj": "alb"
    },
    {
     "id": "M11",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Masca șemineului și a AC-ului (M11), latura dinspre cameră",
     "x": 0,
     "lat": 50,
     "h": 0,
     "inalt": 242,
     "adanc": 100,
     "stare": "proiect",
     "sursa": "A.29 D03' (vederea acestei laturi); A.16 (205,2 + 36,8); A.01 și A.08 (50 de la peretele TV)",
     "nota": "Vedem latura de 50 cm a măștii de pe peretele TV (adâncă de 100 cm pe acel perete). PAL H1775 Nuc Parona pe gips-carton RF și silicat de calciu 30 mm. Pe această latură: golul lateral al șemineului, ~39 × 48 cm, la x ~11–50 și h 65–113 (A.29 D03'). Detaliile sunt pe peretele TV.",
     "finisaj": "nuc",
     "vedereaPrincipala": "S"
    },
    {
     "id": "SD",
     "strat": "mobila",
     "tip": "mobilier",
     "nume": "Șina dublă pentru perdea și draperie, în scafă",
     "x": 50.0,
     "lat": 520.75,
     "h": 248,
     "inalt": 2,
     "pozitie": "aprox",
     "stare": "proiect",
     "detaliu": "D-09",
     "sursa": "A.02/A.05 D-09 (șina la 4 cm de grindă, două canale); A.11, A.13, A.14 (perdea albă și draperie până la pardoseală)",
     "nota": "Prinsă de placa de beton, la 4–10 cm de fața grinzii. Perdeaua și draperia atârnă până la ~1 cm de pardoseală, pe ~520,75 cm (de la M11 la G1). Când sunt trase acoperă F1, U2, F2, caloriferele, prizele P1–P3 și întrerupătorul I1. Între fața stâlpului și primul canal rămân 4 cm."
    },
    {
     "id": "M1",
     "strat": "led",
     "tip": "banda-led",
     "nume": "Banda Hue Flux M1 în scafa draperiei",
     "x": 50.0,
     "lat": 520.75,
     "h": 249,
     "inalt": 1,
     "ascuns": true,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "detaliu": "D-09",
     "sursa": "A.06 (marcajul M, de la x ≈ 50 până la colțul N); A.02/A.05 D-09 (profilul pe placă, lângă marginea tavanului fals); Hue Flux (decizia din 29.10.2026)",
     "nota": "Profil S3 (23,5 × 10 mm) lipit de placa de beton la 12,6–15 cm de grindă, ascuns după marginea tavanului fals; lumina cade pe draperie. Lungime utilă ~520,75 cm, nu 580: ~31 de segmente de 16,6 cm = kitul de 4 m (24) + 7 segmente din restul de la M2. Se măsoară după ce se fac măștile M11 și G1. D-09 scrie LED 3000K; decizia e Hue Flux color.",
     "adanc": 2.4
    },
    {
     "id": "P1",
     "strat": "electric",
     "tip": "priza",
     "nume": "Priză dublă (A.06)",
     "x": 290,
     "h": 30,
     "punct": true,
     "stare": "proiect",
     "sursa": "A.06 (h=30; 25 cm de la marginea ferestrei)",
     "nota": "Pe zidăria dintre fereastră și ușă, în nișă (27 cm în spatele stâlpilor), la 25 cm de golul ferestrei F1. În spatele canapelei (A.08: 130–310) și al draperiei."
    },
    {
     "id": "I1",
     "strat": "electric",
     "tip": "intrerupator",
     "nume": "Întrerupător cvadruplu NN' / OP",
     "x": 380,
     "h": 110,
     "punct": true,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "A.06 (grupul NN' / OP; 15 cm de la golul ușii); Necesar prize și întrerupătoare (cvadruplu, living × 2)",
     "nota": "Comandă corpurile suspendate N și N' și aplicele de pe balcon O și P. Pe zidăria din nișă, la 15 cm de golul ușii U2, pe partea balamalelor. Înălțimea nu e cotată: 110 cm presupus, de stabilit cu electricianul. Când draperia e trasă, e în spatele ei."
    },
    {
     "id": "P",
     "strat": "electric",
     "tip": "iesire-cablu",
     "nume": "Aplica P de pe balcon (pe fața exterioară a peretelui)",
     "x": 345,
     "h": 200,
     "punct": true,
     "stare": "proiect",
     "sursa": "A.06 (P, h=200 cm; 50 cm de la golul ușii)",
     "nota": "Corpul e afară, pe balcon, nu în cameră. Cablul de la I1 trece prin zid aici, sub grindă. Aplica O e pe peretele de capăt al balconului."
    },
    {
     "id": "P2",
     "strat": "electric",
     "tip": "priza",
     "nume": "Priză dublă (A.06)",
     "x": 545,
     "h": 30,
     "punct": true,
     "stare": "proiect",
     "sursa": "A.06 (h=30; 10 cm de la golul ferestrei F2)",
     "nota": "Pe fața stâlpului ST-NV, după draperie. P2 și P3 pot fi o singură ramă cu 2 × 2 prize (între 535 și ~570 sunt ~35 cm)."
    },
    {
     "id": "P3",
     "strat": "electric",
     "tip": "priza",
     "nume": "Priză dublă după perdea pentru sursele Hue M1 + M2",
     "x": 562,
     "h": 30,
     "punct": true,
     "pozitie": "aprox",
     "stare": "propunere",
     "sursa": "specs/06 G7 (01.11.2026)",
     "nota": "Pe fața stâlpului ST-NV, lângă P2, la ~30 cm de caloriferul CF2. Alimentare: din cablul M1 (CB-M1), coborât prin masca G1, sau din circuitul lui P2 (curent permanent). Sursa M1 trece prin TB-M1, sursa M2 prin TB1; probabil 2 cabluri prelungitoare Flux de 5 m. Sursele nu trebuie să atingă perdeaua (4 cm până la primul canal)."
    },
    {
     "id": "TB1",
     "strat": "electric",
     "tip": "iesire-cablu",
     "nume": "Gura tubului TB1 spre banda M2 (în masca G1)",
     "x": 570,
     "h": 40,
     "punct": true,
     "pozitie": "aprox",
     "stare": "propunere",
     "sursa": "specs/06 G7 (01.11.2026); living.js peretele N (TB1)",
     "nota": "În fața măștii G1, în colț, la 2–5 cm de fața stâlpului. Tubul merge prin structura măștii până la latura nișei cu M2 (x ≈ 98 pe peretele N). Diametru prin care trece mufa prelungitorului Flux, fără coturi strânse. Se pune înainte să se închidă masca."
    },
    {
     "id": "TB-M1",
     "strat": "electric",
     "tip": "iesire-cablu",
     "nume": "Gura de jos a tubului TB-M1 spre banda M1 (în masca G1)",
     "x": 570,
     "h": 55,
     "punct": true,
     "pozitie": "aprox",
     "stare": "propunere",
     "sursa": "specs/06 G7 (01.11.2026); planul tavanului (TB-M1)",
     "nota": "Tubul urcă vertical în capătul măștii G1 și iese în scafă, la capătul benzii M1 (~570, h ~250). Fără șanț în stâlp."
    },
    {
     "id": "CB-M1",
     "strat": "electric",
     "tip": "iesire-cablu",
     "nume": "Capătul cablului de 230 V tras pentru banda M1 (marcajul M din A.06)",
     "x": 564.5,
     "h": 250,
     "punct": true,
     "pozitie": "aprox",
     "stare": "de-verificat",
     "sursa": "A.06 (marcajul M de la capătul scafei, x ≈ 564,5); specs/06 G6, G7",
     "nota": "În scafă, la placa de beton. Fie coboară prin masca G1 până la P3, fie se leagă într-o doză cu capac accesibilă prin scafă. Nu rămâne liber deasupra tavanului fals."
    },
    {
     "id": "TB2",
     "strat": "electric",
     "tip": "tub",
     "nume": "Traseul de freon, condens și cablu al AC-ului spre unitatea exterioară",
     "pozitie": "necunoscuta",
     "stare": "de-verificat",
     "sursa": "A.07 (unitatea interioară în M11, cea exterioară pe fațada acestui perete); peretele TV (TB2)",
     "nota": "Din capul măștii M11 trece prin stâlpul ST-SV sau prin grindă spre unitatea exterioară UE. Găurile prin stâlpi și grinzi de beton se fac doar cu acordul unui inginer de structură. Se pozează înainte de tavanul fals și de închiderea măștii."
    }
   ],
   "avertismente": [
    {
     "nivel": "atentie",
     "text": "Lungimea peretelui e 590,0 între zidăria peretelui TV și zidăria peretelui N (A.01, A.05, A.06, A.31). Cota 580 din A.05 pornește de la fața grinzii peretelui N, la 10 cm de zidărie. Masca G1 (19,25 cm) se măsoară de la zidărie, deci fața ei e la ~570,75.",
     "sursa": "A.01, A.05, A.06, A.31",
     "ids": [
      "ST-NV",
      "G1"
     ]
    },
    {
     "nivel": "atentie",
     "text": "Planul desenat: zidăria cu fereastra F1, ușa U2 și fereastra F2 e retrasă cu 27 cm (A.01 cotează 27) în spatele fețelor stâlpilor și ale grinzii GR-V, care sunt x = 0 în planul camerei (A.01, A.05, A.15). A.06 și A.07 măsoară lățimea camerei de la zidăria ferestrei (494 cm). Pe lungimea acestui perete toate planșele măsoară de la zidăria peretelui TV, deci cotele de aici nu se schimbă.",
     "sursa": "A.01, A.05, A.06, A.07, A.15",
     "ids": [
      "ST-SV",
      "GR-V",
      "ST-NV"
     ]
    },
    {
     "nivel": "atentie",
     "text": "Înălțimile ferestrelor și ale ușii nu sunt în nicio planșă. Pervazul ~82 și capul ~202 sunt estimate din fotografie, cu reper fața de jos a grinzii (205). Se măsoară înainte de calorifere, prize și draperie.",
     "sursa": "stare_actuala/camera de zi; A.15, A.16",
     "ids": [
      "F1",
      "U2",
      "F2"
     ]
    },
    {
     "nivel": "atentie",
     "text": "Draperia până la pardoseală și canapeaua (A.08: x 130–310, spătarul la 16,4 cm de fața stâlpilor) stau în fața caloriferului CF1; cu draperia trasă, căldura rămâne între draperie și fereastră. Draperia acoperă și CF2. De întrebat arhitecta.",
     "sursa": "A.08, A.11, A.14, D-09, specs/08",
     "ids": [
      "CF1",
      "SD"
     ]
    },
    {
     "nivel": "atentie",
     "text": "Întrerupătorul I1 (N, N', O, P) și priza P1 sunt în nișă, după draperie; P1 e și în spatele canapelei.",
     "sursa": "A.06, A.08, D-09",
     "ids": [
      "I1",
      "P1"
     ]
    },
    {
     "nivel": "atentie",
     "text": "Banda M1 și șina de draperie au loc doar între masca M11 (50) și masca G1 (~570,75): ~520,75 cm, nu 580 (specs/06) sau 564 (specs/04). Cu masca veche din A.05/A.08 (fața la 567) ies ~517 cm.",
     "sursa": "A.01, A.05, A.06, A.08; specs/04, specs/06",
     "ids": [
      "M1",
      "SD",
      "G1"
     ]
    },
    {
     "nivel": "info",
     "text": "Unitatea exterioară AC e pe fațada acestui perete, în dreptul x ≈ 13–91, deci și în dreptul primilor ~26 cm ai ferestrei F1 (A.07). Traseul de la M11 trece prin stâlpul din colț sau prin grindă.",
     "sursa": "A.07",
     "ids": [
      "UE",
      "TB2",
      "ST-SV"
     ]
    },
    {
     "nivel": "info",
     "text": "P3, TB1 și TB-M1 sunt propunerea noastră (G7): priza lângă P2, pe stâlp, iar tuburile prin masca G1, ca să nu se taie stâlpul de beton. De ales alimentarea lui P3: din cablul M1 (CB-M1) sau din circuitul lui P2.",
     "sursa": "specs/06 G6, G7",
     "ids": [
      "P3",
      "P2",
      "TB1",
      "CB-M1"
     ]
    },
    {
     "nivel": "info",
     "text": "Plinta: A.09 cere duropolimer de 8 cm; produsul din lista de achiziții are 6 cm (specs/07).",
     "sursa": "A.09, specs/04 rândul 13, specs/07",
     "ids": [
      "G10",
      "G11"
     ]
    }
   ]
  }
 ],
 "tavan": {
  "id": "T",
  "tip": "tavan",
  "nume": "Tavanul",
  "subtitlu": "vedere de sus, ca în A.05 · tavan fals 7 cm, scafa draperiei, grinzile, șinele J și K, corpurile N și N'",
  "lungime": 467.1,
  "adancime": 590,
  "origine": "colțul dintre peretele cu fereastra și peretele TV",
  "nota": "x de la fața grinzii de deasupra ferestrelor (ca în A.05; zidăria dintre ferestre e cu ~27 cm mai departe), spre peretele cu biroul; h de la zidăria peretelui TV spre zidăria peretelui cu M12 (590 cm; cota «580» din A.05 merge până la fața grinzii acestui perete, la 10 cm de zidărie). Placa de beton la 250 cm, fața tavanului fals la ~243 cm, fața de jos a grinzilor la ~205 cm (A.16).",
  "etapa": 1,
  "elemente": [
   {
    "id": "TF1",
    "strat": "gips",
    "tip": "tavan-fals",
    "nume": "Tavan fals din gips-carton, între scafă și grinzi",
    "x": 15,
    "lat": 434,
    "h": 15,
    "inalt": 565,
    "stare": "proiect",
    "sursa": "A.05 (zona hașurată: 15 + 452 × 580, de la zidăria peretelui TV la fața grinzii peretelui cu M12); A.15 D02 și A.16 (tavanul fals desenat între grinzi); A.02/A.05 D-09 (7 cm)",
    "eticheta": {
     "x": 230,
     "h": 300
    },
    "nota": "Fața de jos a plăcilor la 7 cm sub placa de beton (D-09, A.15, A.16), adică la ~243 cm de la pardoseala finită (A.16: 250 cm până la placă). Se oprește la scafă (x = 15, cotat) și la fețele grinzilor: peretele TV (h = 15), peretele cu biroul (x = 449, A.01), peretele cu M12 (h = 580). Între grinzi sunt 565 cm (A.15 D02). A.05 hașurează până la pereți și scrie «grosime 10 cm»; secțiunile arată 7 cm.",
    "adanc": 7
   },
   {
    "id": "SC",
    "strat": "gips",
    "tip": "scafa",
    "nume": "Scafa draperiei (fanta de 15 cm de lângă ferestre)",
    "x": 0,
    "lat": 15,
    "h": 15,
    "inalt": 565,
    "stare": "proiect",
    "detaliu": "D-09",
    "sursa": "A.05 (cota 15); A.02 și A.05, detaliul D-09 (1:5)",
    "nota": "Fanta dintre fața grinzii de deasupra ferestrelor (x = 0) și marginea tavanului fals (x = 15). Marginea e o bucată verticală de gips-carton (~1,2 cm) de la placă până la fața tavanului fals. În fantă, prinse de placa de beton: șina de draperie la 4 cm de grindă (4–10 cm, D-09) și banda M1 lipită de marginea tavanului fals. Lungimea utilă pentru draperie și bandă: de la masca D03 (h = 50) până la masca G1 (h ≈ 567), ~517 cm.",
    "adanc": 7
   },
   {
    "id": "GR1",
    "strat": "structura",
    "tip": "grinda",
    "nume": "Grinda de beton de pe peretele TV",
    "x": 0,
    "lat": 449,
    "h": 0,
    "inalt": 15,
    "pozitie": "aprox",
    "stare": "de-verificat",
    "sursa": "A.05 (linia întreruptă la 15 cm de perete); A.15 D02 (secțiune 25 × 45 cm); A.16",
    "nota": "Grindă existentă, lată ~25 cm, din care ~15 cm în cameră; coboară ~45 cm sub placă, cu fața de jos la ~205 cm de la pardoseală (măsurat pe A.15 și A.16, 1:20). Tavanul fals se oprește la fața ei. Sub grindă, peretele TV e retras între x = 50 și 399; la 0–50 și 399–449 zidăria e la fața grinzii (A.05). Unitatea AC se prinde pe fața ei (A.07).",
    "adanc": 45
   },
   {
    "id": "GR2",
    "strat": "structura",
    "tip": "grinda",
    "nume": "Grinda de beton de pe peretele cu biroul",
    "x": 449,
    "lat": 18.1,
    "h": 60,
    "inalt": 475,
    "pozitie": "aprox",
    "stare": "de-verificat",
    "sursa": "A.01 (cota 449 de la grinda ferestrelor); A.05 (linia întreruptă); A.16 (secțiune 25 × 45 cm)",
    "nota": "Grindă existentă, lată ~25 cm (449–474), din care ~18 cm în cameră; fața de jos la ~205 cm (A.16). Între stâlpii ST2 și ST1. Panoul de piatră de pe acest perete (205 cm, A.15 D02) și ușa spre hol se opresc sub ea. Masca peretelui are fața la ~454 (A.01: 449 + 5), deci grinda iese ~5 cm în fața măștii.",
    "adanc": 38
   },
   {
    "id": "GR3",
    "strat": "structura",
    "tip": "grinda",
    "nume": "Grinda de beton de pe peretele cu M12",
    "x": 0,
    "lat": 449,
    "h": 580,
    "inalt": 10,
    "ascuns": true,
    "pozitie": "aprox",
    "stare": "de-verificat",
    "sursa": "A.05 (fața la h 580, zidăria la 590); A.01 (23 + 517 + 50 = 590); A.15 D02 (secțiune 25 × 45 cm, zidăria la 10 cm de fața grinzii)",
    "nota": "Grindă existentă, lată ~25 cm, din care 10 cm în cameră; fața de jos la ~205 cm. Între x = 50 și 399 zidăria e retrasă la 590; la 0–50 și 399–449 zidăria e la fața grinzii (A.05). Acoperită de masca G1 (0–310) și ascunsă în spatele lui M12 (310–448,6). Tavanul fals se oprește la fața ei.",
    "adanc": 38
   },
   {
    "id": "ST1",
    "strat": "structura",
    "tip": "stalp",
    "nume": "Stâlpul din colțul cu M12 (nord-est)",
    "x": 449,
    "lat": 18.1,
    "h": 535,
    "inalt": 55,
    "pozitie": "aprox",
    "stare": "de-verificat",
    "sursa": "A.05 și A.06 (zid secționat, necotat); A.01 și A.15 D02 (55 de la zidăria peretelui cu M12)",
    "nota": "Stâlp existent, ~18 × 55 cm în cameră (535–590). M12 se termină la 448,6 cm (A.15), lângă fața stâlpului: cei ~18,5 cm din A.15 până la zidăria peretelui cu biroul sunt acest stâlp (R14).",
    "adanc": 243
   },
   {
    "id": "ST2",
    "strat": "structura",
    "tip": "stalp",
    "nume": "Stâlpul din colțul dintre peretele TV și peretele cu biroul (sud-est)",
    "x": 449,
    "lat": 18.1,
    "h": 0,
    "inalt": 60,
    "pozitie": "aprox",
    "stare": "de-verificat",
    "sursa": "A.05 și A.06 (zid secționat, necotat)",
    "nota": "Stâlp existent, ~18 × 60 cm în cameră, lângă ușa spre hol (ușa la h ~60–150).",
    "adanc": 243
   },
   {
    "id": "D03",
    "strat": "gips",
    "tip": "masca",
    "nume": "Masca șemineului și a AC-ului (reper pentru capătul scafei)",
    "x": 0,
    "lat": 100,
    "h": 0,
    "inalt": 50,
    "ascuns": true,
    "stare": "proiect",
    "sursa": "A.01 (100 și 50); A.16 și A.29, detaliul D03",
    "nota": "Merge până la 242 cm, la 1 cm sub tavanul fals (A.16). Aici se opresc draperia și banda M1 la sud. Între grinda TV (h = 15) și fața măștii (h = 50) fanta scafei trece deasupra măștii; planșele nu arată cum se închide. Detaliile sunt pe peretele TV.",
    "adanc": 242.2
   },
   {
    "id": "G1",
    "strat": "gips",
    "tip": "masca",
    "nume": "Masca peretelui cu M12, văzută de sus (reper pentru capătul scafei)",
    "x": 0,
    "lat": 310,
    "h": 567,
    "inalt": 23,
    "ascuns": true,
    "pozitie": "aprox",
    "stare": "de-verificat",
    "sursa": "A.15 D01 (0–310); A.01 (23 de la zidărie); A.05 (fața la h ≈ 567, măsurat)",
    "nota": "Aceeași mască e G1 pe peretele cu M12. A.01 și A.05 o desenează cu fața la ~567, adică 23 cm de zidăria peretelui (h = 590); acoperă grinda GR3. Cu adâncimea nouă din D-06 (~19,25 cm de la zidărie) fața poate ajunge la ~571. Aici se opresc draperia și banda M1 la nord.",
    "adanc": 243
   },
   {
    "id": "J",
    "strat": "led",
    "tip": "sina",
    "nume": "Șina magnetică J, 300 cm",
    "x": 85,
    "lat": 300,
    "h": 117.5,
    "inalt": 5,
    "stare": "de-verificat",
    "sursa": "A.06 (300; 70 de la scafă; axa la 70 de la fața măștii D03); montată deja, cu sursa în șină (spus de beneficiar pe 03.11.2026)",
    "nota": "Montată deja (03.11.2026). S-a ales un model cu sursa în șină, nu cel din oferta LedHome: nu mai sunt surse separate în tavanul fals. Modelul montat nu e trecut încă aici. Poziția e cea din A.06, de măsurat pe tavan. Tasta J din grupul JK. Stă deasupra măsuței de cafea, nu deasupra mesei."
   },
   {
    "id": "J1",
    "strat": "led",
    "tip": "spot",
    "nume": "Spot magnetic J1 pe șina J",
    "x": 135,
    "h": 120,
    "punct": true,
    "pozitie": "aprox",
    "stare": "de-verificat",
    "sursa": "A.06 (desenat, necotat)",
    "nota": "Modul magnetic: se mută pe șină, poziția din A.06 e orientativă. Câte module și care: pentru șinele montate (LV18)."
   },
   {
    "id": "J2",
    "strat": "led",
    "tip": "spot",
    "nume": "Spot magnetic J2 pe șina J",
    "x": 235,
    "h": 120,
    "punct": true,
    "pozitie": "aprox",
    "stare": "de-verificat",
    "sursa": "A.06 (desenat, necotat)",
    "nota": "Modul magnetic, poziție orientativă (A.06). Vezi J1."
   },
   {
    "id": "J3",
    "strat": "led",
    "tip": "spot",
    "nume": "Spot magnetic J3 pe șina J",
    "x": 335,
    "h": 120,
    "punct": true,
    "pozitie": "aprox",
    "stare": "de-verificat",
    "sursa": "A.06 (desenat, necotat)",
    "nota": "Modul magnetic, poziție orientativă (A.06). Vezi J1."
   },
   {
    "id": "K",
    "strat": "led",
    "tip": "sina",
    "nume": "Șina magnetică K, 300 cm (spre panoul de piatră de lângă birou)",
    "x": 416.5,
    "lat": 5,
    "h": 180,
    "inalt": 300,
    "pozitie": "aprox",
    "stare": "de-verificat",
    "sursa": "A.06 (300; 100 de la fața grinzii peretelui cu M12, h 580; x măsurat pe desen); montată deja, cu sursa în șină (spus de beneficiar pe 03.11.2026)",
    "nota": "Montată deja (03.11.2026), cu sursa în șină, ca J. Tasta K din grupul JK. Axa la ~419 cm, adică ~30 cm de fața grinzii GR2, care coboară ~38 cm sub tavanul fals: spoturile spre panoul de piatră se orientează pe sub ea."
   },
   {
    "id": "K1",
    "strat": "led",
    "tip": "spot",
    "nume": "Spot magnetic K1 pe șina K",
    "x": 419,
    "h": 204,
    "punct": true,
    "pozitie": "aprox",
    "stare": "de-verificat",
    "sursa": "A.06 (desenat, necotat)",
    "nota": "Modul magnetic, poziție orientativă (A.06). Vezi J1."
   },
   {
    "id": "K2",
    "strat": "led",
    "tip": "spot",
    "nume": "Spot magnetic K2 pe șina K",
    "x": 419,
    "h": 324,
    "punct": true,
    "pozitie": "aprox",
    "stare": "de-verificat",
    "sursa": "A.06 (desenat, necotat)",
    "nota": "Modul magnetic, poziție orientativă (A.06). Vezi J1."
   },
   {
    "id": "K3",
    "strat": "led",
    "tip": "spot",
    "nume": "Spot magnetic K3 pe șina K",
    "x": 419,
    "h": 444,
    "punct": true,
    "pozitie": "aprox",
    "stare": "de-verificat",
    "sursa": "A.06 (desenat, necotat)",
    "nota": "Modul magnetic, poziție orientativă (A.06). Vezi J1."
   },
   {
    "id": "N",
    "strat": "led",
    "tip": "suspendat",
    "nume": "Corpul suspendat N deasupra mesei (Nova Luce Aere L.60)",
    "x": 160,
    "h": 440,
    "punct": true,
    "stare": "proiect",
    "sursa": "A.06 (160 de la grinda ferestrelor; 150 de la zidăria peretelui cu M12, h 590); specs/04 rândul 4",
    "nota": "Nova Luce Aere, polirașină maro, 1 × E27, 60 × 50 cm în plan (A.06), cumpărat. Axul la 150 cm de zidăria peretelui cu M12 și la 140 cm de fața grinzii GR3. Doză de tavan în ax; propunere: cârligul se prinde în placa de beton (tavanul fals are 7 cm). Lungimea de suspendare nu e dată. Grupul NN'."
   },
   {
    "id": "N'",
    "strat": "led",
    "tip": "suspendat",
    "nume": "Corpul suspendat N' deasupra mesei (Nova Luce Aere L.50)",
    "x": 220,
    "h": 440,
    "punct": true,
    "stare": "proiect",
    "sursa": "A.06 (60 de la N; 150 de la zidăria peretelui cu M12, h 590); specs/04 rândul 3",
    "nota": "Nova Luce Aere, polirașină maro, 1 × E27, 50 × 40 cm în plan (A.06), cumpărat. Doză de tavan în ax, prindere ca la N. Grupul NN'."
   },
   {
    "id": "M1",
    "strat": "led",
    "tip": "banda-led",
    "nume": "Banda Hue Flux M1 în scafa draperiei",
    "x": 12.6,
    "lat": 2.4,
    "h": 50,
    "inalt": 517,
    "pozitie": "aprox",
    "stare": "de-verificat",
    "detaliu": "D-09",
    "sursa": "A.02/A.05 D-09 (profilul la marginea tavanului fals); A.06 (marcajul M, ~55–565); specs/04 (29.10.2026); specs/06 G7",
    "nota": "Hue Flux în profil S3 (23,5 × 10 mm, alb, bare de 2 m), lipit de placa de beton, lângă marginea tavanului fals; lumina cade pe draperie. Lungime utilă ~517 cm (de la D03 la G1): ~31 de segmente (~515 cm) = kitul de 4 m (24) + 7 segmente din restul de la M2. Se măsoară după ce se fac măștile. Sursa se bagă în priza dublă de după perdea (G7); cablul vine prin tub (TB-M1).",
    "adanc": 1
   },
   {
    "id": "CB-M1",
    "strat": "electric",
    "tip": "doza",
    "nume": "Capătul cablului de 230 V tras pentru banda M1 (marcajul M din A.06)",
    "x": 4.5,
    "h": 564.5,
    "punct": true,
    "pozitie": "aprox",
    "stare": "de-verificat",
    "sursa": "A.06 (marcajul M de la capătul scafei); specs/06 G7 (01.11.2026)",
    "nota": "Sursa M1 se bagă în priza dublă de după perdea (G7), deci acest cablu rămâne nefolosit: se leagă într-o doză cu capac, accesibilă prin scafă, sau se scoate din circuit. Nu rămâne liber deasupra tavanului fals."
   },
   {
    "id": "TB-M1",
    "strat": "electric",
    "tip": "doza",
    "nume": "Ieșirea în scafă a tubului cu cablul de joasă tensiune pentru M1",
    "pozitie": "necunoscuta",
    "stare": "propunere",
    "sursa": "specs/06 G7 (01.11.2026)",
    "nota": "Tubul urcă prin placarea peretelui cu fereastra, de la priza dublă de după perdea, și iese în scafă la capătul alimentat al benzii M1. Diametru prin care trece mufa prelungitorului Flux, fără coturi strânse. Poziția se stabilește odată cu priza."
   },
   {
    "id": "AC",
    "strat": "electric",
    "tip": "ac",
    "nume": "Unitatea interioară AC, în capul măștii șemineului",
    "x": 9,
    "lat": 78,
    "h": 25,
    "inalt": 19,
    "ascuns": true,
    "pozitie": "aprox",
    "stare": "de-verificat",
    "sursa": "A.07 (poziția, măsurat pe desen); A.16 și A.29, D03; propunerea din 03.11.2026, ca în dormitorul mic (de confirmat cu arhitecta, LV2)",
    "nota": "Între ~196 și 225 cm de la pardoseală, pe un panou-suport prins de grinda GR1, cu fața la ~6 cm în spatele capacului M11-C. Aerul cald intră prin lamelele capacului, cel rece iese prin fanta de jos, cu clapa CL deschisă. Se leagă direct la doză (A.07). Traseul țevilor și scurgerea condensului până la unitatea exterioară (pe fațadă, lângă colțul cu peretele TV, A.07) nu sunt desenate (LV3).",
    "adanc": 37
   }
  ],
  "avertismente": [
   {
    "nivel": "atentie",
    "text": "A.06 și A.07 măsoară x de la zidăria peretelui cu fereastra (camera are 494 cm). A.05, A.01, A.08 și A.15 măsoară de la fața grinzii de deasupra ferestrelor și a stâlpilor din colțuri, cu 27 cm mai în cameră (camera are 467 cm; A.01 cotează 27). Cotele luate din A.06 sau A.07 se micșorează cu 27 cm. Pe nord–sud originea e aceeași (zidăria peretelui TV), dar unele cote pornesc de la fața grinzii peretelui cu M12, la 10 cm de zidărie: «580» din A.05 și «100» până la șina K din A.06.",
    "sursa": "A.01, A.05, A.06, A.07",
    "ids": [
     "SC",
     "CB-M1"
    ]
   },
   {
    "nivel": "atentie",
    "text": "Pe toate cele patru laturi sunt grinzi de beton de ~25 × 45 cm, cu fața de jos la ~205 cm; în cameră ies 15 cm (peretele TV), ~18 cm (peretele cu biroul) și 10 cm (peretele cu M12). A.05 le arată doar prin linii întrerupte și hașurează tavanul fals peste ele; A.15 și A.16 le arată în secțiune, cu tavanul fals oprit la fața lor. De măsurat pe șantier înainte de scheletul tavanului.",
    "sursa": "A.05, A.15 D02, A.16",
    "ids": [
     "GR1",
     "GR2",
     "GR3",
     "TF1"
    ]
   },
   {
    "nivel": "atentie",
    "text": "Grosimea tavanului fals: legenda A.05 scrie 10 cm; detaliul D-09 și secțiunile din A.15 și A.16 au 7 cm. Cu 250 cm până la placă (A.16; A.01: Hu 2,50 m), înălțimea liberă sub tavanul fals e ~243 cm, ca înălțimea lui M12 (243) și a măștii D03 (242 + 1 cm).",
    "sursa": "A.01, A.05, A.15, A.16",
    "ids": [
     "TF1"
    ]
   },
   {
    "nivel": "atentie",
    "text": "Banda M1: specs/06 dă 580 cm, iar planul de tăiere din specs/04 ~564 cm. Draperia și banda au loc doar între masca D03 (h = 50) și masca G1 (h ≈ 567), adică ~517 cm; A.06 desenează banda pe ~510 cm (55–565). Restul de la M2 se taie la 7 segmente, nu la 10.",
    "sursa": "A.01, A.05, A.06, specs/04, specs/06",
    "ids": [
     "M1",
     "SC",
     "D03",
     "G1"
    ]
   },
   {
    "nivel": "info",
    "text": "A.06 desenează câte 3 spoturi pe J și pe K. Câte module se cumpără se hotărăște pentru șinele montate (LV18).",
    "sursa": "A.06",
    "ids": [
     "J1",
     "K1"
    ]
   },
   {
    "nivel": "info",
    "text": "R13: planșele arată grinzi de ~25 × 45 cm pe toate laturile și stâlpi în colțuri. Masca G1 de lângă balcon acoperă grinda GR3 a peretelui cu M12 și stâlpul din colțul cu peretele cu fereastra. Grinda de pe peretele cu biroul iese ~5 cm în fața măștii. Nu știm la care se referă arhitecta prin «grinda și stâlpul din spatele mesei».",
    "sursa": "A.01, A.05, A.15, arhitecta 19.10.2026",
    "ids": [
     "G1",
     "GR3",
     "GR2",
     "ST1"
    ]
   }
  ]
 }
};
