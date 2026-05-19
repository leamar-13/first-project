// ============================================
//   TRADEEDGE PRO — shared.js
// ============================================

// ---- NAV HTML ----
function getNavHTML(activePage) {
  const pages = [
    { href: 'tips.html',       label: 'Tips' },
    { href: 'markets.html',    label: 'Markets' },
    { href: 'calculator.html', label: 'Calculator' },
    { href: 'pricing.html',    label: 'Pricing' },
  ];
  const links = pages.map(p =>
    `<li><a href="${p.href}" class="${activePage === p.href ? 'active' : ''}">${p.label}</a></li>`
  ).join('');
  const mobileLinks = pages.map(p =>
    `<a href="${p.href}" class="${activePage === p.href ? 'active' : ''}">${p.label}</a>`
  ).join('');
  return `
  <nav class="nav">
    <a href="index.html" class="nav-brand">
      <div class="logo-icon">T</div>
      Trade<span>Edge</span> Pro
    </a>
    <ul class="nav-links">${links}</ul>
    <div class="nav-cta">
      <a href="login.html"><button class="btn-nav-login">Log In</button></a>
      <a href="pricing.html"><button class="btn-nav-start">Get Started</button></a>
    </div>
    <button class="nav-ham" id="navHam" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </nav>
  <div class="mobile-menu" id="mobileMenu">
    ${mobileLinks}
    <a href="login.html" style="color:var(--gold)">Log In / Sign Up</a>
  </div>`;
}

// ---- FOOTER HTML ----
function getFooterHTML() {
  return `
  <footer class="footer">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="nav-brand" style="font-size:1.1rem">
          <div class="logo-icon" style="width:28px;height:28px;font-size:0.9rem">T</div>
          Trade<span style="color:var(--gold)">Edge</span> Pro
        </div>
        <p>Professional-grade trading tools and market intelligence for serious traders. Built for those who treat the market as a business.</p>
      </div>
      <div class="footer-col">
        <h4>Product</h4>
        <ul>
          <li><a href="tips.html">Trading Tips</a></li>
          <li><a href="markets.html">Markets</a></li>
          <li><a href="calculator.html">Calculator</a></li>
          <li><a href="pricing.html">Pricing</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Legal</h4>
        <ul>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Disclaimer</a></li>
          <li><a href="#">Cookie Policy</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 TradeEdge Pro. All rights reserved.</span>
      <span>For educational purposes only. Not financial advice.</span>
    </div>
  </footer>`;
}

// ---- TICKER DATA ----
const TICKERS = [
  { sym: 'AAPL',  base: 213.50 }, { sym: 'MSFT',  base: 425.10 },
  { sym: 'NVDA',  base: 875.20 }, { sym: 'TSLA',  base: 248.60 },
  { sym: 'AMZN',  base: 196.80 }, { sym: 'GOOGL', base: 175.40 },
  { sym: 'META',  base: 518.30 }, { sym: 'JPM',   base: 225.70 },
  { sym: 'SPY',   base: 521.00 }, { sym: 'QQQ',   base: 441.50 },
  { sym: 'GLD',   base: 230.10 }, { sym: 'BTC',   base: 97432  },
  { sym: 'ETH',   base: 3842   }, { sym: 'V',     base: 296.40 },
  { sym: 'BRK.B', base: 441.20 },
];

function buildTicker(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  let html = '';
  for (let pass = 0; pass < 2; pass++) {
    TICKERS.forEach(t => {
      const chg = (Math.random() * 5 - 2.5).toFixed(2);
      const dir = parseFloat(chg) >= 0;
      const price = (t.base * (1 + parseFloat(chg)/100)).toFixed(2);
      html += `<span class="tick">
        <span class="sym">${t.sym}</span>
        <span>${price}</span>
        <span class="${dir ? 'up' : 'dn'}">${dir ? '▲' : '▼'} ${Math.abs(chg)}%</span>
      </span>`;
    });
  }
  el.innerHTML = html;
}

// ---- MOBILE MENU TOGGLE ----
function initMobileMenu() {
  const ham = document.getElementById('navHam');
  const menu = document.getElementById('mobileMenu');
  if (ham && menu) {
    ham.addEventListener('click', () => {
      menu.classList.toggle('open');
    });
  }
}

// ---- MARKET STATUS ----
function getMarketStatus() {
  const now = new Date();
  const day = now.getDay();
  const h = now.getHours(), m = now.getMinutes();
  const t = h * 60 + m;
  const open = day >= 1 && day <= 5 && t >= 570 && t < 960;
  return open;
}

// ---- INJECT NAV + FOOTER ----
function initPage(activePage) {
  const navEl = document.getElementById('nav-placeholder');
  const footEl = document.getElementById('footer-placeholder');
  if (navEl) navEl.innerHTML = getNavHTML(activePage);
  if (footEl) footEl.innerHTML = getFooterHTML();
  initMobileMenu();
}
