import { animate, inView } from "https://cdn.jsdelivr.net/npm/motion@14.0.0/+esm";

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
        if (node instanceof Element) scan(node);
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

document.addEventListener("DOMContentLoaded", () => {
  initReveal();
  initDrawer();
  initModals();
});
