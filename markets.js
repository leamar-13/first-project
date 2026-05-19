/* markets.css */
.page-hero { background: var(--bg2); border-bottom:1px solid var(--border); padding:3.5rem 0 2rem; text-align:center; }
.page-hero h1 { font-family:var(--font-serif); font-size:clamp(2rem,4.5vw,3.2rem); margin:.5rem 0 .8rem; }
.page-hero h1 em { font-style:normal; color:var(--gold); }
.page-hero p { font-size:.9rem; color:var(--text-2); }

.market-status-bar {
  display:inline-flex; align-items:center; gap:.6rem; margin-top:1rem;
  font-family:var(--font-mono); font-size:.72rem; letter-spacing:1px;
  background:var(--surface); border:1px solid var(--border); padding:.4rem 1rem; border-radius:2rem;
}
.ms-dot { width:8px; height:8px; border-radius:50%; background:var(--green); animation:pulse 2s infinite; }
.ms-dot.closed { background:var(--red); animation:none; }
@keyframes pulse { 0%,100%{opacity:1}50%{opacity:.3} }
.ms-time { color:var(--text-3); }

.markets-main { padding:3rem 2rem; display:flex; flex-direction:column; gap:3.5rem; }
.mkt-section {}
.mkt-section-head {
  display:flex; align-items:center; justify-content:space-between;
  margin-bottom:1.2rem;
}
.mkt-section-head h2 { font-family:var(--font-serif); font-size:1.4rem; color:var(--text); }
.mkt-refresh { font-family:var(--font-mono); font-size:.68rem; color:var(--green); letter-spacing:1px; cursor:pointer; }

/* INDICES */
.indices-grid { display:grid; grid-template-columns:repeat(5,1fr); gap:1rem; }
.idx-card {
  background:var(--surface); border:1px solid var(--border); border-radius:6px; padding:1.2rem;
  transition:border-color .2s;
}
.idx-card:hover { border-color:var(--border2); }
.idx-name { font-family:var(--font-mono); font-size:.65rem; letter-spacing:2px; color:var(--text-3); text-transform:uppercase; margin-bottom:.4rem; }
.idx-value { font-family:var(--font-mono); font-size:1.3rem; font-weight:500; color:var(--text); }
.idx-chg { font-family:var(--font-mono); font-size:.75rem; margin-top:.25rem; }
.idx-chg.up { color:var(--green); } .idx-chg.dn { color:var(--red); }
.idx-mini-chart { margin-top:.8rem; height:40px; }
.idx-mini-chart svg { width:100%; height:100%; }

/* MOVERS */
.movers-wrap { display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; }
.movers-label { font-family:var(--font-mono); font-size:.7rem; letter-spacing:1.5px; color:var(--text-3); text-transform:uppercase; margin-bottom:.8rem; }
.mover-row {
  display:flex; justify-content:space-between; align-items:center;
  padding:.65rem .8rem; background:var(--surface); border:1px solid var(--border);
  border-radius:4px; margin-bottom:.5rem;
  font-family:var(--font-mono); font-size:.82rem;
}
.mover-row:last-child { margin-bottom:0; }
.mover-sym { color:var(--text); font-weight:500; min-width:60px; }
.mover-price { color:var(--text-2); }
.mover-chg { min-width:70px; text-align:right; }
.mover-chg.up { color:var(--green); } .mover-chg.dn { color:var(--red); }

/* TABLE */
.table-wrap { overflow-x:auto; border-radius:6px; border:1px solid var(--border); }
.stocks-table { width:100%; border-collapse:collapse; }
.stocks-table thead tr { background:var(--surface); }
.stocks-table th {
  font-family:var(--font-mono); font-size:.64rem; letter-spacing:1.5px; text-transform:uppercase;
  color:var(--text-3); padding:.9rem 1rem; text-align:left; border-bottom:1px solid var(--border);
  white-space:nowrap;
}
.stocks-table td {
  padding:.85rem 1rem; font-family:var(--font-mono); font-size:.8rem;
  border-bottom:1px solid var(--border); white-space:nowrap;
}
.stocks-table tbody tr { transition:background .15s; }
.stocks-table tbody tr:hover { background:var(--surface); }
.stocks-table tbody tr:last-child td { border-bottom:none; }
.td-sym { color:var(--text); font-weight:500; }
.td-name { color:var(--text-2); font-size:.76rem; }
.td-up { color:var(--green); } .td-dn { color:var(--red); }
.search-input {
  background:var(--surface); border:1px solid var(--border); color:var(--text);
  font-family:var(--font-mono); font-size:.78rem; padding:.45rem .9rem; border-radius:4px;
  transition:border-color .2s; min-width:180px;
}
.search-input:focus { border-color:var(--gold); }
.search-input::placeholder { color:var(--text-3); }

/* CRYPTO */
.crypto-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:1rem; }
.crypto-card {
  background:var(--surface); border:1px solid var(--border); border-radius:6px; padding:1.2rem;
  display:flex; flex-direction:column; gap:.3rem; transition:border-color .2s, transform .2s;
}
.crypto-card:hover { border-color:var(--border2); transform:translateY(-2px); }
.cc-icon { font-size:1.6rem; margin-bottom:.4rem; }
.cc-sym { font-family:var(--font-mono); font-size:.9rem; font-weight:500; color:var(--text); }
.cc-name { font-family:var(--font-mono); font-size:.65rem; color:var(--text-3); }
.cc-price { font-family:var(--font-mono); font-size:1.1rem; color:var(--text); margin-top:.4rem; }
.cc-chg { font-family:var(--font-mono); font-size:.75rem; }
.cc-chg.up { color:var(--green); } .cc-chg.dn { color:var(--red); }
.cc-mcap { font-family:var(--font-mono); font-size:.65rem; color:var(--text-3); margin-top:.3rem; }

/* FOREX */
.forex-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:1rem; }
.fx-card {
  background:var(--surface); border:1px solid var(--border); border-radius:6px; padding:1.2rem;
  display:flex; justify-content:space-between; align-items:center;
}
.fx-pair { font-family:var(--font-mono); font-size:.85rem; font-weight:500; color:var(--text); }
.fx-right { text-align:right; }
.fx-rate { font-family:var(--font-mono); font-size:1rem; color:var(--text); }
.fx-chg { font-family:var(--font-mono); font-size:.72rem; }
.fx-chg.up { color:var(--green); } .fx-chg.dn { color:var(--red); }

/* NEWS */
.news-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:1.2rem; }
.news-card {
  background:var(--surface); border:1px solid var(--border); border-radius:6px; overflow:hidden;
  transition:border-color .2s, transform .2s; cursor:pointer;
}
.news-card:hover { border-color:var(--border2); transform:translateY(-3px); }
.news-img { width:100%; height:140px; object-fit:cover; }
.news-body { padding:1rem; }
.news-cat { font-family:var(--font-mono); font-size:.62rem; letter-spacing:1px; color:var(--gold); text-transform:uppercase; margin-bottom:.5rem; }
.news-card h3 { font-size:.88rem; color:var(--text); line-height:1.4; margin-bottom:.5rem; }
.news-meta { font-family:var(--font-mono); font-size:.62rem; color:var(--text-3); }

@media(max-width:1024px){
  .indices-grid{grid-template-columns:repeat(3,1fr)}
  .crypto-grid{grid-template-columns:repeat(3,1fr)}
  .forex-grid{grid-template-columns:repeat(2,1fr)}
}
@media(max-width:768px){
  .indices-grid{grid-template-columns:repeat(2,1fr)}
  .movers-wrap{grid-template-columns:1fr}
  .crypto-grid{grid-template-columns:repeat(2,1fr)}
  .news-grid{grid-template-columns:1fr 1fr}
}
@media(max-width:480px){
  .indices-grid{grid-template-columns:1fr 1fr}
  .crypto-grid{grid-template-columns:1fr 1fr}
  .news-grid{grid-template-columns:1fr}
  .forex-grid{grid-template-columns:1fr 1fr}
}
