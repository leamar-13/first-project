/* login.css */
.login-body { min-height:100vh; display:flex; align-items:stretch; }

.login-wrap { display:grid; grid-template-columns:1fr 1fr; width:100%; min-height:100vh; }

/* LEFT */
.login-left {
  background:linear-gradient(160deg, #0d1018 0%, #1a1506 60%, #0d1018 100%);
  border-right:1px solid var(--gold-dim);
  padding:2.5rem; display:flex; flex-direction:column;
}
.login-brand {
  display:flex; align-items:center; gap:.6rem;
  font-family:var(--font-serif); font-size:1.25rem; font-weight:700; color:var(--text);
  margin-bottom:auto;
}
.login-brand span { color:var(--gold); }
.login-left-content { flex:1; display:flex; flex-direction:column; justify-content:center; padding:2rem 0; }
.login-left-content h2 {
  font-family:var(--font-serif); font-size:clamp(1.8rem,3vw,2.8rem);
  color:var(--text); line-height:1.15; margin-bottom:2rem;
}
.login-perks { list-style:none; display:flex; flex-direction:column; gap:.9rem; margin-bottom:2.5rem; }
.login-perks li { font-size:.9rem; color:var(--text-2); display:flex; gap:.8rem; align-items:flex-start; }
.login-perks li span { color:var(--gold); font-weight:700; margin-top:.05em; }
.login-testimonial {
  display:flex; gap:1rem; align-items:flex-start;
  background:rgba(201,168,76,.06); border:1px solid var(--gold-dim);
  border-radius:6px; padding:1.2rem;
}
.login-testimonial img { width:44px; height:44px; border-radius:50%; flex-shrink:0; }
.login-testimonial p { font-size:.85rem; color:var(--text-2); font-style:italic; line-height:1.6; margin-bottom:.3rem; }
.login-testimonial span { font-family:var(--font-mono); font-size:.65rem; color:var(--gold); }
.login-disclaimer { font-family:var(--font-mono); font-size:.65rem; color:var(--text-4); letter-spacing:.5px; }

/* RIGHT */
.login-right {
  display:flex; flex-direction:column; justify-content:center; align-items:center;
  padding:2.5rem; background:var(--bg);
}
.auth-card {
  width:100%; max-width:420px;
  background:var(--surface); border:1px solid var(--border);
  border-radius:8px; padding:2rem;
}

.auth-tabs { display:flex; border-bottom:1px solid var(--border); margin-bottom:1.5rem; }
.auth-tab {
  flex:1; font-family:var(--font-mono); font-size:.75rem; letter-spacing:1px;
  text-transform:uppercase; color:var(--text-3); background:transparent; border:none;
  padding:.8rem 0; cursor:pointer; transition:color .2s; border-bottom:2px solid transparent;
  margin-bottom:-1px;
}
.auth-tab.active { color:var(--gold); border-bottom-color:var(--gold); }

.auth-sub { font-size:.84rem; color:var(--text-2); margin-bottom:1.5rem; }

.auth-inputs { display:flex; flex-direction:column; gap:1rem; margin-bottom:1.2rem; }
.aig { display:flex; flex-direction:column; gap:.35rem; }
.aig-row { display:grid; grid-template-columns:1fr 1fr; gap:.75rem; }
.aig label {
  font-family:var(--font-mono); font-size:.64rem; letter-spacing:1.5px;
  color:var(--text-3); text-transform:uppercase;
}
.aig input, .auth-select {
  background:var(--bg); border:1px solid var(--border); color:var(--text);
  font-family:var(--font-body); font-size:.88rem;
  padding:.6rem .85rem; border-radius:4px; transition:border-color .2s; width:100%;
}
.aig input:focus, .auth-select:focus { border-color:var(--gold); }
.aig input::placeholder { color:var(--text-4); }
.auth-select { cursor:pointer; }
.auth-select option { background:var(--bg2); }

.pw-wrap { position:relative; }
.pw-wrap input { padding-right:3rem; }
.pw-toggle {
  position:absolute; right:.7rem; top:50%; transform:translateY(-50%);
  background:transparent; color:var(--text-3); font-size:.9rem; padding:.2rem;
}

.pw-strength { display:flex; align-items:center; gap:.6rem; margin-top:.4rem; }
.pws-bars { display:flex; gap:.3rem; }
.pws-bar { width:36px; height:3px; background:var(--border); border-radius:2px; transition:background .3s; }
#pwsLabel { font-family:var(--font-mono); font-size:.62rem; color:var(--text-3); }

.auth-row { display:flex; justify-content:space-between; align-items:center; }
.checkbox-label { display:flex; align-items:center; gap:.5rem; font-size:.8rem; color:var(--text-2); cursor:pointer; }
.checkbox-label input { accent-color:var(--gold); width:14px; height:14px; }
.forgot-link { font-family:var(--font-mono); font-size:.7rem; color:var(--gold); }
.forgot-link:hover { opacity:.7; }

.auth-submit { width:100%; justify-content:center; margin-top:.4rem; }

.auth-divider {
  display:flex; align-items:center; gap:1rem; margin:1.2rem 0;
  font-family:var(--font-mono); font-size:.65rem; color:var(--text-3); text-transform:uppercase;
}
.auth-divider::before, .auth-divider::after { content:''; flex:1; height:1px; background:var(--border); }

.social-btns { display:flex; gap:.75rem; }
.social-btn {
  flex:1; display:flex; align-items:center; justify-content:center; gap:.5rem;
  background:var(--bg); border:1px solid var(--border); color:var(--text);
  font-family:var(--font-body); font-size:.82rem;
  padding:.6rem; border-radius:4px; transition:border-color .2s;
}
.social-btn:hover { border-color:var(--border2); }

.back-home {
  margin-top:1.5rem; font-family:var(--font-mono); font-size:.7rem;
}
.back-home a { color:var(--text-3); transition:color .2s; }
.back-home a:hover { color:var(--gold); }

/* TOAST */
.toast {
  position:fixed; bottom:2rem; right:2rem; z-index:999;
  background:var(--surface); border:1px solid var(--gold-dim);
  border-radius:6px; padding:1rem 1.5rem;
  font-size:.85rem; color:var(--text); box-shadow:var(--shadow);
  animation:fadeUp .35s ease;
}

@media(max-width:768px) {
  .login-wrap { grid-template-columns:1fr; }
  .login-left { display:none; }
  .login-right { padding:2rem 1.2rem; justify-content:flex-start; padding-top:5rem; }
}
