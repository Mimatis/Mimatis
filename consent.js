/* MIMATIS cookie notice + Google tag (Google Analytics 4).
   Nothing from Google loads, and no cookie is set, until the visitor clicks "Accept".
   Runs only on the live site (mimatis.org); add ?cc=1 to a URL to test it elsewhere.
   Conversions: window.mimatisTrack('newsletter' | 'garden') sends GA4 events
   sign_up / plant_flower. For Google Ads conversion labels, fill CONVERSIONS. */
(function () {
  var ID = 'G-1F4W2655FX';
  var CONVERSIONS = { newsletter: '', garden: '' };
  var KEY = 'mimatis_consent';
  var host = location.hostname;
  var live = host === 'www.mimatis.org' || host === 'mimatis.org' || /[?&]cc=1\b/.test(location.search);
  var loaded = false;

  function read() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function save(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }

  function load() {
    if (loaded) return;
    loaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('consent', 'default', { ad_storage: 'granted', analytics_storage: 'granted', ad_user_data: 'granted', ad_personalization: 'denied' });
    window.gtag('js', new Date());
    window.gtag('config', ID);
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(ID);
    document.head.appendChild(s);
  }

  window.mimatisTrack = function (name) {
    if (!loaded || typeof window.gtag !== 'function') return;
    try {
      if (name === 'instagram') { window.gtag('event', 'instagram_click', { link_url: 'instagram.com/mimatis.community' }); return; }
      window.gtag('event', name === 'newsletter' ? 'sign_up' : 'plant_flower', { method: name });
      var label = CONVERSIONS[name];
      if (label) window.gtag('event', 'conversion', { send_to: label });
    } catch (e) {}
  };

  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('a[href*="instagram.com/mimatis.community"]') : null;
    if (a) window.mimatisTrack('instagram');
  });

  if (!live) {
    window.mimatisCookieSettings = function () {};
    window.mimatisConsent = function () {};
    return;
  }

  var CSS =
    '#cc-bar{position:fixed;left:16px;right:16px;bottom:16px;z-index:9999;max-width:760px;margin:0 auto;background:#fff;border:1px solid #E0DDD5;padding:1.1rem 1.25rem;display:flex;gap:1rem;align-items:center;justify-content:space-between;flex-wrap:wrap;font-family:Montserrat,sans-serif}' +
    '#cc-bar[hidden]{display:none}' +
    '#cc-bar p{font-size:.8rem;line-height:1.7;color:#2B2B29;flex:1 1 320px;margin:0}' +
    '#cc-bar a{color:#00708A}' +
    '#cc-bar .cc-btns{display:flex;gap:.6rem}' +
    '#cc-bar button{font-family:Montserrat,sans-serif;font-size:.72rem;letter-spacing:.08em;text-transform:uppercase;padding:.65rem 1.1rem;border-radius:3px;cursor:pointer;border:1px solid #0097B2}' +
    '#cc-bar .cc-yes{background:#0097B2;color:#fff}' +
    '#cc-bar .cc-no{background:#fff;color:#00708A}' +
    '.cc-settings{background:none;border:0;padding:0;font:inherit;color:inherit;cursor:pointer;text-decoration:underline}';

  function bar() { return document.getElementById('cc-bar'); }
  function show(on) { var b = bar(); if (b) b.hidden = !on; }

  window.mimatisConsent = function (yes) {
    save(yes ? 'granted' : 'denied');
    show(false);
    if (yes) load();
    else if (loaded) location.reload();
  };
  window.mimatisCookieSettings = function () { show(true); };

  function build() {
    var st = document.createElement('style');
    st.textContent = CSS;
    document.head.appendChild(st);

    var b = document.createElement('div');
    b.id = 'cc-bar';
    b.setAttribute('role', 'dialog');
    b.setAttribute('aria-live', 'polite');
    b.setAttribute('aria-label', 'Cookie choice');
    b.hidden = true;
    b.innerHTML =
      '<p>MIMATIS would like to use Google cookies to count visits and sign-ups, so we know whether our work reaches parents who need help. Nothing is measured unless you accept. <a href="/#privacy" id="cc-privacy">Privacy policy</a></p>' +
      '<div class="cc-btns"><button type="button" class="cc-no">Decline</button><button type="button" class="cc-yes">Accept</button></div>';
    document.body.appendChild(b);
    b.querySelector('.cc-no').addEventListener('click', function () { window.mimatisConsent(false); });
    b.querySelector('.cc-yes').addEventListener('click', function () { window.mimatisConsent(true); });
    b.querySelector('#cc-privacy').addEventListener('click', function (e) {
      if (typeof window.showPage === 'function') { e.preventDefault(); window.showPage('privacy'); }
    });

    // "Cookie settings" link: the main page has its own; other pages get one in the footer.
    var link = document.getElementById('cookie-settings-link');
    if (link) {
      link.style.display = '';
    } else {
      var f = document.querySelector('footer');
      if (f) {
        var p = document.createElement('div');
        p.style.marginTop = '.75rem';
        p.innerHTML = '<button type="button" class="cc-settings" id="cookie-settings-link">Cookie settings</button>';
        f.appendChild(p);
        p.querySelector('button').addEventListener('click', window.mimatisCookieSettings);
      }
    }

    var c = read();
    if (c === 'granted') load();
    else if (c !== 'denied') show(true);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build);
  else build();
})();
