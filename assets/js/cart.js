/**
 * DasTech Global Cart & Commerce System
 * Handles persistent shopping cart, slide-in drawer, toast notifications, and checkout flow.
 */

(function () {
  "use strict";

  const CART_STORAGE_KEY = "dastech_cart_items_v1";

  // Helper to get cart from localStorage
  function getStoredCart() {
    try {
      const data = localStorage.getItem(CART_STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error("Failed to read cart from localStorage:", e);
      return [];
    }
  }

  // Helper to save cart to localStorage
  function saveCart(cart) {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
      updateCartUI();
    } catch (e) {
      console.error("Failed to save cart to localStorage:", e);
    }
  }

  // Public DasTechCart API
  window.DasTechCart = {
    getItems: function () {
      return getStoredCart();
    },

    getCount: function () {
      const items = getStoredCart();
      return items.reduce((acc, item) => acc + (item.quantity || 1), 0);
    },

    getSubtotal: function () {
      const items = getStoredCart();
      return items.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);
    },

    addItem: function (productId, buyNow = false) {
      if (!window.DasTechData || !window.DasTechData.products) {
        console.error("DasTechData products catalog not loaded");
        return;
      }

      const product = window.DasTechData.products.find((p) => p.id === productId);
      if (!product) {
        console.error("Product not found:", productId);
        return;
      }

      let cart = getStoredCart();
      const existingIndex = cart.findIndex((item) => item.id === productId);

      if (existingIndex > -1) {
        cart[existingIndex].quantity = (cart[existingIndex].quantity || 1) + 1;
      } else {
        cart.push({
          id: product.id,
          name: product.name,
          price: product.price,
          category: product.category,
          image: product.image,
          slug: product.slug,
          quantity: 1
        });
      }

      saveCart(cart);

      if (buyNow) {
        window.location.href = "checkout.html";
        return;
      }

      showToast(`Added <strong>${product.name}</strong> to your cart!`);
      openCartDrawer();
    },

    removeItem: function (productId) {
      let cart = getStoredCart();
      cart = cart.filter((item) => item.id !== productId);
      saveCart(cart);
      showToast("Item removed from cart.", "info");
    },

    updateQuantity: function (productId, quantity) {
      let cart = getStoredCart();
      const item = cart.find((i) => i.id === productId);
      if (item) {
        if (quantity <= 0) {
          cart = cart.filter((i) => i.id !== productId);
        } else {
          item.quantity = quantity;
        }
        saveCart(cart);
      }
    },

    clearCart: function () {
      saveCart([]);
      showToast("Cart has been cleared.", "info");
    },

    openDrawer: function () {
      openCartDrawer();
    },

    closeDrawer: function () {
      closeCartDrawer();
    }
  };

  // Toast notification UI
  function showToast(message, type = "success") {
    let container = document.getElementById("dastech-toast-container");
    if (!container) {
      container = document.createElement("div");
      container.id = "dastech-toast-container";
      container.className = "dastech-toast-container";
      document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = `dastech-toast dastech-toast-${type} shadow-lg`;
    toast.innerHTML = `
      <div class="toast-content d-flex align-items-center">
        <i class="bi ${type === 'success' ? 'bi-check-circle-fill text-success' : 'bi-info-circle-fill text-primary'} me-2 fs-5"></i>
        <div>${message}</div>
      </div>
      <button type="button" class="btn-close ms-3" aria-label="Close"></button>
    `;

    toast.querySelector(".btn-close").addEventListener("click", () => {
      toast.remove();
    });

    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add("toast-fade-out");
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  // Slide-in Cart Drawer DOM injection & management
  function initCartDrawerDOM() {
    if (document.getElementById("dastech-cart-drawer")) return;

    const drawer = document.createElement("div");
    drawer.id = "dastech-cart-drawer";
    drawer.className = "dastech-cart-drawer";
    drawer.innerHTML = `
      <div class="drawer-backdrop" id="dastech-drawer-backdrop"></div>
      <div class="drawer-panel">
        <div class="drawer-header d-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center">
            <i class="bi bi-bag-check-fill text-primary fs-4 me-2"></i>
            <h5 class="mb-0 fw-bold">Your Digital Cart</h5>
          </div>
          <button type="button" class="btn-close" id="dastech-drawer-close" aria-label="Close"></button>
        </div>

        <div class="drawer-body" id="dastech-drawer-items">
          <!-- Items populated dynamically -->
        </div>

        <div class="drawer-footer" id="dastech-drawer-footer">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-muted fw-semibold">Subtotal</span>
            <span class="fs-5 fw-bold text-dark" id="dastech-drawer-subtotal">$0.00</span>
          </div>
          <p class="small text-muted mb-3"><i class="bi bi-shield-lock-fill text-success me-1"></i> Instant digital license delivery & updates included.</p>
          <div class="d-grid gap-2">
            <a href="checkout.html" class="btn btn-dastech-primary py-2 fw-semibold">
              Proceed to Checkout <i class="bi bi-arrow-right ms-1"></i>
            </a>
            <a href="cart.html" class="btn btn-dastech-outline py-2 fw-semibold">
              View Full Cart
            </a>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(drawer);

    document.getElementById("dastech-drawer-backdrop").addEventListener("click", closeCartDrawer);
    document.getElementById("dastech-drawer-close").addEventListener("click", closeCartDrawer);
  }

  function openCartDrawer() {
    initCartDrawerDOM();
    updateDrawerContent();
    const drawer = document.getElementById("dastech-cart-drawer");
    if (drawer) {
      drawer.classList.add("is-open");
      document.body.classList.add("drawer-open");
    }
  }

  function closeCartDrawer() {
    const drawer = document.getElementById("dastech-cart-drawer");
    if (drawer) {
      drawer.classList.remove("is-open");
      document.body.classList.remove("drawer-open");
    }
  }

  function updateDrawerContent() {
    const itemsContainer = document.getElementById("dastech-drawer-items");
    const subtotalEl = document.getElementById("dastech-drawer-subtotal");
    const footerEl = document.getElementById("dastech-drawer-footer");
    if (!itemsContainer) return;

    const cart = getStoredCart();

    if (cart.length === 0) {
      itemsContainer.innerHTML = `
        <div class="text-center py-5">
          <div class="empty-cart-icon mb-3">
            <i class="bi bi-bag-x text-muted" style="font-size: 3.5rem;"></i>
          </div>
          <h6 class="fw-bold">Your cart is empty</h6>
          <p class="text-muted small">Explore our ready-to-deploy digital products & starter kits.</p>
          <a href="products.html" class="btn btn-dastech-primary btn-sm mt-2" onclick="DasTechCart.closeDrawer()">Browse Products</a>
        </div>
      `;
      if (footerEl) footerEl.style.display = "none";
      return;
    }

    if (footerEl) footerEl.style.display = "block";

    let html = '<div class="drawer-items-list">';
    cart.forEach((item) => {
      html += `
        <div class="drawer-item d-flex align-items-center mb-3 pb-3 border-bottom">
          <img src="${item.image}" alt="${item.name}" class="drawer-item-img rounded me-3" style="width: 54px; height: 54px; object-fit: cover;">
          <div class="flex-grow-1">
            <div class="d-flex justify-content-between align-items-start">
              <a href="product-details.html?id=${item.id}" class="drawer-item-title fw-bold text-dark text-decoration-none">${item.name}</a>
              <button class="btn btn-link text-danger p-0 ms-2 remove-item-btn" data-id="${item.id}" title="Remove"><i class="bi bi-trash"></i></button>
            </div>
            <div class="d-flex justify-content-between align-items-center mt-1">
              <span class="badge bg-light text-dark border small">${item.category}</span>
              <span class="fw-bold text-primary">$${item.price.toFixed(2)}</span>
            </div>
          </div>
        </div>
      `;
    });
    html += "</div>";

    itemsContainer.innerHTML = html;

    const subtotal = DasTechCart.getSubtotal();
    if (subtotalEl) {
      subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    }

    // Attach listeners
    itemsContainer.querySelectorAll(".remove-item-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const id = btn.getAttribute("data-id");
        DasTechCart.removeItem(id);
        updateDrawerContent();
      });
    });
  }

  // Update all badges and cart counters on the page
  function updateCartUI() {
    const count = DasTechCart.getCount();
    const subtotal = DasTechCart.getSubtotal();

    // Navbar cart badges
    document.querySelectorAll(".dastech-cart-badge").forEach((el) => {
      el.textContent = count;
      el.style.display = count > 0 ? "inline-flex" : "none";
    });

    document.querySelectorAll(".dastech-cart-text").forEach((el) => {
      el.textContent = `Cart (${count})`;
    });

    // Update drawer if open
    const drawer = document.getElementById("dastech-cart-drawer");
    if (drawer && drawer.classList.contains("is-open")) {
      updateDrawerContent();
    }

    // Custom event for reactive page updates (e.g. cart.html or checkout.html)
    window.dispatchEvent(
      new CustomEvent("dastech:cart-updated", {
        detail: { count, subtotal, items: getStoredCart() }
      })
    );
  }

  // Auto init on DOMContentLoaded
  document.addEventListener("DOMContentLoaded", function () {
    initCartDrawerDOM();
    updateCartUI();

    // Delegate cart action clicks
    document.addEventListener("click", function (e) {
      const addBtn = e.target.closest("[data-dastech-add-cart]");
      if (addBtn) {
        e.preventDefault();
        const id = addBtn.getAttribute("data-dastech-add-cart");
        DasTechCart.addItem(id, false);
      }

      const buyBtn = e.target.closest("[data-dastech-buy-now]");
      if (buyBtn) {
        e.preventDefault();
        const id = buyBtn.getAttribute("data-dastech-buy-now");
        DasTechCart.addItem(id, true);
      }

      const openCartBtn = e.target.closest("[data-dastech-open-cart]");
      if (openCartBtn) {
        e.preventDefault();
        DasTechCart.openDrawer();
      }
    });
  });
})();
