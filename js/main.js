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

// CV Download / Print Viewer
function initCV() {
  const cvButtons = document.querySelectorAll(".download-cv-btn");
  
  cvButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      // If a dedicated PDF exists, it links directly; otherwise we provide quick print dialog or fallback
      const href = btn.getAttribute("href");
      if (!href || href === "#" || href === "#resume") {
        e.preventDefault();
        window.print();
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initNavigation();
  initCV();
});
