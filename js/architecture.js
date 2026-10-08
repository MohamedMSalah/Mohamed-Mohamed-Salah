/**
 * Interactive Architecture Diagram ("How I Build Software")
 * Mohamed Mohamed Salah - Portfolio
 */

const archNodes = [
  {
    id: "mobile",
    step: "01",
    title: "Mobile Client",
    tech: "Flutter / Dart / React Native",
    summary: "Responsive, 60 FPS multi-platform UI with clean separation between views and state.",
    details: "I construct declarative UI trees following Clean Architecture. Components are strictly decoupled from business logic, ensuring rapid theming, predictable lifecycle behavior, and high frame rates (60 FPS).",
    practices: ["Widget tree decomposition & modular UI widgets", "Strict separation of presentation & domain logic", "Responsive layout constraints for mobile, tablet, and desktop"]
  },
  {
    id: "state",
    step: "02",
    title: "State Management",
    tech: "BLoC / Riverpod / Provider",
    summary: "Predictable unidirectional data flow and robust asynchronous event handling.",
    details: "State changes are driven by explicit events or immutable states. Using BLoC/Riverpod eliminates unexpected side effects, facilitates unit testing, and provides granular widget rebuilding.",
    practices: ["Unidirectional data flow (Event -> State)", "Zero business logic inside UI build methods", "Strict immutable state representations"]
  },
  {
    id: "repo",
    step: "03",
    title: "Repository / API Layer",
    tech: "Dio / HTTP / Clean Arch",
    summary: "Abstract data contracts and network serialization isolating the UI from network complexities.",
    details: "The repository layer exposes Dart contracts/interfaces. It handles JSON serialization, custom interceptors for JWT token injection, automated token refresh, caching, and graceful offline degradation.",
    practices: ["Repository Pattern with abstract domain contracts", "Custom HTTP interceptors for automatic JWT renewal", "Safe JSON deserialization & network error mapping"]
  },
  {
    id: "gateway",
    step: "04",
    title: "REST APIs & Gateway",
    tech: "ASP.NET Core / Node.js",
    summary: "Secure, documented, and versioned RESTful endpoints with input validation.",
    details: "APIs are built with strict input validation, Swagger/OpenAPI documentation, rate limiting, and standard HTTP response envelopes. Designed to minimize payload size and latency.",
    practices: ["FluentValidation / Model validation middleware", "Swagger / OpenAPI contract generation", "Consistent error response shapes & HTTP status codes"]
  },
  {
    id: "backend",
    step: "05",
    title: "Backend Services",
    tech: "C# / ASP.NET / Node.js",
    summary: "Domain-driven business logic, SOLID principles, and dependency injection.",
    details: "Backend services contain the core business rules. Architected with Dependency Injection and Service Layers to ensure zero coupling to specific transport or database implementations.",
    practices: ["Dependency Injection (DI) & SOLID principles", "Domain-Driven Service Layer architecture", "Asynchronous async/await throughout all I/O paths"]
  },
  {
    id: "database",
    step: "06",
    title: "Database & Storage",
    tech: "SQL Server / PostgreSQL",
    summary: "Normalized relational schemas, indexed queries, and transactional integrity.",
    details: "Relational modeling with foreign key constraints, normalized tables (15+ tables for complex domain models), EF Core query optimization (preventing N+1 queries), and migration history tracking.",
    practices: ["3NF relational schema design with proper indexing", "Optimized EF Core queries & raw SQL where needed", "Automated code-first migrations and seed routines"]
  }
];

function initArchitecture() {
  const container = document.getElementById("archNodesContainer");
  const expBox = document.getElementById("archExplanationBox");

  if (!container || !expBox) return;

  function renderExplanation(node) {
    const practicesList = node.practices.map(p => `
      <li style="margin-bottom: 0.25rem; display: flex; align-items: center; gap: 0.5rem;">
        <span style="color: var(--primary);">▸</span>
        <span>${p}</span>
      </li>
    `).join("");

    expBox.innerHTML = `
      <div class="arch-exp-title">
        <span>Step ${node.step}: ${node.title}</span>
        <span style="font-family: var(--font-mono); font-size: 0.8125rem; color: var(--primary-light); font-weight: normal;">[ ${node.tech} ]</span>
      </div>
      <p class="arch-exp-desc">${node.details}</p>
      <div style="margin-top: 0.5rem; padding-top: 0.5rem; border-top: 1px solid var(--border-subtle);">
        <strong style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); display: block; margin-bottom: 0.35rem;">Architectural Standards:</strong>
        <ul style="font-size: 0.8125rem; color: var(--text-secondary); line-height: 1.5;">
          ${practicesList}
        </ul>
      </div>
    `;
  }

  container.innerHTML = archNodes.map((node, index) => `
    <div class="arch-node ${index === 0 ? 'active' : ''}" data-id="${node.id}">
      <span class="arch-node-step">STEP ${node.step}</span>
      <div class="arch-node-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          ${node.id === 'mobile' ? '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>' :
            node.id === 'state' ? '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>' :
            node.id === 'repo' ? '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>' :
            node.id === 'gateway' ? '<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>' :
            node.id === 'backend' ? '<rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>' :
            '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>'}
        </svg>
      </div>
      <span class="arch-node-title">${node.title}</span>
      <span class="arch-node-tech">${node.tech.split('/')[0]}</span>
    </div>
  `).join("");

  // Initial explanation render
  renderExplanation(archNodes[0]);

  // Click handler
  container.querySelectorAll(".arch-node").forEach(nodeEl => {
    nodeEl.addEventListener("click", () => {
      container.querySelectorAll(".arch-node").forEach(n => n.classList.remove("active"));
      nodeEl.classList.add("active");
      const id = nodeEl.getAttribute("data-id");
      const node = archNodes.find(n => n.id === id);
      if (node) renderExplanation(node);
    });
  });
}

document.addEventListener("DOMContentLoaded", initArchitecture);
