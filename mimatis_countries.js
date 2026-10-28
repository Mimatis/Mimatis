// MIMATIS — Country resources data
// Edit this file to add or update country support resources
// Upload to GitHub alongside index.html

const C={
au:{name:'Australia',flag:'AU',cards:[
    {tag:'Support line 24/7',name:'Red Nose Grief and Loss',desc:'For anyone after miscarriage, stillbirth, newborn death or the death of a child: 24/7 support line 1300 308 307 with peer supporters, free counselling, support groups, live chat and the Hospital to Home program.',link:'https://rednosegriefandloss.org.au'},
    {tag:'Peer support',name:'Sands Australia',desc:'Support after miscarriage, stillbirth and newborn death from volunteers who have lost a baby themselves: bereavement support line 1300 072 637, support groups, hospital and home visits.',link:'https://www.sands.org.au'},
    {tag:'Counselling',name:'Bears of Hope',desc:'Free counselling in person, by phone and email, and support groups after pregnancy, birth or infant loss. Tel: 1300 11 HOPE (1300 114 673).',link:'https://www.bearsofhope.org.au'},
    {tag:'Miscarriage',name:'Pink Elephants',desc:'Support after miscarriage and early pregnancy loss: live chat with trained volunteers, group counselling and a helpline with PANDA, 1300 726 306.',link:'https://www.pinkelephants.org.au'},
    {tag:'Photography',name:'Heartfelt',desc:'Volunteer professional photographers who take photographs of your baby in hospital, free of charge. Tel: 1800 583 768.',link:'https://www.heartfelt.org.au'},
    {tag:'Payments',name:'Services Australia',desc:'Stillborn Baby Payment or Parental Leave Pay after a stillbirth, and Family Tax Benefit payments. Tel: 13 61 50.',link:'https://www.servicesaustralia.gov.au/experiencing-stillbirth-or-neonatal-death'}
  ],funeral:[
    {tag:'Funeral',name:'Registration and funerals',desc:'From 20 weeks (or 400 g) the birth is registered, free, usually within 60 days, and your baby is buried or cremated. Ask the hospital social worker about hospital-arranged options and costs. Full guide: mimatis.org/australia',link:'https://www.mimatis.org/australia'}
  ]
},
at:{name:'Austria',flag:'AT',cards:[
    {tag:'Information',name:'Initiative Stille Geburt',desc:'Austrian initiative for parents whose baby died in pregnancy, at birth or in the first year: your rights, farewell and funerals, grief, midwife care and self-help groups.',link:'https://www.stille-geburt.net'},
    {tag:'Association',name:'Verein Regenbogen (Vienna)',desc:'Self-help association run by parents whose babies died. Monthly groups, counselling, baby clothes and memorial events. Tel: 0676 642 86 92.',link:'https://www.shg-regenbogen.at'},
    {tag:'Association',name:'Verein Pusteblume',desc:'Free clothing for Sternenkinder, comfort packages and answers to parents\u2019 questions, across Austria.',link:'https://www.verein-pusteblume.at'},
    {tag:'Support',name:'Family counselling centres',desc:'About 400 publicly funded centres offering free, anonymous counselling, including after loss, in more than 30 languages.',link:'https://www.bundeskanzleramt.gv.at/agenda/familie/begleitung-beratung-hilfe/familienberatung.html'},
    {tag:'Helpline 24/7',name:'Telefonseelsorge',desc:'Free, confidential emotional support day and night: 142. Chat daily 16:00\u201323:00.',link:'https://www.telefonseelsorge.at'},
  ],funeral:[
    {tag:'Funeral',name:'Burial of Sternenkinder',desc:'Babies of 500 g or more must be buried in every state; under 500 g, rules differ by state. If parents arrange nothing, the hospital must. Many cemeteries have graves for Sternenkinder.',link:'https://www.oesterreich.gv.at/de/themen/familie_und_partnerschaft/geburt-eines-kindes/4/Seite.080101'},
  ]},
be:{name:'Belgium',flag:'BE',cards:[
    {tag:'Parents',name:'Met Lege Handen',desc:'An organisation of and for parents of a baby who died: meetings, a magazine and a brochure on saying goodbye (Dutch).',link:'https://www.metlegehanden.be'},
    {tag:'Support',name:'Berrefonds',desc:'Support after pregnancy loss, stillbirth and infant death, based in Antwerp, with the Koesterkoffer for hospitals.',link:'https://berrefonds.be'},
    {tag:'Photography',name:'Boven De Wolken',desc:'Free professional remembrance photography across Belgium, usually within 24 hours of the birth. Tel: 059 79 01 56.',link:'https://www.bovendewolken.be'},
    {tag:'Brussels',name:'Mizuko',desc:'A French-speaking support group led by psychologists at CHU Saint-Pierre, for parents whose baby died around the birth.',link:'https://www.bornin.brussels/associations/mizuko-deuil-perinatal/'},
    {tag:'Helpline 24/7',name:'1813 / 0800 32 123',desc:'Suicide prevention, free and anonymous, day and night: Zelfmoordlijn 1813 (Dutch), Centre de Prévention du Suicide 0800 32 123 (French).',link:'https://www.therapyroute.com/article/suicide-hotlines-and-crisis-lines-in-belgium'}
  ],funeral:[
    {tag:'Funeral',name:'Burial or cremation: your right at any stage',desc:'From 180 days, registration and burial or cremation are required; before that, they are your right. Municipalities have star gardens for babies. Full guide in English, Dutch and French: mimatis.org/belgium',link:'https://www.mimatis.org/belgium'}
  ]
},
hr:{name:'Croatia',flag:'HR',cards:[
    {tag:'Peer support',name:'RODA - Roditelji u akciji',desc:'Parents\' association with a forum section for parents who have lost a baby, at any stage.',link:'https://www.roda.hr'},
    {tag:'Psychological help',name:'TESA',desc:'Free psychological counselling by phone on working days, 10:00-22:00: 01 48 28 888, or by email: psiho.pomoc@tesa.hr.',link:'https://www.therapyroute.com/article/suicide-hotlines-and-crisis-lines-in-croatia-by-therapyroute'},
    {tag:'Helpline',name:'Plavi telefon',desc:'Emotional support from trained volunteers: 01 4833 888.',link:'https://www.plavi-telefon.hr'},
    {tag:'Crisis 24/7',name:'Centar za krizna stanja (KBC Zagreb)',desc:'Crisis support day and night: 01 2376 470.',link:'https://www.therapyroute.com/article/suicide-hotlines-and-crisis-lines-in-croatia-by-therapyroute'}
  ],funeral:[
    {tag:'Funeral',name:'Your own funeral within 15 days',desc:'You have 15 days to take your stillborn baby for a funeral; otherwise the hospital arranges the burial. Your baby can be entered in the birth register with a name. Full guide in English and Croatian: mimatis.org/croatia',link:'https://www.mimatis.org/croatia'}
  ]
},
cy:{name:'Cyprus',flag:'CY',cards:[
    {tag:'Perinatal charity',name:'Birth Forward',desc:'A Cypriot charity for pregnancy, birth and early parenthood, with a directory of support after pregnancy loss.',link:'https://www.birthforward.com/directory-tag/pregnancy-loss/'},
    {tag:'Helpline',name:'Cyprus Samaritans',desc:'Confidential emotional support in Greek and English, daily 16:00 to midnight: 8000 7773 (free).',link:'https://www.cyprussamaritans.org'},
    {tag:'Children',name:'116 111',desc:'Free line for children and teenagers, weekdays 12:00-20:00, Saturday 09:30-14:00.',link:'https://www.therapyroute.com/article/suicide-hotlines-and-crisis-lines-in-cyprus-by-therapyroute'}
  ],funeral:[
    {tag:'Funeral',name:'Burial in agreement with the church',desc:'Stillborn babies can be buried in a cemetery in agreement with the church; ask the hospital and your parish priest. Full guide in English and Greek: mimatis.org/cyprus',link:'https://www.mimatis.org/cyprus'}
  ]
},
cz:{name:'Czech Republic',flag:'CZ',cards:[
    {tag:'Information',name:'Perinatální ztráta',desc:'Practical information for parents after the loss of a baby, from the Czech Union of Midwives, supported by the Ministry of Health.',link:'https://www.perinatalniztrata.cz'},
    {tag:'Parents',name:'Dítě v srdci',desc:'Support and information for parents after the death of a baby.',link:'https://ditevsrdci.cz'},
    {tag:'Bereaved parents',name:'Dlouhá cesta',desc:'Support for parents who have lost a child, by phone and in groups. Tel: 721 288 215.',link:'https://www.dlouhacesta.cz'},
    {tag:'Crisis',name:'Linka první psychické pomoci',desc:'Psychological first aid for adults in crisis. Tel: 116 123, free, day and night.',link:'https://cnn.iprima.cz/prehledne-kam-se-obratit-kdyz-me-trapi-sebevrazedne-myslenky-a-kde-pomohou-pozustalym-411624'}
  ],funeral:[
    {tag:'Funeral',name:'The 96-hour decision and pohřebné',desc:'Families have 96 hours from being told to decide on a funeral, also after a miscarriage; otherwise the baby is cremated into a shared grave. The funeral grant is 5,000 CZK. Full guide: mimatis.org/czech-republic',link:'https://www.mimatis.org/czech-republic'}
  ]
},
dk:{name:'Denmark',flag:'DK',cards:[
    {tag:'Free therapy',name:'Familier & Sorg',desc:'Free, specialised therapy within 48 hours for parents who lose a child, plus grief groups and contact with other parents. Tel: 39 61 24 51.',link:'https://familierogsorg.dk/foraeldre/'},
    {tag:'Leave',name:'Sorgorlov (borger.dk)',desc:'Each parent can take up to 26 weeks of bereavement leave with benefits after a stillbirth from 22 weeks or the death of a child.',link:'https://www.borger.dk/familie-og-boern/Barsel-oversigt/sorgorlov'},
    {tag:'Helpline',name:'Livslinien',desc:'Anonymous phone counselling if you have thoughts of suicide: 70 201 201. Children: BørneTelefonen 116 111.',link:'https://www.livslinien.dk'}
  ],funeral:[
    {tag:'Funeral',name:'Burial or cremation',desc:'From 22 weeks your baby is buried or cremated; before that, many hospitals let you choose. Full guide in English and Danish: mimatis.org/denmark',link:'https://www.mimatis.org/denmark'}
  ]
},
ee:{name:'Estonia',flag:'EE',cards:[
    {tag:'Free counselling',name:'Pregnancy crisis counselling — Ida-Tallinna Keskhaigla',desc:'Free counselling after miscarriage or the death of a child, no referral needed, in Estonian and Russian: 666 1900.',link:'https://www.itk.ee/en/patient/clinics/womens-clinic/sunnitusmaja-perinataalkeskus/pregnancy-crisis-counselling'},
    {tag:'Hospital',name:'Ida-Tallinna Keskhaigla',desc:'East Tallinn Central Hospital. Leaflet on stillbirth in Estonian, English and Russian. Social worker: 620 7394.',link:'https://www.itk.ee/print/pdf/node/5059'},
    {tag:'Hospital',name:'Tartu Ülikooli Kliinikum — Women’s Clinic',desc:'Tartu University Hospital. On-duty midwife 731 9923; reception 731 9100 on weekdays.',link:'https://kliinikum.ee/naistekliinik/en/emergency-care'},
    {tag:'Helpline',name:'Emotional support line 116 123',desc:'Every day 10:00–24:00, in Estonian, Russian and English. Free.',link:'https://sotsiaalkindlustusamet.ee/en/child-and-adult-need-help/mental-health-crisis/emotional-support-helpline-116-123'},
    {tag:'Helpline 24/7',name:'Crisis line 116 006',desc:'24 hours, in Estonian, Russian and English. Chat at palunabi.ee.',link:'https://sotsiaalkindlustusamet.ee/en/child-and-adult-need-help/support-victims/victim-support-crisis-helpline'},
  ],funeral:[]},
fi:{name:'Finland',flag:'FI',cards:[
    {tag:'Parents',name:'Käpy ry — Lapsikuolemaperheet',desc:'Peer support and free brochures for families whose child died in late pregnancy, as a baby or later. Email: tuki@kapy.fi. Text or WhatsApp: +358 45 325 9595.',link:'https://kapy.fi/child-death-families-kapy-ry/'},
    {tag:'Helpline 24/7',name:'MIELI Kriisipuhelin',desc:'Finnish crisis line, day and night: 09 2525 0111. Children and young people: 116 111.',link:'https://mieli.fi/apua-ja-tukea/kriisipuhelin/'}
  ],funeral:[
    {tag:'Funeral',name:'Burial at any stage',desc:'From 22 weeks your baby is buried or cremated with a permit from the hospital; from 12 weeks the hospital and parish arrange a burial if you do not. Full guide in English and Finnish: mimatis.org/finland',link:'https://www.mimatis.org/finland'}
  ]
},
fr:{name:'France',flag:'FR',cards:[
    {tag:'Association',name:'AGAPA',desc:'Listening and support after pregnancy loss or the death of a baby, with trained volunteer listeners and support groups. Tel: 01 40 45 06 36.',link:'https://www.agapa.fr'},
    {tag:'Association',name:'SPAMA',desc:'Support for parents after perinatal death and after a serious prenatal diagnosis. Listening line on weekday mornings: 07 87 85 37 81.',link:'https://www.spama.asso.fr'},
    {tag:'Association',name:'Petite \u00c9milie',desc:'Since 2003, for parents after a termination for medical reasons or perinatal loss. Forum, booklets and practical information on rights.',link:'https://www.petiteemilie.org'},
    {tag:'Association',name:'Nos Tout-Petits',desc:'Monthly groups, sibling workshops and remembrance ceremonies. Based in Lille, with groups in several regions.',link:'https://www.nostoutpetits.fr'},
    {tag:'Association',name:'Na\u00eetre et Vivre',desc:'For parents after the death of a baby, including perinatal loss. Listening line: 01 47 23 05 08.',link:'https://www.naitre-et-vivre.org'},
    {tag:'Helpline 24/7',name:'3114',desc:'National suicide prevention line. Free, 24 hours a day, also for family members.',link:'https://www.sante.fr/le-numero-national-de-prevention-du-suicide-0'},
  ],funeral:[
    {tag:'Funeral',name:'Funeral or hospital cremation: 14 days to decide',desc:'From 15 weeks (SA), parents have 14 days to arrange the funeral themselves or leave it to the hospital. Full guide in English and French.',link:'https://www.mimatis.org/france#goodbye'},
  ]},
de:{name:'Germany',flag:'DE',cards:[
    {tag:'Association',name:'Verband Verwaiste Eltern (VEID)',desc:'National association for bereaved parents and siblings in Germany — self-help groups, a magazine, and regional help pages.',link:'https://www.veid.de'},
    {tag:'Self-help',name:'Initiative Regenbogen',desc:'Nationwide self-help association since 1990 for parents who lost a child before, during or soon after birth — groups, information and contact addresses.',link:'https://www.initiative-regenbogen.de'},
    {tag:'Photography',name:'Dein Sternenkind',desc:'Free memory photos by volunteer photographers for families who lose a baby in pregnancy, at birth or soon after — Germany, Austria and Switzerland.',link:'https://www.dein-sternenkind.eu'},
    {tag:'Counselling',name:'pro familia',desc:'About 200 counselling centres for pregnancy, birth and family questions — many also by phone or video.',link:'https://www.profamilia.de'},
    {tag:'Helpline 24/7',name:'Telefonseelsorge',desc:'Free, confidential, day and night: 0800 111 0 111, 0800 111 0 222 or 116 123.',link:'https://www.telefonseelsorge.de'},
  ],funeral:[
    {tag:'Funeral Support',name:'Bundesverband Deutscher Bestatter',desc:'German funeral directors association — search for a funeral director near you and ask about baby funerals.',link:'https://www.bestatter.de'},
  ]},
gr:{name:'Greece',flag:'GR',cards:[
    {tag:'Free counselling',name:'Merimna',desc:'Free psychological support and parent groups for families after a death, including the loss of a baby. Athens: 210 646 3622. Thessaloniki: 2310 510 010.',link:'https://merimna.org.gr'},
    {tag:'Perinatal grief',name:'Love and Grief',desc:'Support after pregnancy and baby loss from a birth and bereavement doula, including support groups for women.',link:'https://www.loveandgrief.gr'},
    {tag:'Helpline 24/7',name:'10306 psychosocial support line',desc:'Free and anonymous psychological support, 24 hours a day. Tel: 10306.',link:'https://www.therapyroute.com/article/suicide-hotlines-and-crisis-lines-in-greece-by-therapyroute'},
    {tag:'Crisis',name:'Klimaka 1018',desc:'Suicide prevention line, 24 hours a day (local call rate). Tel: 1018.',link:'https://www.klimaka.org.gr'}
  ],funeral:[
    {tag:'Funeral',name:'Ask the hospital about your options',desc:'Greek law has few specific rules on the farewell after the loss of a baby. Ask the hospital early about burial, cremation or hospital disposal, and say what you want. Full guide: mimatis.org/greece',link:'https://www.mimatis.org/greece'}
  ]
},
hu:{name:'Hungary',flag:'HU',cards:[
    {tag:'Grief group',name:'Napfogyatkozás Egyesület',desc:'Grief support across Hungary, including the online Vendégbaba group for parents whose baby died in pregnancy or around birth. Tel: +36 20 339 3173.',link:'https://www.gyaszportal.hu'},
    {tag:'Counselling',name:'Perinatus Alapítvány',desc:'Psychological support around pregnancy, birth and loss, in Budapest and online.',link:'https://perinatus.hu'},
    {tag:'Helpline 24/7',name:'Lelki elsősegély 116-123',desc:'Someone to talk to, free, day and night. Children and young people: Kék Vonal 116 111.',link:'https://www.therapyroute.com/article/suicide-hotlines-and-crisis-lines-in-hungary-by-therapyroute'}
  ],funeral:[
    {tag:'Funeral',name:'Burial: tell the hospital what you want',desc:'After 24 weeks the hospital arranges the burial unless you do; before that, a burial is possible on request. Full guide in English and Hungarian: mimatis.org/hungary',link:'https://www.mimatis.org/hungary'}
  ]
},
ie:{name:'Ireland',flag:'IE',cards:[
    {tag:'Association',name:'Féileacáin',desc:'National charity for families after the death of a baby: counselling, peer support, groups and memory boxes in hospitals.',link:'https://www.feileacain.ie'},
    {tag:'Support',name:'A Little Lifetime Foundation',desc:'Counselling, support groups and remembrance services for people affected by baby loss.',link:'https://www.alittlelifetime.ie'},
    {tag:'Miscarriage',name:'Miscarriage Association of Ireland',desc:'A volunteer phone line and monthly support meetings in Dublin for anyone affected by miscarriage.',link:'https://www.miscarriage.ie'},
    {tag:'Helpline 24/7',name:'FirstLight',desc:'Free crisis support and counselling after the sudden death of a child aged 0 to 18. 24-hour helpline: 1800 391 391.',link:'https://www.firstlight.ie'},
    {tag:'Hospital',name:'HSE bereavement care',desc:'Every maternity unit should have a bereavement team with a specialist midwife. Ask your midwife to refer you.',link:'https://hse.ie/eng/services/list/3/maternity/bereavement-care'}
  ],funeral:[
    {tag:'Funeral',name:'Hospital or private funeral',desc:'The hospital must explain your options and their costs. Stillbirths from 23 weeks or 400 g can be registered, free, with your baby\'s name. Full guide: mimatis.org/ireland',link:'https://www.mimatis.org/ireland'}
  ]
},
it:{name:'Italy',flag:'IT',cards:[
    {tag:'Association',name:'CiaoLapo Onlus',desc:"Italy's leading organisation after perinatal and neonatal loss — support, research, and clinical guidance.",link:'https://www.ciaolapo.it'},
    {tag:'Association',name:'Associazione Materna',desc:'Italian association supporting mothers after pregnancy and neonatal loss.',link:'https://www.associazionematerna.it'},
    {tag:'Helpline',name:'Telefono Amico',desc:'Italian emotional support: 02 2327 2327.',link:'https://www.telefonoamico.it'},
    {tag:'Helpline 24/7',name:'Telefono Azzurro',desc:'Italian helpline also supporting bereaved parents: 19696.',link:'https://www.azzurro.it'},
  ],funeral:[]},
lv:{name:'Latvia',flag:'LV',cards:[
    {tag:'Free support',name:'Dzīve un sēras (Torņakalna fonds)',desc:'Free grief groups and consultations for parents who lost a child, including in pregnancy or at birth, until March 2028.',link:'https://www.dziveunseras.lv'},
    {tag:'Memorial',name:'Dvēseļu dārzs',desc:'The Garden of Souls by Torņakalns church in Riga: a resting place for babies and memorial events for parents.',link:'https://www.dveseludarzs.lv'},
    {tag:'Helpline 24/7',name:'Skalbes crisis line',desc:'Free, confidential support day and night: 116 123. Children: 116 111.',link:'https://www.skalbes.lv'}
  ],funeral:[
    {tag:'Funeral',name:'Burial at any stage',desc:'Since 2018 hospitals must tell you in writing that you can take your baby for burial, also before 22 weeks. VSAA pays a funeral allowance after a stillbirth. Full guide in English and Latvian: mimatis.org/latvia',link:'https://www.mimatis.org/latvia'}
  ]
},
lt:{name:'Lithuania',flag:'LT',cards:[
    {tag:'Association',name:'Asociacija Angelų mamos',desc:"Lithuania's leading non-profit association for mothers and families after miscarriage, stillbirth, neonatal loss, or termination for medical reasons. Founded by a bereaved mother, offering community support and guidance in Lithuanian.",link:'https://www.angelumamos.lt'},
    {tag:'Hospital',name:'Vilnius University Hospital Santaros Klinikos',desc:"Lithuania's leading teaching hospital with a specialist perinatology and obstetrics department. Bereavement support is available through the maternity team.",link:'https://www.santa.lt'},
    {tag:'Hospital',name:'Vilnius Maternity Hospital (Vilniaus gimdymo namai)',desc:"Vilnius's main public maternity hospital — the primary facility for births and pregnancy loss support in the capital. Contact the maternity team for bereavement support.",link:'https://www.vgn.lt'},
    {tag:'Hospital',name:'Hospital of Lithuanian University of Health Sciences — Kaunas Clinics',desc:"The largest hospital in Lithuania and the Baltic States, with a comprehensive obstetrics and gynaecology department providing care after pregnancy loss.",link:'https://www.kaunoklinikos.lt'},
    {tag:'Support',name:'Neišnešiotukų tėvai (Premature Baby Parents)',desc:"Support platform for parents of premature babies in Lithuania — many of whom experience neonatal loss. Offers peer support and practical guidance.",link:'https://www.neisnesiotukas.lt'},
    {tag:'Mental Health',name:'Pagalba Sau (Ministry of Health Mental Health Platform)',desc:"Lithuania's national public mental health platform, listing resources for parents after pregnancy and infant loss. Run by the Lithuanian Ministry of Health.",link:'https://www.pagalbasau.lt'},
    {tag:'Hospital',name:'Baltic American Clinic (BAK) — Vilnius',desc:"The leading private maternity hospital in Lithuania, serving many internationally mobile and expatriate families. English-speaking staff available.",link:'https://www.bak.lt'}
  ],funeral:[
    {tag:'Funeral',name:'Registrų centras (Civil Registry)',desc:"All stillbirths in Lithuania must be registered at the Civil Registry (Registrų centras). The maternity hospital will guide you through the process. Registration is required for babies born after 22 weeks.",link:'https://www.registrucentras.lt'}
  ]
},
lu:{name:'Luxembourg',flag:'LU',cards:[
    {tag:'Parents',name:'Eidel Äerm (Initiativ Liewensufank)',desc:'A self-help group for parents whose baby died in pregnancy, at birth or after birth, meeting in Itzig. Tel: 36 05 98.',link:'https://www.liewensufank.lu'},
    {tag:'Parents',name:'Weesen-Elteren (Croix-Rouge)',desc:'A discussion group in Luxembourg City for parents who have lost a child. Tel: 691 90 13 21.',link:'https://www.hopitauxschuman.lu/de/ich-bin-ein-patient-werdende-eltern/mein-klinikaufenthalt/im-todesfall/im-todesfall/'},
    {tag:'Grief counselling',name:'Omega 90',desc:'Grief counselling for individuals, couples, families, children and young people. Tel: 29 77 89 1.',link:'https://www.omega90.lu'},
    {tag:'Helpline',name:'SOS Détresse',desc:'Emotional support: 45 45 45, daily 11:00-23:00 (until 03:00 on Friday and Saturday nights).',link:'https://www.454545.lu'}
  ],funeral:[
    {tag:'Funeral',name:'Acte d\'enfant sans vie and funeral',desc:'From 22 weeks, an acte d\'enfant sans vie records your baby\'s name; the CNS pays part of the funeral costs. Full guide in English, French and German: mimatis.org/luxembourg',link:'https://www.mimatis.org/luxembourg'}
  ]
},
mt:{name:'Malta',flag:'MT',cards:[
    {tag:'Leave',name:'Miscarriage Leave (DIER)',desc:'Since 1 January 2026: 7 working days of fully paid leave after a miscarriage before 22 weeks, for employees and their partners.',link:'https://dier.gov.mt/en/faqs/miscarriage-leave/'},
    {tag:'Parents',name:'Little Angels',desc:'A Maltese support group for bereaved parents, with remembrance events such as the Wave of Light on 15 October.',link:'https://lovinmalta.com/malta/october-marks-pregnancy-and-infant-loss-awareness-month'},
    {tag:'Helpline 24/7',name:'Mental Health Helpline 1579',desc:'Free emotional support day and night: 1579. Supportline 179 also answers 24/7.',link:'https://www.therapyroute.com/article/suicide-hotlines-and-crisis-lines-in-malta'},
    {tag:'Chat 24/7',name:'Kellimni.com',desc:'Free, anonymous chat at any hour, also on WhatsApp and Messenger.',link:'https://kellimni.com'}
  ],funeral:[
    {tag:'Funeral',name:'Funeral and documents',desc:'Ask the hospital about burial options, and Identità about registering your baby. Full guide in English and Maltese: mimatis.org/malta',link:'https://www.mimatis.org/malta'}
  ]
},
nl:{name:'Netherlands',flag:'NL',cards:[
    {tag:'Information',name:'Steunpunt NOVA',desc:'Independent national support point for parents who lose a baby during pregnancy or around birth, with information about the funeral and aftercare.',link:'https://steunpuntnova.nl'},
    {tag:'Knowledge centre',name:'Stille Levens',desc:'Knowledge centre on the death of babies, with information about saying goodbye to your child.',link:'https://www.stillelevens.nl'},
    {tag:'Peer support',name:'Stichting Lieve Engeltjes',desc:'Peer support for parents of a stillborn baby or a baby who died.',link:'https://lieve-engeltjes.nl'},
    {tag:'Photography',name:'Stichting Make a Memory',desc:'Free professional photographs of your baby, from 23 weeks of pregnancy. Ask the nurses, or contact them yourself.',link:'https://www.makeamemory.nl'},
    {tag:'Crisis',name:'113 Zelfmoordpreventie',desc:'Suicide prevention line, free, 24 hours. Tel: 113 or 0800-0113. Chat at 113.nl.',link:'https://www.113.nl'}
  ],funeral:[
    {tag:'Funeral',name:'Burial or cremation (uitvaart)',desc:'From 24 weeks, the birth is reported to the municipality and a burial or cremation takes place within 6 working days. Before 24 weeks it is not required, but possible. A funeral director and a coffin are optional. Full guide: mimatis.org/netherlands',link:'https://www.mimatis.org/netherlands'}
  ]
},
pl:{name:'Poland',flag:'PL',cards:[
    {tag:'Grief support',name:'Fundacja Nagle Sami',desc:'Support for people in mourning, including after a miscarriage: support groups, psychological help and a free helpline, 800 108 108 (Monday to Friday, 2 pm to 8 pm).',link:'https://naglesami.org.pl'},
    {tag:'Information',name:'Poroniłam.pl',desc:'Information on your rights after a miscarriage, written with doctors, midwives and psychologists, and a large online support group.',link:'https://www.poronilam.pl'},
    {tag:'Rights',name:'Fundacja Matecznik',desc:'Clear information on your rights after a miscarriage or the loss of a baby.',link:'https://fundacjamatecznik.pl/mamyprawapoporonieniu/'},
    {tag:'Crisis',name:'116 123 and 800 70 2222',desc:'Free crisis helplines for adults, 24 hours a day.',link:'https://warszawa19115.pl/-/telefony-zaufania-przydatne-infolinie'}
  ],funeral:[
    {tag:'Funeral',name:'Burial and funeral allowance (pochówek, zasiłek pogrzebowy)',desc:'Parents may bury their baby at any stage of pregnancy. The ZUS funeral allowance is 7,000 zł since 1 January 2026, and since August 2025 it no longer depends on the weeks of pregnancy or the baby\'s sex. Full guide: mimatis.org/poland',link:'https://www.mimatis.org/poland'}
  ]
},
pt:{name:'Portugal',flag:'PT',cards:[
    {tag:'Information',name:'Amor para além da lua',desc:'Information in Portuguese for parents after pregnancy and baby loss, including rights and practical help.',link:'https://amorparaalemdalua.com'},
    {tag:'Parent group',name:'Associação Pais Coragem',desc:'Support for parents who lose a child during pregnancy, with sharing sessions.',link:'https://www.facebook.com/paiscoragem/'},
    {tag:'Peer support',name:'Estou Aqui',desc:'A space for sharing and support after gestational, perinatal or neonatal loss.',link:'https://www.facebook.com/people/Estou-Aqui-Apoio-na-Perda-Gestacional/61563424238872/'},
    {tag:'Crisis',name:'SNS 24 psychological counselling',desc:'Psychological counselling by phone, 24 hours a day. Tel: 808 24 24 24.',link:'https://www.sns24.gov.pt'}
  ],funeral:[
    {tag:'Funeral',name:'Funeral grant (subsídio de funeral)',desc:'Social Security pays €1,611.39 towards the funeral of a baby who died before birth (deaths from 9 April 2026), to the person who paid, within 6 months. Full guide: mimatis.org/portugal',link:'https://www.mimatis.org/portugal'}
  ]
},
ro:{name:'Romania',flag:'RO',cards:[
    {tag:'Memory boxes',name:'ARNIS — Flori de Nu-vă-uităm',desc:'Memory boxes for hospitals and training for staff who support parents after the death of a baby.',link:'https://www.arnis.ong'},
    {tag:'Counselling',name:'Asociația Zi de Bine — Mame fără Flori',desc:'Counselling with a psychologist trained in trauma, and the first cooling cots in Romanian hospitals.',link:'https://zidebine.ro'},
    {tag:'Online group',name:'Pro Vita Iași',desc:'A free monthly online support group for mothers after pregnancy loss, led by a psychotherapist. Tel: 0745 992 668.',link:'https://provitaiasi.ro/dincolo-de-nori-este-iubire-grup-de-suport-online-pentru-mamele-care-au-pierdut-sarcina'},
    {tag:'Crisis',name:'TelVerde Antisuicid',desc:'Someone to talk to if you have thoughts of not wanting to live. Tel: 0800 801 200, free.',link:'https://findahelpline.com/organizations/telverde-antisuicid'}
  ],funeral:[
    {tag:'Funeral',name:'Registration and burial (născut mort)',desc:'From 28 weeks, a stillborn baby is declared within 3 days and parents may bury or cremate their baby. Before 28 weeks, ask the hospital early if you would like your own farewell. Full guide: mimatis.org/romania',link:'https://www.mimatis.org/romania'}
  ]
},
sk:{name:'Slovakia',flag:'SK',cards:[
    {tag:'Parents',name:'OZ Tanana',desc:'Support after the loss of a baby in pregnancy, at birth or soon after: online psychological support, a self-help group and a memory package.',link:'https://www.tanana.sk'},
    {tag:'Counselling',name:'Poradňa ALEXIS',desc:'Social, psychological and legal counselling after the loss of a child in pregnancy or around birth. Tel: 0911 350 200.',link:'https://www.alexisporadna.sk'},
    {tag:'Parents',name:'OZ Malíček',desc:'Support for parents with empty arms, including memory frames in Slovak perinatal centres.',link:'https://malicek.sk'},
    {tag:'Crisis 24/7',name:'IPčko crisis line',desc:'Free, anonymous crisis line, day and night: 0800 500 333. Linka dôvery Nezábudka: 0800 800 566.',link:'https://www.ipcko.sk'}
  ],funeral:[
    {tag:'Funeral',name:'Burial after any loss',desc:'A stillborn baby (from 1,000 g) is buried; after a miscarriage you can ask the hospital in writing to release your baby for burial. Full guide in English and Slovak: mimatis.org/slovakia',link:'https://www.mimatis.org/slovakia'}
  ]
},
si:{name:'Slovenia',flag:'SI',cards:[
    {tag:'Parents',name:'Društvo Solzice',desc:'A society for parents whose child died in pregnancy or soon after birth: meetings, help with formal matters and burials, and a yearly remembrance.',link:'https://www.bibaleze.si/novice/ko-se-nosecnost-prezgodaj-konca-kam-po-pomoc.html'},
    {tag:'Helpline 24/7',name:'Samarijan in Sopotnik',desc:'Someone to talk to, free, day and night: 116 123.',link:'https://www.therapyroute.com/article/suicide-hotlines-and-crisis-lines-in-slovenia-by-therapyroute'},
    {tag:'Night line',name:'Klic v duševni stiski',desc:'University Psychiatric Clinic Ljubljana, every night 19:00-07:00: 01 520 99 00.',link:'https://www.therapyroute.com/article/suicide-hotlines-and-crisis-lines-in-slovenia-by-therapyroute'},
    {tag:'Children',name:'TOM telefon',desc:'For children and young people: 116 111, daily 12:00-20:00.',link:'https://www.tomtelefon.si'}
  ],funeral:[
    {tag:'Funeral',name:'Burial at any stage',desc:'You can bury or cremate your baby at any stage of pregnancy, if you wish. Full guide in English and Slovene: mimatis.org/slovenia',link:'https://www.mimatis.org/slovenia'}
  ]
},
es:{name:'Spain',flag:'ES',cards:[
    {tag:'Association',name:'Umamanita',desc:"Spain's leading charity for parents after miscarriage, stillbirth, and neonatal death. Resources, research, advocacy, and peer support in Spanish. Also offers English-language support for international residents and visitors.",link:'https://www.umamanita.es'},
    {tag:'Association',name:'Red El Hueco de Mi Vientre',desc:'Spanish perinatal bereavement solidarity network — supporting families after diagnosis of life-limiting conditions, stillbirth, and neonatal loss. Advocates for better legal and hospital protocols.',link:'https://www.redelhuecodemivientre.es'},
    {tag:'Support',name:'Umamanita — English support',desc:'Dedicated English-language bereavement support from native English speakers for foreign residents or tourists who experience the loss of a baby while in Spain.',link:'https://www.umamanita.es/english-language-support-for-parents-following-a-stillbirth-or-neonatal-death-in-spain/'},
    {tag:'Hospital',name:'Hospital Clínic de Barcelona — Fetal Medicine',desc:"One of Spain's leading centres for fetal medicine and perinatology, offering a perinatal bereavement protocol and psychological support after pregnancy loss.",link:'https://fetalmedicinebarcelona.org'},
    {tag:'Crisis',name:'Teléfono de la Esperanza',desc:'Spain national emotional support line. Tel: 717 003 717. Free, 24 hours.',link:'https://telefonodelaesperanza.org'}
  ],funeral:[
    {tag:'Funeral',name:'Registro Civil',desc:'In Spain, stillbirths after 180 days of gestation must be registered. The hospital will assist with documentation. Contact your local Registro Civil for burial or cremation arrangements.',link:'https://www.mjusticia.gob.es/es/ciudadanos/tramites/registro-civil'}
  ]
},
se:{name:'Sweden',flag:'SE',cards:[
    {tag:'Association',name:'Spädbarnsfonden',desc:'The Swedish organisation for parents after a stillbirth or the death of a baby: local support districts and groups, a closed parents\' forum, the "Min sorg" app, the memory bag and loans of pall covers. Tel: 010-171 77 57.',link:'https://www.spadbarnsfonden.se'},
    {tag:'Benefits',name:'Försäkringskassan',desc:'Parental benefit and grief days (sorgedagar) after the loss of a baby. A dedicated team helps parents: call 0771-524 524 and say "tillfällig föräldrapenning".',link:'https://www.forsakringskassan.se/privatperson/foralder/om-du-har-mist-ett-barn'},
    {tag:'Support',name:'1177',desc:'Healthcare advice by phone, day and night (call 1177), and help finding your clinic, counsellor (kurator) or psychologist.',link:'https://www.1177.se'},
    {tag:'Crisis',name:'Självmordslinjen (Mind)',desc:'Suicide line, 24 hours. Tel: 90101. Chat at chat.mind.se.',link:'https://mind.se'},
    {tag:'Crisis',name:'Jourhavande medmänniska',desc:'Someone to talk to, every night 9 pm–6 am. Tel: 08-702 16 80.',link:'https://jourhavande-medmanniska.se'}
  ],funeral:[
    {tag:'Funeral',name:'Burial fee (begravningsavgift)',desc:'From week 22, a grave for 25 years, burial or cremation and transport are paid for by the burial fee, at no cost to parents. Before week 22, a grave is provided if the mother asks, with a doctor\'s certificate. Full guide: mimatis.org/sweden',link:'https://www.mimatis.org/sweden'}
  ]
},
uk:{name:'United Kingdom',flag:'GB',cards:[
    {tag:'Charity',name:'Sands',desc:"UK's leading stillbirth and neonatal death charity. Provides a national helpline (0808 164 3332), peer support groups, and a wealth of resources for bereaved parents and healthcare professionals.",link:'https://www.sands.org.uk'},
    {tag:'Charity',name:"Tommy's",desc:"UK charity funding research into miscarriage, stillbirth, and premature birth. Provides evidence-based information and support for bereaved parents.",link:'https://www.tommys.org'},
    {tag:'Charity',name:'Miscarriage Association',desc:'UK charity providing information and support for those affected by pregnancy loss, including a helpline and peer support network.',link:'https://www.miscarriageassociation.org.uk'},
    {tag:'Charity',name:'Bliss',desc:'UK charity for premature and sick babies and their families, including support after neonatal death.',link:'https://www.bliss.org.uk'},
    {tag:'Crisis',name:'Sands Helpline',desc:'Free bereavement support helpline for anyone affected by the death of a baby. Tel: 0808 164 3332. Opening hours on the Sands website.',link:'https://www.sands.org.uk/support-you/sands-helpline'}
  ],funeral:[
    {tag:'Funeral',name:'Registration and help with funeral costs',desc:'From 24 weeks, a stillbirth is registered (42 days in England and Wales, 21 in Scotland, up to 1 year in Northern Ireland). Help with funeral costs exists in every UK nation, and England offers a free baby loss certificate for losses before 24 weeks. Full guide: mimatis.org/united-kingdom',link:'https://www.mimatis.org/united-kingdom'}
  ]
},
us:{name:'United States',flag:'US',cards:[
    {tag:'Foundation',name:'Star Legacy Foundation',desc:'US non-profit for stillbirth research, awareness and support — free family support, live online groups for bereaved parents, and guides on certificates of stillbirth, taxes and lactation after a loss.',link:'https://starlegacyfoundation.org'},
    {tag:'Charity',name:'SHARE Pregnancy & Infant Loss Support',desc:'National support after miscarriage, stillbirth and infant death — groups, chapters across the US, a phone line (1-800-821-6819) and a Spanish-language program.',link:'https://nationalshare.org'},
    {tag:'Helpline',name:'Postpartum Support International',desc:'Perinatal mental health support including after pregnancy loss. HelpLine 1-800-944-4773 (call or text, English and Spanish) and more than 50 free online groups.',link:'https://www.postpartum.net'},
    {tag:'Photography',name:'Now I Lay Me Down To Sleep',desc:'Free professional remembrance portraits for families who lose a baby, also for losses in the past. Find a photographer or call 720-283-3339.',link:'https://www.nowilaymedowntosleep.org'},
    {tag:'Peer Support',name:'The Compassionate Friends',desc:'Support for families after the death of a child at any age — more than 500 chapters in all 50 states, and online groups. 877-969-0010.',link:'https://www.compassionatefriends.org'},
    {tag:'Helpline 24/7',name:'988 Suicide & Crisis Lifeline',desc:'Free, confidential, 24/7. Call or text 988. National Maternal Mental Health Hotline: 1-833-852-6262.',link:'https://988lifeline.org'}
  ],funeral:[
    {tag:'Funeral Rights',name:'FTC Funeral Rule',desc:'You can ask any funeral home for a written itemised price list and for prices by phone. No state law requires routine embalming.',link:'https://consumer.ftc.gov/articles/ftc-funeral-rule'}
  ]
}
}
const countryOrder=['au','at','be','hr','cy','cz','dk','ee','fi','fr','de','gr','hu','ie','it','lv','lt','lu','mt','nl','pl','pt','ro','sk','si','es','se','uk','us'];

