/**
 * DasTech Next-Gen Interaction & Experience Engine (2026 Edition)
 * Controls Theme Switching, Custom Cursor with Context Badges, Mouse Spotlight,
 * Magnetic CTAs, 3D Perspective Tilt, Flying Cart Animation, Digital Universe,
 * Scroll Storytelling, and Live Product Preview Modals.
 */

(function () {
  "use strict";

  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ==========================================================================
     1. Theme Engine (Dark / Light / System)
     ========================================================================== */
  const THEME_KEY = "dastech_theme_pref";

  function getPreferredTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);

    // Update all theme toggle buttons
    document.querySelectorAll('.dastech-theme-toggle').forEach(btn => {
      const icon = btn.querySelector('i');
      if (icon) {
        if (theme === 'dark') {
          icon.className = 'bi bi-sun-fill text-warning';
          btn.setAttribute('title', 'Switch to Light Mode');
        } else {
          icon.className = 'bi bi-moon-stars-fill text-primary';
          btn.setAttribute('title', 'Switch to Dark Mode');
        }
      }
    });
  }

  function initTheme() {
    const initialTheme = getPreferredTheme();
    applyTheme(initialTheme);

    document.addEventListener('click', (e) => {
      const toggleBtn = e.target.closest('.dastech-theme-toggle');
      if (toggleBtn) {
        e.preventDefault();
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
      }
    });
  }

  /* ==========================================================================
     2. Custom Cursor with Contextual Text Badges (Desktop Only)
     ========================================================================== */
  let cursorDot = null;
  let cursorRing = null;
  let mouseX = 0;
  let mouseY = 0;
  let ringX = 0;
  let ringY = 0;
  let isCursorActive = false;

  function initCustomCursor() {
    if (isTouchDevice || prefersReducedMotion) return;

    cursorDot = document.createElement('div');
    cursorDot.className = 'dt-cursor-dot';

    cursorRing = document.createElement('div');
    cursorRing.className = 'dt-cursor-ring';
    cursorRing.innerHTML = '<span class="dt-cursor-text"></span>';

    document.body.appendChild(cursorDot);
    document.body.appendChild(cursorRing);

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isCursorActive) {
        isCursorActive = true;
        cursorDot.style.opacity = '1';
        cursorRing.style.opacity = '1';
      }
      cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    });

    document.addEventListener('mouseleave', () => {
      isCursorActive = false;
      cursorDot.style.opacity = '0';
      cursorRing.style.opacity = '0';
    });

    function renderCursor() {
      if (isCursorActive) {
        ringX += (mouseX - ringX) * 0.18;
        ringY += (mouseY - ringY) * 0.18;
        cursorRing.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
      requestAnimationFrame(renderCursor);
    }
    requestAnimationFrame(renderCursor);

    // Hover context listeners
    document.addEventListener('mouseover', (e) => {
      const target = e.target.closest('[data-cursor]');
      const cursorTextEl = cursorRing.querySelector('.dt-cursor-text');
      if (target) {
        const mode = target.getAttribute('data-cursor');
        cursorRing.classList.add('is-active', `mode-${mode.toLowerCase()}`);
        if (cursorTextEl) cursorTextEl.textContent = mode;
      } else {
        const link = e.target.closest('a, button, input, select, textarea, [role="button"]');
        if (link) {
          cursorRing.classList.add('is-hovering');
        }
      }
    });

    document.addEventListener('mouseout', (e) => {
      const target = e.target.closest('[data-cursor]');
      const cursorTextEl = cursorRing.querySelector('.dt-cursor-text');
      if (target) {
        cursorRing.className = 'dt-cursor-ring';
        if (cursorTextEl) cursorTextEl.textContent = '';
      } else {
        const link = e.target.closest('a, button, input, select, textarea, [role="button"]');
        if (link) {
          cursorRing.classList.remove('is-hovering');
        }
      }
    });
  }

  /* ==========================================================================
     3. Mouse Spotlight & Ambient Glow Engine
     ========================================================================== */
  function initMouseSpotlight() {
    if (isTouchDevice || prefersReducedMotion) return;

    document.addEventListener('mousemove', (e) => {
      const spotlightCards = document.querySelectorAll('.dastech-card, .product-card, .project-card, .bento-card, .service-box, .why-dastech-card');
      spotlightCards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    });
  }

  /* ==========================================================================
     4. Magnetic Buttons (Desktop)
     ========================================================================== */
  function initMagneticButtons() {
    if (isTouchDevice || prefersReducedMotion) return;

    const magneticElements = document.querySelectorAll('[data-magnetic]');
    magneticElements.forEach(el => {
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = (e.clientX - centerX) * 0.28;
        const deltaY = (e.clientY - centerY) * 0.28;
        el.style.transform = `translate3d(${deltaX}px, ${deltaY}px, 0)`;
      });

      el.addEventListener('mouseleave', () => {
        el.style.transform = 'translate3d(0px, 0px, 0)';
      });
    });
  }

  /* ==========================================================================
     5. 3D Perspective Tilt Engine
     ========================================================================== */
  function init3DTilt() {
    if (isTouchDevice || prefersReducedMotion) return;

    const tiltCards = document.querySelectorAll('[data-tilt]');
    tiltCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      });
    });
  }

  /* ==========================================================================
     6. Flying Add-To-Cart Projectile Animation
     ========================================================================== */
  window.triggerFlyingCartAnimation = function (startElement) {
    if (!startElement || prefersReducedMotion) return;

    const cartTarget = document.querySelector('.cart-btn-trigger');
    if (!cartTarget) return;

    const startRect = startElement.getBoundingClientRect();
    const endRect = cartTarget.getBoundingClientRect();

    const projectile = document.createElement('div');
    projectile.className = 'dt-flying-particle';
    projectile.style.left = `${startRect.left + startRect.width / 2}px`;
    projectile.style.top = `${startRect.top + startRect.height / 2}px`;
    document.body.appendChild(projectile);

    const deltaX = endRect.left + endRect.width / 2 - (startRect.left + startRect.width / 2);
    const deltaY = endRect.top + endRect.height / 2 - (startRect.top + startRect.height / 2);

    requestAnimationFrame(() => {
      projectile.style.transform = `translate3d(${deltaX}px, ${deltaY}px, 0) scale(0.2)`;
      projectile.style.opacity = '0.1';
    });

    setTimeout(() => {
      projectile.remove();
      cartTarget.classList.add('dt-cart-bump');
      setTimeout(() => cartTarget.classList.remove('dt-cart-bump'), 400);
    }, 600);
  };

  /* ==========================================================================
     7. Live Product Preview Modal Engine
     ========================================================================== */
  window.openLiveProductPreview = function (productId) {
    if (!window.DasTechData || !window.DasTechData.products) return;
    const product = window.DasTechData.products.find(p => p.id === productId) || window.DasTechData.products[0];

    let modal = document.getElementById('dt-live-preview-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'dt-live-preview-modal';
      modal.className = 'modal fade dt-preview-modal';
      modal.tabIndex = -1;
      modal.setAttribute('aria-hidden', 'true');
      document.body.appendChild(modal);
    }

    modal.innerHTML = `
      <div class="modal-dialog modal-xl modal-dialog-centered">
        <div class="modal-content border-0 rounded-4 overflow-hidden shadow-2xl bg-dark text-white">
          <div class="modal-header border-bottom border-secondary border-opacity-25 px-4 py-3 bg-dark-accent d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center gap-2">
              <span class="p-2 bg-primary bg-opacity-20 text-primary rounded-3"><i class="bi bi-window-fullscreen"></i></span>
              <div>
                <h6 class="mb-0 fw-bold text-white">${product.name}</h6>
                <span class="small text-muted font-monospace">https://demo.dastech.io/${product.slug}</span>
              </div>
            </div>
            <div class="d-flex align-items-center gap-3">
              <button class="btn btn-dastech-outline btn-sm py-1 px-3" data-dastech-add-cart="${product.id}">
                <i class="bi bi-bag-plus me-1"></i> Add to Cart ($${product.price})
              </button>
              <button class="btn btn-dastech-primary btn-sm py-1 px-3" data-dastech-buy-now="${product.id}">
                Buy Now
              </button>
              <button type="button" class="btn-close btn-close-white ms-2" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
          </div>

          <div class="modal-body p-0 bg-darker">
            <div class="preview-browser-frame">
              <div class="preview-toolbar px-3 py-2 border-bottom border-secondary border-opacity-25 d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center gap-2">
                  <span class="circle-dot red"></span>
                  <span class="circle-dot yellow"></span>
                  <span class="circle-dot green"></span>
                  <span class="badge bg-secondary bg-opacity-25 text-light ms-2 small font-monospace">Production V1.0.4</span>
                </div>
                <div class="d-flex gap-2">
                  <button class="btn btn-sm btn-dark text-light border border-secondary border-opacity-25 active-tab">UI Preview</button>
                  <button class="btn btn-sm btn-dark text-muted border border-secondary border-opacity-25" onclick="alert('Architecture Stack: ' + '${product.technologies.join(', ')}')">Stack Specs</button>
                </div>
              </div>

              <div class="preview-stage position-relative text-center p-3 p-md-5">
                <img src="${product.image}" alt="${product.name}" class="img-fluid rounded-3 shadow-lg border border-secondary border-opacity-50" style="max-height: 520px; object-fit: contain;">
                
                <div class="preview-live-overlay mt-4">
                  <p class="text-light opacity-75 small mb-3">${product.shortDescription}</p>
                  <div class="d-flex flex-wrap justify-content-center gap-2">
                    ${product.technologies.map(t => `<span class="tech-badge bg-secondary bg-opacity-25 text-light border-secondary">${t}</span>`).join('')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    const bsModal = new bootstrap.Modal(modal);
    bsModal.show();
  };

  /* ==========================================================================
     8. DasTech Digital Universe Interactive Graph Engine
     ========================================================================== */
  function initDigitalUniverse() {
    const container = document.getElementById('universeCanvasContainer');
    if (!container || !window.DasTechData) return;

    const products = window.DasTechData.products || [];
    const projects = window.DasTechData.projects || [];
    const allNodes = [
      ...products.slice(0, 4).map(p => ({ ...p, type: 'product', label: p.name, link: `product-details.html?id=${p.id}` })),
      ...projects.slice(0, 3).map(p => ({ ...p, type: 'project', label: p.title, link: `project-details.html?id=${p.id}` }))
    ];

    let html = `
      <div class="universe-core-node" data-cursor="EXPLORE">
        <span class="core-pulse-ring"></span>
        <span class="core-icon"><i class="bi bi-cpu-fill"></i></span>
        <span class="core-label">DasTech Core</span>
      </div>
    `;

    allNodes.forEach((node, idx) => {
      const pos = node.graphPos || { x: 20 + (idx * 12) % 60, y: 20 + (idx * 18) % 60 };
      html += `
        <a href="${node.link}" class="universe-node node-${node.type}" style="left: ${pos.x}%; top: ${pos.y}%;" data-cursor="${node.type === 'product' ? 'EXPLORE' : 'VIEW'}" data-universe-id="${node.id}">
          <span class="node-dot"></span>
          <span class="node-card">
            <span class="node-category">${node.category}</span>
            <span class="node-title">${node.name || node.title}</span>
            <span class="node-action">${node.type === 'product' ? `$${node.price} • View Details` : 'Read Case Study'} &rarr;</span>
          </span>
        </a>
      `;
    });

    container.innerHTML = html;
  }

  /* ==========================================================================
     9. Scroll Storytelling Observer ("Idea to Global Launch")
     ========================================================================== */
  function initScrollStorytelling() {
    const section = document.getElementById('scrollStorytellingSection');
    if (!section) return;

    const steps = section.querySelectorAll('.story-step-card');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          steps.forEach(s => s.classList.remove('is-active'));
          entry.target.classList.add('is-active');
        }
      });
    }, { threshold: 0.6 });

    steps.forEach(step => observer.observe(step));
  }

  /* ==========================================================================
     10. Interactive Tech Stack Constellation Filter
     ========================================================================== */
  function initTechStackInteractions() {
    const techBadges = document.querySelectorAll('.interactive-tech-chip');
    const displayBox = document.getElementById('techEcosystemDetail');
    if (!techBadges.length || !displayBox || !window.DasTechData) return;

    techBadges.forEach(badge => {
      badge.addEventListener('mouseenter', () => {
        const techName = badge.getAttribute('data-tech');
        const item = (window.DasTechData.techEcosystem || []).find(t => t.name.toLowerCase() === techName.toLowerCase());
        if (item) {
          displayBox.innerHTML = `
            <div class="p-3 rounded-4 bg-dark-card border border-primary border-opacity-25 shadow-lg animate-fade-in">
              <div class="d-flex justify-content-between align-items-center mb-1">
                <span class="badge bg-primary bg-opacity-20 text-primary font-monospace small">${item.category}</span>
                <span class="small text-muted">${item.projects.length} Implementations</span>
              </div>
              <h5 class="fw-bold text-white mb-1">${item.name}</h5>
              <p class="small text-light opacity-75 mb-2">${item.desc}</p>
              <div class="small text-muted"><strong class="text-primary">Featured in:</strong> ${item.projects.join(', ')}</div>
            </div>
          `;
        }
      });
    });
  }

  /* ==========================================================================
     11. Master Bootstrapping
     ========================================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initCustomCursor();
    initMouseSpotlight();
    initMagneticButtons();
    init3DTilt();
    initDigitalUniverse();
    initScrollStorytelling();
    initTechStackInteractions();

    // Event delegation for live product preview trigger
    document.addEventListener('click', (e) => {
      const previewBtn = e.target.closest('[data-dastech-preview]');
      if (previewBtn) {
        e.preventDefault();
        const id = previewBtn.getAttribute('data-dastech-preview');
        window.openLiveProductPreview(id);
      }
    });
  });
})();
