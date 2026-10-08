/**
 * Main Application Logic
 * Mohamed Mohamed Salah - Portfolio
 */

// Theme Management
function initTheme() {
  const themeToggleButtons = document.querySelectorAll(".theme-toggle-btn");
  const savedTheme = localStorage.getItem("portfolio-theme") || "dark";

  document.documentElement.setAttribute("data-theme", savedTheme);

  themeToggleButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      
      document.documentElement.setAttribute("data-theme", nextTheme);
      localStorage.setItem("portfolio-theme", nextTheme);
    });
  });
}

// Navigation & ScrollSpy
function initNavigation() {
  const header = document.querySelector(".site-header");
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const closeDrawerBtn = document.getElementById("closeDrawerBtn");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const drawerOverlay = document.getElementById("drawerOverlay");
  const drawerLinks = document.querySelectorAll(".drawer-link");
  const navLinks = document.querySelectorAll(".nav-link");

  // Sticky header on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      header?.classList.add("scrolled");
    } else {
      header?.classList.remove("scrolled");
    }
  });

  // Mobile menu open/close
  function openDrawer() {
    mobileDrawer?.classList.add("open");
    drawerOverlay?.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    mobileDrawer?.classList.remove("open");
    drawerOverlay?.classList.remove("open");
    document.body.style.overflow = "";
  }

  mobileMenuBtn?.addEventListener("click", openDrawer);
  closeDrawerBtn?.addEventListener("click", closeDrawer);
  drawerOverlay?.addEventListener("click", closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener("click", closeDrawer);
  });

  // ScrollSpy
  const sections = document.querySelectorAll("section[id]");

  function updateScrollSpy() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", updateScrollSpy);
  updateScrollSpy();
}

function initPortrait() {
  const modal = document.getElementById("portraitModal");
  const openButtons = document.querySelectorAll("#openPortraitBtn, #openPortraitBtnDrawer");
  const closeButton = document.getElementById("closePortraitBtn");
  if (!modal) return;

  function openPortrait() {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closePortrait() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }

  openButtons.forEach((button) => button.addEventListener("click", openPortrait));
  closeButton?.addEventListener("click", closePortrait);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closePortrait();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("active")) closePortrait();
  });
}

const REVEAL_SELECTOR = [
  ".hero-content",
  ".hero-visual",
  ".section-header",
  ".about-text",
  ".about-feature-card",
  ".metric-card",
  ".timeline-item",
  ".projects-filter-bar",
  ".project-card",
  ".arch-node",
  ".arch-cross-pill",
  ".skill-category-card",
  ".education-card",
  ".contact-card-item",
  ".contact-form"
].join(", ");

function initScrollReveal() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const seen = new WeakSet();

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.16,
    rootMargin: "0px 0px -8% 0px"
  });

  function arm(element) {
    if (!(element instanceof Element) || seen.has(element) || !element.matches(REVEAL_SELECTOR)) return;
    seen.add(element);

    const siblings = element.parentElement
      ? [...element.parentElement.children].filter((child) => child.matches(REVEAL_SELECTOR))
      : [];
    const index = Math.max(0, siblings.indexOf(element));
    element.style.setProperty("--reveal-delay", `${Math.min(index, 8) * 80}ms`);
    element.classList.add("reveal");

    if (reduceMotion) {
      element.classList.add("is-visible");
      return;
    }

    observer.observe(element);
  }

  function scan(root) {
    if (!(root instanceof Element || root instanceof Document)) return;
    if (root instanceof Element) arm(root);
    root.querySelectorAll(REVEAL_SELECTOR).forEach(arm);
  }

  scan(document);

  const mutationObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node instanceof Element) scan(node);
      });
    });
  });

  mutationObserver.observe(document.body, { childList: true, subtree: true });
}

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initNavigation();
  initPortrait();
  initScrollReveal();
});
