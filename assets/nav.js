(function () {
  // Derive the site root from this script's own URL so relative paths
  // work regardless of how deep the current page is.
  const root = document.currentScript.src.replace(/assets\/nav\.js(\?.*)?$/, '');

  // ── NAV STRUCTURE ─────────────────────────────────────────────────────────
  // To add a new page: add an entry here. hrefs are relative to site root.
  // To add a new section: add a new { section: '...', pages: [...] } block.
  const NAV = [
    { label: 'Home', href: 'index.html', home: true },
    {
      section: 'Design',
      pages: [
        { label: 'Economic Loop',     href: 'design/guild_economic_loop.html' },
        { label: 'Economic Diagrams', href: 'design/guild_economic_loop_detailed.html' },
        { label: 'Time Model',        href: 'design/guild_time_model.html' },
        { label: 'AI Design',         href: 'design/guild_ai_design.html' },
      ]
    },
  ];
  // ──────────────────────────────────────────────────────────────────────────

  function isActive(href) {
    const resolved = new URL(root + href, window.location.href).pathname;
    const current  = window.location.pathname;
    if (current === resolved) return true;
    // /path/ should match /path/index.html
    if (resolved.endsWith('/index.html') &&
        current === resolved.slice(0, -'index.html'.length)) return true;
    return false;
  }

  // Build sidebar HTML
  let html = '';
  for (const item of NAV) {
    if (item.home) {
      const cls = 'nav-home' + (isActive(item.href) ? ' nav-active' : '');
      html += `<a class="${cls}" href="${root}${item.href}">${item.label}</a>\n`;
    } else if (item.section) {
      html += `<div class="nav-section">${item.section}</div>\n`;
      for (const page of item.pages) {
        const cls = 'nav-link' + (isActive(page.href) ? ' nav-active' : '');
        html += `  <a class="${cls}" href="${root}${page.href}">${page.label}</a>\n`;
      }
    }
  }

  // Inject toggle button + sidebar before #content
  const content = document.getElementById('content');

  const toggle = document.createElement('button');
  toggle.className = 'nav-toggle';
  toggle.setAttribute('aria-label', 'Toggle navigation');
  toggle.textContent = '☰';

  const nav = document.createElement('nav');
  nav.className = 'nav-sidebar';
  nav.innerHTML = html;

  document.body.insertBefore(nav, content);
  document.body.insertBefore(toggle, nav);

  toggle.addEventListener('click', function () {
    nav.classList.toggle('open');
  });
})();
