#!/usr/bin/env python3
"""Search titles and descriptions based on Google Search Console (3 months to 8 Nov 2026).
Targets pages with many impressions, a good position (about 4-15) and a low click rate, and matches the words parents search.
Every description repeats facts already on that page. Updates <title>, meta description, og:title/description,
twitter:title/description. Idempotent. usage: python3 seo_titles.py [repo root]
NOTE: the page generators (gen.py, guide builders, us_faq.py, article builders) still hold the old strings;
re-run this script after regenerating any of these pages."""
import os, re, sys, html
ROOT = sys.argv[1] if len(sys.argv) > 1 else '.'

M = {
'united-states.html': ('Death Certificate After a Miscarriage? US Rights &amp; Leave | MIMATIS',
  'Usually not before 20 weeks, but many states offer a certificate of stillbirth. FMLA leave, funerals and free remembrance photos, checked state by state.'),
'germany.html': ('Miscarriage &amp; Stillbirth in Germany: Rights &amp; Support | MIMATIS',
  'Your rights in Germany after miscarriage or stillbirth: the 500 g and week 24 line, the right to a burial, maternity protection, your baby&rsquo;s name, and support.'),
'australia.html': ('Miscarriage &amp; Stillbirth in Australia: Leave, Pay &amp; Support | MIMATIS',
  '2 days compassionate leave after a miscarriage or stillbirth, the Stillborn Baby Payment, registering your baby from 20 weeks, and support day and night.'),
'es/espana.html': ('Muerte gestacional en Espa&ntilde;a: permiso, registro y apoyo | MIMATIS',
  'Desde las 26 semanas: permiso por nacimiento completo, inscripci&oacute;n con nombre y entierro o incineraci&oacute;n. Antes, baja m&eacute;dica. Apoyo en toda Espa&ntilde;a.'),
'it/italia.html': ('Aborto spontaneo e morte in utero in Italia: diritti e aiuto | MIMATIS',
  'Dopo un aborto spontaneo o una morte in utero in Italia: sepoltura, il nome del bambino, congedo di maternit&agrave; e di paternit&agrave;, e dove trovare sostegno.'),
'nl/nederland.html': ('Verlof na een miskraam of stilgeboorte in Nederland | MIMATIS',
  'Miskraam: ziekmelden als dat nodig is. Stilgeboorte vanaf 24 weken: 16 weken bevallingsverlof, geboorteverlof voor de partner, aangifte en uitvaart.'),
'de/deutschland.html': ('Sternenkind, Totgeburt, Fehlgeburt: Bestattung &amp; Rechte | MIMATIS',
  'Ab 500 g oder der 24. Woche gilt ein Baby als Totgeburt. Bestattung ist in jedem Bundesland Ihr Recht. Mutterschutz, Namen eintragen und Hilfe.'),
'da/danmark.html': ('Sorgorlov efter d&oslash;df&oslash;dsel og abort i Danmark | MIMATIS',
  'Hver for&aelig;lder kan holde op til 26 ugers sorgorlov efter en d&oslash;df&oslash;dsel. F&oslash;r 22 uger: sygemelding. Begravelse, jeres barns navn og st&oslash;tte.'),
'sv/sverige.html': ('Missfall och d&ouml;df&ouml;tt barn i Sverige: sorgedagar och st&ouml;d | MIMATIS',
  'F&ouml;r&auml;ldrapenning efter d&ouml;df&ouml;dsel, 10 dagar och 10 sorgedagar f&ouml;r den andra f&ouml;r&auml;ldern, gravplats utan kostnad, barnets namn och st&ouml;d.'),
'journal/charles-darwin-and-annie.html': ('Annie Darwin: Charles Darwin&rsquo;s Daughter and His Grief | MIMATIS Journal',
  'Anne Elizabeth Darwin died in April 1851, aged ten. What Charles Darwin&rsquo;s private letters reveal about grief, love and the limits of reason.'),
'journal/memory-boxes.html': ('What Is a Memory Box? Meaning and Ideas After Baby Loss | MIMATIS',
  'A memory box is a small box where parents keep things connected to their baby. What it means, what to put in it, and why it helps after baby loss.'),
'guidance/your-body-after-loss.html': ('Physical Recovery After Stillbirth or Neonatal Death | MIMATIS',
  'Your body after stillbirth or neonatal death: milk coming in, bleeding, stitches, caesarean recovery, your first period, and when to seek help.'),
'guidance/what-to-say.html': ('What to Say to Parents After the Loss of a Baby | MIMATIS',
  'Words that help, and phrases to avoid, when a friend, relative or colleague loses a baby. Say their baby&rsquo;s name, check in weeks later, remember key dates.'),
}


def sub_attr(h, pat, val):
    return re.sub(pat, lambda m: m.group(1) + val, h, count=1)


if __name__ == '__main__':
    for f, (t, d) in M.items():
        assert len(html.unescape(d)) <= 160, (f, len(html.unescape(d)))
        p = os.path.join(ROOT, f)
        h = open(p, encoding='utf-8').read()
        n0 = h.count('<title>')
        h = re.sub(r'<title>.*?</title>', '<title>%s</title>' % t, h, count=1, flags=re.S)
        for pat in [r'(<meta name="description" content=")[^"]*', r'(<meta property="og:description" content=")[^"]*',
                    r'(<meta name="twitter:description" content=")[^"]*']:
            h = sub_attr(h, pat, d)
        for pat in [r'(<meta property="og:title" content=")[^"]*', r'(<meta name="twitter:title" content=")[^"]*']:
            h = sub_attr(h, pat, t)
        assert n0 == 1 and h.count('<div') == h.count('</div>'), f
        open(p, 'w', encoding='utf-8').write(h)
        print('%-40s %3d %3d' % (f, len(html.unescape(t)), len(html.unescape(d))))
