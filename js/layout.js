/* Shared header / footer – edit here once, every page updates.
   >>> Change CONFIG below with your real contact details. <<< */
window.CONFIG = {
  brand: 'Jijai Furniture',
  tagline: 'Crafted for homes that feel like home',
  phone: '+91 98765 43210',
  whatsapp: '919876543210',        // country code + number, no + or spaces
  email: 'hello@jijaifurniture.in',
  address: 'Showroom & Workshop, Pune, Maharashtra, India',
  hours: 'Mon – Sat · 10:00 AM – 7:00 PM'
};

(function () {
  document.documentElement.classList.add('js');
  const C = window.CONFIG;
  const page = document.body.dataset.page || '';
  const wa = (msg) => `https://wa.me/${C.whatsapp}?text=${encodeURIComponent(msg)}`;
  window.waLink = wa;

  const act = (...p) => (p.includes(page) ? 'active' : '');
  const IC = {bed:`<svg class="ic-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 20V6"/><path d="M3 16h18v4"/><path d="M21 16v-3a3 3 0 0 0-3-3h-7v6"/><circle cx="7" cy="12" r="1.8"/></svg>`,sofa:`<svg class="ic-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 11V8a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3"/><path d="M3 13a2 2 0 0 1 4 0v2h10v-2a2 2 0 0 1 4 0v5H3z"/><path d="M6 20v1M18 20v1"/></svg>`,table:`<svg class="ic-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><ellipse cx="12" cy="8" rx="9" ry="3"/><path d="M12 11v9M8 20h8"/></svg>`,chef:`<svg class="ic-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 14a4 4 0 1 1 1.500-7.700A4.500 4.500 0 0 1 16.500 6.300 4 4 0 1 1 18 14"/><path d="M6 14v6h12v-6M6 18h12"/></svg>`,grid:`<svg class="ic-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1.500"/><rect x="14" y="3" width="7" height="7" rx="1.500"/><rect x="3" y="14" width="7" height="7" rx="1.500"/><rect x="14" y="14" width="7" height="7" rx="1.500"/></svg>`,ruler:`<svg class="ic-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 17 17 3l4 4L7 21z"/><path d="m7 13 2 2M10 10l2 2M13 7l2 2"/></svg>`,crown:`<svg class="ic-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m3 8 4.500 4L12 5l4.500 7L21 8l-2 11H5z"/></svg>`,layout:`<svg class="ic-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M9 4v16M9 11h11"/></svg>`,leaf:`<svg class="ic-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 19C5 10 10 5 20 5c0 10-5 15-14 15"/><path d="M5 19c3-4 6-7 9-9"/></svg>`,home:`<svg class="ic-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/></svg>`,truck:`<svg class="ic-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 4h14v12H1zM15 8h4l3 3v5h-7z"/><circle cx="5.500" cy="18.500" r="2"/><circle cx="18.500" cy="18.500" r="2"/></svg>`,image:`<svg class="ic-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="1.800"/><path d="m3 17 5-5 4 4 3-3 6 6"/></svg>`,help:`<svg class="ic-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M9.500 9.500a2.500 2.500 0 1 1 3.500 2.300c-.7.400-1 .9-1 1.700M12 17h.01"/></svg>`,users:`<svg class="ic-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="8" r="3.500"/><path d="M2 20c0-3.500 3-6 7-6s7 2.500 7 6"/><circle cx="17" cy="9" r="2.500"/><path d="M17 14c3 0 5 2 5 5"/></svg>`,wrench:`<svg class="ic-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.700 6.300a4 4 0 0 0-5.400 5.400L3 18l3 3 6.300-6.300a4 4 0 0 0 5.400-5.400l-3 3-2.500-.5-.5-2.500z"/></svg>`,layers:`<svg class="ic-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 2 10 5-10 5L2 7zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,door:`<svg class="ic-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="3" width="14" height="18" rx="1.500"/><path d="M12 3v18M9 12h.01M15 12h.01"/></svg>`,spark:`<svg class="ic-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 3 2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/></svg>`,rupee:`<svg class="ic-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 4h12M6 9h12M9 4c5 0 7 2 7 5s-2 5-7 5l7 7"/></svg>`,wallet:`<svg class="ic-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 7h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="m3 7 12-3v3M16 14h2"/></svg>`,gem:`<svg class="ic-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3h12l4 6-10 12L2 9z"/><path d="M2 9h20M9 3l-2 6 5 12 5-12-2-6"/></svg>`,castle:`<svg class="ic-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 21V8l8-5 8 5v13"/><path d="M9 21v-6h6v6M4 21h16M12 3V1"/></svg>`,zap:`<svg class="ic-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg>`,cal:`<svg class="ic-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>`,cal2:`<svg class="ic-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/></svg>`,compass:`<svg class="ic-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m15.500 8.500-2 5-5 2 2-5z"/></svg>`,building:`<svg class="ic-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 21V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v17M15 9h4a1 1 0 0 1 1 1v11M3 21h18M9 7h2M9 11h2M9 15h2"/></svg>`,landmark:`<svg class="ic-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 21h18M4 10l8-6 8 6M6 10v8M10 10v8M14 10v8M18 10v8"/></svg>`,hat:`<svg class="ic-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 18h20M4 18a8 8 0 0 1 16 0M10 10V6h4v4"/></svg>`,palette:`<svg class="ic-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3a9 9 0 1 0 0 18c1.500 0 2-1 1.500-2.200-.5-1.200.2-2.300 1.500-2.300H17a4 4 0 0 0 4-4c0-5-4-9.500-9-9.500z"/><path d="M7.500 11h.01M10 7.500h.01M14.500 7.500h.01M17 11h.01"/></svg>`,briefcase:`<svg class="ic-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18"/></svg>`,coffee:`<svg class="ic-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 8h13v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z"/><path d="M17 10h2a2 2 0 0 1 0 4h-2M7 3v2M11 3v2M15 3v2"/></svg>`,scissors:`<svg class="ic-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4 8.100 15.900M14.500 14.500 20 20M8.100 8.100 12 12"/></svg>`,chat:`<svg class="ic-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a8 8 0 0 1-11.800 7L3 21l2-5.500A8 8 0 1 1 21 12z"/></svg>`,pin:`<svg class="ic-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>`,clock:`<svg class="ic-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>`,phone:`<svg class="ic-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.900v3a2 2 0 0 1-2.200 2 19.800 19.800 0 0 1-8.600-3.100 19.500 19.500 0 0 1-6-6A19.800 19.800 0 0 1 2.100 4.200 2 2 0 0 1 4.100 2h3a2 2 0 0 1 2 1.700c.1 1 .4 1.900.7 2.800a2 2 0 0 1-.5 2.100L8.100 9.900a16 16 0 0 0 6 6l1.300-1.300a2 2 0 0 1 2.100-.4c.9.3 1.800.6 2.800.7a2 2 0 0 1 1.700 2z"/></svg>`,mail:`<svg class="ic-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>`,check:`<svg class="ic-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/></svg>`,expand:`<svg class="ic-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>`};
  const dd = (href, ico, t, s) =>
    `<a href="${href}"><span class="ico">${IC[ico]||ico}</span><span><b>${t}</b><span class="s">${s}</span></span></a>`;

  const header = `
  <div class="announce"><span class="announce-icon" aria-hidden="true">${IC.spark}</span> Free design consultation &amp; home measurement in Pune <span class="announce-sep">|</span> <b>Call ${C.phone}</b></div>
  <header class="site-header">
    <div class="container nav">
      <a href="index.html" class="logo" aria-label="${C.brand} home">
        <span class="logo-mark" aria-hidden="true"><svg viewBox="0 0 32 32" fill="none"><path d="M8 5.5V18.5C8 22.2 10.6 24.5 14 24.5H23" stroke="currentColor" stroke-width="2.2" stroke-linecap="square"/><path d="M8 10H24M8 14H21M18 10V24.5" stroke="#C6A36B" stroke-width="1.7" stroke-linecap="square"/><path d="M5 27H27" stroke="currentColor" stroke-width="1.4"/></svg></span>
        <span>Jijai<small>Furniture</small></span>
      </a>
      <ul class="menu">
        <li class="${act('home')}"><a href="index.html">Home</a></li>
        <li class="${act('shop', 'bedroom', 'living', 'dining', 'kitchens')}">
          <button aria-haspopup="true">Shop <i class="caret"></i></button>
          <div class="dd wide">
            ${dd('bedroom.html', 'bed', 'Bedroom', 'Beds &amp; suites')}
            ${dd('living.html', 'sofa', 'Living Room', 'Sofas &amp; lounges')}
            ${dd('dining.html', 'table', 'Tables &amp; Dining', 'Coffee, side &amp; dining')}
            ${dd('kitchens.html', 'chef', 'Modular Kitchens', 'Island, L &amp; U shape')}
            ${dd('shop.html', 'grid', 'Shop All', 'Browse every piece')}
            ${dd('quote.html', 'ruler', 'Made to Order', 'Your size, your finish')}
          </div>
        </li>
        <li class="${act('styles')}">
          <button aria-haspopup="true">Styles <i class="caret"></i></button>
          <div class="dd">
            ${dd('styles.html#royal', 'crown', 'Royal &amp; Classic', 'Carved, gilded, grand')}
            ${dd('styles.html#modern', 'layout', 'Modern Minimal', 'Clean lines, calm tones')}
            ${dd('styles.html#contemporary', 'leaf', 'Soft Contemporary', 'Curves, bouclé, texture')}
          </div>
        </li>
        <li class="${act('services')}">
          <button aria-haspopup="true">Services <i class="caret"></i></button>
          <div class="dd">
            ${dd('services.html#custom', 'ruler', 'Custom Furniture', 'Built to your design')}
            ${dd('services.html#kitchen', 'chef', 'Kitchen &amp; Wardrobes', 'Modular installs')}
            ${dd('services.html#interiors', 'home', 'Interior Fit-outs', 'Full-room planning')}
            ${dd('services.html#delivery', 'truck', 'Delivery &amp; Setup', 'Careful installation')}
          </div>
        </li>
        <li class="${act('about', 'gallery', 'faq')}">
          <button aria-haspopup="true">Company <i class="caret"></i></button>
          <div class="dd">
            ${dd('about.html', 'users', 'About Us', 'Our story &amp; craft')}
            ${dd('gallery.html', 'image', 'Gallery', 'Real projects')}
            ${dd('faq.html', 'help', 'FAQs', 'Answers in one place')}
          </div>
        </li>
        <li class="${act('contact')}"><a href="contact.html">Contact</a></li>
      </ul>
      <div class="nav-cta">
        <a class="btn btn-primary btn-sm" href="quote.html">Get a Quote</a>
        <button class="burger" aria-label="Open menu"><i></i><i></i><i></i></button>
      </div>
    </div>
  </header>
  <div class="drawer" id="drawer">
    <div class="scrim"></div>
    <aside class="panel">
      <div class="top">
        <a href="index.html" class="logo"><span class="logo-mark" aria-hidden="true"><svg viewBox="0 0 32 32" fill="none"><path d="M8 5.5V18.5C8 22.2 10.6 24.5 14 24.5H23" stroke="currentColor" stroke-width="2.2" stroke-linecap="square"/><path d="M8 10H24M8 14H21M18 10V24.5" stroke="#C6A36B" stroke-width="1.7" stroke-linecap="square"/><path d="M5 27H27" stroke="currentColor" stroke-width="1.4"/></svg></span><span>Jijai<small>Furniture</small></span></a>
        <button class="close" aria-label="Close menu">×</button>
      </div>
      <a class="lnk" href="index.html">Home</a>
      <details class="acc-m"><summary>Shop</summary><div>
        <a href="bedroom.html">Bedroom</a><a href="living.html">Living Room</a>
        <a href="dining.html">Tables &amp; Dining</a><a href="kitchens.html">Modular Kitchens</a><a href="shop.html">Shop All</a></div></details>
      <details class="acc-m"><summary>Styles</summary><div>
        <a href="styles.html#royal">Royal &amp; Classic</a><a href="styles.html#modern">Modern Minimal</a>
        <a href="styles.html#contemporary">Soft Contemporary</a></div></details>
      <details class="acc-m"><summary>Services</summary><div>
        <a href="services.html#custom">Custom Furniture</a><a href="services.html#kitchen">Kitchen &amp; Wardrobes</a>
        <a href="services.html#interiors">Interior Fit-outs</a><a href="services.html#delivery">Delivery &amp; Setup</a></div></details>
      <details class="acc-m"><summary>Company</summary><div>
        <a href="about.html">About Us</a><a href="gallery.html">Gallery</a><a href="faq.html">FAQs</a></div></details>
      <a class="lnk" href="contact.html">Contact</a>
      <a class="btn btn-primary" href="quote.html">Get a Quote</a>
      <a class="btn btn-wa" href="${wa('Hello Jijai Furniture, I would like to know more.')}" target="_blank" rel="noopener">WhatsApp Us</a>
    </aside>
  </div>`;

  const footer = `
  <footer class="footer">
    <div class="container">
      <div class="f-grid">
        <div>
          <a href="index.html" class="logo"><span class="logo-mark" aria-hidden="true"><svg viewBox="0 0 32 32" fill="none"><path d="M8 5.5V18.5C8 22.2 10.6 24.5 14 24.5H23" stroke="currentColor" stroke-width="2.2" stroke-linecap="square"/><path d="M8 10H24M8 14H21M18 10V24.5" stroke="#C6A36B" stroke-width="1.7" stroke-linecap="square"/><path d="M5 27H27" stroke="currentColor" stroke-width="1.4"/></svg></span><span>Jijai<small>Furniture</small></span></a>
          <p>${C.tagline}. Handcrafted beds, sofas, dining sets and modular kitchens — made in our own workshop and delivered with care.</p>
          <div class="socials"><a href="#" aria-label="Instagram">IG</a><a href="#" aria-label="Facebook">FB</a><a href="#" aria-label="YouTube">YT</a><a href="#" aria-label="Pinterest">PN</a></div>
        </div>
        <div>
          <h4>Shop</h4>
          <ul><li><a href="bedroom.html">Bedroom</a></li><li><a href="living.html">Living Room</a></li><li><a href="dining.html">Tables &amp; Dining</a></li><li><a href="kitchens.html">Kitchens</a></li><li><a href="shop.html">All Products</a></li></ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul><li><a href="about.html">About Us</a></li><li><a href="services.html">Services</a></li><li><a href="styles.html">Styles</a></li><li><a href="gallery.html">Gallery</a></li><li><a href="faq.html">FAQs</a></li></ul>
        </div>
        <div>
          <h4>Visit &amp; Talk</h4>
          <ul>
            <li>${IC.pin}${C.address}</li>
            <li>${IC.clock}${C.hours}</li>
            <li>${IC.phone}<a href="tel:${C.phone.replace(/\s/g, '')}">${C.phone}</a></li>
            <li>${IC.mail}<a href="mailto:${C.email}">${C.email}</a></li>
          </ul>
          <form class="f-news" onsubmit="event.preventDefault();window.toast('Thanks! You are on our list.');this.reset()">
            <input type="email" required placeholder="Your email" aria-label="Email"><button>Join</button>
          </form>
        </div>
      </div>
      <div class="f-bottom"><span>© ${new Date().getFullYear()} ${C.brand}. All rights reserved.</span><span>Made with care in Maharashtra</span></div>
    </div>
  </footer>
  <a class="wa-float" href="${wa('Hello Jijai Furniture, I would like to know more.')}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
    <svg viewBox="0 0 32 32"><path d="M16 3C9 3 3.4 8.6 3.4 15.5c0 2.2.6 4.4 1.7 6.3L3 29l7.4-2c1.8 1 3.8 1.500 5.800 1.500 6.900 0 12.600-5.600 12.600-12.500S22.900 3 16 3zm0 22.800c-1.800 0-3.600-.5-5.100-1.400l-.4-.2-4.400 1.200 1.200-4.300-.3-.4a10.400 10.400 0 0 1-1.600-5.500C5.400 9.800 10.100 5.200 16 5.200s10.600 4.600 10.600 10.300S21.800 25.800 16 25.800zm5.800-7.700c-.3-.2-1.900-.9-2.200-1-.3-.1-.5-.2-.7.200-.2.300-.8 1-1 1.200-.2.200-.4.200-.7.100-.3-.2-1.400-.5-2.600-1.600-1-.9-1.600-1.900-1.800-2.200-.2-.3 0-.5.100-.7l.5-.6c.2-.2.200-.3.300-.5.100-.2.100-.4 0-.6l-1-2.300c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.100-.9.400-.3.300-1.100 1.100-1.100 2.600s1.100 3 1.300 3.200c.2.200 2.200 3.400 5.400 4.700 3.200 1.300 3.200.9 3.800.8.600-.1 1.900-.8 2.100-1.500.3-.7.300-1.400.2-1.500-.1-.2-.3-.3-.6-.4z"/></svg>
  </a>
  <div class="overlay lb" id="lb"><button class="x" aria-label="Close">×</button><img alt=""></div>
  <div class="overlay" id="qv"><div class="modal" role="dialog" aria-modal="true"><button class="x" aria-label="Close">×</button><div class="mi"><img alt=""></div><div class="mb"></div></div></div>
  <div class="toast" id="toast"></div>`;

  document.getElementById('site-header').innerHTML = header;
  document.getElementById('site-footer').innerHTML = footer;

  // drawer
  const drawer = document.getElementById('drawer');
  const burger = document.querySelector('.burger');
  const setDrawer = (o) => { drawer.classList.toggle('open', o); burger.classList.toggle('open', o); document.body.style.overflow = o ? 'hidden' : ''; };
  burger.addEventListener('click', () => setDrawer(!drawer.classList.contains('open')));
  drawer.querySelector('.scrim').addEventListener('click', () => setDrawer(false));
  drawer.querySelector('.close').addEventListener('click', () => setDrawer(false));
  drawer.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setDrawer(false)));

  // toast
  window.toast = (m) => {
    const t = document.getElementById('toast'); t.textContent = m; t.classList.add('show');
    clearTimeout(window.__tt); window.__tt = setTimeout(() => t.classList.remove('show'), 3200);
  };
})();
