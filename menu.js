/* Menu hambúrguer no mobile — Branch Master */
(function () {
  var header = document.getElementById('site-header');
  if (!header) return;
  var nav = header.querySelector('.hdr-nav');

  var css =
    ".hdr-burger{display:none;align-items:center;justify-content:center;flex-direction:column;gap:5px;" +
      "width:44px;height:44px;padding:10px;background:none;border:0;cursor:pointer;flex-shrink:0;border-radius:8px;}" +
    ".hdr-burger span{display:block;width:22px;height:2px;background:#f7f1e8;border-radius:2px;" +
      "transition:transform .25s ease,opacity .2s ease;}" +
    ".hdr-burger[aria-expanded='true'] span:nth-child(1){transform:translateY(7px) rotate(45deg);}" +
    ".hdr-burger[aria-expanded='true'] span:nth-child(2){opacity:0;}" +
    ".hdr-burger[aria-expanded='true'] span:nth-child(3){transform:translateY(-7px) rotate(-45deg);}" +
    ".hdr-burger:focus-visible{outline:2px solid #e77318;outline-offset:2px;}" +
    "@media(max-width:760px){" +
      "#site-header{flex-wrap:wrap;align-items:center;}" +
      "#site-header .hdr-logo{margin-right:auto;}" +
      "#site-header .hdr-burger{display:flex;}" +
      "#site-header .hdr-nav,#site-header .hdr-cta{display:none!important;}" +
      "#site-header.menu-open{padding-bottom:14px;}" +
      "#site-header.menu-open .hdr-nav{display:flex!important;flex:0 0 100%;order:5;flex-direction:column;" +
        "align-items:stretch;gap:0;margin-top:8px;padding-top:8px;border-top:1px solid rgba(255,255,255,.14);}" +
      "#site-header.menu-open .hdr-nav a{font-size:16px!important;padding:13px 6px;}" +
      "#site-header.menu-open .hdr-cta{display:block!important;flex:0 0 100%;order:6;text-align:center;margin-top:8px;}" +
    "}";
  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  var btn = document.createElement('button');
  btn.className = 'hdr-burger';
  btn.type = 'button';
  btn.setAttribute('aria-label', 'Abrir menu');
  btn.setAttribute('aria-expanded', 'false');
  if (nav) { if (!nav.id) nav.id = 'hdr-nav-menu'; btn.setAttribute('aria-controls', nav.id); }
  btn.innerHTML = '<span></span><span></span><span></span>';
  header.appendChild(btn);

  function setOpen(open) {
    header.classList.toggle('menu-open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  }

  btn.addEventListener('click', function () {
    setOpen(!header.classList.contains('menu-open'));
  });

  if (nav) {
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { setOpen(false); });
    });
  }

  window.addEventListener('resize', function () {
    if (window.innerWidth > 760) setOpen(false);
  });
})();
