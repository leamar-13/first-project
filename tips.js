/* tips.css */
.page-wrap { padding-bottom: 0; }

.page-hero {
  background: linear-gradient(180deg, var(--bg2) 0%, var(--bg) 100%);
  border-bottom: 1px solid var(--border);
  padding: 4rem 0 2.5rem;
  text-align: center;
}
.page-hero h1 {
  font-family: var(--font-serif); font-size: clamp(2rem,5vw,3.5rem);
  color: var(--text); margin: 0.5rem 0 1rem;
}
.page-hero h1 em { font-style: normal; color: var(--gold); }
.page-hero p { font-size: 0.95rem; color: var(--text-2); max-width: 550px; margin: 0 auto 2rem; }

.tips-filter {
  display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap;
}
.filter-btn {
  font-family: var(--font-mono); font-size: 0.7rem; letter-spacing: 1px;
  text-transform: uppercase; color: var(--text-3);
  background: transparent; border: 1px solid var(--border);
  padding: 0.45rem 1rem; border-radius: 2rem;
  transition: all 0.2s; cursor: pointer;
}
.filter-btn:hover, .filter-btn.active {
  color: var(--gold); border-color: var(--gold-dim);
  background: rgba(201,168,76,0.07);
}

/* FEATURED */
.featured-tip {
  padding: 4rem 2rem 0;
}
.ft-inner {
  display: grid; grid-template-columns: 1fr 1fr; gap: 3rem;
  background: var(--surface); border: 1px solid var(--border2);
  border-radius: 8px; overflow: hidden;
}
.ft-text { padding: 2.5rem; }
.ft-text h2 { font-family: var(--font-serif); font-size: 1.8rem; color: var(--text); margin: 1rem 0 1rem; line-height: 1.2; }
.ft-text p { font-size: 0.9rem; color: var(--text-2); line-height: 1.75; }
.ft-image { position: relative; min-height: 300px; overflow: hidden; }
.ft-image img { width: 100%; height: 100%; object-fit: cover; }
.ft-stat-overlay {
  position: absolute; bottom: 0; left: 0; right: 0;
  background: linear-gradient(0deg, rgba(8,10,13,0.95) 0%, transparent 100%);
  padding: 1.5rem; display: flex; gap: 2rem;
}
.ft-stat span { font-family: var(--font-mono); font-size: 1.6rem; color: var(--gold); display: block; }
.ft-stat small { font-family: var(--font-mono); font-size: 0.65rem; color: var(--text-3); letter-spacing: 1px; }

/* TIPS GRID */
.tips-main { padding: 3rem 2rem; }
.tips-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.2rem; }
.tip-card {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: 6px; padding: 1.6rem;
  position: relative; overflow: hidden;
  transition: transform 0.25s, border-color 0.25s;
  cursor: pointer;
}
.tip-card:hover { transform: translateY(-4px); border-color: var(--border2); }
.tip-card::after {
  content:''; position:absolute; bottom:0; left:0; right:0; height:2px;
  background: var(--gold); transform: scaleX(0); transition: transform 0.25s;
  transform-origin: left;
}
.tip-card:hover::after { transform: scaleX(1); }
.tc-top { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.8rem; }
.tc-num { font-family: var(--font-mono); font-size: 0.6rem; color: var(--text-4); letter-spacing: 2px; }
.tip-card h3 { font-family: var(--font-serif); font-size: 1.1rem; color: var(--text); margin-bottom: 0.6rem; line-height: 1.25; }
.tip-card p { font-size: 0.83rem; color: var(--text-2); line-height: 1.7; }
.tc-img { width: 100%; height: 160px; object-fit: cover; border-radius: 4px; margin-bottom: 1rem; }

/* QUOTE */
.quote-strip {
  background: var(--bg2); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
  padding: 4rem 2rem; text-align: center; margin: 3rem 0 0;
}
.quote-strip blockquote {
  font-family: var(--font-serif); font-size: clamp(1.3rem,3vw,2rem);
  color: var(--text); max-width: 700px; margin: 0 auto 0.8rem; line-height: 1.35;
}
.quote-strip cite {
  font-family: var(--font-mono); font-size: 0.75rem; color: var(--gold);
  letter-spacing: 2px; font-style: normal;
}

/* LOCKED */
.locked-section { padding: 5rem 2rem; text-align: center; }
.locked-header { margin-bottom: 3rem; }
.locked-header h2 { font-family: var(--font-serif); font-size: clamp(1.8rem,3.5vw,2.8rem); color: var(--text); margin: 0.8rem 0 0.8rem; }
.locked-header p { font-size: 0.9rem; color: var(--text-2); }
.locked-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.2rem; text-align: left; }
.locked-card {
  background: var(--surface); border: 1px solid var(--border);
  border-radius: 6px; padding: 1.8rem;
  filter: blur(0px); position: relative; overflow: hidden;
}
.locked-card::before {
  content: ''; position: absolute; inset: 0;
  background: rgba(8,10,13,0.4); backdrop-filter: blur(1px);
  z-index: 1; border-radius: 6px;
}
.locked-card > * { position: relative; z-index: 2; }
.lock-icon { font-size: 1.5rem; margin-bottom: 0.75rem; }
.locked-card h3 { font-family: var(--font-serif); font-size: 1.1rem; color: var(--text); margin-bottom: 0.5rem; }
.locked-card p { font-size: 0.82rem; color: var(--text-2); margin-bottom: 1rem; }

@media (max-width: 900px) {
  .ft-inner { grid-template-columns: 1fr; }
  .ft-image { min-height: 220px; }
  .tips-grid { grid-template-columns: 1fr 1fr; }
  .locked-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 640px) {
  .tips-grid { grid-template-columns: 1fr; }
  .locked-grid { grid-template-columns: 1fr; }
  .ft-text { padding: 1.5rem; }
}
