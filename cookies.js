/* Barra de consentimento de cookies — Branch Master (LGPD) */
(function () {
  var KEY = 'bm-cookie-consent';
  try { if (localStorage.getItem(KEY)) return; } catch (e) { /* localStorage indisponível: mostra mesmo assim */ }

  var css =
    "#cookie-bar{position:fixed;left:50%;bottom:20px;transform:translateX(-50%);" +
      "width:calc(100% - 32px);max-width:900px;z-index:300;box-sizing:border-box;" +
      "display:flex;align-items:center;gap:20px;padding:18px 22px;" +
      "background:#ffffff;border:1px solid #e7e7ea;border-radius:16px;" +
      "box-shadow:0 12px 40px rgba(5,21,49,.18),0 4px 12px rgba(5,21,49,.10);" +
      "font-family:'IBM Plex Sans',system-ui,-apple-system,'Segoe UI',sans-serif;" +
      "opacity:1;animation:ckIn .35s ease;}" +
    "@keyframes ckIn{from{transform:translateX(-50%) translateY(24px);}" +
      "to{transform:translateX(-50%) translateY(0);}}" +
    "#cookie-bar.ck-hide{opacity:0;transform:translateX(-50%) translateY(16px);" +
      "transition:opacity .3s ease,transform .3s ease;animation:none;}" +
    "#cookie-bar p{margin:0;flex:1;font-size:14px;line-height:1.55;color:#33405a;}" +
    "#cookie-bar p strong{color:#051531;font-weight:600;}" +
    "#cookie-bar .ck-actions{display:flex;gap:10px;flex-shrink:0;}" +
    "#cookie-bar button{font-family:inherit;font-weight:600;font-size:14px;cursor:pointer;" +
      "border-radius:10px;padding:11px 20px;border:1px solid transparent;white-space:nowrap;}" +
    "#cookie-bar .ck-accept{background:#e77318;color:#051531;}" +
    "#cookie-bar .ck-accept:hover{background:#d9660c;}" +
    "#cookie-bar .ck-reject{background:transparent;color:#33405a;border-color:#cfd2da;}" +
    "#cookie-bar .ck-reject:hover{border-color:#051531;color:#051531;}" +
    "#cookie-bar button:focus-visible{outline:2px solid #e77318;outline-offset:2px;}" +
    "@media(max-width:640px){#cookie-bar{flex-direction:column;align-items:stretch;gap:14px;padding:16px 18px;bottom:16px;}" +
      "#cookie-bar .ck-actions button{flex:1;}}";

  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  var bar = document.createElement('div');
  bar.id = 'cookie-bar';
  bar.setAttribute('role', 'dialog');
  bar.setAttribute('aria-live', 'polite');
  bar.setAttribute('aria-label', 'Aviso de cookies');
  bar.innerHTML =
    '<p><strong>Este site usa cookies.</strong> Utilizamos cookies para melhorar sua experiência de navegação. Você pode aceitar ou recusar.</p>' +
    '<div class="ck-actions">' +
      '<button type="button" class="ck-reject">Recusar</button>' +
      '<button type="button" class="ck-accept">Aceitar</button>' +
    '</div>';
  document.body.appendChild(bar);

  // Localiza o botão flutuante do WhatsApp para não ficar coberto no mobile
  var wa = null, links = document.getElementsByTagName('a');
  for (var i = 0; i < links.length; i++) {
    if (/wa\.me/.test(links[i].href || '') && getComputedStyle(links[i]).position === 'fixed') { wa = links[i]; break; }
  }
  var origWaBottom = wa ? wa.style.bottom : null;

  function positionWa() {
    if (!wa) return;
    if (window.innerWidth <= 640 && bar.parentNode) {
      wa.style.bottom = (bar.offsetHeight + 30) + 'px';
    } else {
      wa.style.bottom = origWaBottom || '';
    }
  }
  positionWa();
  window.addEventListener('resize', positionWa);

  function decide(value) {
    try { localStorage.setItem(KEY, value); } catch (e) {}
    if (wa) wa.style.bottom = origWaBottom || '';
    window.removeEventListener('resize', positionWa);
    bar.classList.add('ck-hide');
    setTimeout(function () { if (bar.parentNode) bar.parentNode.removeChild(bar); }, 320);
  }

  bar.querySelector('.ck-accept').addEventListener('click', function () { decide('accepted'); });
  bar.querySelector('.ck-reject').addEventListener('click', function () { decide('rejected'); });
})();
