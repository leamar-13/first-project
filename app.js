// ============================================
//   TRADEEDGE — app.js
// ============================================

// ---- TRADING TIPS DATA ----
const tips = [
  {
    category: "risk",
    catLabel: "Risk Management",
    title: "The 1-2% Rule",
    body: "Never risk more than 1–2% of your total account on a single trade. This ensures that even a streak of 10 losing trades won't wipe you out, keeping you in the game long enough to recover."
  },
  {
    category: "psychology",
    catLabel: "Psychology",
    title: "Control Your Emotions",
    body: "Fear and greed are your biggest enemies. Stick to your plan. If a trade makes you anxious, your position size is probably too large. Reduce size until you feel calm."
  },
  {
    category: "strategy",
    catLabel: "Strategy",
    title: "Always Use a Stop Loss",
    body: "Place your stop loss before you enter a trade — never after. A stop loss isn't optional. It defines your maximum loss and removes emotion from the exit decision."
  },
  {
    category: "analysis",
    catLabel: "Analysis",
    title: "Trade With the Trend",
    body: "The trend is your friend. In a strong uptrend, only take long setups. In a downtrend, only look short. Going against the trend dramatically lowers your probability of success."
  },
  {
    category: "risk",
    catLabel: "Risk Management",
    title: "Risk/Reward Ratio",
    body: "Only take trades where your potential reward is at least twice your risk (2:1 R/R). With a 2:1 ratio, you can be wrong 50% of the time and still be profitable overall."
  },
  {
    category: "psychology",
    catLabel: "Psychology",
    title: "Keep a Trading Journal",
    body: "Log every trade: entry, exit, reason, result, and how you felt. Reviewing your journal weekly reveals patterns — both in the market and in your own behavior — faster than anything else."
  },
  {
    category: "strategy",
    catLabel: "Strategy",
    title: "Don't Overtrade",
    body: "Quality over quantity. Waiting for A+ setups is more profitable than trading mediocre setups out of boredom. Most professionals only take 2–5 high-conviction trades per week."
  },
  {
    category: "analysis",
    catLabel: "Technical Analysis",
    title: "Respect Support & Resistance",
    body: "Price memory is real. Key support and resistance levels act as magnets. Learn to identify them on higher timeframes first, then drill down to find precise entries on lower timeframes."
  },
  {
    category: "strategy",
    catLabel: "Strategy",
    title: "Cut Losers, Let Winners Run",
    body: "The hardest discipline in trading. Most traders do the opposite — cutting winners early and holding losers hoping they come back. Train yourself to do the uncomfortable thing."
  }
];

// ---- GOLDEN RULES DATA ----
const rules = [
  {
    title: "Protect Your Capital",
    body: "Capital preservation is your #1 job. You cannot trade if you have no money. Every risk decision should start with: how do I survive if I'm wrong?"
  },
  {
    title: "Plan the Trade, Trade the Plan",
    body: "Define your entry, stop, and target before you enter. Improvising mid-trade is how money gets lost. If conditions change, exit — don't adjust your plan to justify staying in."
  },
  {
    title: "The Market Is Always Right",
    body: "Your opinion about what a stock should do is irrelevant. Price is truth. When the market moves against you, it's telling you something. Listen to it."
  },
  {
    title: "Never Average Down a Loser",
    body: "Adding to a losing position is one of the most dangerous habits in trading. It magnifies losses and turns manageable drawdowns into account-ending disasters."
  },
  {
    title: "No System Works 100% of the Time",
    body: "Every strategy has losing periods. Your edge is statistical, not certain. What separates pros from amateurs is executing consistently through the inevitable losing streaks."
  }
];

// ---- QUOTES DATA ----
const quotes = [
  { text: "The market is a device for transferring money from the impatient to the patient.", author: "Warren Buffett" },
  { text: "In trading, the goal is not to be right. The goal is to make money.", author: "Marty Schwartz" },
  { text: "It's not whether you're right or wrong, but how much you make when right and how much you lose when wrong.", author: "George Soros" },
  { text: "The key to trading success is emotional discipline. Making money has nothing to do with intelligence.", author: "Victor Sperandeo" },
  { text: "Risk comes from not knowing what you're doing.", author: "Warren Buffett" },
  { text: "The best traders have no ego. You have to swallow your pride and get out of the losses.", author: "Tom Baldwin" },
  { text: "Cut your losses short and let your profits run.", author: "Classic Trading Maxim" },
  { text: "I just wait until there is money lying in the corner, and all I have to do is go over there and pick it up.", author: "Jim Rogers" },
  { text: "Successful trading is about finding the few methods that work and then having the patience to wait for the conditions.", author: "Jack Schwager" }
];

// ---- SIMULATED MARKET DATA ----
const marketData = {
  sp500:  { base: 5842.21, id: "sp500",  changeId: "sp500-change" },
  nasdaq: { base: 18764.53, id: "nasdaq", changeId: "nasdaq-change" },
  dow:    { base: 42891.10, id: "dow",    changeId: "dow-change" },
  vix:    { base: 17.43,   id: "vix",    changeId: "vix-change" },
  btc:    { base: 97432.00, id: "btc",   changeId: "btc-change" }
};

const tickerSymbols = [
  "AAPL", "MSFT", "NVDA", "TSLA", "AMZN",
  "GOOGL", "META", "JPM", "BRK.B", "V",
  "SPY", "QQQ", "BTC", "ETH", "GLD"
];

// ---- INIT ----
document.addEventListener("DOMContentLoaded", () => {
  renderTips();
  renderRules();
  buildTicker();
  updateMarketData();
  setInterval(updateMarketData, 4000);
  updateMarketStatus();
  setupCalculator();
  setupQuotes();
});

// ---- RENDER TIPS ----
function renderTips() {
  const grid = document.getElementById("tipsGrid");
  tips.forEach((tip, i) => {
    const card = document.createElement("div");
    card.className = "tip-card";
    card.style.animationDelay = `${i * 0.08}s`;
    card.innerHTML = `
      <div class="tip-number">// TIP ${String(i + 1).padStart(2, "0")}</div>
      <span class="tip-category cat-${tip.category}">${tip.catLabel}</span>
      <h3 class="tip-title">${tip.title}</h3>
      <p class="tip-body">${tip.body}</p>
    `;
    grid.appendChild(card);
  });
}

// ---- RENDER RULES ----
function renderRules() {
  const list = document.getElementById("rulesList");
  rules.forEach((rule, i) => {
    const item = document.createElement("div");
    item.className = "rule-item";
    item.style.animationDelay = `${i * 0.1}s`;
    item.innerHTML = `
      <div class="rule-num">${String(i + 1).padStart(2, "0")}</div>
      <div class="rule-content">
        <h3>${rule.title}</h3>
        <p>${rule.body}</p>
      </div>
    `;
    list.appendChild(item);
  });
}

// ---- BUILD TICKER ----
function buildTicker() {
  const inner = document.getElementById("tickerInner");
  let html = "";
  // Duplicate for seamless loop
  for (let pass = 0; pass < 2; pass++) {
    tickerSymbols.forEach(sym => {
      const change = (Math.random() * 6 - 3).toFixed(2);
      const dir = parseFloat(change) >= 0 ? "up" : "down";
      const arrow = dir === "up" ? "▲" : "▼";
      const price = (Math.random() * 500 + 10).toFixed(2);
      html += `<span class="tick-item">${sym} <span class="${dir}">${arrow} ${Math.abs(change)}%</span> $${price}</span>`;
    });
  }
  inner.innerHTML = html;
}

// ---- MARKET DATA (SIMULATED) ----
function updateMarketData() {
  Object.values(marketData).forEach(asset => {
    const fluctuation = (Math.random() * 0.6 - 0.3) / 100;
    asset.current = asset.current
      ? asset.current * (1 + fluctuation)
      : asset.base;

    const change = ((asset.current - asset.base) / asset.base * 100).toFixed(2);
    const isPos = parseFloat(change) >= 0;

    const valEl = document.getElementById(asset.id);
    const chgEl = document.getElementById(asset.changeId);

    if (valEl) {
      const formatted = asset.base > 1000
        ? asset.current.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        : asset.current.toFixed(2);
      valEl.textContent = asset.id === "btc" ? `$${formatted}` : formatted;
    }
    if (chgEl) {
      chgEl.textContent = `${isPos ? "+" : ""}${change}%`;
      chgEl.className = `stat-change ${isPos ? "positive" : "negative"}`;
    }
  });
}

// ---- MARKET STATUS ----
function updateMarketStatus() {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  const min = now.getMinutes();
  const time = hour * 60 + min;

  const statusEl = document.getElementById("market-status");
  const dot = document.querySelector(".status-dot");

  const isWeekday = day >= 1 && day <= 5;
  const isOpen = isWeekday && time >= 570 && time < 960; // 9:30am - 4:00pm ET

  if (statusEl) statusEl.textContent = isOpen ? "MARKET OPEN" : "MARKET CLOSED";
  if (dot) dot.style.background = isOpen ? "var(--accent2)" : "var(--red)";
}

// ---- POSITION SIZE CALCULATOR ----
function setupCalculator() {
  const btn = document.getElementById("calcBtn");
  btn.addEventListener("click", () => {
    const account = parseFloat(document.getElementById("accountSize").value);
    const riskPct = parseFloat(document.getElementById("riskPercent").value);
    const entry = parseFloat(document.getElementById("entryPrice").value);
    const stop = parseFloat(document.getElementById("stopPrice").value);

    if (!account || !riskPct || !entry || !stop) {
      alert("Please fill in all fields.");
      return;
    }
    if (entry <= stop) {
      alert("Entry price must be above stop loss for a long position.");
      return;
    }

    const riskAmount = (account * riskPct) / 100;
    const riskPerShare = entry - stop;
    const shares = Math.floor(riskAmount / riskPerShare);
    const positionValue = shares * entry;

    document.getElementById("riskAmount").textContent = `$${riskAmount.toFixed(2)}`;
    document.getElementById("shareCount").textContent = `${shares} shares`;
    document.getElementById("positionValue").textContent = `$${positionValue.toLocaleString("en-US", { minimumFractionDigits: 2 })}`;

    const resultEl = document.getElementById("calcResult");
    resultEl.style.display = "block";
    resultEl.style.animation = "fadeUp 0.4s ease";
  });
}

// ---- QUOTES ----
let currentQuote = 0;

function setupQuotes() {
  const btn = document.getElementById("newQuote");
  btn.addEventListener("click", () => {
    currentQuote = (currentQuote + 1) % quotes.length;
    const q = quotes[currentQuote];
    const textEl = document.getElementById("quoteText");
    const authorEl = document.getElementById("quoteAuthor");

    textEl.style.opacity = "0";
    authorEl.style.opacity = "0";

    setTimeout(() => {
      textEl.textContent = `"${q.text}"`;
      authorEl.textContent = `— ${q.author}`;
      textEl.style.transition = "opacity 0.4s";
      authorEl.style.transition = "opacity 0.4s";
      textEl.style.opacity = "1";
      authorEl.style.opacity = "1";
    }, 200);
  });
}
