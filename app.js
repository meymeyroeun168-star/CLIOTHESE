@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Jost:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,700;0,800;1,700&display=swap');

/* ───────────────────────── Reset & Variables ───────────────────────── */
* { margin: 0; padding: 0; box-sizing: border-box; }

:root {
  --bg: #fff0f5;
  --bg-soft: #fff5f8;
  --bg-hero: #ffe0ec;
  --bg-card: #fdf0f5;
  --bg-section: #fce4ec;
  --text: #1a1a1a;
  --text-sub: #666;
  --text-faint: #aaa;
  --border: #f0d0dc;
  --accent: #d63a6e;
  --accent2: #e91e8c;
  --footer-bg: #1a0a12;
  --nav-bg: #fff5f8;
  --modal-bg: #ffffff;
  --input-bg: #fdf0f5;
  --shadow: rgba(214, 58, 110, 0.15);
}

[data-theme="dark"] {
  --bg: #0d0d0d;
  --bg-soft: #0d0d0d;
  --bg-hero: #1a0a0e;
  --bg-card: #1a1a1a;
  --bg-section: #1a0a0e;
  --text: #ffffff;
  --text-sub: #aaa;
  --text-faint: #888;
  --border: #2a2a2a;
  --accent: #d63a6e;
  --accent2: #e91e8c;
  --footer-bg: #050505;
  --nav-bg: #0d0d0d;
  --modal-bg: #111111;
  --input-bg: #1a1a1a;
  --shadow: rgba(0, 0, 0, 0.4);
}

html, body {
  font-family: 'Jost', sans-serif;
  background: var(--bg);
  color: var(--text);
  overflow-x: hidden;
  -webkit-text-size-adjust: 100%;
  transition: background .3s, color .3s;
}

a { text-decoration: none; color: inherit; }
button { font-family: inherit; }
img { max-width: 100%; display: block; }

.serif { font-family: 'Cormorant Garamond', Georgia, serif; }
.display { font-family: 'Playfair Display', serif; }

/* ───────────────────────── Animations (CSS only) ───────────────────────── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes fadeIn {
  from { opacity: 0; } to { opacity: 1; }
}
@keyframes scaleIn {
  from { opacity: 0; transform: scale(.95); } to { opacity: 1; transform: scale(1); }
}
@keyframes slideInUp {
  from { transform: translateY(100%); } to { transform: translateY(0); }
}
@keyframes slideInLeft {
  from { transform: translateX(-100%); } to { transform: translateX(0); }
}
@keyframes spin {
  from { transform: rotate(0deg); } to { transform: rotate(360deg); }
}
@keyframes pop {
  0% { transform: scale(0); } 70% { transform: scale(1.15); } 100% { transform: scale(1); }
}
@keyframes heroZoom {
  from { transform: scale(1.08); opacity: 0; } to { transform: scale(1); opacity: 1; }
}

.reveal { opacity: 0; animation: fadeUp .55s cubic-bezier(.22,1,.36,1) forwards; }
.reveal-1 { animation-delay: .05s; }
.reveal-2 { animation-delay: .12s; }
.reveal-3 { animation-delay: .19s; }
.reveal-4 { animation-delay: .26s; }

.scroll-reveal { opacity: 0; transform: translateY(24px); transition: opacity .5s cubic-bezier(.22,1,.36,1), transform .5s cubic-bezier(.22,1,.36,1); }
.scroll-reveal.in-view { opacity: 1; transform: translateY(0); }

/* ───────────────────────── Top Announcement Bar ───────────────────────── */
.announce-bar {
  background: linear-gradient(90deg, var(--accent), var(--accent2), var(--accent));
  color: white; text-align: center; font-size: 11px; padding: 6px 0; letter-spacing: 1px;
}

/* ───────────────────────── Navbar (Desktop) ───────────────────────── */
.navbar {
  position: fixed; top: 0; left: 0; right: 0; z-index: 200;
  background: var(--nav-bg); box-shadow: 0 2px 20px var(--shadow);
  transition: background .3s; animation: fadeUp .5s cubic-bezier(.22,1,.36,1);
}
.navbar-inner { max-width: 1200px; margin: 0 auto; padding: 0 24px; height: 56px; display: flex; align-items: center; justify-content: space-between; }
.logo { font-family: 'Cormorant Garamond', serif; font-weight: 600; font-style: italic; font-size: 22px; letter-spacing: 4px; cursor: pointer; color: var(--text); transition: transform .2s; }
.logo:hover { transform: scale(1.04); }
.nav-links { display: flex; gap: 24px; font-size: 11px; font-weight: 600; letter-spacing: 2.5px; }
.nav-link { cursor: pointer; color: var(--text); padding-bottom: 2px; border-bottom: 2px solid transparent; transition: color .2s, border-color .2s; }
.nav-link:hover { color: var(--accent); }
.nav-link.active { color: var(--accent); border-bottom-color: var(--accent); }
.nav-link.sale { color: #e74c3c; }
.navbar-icons { display: flex; gap: 12px; align-items: center; }
.icon-btn { background: none; border: none; cursor: pointer; color: var(--text); display: flex; align-items: center; padding: 4px; position: relative; transition: transform .15s; }
.icon-btn:hover { transform: scale(1.15); }
.icon-btn:active { transform: scale(.9); }
.badge {
  position: absolute; top: -4px; right: -4px; background: var(--accent); color: white; font-size: 9px; font-weight: 800;
  width: 16px; height: 16px; border-radius: 50%; display: flex; align-items: center; justify-content: center;
  animation: pop .3s cubic-bezier(.22,1,.36,1);
}
.theme-toggle { background: var(--bg-section); border: none; border-radius: 20px; width: 50px; height: 26px; cursor: pointer; position: relative; display: flex; align-items: center; padding: 0 3px; transition: background .3s; }
.theme-toggle-knob { width: 20px; height: 20px; border-radius: 50%; background: white; box-shadow: 0 1px 4px rgba(0,0,0,.3); display: flex; align-items: center; justify-content: center; font-size: 10px; transition: transform .3s cubic-bezier(.34,1.56,.64,1), background .3s; }
[data-theme="dark"] .theme-toggle-knob { transform: translateX(23px); background: #f5a623; }
.user-menu { position: relative; }
.user-dropdown {
  position: absolute; top: 36px; right: 0; width: 200px; background: var(--modal-bg); border-radius: 12px;
  border: 1px solid var(--border); box-shadow: 0 8px 32px rgba(0,0,0,.2); overflow: hidden; z-index: 300;
  display: none; animation: scaleIn .2s cubic-bezier(.22,1,.36,1); transform-origin: top right;
}
.user-dropdown.open { display: block; }
.user-dropdown-header { padding: 14px 16px; border-bottom: 1px solid var(--border); background: linear-gradient(135deg, rgba(214,58,110,.13), rgba(233,30,140,.07)); }
.user-dropdown-item { padding: 11px 16px; cursor: pointer; font-size: 13px; transition: background .15s; }
.user-dropdown-item:hover { background: var(--bg-section); }
.user-dropdown-item.signout { color: #e74c3c; border-top: 1px solid var(--border); }
.user-dropdown-item.signout:hover { background: rgba(231,76,60,.12); }

/* ───────────────────────── Mobile Header ───────────────────────── */
.mobile-header { display: none; }
@media (max-width: 767px) {
  .navbar { display: none; }
  .mobile-header { display: block; position: fixed; top: 0; left: 0; right: 0; z-index: 200; background: var(--nav-bg); box-shadow: 0 2px 12px var(--shadow); animation: fadeUp .5s cubic-bezier(.22,1,.36,1); }
  .mobile-header-inner { display: flex; align-items: center; justify-content: space-between; padding: 0 16px; height: 52px; }
  .mobile-logo { font-family: 'Cormorant Garamond', serif; font-style: italic; font-weight: 600; font-size: 18px; letter-spacing: 3px; color: var(--text); text-align: center; }
}

.slide-menu-overlay { position: fixed; inset: 0; background: black; opacity: 0; z-index: 250; display: none; transition: opacity .3s; }
.slide-menu-overlay.open { display: block; opacity: .5; }
.slide-menu { position: fixed; top: 0; bottom: 0; left: 0; width: 75%; max-width: 280px; background: var(--modal-bg); z-index: 260; display: flex; flex-direction: column; overflow-y: auto; transform: translateX(-100%); transition: transform .32s cubic-bezier(.22,1,.36,1); }
.slide-menu.open { transform: translateX(0); }
.slide-menu-header { background: linear-gradient(135deg, var(--accent), var(--accent2)); padding: 40px 24px 24px; }
.slide-menu-header .logo-text { font-family: 'Cormorant Garamond', serif; font-size: 22px; font-weight: 600; letter-spacing: 3px; color: white; font-style: italic; }
.slide-menu-header .tagline { font-size: 11px; color: rgba(255,255,255,.7); margin-top: 4px; }
.slide-menu-item { padding: 14px 24px; font-size: 14px; font-weight: 700; letter-spacing: 1.5px; cursor: pointer; border-bottom: 1px solid var(--border); color: var(--text); transition: background .15s; }
.slide-menu-item:active { background: var(--bg-section); }
.slide-menu-item.sale { color: var(--accent); }
.slide-menu-quicklinks { padding: 20px 24px 0; }
.slide-menu-quicklinks-title { font-size: 10px; color: var(--text-faint); letter-spacing: 2px; margin-bottom: 12px; }
.slide-menu-quicklink { display: flex; align-items: center; gap: 12px; padding: 12px 0; cursor: pointer; color: var(--text-sub); font-size: 13px; border-bottom: 1px solid var(--border); }
.slide-menu-footer { padding: 16px 24px; }
.slide-menu-signin-btn { width: 100%; background: linear-gradient(135deg, var(--accent), var(--accent2)); color: white; border: none; border-radius: 12px; padding: 14px; font-size: 13px; font-weight: 800; cursor: pointer; }

/* ───────────────────────── Mobile Bottom Nav ───────────────────────── */
.bottom-nav { display: none; }
@media (max-width: 767px) {
  .bottom-nav { display: flex; position: fixed; bottom: 0; left: 0; right: 0; z-index: 300; background: var(--modal-bg); border-top: 1px solid var(--border); align-items: center; justify-content: space-around; padding: 8px 0 max(8px, env(safe-area-inset-bottom)); box-shadow: 0 -4px 20px var(--shadow); animation: slideInUp .4s cubic-bezier(.22,1,.36,1); }
  .bottom-nav-item { background: none; border: none; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 3px; padding: 4px 8px; position: relative; min-width: 48px; color: var(--text-faint); transition: transform .15s; }
  .bottom-nav-item:active { transform: scale(.85); }
  .bottom-nav-item.active { color: var(--accent); }
  .bottom-nav-item .label { font-size: 9px; font-weight: 500; letter-spacing: .5px; }
  .bottom-nav-item.active .label { font-weight: 800; }
  .bottom-nav-dot { position: absolute; bottom: -8px; left: 50%; transform: translateX(-50%); width: 4px; height: 4px; border-radius: 50%; background: var(--accent); display: none; }
  .bottom-nav-item.active .bottom-nav-dot { display: block; }
  body { padding-bottom: 70px; }
}

/* ───────────────────────── Hero ───────────────────────── */
.hero { position: relative; min-height: 88vh; display: flex; align-items: center; overflow: hidden; background: linear-gradient(135deg, var(--bg-hero), var(--bg-soft)); }
[data-theme="dark"] .hero { background: var(--bg-hero); }
.hero-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center top; animation: heroZoom 1.1s cubic-bezier(.22,1,.36,1); opacity: .85; }
[data-theme="dark"] .hero-img { opacity: .45; }
.hero-overlay { position: absolute; inset: 0; background: linear-gradient(to right, rgba(255,224,236,.95) 48%, rgba(255,224,236,.3)); }
[data-theme="dark"] .hero-overlay { background: linear-gradient(to right, rgba(26,10,14,.97) 55%, rgba(26,10,14,.6)); }
.hero-content { position: relative; z-index: 2; max-width: 1200px; margin: 0 auto; padding: 100px 32px 60px; }
.hero-eyebrow { font-size: 11px; letter-spacing: 4px; color: var(--accent); font-weight: 700; margin-bottom: 10px; }
.hero-title { font-family: 'Playfair Display', serif; font-size: clamp(40px, 7vw, 82px); font-weight: 700; line-height: 1.08; color: var(--text); max-width: 520px; margin-bottom: 16px; letter-spacing: -.5px; }
.hero-sub { font-size: 15px; color: var(--text-sub); line-height: 1.7; max-width: 320px; margin-bottom: 28px; }
.hero-buttons { display: flex; gap: 10px; flex-wrap: wrap; }
.btn-primary { background: linear-gradient(135deg, var(--accent), var(--accent2)); color: white; border: none; padding: 14px 28px; font-size: 12px; font-weight: 700; letter-spacing: 2px; cursor: pointer; border-radius: 8px; box-shadow: 0 4px 20px var(--shadow); transition: transform .15s; }
.btn-primary:hover { transform: scale(1.04); }
.btn-primary:active { transform: scale(.97); }
.btn-outline { background: transparent; color: var(--text); border: 2px solid var(--text); padding: 14px 28px; font-size: 12px; font-weight: 700; letter-spacing: 2px; cursor: pointer; border-radius: 8px; transition: all .2s; }
.btn-outline:hover { background: var(--accent); border-color: var(--accent); color: white; }
@media (max-width: 767px) { .hero { min-height: 70vh; } .hero-content { padding: 80px 20px 40px; } .hero-title { font-size: clamp(32px, 9vw, 52px); max-width: 320px; } .btn-primary, .btn-outline { padding: 12px 22px; font-size: 11px; } }

/* ───────────────────────── Trust Bar ───────────────────────── */
.trust-bar { max-width: 1200px; margin: 0 auto; padding: 16px 16px; display: flex; justify-content: space-around; flex-wrap: wrap; gap: 10px; border-bottom: 1px solid var(--border); }
.trust-item { display: flex; align-items: center; gap: 8px; }
.trust-item .icon { font-size: 20px; }
.trust-item .title { font-size: 11px; font-weight: 700; letter-spacing: 1px; color: var(--text); }
.trust-item .sub { font-size: 11px; color: var(--text-faint); }
@media (max-width: 767px) { .trust-item .icon { font-size: 18px; } .trust-item .title, .trust-item .sub { font-size: 9px; } }

/* ───────────────────────── Section Headers ───────────────────────── */
.section { max-width: 1200px; margin: 40px auto 0; padding: 0 16px; }
.section-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
.section-title { font-family: 'Playfair Display', serif; font-size: 24px; font-weight: 700; letter-spacing: 1px; color: var(--text); }
.section-link { background: none; border: none; font-size: 12px; letter-spacing: 1px; cursor: pointer; color: var(--accent); font-weight: 700; transition: opacity .2s; }
.section-link:hover { opacity: .7; }
@media (max-width: 767px) { .section-title { font-size: 20px; } }

/* ───────────────────────── Product Grid & Card ───────────────────────── */
.product-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
@media (max-width: 767px) { .product-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; } }
@media (min-width: 768px) and (max-width: 1023px) { .product-grid { grid-template-columns: repeat(3, 1fr); } }
.product-card { cursor: pointer; position: relative; transition: transform .25s cubic-bezier(.22,1,.36,1); }
.product-card:hover { transform: translateY(-6px); }
.product-tag { position: absolute; top: 8px; left: 8px; z-index: 3; color: white; font-size: 8px; font-weight: 800; letter-spacing: 1px; padding: 3px 7px; border-radius: 4px; }
.product-img-wrap { position: relative; overflow: hidden; border-radius: 8px; background: var(--bg-card); }
.product-img { width: 100%; aspect-ratio: 3/4; object-fit: cover; object-position: top center; display: block; transition: transform .4s cubic-bezier(.22,1,.36,1); }
.product-card:hover .product-img { transform: scale(1.06); }
.wish-btn { position: absolute; top: 8px; right: 8px; background: rgba(255,255,255,.9); border: none; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 2px 8px rgba(0,0,0,.15); transition: transform .15s; }
.wish-btn:hover { transform: scale(1.2); }
.wish-btn:active { transform: scale(.85); }
.view-details-overlay { position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(180deg, transparent, rgba(214,58,110,.9)); color: white; text-align: center; padding: 24px 0 12px; font-size: 10px; font-weight: 800; letter-spacing: 2px; opacity: 0; transform: translateY(10px); transition: opacity .2s, transform .2s; }
.product-card:hover .view-details-overlay { opacity: 1; transform: translateY(0); }
.product-info { padding-top: 8px; }
.product-name { font-size: 12px; font-weight: 600; color: var(--text); margin-bottom: 2px; line-height: 1.3; }
.product-price { font-size: 13px; color: var(--accent); font-weight: 700; margin-bottom: 6px; }
.product-colors { display: flex; gap: 4px; }
.color-dot { width: 10px; height: 10px; border-radius: 50%; border: 1.5px solid var(--border); }
@media (max-width: 767px) { .product-name { font-size: 11px; } .product-price { font-size: 12px; } }
.shop-all-buttons { text-align: center; margin: 32px 0 64px; display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
@media (max-width: 767px) { .shop-all-buttons { margin-bottom: 80px; } }

/* ───────────────────────── Category Page ───────────────────────── */
.category-hero { background: var(--bg-section); padding: 80px 16px 36px; text-align: center; border-bottom: 1px solid var(--border); }
.category-eyebrow { font-size: 10px; letter-spacing: 5px; font-weight: 600; margin-bottom: 8px; text-transform: uppercase; }
.category-title { font-family: 'Playfair Display', serif; font-size: clamp(32px, 5vw, 60px); font-weight: 700; letter-spacing: 2px; color: var(--text); margin-bottom: 8px; }
.category-sub { color: var(--text-faint); font-size: 13px; }
.filter-row { max-width: 1200px; margin: 0 auto; padding: 16px 16px 0; display: flex; gap: 8px; flex-wrap: nowrap; overflow-x: auto; -webkit-overflow-scrolling: touch; scrollbar-width: none; align-items: center; }
.filter-row::-webkit-scrollbar { display: none; }
.filter-chip { padding: 8px 16px; border: 1.5px solid var(--border); background: transparent; color: var(--text-sub); font-size: 11px; font-weight: 700; letter-spacing: 1px; cursor: pointer; border-radius: 20px; transition: all .18s; flex-shrink: 0; white-space: nowrap; }
.filter-chip.active { background: var(--accent); border-color: var(--accent); color: white; }
.filter-chip:active { transform: scale(.96); }
.filter-count { margin-left: auto; font-size: 11px; color: var(--text-faint); align-self: center; flex-shrink: 0; }
.category-grid-wrap { max-width: 1200px; margin: 16px auto 80px; padding: 0 16px; }
@media (min-width: 768px) { .category-grid-wrap .product-grid { grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 20px; } }

/* ───────────────────────── Coming Soon / Generic Page ───────────────────────── */
.generic-page { padding: 120px 24px 60px; min-height: 70vh; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; }
@media (max-width: 767px) { .generic-page { padding: 80px 24px 100px; } }
.generic-icon { font-size: 56px; margin-bottom: 16px; animation: pop .5s cubic-bezier(.34,1.56,.64,1); }
.generic-title { font-family: 'Playfair Display', serif; font-size: 48px; font-weight: 700; letter-spacing: 2px; color: var(--text); margin-bottom: 10px; }
.generic-sub { color: var(--text-faint); font-size: 13px; margin-bottom: 32px; max-width: 320px; }
.generic-buttons { display: flex; gap: 10px; flex-wrap: wrap; justify-content: center; }
@media (max-width: 767px) { .generic-title { font-size: 32px; } }

/* ───────────────────────── Footer ───────────────────────── */
.footer { background: var(--footer-bg); color: white; padding: 48px 24px 32px; }
@media (max-width: 767px) { .footer { padding: 32px 20px 100px; } }
.footer-inner { max-width: 1200px; margin: 0 auto; }
.footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 36px; margin-bottom: 32px; }
@media (max-width: 767px) { .footer-grid { grid-template-columns: 1fr 1fr; gap: 24px; } .footer-brand { grid-column: 1 / -1; } }
.footer-logo { font-family: 'Cormorant Garamond', serif; font-size: 24px; letter-spacing: 3px; margin-bottom: 8px; color: #f8c0d0; font-style: italic; }
.footer-tagline { font-size: 12px; color: #888; line-height: 1.7; }
.footer-col-title { font-size: 10px; letter-spacing: 2px; color: var(--accent); margin-bottom: 12px; }
.footer-link { font-size: 12px; color: #888; margin-bottom: 8px; cursor: pointer; transition: color .2s, transform .2s; display: block; }
.footer-link:hover { color: var(--accent); transform: translateX(4px); }
.footer-bottom { border-top: 1px solid #2a1a1e; padding-top: 16px; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 10px; }
.footer-bottom p { font-size: 10px; color: #555; }
.footer-legal { display: flex; gap: 16px; }
.footer-legal span { font-size: 10px; color: #555; cursor: pointer; transition: color .2s; }
.footer-legal span:hover { color: var(--accent); }

/* ───────────────────────── Modals & Drawers (shared) ───────────────────────── */
.overlay { position: fixed; inset: 0; background: black; opacity: 0; z-index: 400; display: none; transition: opacity .3s; }
.overlay.open { display: block; opacity: .5; }
.modal-close-btn { background: var(--bg-section); border: none; color: var(--text); width: 34px; height: 34px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: transform .15s; }
.modal-close-btn:hover { transform: rotate(90deg) scale(1.1); }

/* Cart / Wishlist Drawer */
.drawer { position: fixed; bottom: 0; top: 0; right: 0; width: 380px; background: var(--modal-bg); z-index: 401; display: flex; flex-direction: column; color: var(--text); transform: translateX(100%); transition: transform .38s cubic-bezier(.22,1,.36,1); }
.drawer.open { transform: translateX(0); }
@media (max-width: 767px) { .drawer { width: 100%; top: auto; border-radius: 20px 20px 0 0; max-height: 85vh; transform: translateY(100%); } .drawer.open { transform: translateY(0); } }
.drawer-grabber { display: none; justify-content: center; padding: 10px 0 0; }
@media (max-width: 767px) { .drawer-grabber { display: flex; } }
.drawer-grabber-bar { width: 40px; height: 4px; border-radius: 2px; background: var(--border); }
.drawer-header { padding: 20px 24px; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; }
.drawer-header h3 { font-weight: 800; font-size: 18px; display: flex; align-items: center; gap: 8px; }
.drawer-body { flex: 1; overflow-y: auto; padding: 16px 24px; -webkit-overflow-scrolling: touch; }
.drawer-empty { text-align: center; padding-top: 48px; color: #999; }
.drawer-item { display: flex; gap: 12px; margin-bottom: 14px; padding: 12px; background: var(--bg-card); border-radius: 12px; animation: fadeUp .3s cubic-bezier(.22,1,.36,1) backwards; }
.drawer-item img { width: 60px; height: 76px; object-fit: cover; object-position: top; border-radius: 8px; cursor: pointer; }
.drawer-item-info { flex: 1; }
.drawer-item-name { font-size: 12px; font-weight: 700; margin-bottom: 3px; line-height: 1.3; }
.drawer-item-meta { font-size: 11px; color: var(--text-faint); margin-bottom: 5px; }
.drawer-item-price { font-size: 13px; font-weight: 800; color: var(--accent); }
.drawer-item-remove { background: none; border: none; color: var(--text-faint); cursor: pointer; align-self: flex-start; transition: color .15s; }
.drawer-item-remove:hover { color: #e74c3c; }
.drawer-footer { padding: 16px 24px max(20px, env(safe-area-inset-bottom)); border-top: 1px solid var(--border); }
.drawer-subtotal { display: flex; justify-content: space-between; margin-bottom: 12px; }
.drawer-checkout-btn { width: 100%; background: linear-gradient(135deg, var(--accent), var(--accent2)); color: white; border: none; border-radius: 14px; padding: 16px; font-size: 14px; font-weight: 800; letter-spacing: 1.5px; cursor: pointer; margin-bottom: 10px; box-shadow: 0 4px 20px var(--shadow); }
.drawer-continue-btn { width: 100%; background: transparent; color: var(--text); border: 1.5px solid var(--border); border-radius: 14px; padding: 12px; font-size: 12px; font-weight: 700; cursor: pointer; }

/* Product Detail Modal */
.product-modal-overlay { position: fixed; inset: 0; z-index: 500; display: none; align-items: center; justify-content: center; padding: 16px; background: rgba(0,0,0,0); }
.product-modal-overlay.open { display: flex; }
.product-modal { position: relative; background: var(--modal-bg); border-radius: 16px; overflow: hidden; display: flex; max-width: 880px; width: 100%; max-height: 90vh; box-shadow: 0 24px 80px rgba(214,58,110,.3); animation: scaleIn .38s cubic-bezier(.22,1,.36,1); }
@media (max-width: 767px) { .product-modal-overlay { align-items: flex-end; padding: 0; } .product-modal { flex-direction: column; max-width: 100%; max-height: 92vh; border-radius: 20px 20px 0 0; animation: slideInUp .42s cubic-bezier(.22,1,.36,1); } }
.product-modal-img-wrap { flex: 0 0 44%; position: relative; background: var(--bg-card); overflow: hidden; }
@media (max-width: 767px) { .product-modal-img-wrap { flex: none; height: 260px; } }
.product-modal-img { width: 100%; height: 100%; object-fit: cover; object-position: top center; }
.product-modal-discount-badge { position: absolute; top: 14px; left: 14px; background: #e74c3c; color: white; font-size: 11px; font-weight: 800; padding: 4px 10px; border-radius: 4px; }
.product-modal-close { position: absolute; top: 14px; right: 14px; background: rgba(0,0,0,.4); border: none; color: white; width: 34px; height: 34px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; }
.product-modal-body { flex: 1; padding: 28px 24px; overflow-y: auto; }
.product-modal-brand { font-size: 12px; color: var(--accent); letter-spacing: 3px; font-weight: 600; margin-bottom: 6px; font-family: 'Cormorant Garamond', serif; font-style: italic; }
.product-modal-name { font-size: 22px; font-weight: 800; margin-bottom: 8px; line-height: 1.2; }
.product-modal-stars { display: flex; gap: 2px; align-items: center; margin-bottom: 14px; }
.product-modal-price-row { display: flex; align-items: center; gap: 10px; margin-bottom: 16px; }
.product-modal-price { font-size: 26px; font-weight: 800; }
.product-modal-oldprice { font-size: 13px; color: var(--text-faint); text-decoration: line-through; }
.product-modal-discount-pill { background: #e74c3c; color: white; font-size: 10px; font-weight: 800; padding: 2px 7px; border-radius: 4px; }
.option-label { font-size: 11px; color: var(--text-faint); font-weight: 600; margin-bottom: 7px; }
.color-swatches { display: flex; gap: 7px; margin-bottom: 14px; }
.color-swatch { width: 28px; height: 28px; border-radius: 7px; border: none; cursor: pointer; outline: 2.5px solid transparent; outline-offset: 2px; transition: outline .15s, transform .15s; }
.color-swatch.selected { outline-color: var(--accent); }
.color-swatch:hover { transform: scale(1.1); }
.size-options { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 4px; }
.size-btn { width: 42px; height: 36px; border: 1.5px solid var(--border); background: transparent; color: var(--text); border-radius: 7px; cursor: pointer; font-size: 11px; font-weight: 700; transition: all .15s; }
.size-btn.selected { background: var(--accent); border-color: var(--accent); color: white; }
.size-btn.error { border-color: #e74c3c; }
.size-error-msg { color: #e74c3c; font-size: 11px; margin-top: 4px; display: none; }
.size-error-msg.show { display: block; animation: fadeIn .2s; }
.qty-row { display: flex; align-items: center; gap: 10px; margin-bottom: 16px; }
.qty-control { display: flex; align-items: center; background: var(--bg-section); border-radius: 8px; overflow: hidden; }
.qty-btn { background: none; border: none; color: var(--text); width: 32px; height: 32px; cursor: pointer; font-size: 17px; transition: background .15s; }
.qty-btn:hover { background: rgba(0,0,0,.08); }
.qty-value { min-width: 28px; text-align: center; font-weight: 700; }
.modal-cta-row { display: flex; gap: 8px; margin-bottom: 14px; }
.btn-add-cart { flex: 1; background: linear-gradient(135deg, var(--accent), var(--accent2)); color: white; border: none; border-radius: 10px; padding: 12px; font-size: 12px; font-weight: 800; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 6px; transition: background .3s, transform .15s; }
.btn-add-cart:active { transform: scale(.97); }
.btn-add-cart.added { background: #2ecc71; }
.btn-buy-now { flex: 1; background: var(--text); color: var(--bg); border: none; border-radius: 10px; padding: 12px; font-size: 12px; font-weight: 800; cursor: pointer; transition: transform .15s; }
.btn-buy-now:active { transform: scale(.97); }
.modal-trust-row { display: flex; gap: 10px; padding-top: 12px; border-top: 1px solid var(--border); }
.modal-trust-item { flex: 1; text-align: center; }
.modal-trust-item .icon { font-size: 15px; color: var(--accent); }
.modal-trust-item p { font-size: 10px; color: var(--text-faint); margin-top: 2px; }
.sheet-sticky-cta { display: none; }
@media (max-width: 767px) { .product-modal-body { padding: 16px 20px 0; } .sheet-sticky-cta { display: flex; gap: 10px; padding: 12px 20px max(16px, env(safe-area-inset-bottom)); border-top: 1px solid var(--border); background: var(--modal-bg); } }

/* ───────────────────────── Sign In Modal ───────────────────────── */
.signin-modal { position: relative; background: var(--modal-bg); border-radius: 20px; padding: 32px 28px; width: 100%; max-width: 420px; box-shadow: 0 24px 80px rgba(214,58,110,.3); animation: scaleIn .38s cubic-bezier(.22,1,.36,1); }
@media (max-width: 767px) { #signinOverlay.product-modal-overlay { align-items: flex-end; padding: 0; } .signin-modal { border-radius: 24px 24px 0 0; max-width: 100%; animation: slideInUp .38s cubic-bezier(.22,1,.36,1); padding-bottom: max(32px, env(safe-area-inset-bottom)); } }
.signin-brand { text-align: center; margin-bottom: 24px; }
.signin-brand .logo-text { font-family: 'Cormorant Garamond', serif; font-size: 24px; font-weight: 600; letter-spacing: 3px; font-style: italic; }
.signin-brand .mode-label { font-size: 13px; color: var(--accent); margin-top: 4px; font-weight: 600; }
.form-input { width: 100%; padding: 13px 16px; border: 1.5px solid var(--border); border-radius: 12px; background: var(--input-bg); color: var(--text); font-size: 14px; outline: none; box-sizing: border-box; font-family: inherit; transition: border .2s; }
.form-input:focus { border-color: var(--accent); }
.form-input.error { border-color: #e74c3c; }
.form-group { display: flex; flex-direction: column; gap: 12px; }
.form-error { color: #e74c3c; font-size: 12px; margin: 0; display: none; }
.form-error.show { display: block; }
.form-link { font-size: 12px; color: var(--accent); cursor: pointer; font-weight: 700; }
.divider-row { display: flex; align-items: center; gap: 10px; }
.divider-line { flex: 1; height: 1px; background: var(--border); }
.divider-row span { font-size: 11px; color: var(--text-faint); }
.btn-social { background: var(--input-bg); color: var(--text); border: 1.5px solid var(--border); border-radius: 12px; padding: 13px; font-size: 13px; font-weight: 600; cursor: pointer; transition: background .2s; }
.btn-social:hover { background: var(--bg-section); }

/* ───────────────────────── Checkout Modal ───────────────────────── */
.checkout-modal { position: relative; background: var(--modal-bg); border-radius: 20px; width: 100%; max-width: 860px; max-height: 90vh; display: flex; flex-direction: column; box-shadow: 0 28px 80px rgba(214,58,110,.3); animation: scaleIn .42s cubic-bezier(.22,1,.36,1); }
@media (max-width: 767px) { #checkoutOverlay.product-modal-overlay { align-items: flex-end; padding: 0; } .checkout-modal { border-radius: 24px 24px 0 0; max-width: 100%; max-height: 95vh; animation: slideInUp .42s cubic-bezier(.22,1,.36,1); } }
.checkout-header { padding: 16px 20px 0; border-bottom: 1px solid var(--border); }
.checkout-header-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
.checkout-brand { font-family: 'Cormorant Garamond', serif; font-size: 18px; font-weight: 600; font-style: italic; }
.steps-row { display: flex; align-items: center; }
.step-wrap { display: flex; align-items: center; flex: 1; }
.step-circle-col { display: flex; flex-direction: column; align-items: center; flex: 1; }
.step-circle { width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 800; color: #aaa; background: var(--bg-section); transition: background .3s, transform .3s; }
.step-circle.done { background: #2ecc71; color: white; }
.step-circle.current { background: var(--accent); color: white; transform: scale(1.1); }
.step-label { font-size: 9px; margin-top: 3px; color: var(--text-faint); }
.step-label.current { color: var(--accent); font-weight: 800; }
.step-connector { height: 2px; flex: 1; background: var(--bg-section); margin: 0 2px; transition: background .3s; }
.step-connector.done { background: #2ecc71; }
.checkout-body-wrap { display: flex; flex: 1; overflow: hidden; }
@media (max-width: 767px) { .checkout-body-wrap { flex-direction: column; } }
.checkout-main { flex: 1; overflow-y: auto; padding: 24px 32px; -webkit-overflow-scrolling: touch; }
@media (max-width: 767px) { .checkout-main { padding: 16px; } }
.checkout-step { display: none; }
.checkout-step.active { display: block; animation: fadeIn .3s; }
.checkout-step-title { font-size: 16px; font-weight: 800; margin-bottom: 4px; }
.checkout-step-sub { font-size: 12px; color: var(--text-sub); margin-bottom: 16px; }
.field-label { font-size: 11px; font-weight: 700; letter-spacing: 1px; color: var(--text-sub); margin-bottom: 6px; margin-top: 14px; }
.field-row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
@media (max-width: 767px) { .field-row-2 { grid-template-columns: 1fr; } }
.payment-method-row { display: flex; gap: 8px; margin-bottom: 16px; }
.payment-method-btn { flex: 1; padding: 10px 6px; border: 2px solid var(--border); background: transparent; color: var(--text); border-radius: 10px; cursor: pointer; font-size: 11px; font-weight: 700; transition: all .2s; }
.payment-method-btn.selected { border-color: var(--accent); background: linear-gradient(135deg, rgba(214,58,110,.13), rgba(233,30,140,.07)); color: var(--accent); }
.payment-pane { display: none; }
.payment-pane.active { display: block; animation: fadeIn .2s; }
.review-item { display: flex; gap: 10px; margin-bottom: 10px; padding: 10px; background: var(--bg-card); border-radius: 10px; }
.review-item img { width: 50px; height: 62px; object-fit: cover; object-position: top; border-radius: 6px; }
.review-summary-box { margin-top: 14px; padding: 14px; background: var(--bg-card); border-radius: 10px; }
.checkout-nav-row { display: flex; gap: 10px; margin-top: 24px; }
@media (max-width: 767px) { .checkout-nav-row { padding-bottom: 16px; } }
.btn-back { padding: 13px 20px; background: var(--bg-section); color: var(--text); border: none; border-radius: 12px; font-size: 12px; font-weight: 700; cursor: pointer; }
.btn-continue { flex: 1; padding: 14px; background: linear-gradient(135deg, var(--accent), var(--accent2)); color: white; border: none; border-radius: 12px; font-size: 13px; font-weight: 800; cursor: pointer; box-shadow: 0 4px 20px var(--shadow); display: flex; align-items: center; justify-content: center; gap: 8px; transition: opacity .2s; }
.btn-continue:disabled { background: #888; box-shadow: none; cursor: not-allowed; }
.spinner { display: inline-block; animation: spin .7s linear infinite; }
.checkout-sidebar { width: 260px; background: var(--bg-card); padding: 20px 18px; overflow-y: auto; border-left: 1px solid var(--border); flex-shrink: 0; }
@media (max-width: 767px) { .checkout-sidebar { display: none; } }
.sidebar-title { font-size: 11px; font-weight: 800; letter-spacing: 1.5px; color: var(--text-sub); margin-bottom: 14px; }
.sidebar-item { display: flex; gap: 8px; margin-bottom: 10px; }
.sidebar-item img { width: 48px; height: 60px; object-fit: cover; object-position: top; border-radius: 6px; }
.sidebar-img-wrap { position: relative; }
.sidebar-qty-badge { position: absolute; top: -5px; right: -5px; background: var(--accent); color: white; font-size: 8px; font-weight: 800; width: 16px; height: 16px; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
.sidebar-totals { margin-top: 12px; padding-top: 12px; border-top: 1px solid var(--border); }
.sidebar-total-row { display: flex; justify-content: space-between; margin-bottom: 6px; font-size: 11px; }
.sidebar-grand-total { display: flex; justify-content: space-between; margin-top: 10px; padding-top: 10px; border-top: 1px solid var(--border); }
.checkout-success { text-align: center; padding: 40px 16px; animation: scaleIn .5s cubic-bezier(.22,1,.36,1); display: none; }
.checkout-success.active { display: block; }
.success-check { width: 80px; height: 80px; background: linear-gradient(135deg, #2ecc71, #27ae60); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; font-size: 36px; color: white; animation: pop .5s cubic-bezier(.34,1.56,.64,1) .1s backwards; }

/* ───────────────────────── Contact Page ───────────────────────── */
.contact-hero { background: var(--bg-section); padding: 80px 20px 50px; text-align: center; position: relative; overflow: hidden; border-bottom: 1px solid var(--border); }
.contact-grid { max-width: 1100px; margin: 0 auto; padding: 24px 16px 100px; display: grid; grid-template-columns: 1fr 400px; gap: 40px; }
@media (max-width: 1023px) { .contact-grid { grid-template-columns: 1fr; gap: 32px; } }
.contact-type-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-bottom: 20px; }
.contact-type-btn { padding: 9px 6px; border: 1.5px solid var(--border); background: transparent; color: var(--text-sub); border-radius: 10px; cursor: pointer; font-size: 10px; font-weight: 700; transition: all .2s; text-align: center; line-height: 1.4; }
.contact-type-btn.selected { border-color: var(--accent); background: linear-gradient(135deg, rgba(214,58,110,.13), rgba(233,30,140,.07)); color: var(--accent); }
.contact-textarea { width: 100%; min-height: 140px; resize: vertical; }
.info-card { background: var(--modal-bg); border-radius: 16px; padding: 18px 20px; border: 1px solid var(--border); margin-bottom: 16px; transition: box-shadow .2s, transform .2s; cursor: default; }
.info-card.clickable { cursor: pointer; }
.info-card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px var(--shadow); }
.info-card-row { display: flex; align-items: flex-start; gap: 14px; }
.info-icon-box { width: 44px; height: 44px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0; }
.social-grid { display: flex; gap: 10px; flex-wrap: wrap; }
.social-item { flex: 1 1 calc(50% - 5px); border-radius: 12px; padding: 10px 12px; cursor: pointer; transition: all .2s; }
.social-item:hover { transform: scale(1.05); }
.faq-item { margin-bottom: 10px; padding-bottom: 10px; border-bottom: 1px solid var(--border); }
.faq-item:last-child { border: none; margin: 0; padding: 0; }
.success-screen { text-align: center; padding: 60px 24px; background: var(--bg-card); border-radius: 20px; border: 1px solid var(--border); animation: scaleIn .5s cubic-bezier(.22,1,.36,1); display: none; }
.success-screen.active { display: block; }
.contact-form-wrap.hidden { display: none; }
.char-counter { font-size: 11px; color: var(--text-faint); }
.char-counter.valid { color: #2ecc71; }

/* ───────────────────────── Generic Buttons ───────────────────────── */
.btn-pink { background: linear-gradient(135deg, var(--accent), var(--accent2)); color: white; border: none; padding: 12px 22px; font-size: 12px; font-weight: 700; letter-spacing: 1.5px; cursor: pointer; border-radius: 8px; transition: transform .15s; }
.btn-pink:hover { transform: scale(1.04); }
.btn-pink:active { transform: scale(.97); }

/* ───────────────────────── Page Transition ───────────────────────── */
.page { display: none; }
.page.active { display: block; animation: fadeUp .42s cubic-bezier(.22,1,.36,1); }

/* ───────────────────────── Scrollbar niceties ───────────────────────── */
::-webkit-scrollbar { width: 8px; height: 8px; }
::-webkit-scrollbar-thumb { background: var(--border); border-radius: 4px; }
