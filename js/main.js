/* Page behaviour: product grids, quick view, filters, scrollers, lightbox, quote wizard, forms */
(function () {
  const P = window.PRODUCTS || [];
  const IMG = (f) => 'images/' + f;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* ---------- reveal on scroll ---------- */
  const io = 'IntersectionObserver' in window
    ? new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: 0.08, rootMargin: '0px 0px -30px 0px' })
    : null;
  const observe = (root = document) => $$('.reveal:not(.in)', root).forEach((el) => (io ? io.observe(el) : el.classList.add('in')));

  /* ---------- product cards ---------- */
  const card = (p) => `
    <article class="pcard reveal" data-id="${p.id}">
      <div class="im">
        <img src="${IMG(p.img)}" alt="${p.name}" loading="lazy">
        <span class="tag">${p.tag}</span>
        <button class="qv" aria-label="Quick view ${p.name}">⤢</button>
      </div>
      <div class="bd">
        <h3>${p.name}</h3>
        <div class="meta">${window.CATS[p.cat].label} · ${p.size}</div>
        <div class="foot"><span class="mat">${p.mat}</span></div>
      </div>
    </article>`;

  $$('[data-products]').forEach((box) => {
    const { cat, style, limit, ids } = box.dataset;
    let list = P;
    if (cat) list = list.filter((p) => p.cat === cat);
    if (style) list = list.filter((p) => p.style === style);
    if (ids) list = ids.split(',').map((i) => P.find((p) => p.id === i)).filter(Boolean);
    if (limit) list = list.slice(0, +limit);
    box.innerHTML = list.map(card).join('');
  });

  /* ---------- quick view ---------- */
  const qv = $('#qv');
  const openQV = (id) => {
    const p = P.find((x) => x.id === id); if (!p || !qv) return;
    $('.mi img', qv).src = IMG(p.img); $('.mi img', qv).alt = p.name;
    const msg = `Hello Jijai Furniture, I'm interested in "${p.name}". Please share details and a quote.`;
    $('.mb', qv).innerHTML = `
      <span class="tag">${p.tag}</span>
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <dl>
        <div><dt>Category</dt><dd>${window.CATS[p.cat].label}</dd></div>
        <div><dt>Material</dt><dd>${p.mat}</dd></div>
        <div><dt>Finish</dt><dd>${p.finish}</dd></div>
        <div><dt>Size</dt><dd>${p.size}</dd></div>
        <div><dt>Made-to-order lead time</dt><dd>${p.lead}</dd></div>
      </dl>
      <div class="acts">
        <a class="btn btn-wa btn-sm" target="_blank" rel="noopener" href="${window.waLink(msg)}">WhatsApp enquiry</a>
        <a class="btn btn-dark btn-sm" href="quote.html?product=${encodeURIComponent(p.name)}">Get a quote</a>
      </div>`;
    qv.classList.add('open'); document.body.style.overflow = 'hidden';
  };
  const closeOv = () => { $$('.overlay.open').forEach((o) => o.classList.remove('open')); document.body.style.overflow = ''; };
  document.addEventListener('click', (e) => {
    const c = e.target.closest('.pcard');
    if (c && !e.target.closest('a')) return openQV(c.dataset.id);
    if (e.target.closest('.overlay .x') || e.target.classList.contains('overlay')) closeOv();
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeOv(); });

  /* ---------- shop filters ---------- */
  const shop = $('#shop-grid');
  if (shop) {
    const chips = $$('.chip[data-f]');
    const input = $('#q');
    const empty = $('.empty');
    let cur = new URLSearchParams(location.search).get('cat') || 'all';
    let styleF = new URLSearchParams(location.search).get('style') || '';
    const render = () => {
      const q = (input && input.value || '').trim().toLowerCase();
      const list = P.filter((p) => (cur === 'all' || p.cat === cur) && (!styleF || p.style === styleF) &&
        (!q || (p.name + ' ' + p.mat + ' ' + p.style + ' ' + p.cat).toLowerCase().includes(q)));
      shop.innerHTML = list.map(card).join('');
      observe(shop);
      if (empty) empty.style.display = list.length ? 'none' : 'block';
      const cnt = $('#count'); if (cnt) cnt.textContent = list.length;
    };
    chips.forEach((c) => {
      c.classList.toggle('on', c.dataset.f === cur);
      c.addEventListener('click', () => { cur = c.dataset.f; styleF = ''; chips.forEach((x) => x.classList.toggle('on', x === c)); render(); });
    });
    if (input) input.addEventListener('input', render);
    render();
  }

  /* ---------- horizontal scrollers ---------- */
  $$('[data-scroller]').forEach((w) => {
    const track = $('.hscroll', w);
    const step = () => Math.max(260, track.clientWidth * 0.8);
    const prev = $('[data-prev]', w), next = $('[data-next]', w);
    if (prev) prev.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
    if (next) next.addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));
  });

  /* ---------- gallery lightbox ---------- */
  const lb = $('#lb');
  $$('.bento a').forEach((a) => a.addEventListener('click', (e) => {
    e.preventDefault(); $('img', lb).src = a.getAttribute('href'); lb.classList.add('open'); document.body.style.overflow = 'hidden';
  }));

  /* ---------- quote wizard ---------- */
  const wiz = $('#wizard');
  if (wiz) {
    const steps = $$('.wiz-step', wiz);
    const bars = $$('.progress i', wiz);
    const ans = {};
    let i = 0;
    const show = (n) => {
      i = n; steps.forEach((s, k) => s.classList.toggle('on', k === n));
      bars.forEach((b, k) => b.classList.toggle('on', k <= n));
      window.scrollTo({ top: wiz.offsetTop - 120, behavior: 'smooth' });
    };
    $$('.opt', wiz).forEach((o) => o.addEventListener('click', () => {
      const group = o.closest('.opts'); const key = group.dataset.key;
      $$('.opt', group).forEach((x) => x.classList.remove('on')); o.classList.add('on');
      ans[key] = o.dataset.val;
    }));
    $$('[data-next]', wiz).forEach((b) => b.addEventListener('click', () => {
      const group = steps[i].querySelector('.opts');
      if (group && !ans[group.dataset.key]) return window.toast('Please pick an option to continue');
      show(i + 1);
    }));
    $$('[data-back]', wiz).forEach((b) => b.addEventListener('click', () => show(Math.max(0, i - 1))));
    const pre = new URLSearchParams(location.search).get('product');
    if (pre) { const n = $('[name=message]', wiz); if (n) n.value = `I'm interested in: ${pre}\n`; }
    $('#wiz-form', wiz).addEventListener('submit', (e) => {
      e.preventDefault();
      const f = new FormData(e.target);
      const lines = [
        `Hello Jijai Furniture, I'd like a quote.`,
        `Need: ${ans.need}`, `Style: ${ans.style}`, `Budget: ${ans.budget}`, `Timeline: ${ans.time}`,
        `Name: ${f.get('name')}`, `Phone: ${f.get('phone')}`, `City: ${f.get('city') || '-'}`,
        f.get('message') ? `Notes: ${f.get('message')}` : ''
      ].filter(Boolean);
      const text = lines.join('\n');
      $('#sum', wiz).innerHTML = [['Looking for', ans.need], ['Style', ans.style], ['Budget', ans.budget], ['Timeline', ans.time], ['Name', f.get('name')], ['Phone', f.get('phone')]]
        .map(([a, b]) => `<div><dt>${a}</dt><dd>${b}</dd></div>`).join('');
      $('#wa-send', wiz).href = window.waLink(text);
      $('#mail-send', wiz).href = `mailto:${window.CONFIG.email}?subject=${encodeURIComponent('Quote request – ' + ans.need)}&body=${encodeURIComponent(text)}`;
      show(steps.length - 1);
    });
  }

  /* ---------- contact form ---------- */
  const cf = $('#contact-form');
  if (cf) cf.addEventListener('submit', (e) => {
    e.preventDefault();
    const f = new FormData(cf);
    const text = `Hello Jijai Furniture,\nName: ${f.get('name')}\nPhone: ${f.get('phone')}\nInterested in: ${f.get('topic')}\n${f.get('message')}`;
    window.toast('Opening WhatsApp with your message…');
    window.open(window.waLink(text), '_blank');
    cf.reset();
  });

  /* ---------- contact details from CONFIG ---------- */
  const C = window.CONFIG || {};
  const put = (id, fn) => { const el = document.getElementById(id); if (el) fn(el); };
  put('c-addr', (e) => (e.textContent = C.address));
  put('c-hrs', (e) => (e.textContent = C.hours));
  put('c-tel', (e) => { e.textContent = C.phone; e.href = 'tel:' + C.phone.replace(/\s/g, ''); });
  put('c-mail', (e) => { e.textContent = C.email; e.href = 'mailto:' + C.email; });

  observe();
})();
