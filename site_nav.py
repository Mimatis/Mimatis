#!/usr/bin/env python3
"""Put the landing-page navigation bar on every static page of mimatis.org.

Run from the repo root after any page generator (gen.py, build_guide.py,
country builders, events page):  python3 site_nav.py

Idempotent: the bar lives between <!-- mmn --> and <!-- /mmn --> markers and
its CSS in <style id="mmn-css">, both replaced on every run. On first run the
old page header (<header class="sn"> or the guide <nav>) is removed and any
language switcher it held is kept in a small bar under the new header.
"""
import re
import subprocess
import sys

IG = 'https://www.instagram.com/mimatis.community/'

# (label, href, section key) — same items and order as the landing page menu
LINKS = [
    ('Find Help', '/#help', 'help'),
    ('Garden', '/#garden', 'garden'),
    ('Research', '/research', 'research'),
    ('Who We Are', '/about', 'about'),
    ('Journal &amp; Remembrance', '/journal', 'journal'),
    ('Events', '/events', 'events'),
    ('Partner with us', '/#action', 'action'),
]
MOBILE = [('Home', '/', 'home')] + LINKS + [
    ('Privacy Policy', '/#privacy', 'privacy'),
    ('Legal Notice', '/#legal', 'legal'),
]

IG_SVG = ('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" '
          'stroke-width="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/>'
          '<circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>')

CSS = """<style id="mmn-css">
/* MIMATIS site navigation: identical to the landing page menu (site_nav.py) */
html{scroll-padding-top:64px}
#mmn{position:sticky;top:0;left:0;right:0;z-index:300;height:64px;box-sizing:border-box;background:rgba(255,255,255,0.97);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);border-bottom:1px solid rgba(30,30,30,0.08);display:flex;align-items:center;justify-content:space-between;padding:0 48px;margin:0;direction:ltr}
#mmn .mmn-logo{font-family:'Inter',sans-serif;font-size:17.6px;font-weight:400;letter-spacing:.22em;text-transform:uppercase;color:#00708A;text-decoration:none;line-height:1}
#mmn .mmn-links{display:flex;gap:28px;align-items:center}
#mmn .mmn-links a{font-family:'Montserrat',sans-serif;font-size:10.08px;font-weight:400;letter-spacing:.15em;text-transform:uppercase;color:#2B2B29;text-decoration:none;white-space:nowrap;line-height:1.85;transition:color .2s}
#mmn .mmn-links a:hover{color:#00708A;text-decoration:none}
#mmn .mmn-links a.active{color:#1E1E1E;border-bottom:2px solid #0097B2;padding-bottom:2px}
#mmn .mmn-links a.mmn-ig{display:inline-flex;color:#2B2B29}
#mmn .mmn-links a.mmn-ig:hover{color:#00708A}
#mmn .mmn-hbg{display:none;flex-direction:column;gap:5px;background:none;border:none;cursor:pointer;padding:4px;margin:0;width:auto;height:auto;box-shadow:none}
#mmn .mmn-hbg span{display:block;width:22px;height:1.5px;background:#00708A;transition:all .3s}
#mmn .mmn-hbg.open span:nth-child(1){transform:translateY(6.5px) rotate(45deg)}
#mmn .mmn-hbg.open span:nth-child(2){opacity:0}
#mmn .mmn-hbg.open span:nth-child(3){transform:translateY(-6.5px) rotate(-45deg)}
#mmn-mob{display:none;position:fixed;top:64px;left:0;right:0;bottom:0;background:#fff;z-index:299;flex-direction:column;align-items:center;justify-content:center;gap:28px;padding:32px;overflow-y:auto;box-sizing:border-box}
#mmn-mob.open{display:flex}
#mmn-mob a{font-family:'Inter',sans-serif;font-size:24px;font-style:italic;font-weight:400;color:#00708A;text-decoration:none;line-height:1.3}
#mmn-mob a:hover{color:#0097B2}
.mmn-langbar{display:flex;justify-content:flex-end;padding:12px 48px 0}
.mmn-langbar .navr{display:flex;gap:12px;align-items:center;font-size:.78rem}
.jump,.readbar{top:64px!important}
@media(max-width:1080px){#mmn .mmn-links{display:none}#mmn .mmn-hbg{display:flex}}
@media(max-width:640px){#mmn{padding:0 20px}.mmn-langbar{padding:12px 20px 0}}
</style>
"""

JS = """<script>(function(){var b=document.getElementById('mmn-hbg'),m=document.getElementById('mmn-mob');if(!b||!m)return;function s(o){m.classList.toggle('open',o);b.classList.toggle('open',o);b.setAttribute('aria-expanded',o?'true':'false');document.body.style.overflow=o?'hidden':''}b.addEventListener('click',function(){s(!m.classList.contains('open'))});m.addEventListener('click',function(e){if(e.target.tagName==='A')s(false)});document.addEventListener('keydown',function(e){if(e.key==='Escape'&&m.classList.contains('open')){s(false);b.focus()}})})();</script>"""


def section_of(path):
    if path in ('research.html',):
        return 'research'
    if path == 'about.html':
        return 'about'
    if path == 'events.html':
        return 'events'
    if path == 'journal.html' or path.startswith('journal/'):
        return 'journal'
    if path == 'guidance.html' or path.startswith('guidance/'):
        return None
    return 'help'  # country guides and their language versions


def header_html(active, lang_html):
    links = []
    for label, href, key in LINKS:
        cur = ' class="active" aria-current="page"' if key == active else ''
        links.append(f'<a href="{href}"{cur}>{label}</a>')
    links.append(f'<a class="mmn-ig" href="{IG}" target="_blank" rel="noopener" aria-label="MIMATIS on Instagram" title="Instagram">{IG_SVG}</a>')
    mob = ''.join(f'<a href="{h}">{l}</a>' for l, h, _ in MOBILE)
    mob += f'<a href="{IG}" target="_blank" rel="noopener">Instagram</a>'
    out = ('<!-- mmn -->\n'
           '<header id="mmn"><a class="mmn-logo" href="/">MIMATIS</a>'
           '<div class="mmn-links" role="navigation" aria-label="Main">' + ''.join(links) + '</div>'
           '<button class="mmn-hbg" id="mmn-hbg" type="button" aria-label="Menu" aria-expanded="false" aria-controls="mmn-mob"><span></span><span></span><span></span></button>'
           '</header>\n'
           '<div id="mmn-mob" aria-label="Menu">' + mob + '</div>\n' + JS + '\n')
    if lang_html:
        out += '<div class="mmn-langbar"><div class="navr">' + lang_html + '</div></div>\n'
    out += '<!-- /mmn -->'
    return out


LANG_RE = re.compile(r'<details class="langs">.*?</details>|<a class="lang"[^>]*>.*?</a>', re.S)


def process(path, t):
    # previous run: take the language switcher back out of our own block
    m = re.search(r'<!-- mmn -->.*?<!-- /mmn -->', t, re.S)
    if m:
        lang = ''.join(LANG_RE.findall(m.group(0)))
        t = t[:m.start()] + '\x00MMN\x00' + t[m.end():]
    else:
        body = re.search(r'<body[^>]*>', t)
        if not body:
            return None
        start = body.end()
        old = re.compile(r'\s*(<header class="sn">.*?</header>|<nav>.*?</nav>)', re.S).match(t, start)
        if not old:
            return None
        lang = ''.join(LANG_RE.findall(old.group(1)))
        t = t[:start] + '\n\x00MMN\x00' + t[old.end():]
    t = t.replace('\x00MMN\x00', header_html(section_of(path), lang))
    t = re.sub(r'<style id="mmn-css">.*?</style>\n?', '', t, flags=re.S)
    t = t.replace('</head>', CSS + '</head>', 1)
    return t


def main(root='.'):
    files = subprocess.run(['git', '-C', root, 'ls-files', '*.html'], capture_output=True, text=True).stdout.split()
    done, skipped = [], []
    for f in files:
        if f in ('index.html', 'mimatis_books.html'):
            continue
        p = f'{root}/{f}'
        t = open(p, encoding='utf-8').read()
        new = process(f, t)
        if new is None:
            skipped.append(f)
            continue
        if new != t:
            open(p, 'w', encoding='utf-8').write(new)
        done.append(f)
    print(f'{len(done)} pages have the site menu; skipped: {skipped}')


if __name__ == '__main__':
    main(sys.argv[1] if len(sys.argv) > 1 else '.')
