/* pricing.css */
.page-hero { background:var(--bg2); border-bottom:1px solid var(--border); padding:3.5rem 0 2.5rem; text-align:center; }
.page-hero h1 { font-family:var(--font-serif); font-size:clamp(2rem,4.5vw,3.2rem); margin:.5rem 0 .8rem; }
.page-hero h1 em { font-style:normal; color:var(--gold); }
.page-hero p { font-size:.9rem; color:var(--text-2); margin-bottom:1.5rem; }

.billing-toggle {
  display:inline-flex; background:var(--surface); border:1px solid var(--border);
  border-radius:2rem; padding:.25rem; gap:.25rem;
}
.bt-btn {
  font-family:var(--font-mono); font-size:.72rem; letter-spacing:1px; text-transform:uppercase;
  padding:.45rem 1.2rem; border-radius:2rem; background:transparent; color:var(--text-3);
  transition:all .2s; cursor:pointer; border:none; display:flex; align-items:center; gap:.4rem;
}
.bt-btn.active { background:var(--gold); color:#000; }
.save-badge {
  background:var(--green); color:#000; font-size:.58rem; padding:.1rem .4rem;
  border-radius:2rem; font-weight:700;
}

.pricing-main { padding:3rem 2rem 5rem; }

/* PLANS */
.plans-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:1.5rem; margin-bottom:4rem; align-items:start; }
.plan-card {
  background:var(--surface); border:1px solid var(--border);
  border-radius:8px; padding:2rem; position:relative;
  transition:border-color .2s, transform .2s;
}
.plan-card:hover { border-color:var(--border2); transform:translateY(-4px); }
.plan-popular {
  border-color:var(--gold-dim);
  background:linear-gradient(160deg, var(--surface) 0%, var(--surface2) 100%);
  transform:scale(1.02);
}
.plan-popular:hover { transform:scale(1.02) translateY(-4px); }
.popular-badge {
  position:absolute; top:-1px; left:50%; transform:translateX(-50%);
  background:var(--gold); color:#000; font-family:var(--font-mono);
  font-size:.62rem; letter-spacing:1px; text-transform:uppercase;
  padding:.25rem .9rem; border-radius:0 0 4px 4px;
}

.plan-head { margin-bottom:1.5rem; }
.plan-name { font-family:var(--font-mono); font-size:.7rem; letter-spacing:2px; color:var(--text-3); text-transform:uppercase; display:block; margin-bottom:.6rem; }
.plan-price { display:flex; align-items:baseline; gap:.2rem; margin-bottom:.8rem; }
.pp-amount { font-family:var(--font-serif); font-size:3rem; color:var(--text); font-weight:700; }
.pp-per { font-family:var(--font-mono); font-size:.8rem; color:var(--text-3); }
.plan-desc { font-size:.83rem; color:var(--text-2); line-height:1.6; }

.plan-btn { width:100%; justify-content:center; margin-bottom:1.5rem; display:flex; }

.plan-features { list-style:none; display:flex; flex-direction:column; gap:.55rem; }
.plan-features li { font-size:.83rem; padding-left:1.3rem; position:relative; }
.plan-features li::before { content:''; position:absolute; left:0; top:.55em; width:.5rem; height:.5rem; border-radius:50%; }
.pf-yes { color:var(--text-2); }
.pf-yes::before { background:var(--green); }
.pf-no { color:var(--text-4); text-decoration:line-through; }
.pf-no::before { background:var(--text-4); }

/* COMPARE */
.compare-section { margin-bottom:4rem; }
.compare-section h2 { font-family:var(--font-serif); font-size:1.8rem; text-align:center; margin-bottom:1.5rem; }
.compare-wrap { overflow-x:auto; border:1px solid var(--border); border-radius:6px; }
.compare-table { width:100%; border-collapse:collapse; }
.compare-table th {
  font-family:var(--font-mono); font-size:.68rem; letter-spacing:1.5px; text-transform:uppercase;
  color:var(--text-3); padding:.9rem 1.2rem; text-align:center; background:var(--surface);
  border-bottom:1px solid var(--border);
}
.compare-table th:first-child { text-align:left; }
.compare-table td {
  padding:.7rem 1.2rem; font-size:.83rem; color:var(--text-2);
  border-bottom:1px solid var(--border); text-align:center;
}
.compare-table td:first-child { text-align:left; color:var(--text); }
.compare-table tbody tr:hover { background:var(--surface); }
.compare-group {
  background:var(--bg2) !important; font-family:var(--font-mono) !important;
  font-size:.65rem !important; letter-spacing:1.5px; color:var(--gold) !important;
  text-transform:uppercase; text-align:left !important;
}
.col-pop { background:rgba(201,168,76,.05); border-left:1px solid var(--gold-dim); border-right:1px solid var(--gold-dim); }

/* FAQ */
.faq-section { margin-bottom:4rem; }
.faq-section h2 { font-family:var(--font-serif); font-size:1.8rem; text-align:center; margin-bottom:2rem; }
.faq-item {
  border-bottom:1px solid var(--border); overflow:hidden;
}
.faq-q {
  display:flex; justify-content:space-between; align-items:center;
  padding:1.1rem 0; cursor:pointer; font-size:.92rem; color:var(--text);
  font-weight:500; user-select:none;
}
.faq-q:hover { color:var(--gold); }
.faq-icon { font-family:var(--font-mono); font-size:1rem; color:var(--text-3); transition:transform .25s; }
.faq-item.open .faq-icon { transform:rotate(45deg); color:var(--gold); }
.faq-a {
  font-size:.86rem; color:var(--text-2); line-height:1.75;
  max-height:0; overflow:hidden; transition:max-height .35s ease, padding .3s;
  padding-bottom:0;
}
.faq-item.open .faq-a { max-height:200px; padding-bottom:1.2rem; }

/* CTA */
.pricing-cta {
  background:linear-gradient(135deg,#0d1018 0%,#1a1506 50%,#0d1018 100%);
  border:1px solid var(--gold-dim); border-radius:8px;
  padding:4rem 2rem; text-align:center;
}
.pricing-cta h2 { font-family:var(--font-serif); font-size:clamp(1.8rem,3.5vw,2.8rem); margin-bottom:.8rem; }
.pricing-cta p { font-size:.9rem; color:var(--text-2); margin-bottom:2rem; }

@media(max-width:900px) {
  .plans-grid { grid-template-columns:1fr; }
  .plan-popular { transform:none; }
  .plan-popular:hover { transform:translateY(-4px); }
}
