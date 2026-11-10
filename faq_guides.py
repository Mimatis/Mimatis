#!/usr/bin/env python3
"""Common-questions block + FAQPage JSON-LD for country guides (UK, Ireland, Australia, Spain EN + ES).
Every answer repeats facts already on the same page (no new claims) and links to the section it comes from.
Idempotent: block between <!-- gfaq --> and <!-- /gfaq -->, CSS in <style id="gfaq-css">, JSON-LD id="faq-ld".
The US guide keeps its own block (us_faq.py).
usage: python3 faq_guides.py [repo root]      then run: python3 site_nav.py
"""
import os, re, sys, json, html

ROOT = sys.argv[1] if len(sys.argv) > 1 else '.'
B = 'https://www.mimatis.org/'

PAGES = {
# file: (url, inLanguage, insert-before marker, eyebrow, title-html, read-more, checked line, [(q, a, anchor)])
'united-kingdom.html': (B + 'united-kingdom', 'en-GB', '<section class="doc">\n<div class="narrow">\n<h2 id="situations">',
  'Common questions', 'Quick answers for parents in the <em>UK</em>', 'Read more',
  'Answers taken from this guide. Last checked on 28 October 2026.', [
  ('What is the difference between a miscarriage and a stillbirth in the UK?',
   'Across the UK the line is 24 weeks of pregnancy. A baby born without signs of life from 24 weeks is stillborn: the birth is registered, and full maternity leave and pay apply. A loss before 24 weeks is a miscarriage. A baby born alive at any stage, who then dies, is registered as a birth and a death.', 'situations'),
  ('How long do I have to register a stillbirth?',
   'From 24 weeks, the stillbirth is registered at the register office, with your baby&rsquo;s name if you wish: within 42 days in England and Wales, 21 days in Scotland, and up to 1 year in Northern Ireland. You receive a certificate of stillbirth.', 'name'),
  ('Can I get a certificate after a miscarriage?',
   'In England, you can ask for a free baby loss certificate for a loss before 24 weeks, at any stage and at any time, with your baby&rsquo;s name if you wish. It is not a legal document, but many parents value it. In Wales, Scotland and Northern Ireland, ask your hospital or a charity: many offer a commemorative certificate.', 'name'),
  ('Do I get maternity leave after a stillbirth?',
   'Yes. After a stillbirth from 24 weeks, or if your baby was born alive and then died, the mother has 52 weeks of maternity leave, with Statutory Maternity Pay for up to 39 weeks if she qualifies, or Maternity Allowance if not. The partner has paternity leave and 2 weeks of Parental Bereavement Leave, which can be taken within 56 weeks.', 'work'),
  ('Is there help with the cost of a baby&rsquo;s funeral?',
   'Yes, in every part of the UK. In England, the Children&rsquo;s Funeral Fund pays burial or cremation fees and up to &pound;300 for a coffin, for a stillbirth from 24 weeks or a child under 18, and it is not means-tested. Wales, Scotland and Northern Ireland have their own help.', 'goodbye'),
  ('Can I have photographs of my baby?',
   'Yes. You can ask the hospital for photos, hand and foot prints, a lock of hair and a memory box. Remember My Baby offers free professional remembrance photography across the UK.', 'hospital'),
 ]),
'ireland.html': (B + 'ireland', 'en-IE', '<section class="doc">\n<div class="narrow">\n<h2 id="situations">',
  'Common questions', 'Quick answers for parents in <em>Ireland</em>', 'Read more',
  'Answers taken from this guide. Last checked on 28 October 2026.', [
  ('When is a loss called a stillbirth in Ireland?',
   'Since 16 September 2024, a baby born without signs of life from 23 weeks of pregnancy or 400 g is stillborn. The line was lowered from 24 weeks and 500 g. A loss before that line is a miscarriage. If your baby showed any sign of life, at any stage, your baby was born alive.', 'situations'),
  ('Can I register my baby&rsquo;s stillbirth with a name?',
   'Yes, from 23 weeks or 400 g. Registration is free and voluntary, with your baby&rsquo;s first name and surname, at any civil registration office. You can also do it later: stillbirths since 1995 can be registered, and earlier ones with evidence.', 'name'),
  ('What leave do parents get after a stillbirth?',
   'The mother keeps her full 26 weeks of maternity leave, with Maternity Benefit if she has enough PRSI contributions, plus 16 weeks of unpaid leave. The partner keeps the 2 weeks of paternity leave. There is no statutory bereavement leave in Ireland yet, so ask your employer about compassionate leave.', 'work'),
  ('Is there leave after a miscarriage?',
   'Your doctor can certify you as unfit for work, and statutory sick pay applies for a limited number of days a year. In July 2026 the Government approved drafting a law for 5 days of paid leave after a pregnancy loss before 23 weeks. It is not yet in force.', 'work'),
  ('What should the hospital offer us?',
   'The HSE National Standards say you should be offered time to see and hold your baby, and another chance later if you were not ready at first; memories such as hand and foot prints, a lock of hair and a memory box; photographs; and written information with a named health professional to call.', 'hospital'),
  ('Who can we talk to?',
   'F&eacute;ileac&aacute;in and A Little Lifetime Foundation offer counselling, peer support and groups, and the Miscarriage Association of Ireland runs a volunteer phone line. If you have thoughts of not wanting to live, call Pieta on 1800 247 247 or Samaritans on 116 123, free, day and night.', 'support'),
 ]),
'australia.html': (B + 'australia', 'en-AU', '<section class="doc">\n<div class="narrow">\n<h2 id="situations">',
  'Common questions', 'Quick answers for parents in <em>Australia</em>', 'Read more',
  'Answers taken from this guide. Last checked on 27 October 2026.', [
  ('When is a baby stillborn in Australia?',
   'From 20 weeks of pregnancy, or 400 grams if the weeks are not known, a baby born without signs of life is stillborn, and the birth is registered with the Registry of Births, Deaths and Marriages in your state. A loss before 20 weeks is a miscarriage and is not registered.', 'situations'),
  ('Can I get a certificate after a miscarriage?',
   'Most states offer a recognition certificate for a loss before 20 weeks, with your baby&rsquo;s name if you wish. We confirmed this in NSW, Victoria, Queensland, South Australia, Western Australia and Tasmania. It is free in Victoria, Queensland and Tasmania.', 'early'),
  ('Is there a payment after a stillbirth?',
   'You can get one of two: the Stillborn Baby Payment, a one-off, tax-free payment for families under an income limit or getting Family Tax Benefit Part A, or Parental Leave Pay, which is taxable, paid weekly and has a work test. You cannot get both for the same baby.', 'money'),
  ('How much leave can I take?',
   'Each parent can take 2 days of compassionate leave after a stillbirth or a miscarriage, paid for full-time and part-time employees and unpaid for casual employees. After a stillbirth you also keep your right to up to 12 months of unpaid parental leave, and your employer cannot cancel it.', 'work'),
  ('Can I have photographs of my baby?',
   'Yes. Heartfelt volunteer photographers come to the hospital at no cost. Call 1800 583 768, or ask the staff to call for you. Staff can also help with hand and footprints, a lock of hair and other keepsakes.', 'hospital'),
  ('Who can I call for support?',
   'Red Nose Grief and Loss answers its support line on 1300 308 307, day and night, for any loss in pregnancy or after birth. If you have thoughts of not wanting to live, call Lifeline on 13 11 14, 24 hours a day.', 'support'),
 ]),
'spain.html': (B + 'spain', 'en', '<section class="xtra" id="loss-types-wrap">',
  'Common questions', 'Quick answers for parents in <em>Spain</em>', 'Read more',
  'Answers taken from this guide. Last reviewed in October 2026.', [
  ('Is a baby who dies before birth registered in Spain?',
   'Since August 2023, babies who die before birth after 26 weeks (180 days) are entered in the Civil Registry, in the Archivo de nacidos sin vida. You may give your baby a name. Only you, the parents, can see this entry. Before 26 weeks there is no registration.', 'name'),
  ('Do we have to have a funeral?',
   'From 26 weeks, a burial or cremation is required. Before 26 weeks it is not required. If you say nothing, the hospital usually takes care of your baby, so if you would like your own farewell, tell the hospital team before you leave.', 'goodbye'),
  ('Is there maternity leave after a stillbirth in Spain?',
   'From 26 weeks, the birth mother has full birth leave, paid by the Seguridad Social. It is not shortened because your baby died, and the first 6 weeks are compulsory rest. Before 26 weeks, your family doctor can give you sick leave (baja m&eacute;dica).', 'work'),
  ('Does my partner get leave?',
   'At the moment, partners are not entitled to birth leave when a baby dies before birth; the Supreme Court confirmed this in February 2026. If your baby was born alive and then died, both parents have full birth leave. Your work agreement (convenio) may give extra days.', 'work'),
  ('What can we ask for at the hospital?',
   'To see and hold your baby for as long as you need, to call your baby by name and dress them, a private room away from newborn babies, a cold cot where the hospital has one, and memories: photos, hand and foot prints, a lock of hair and a memory box.', 'hospital'),
  ('Where can I find support in Spain?',
   'Associations such as Umamanita, and support groups in many regions, help parents after any loss, including early loss. If you are in danger or thinking about ending your life, call 112 or 024, free, 24 hours a day.', 'support'),
 ]),
'es/espana.html': (B + 'es/espana', 'es', '<section class="xtra" id="loss-types-wrap">',
  'Preguntas frecuentes', 'Respuestas r&aacute;pidas para familias en <em>Espa&ntilde;a</em>', 'Leer m&aacute;s',
  'Respuestas tomadas de esta gu&iacute;a. &Uacute;ltima revisi&oacute;n: octubre de 2026.', [
  ('&iquest;Se inscribe en el Registro Civil a un beb&eacute; que muere antes de nacer?',
   'Desde agosto de 2023, los beb&eacute;s que mueren antes de nacer tras 26 semanas (180 d&iacute;as) se inscriben en el Registro Civil, en el Archivo de nacidos sin vida. Puedes darle un nombre a tu beb&eacute;. Solo vosotros, los padres, pod&eacute;is ver esta inscripci&oacute;n. Antes de las 26 semanas no hay inscripci&oacute;n.', 'nombre'),
  ('&iquest;Es obligatorio hacer un entierro o una incineraci&oacute;n?',
   'Desde las 26 semanas, s&iacute;. Antes de las 26 semanas no es obligatorio. Si no dices nada, el hospital suele ocuparse de tu beb&eacute;, as&iacute; que si quieres tu propia despedida, d&iacute;selo al equipo del hospital antes del alta.', 'despedida'),
  ('&iquest;Hay permiso de maternidad tras una muerte fetal?',
   'Desde las 26 semanas, la madre biol&oacute;gica tiene el permiso por nacimiento completo, pagado por la Seguridad Social. No se acorta porque tu beb&eacute; haya muerto, y las primeras 6 semanas son de descanso obligatorio. Antes de las 26 semanas, tu m&eacute;dico de cabecera puede darte la baja m&eacute;dica.', 'trabajo'),
  ('&iquest;Tiene permiso mi pareja?',
   'Por ahora, la pareja no tiene derecho al permiso por nacimiento cuando el beb&eacute; muere antes de nacer; el Tribunal Supremo lo confirm&oacute; en febrero de 2026. Si tu beb&eacute; naci&oacute; con vida y despu&eacute;s muri&oacute;, los dos progenitores tienen el permiso completo. Tu convenio puede dar d&iacute;as adicionales.', 'trabajo'),
  ('&iquest;Qu&eacute; podemos pedir en el hospital?',
   'Ver y abrazar a tu beb&eacute; el tiempo que necesites, llamarle por su nombre y vestirle, una habitaci&oacute;n individual lejos de los reci&eacute;n nacidos, una cuna de fr&iacute;o si el hospital la tiene, y recuerdos: fotos, huellas de manos y pies, un mech&oacute;n de pelo y una caja de recuerdos.', 'hospital'),
  ('&iquest;D&oacute;nde encuentro apoyo en Espa&ntilde;a?',
   'Asociaciones como Umamanita y grupos de apoyo en muchas comunidades acompa&ntilde;an a las familias tras cualquier p&eacute;rdida, tambi&eacute;n temprana. Si est&aacute;s en peligro o piensas en quitarte la vida, llama al 112 o al 024, gratis, las 24 horas.', 'apoyo'),
 ]),
}

CSS = """<style id="gfaq-css">
.gfaq{background:#fff;padding:72px 0 56px;border-top:1px solid var(--border,#E8E4DF)}
.gfaq .gfaq-in{max-width:1080px;margin:0 auto;padding:0 24px}
.gfaq .gfaq-eb{display:flex;align-items:center;gap:12px;font-family:'Montserrat',sans-serif;font-size:.72rem;font-weight:600;letter-spacing:.26em;text-transform:uppercase;color:var(--green,#0097B2);margin:0 0 14px}
.gfaq .gfaq-eb:before{content:"";width:28px;height:2px;background:var(--green,#0097B2)}
.gfaq h2{font-family:'Inter',sans-serif;font-weight:700;font-size:clamp(1.7rem,3.2vw,2.3rem);letter-spacing:-.02em;line-height:1.15;color:var(--ink,#1E1E1E);margin:0 0 28px}
.gfaq h2 em{color:var(--green-dark,#00708A);font-style:italic}
.gfaq-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.gfaq-q{border:1px solid var(--border,#E8E4DF);border-top:3px solid var(--green,#0097B2);border-radius:3px;padding:22px 24px;background:#fff}
.gfaq-q h3{font-family:'Inter',sans-serif;font-size:1.04rem;font-weight:600;line-height:1.35;color:var(--ink,#1E1E1E);margin:0 0 10px}
.gfaq-q p{font-family:'Montserrat',sans-serif;font-size:.92rem;line-height:1.75;color:var(--mid,#2B2B29);margin:0}
.gfaq-q a{display:inline-block;margin-top:10px;font-family:'Montserrat',sans-serif;font-size:.82rem;font-weight:600;color:var(--green-dark,#00708A);text-decoration:none}
.gfaq-q a:hover{text-decoration:underline}
.gfaq-note{font-family:'Montserrat',sans-serif;font-size:.8rem;color:var(--soft,#5C5C58);margin:20px 0 0}
@media(max-width:760px){.gfaq{padding:52px 0 40px}.gfaq-grid{grid-template-columns:1fr}.gfaq-q{padding:18px}}
</style>
"""


def plain(s):
    return html.unescape(re.sub(r'<[^>]+>', '', s))


def build(f, h):
    url, lang, marker, eb, title, more, note, qs = PAGES[f]
    ids = set(re.findall(r'id="([^"]+)"', h))
    for _, _, a in qs:
        assert a in ids, (f, a)
    # clean previous run
    h = re.sub(r'<!-- gfaq -->.*?<!-- /gfaq -->\n', '', h, flags=re.S)
    h = re.sub(r'<style id="gfaq-css">.*?</style>\n', '', h, flags=re.S)
    h = re.sub(r'<script type="application/ld\+json" id="faq-ld">.*?</script>\n', '', h, flags=re.S)
    cards = ''.join('<div class="gfaq-q"><h3>%s</h3><p>%s</p><a href="#%s">%s &rarr;</a></div>' % (q, a, anc, more) for q, a, anc in qs)
    block = ('<!-- gfaq --><section class="gfaq" id="questions" aria-labelledby="gfaq-h"><div class="gfaq-in">'
             '<p class="gfaq-eb">%s</p><h2 id="gfaq-h">%s</h2><div class="gfaq-grid">%s</div>'
             '<p class="gfaq-note">%s</p></div></section><!-- /gfaq -->\n') % (eb, title, cards, note)
    assert h.count(marker) == 1, (f, 'marker')
    h = h.replace(marker, block + marker, 1)
    ld = {'@context': 'https://schema.org', '@type': 'FAQPage', 'url': url, 'inLanguage': lang,
          'mainEntity': [{'@type': 'Question', 'name': plain(q), 'acceptedAnswer': {'@type': 'Answer', 'text': plain(a)}} for q, a, _ in qs]}
    s = json.dumps(ld, ensure_ascii=False).replace('</', '<\\/')
    h = h.replace('</head>', CSS + '<script type="application/ld+json" id="faq-ld">%s</script>\n</head>' % s, 1)
    return h


if __name__ == '__main__':
    for f in PAGES:
        p = os.path.join(ROOT, f)
        h = build(f, open(p, encoding='utf-8').read())
        assert h.count('<div') == h.count('</div>'), f
        assert len(re.findall(r'<section[\s>]', h)) == h.count('</section>'), f
        assert h.count('id="questions"') == 1, f
        json.loads(re.search(r'id="faq-ld">(.*?)</script>', h, re.S).group(1).replace('<\\/', '</'))
        open(p, 'w', encoding='utf-8').write(h)
        print(f, 'ok')
