/**
 * Skills Data & Interactive Categorization
 * Mohamed Mohamed Salah - Portfolio
 */

const skillsData = [
  {
    category: "Mobile & Frontend",
    icon: "smartphone",
    description: "Core strength in cross-platform mobile apps with pixel-perfect UI and scalable state management.",
    skills: [
      { name: "Flutter", highlight: true },
      { name: "Dart", highlight: true },
      { name: "BLoC", highlight: true },
      { name: "Riverpod", highlight: true },
      { name: "Provider", highlight: false },
      { name: "React Native", highlight: false },
      { name: "Responsive UI Design", highlight: false }
    ]
  },
  {
    category: "Backend & APIs",
    icon: "server",
    description: "High-performance microservices, RESTful APIs, and robust business logic layers.",
    skills: [
      { name: "ASP.NET Core", highlight: true },
      { name: "C#", highlight: true },
      { name: "Node.js", highlight: true },
      { name: "RESTful APIs", highlight: true },
      { name: "GraphQL", highlight: false },
      { name: "Microservices", highlight: false },
      { name: "Clean Architecture", highlight: true }
    ]
  },
  {
    category: "Databases & Storage",
    icon: "database",
    description: "Normalized relational modeling, query tuning, migrations, and cloud storage.",
    skills: [
      { name: "SQL Server", highlight: true },
      { name: "PostgreSQL", highlight: true },
      { name: "Entity Framework Core", highlight: true },
      { name: "SQLite", highlight: false },
      { name: "Firebase", highlight: false },
      { name: "SQL", highlight: true }
    ]
  },
  {
    category: "Programming Languages",
    icon: "code",
    description: "Multi-paradigm language proficiency from systems to modern high-level languages.",
    skills: [
      { name: "Dart", highlight: true },
      { name: "C#", highlight: true },
      { name: "JavaScript", highlight: false },
      { name: "TypeScript", highlight: true },
      { name: "C++", highlight: false },
      { name: "Java", highlight: false },
      { name: "SQL", highlight: false }
    ]
  },
  {
    category: "Security & Authentication",
    icon: "shield",
    description: "Enterprise-grade identity protocols, cryptographic token handling, and role permissions.",
    skills: [
      { name: "OAuth 2.0", highlight: true },
      { name: "JWT", highlight: true },
      { name: "RBAC (Role-Based Access)", highlight: true },
      { name: "Identity Server", highlight: false },
      { name: "Secure Storage", highlight: false }
    ]
  },
  {
    category: "DevOps & Cloud",
    icon: "cloud",
    description: "Continuous integration, containerization, automated testing, and cloud infrastructure.",
    skills: [
      { name: "Azure", highlight: false },
      { name: "Docker", highlight: true },
      { name: "CI/CD Pipelines", highlight: true },
      { name: "GitHub Actions", highlight: true },
      { name: "Git", highlight: true },
      { name: "Flutter Test & Mockito", highlight: true }
    ]
  }
];

function getCategorySvg(iconName) {
  switch(iconName) {
    case 'smartphone':
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>`;
    case 'server':
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`;
    case 'database':
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`;
    case 'code':
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`;
    case 'shield':
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`;
    case 'cloud':
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>`;
    default:
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle></svg>`;
  }
}

function initSkills() {
  const container = document.getElementById("skillsContainer");
  if (!container) return;

  container.innerHTML = skillsData.map(cat => {
    const skillChips = cat.skills.map(skill => `
      <div class="skill-chip ${skill.highlight ? 'skill-highlight' : ''}" style="${skill.highlight ? 'border-color: rgba(2, 132, 199, 0.4); background: var(--gradient-subtle);' : ''}">
        <span style="color: ${skill.highlight ? 'var(--primary)' : 'inherit'}; font-weight: ${skill.highlight ? '600' : '500'};">${skill.name}</span>
      </div>
    `).join("");

    return `
      <div class="skill-category-card">
        <div class="skill-category-header">
          <div class="skill-category-icon">
            ${getCategorySvg(cat.icon)}
          </div>
          <div>
            <h3 class="skill-category-title">${cat.category}</h3>
            <p style="font-size: 0.8125rem; color: var(--text-muted); margin-top: 2px;">${cat.description}</p>
          </div>
        </div>
        <div class="skill-items-grid">
          ${skillChips}
        </div>
      </div>
    `;
  }).join("");
}

document.addEventListener("DOMContentLoaded", initSkills);
