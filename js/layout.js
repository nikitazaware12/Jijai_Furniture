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
  const dd = (href, ico, t, s) =>
    `<a href="${href}"><span class="ico">${ico}</span><span><b>${t}</b><span class="s">${s}</span></span></a>`;

  const header = `
  <div class="announce"><span class="announce-icon" aria-hidden="true">◇</span> Free design consultation &amp; home measurement in Pune <span class="announce-sep">|</span> <b>Call ${C.phone}</b></div>
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
            ${dd('bedroom.html', '▤', 'Bedroom', 'Beds &amp; suites')}
            ${dd('living.html', '▰', 'Living Room', 'Sofas &amp; lounges')}
            ${dd('dining.html', '◉', 'Tables &amp; Dining', 'Coffee, side &amp; dining')}
            ${dd('kitchens.html', '⌂', 'Modular Kitchens', 'Island, L &amp; U shape')}
            ${dd('shop.html', '◇', 'Shop All', 'Browse every piece')}
            ${dd('quote.html', '⌁', 'Made to Order', 'Your size, your finish')}
          </div>
        </li>
        <li class="${act('styles')}">
          <button aria-haspopup="true">Styles <i class="caret"></i></button>
          <div class="dd">
            ${dd('styles.html#royal', '♛', 'Royal &amp; Classic', 'Carved, gilded, grand')}
            ${dd('styles.html#modern', '◼', 'Modern Minimal', 'Clean lines, calm tones')}
            ${dd('styles.html#contemporary', '❧', 'Soft Contemporary', 'Curves, bouclé, texture')}
          </div>
        </li>
        <li class="${act('services')}">
          <button aria-haspopup="true">Services <i class="caret"></i></button>
          <div class="dd">
            ${dd('services.html#custom', '⌁', 'Custom Furniture', 'Built to your design')}
            ${dd('services.html#kitchen', '⌂', 'Kitchen &amp; Wardrobes', 'Modular installs')}
            ${dd('services.html#interiors', '⌂', 'Interior Fit-outs', 'Full-room planning')}
            ${dd('services.html#delivery', '▰', 'Delivery &amp; Setup', 'Careful installation')}
          </div>
        </li>
        <li class="${act('about', 'gallery', 'faq')}">
          <button aria-haspopup="true">Company <i class="caret"></i></button>
          <div class="dd">
            ${dd('about.html', '♧', 'About Us', 'Our story &amp; craft')}
            ${dd('gallery.html', '▧', 'Gallery', 'Real projects')}
            ${dd('faq.html', '○', 'FAQs', 'Answers in one place')}
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
            <li>⌖ ${C.address}</li>
            <li>◷ ${C.hours}</li>
            <li>⌕ <a href="tel:${C.phone.replace(/\s/g, '')}">${C.phone}</a></li>
            <li>✉ <a href="mailto:${C.email}">${C.email}</a></li>
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
