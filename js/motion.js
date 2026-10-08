import { animate, hover, inView, press, stagger } from "https://cdn.jsdelivr.net/npm/motion@14.0.0/+esm";

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

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const seen = new WeakSet();
const played = new WeakSet();

const drawer = document.getElementById("mobileDrawer");
if (!reduceMotion && drawer) {
  drawer.style.transform = "translateX(100%)";
}

if (!reduceMotion) {
  document.querySelectorAll(".modal-card").forEach((card) => {
    card.style.transform = "scale(0.96)";
  });
  document.documentElement.classList.add("motion-ready");
}

document.documentElement.dataset.reveal = "motion";

function siblingDelay(element) {
  const siblings = element.parentElement
    ? [...element.parentElement.children].filter((child) => child.matches(REVEAL_SELECTOR))
    : [];
  return Math.min(Math.max(0, siblings.indexOf(element)), 5) * 0.05;
}

function settleReveal(element) {
  element.style.willChange = "";
  element.style.opacity = "";
  element.style.transform = "";
  element.classList.add("is-visible");
}

function playReveal(element) {
  if (played.has(element)) return;
  played.add(element);
  element.style.willChange = "transform, opacity";
  const animation = animate(
    element,
    { opacity: [0, 1], y: [28, 0] },
    { type: "spring", bounce: 0, visualDuration: 0.4, delay: siblingDelay(element) }
  );

  animation.finished.then(() => settleReveal(element), () => settleReveal(element));
}

function arm(element) {
  if (!(element instanceof Element) || seen.has(element) || !element.matches(REVEAL_SELECTOR)) return;
  seen.add(element);
  element.classList.add("reveal");

  if (reduceMotion) {
    element.classList.add("is-visible");
    return;
  }

  inView(element, () => playReveal(element), { amount: "some" });
}

function scan(root) {
  if (!(root instanceof Element || root instanceof Document)) return;
  if (root instanceof Element) arm(root);
  root.querySelectorAll(REVEAL_SELECTOR).forEach(arm);
}

function initReveal() {
  scan(document);

  const mutationObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node instanceof Element) {
          scan(node);
          initGestures(node);
        }
      });
    });
  });

  mutationObserver.observe(document.body, { childList: true, subtree: true });
}

function initDrawer() {
  if (reduceMotion || !drawer) return;

  let open = drawer.classList.contains("open");

  const observer = new MutationObserver(() => {
    const next = drawer.classList.contains("open");
    if (next === open) return;
    open = next;
    drawer.style.willChange = "transform";
    const animation = animate(
      drawer,
      { x: open ? 0 : "100%" },
      { type: "spring", bounce: 0, visualDuration: 0.32 }
    );
    animation.finished.finally(() => {
      drawer.style.willChange = "";
    });
    initDrawerLinks(open);
  });

  observer.observe(drawer, { attributes: true, attributeFilter: ["class"] });
}

function initModals() {
  if (reduceMotion) return;

  document.querySelectorAll(".modal-overlay").forEach((overlay) => {
    const card = overlay.querySelector(".modal-card");
    if (!card) return;

    let open = overlay.classList.contains("active");

    const observer = new MutationObserver(() => {
      const next = overlay.classList.contains("active");
      if (next === open) return;
      open = next;
      card.style.willChange = "transform";
      const animation = animate(
        card,
        { scale: open ? 1 : 0.96 },
        { type: "spring", bounce: 0, visualDuration: 0.28 }
      );
      animation.finished.finally(() => {
        card.style.willChange = "";
      });
    });

    observer.observe(overlay, { attributes: true, attributeFilter: ["class"] });
  });
}

const gestureSpring = { type: "spring", bounce: 0, visualDuration: 0.16 };
const hovered = new WeakSet();
const pressed = new WeakSet();

function restGesture(element) {
  element.style.willChange = "";
}

function initGestures(root) {
  if (reduceMotion || !(root instanceof Element || root instanceof Document)) return;

  const scope = root instanceof Document ? root : root;
  const nodes = [];
  if (scope instanceof Element && scope.matches(".btn, .filter-btn, .theme-toggle-btn, .mobile-menu-btn, .modal-close-btn")) {
    nodes.push(scope);
  }
  scope.querySelectorAll(".btn, .filter-btn, .theme-toggle-btn, .mobile-menu-btn, .modal-close-btn").forEach((node) => nodes.push(node));

  nodes.forEach((element) => {
    if (!hovered.has(element) && element.matches(".btn, .filter-btn")) {
      hovered.add(element);
      hover(element, () => {
        element.style.willChange = "transform";
        animate(element, { y: -2 }, gestureSpring);
        return () => animate(element, { y: 0 }, gestureSpring).finished.finally(() => restGesture(element));
      });
    }

    if (!pressed.has(element) && element.matches("button")) {
      pressed.add(element);
      press(element, () => {
        element.style.willChange = "transform";
        animate(element, { scale: 0.97 }, gestureSpring);
        return () => animate(element, { scale: 1 }, gestureSpring).finished.finally(() => restGesture(element));
      });
    }
  });
}

function initFilterSwap() {
  if (reduceMotion) return;

  let pass = false;
  let run = 0;

  document.addEventListener("click", (event) => {
    if (pass) return;
    const button = event.target instanceof Element ? event.target.closest(".filter-btn") : null;
    if (!button || button.classList.contains("active")) return;

    const cards = [...document.querySelectorAll("#projectsGrid .project-card")];
    if (!cards.length) return;

    event.preventDefault();
    event.stopPropagation();

    const current = ++run;
    const leaving = cards.map((card, index) => animate(
      card,
      { opacity: 0, y: 10 },
      { duration: 0.16, ease: "easeOut", delay: Math.min(index, 4) * 0.03 }
    ));

    Promise.all(leaving.map((animation) => animation.finished)).then(() => {
      if (current !== run) return;
      pass = true;
      button.click();
      pass = false;
    });
  }, true);
}

function initArchitectureSwap() {
  if (reduceMotion) return;

  const box = document.getElementById("archExplanationBox");
  if (!box) return;

  let pass = false;

  document.addEventListener("click", (event) => {
    if (pass) return;
    const node = event.target instanceof Element ? event.target.closest(".arch-node") : null;
    if (!node || node.classList.contains("active")) return;

    event.preventDefault();
    event.stopPropagation();

    animate(box, { opacity: 0, y: 6 }, { duration: 0.12, ease: "easeOut" }).finished.then(() => {
      pass = true;
      node.click();
      pass = false;
      box.style.willChange = "transform, opacity";
      animate(box, { opacity: 1, y: 0 }, { type: "spring", bounce: 0, visualDuration: 0.28 })
        .finished.finally(() => {
          box.style.willChange = "";
          box.style.transform = "";
          box.style.opacity = "";
        });
    });
  }, true);
}

function initDrawerLinks(open) {
  const links = [...drawer.querySelectorAll(".drawer-link")];
  if (!open) {
    links.forEach((link) => {
      link.style.opacity = "";
      link.style.transform = "";
    });
    return;
  }

  animate(
    links,
    { opacity: [0, 1], x: [12, 0] },
    { type: "spring", bounce: 0, visualDuration: 0.26, delay: stagger(0.04) }
  );
}

function initToasts() {
  if (reduceMotion) return;

  window.motionDismissToast = (toast) => {
    animate(toast, { opacity: 0, x: 16 }, { duration: 0.18, ease: "easeOut" })
      .finished.then(() => toast.remove(), () => toast.remove());
  };

  const container = document.querySelector(".toast-container");
  if (!container) return;

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (!(node instanceof Element) || !node.classList.contains("toast")) return;
        node.style.willChange = "transform, opacity";
        animate(node, { opacity: [0, 1], x: [20, 0] }, { type: "spring", bounce: 0, visualDuration: 0.3 })
          .finished.finally(() => {
            node.style.willChange = "";
          });
      });
    });
  });

  observer.observe(container, { childList: true });
}

function initFormErrors() {
  if (reduceMotion) return;

  document.querySelectorAll(".form-group").forEach((group) => {
    let errored = group.classList.contains("has-error");
    const observer = new MutationObserver(() => {
      const next = group.classList.contains("has-error");
      if (next && !errored) {
        const field = group.querySelector(".form-input, .form-textarea");
        if (field) {
          animate(field, { x: [0, -5, 5, -2, 0] }, { duration: 0.35, ease: "easeOut" })
            .finished.finally(() => {
              field.style.transform = "";
            });
        }
      }
      errored = next;
    });
    observer.observe(group, { attributes: true, attributeFilter: ["class"] });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initReveal();
  initGestures(document);
  initDrawer();
  initModals();
  initFilterSwap();
  initArchitectureSwap();
  initToasts();
  initFormErrors();
});
