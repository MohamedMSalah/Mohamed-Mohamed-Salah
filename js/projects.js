/**
 * Projects Data & Rendering
 * Mohamed Mohamed Salah - Portfolio
 */

const projectsData = [
  {
    id: "cms",
    image: "assets/projects/cms.webp",
    title: "Clinic Management System (CMS)",
    category: "fullstack",
    company: "DivenAI",
    duration: "April 2025 – June 2025",
    badge: "Production / Enterprise",
    badgeType: "primary",
    summary: "An end-to-end healthcare platform connecting Patients, Doctors, and Administrators with full appointment scheduling, diagnosis tracking, and medical record management.",
    technologies: ["Flutter", ".NET", "C#", "SQL Server", "REST APIs", "Swagger", "Entity Framework Core", "JWT / RBAC"],
    metrics: [
      { label: "Database Schema", value: "15+ Tables" },
      { label: "REST Endpoints", value: "10+ Endpoints" },
      { label: "Role Workflows", value: "3 User Roles" },
      { label: "API Validation", value: "100% Postman" }
    ],
    highlights: [
      "Designed the complete relational database architecture from scratch with 15+ normalized SQL tables.",
      "Implemented robust PK/FK relationships covering patients, doctors, appointments, diagnoses, medications, and medical records.",
      "Engineered cross-platform Flutter frontend ensuring 60 FPS smooth interactions and clean role-based dashboards.",
      "Developed high-performance ASP.NET Core backend with Entity Framework Core and role-based access control (RBAC).",
      "Implemented 10+ RESTful API endpoints for secure authentication, doctor schedule management, real-time booking, and patient records.",
      "Thoroughly tested and validated all API contracts using Postman test suites."
    ],
    architectureDetails: {
      frontend: "Flutter (Dart) with Clean Architecture and BLoC State Management",
      backend: "ASP.NET Core Web API with C#, Dependency Injection, and Repository Pattern",
      database: "Microsoft SQL Server with 15+ normalized relational tables and EF Core Migrations",
      security: "OAuth 2.0 / JWT Authentication with strict Role-Based Access Control (Admin, Doctor, Patient)"
    },
    github: "https://github.com/MohamedMSalah",
    live: null
  },
  {
    id: "alarmus",
    image: "assets/projects/alarmus.webp",
    title: "Alarmus — Collaborative Alarms",
    category: "mobile",
    company: "Lev AI / DivenAI",
    duration: "January 2025 – February 2025",
    badge: "Real-time / Utility",
    badgeType: "primary",
    summary: "Real-time notification-based collaborative alarm application allowing groups to coordinate schedules and wake-up alerts simultaneously.",
    technologies: ["Flutter", ".NET", "REST APIs", "Swagger", "Firebase Cloud Messaging", "Push Notifications"],
    metrics: [
      { label: "Group Testing", value: "10+ Members" },
      { label: "Swagger APIs", value: "10+ Endpoints" },
      { label: "Coordination", value: "Real-time Sync" },
      { label: "Client Stack", value: "Flutter Mobile" }
    ],
    highlights: [
      "Developed a real-time notification-based alarm system to synchronize alerts across multiple devices seamlessly.",
      "Implemented intuitive group creation and member management workflows.",
      "Enabled group owners and moderators to trigger simultaneous alarms and urgent notifications across all active devices.",
      "Successfully stress-tested with synchronized groups of 10+ concurrent members, dramatically reducing manual phone/chat coordination.",
      "Integrated Flutter mobile frontend with .NET backend using 10+ Swagger-documented RESTful endpoints."
    ],
    architectureDetails: {
      frontend: "Flutter cross-platform application with custom alarm background services and push listeners",
      backend: "ASP.NET Core backend coordinating group triggers and device token registries",
      notifications: "Firebase Cloud Messaging (FCM) & local scheduled notifications with high-priority channels",
      apiDoc: "OpenAPI / Swagger documentation for seamless API contract testing"
    },
    github: "https://github.com/MohamedMSalah",
    live: null
  },
  {
    id: "manetho",
    image: "assets/projects/manetho.webp",
    title: "Manetho — Hieroglyphic Translation",
    category: "ai",
    company: "Research / Innovation",
    duration: "April 2024 – June 2024",
    badge: "AI & Computer Vision",
    badgeType: "success",
    summary: "An intelligent Flutter mobile application leveraging dual AI models (Computer Vision + NLP) to detect, segment, and translate ancient Egyptian hieroglyphic symbols into modern text.",
    technologies: ["Flutter", "AI / Deep Learning", "Computer Vision", "NLP", "REST APIs", "Dart"],
    metrics: [
      { label: "Model Accuracy", value: "80% Accuracy" },
      { label: "Avg Latency", value: "< 10 Seconds" },
      { label: "Researcher Testing", value: "20+ Users" },
      { label: "AI Models", value: "2 Pipelines" }
    ],
    highlights: [
      "Built an intuitive cross-platform Flutter application tailored for tourists, Egyptologists, and researchers.",
      "Engineered dual AI pipeline: one Computer Vision model for hieroglyph symbol detection and segmentation, and an NLP model for linguistic translation.",
      "Achieved 80% recognition accuracy on benchmark symbol datasets and real-world artifact images.",
      "Optimized API inference orchestration to achieve sub-10-second average end-to-end response times.",
      "Conducted extensive user acceptance testing with 20+ researchers and students for field validation."
    ],
    architectureDetails: {
      frontend: "Flutter camera capture interface with real-time bounding box overlays and translation history",
      aiPipeline: "Custom Computer Vision detector paired with NLP translation model deployed via RESTful microservices",
      integration: "Asynchronous HTTP/Dio streaming client handling image payloads and structured JSON response decoding"
    },
    github: "https://github.com/MohamedMSalah/Manetho-ui",
    live: "https://drive.google.com/file/d/1N49T9pdcN28onWsco0vkZUEUgJy_c_99/view?usp=drivesdk"
  },
  {
    id: "yalla-5roga",
    image: "assets/projects/yalla-5roga.jpg",
    title: "Yalla 5roga — Social Outing Planner",
    category: "fullstack",
    company: "Personal Project",
    duration: "Ongoing",
    badge: "Currently in Development",
    badgeType: "warning",
    summary: "A modern social platform solving group planning friction by replacing messy chat messages with structured outing creation, proximity-based place voting, and automated RSVP tracking.",
    technologies: ["Flutter", "Node.js", "TypeScript", "PostgreSQL", "Firebase", "Google Maps API", "REST APIs"],
    metrics: [
      { label: "Development Status", value: "In Progress" },
      { label: "Backend Stack", value: "Node.js & TS" },
      { label: "Database", value: "PostgreSQL" },
      { label: "Location Services", value: "Google Maps" }
    ],
    highlights: [
      "Replacing tedious back-and-forth chat planning with dedicated outing hubs, interactive voting, and RSVP states (Going / Not Going / Maybe).",
      "Integrated place suggestion engine recommending venues based on vibe, budget, and geographic proximity.",
      "Integrated Google Maps SDK for direct routing, location discovery, and distance calculations.",
      "Designed PostgreSQL relational database schema optimized for group relations, voting records, and outing history.",
      "Implemented intelligent client-side and API caching layers to minimize unnecessary network traffic and third-party API costs.",
      "Embedded real-time outing chat, invite links, and push notification triggers."
    ],
    architectureDetails: {
      frontend: "Flutter (Dart) with clean modular UI, MapView widgets, and real-time state listeners",
      backend: "Node.js with TypeScript and Express/Fastify REST endpoints",
      database: "PostgreSQL database with indexed spatial & relational schema",
      caching: "In-memory & client-side caching reducing repeated map/place fetch requests"
    },
    github: "https://github.com/MohamedMSalah/yalla_5roga",
    live: "https://drive.google.com/file/d/1RBuxJnvMZsKD3-FhFyFitmuu8n0cKO07/view?usp=drivesdk"
  }
];

const projectOrder = ["yalla-5roga", "cms", "alarmus", "manetho"];
projectsData.sort((a, b) => projectOrder.indexOf(a.id) - projectOrder.indexOf(b.id));

const LAZY_PLACEHOLDER = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

const lazyImageObserver = "IntersectionObserver" in window
  ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        loadLazyPicture(entry.target);
        lazyImageObserver.unobserve(entry.target);
      });
    }, { rootMargin: "240px 0px", threshold: 0.01 })
  : null;

function loadLazyPicture(img) {
  const src = img.dataset.src;
  if (!src || img.dataset.loaded === "true") return;
  img.dataset.loaded = "true";
  img.addEventListener("load", () => img.classList.add("is-loaded"), { once: true });
  img.addEventListener("error", () => img.classList.add("is-loaded"), { once: true });
  img.src = src;
  if (img.complete && img.naturalWidth > 0) img.classList.add("is-loaded");
}

function observeLazyPictures(root) {
  root.querySelectorAll("img.project-cover[data-src]").forEach((img) => {
    if (!lazyImageObserver) {
      loadLazyPicture(img);
      return;
    }
    lazyImageObserver.observe(img);
  });
}

// Initialize Projects Rendering & Filtering
function initProjects() {
  const container = document.getElementById("projectsGrid");
  const filterButtons = document.querySelectorAll(".filter-btn");
  
  if (!container) return;

  function renderProjects(filter = "all") {
    container.innerHTML = "";
    
    const filtered = filter === "all" 
      ? projectsData 
      : projectsData.filter(p => p.category === filter || (filter === "mobile" && (p.category === "mobile" || p.technologies.includes("Flutter"))));

    filtered.forEach(project => {
      const card = document.createElement("div");
      card.className = "project-card";
      
      const metricsHtml = project.metrics.map(m => `
        <div class="project-metric-item">
          <span class="project-metric-val">${m.value}</span>
          <span class="project-metric-lbl">${m.label}</span>
        </div>
      `).join("");

      const tagsHtml = project.technologies.slice(0, 5).map(t => `
        <span class="tech-tag">${t}</span>
      `).join("");

      const coverHtml = project.image
        ? `<img class="project-cover" src="${LAZY_PLACEHOLDER}" data-src="${project.image}" alt="${project.title} preview" width="1200" height="750" decoding="async">`
        : `<div class="project-banner-decor"></div>`;

      card.innerHTML = `
        <div class="project-banner">
          ${coverHtml}
        </div>
        <div class="project-body">
          <div class="project-header-meta">
            <div>
              <span class="badge badge-${project.badgeType}">${project.badge}</span>
              <h3 class="project-title">${project.title}</h3>
              <span class="project-company-badge">${project.company} • ${project.duration}</span>
            </div>
          </div>
          <p class="project-desc">${project.summary}</p>
          <div class="project-metrics-strip">
            ${metricsHtml}
          </div>
          <div class="project-tech-tags">
            ${tagsHtml}
            ${project.technologies.length > 5 ? `<span class="tech-tag">+${project.technologies.length - 5} more</span>` : ''}
          </div>
          <div class="project-footer">
            <button class="btn btn-outline btn-sm view-details-btn" data-id="${project.id}">
              <span>View Full Details</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <div style="display: flex; gap: 0.5rem;">
              <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-icon btn-sm" title="View on GitHub">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
            </div>
          </div>
        </div>
      `;
      
      container.appendChild(card);
    });

    observeLazyPictures(container);

    // Reattach modal click handlers
    document.querySelectorAll(".view-details-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        openProjectModal(id);
      });
    });
  }

  // Filter clicks
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-filter");
      renderProjects(filter);
    });
  });

  // Initial render
  renderProjects("all");
}

// Modal open logic
function openProjectModal(projectId) {
  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;

  const modalOverlay = document.getElementById("projectModal");
  const modalBody = document.getElementById("modalProjectBody");
  const modalTitle = document.getElementById("modalProjectTitle");

  if (!modalOverlay || !modalBody || !modalTitle) return;

  modalTitle.textContent = project.title;

  const highlightsList = project.highlights.map(h => `
    <li style="margin-bottom: 0.625rem; display: flex; align-items: flex-start; gap: 0.5rem;">
      <span style="color: var(--primary); font-weight: bold; line-height: 1;">✓</span>
      <span>${h}</span>
    </li>
  `).join("");

  const techPills = project.technologies.map(t => `
    <span class="tech-tag">${t}</span>
  `).join("");

  const coverHtml = project.image
    ? `<img class="project-modal-cover" src="${project.image}" alt="${project.title} preview" width="1200" height="750" decoding="async">`
    : "";

  modalBody.innerHTML = `
    ${coverHtml}
    <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
      <span class="badge badge-${project.badgeType}">${project.badge}</span>
      <span style="font-family: var(--font-mono); font-size: 0.8125rem; color: var(--text-muted);">${project.company} | ${project.duration}</span>
    </div>

    <div>
      <h4 style="margin-bottom: 0.5rem; font-size: 1.0625rem;">Executive Overview</h4>
      <p style="color: var(--text-secondary); line-height: 1.7;">${project.summary}</p>
    </div>

    <div style="background: var(--bg-subtle); padding: 1.25rem; border-radius: var(--radius-lg); border: 1px solid var(--border-subtle);">
      <h4 style="margin-bottom: 0.75rem; font-size: 0.9375rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--primary);">Key Engineering Contributions</h4>
      <ul style="color: var(--text-secondary); font-size: 0.9375rem; line-height: 1.6;">
        ${highlightsList}
      </ul>
    </div>

    <div>
      <h4 style="margin-bottom: 0.75rem; font-size: 1.0625rem;">Architecture & Tech Stack</h4>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 0.75rem;">
        <div style="background: var(--bg-main); padding: 0.875rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
          <strong style="color: var(--text-primary); font-size: 0.8125rem; display: block; margin-bottom: 0.25rem;">Client / Mobile</strong>
          <span style="font-size: 0.8125rem; color: var(--text-secondary);">${project.architectureDetails.frontend}</span>
        </div>
        ${project.architectureDetails.backend ? `
        <div style="background: var(--bg-main); padding: 0.875rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
          <strong style="color: var(--text-primary); font-size: 0.8125rem; display: block; margin-bottom: 0.25rem;">Backend & APIs</strong>
          <span style="font-size: 0.8125rem; color: var(--text-secondary);">${project.architectureDetails.backend}</span>
        </div>` : ''}
        ${project.architectureDetails.database ? `
        <div style="background: var(--bg-main); padding: 0.875rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
          <strong style="color: var(--text-primary); font-size: 0.8125rem; display: block; margin-bottom: 0.25rem;">Database & Models</strong>
          <span style="font-size: 0.8125rem; color: var(--text-secondary);">${project.architectureDetails.database}</span>
        </div>` : ''}
        ${project.architectureDetails.security ? `
        <div style="background: var(--bg-main); padding: 0.875rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
          <strong style="color: var(--text-primary); font-size: 0.8125rem; display: block; margin-bottom: 0.25rem;">Security & Auth</strong>
          <span style="font-size: 0.8125rem; color: var(--text-secondary);">${project.architectureDetails.security}</span>
        </div>` : ''}
        ${project.architectureDetails.aiPipeline ? `
        <div style="background: var(--bg-main); padding: 0.875rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
          <strong style="color: var(--text-primary); font-size: 0.8125rem; display: block; margin-bottom: 0.25rem;">AI Models</strong>
          <span style="font-size: 0.8125rem; color: var(--text-secondary);">${project.architectureDetails.aiPipeline}</span>
        </div>` : ''}
      </div>
    </div>

    <div>
      <h4 style="margin-bottom: 0.5rem; font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted);">Technologies Used</h4>
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
        ${techPills}
      </div>
    </div>

    <div style="display: flex; justify-content: flex-end; gap: 0.75rem; margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border-subtle);">
      ${project.live ? `<a href="${project.live}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm"><span>Watch Demo</span></a>` : ""}
      <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
        <span>View Code</span>
      </a>
      <button class="btn btn-primary btn-sm modal-close-action">Close Details</button>
    </div>
  `;

  modalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";

  modalOverlay.querySelector(".modal-close-action").addEventListener("click", closeProjectModal);
}

function closeProjectModal() {
  const modalOverlay = document.getElementById("projectModal");
  if (modalOverlay) {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// Global modal dismiss on ESC or overlay click
document.addEventListener("DOMContentLoaded", () => {
  const modalOverlay = document.getElementById("projectModal");
  const modalCloseBtn = document.getElementById("modalCloseBtn");

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeProjectModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) {
        closeProjectModal();
      }
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeProjectModal();
    }
  });

  initProjects();
});
