// MIMATIS — Research studies data
// Edit this file to add or update research studies
// Upload to GitHub alongside index.html

const studies=[
  {cat:'sb',year:'2024',tag:'Stillbirth',link:'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8417352/',title:'Global, regional, and national estimates and trends in stillbirths from 2000 to 2019',abstract:'An estimated 2.0 million babies were stillborn globally in 2019. Stillbirth rates in western Europe were among the lowest worldwide at 2.9 per 1,000 births, compared to 22.8 in west and central Africa. Progress in reducing the global burden remains insufficient to meet international targets.',journal:'The Lancet'},
  {cat:'sb',year:'2025',tag:'Stillbirth · Europe',link:'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11967907/',title:'Stillbirth rate trends across 25 European countries between 2010 and 2021',abstract:'A major European study analysing stillbirth data from 25 countries found that rates have stalled or increased in some countries. Advanced maternal age and multiple pregnancies are key contributing factors. Significant variation persists across European nations.',journal:'European Journal of Public Health'},
  {cat:'sb',year:'2022',tag:'Stillbirth · Europe',link:'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8975542/',title:'Clarity and consistency in stillbirth reporting in Europe: why is it so hard to get this right?',abstract:'A Euro-Peristat network study highlighting major inconsistencies in how European countries define and report stillbirths. These differences make cross-country comparisons difficult and may mask the true burden of stillbirth across Europe.',journal:'European Journal of Public Health'},
  {cat:'gr',year:'2024',tag:'Grief & Mental Health',link:'https://pubmed.ncbi.nlm.nih.gov/37133855/',title:'Long-term psychological outcomes for mothers following perinatal loss: a 10-year cohort study',abstract:'One in five mothers experiences clinically significant anxiety or depression five years after perinatal loss. Access to specialist bereavement counselling within the first year significantly improves long-term outcomes.',journal:'JAMA Psychiatry'},
  {cat:'pr',year:'2024',tag:'Prevention',link:'https://www.bmj.com/content/384/bmj-2023-076754',title:'Maternal sleep position and risk of late stillbirth: updated meta-analysis',abstract:'Supine sleep position in the third trimester is associated with a 2.6-fold increased risk of late stillbirth. Advising pregnant women to sleep on their side is a simple, evidence-based prevention strategy.',journal:'BMJ'},
  {cat:'mc',year:'2024',tag:'Miscarriage',link:'https://pubmed.ncbi.nlm.nih.gov/35830643/',title:'Recurrent miscarriage: causes, evaluation, and management',abstract:'Recurrent miscarriage affects 1–2% of couples. Antiphospholipid syndrome, uterine anomalies, and chromosomal factors are the most actionable causes. Progesterone supplementation shows benefit in selected groups.',journal:'New England Journal of Medicine'},
  {cat:'mc',year:'2024',tag:'Miscarriage · Europe',link:'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10809434/',title:'Bridging the gap between pregnancy loss research and policy in Europe',abstract:'A University College Cork study examining how research on miscarriage and stillbirth translates into healthcare policy across Europe. It identifies significant gaps between evidence and clinical practice, particularly in psychological aftercare and standardised care pathways.',journal:'Health Research Policy and Systems'},
  {cat:'nn',year:'2023',tag:'Neonatal Death',link:'https://publications.aap.org/pediatrics/article/151/1/e2022057997/190121',title:'Skin-to-skin contact after neonatal death and its effect on maternal grief',abstract:'Parents who had skin-to-skin contact and memory creation with their baby reported significantly lower complex grief scores at 12 months compared to those who did not.',journal:'Pediatrics'},
  {cat:'gr',year:'2023',tag:'Grief & Mental Health',link:'https://bmjopen.bmj.com/content/13/1/e066924',title:'Paternal grief after stillbirth and neonatal loss: a qualitative systematic review',abstract:'Fathers are frequently overlooked in bereavement care. This review found that fathers experience intense grief but are less likely to seek support due to societal expectations around masculinity and emotion.',journal:'BMJ Open'},
  {cat:'pr',year:'2023',tag:'Prevention',link:'https://pubmed.ncbi.nlm.nih.gov/36208057/',title:'Reducing modifiable risk factors for stillbirth: evidence from high-income countries',abstract:'Reduced foetal movement reporting, optimal sleep position, and management of gestational diabetes and hypertension are the highest-impact modifiable risk factors in high-income settings.',journal:'BJOG'},
  {cat:'sb',year:'2023',tag:'Stillbirth',link:'https://pubmed.ncbi.nlm.nih.gov/36031842/',title:'Placental causes of stillbirth: a systematic review and meta-analysis',abstract:'Placental pathology accounts for approximately 24% of all stillbirths. Improved examination protocols at autopsy could increase diagnostic yield and provide more answers for bereaved parents.',journal:'Placenta'},
  {cat:'mc',year:'2023',tag:'Miscarriage',link:'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8353608/',title:'Early pregnancy loss: a global burden and the case for better care',abstract:'An estimated 23 million miscarriages occur globally each year. The study calls for standardised care pathways including psychological support, still unavailable to most affected women worldwide.',journal:'The Lancet'},
  {cat:'nn',year:'2022',tag:'Neonatal Death',link:'https://pubmed.ncbi.nlm.nih.gov/34196903/',title:'Peer support interventions for bereaved parents following neonatal loss',abstract:'Parent-to-parent peer support programmes show measurable reduction in isolation and complicated grief. Structured programmes significantly outperform informal support alone at 3 and 6 months post-loss.',journal:"Archives of Women's Mental Health"},
  {cat:'pr',year:'2022',tag:'Prevention',link:'https://pubmed.ncbi.nlm.nih.gov/34906565/',title:'Foetal growth restriction and risk of stillbirth: surveillance strategies',abstract:'Foetal growth restriction accounts for up to 50% of unexplained stillbirths in high-income countries. Surveillance using customised growth charts significantly reduces risk when implemented in clinical practice.',journal:'American Journal of Obstetrics & Gynecology'},
  {cat:'sb',year:'2022',tag:'Stillbirth',link:'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8918495/',title:'Racial and ethnic disparities in stillbirth rates: a systematic review',abstract:'Black women in high-income countries have 2–3 times higher rates of stillbirth than white women. Structural inequalities in healthcare access and implicit bias are identified as primary drivers.',journal:'The Lancet'},
  {cat:'gr',year:'2022',tag:'Grief & Mental Health',link:'https://pubmed.ncbi.nlm.nih.gov/33326139/',title:'PTSD following stillbirth: prevalence, risk factors, and treatment',abstract:'Up to 30% of women and 15% of men meet clinical criteria for PTSD following stillbirth. Trauma-focused CBT and EMDR are the most evidence-supported treatments for perinatal PTSD.',journal:'Journal of Traumatic Stress'},
  {cat:'pr',year:'2021',tag:'Prevention',link:'https://pubmed.ncbi.nlm.nih.gov/33205613/',title:'Counting the kicks: systematic review of foetal movement awareness programmes',abstract:'Formal foetal movement awareness programmes are associated with a 30% reduction in late stillbirth rates in participating hospitals. Patient education and standardised reporting tools are key implementation factors.',journal:'BJOG'},
  {cat:'mc',year:'2021',tag:'Miscarriage',link:'https://pubmed.ncbi.nlm.nih.gov/33252458/',title:'Psychological impact of miscarriage: systematic review and meta-analysis',abstract:'Women experience clinically significant depression and anxiety following miscarriage. A critical gap exists between the frequency of miscarriage and availability of psychological support in most healthcare systems.',journal:'Human Reproduction Update'},
  {cat:'nn',year:'2021',tag:'Neonatal Death',link:'https://www.karger.com/Article/FullText/517918',title:'Causes of neonatal death in high-income countries: systematic review 2010–2021',abstract:'Prematurity complications remain the leading cause of neonatal death in high-income countries, accounting for 28% of cases. Infection, congenital anomaly, and intrapartum hypoxia complete the top four causes.',journal:'Neonatology'},
,
  {cat:'nn',tag:'Neonatal Death',year:2024,title:'Ending Preventable Neonatal Deaths: Multicountry Evidence to Inform Accelerated Progress to the Sustainable Development Goal by 2030',journal:'Neonatology · Karger',abstract:'More than 2.3 million newborns die each year. This multicountry study analyses neonatal mortality transition phases across 195 countries and identifies evidence-based strategies needed to reach the UN Sustainable Development Goal of 12 or fewer neonatal deaths per 1,000 live births by 2030.',link:'https://karger.com/neo/article/120/4/491/843716/Ending-Preventable-Neonatal-Deaths-Multicountry'},
  {cat:'nn',tag:'Neonatal Death',year:2024,title:'Sudden Infant Death Syndrome (SIDS): State of the Art and Future Directions',journal:'International Journal of Medical Sciences · 2024',abstract:'A comprehensive review of SIDS — its definition, risk factors, pathophysiology, biomarkers, and future directions in prevention and research. Covers the triple risk model and current evidence on modifiable risk factors including sleep position, environment, and breastfeeding.',link:'https://www.medsci.org/v21p0848.htm'},
  {cat:'nn',tag:'Neonatal Death',year:2024,title:'Early Newborn Metabolic Patterning and Sudden Infant Death Syndrome',journal:'JAMA Pediatrics · 2024',abstract:'A landmark study identifying eight metabolites significantly differing between infants who later died of SIDS and those who survived. Published in September 2024, this research opens new pathways toward early biomarker screening and prevention strategies for SIDS.',link:'https://pubmed.ncbi.nlm.nih.gov/39250160/'},
  {cat:'sb',tag:'Stillbirth',year:2024,title:'Experiences and long-term repercussions of perinatal grief in women after perinatal bereavement: a meta-ethnography',journal:'Frontiers in Psychiatry · 2025',abstract:'A meta-ethnographic synthesis of 18 studies involving 242 bereaved women. Three themes emerged: perinatal grief as a prolonged and transformative experience involving emotional pain, identity disruption, and social silencing. Supportive and continuous care is essential to promote identity reconstruction among bereaved mothers.',link:'https://pubmed.ncbi.nlm.nih.gov/41480336/'}];

const C={
au:{name:'Australia',flag:'AU',cards:[
    {tag:'Helpline 24/7',name:'Red Nose Australia',desc:'24/7 grief support: 1300 308 307. The main national support service — online community, peer volunteers, and comprehensive resources.',link:'https://www.rednose.org.au'},
    {tag:'Peer Support',name:'Bears of Hope',desc:'Memory boxes, national volunteer network, and peer support for families after stillbirth and neonatal loss.',link:'https://www.bearsofhope.org.au'},
    {tag:'Research & Support',name:'SANDS Australia',desc:'Support, advocacy, and research for stillbirth and neonatal death — includes 24-hour online peer support chat.',link:'https://www.sands.org.au'},
    {tag:'Research',name:'Stillbirth Foundation Australia',desc:'Funds stillbirth research and raises awareness of risk factors and prevention.',link:'https://www.stillbirthfoundation.org.au'},
    {tag:'Photography',name:'Heartfelt',desc:'Free professional remembrance photography for families experiencing stillbirth or premature birth.',link:'https://www.heartfelt.org.au'},
    {tag:'Practical',name:'Pregnancy Loss Australia',desc:'Resources on hospital rights, registration, leave entitlements, and returning to work.',link:'https://pregnancylossaustralia.org.au'},
  ],funeral:[
    {tag:'Funeral Guidance',name:'Red Nose — Funeral Support',desc:'Guides bereaved parents through funeral options, costs, and registration requirements in Australia.',link:'https://www.rednose.org.au/support'},
    {tag:'Funeral Directory',name:'Australian Funeral Directors Association',desc:'Find compassionate funeral directors across Australia who specialise in infant and baby loss.',link:'https://www.afda.org.au'},
  ]},
at:{name:'Austria',flag:'AT',cards:[
    {tag:'Support Community',name:'Stille Geburt Austria',desc:'Austrian community for parents after stillbirth — peer stories, information, and connection with other bereaved families.',link:'https://www.stillegeburt.at'},
    {tag:'Association',name:'Sternenkinder Austria',desc:'Austrian star children association — support, resources, and memory items for parents after pregnancy and infant loss.',link:'https://www.sternenkinder.at'},
    {tag:'Helpline 24/7',name:'Telefonseelsorge Osterreich',desc:'Free 24/7 emotional support: 142.',link:'https://www.telefonseelsorge.at'},
    {tag:'Hospital',name:'AKH Wien Perinatologie',desc:"Vienna General Hospital with specialist perinatal bereavement care and midwife support.",link:'https://www.akhwien.at'},
  ],funeral:[]},
be:{name:'Belgium',flag:'BE',cards:[
    {tag:'Association',name:'Petites Etoiles',desc:'Belgian association for parents after perinatal loss — counselling, peer groups, and memory support.',link:'https://www.petitesetoiles.be'},
    {tag:'Association',name:'De Mooiste Ster',desc:'Non-profit supporting parents who lost a baby during or shortly after birth — comfort packages and support network.',link:'https://www.demooiinstenier.be'},
    {tag:'Helpline 24/7',name:'Tele-Onthaal',desc:'Free 24/7 emotional support: 106 (Dutch) or 0800 32 123 (French).',link:'https://www.tele-onthaal.be'},
    {tag:'Hospital',name:'UZ Leuven Perinataal Verlies',desc:'University Hospital Leuven with a specialist perinatal loss team and bereavement midwife support.',link:'https://www.uzleuven.be'},
  ],funeral:[]},
hr:{name:'Croatia',flag:'HR',cards:[
    {tag:'Hospital',name:'KBC Zagreb Neonatology',desc:"Croatia's leading maternity hospital — ask for bereavement care via the neonatology or maternity department.",link:'https://www.kbc-zagreb.hr'},
    {tag:'Helpline',name:'Plavi Telefon',desc:'Croatian emotional support helpline: 01 4833 888.',link:'https://www.plavi-telefon.hr'},
    {tag:'Global Support',name:'International Stillbirth Alliance',desc:'Global coalition of 50+ organisations — English-language support and resources for all countries.',link:'https://www.stillbirthalliance.org'},
  ],funeral:[]},
cy:{name:'Cyprus',flag:'CY',cards:[
    {tag:'Helpline',name:'Cyprus Mental Health Line',desc:'Mental health support: 1480 (available in Greek and English).',link:'https://www.moh.gov.cy'},
    {tag:'Hospital',name:'Nicosia General Hospital',desc:"Cyprus's main hospital — ask for bereavement support via the maternity department.",link:'https://www.moh.gov.cy'},
    {tag:'Global Support',name:'Saying Goodbye',desc:'Global baby loss support organisation with resources in multiple languages.',link:'https://www.sayinggoodbye.org'},
  ],funeral:[]},
cz:{name:'Czech Republic',flag:'CZ',cards:[
    {tag:'Association',name:'Dlouha Cesta',desc:'Leading Czech association for parents after perinatal loss — peer support, counselling referrals, and practical guides.',link:'https://www.dlouhacesta.cz'},
    {tag:'Community',name:'Prazdna Kolebka',desc:'Czech online community for parents after miscarriage and stillbirth.',link:'https://www.prazdnakolebka.cz'},
    {tag:'Helpline 24/7',name:'Linka bezpeci',desc:'Free emotional support: 116 111 (24/7).',link:'https://www.linkabezpeci.cz'},
    {tag:'Hospital',name:'FN Motol Prague',desc:"Czech Republic's main maternity and children's hospital with perinatal bereavement support.",link:'https://www.fnmotol.cz'},
  ],funeral:[]},
dk:{name:'Denmark',flag:'DK',cards:[
    {tag:'Association',name:'Landsforeningen Spaedbarnsdod',desc:'Danish national association for parents after perinatal and infant loss — peer support and practical information.',link:'https://www.spaedbarnsdoed.dk'},
    {tag:'Association',name:'SANDS Denmark',desc:'Danish support for families after stillbirth and neonatal death — affiliated with the international Sands network.',link:'https://www.sands.dk'},
    {tag:'Helpline 24/7',name:'Livslinien',desc:'Danish emotional support: 70 201 201 (free, 24/7).',link:'https://www.livslinien.dk'},
    {tag:'Hospital',name:'Rigshospitalet Neonatology',desc:"Denmark's national hospital with specialist bereavement support for families after neonatal loss.",link:'https://www.rigshospitalet.dk'},
  ],funeral:[]},
ee:{name:'Estonia',flag:'EE',cards:[
    {tag:'Organisation',name:'Eesti Ammaemandate Uhing',desc:'Estonian Midwives Association — guidance and referrals for parents after perinatal loss.',link:'https://www.eay.ee'},
    {tag:'Hospital',name:'Ida-Tallinna Keskhaigla',desc:'East Tallinn Central Hospital — perinatal bereavement support available via maternity ward.',link:'https://www.itk.ee'},
    {tag:'Hospital',name:'Tartu Ulikooli Kliinikum',desc:"University Hospital of Tartu with perinatal support.",link:'https://www.kliinikum.ee'},
    {tag:'Helpline',name:'Eluliin',desc:'Estonian emotional support helpline: 655 8088.',link:'https://www.eluliin.ee'},
  ],funeral:[]},
fi:{name:'Finland',flag:'FI',cards:[
    {tag:'Association',name:'KAPY ry — Lapsikuolemaperheet',desc:"Finland's leading child loss association. Peer support, groups, and bereavement resources after stillbirth and neonatal death. Email: tuki@kapy.fi",link:'https://kapy.fi/child-death-families-kapy-ry/'},
    {tag:'Online Support',name:'KAPY Online Peer Groups',desc:'Closed online peer support groups in Finnish — facilitated by trained volunteer parents who have experienced loss themselves.',link:'https://kapy.fi/surevalle/etatuki/'},
    {tag:'Helpline 24/7',name:'MIELI Kriisipuhelin',desc:'Finnish crisis helpline: 09 2525 0111 (free, 24/7).',link:'https://mieli.fi/apua-ja-tukea/kriisipuhelin/'},
    {tag:'Association',name:'Suomen Mielenterveysseura',desc:'Finnish Mental Health Association — grief counselling and referrals for bereaved families.',link:'https://www.mielenterveysseura.fi'},
  ],funeral:[]},
fr:{name:'France',flag:'FR',cards:[
    {tag:'Association',name:'AGAPA',desc:"National association supporting parents after perinatal bereavement — local groups, counselling, and online resources.",link:'https://agapa.fr'},
    {tag:'Association',name:'Petite Emilie',desc:'French association providing peer support to parents after perinatal death.',link:'https://www.petite-emilie.org'},
    {tag:'Association',name:'Naitre et Vivre',desc:'French association after sudden infant death — also supports parents after stillbirth and miscarriage.',link:'https://www.naitreetvivre.com'},
    {tag:'Association',name:'SPAMA',desc:'Provides bereavement support to parents after perinatal loss (any cause) and after a prenatal diagnosis.',link:'https://www.spama.asso.fr'},
    {tag:'Helpline 24/7',name:'SOS Amitie',desc:'French listening line: 09 72 39 40 50 (24/7).',link:'https://www.sos-amitie.com'},
  ],funeral:[
    {tag:'Funeral Support',name:'Funecap Groupe',desc:'French funeral group with specialist services for babies and children — compassionate, affordable options nationwide.',link:'https://www.funecap.com'},
  ]},
de:{name:'Germany',flag:'DE',cards:[
    {tag:'Association',name:'Verband verwaiste Eltern (VEID)',desc:'National network for bereaved parents — peer groups, counselling referrals, and practical resources across Germany.',link:'https://www.veid.de'},
    {tag:'Association',name:'Initiative Regenbogen',desc:'Self-help groups and counselling for bereaved parents — active in many German cities.',link:'https://www.initiative-regenbogen.de'},
    {tag:'Association',name:'Stille Geburt e.V.',desc:'German association specifically for stillbirth — information, peer support, and hospital guidance.',link:'https://www.stille-geburt.de'},
    {tag:'Information',name:'fehlgeburt.de',desc:'German information portal for parents after miscarriage and stillbirth — practical guides and community.',link:'https://www.fehlgeburt.de'},
    {tag:'Helpline 24/7',name:'Telefonseelsorge',desc:'Free 24/7 crisis line: 0800 111 0 111.',link:'https://www.telefonseelsorge.de'},
  ],funeral:[
    {tag:'Funeral Support',name:'Bundesverband Deutscher Bestatter',desc:'German funeral directors association — search tool to find specialists in baby and infant funerals near you.',link:'https://www.bestatter.de'},
  ]},
gr:{name:'Greece',flag:'GR',cards:[
    {tag:'Support',name:'Perilepsis NGO',desc:'Greek NGO offering psychosocial support and grief counselling, including for perinatal loss.',link:'https://www.perilepsis.gr'},
    {tag:'Helpline 24/7',name:'Klimaka Helpline',desc:'Greek mental health helpline: 10306 (free, 24/7).',link:'https://www.klimaka.org.gr'},
    {tag:'Hospital',name:'Alexandra Maternity Hospital Athens',desc:"Greece's leading maternity hospital — ask for bereavement support via the midwife or psychology team.",link:'https://www.alexandra.gr'},
    {tag:'Global Support',name:'Saying Goodbye',desc:'International baby loss support — resources and community in multiple languages.',link:'https://www.sayinggoodbye.org'},
  ],funeral:[]},
hu:{name:'Hungary',flag:'HU',cards:[
    {tag:'Association',name:'Perinatalis Gyasz Egyesulet',desc:'Hungarian Perinatal Grief Association — support for parents after miscarriage, stillbirth, and neonatal loss.',link:'https://www.perinatalisgyasz.hu'},
    {tag:'Helpline 24/7',name:'Lelkisegely Telefon',desc:'Hungarian emotional support: 116 123 (free, 24/7).',link:'https://www.lelkisegely.hu'},
    {tag:'Hospital',name:'Semmelweis Klinika Budapest',desc:"Hungary's leading maternity hospital with specialist bereavement support.",link:'https://semmelweis.hu'},
  ],funeral:[]},
ie:{name:'Ireland',flag:'IE',cards:[
    {tag:'Helpline',name:'A Little Lifetime Foundation',desc:"Ireland's leading bereavement support for stillbirth and neonatal death — helpline, peer support, and hospital liaison.",link:'https://www.alittlelifetime.ie'},
    {tag:'Association',name:'Feileacain',desc:'Stillbirth & Neonatal Death Association of Ireland — memory boxes, peer support, and remembrance events.',link:'https://www.feileacain.ie'},
    {tag:'Miscarriage',name:'Miscarriage Association of Ireland',desc:'Support and information for anyone affected by miscarriage in Ireland.',link:'https://www.miscarriage.ie'},
    {tag:'Support',name:'FirstLight Ireland',desc:'Crisis intervention and free counselling for families who have suddenly lost a child. 24/7 helpline: 1850 391 391.',link:'https://www.firstlight.ie'},
    {tag:'Hospital',name:'HSE Bereavement Care',desc:'Every maternity hospital in Ireland has dedicated bereavement support — ask your midwife to refer you.',link:'https://www.hse.ie/eng/services/list/3/maternity/bereavement/'},
  ],funeral:[
    {tag:'Funeral Support',name:'Irish Association of Funeral Directors',desc:'Find compassionate funeral directors with experience in baby and infant loss across Ireland.',link:'https://www.iafd.ie'},
  ]},
it:{name:'Italy',flag:'IT',cards:[
    {tag:'Association',name:'CiaoLapo Onlus',desc:"Italy's leading organisation after perinatal and neonatal loss — support, research, and clinical guidance.",link:'https://www.ciaolapo.it'},
    {tag:'Association',name:'Associazione Materna',desc:'Italian association supporting mothers after pregnancy and neonatal loss.',link:'https://www.associazionematerna.it'},
    {tag:'Helpline',name:'Telefono Amico',desc:'Italian emotional support: 02 2327 2327.',link:'https://www.telefonoamico.it'},
    {tag:'Helpline 24/7',name:'Telefono Azzurro',desc:'Italian helpline also supporting bereaved parents: 19696.',link:'https://www.azzurro.it'},
  ],funeral:[]},
lv:{name:'Latvia',flag:'LV',cards:[
    {tag:'Organisation',name:'Latvijas Masu asociacija',desc:'Latvian Nurses Association — guidance and referrals for parents after perinatal loss.',link:'https://www.lma.lv'},
    {tag:'Hospital',name:'Rigas Dzemdību nams',desc:"Riga Maternity Hospital — Latvia's main maternity hospital with bereavement care.",link:'https://www.rdn.lv'},
    {tag:'Hospital',name:'Paula Stradina Kliniska universitates slimnica',desc:"Latvia's university hospital with neonatal and perinatal bereavement support.",link:'https://www.stradini.lv'},
    {tag:'Helpline',name:'Skalbes Krizes centrs',desc:'Latvian crisis centre — emotional support helpline: 67222922.',link:'https://www.skalbes.lv'},
  ],funeral:[]},
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
    {tag:'Government',name:'Ministère de la Santé',desc:'Luxembourg Ministry of Health — can direct bereaved parents to relevant support services and bereavement resources in the country.',link:'https://sante.public.lu'},
    {tag:'Support',name:'Ligue Médico-Sociale',desc:'Luxembourg social and medical support league offering counselling and support services for families in crisis, including pregnancy loss.',link:'https://www.lms.lu'},
    {tag:'Crisis',name:'SOS Détresse',desc:'Luxembourg crisis and emotional support line. Free, confidential. Tel: 454545. Available in French, German, Luxembourgish and English.',link:'https://www.454545.lu'}
  ],funeral:[
    {tag:'Funeral',name:'État Civil (Civil Registry)',desc:'Stillbirths in Luxembourg must be registered at the État Civil. The hospital will provide guidance. Contact your local commune for burial arrangements.',link:'https://guichet.public.lu'}
  ]
},
mt:{name:'Malta',flag:'MT',cards:[
    {tag:'Hospital',name:'Mater Dei Hospital — Maternity',desc:"Malta's main public hospital with a maternity department. Contact the obstetrics team for bereavement support after pregnancy loss.",link:'https://deputyprimeminister.gov.mt/en/mater-dei/Pages/Mater-Dei-Hospital.aspx'},
    {tag:'Support',name:'Malta Government Health Department',desc:'The Maltese government health department can signpost bereaved parents to available support services and counselling in Malta.',link:'https://deputyprimeminister.gov.mt'},
    {tag:'Crisis',name:'Richmond Foundation — Malta',desc:'Malta\'s leading mental health organisation, offering counselling and psychological support including for grief and loss.',link:'https://www.richmond.org.mt'}
  ],funeral:[]
},
nl:{name:'Netherlands',flag:'NL',cards:[
    {tag:'Association',name:'IMA Afscheidszorg',desc:'Professional bereavement care organisation providing compassionate farewell services for babies who are stillborn or die in the neonatal period. Available across the Netherlands.',link:'https://www.ima-afscheidszorg.nl'},
    {tag:'Association',name:'Steunpunt NOVA',desc:'Dutch specialist centre for parents after baby loss. Provides multilingual information cards, support resources, and guidance in Dutch, English, Arabic, Turkish, Polish, and more.',link:'https://steunpuntnova.nl'},
    {tag:'Support',name:'NVOG — Nederlandse Vereniging voor Obstetrie en Gynaecologie',desc:'The Dutch professional body for obstetrics and gynaecology — publishes guidelines on bereavement care after stillbirth and miscarriage.',link:'https://www.nvog.nl'},
    {tag:'Crisis',name:'113 Zelfmoordpreventie',desc:'Netherlands national crisis and emotional support line. Free, 24 hours. Tel: 0800 0113.',link:'https://www.113.nl'}
  ],funeral:[
    {tag:'Funeral',name:'Uitvaartverzorging na zwangerschapsverlies',desc:'In the Netherlands, babies born after 24 weeks who are stillborn must be registered. IMA Afscheidszorg and most hospitals can guide families through farewell and burial options.',link:'https://www.ima-afscheidszorg.nl'}
  ]
},
pl:{name:'Poland',flag:'PL',cards:[
    {tag:'Foundation',name:'Fundacja Pokonać Niemoc',desc:'Polish foundation providing support for families after the loss of a child, including stillbirth and neonatal death. Offers psychological support and peer community.',link:'https://pokonanmiemoc.pl'},
    {tag:'Support',name:'Stowarzyszenie Rodziców po Stracie',desc:'Polish association for bereaved parents after pregnancy and infant loss — providing peer support, information, and advocacy.',link:'https://www.postracie.pl'},
    {tag:'Crisis',name:'Telefon Zaufania dla Dorosłych',desc:'Poland national emotional support line. Free, 24 hours. Tel: 116 123.',link:'https://116123.pl'}
  ],funeral:[
    {tag:'Funeral',name:'Urząd Stanu Cywilnego (Civil Registry)',desc:'In Poland, stillbirths after 22 weeks must be registered. The hospital will assist with documentation. Contact your local USC for guidance on burial arrangements.',link:'https://www.gov.pl'}
  ]
},
pt:{name:'Portugal',flag:'PT',cards:[
    {tag:'Support',name:'Associação de Apoio à Maternidade e Paternidade',desc:'Portuguese support association for parents experiencing loss during pregnancy and early parenthood.',link:'https://www.apsi.pt'},
    {tag:'Hospital',name:'Maternidade Dr. Alfredo da Costa — Lisboa',desc:'Lisbon\'s main maternity hospital with a bereavement care team for parents after stillbirth or neonatal loss.',link:'https://www.chlc.min-saude.pt'},
    {tag:'Crisis',name:'SOS Voz Amiga',desc:'Portugal national emotional support line. Tel: 213 544 545 (daily 4pm–midnight). Free and confidential.',link:'https://www.sosvozamiga.org'}
  ],funeral:[]
},
ro:{name:'Romania',flag:'RO',cards:[
    {tag:'Hospital',name:'Spitalul Clinic de Obstetrică și Ginecologie Panait Sîrbu',desc:'Bucharest specialist obstetrics and gynaecology hospital — the main public maternity centre for bereaved families in the capital.',link:'https://www.spsb.ro'},
    {tag:'Crisis',name:'Linia de Criză Telefonică',desc:'Romania national crisis support line. Tel: 0800 801 200. Free and available for emotional support after loss.',link:'https://www.anofm.ro'}
  ],funeral:[]
},
sk:{name:'Slovakia',flag:'SK',cards:[
    {tag:'Support',name:'Liga za duševné zdravie',desc:'Slovak mental health league offering counselling and bereavement support services for families after loss.',link:'https://dusevnezdravie.sk'},
    {tag:'Crisis',name:'Linka dôvery (Crisis Line)',desc:'Slovakia national crisis and emotional support helpline. Tel: 0800 500 333. Free, 24 hours.',link:'https://www.linkadovery.sk'}
  ],funeral:[]
},
si:{name:'Slovenia',flag:'SI',cards:[
    {tag:'Hospital',name:'UKC Ljubljana — Gynecology and Obstetrics',desc:'Slovenia\'s main university hospital with a specialist obstetrics department providing bereavement support after pregnancy and infant loss.',link:'https://www.ukclj.si'},
    {tag:'Crisis',name:'TOM Telefon (Crisis Line)',desc:'Slovenia crisis line for emotional support. Tel: 116 111 (for young people) or 01 520 99 00. Available daily.',link:'https://www.tomtelefon.si'}
  ],funeral:[]
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
    {tag:'Association',name:'Spädbarnsfonden',desc:'Swedish foundation supporting families after the loss of a baby through stillbirth, neonatal death, or SIDS. Offers peer support, resources, and advocacy.',link:'https://www.spadbarnsfonden.se'},
    {tag:'Support',name:'1177 Vårdguiden',desc:'Sweden\'s national healthcare guidance service — provides advice and can refer bereaved parents to local bereavement support services.',link:'https://www.1177.se'},
    {tag:'Crisis',name:'Mind Självmordslinjen',desc:'Sweden national crisis and emotional support line. Tel: 90101. Free, 24 hours. Staffed by trained volunteers.',link:'https://mind.se/hitta-hjalp/sjalvmordslinjen/'}
  ],funeral:[
    {tag:'Funeral',name:'Skatteverket (Tax Agency)',desc:'Stillbirths in Sweden must be registered with Skatteverket. The hospital will provide guidance on registration and funeral arrangements.',link:'https://www.skatteverket.se'}
  ]
},
uk:{name:'United Kingdom',flag:'GB',cards:[
    {tag:'Charity',name:'Sands',desc:"UK's leading stillbirth and neonatal death charity. Provides a national helpline (0808 164 3332), peer support groups, and a wealth of resources for bereaved parents and healthcare professionals.",link:'https://www.sands.org.uk'},
    {tag:'Charity',name:"Tommy's",desc:"UK charity funding research into miscarriage, stillbirth, and premature birth. Provides evidence-based information and support for bereaved parents.",link:'https://www.tommys.org'},
    {tag:'Charity',name:'Miscarriage Association',desc:'UK charity providing information and support for those affected by pregnancy loss, including a helpline and peer support network.',link:'https://www.miscarriageassociation.org.uk'},
    {tag:'Charity',name:'Bliss',desc:'UK charity for premature and sick babies and their families, including support after neonatal death.',link:'https://www.bliss.org.uk'},
    {tag:'Crisis',name:'Sands Helpline',desc:'Free bereavement support helpline for anyone affected by the death of a baby. Tel: 0808 164 3332. Mon–Fri 10am–3pm, Tue–Thu 6–9pm.',link:'https://www.sands.org.uk/support-you/sands-helpline'}
  ],funeral:[
    {tag:'Funeral',name:'GOV.UK — Registering a stillbirth',desc:'In the UK, stillbirths must be registered within 42 days. The hospital or midwife will advise on next steps. GOV.UK provides full guidance on registration and funeral arrangements.',link:'https://www.gov.uk/register-stillbirth'}
  ]
},
us:{name:'United States',flag:'US',cards:[
    {tag:'Foundation',name:'Star Legacy Foundation',desc:'US non-profit dedicated to stillbirth research, awareness, and support. Provides a national support network, online resources, and virtual support groups for bereaved parents.',link:'https://starlegacyfoundation.org'},
    {tag:'Charity',name:'SHARE Pregnancy & Infant Loss Support',desc:'US national organisation providing support for those touched by the tragic death of a baby through miscarriage, stillbirth, or infant death. Also offers Spanish-language support.',link:'https://nationalshare.org'},
    {tag:'Support',name:'Postpartum Support International',desc:'US organisation providing perinatal mental health support including for pregnancy loss. Helpline: 1-800-944-4773.',link:'https://www.postpartum.net'},
    {tag:'Charity',name:'NILMDTS (Now I Lay Me Down to Sleep)',desc:'US organisation providing free professional remembrance photography for families experiencing the loss of a baby during pregnancy or shortly after birth.',link:'https://www.nowilaymedowntosleep.org'},
    {tag:'Crisis',name:'PSI Helpline',desc:'Postpartum Support International helpline for perinatal loss. Tel: 1-800-944-4773. Leave a message and a trained volunteer will call back.',link:'https://www.postpartum.net'}
  ],funeral:[
    {tag:'Funeral',name:'CDC — What to do after a stillbirth',desc:'The US Centers for Disease Control and Prevention provides guidance for parents after stillbirth, including information on certificates of birth resulting in stillbirth by state.',link:'https://www.cdc.gov/reproductive-health/pregnancy-loss/stillbirth'}
  ]
}
}
const countryOrder=['au','at','be','hr','cy','cz','dk','ee','fi','fr','de','gr','hu','ie','it','lv','lt','lu','mt','nl','pl','pt','ro','sk','si','es','se','uk','us'];

const tc={sb:'tag-sb',nn:'tag-nn',gr:'tag-gr',pr:'tag-pr',mc:'tag-mc'};

// ── PAGE NAVIGATION ──
function showPage(id){
  document.querySelectorAll('.pg').forEach(function(p){p.classList.remove('active');});
  var el=document.getElementById('pg-'+id);
  if(el){el.classList.add('active');}
  window.scrollTo(0,0);
  // update nav active state
  document.querySelectorAll('.nav-links button[data-page]').forEach(function(b){
    b.classList.toggle('active', b.getAttribute('data-page')===id);
  });
  // update URL hash for browser back button
  try{history.pushState({page:id},'',(id==='home'?window.location.pathname:'#'+id));}catch(e){}
  // lazy load garden when visiting
  if(id==='garden' && !gardenLoaded){gardenLoaded=true;initGarden();}
}





// ── HAMBURGER ──
document.getElementById('hbg').addEventListener('click',function(){
  this.classList.toggle('open');
  document.getElementById('mob').classList.toggle('open');
});
function closeMob(){
  document.getElementById('hbg').classList.remove('open');
  document.getElementById('mob').classList.remove('open');
}

// ── COUNTRIES (shared function for both home and help page) ──

function buildCountryGrid(selId,resId,tId,sId,cardsId,funeralId,fcardsId){
  var w=document.getElementById(selId);
  if(!w||w.children.length>0)return;
  countryOrder.forEach(function(k){
    var c=C[k];if(!c)return;
    var b=document.createElement('button');
    b.className='cb';b.textContent=c.name;
    b.addEventListener('click',function(){
      document.querySelectorAll('#'+selId+' .cb').forEach(function(x){x.classList.remove('active');});
      b.classList.add('active');
      document.getElementById(tId).textContent='Resources for '+c.name;
      document.getElementById(sId).textContent=c.cards.length+' verified organisations';
      document.getElementById(cardsId).innerHTML=c.cards.map(function(x){
        return '<div class="rc"><div class="rtag">'+x.tag+'</div><div class="rname">'+x.name+'</div><p class="rdesc">'+x.desc+'</p><a href="'+x.link+'" target="_blank" rel="noopener">Visit website</a></div>';
      }).join('');
      var fs=document.getElementById(funeralId);
      if(c.funeral&&c.funeral.length){
        document.getElementById(fcardsId).innerHTML=c.funeral.map(function(x){
          return '<div class="rc"><div class="rtag ft">'+x.tag+'</div><div class="rname">'+x.name+'</div><p class="rdesc">'+x.desc+'</p><a href="'+x.link+'" target="_blank" rel="noopener">Visit website</a></div>';
        }).join('');
        fs.style.display='block';
      }else{fs.style.display='none';}
      document.getElementById(resId).classList.add('show');
    });
    w.appendChild(b);
  });
}

// ── COUNTRY URL ROUTING ──
var slugToKey = {'australia':'au','austria':'at','belgium':'be','croatia':'hr','cyprus':'cy','czech-republic':'cz','denmark':'dk','estonia':'ee','finland':'fi','france':'fr','germany':'de','greece':'gr','hungary':'hu','ireland':'ie','italy':'it','latvia':'lv','lithuania':'lt','luxembourg':'lu','malta':'mt','netherlands':'nl','poland':'pl','portugal':'pt','romania':'ro','slovakia':'sk','slovenia':'si','spain':'es','sweden':'se','united-kingdom':'uk','united-states':'us'};
var keyToSlug = {'au':'australia','at':'austria','be':'belgium','hr':'croatia','cy':'cyprus','cz':'czech-republic','dk':'denmark','ee':'estonia','fi':'finland','fr':'france','de':'germany','gr':'greece','hu':'hungary','ie':'ireland','it':'italy','lv':'latvia','lt':'lithuania','lu':'luxembourg','mt':'malta','nl':'netherlands','pl':'poland','pt':'portugal','ro':'romania','sk':'slovakia','si':'slovenia','es':'spain','se':'sweden','uk':'united-kingdom','us':'united-states'};

function openCountryBySlug(slug) {
  var key = slugToKey[slug];
  if (!key || !C[key]) return;
  showPage('help');
  setTimeout(function() {
    // Click the matching button in both grids
    ['csel','csel2'].forEach(function(gridId) {
      var grid = document.getElementById(gridId);
      if (!grid) return;
      var btns = grid.querySelectorAll('.cb');
      btns.forEach(function(btn) {
        if (btn.textContent.trim() === C[key].name) btn.click();
      });
    });
    // Update URL
    try { history.pushState({page:'help',country:slug},'','#'+slug); } catch(e) {}
    // Scroll to result
    setTimeout(function() {
      var res = document.getElementById('cres2');
      if (res) res.scrollIntoView({behavior:'smooth',block:'start'});
    }, 150);
  }, 80);
}

// Check on load for country hash
function checkCountryHash() {
  var hash = window.location.hash.replace('#','').toLowerCase();
  if (slugToKey[hash]) {
    openCountryBySlug(hash);
    return true;
  }
  return false;
}

// Override country button clicks to update URL
function setupCountryURLs() {
  ['csel','csel2'].forEach(function(gridId) {
    var grid = document.getElementById(gridId);
    if (!grid) return;
    // Use MutationObserver to detect when grid is populated
    var obs = new MutationObserver(function() {
      grid.querySelectorAll('.cb').forEach(function(btn) {
        if (btn._urlBound) return;
        btn._urlBound = true;
        btn.addEventListener('click', function() {
          var name = btn.textContent.trim();
          for (var k in C) {
            if (C[k].name === name) {
              var slug = keyToSlug[k];
              if (slug) {
                try { history.pushState({page:'help',country:slug},'','#'+slug); } catch(e) {}
              }
              break;
            }
          }
        });
      });
    });
    obs.observe(grid, {childList:true});
  });
}

window.addEventListener('load', function() {
  setupCountryURLs();
  if (!checkCountryHash()) {
    var hash = window.location.hash.replace('#','');
    if (hash && document.getElementById('pg-'+hash)) showPage(hash);
    else try { history.replaceState({page:'home'},'',window.location.pathname); } catch(e) {}
  }
});

window.addEventListener('popstate', function(e) {
  var hash = window.location.hash.replace('#','').toLowerCase();
  if (slugToKey[hash]) { openCountryBySlug(hash); return; }
  var page = (e.state && e.state.page) ? e.state.page : 'home';
  showPage(page);
});

buildCountryGrid('csel','cres','cr-t','cr-s','cr-cards','cr-funeral','cr-fcards');

// ── COUNTRY URL ROUTING ──
var slugToKey = {'australia':'au','austria':'at','belgium':'be','croatia':'hr','cyprus':'cy','czech-republic':'cz','denmark':'dk','estonia':'ee','finland':'fi','france':'fr','germany':'de','greece':'gr','hungary':'hu','ireland':'ie','italy':'it','latvia':'lv','lithuania':'lt','luxembourg':'lu','malta':'mt','netherlands':'nl','poland':'pl','portugal':'pt','romania':'ro','slovakia':'sk','slovenia':'si','spain':'es','sweden':'se','united-kingdom':'uk','united-states':'us'};
var keyToSlug = {'au':'australia','at':'austria','be':'belgium','hr':'croatia','cy':'cyprus','cz':'czech-republic','dk':'denmark','ee':'estonia','fi':'finland','fr':'france','de':'germany','gr':'greece','hu':'hungary','ie':'ireland','it':'italy','lv':'latvia','lt':'lithuania','lu':'luxembourg','mt':'malta','nl':'netherlands','pl':'poland','pt':'portugal','ro':'romania','sk':'slovakia','si':'slovenia','es':'spain','se':'sweden','uk':'united-kingdom','us':'united-states'};

function openCountryBySlug(slug) {
  var key = slugToKey[slug];
  if (!key || !C[key]) return;
  showPage('help');
  setTimeout(function() {
    // Click the matching button in both grids
    ['csel','csel2'].forEach(function(gridId) {
      var grid = document.getElementById(gridId);
      if (!grid) return;
      var btns = grid.querySelectorAll('.cb');
      btns.forEach(function(btn) {
        if (btn.textContent.trim() === C[key].name) btn.click();
      });
    });
    // Update URL
    try { history.pushState({page:'help',country:slug},'','#'+slug); } catch(e) {}
    // Scroll to result
    setTimeout(function() {
      var res = document.getElementById('cres2');
      if (res) res.scrollIntoView({behavior:'smooth',block:'start'});
    }, 150);
  }, 80);
}

// Check on load for country hash
function checkCountryHash() {
  var hash = window.location.hash.replace('#','').toLowerCase();
  if (slugToKey[hash]) {
    openCountryBySlug(hash);
    return true;
  }
  return false;
}

// Override country button clicks to update URL
function setupCountryURLs() {
  ['csel','csel2'].forEach(function(gridId) {
    var grid = document.getElementById(gridId);
    if (!grid) return;
    // Use MutationObserver to detect when grid is populated
    var obs = new MutationObserver(function() {
      grid.querySelectorAll('.cb').forEach(function(btn) {
        if (btn._urlBound) return;
        btn._urlBound = true;
        btn.addEventListener('click', function() {
          var name = btn.textContent.trim();
          for (var k in C) {
            if (C[k].name === name) {
              var slug = keyToSlug[k];
              if (slug) {
                try { history.pushState({page:'help',country:slug},'','#'+slug); } catch(e) {}
              }
              break;
            }
          }
        });
      });
    });
    obs.observe(grid, {childList:true});
  });
}

window.addEventListener('load', function() {
  setupCountryURLs();
  if (!checkCountryHash()) {
    var hash = window.location.hash.replace('#','');
    if (hash && document.getElementById('pg-'+hash)) showPage(hash);
    else try { history.replaceState({page:'home'},'',window.location.pathname); } catch(e) {}
  }
});

window.addEventListener('popstate', function(e) {
  var hash = window.location.hash.replace('#','').toLowerCase();
  if (slugToKey[hash]) { openCountryBySlug(hash); return; }
  var page = (e.state && e.state.page) ? e.state.page : 'home';
  showPage(page);
});

buildCountryGrid('csel2','cres2','cr-t2','cr-s2','cr-cards2','cr-funeral2','cr-fcards2');

// ── COUNTRY URL ROUTING ──
var slugToKey = {'australia':'au','austria':'at','belgium':'be','croatia':'hr','cyprus':'cy','czech-republic':'cz','denmark':'dk','estonia':'ee','finland':'fi','france':'fr','germany':'de','greece':'gr','hungary':'hu','ireland':'ie','italy':'it','latvia':'lv','lithuania':'lt','luxembourg':'lu','malta':'mt','netherlands':'nl','poland':'pl','portugal':'pt','romania':'ro','slovakia':'sk','slovenia':'si','spain':'es','sweden':'se','united-kingdom':'uk','united-states':'us'};
var keyToSlug = {'au':'australia','at':'austria','be':'belgium','hr':'croatia','cy':'cyprus','cz':'czech-republic','dk':'denmark','ee':'estonia','fi':'finland','fr':'france','de':'germany','gr':'greece','hu':'hungary','ie':'ireland','it':'italy','lv':'latvia','lt':'lithuania','lu':'luxembourg','mt':'malta','nl':'netherlands','pl':'poland','pt':'portugal','ro':'romania','sk':'slovakia','si':'slovenia','es':'spain','se':'sweden','uk':'united-kingdom','us':'united-states'};

function openCountryBySlug(slug) {
  var key = slugToKey[slug];
  if (!key || !C[key]) return;
  showPage('help');
  setTimeout(function() {
    // Click the matching button in both grids
    ['csel','csel2'].forEach(function(gridId) {
      var grid = document.getElementById(gridId);
      if (!grid) return;
      var btns = grid.querySelectorAll('.cb');
      btns.forEach(function(btn) {
        if (btn.textContent.trim() === C[key].name) btn.click();
      });
    });
    // Update URL
    try { history.pushState({page:'help',country:slug},'','#'+slug); } catch(e) {}
    // Scroll to result
    setTimeout(function() {
      var res = document.getElementById('cres2');
      if (res) res.scrollIntoView({behavior:'smooth',block:'start'});
    }, 150);
  }, 80);
}

// Check on load for country hash
function checkCountryHash() {
  var hash = window.location.hash.replace('#','').toLowerCase();
  if (slugToKey[hash]) {
    openCountryBySlug(hash);
    return true;
  }
  return false;
}

// Override country button clicks to update URL
function setupCountryURLs() {
  ['csel','csel2'].forEach(function(gridId) {
    var grid = document.getElementById(gridId);
    if (!grid) return;
    // Use MutationObserver to detect when grid is populated
    var obs = new MutationObserver(function() {
      grid.querySelectorAll('.cb').forEach(function(btn) {
        if (btn._urlBound) return;
        btn._urlBound = true;
        btn.addEventListener('click', function() {
          var name = btn.textContent.trim();
          for (var k in C) {
            if (C[k].name === name) {
              var slug = keyToSlug[k];
              if (slug) {
                try { history.pushState({page:'help',country:slug},'','#'+slug); } catch(e) {}
              }
              break;
            }
          }
        });
      });
    });
    obs.observe(grid, {childList:true});
  });
}

window.addEventListener('load', function() {
  setupCountryURLs();
  if (!checkCountryHash()) {
    var hash = window.location.hash.replace('#','');
    if (hash && document.getElementById('pg-'+hash)) showPage(hash);
    else try { history.replaceState({page:'home'},'',window.location.pathname); } catch(e) {}
  }
});

window.addEventListener('popstate', function(e) {
  var hash = window.location.hash.replace('#','').toLowerCase();
  if (slugToKey[hash]) { openCountryBySlug(hash); return; }
  var page = (e.state && e.state.page) ? e.state.page : 'home';
  showPage(page);
});


// ── GARDEN (Supabase) ──
var gardenLoaded=false;
// ── SUPABASE PERMANENT GARDEN ──
const SUPA_URL='https://llqimrbuioewaoqdqlnp.supabase.co';
const SUPA_KEY='sb_publishable_eCLsVcOx9NV-YUCaxAh9pw_ks6eSnwW';
let _sb=null;
function getSB(){
  if(!_sb) _sb=supabase.createClient(SUPA_URL,SUPA_KEY);
  return _sb;
}
let fc=0;

function addFlower(name,emoji,xp,sh,canvas){
  var el=document.createElement('div');
  el.className='flower';
  el.style.left=xp+'%';
  el.innerHTML='<div class="ftip">'+name+'</div><span class="fh">'+emoji+'</span><div class="fstem" style="height:'+sh+'px"></div><div class="fn">'+name+'</div>';
  canvas.insertBefore(el,canvas.querySelector('.gnd2'));
}

async function initGarden(){
  var canvas=document.getElementById('gc');
  if(!canvas)return;
  try{
    var r=await getSB().from('flowers').select('*').order('created_at',{ascending:true});
    var rows=r.data||[];
    fc=rows.length;
    rows.forEach(function(row,i){
      var xp=4+(i%30)*3.1;
      var sh=28+(i%4)*8;
      addFlower(row.baby_name,row.flower_emoji,xp,sh,canvas);
    });
    var cel=document.getElementById('fc');
    if(cel){
      cel.innerHTML=fc>0
        ?'&#127800;&thinsp; '+fc+' flowers have been planted by parents around the world'
        :'&#127800;&thinsp; Be the first to plant a flower in this garden';
    }
  }catch(err){
    console.log('Garden load error:',err);
    // fallback pre-seeded flowers if Supabase fails
    var fallback=[
      {n:'Lily',f:'&#127800;',x:7,s:48},{n:'Noah',f:'&#127799;',x:15,s:40},
      {n:'Mia',f:'&#127804;',x:24,s:53},{n:'Elias',f:'&#127802;',x:33,s:44},
      {n:'Rose',f:'&#127800;',x:42,s:58},{n:'Theo',f:'&#127803;',x:51,s:42},
      {n:'Grace',f:'&#127801;',x:60,s:50},{n:'Leo',f:'&#127801;',x:69,s:36},
      {n:'Aria',f:'&#127804;',x:78,s:52},{n:'Belle',f:'&#127800;',x:88,s:56}
    ];
    fallback.forEach(function(s){addFlower(s.n,s.f,s.x,s.s,canvas);});
  }
}

async function plantFlower(){
  var name=document.getElementById('bname').value.trim();
  var emoji=document.getElementById('ftype').value;
  var yearEl=document.getElementById('byear');
  var year=yearEl?yearEl.value.trim():'';
  if(!name){alert("Please enter your baby's name.");return;}
  var btn=document.getElementById('plant-btn');
  if(btn){btn.textContent='Planting...';btn.disabled=true;}
  try{
    await getSB().from('flowers').insert([{
      baby_name:name,
      flower_emoji:emoji,
      year:year||null
    }]);
  }catch(e){
    console.log('Insert error:',e);
  }
  var canvas=document.getElementById('gc');
  addFlower(name,emoji,4+Math.random()*90,26+Math.random()*34,canvas);
  fc++;
  var cel=document.getElementById('fc');
  if(cel)cel.innerHTML='&#127800;&thinsp; '+fc+' flowers have been planted by parents around the world';
  document.getElementById('bname').value='';
  if(yearEl)yearEl.value='';
  if(btn){btn.textContent='Plant';btn.disabled=false;}
}

document.getElementById('plant-btn').addEventListener('click',plantFlower);

// ── RESEARCH ──
function renderStudies(data){
  document.getElementById('slist').innerHTML=data.map(function(s){
    var lk=s.link?'<a class="slink" href="'+s.link+'" target="_blank" rel="noopener">Read full study</a>':'';
    return '<div class="si"><div class="sm"><div class="sy">'+s.year+'</div><span class="stag '+(tc[s.cat]||'tag-sb')+'">'+s.tag+'</span></div><div><div class="stitle">'+s.title+'</div><p class="sabst">'+s.abstract+'</p><p class="sjou">'+s.journal+' · '+s.year+'</p>'+lk+'</div></div>';
  }).join('');
}
renderStudies(studies);
document.querySelectorAll('.fbtn').forEach(function(btn){
  btn.addEventListener('click',function(){
    document.querySelectorAll('.fbtn').forEach(function(b){b.classList.remove('active');});
    this.classList.add('active');
    var cat=this.getAttribute('data-filt');
    renderStudies(cat==='all'?studies:studies.filter(function(s){return s.cat===cat;}));
  });
});

// ── LETTER WRITER ──
document.querySelectorAll('.tbtn').forEach(function(b){
  b.addEventListener('click',function(){
    document.querySelectorAll('.tbtn').forEach(function(x){x.classList.remove('active');});
    this.classList.add('active');
  });
});
async function genLetter(){
  var baby=document.getElementById('l-baby').value.trim();
  var rec=document.getElementById('l-rec').value;
  var ctx=document.getElementById('l-ctx').value.trim();
  var tone=(document.querySelector('.tbtn.active')||{}).dataset.tone||'gentle';
  var rl={friend:'a close friend',family:'a family member',employer:'an employer or HR department',wider:'a wider group or social media post',community:'a religious or community group'};
  var out=document.getElementById('lout');
  var body=document.getElementById('lbody');
  out.classList.add('show');
  body.innerHTML='<div style="padding:2.5rem;font-style:italic;color:var(--soft);font-size:.9rem">Composing your letter with care...</div>';
  var prompt='You are a compassionate writer helping a bereaved parent. Write a '+tone+' letter addressed to '+rl[rec]+'.'+(baby?' Baby name: '+baby+'.':'')+(ctx?' Context: '+ctx+'.':'')+' Warm, dignified, 150-250 words. Avoid hollow phrases. First person. Begin directly.';
  try{
    var r=await fetch('https://api.anthropic.com/v1/messages',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({model:'claude-sonnet-4-20250514',max_tokens:1000,messages:[{role:'user',content:prompt}]})});
    var d=await r.json();
    body.innerHTML='';
    body.textContent=d.content.map(function(b){return b.text||'';}).join('')||'Sorry, could not generate a letter. Please try again.';
  }catch(e){body.innerHTML='';body.textContent='Something went wrong. Please try again.';}
}
function copyLetter(){
  navigator.clipboard.writeText(document.getElementById('lbody').textContent).then(function(){
    var b=document.getElementById('copy-btn');b.textContent='Copied!';
    setTimeout(function(){b.textContent='Copy to clipboard';},2000);
  });
}
// letter writer replaced with templates

// ── LETTER TEMPLATES ACCORDION ──
var letters=[
  {num:'01',situation:'Close friends & family',name:'Telling someone you love',note:'Replace the brackets with your own details. You can remove the date if you prefer.',
   text:'I am writing to share something that has broken our hearts.\n\nOur baby [name] was born still on [date]. There are no words adequate to describe what we are going through, and we are still finding our way through the shock and grief of these first days.\n\nWe wanted you to hear this from us directly. We ask only for your patience and kindness as we take the time we need. We are not yet ready for visits or calls, but knowing you are there means more than we can say.\n\nWe will reach out when we are ready. Until then, please simply hold us in your thoughts.\n\nWith love,\n[Your name]'},
  {num:'02',situation:'Workplace',name:'Notifying your employer or HR',note:'Keep this brief and factual. You do not owe your employer any details beyond what you choose to share.',
   text:'Dear [Name / HR Team],\n\nI am writing to inform you that I have recently experienced the loss of my baby. This has been an unexpected and devastating bereavement and I am currently unable to return to work.\n\nI would be grateful if you could advise me on the bereavement and parental leave policies available to me, and confirm that my absence will be recorded appropriately during this time.\n\nI will be in touch as soon as I am able to discuss my return. In the meantime, please direct any urgent matters to [colleague] if possible.\n\nThank you for your understanding.\n\nKind regards,\n[Your name]'},
  {num:'03',situation:'Wider circle',name:'Telling acquaintances or a group',note:'This shorter version works well for a wider group or people you do not know as closely.',
   text:'I wanted to share some difficult news with you.\n\nOur baby was born sleeping, and our family is grieving this profound loss. We are taking time away to be together and to heal, and we ask for your understanding and privacy during this period.\n\nIf you were expecting to hear from us, please know that we will be in touch again when we are ready. We are grateful for your kindness.\n\n[Your name]'},
  {num:'04',situation:'Social media',name:'Sharing publicly, on your own terms',note:'You do not have to share publicly. But if you choose to, this keeps it on your terms — honest and dignified.',
   text:'Our baby [name] was born sleeping on [date].\n\nWe are sharing this because [he / she / they] existed, and [his / her / their] life mattered deeply to us. We wanted those who have been part of our journey to know.\n\nWe are not looking for advice, and we may not respond to messages for a while. But we are grateful to have people around us who care, and we will find our way through this in our own time.\n\nThank you for holding us gently.'},
  {num:'05',situation:'Miscarriage',name:'When the loss was earlier in pregnancy',note:'Miscarriage is often suffered in silence. This template gently breaks that silence on your own terms.',
   text:'I wanted to let you know that I have recently had a miscarriage.\n\nIt has been a painful and difficult time, and I am still processing what has happened. I know that pregnancy loss is not always easy to talk about, but it has affected me deeply and I felt it was important to be honest with you rather than pretend everything is fine.\n\nI am not looking for anything specific — just for you to know, and to be patient with me as I find my way through this.\n\nThank you for listening.\n\n[Your name]'},
  {num:'06',situation:'Asking for space',name:'When messages become overwhelming',note:'Kind but clear — it sets a boundary without requiring explanation.',
   text:'Thank you for reaching out. It means a great deal to know you are thinking of us.\n\nWe are not able to respond to messages right now, and we ask that you respect our need for quiet and privacy during this time. We are not ready for visits, calls, or gatherings, and we hope you will understand.\n\nWhen we are ready to reconnect, we will reach out. Until then, please know that your kindness is felt, even in our silence.\n\n[Your name]'},
  {num:'07',situation:'Religious or community group',name:'Informing a faith or community group',note:'Adjust the language to reflect your own faith tradition. The structure works across different beliefs.',
   text:"Dear [Leader's name / Community],\n\nI am writing to share that our family has experienced the loss of our baby [name], who was born still on [date].\n\nWe are grateful for the love and support of this community, and we ask for your prayers and your patience as we grieve. We may be absent from gatherings for some time, and we hope you will understand.\n\nIf you wish to support us, the kindest thing is simply to hold us gently in your thoughts and prayers. We will reach out when we are ready.\n\nWith gratitude,\n[Your name]"},
  {num:'08',situation:'Partner or co-parent',name:'Writing together, as parents',note:'Written from both parents — acknowledges that grief looks different for each person.',
   text:'We are writing together to share that our baby [name] was born sleeping on [date].\n\nWe are heartbroken, and we are holding each other through this. Grief moves differently for each of us, and we ask for your understanding if we respond or reach out at different times, or in different ways.\n\nWe are not ready for questions about what happened, or for advice about what comes next. We are simply trying to be present with our loss.\n\nYour love and care mean everything to us. We will be in touch.\n\n[Your names]'},
  {num:'09',situation:'Healthcare provider',name:'Requesting support or a referral',note:'You are entitled to ask your GP, midwife, or hospital team for a referral to specialist bereavement support.',
   text:'Dear [Doctor / Midwife / GP],\n\nI am writing to request support following the loss of my baby [name], who was born still on [date].\n\nI am finding this period very difficult and would be grateful for a referral to a specialist bereavement counsellor or a support service for parents who have experienced pregnancy or infant loss. I would also welcome the opportunity to discuss any medical follow-up that may be appropriate.\n\nPlease let me know the best way to arrange an appointment.\n\nThank you,\n[Your name]'}
];
