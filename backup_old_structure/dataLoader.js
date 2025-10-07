// =================== Data Arrays ===================

// Projects, Skills, Certifications data (keep them here)
const projectsData = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with user authentication, payment processing, and admin dashboard.",
    image: "/placeholder.svg?height=250&width=400",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    skills: ["Frontend", "Backend", "Database"],
    searchTerms:
      "ecommerce react nodejs mongodb stripe frontend backend database payment",
    liveDemo: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/placeholder.svg?height=250&width=400",
    technologies: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
    skills: ["Frontend", "Real-time", "UI/UX"],
    searchTerms:
      "task management vue express socketio postgresql frontend realtime collaboration",
    liveDemo: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A responsive weather dashboard with location-based forecasts, interactive maps, and historical weather data visualization.",
    image: "/placeholder.svg?height=250&width=400",
    technologies: ["JavaScript", "Chart.js", "API Integration", "CSS3"],
    skills: ["Data Viz", "APIs", "Responsive"],
    searchTerms:
      "weather dashboard javascript chartjs api responsive data visualization",
    liveDemo: "#",
    github: "#",
  },
];

const skillsData = [
  {
    id: 1,
    title: "HTML5",
    description: "Semantic markup and modern web standards",
    icon: "🎨",
    level: "Expert",
    searchTerms: "html5 frontend markup semantic web standards",
  },
  {
    id: 2,
    title: "CSS3",
    description: "Advanced styling, animations, and responsive design",
    icon: "💅",
    level: "Expert",
    searchTerms: "css3 styling animations responsive design frontend",
  },
  {
    id: 3,
    title: "JavaScript",
    description: "ES6+, DOM manipulation, and modern JS features",
    icon: "⚡",
    level: "Advanced",
    searchTerms: "javascript es6 dom manipulation frontend programming",
  },
  {
    id: 4,
    title: "React",
    description: "Component-based UI development and hooks",
    icon: "⚛️",
    level: "Advanced",
    searchTerms: "react component hooks frontend ui library",
  },
  {
    id: 5,
    title: "Vue.js",
    description: "Progressive framework for building UIs",
    icon: "🖖",
    level: "Intermediate",
    searchTerms: "vue vuejs progressive framework frontend ui",
  },
  {
    id: 6,
    title: "Node.js",
    description: "Server-side JavaScript runtime environment",
    icon: "🟢",
    level: "Advanced",
    searchTerms: "nodejs backend javascript server runtime",
  },
  {
    id: 7,
    title: "Python",
    description: "Backend development and data processing",
    icon: "🐍",
    level: "Intermediate",
    searchTerms: "python backend programming data processing",
  },
  {
    id: 8,
    title: "Express.js",
    description: "Fast, minimalist web framework for Node.js",
    icon: "🚀",
    level: "Advanced",
    searchTerms: "express expressjs backend framework nodejs web",
  },
  {
    id: 9,
    title: "MongoDB",
    description: "NoSQL database for modern applications",
    icon: "🍃",
    level: "Advanced",
    searchTerms: "mongodb nosql database document modern",
  },
  {
    id: 10,
    title: "PostgreSQL",
    description: "Advanced relational database system",
    icon: "🐘",
    level: "Intermediate",
    searchTerms: "postgresql sql database relational advanced",
  },
  {
    id: 11,
    title: "Git",
    description: "Version control and collaborative development",
    icon: "🌿",
    level: "Expert",
    searchTerms: "git version control collaborative development tools",
  },
  {
    id: 12,
    title: "Docker",
    description: "Containerization and deployment",
    icon: "🐳",
    level: "Intermediate",
    searchTerms: "docker containerization deployment devops tools",
  },
  {
    id: 13,
    title: "AWS",
    description: "Cloud computing and infrastructure",
    icon: "☁️",
    level: "Intermediate",
    searchTerms: "aws cloud computing infrastructure amazon web services",
  },
  {
    id: 14,
    title: "REST APIs",
    description: "RESTful web services and API design",
    icon: "🔧",
    level: "Advanced",
    searchTerms: "rest api restful web services backend",
  },
  {
    id: 15,
    title: "Responsive Design",
    description: "Mobile-first and cross-device compatibility",
    icon: "📱",
    level: "Expert",
    searchTerms: "responsive design mobile first cross device frontend",
  },
  {
    id: 16,
    title: "TypeScript",
    description: "Typed JavaScript for better development",
    icon: "🎯",
    level: "Advanced",
    searchTerms: "typescript typed javascript development programming",
  },
];

const certificationsData = [
  {
    id: 1,
    title: "Azure Developer Associate",
    issuer: "Microsoft",
    logo: "🔷",
    status: "verified",
    description:
      "Demonstrates expertise in developing cloud solutions on Microsoft Azure, including compute, storage, security, and monitoring services.",
    issued: "March 2023",
    expires: "March 2025",
    skills: ["Azure", "Cloud Computing", "DevOps", "API Development"],
    certificateUrl: "#",
    verifyUrl: "#",
  },
  {
    id: 2,
    title: "AWS Solutions Architect",
    issuer: "Amazon Web Services",
    logo: "☁️",
    status: "verified",
    description:
      "Validates expertise in designing distributed systems and applications on the AWS platform with focus on scalability and fault tolerance.",
    issued: "January 2023",
    expires: "January 2026",
    skills: ["AWS", "Architecture", "Scalability", "Security"],
    certificateUrl: "#",
    verifyUrl: "#",
  },
  {
    id: 3,
    title: "Professional Cloud Developer",
    issuer: "Google Cloud",
    logo: "🌐",
    status: "verified",
    description:
      "Demonstrates ability to build scalable and highly available applications using Google Cloud technologies and best practices.",
    issued: "November 2022",
    expires: "November 2024",
    skills: ["Google Cloud", "Kubernetes", "Microservices", "CI/CD"],
    certificateUrl: "#",
    verifyUrl: "#",
  },
  {
    id: 4,
    title: "Full Stack Web Development",
    issuer: "Coursera - Meta",
    logo: "📚",
    status: "verified",
    description:
      "Comprehensive specialization covering front-end and back-end development, including React, Node.js, databases, and version control.",
    issued: "September 2022",
    expires: "9 Months",
    skills: ["React", "Node.js", "MongoDB", "Git"],
    certificateUrl: "#",
    verifyUrl: "#",
  },
  {
    id: 5,
    title: "Docker Certified Associate",
    issuer: "Docker Inc.",
    logo: "🐳",
    status: "verified",
    description:
      "Validates skills in containerization, Docker fundamentals, image creation, orchestration, and security best practices.",
    issued: "August 2022",
    expires: "August 2024",
    skills: ["Docker", "Containerization", "DevOps", "Orchestration"],
    certificateUrl: "#",
    verifyUrl: "#",
  },
  {
    id: 6,
    title: "MongoDB Developer Path",
    issuer: "MongoDB University",
    logo: "🍃",
    status: "in-progress",
    description:
      "Advanced certification path covering MongoDB development, data modeling, aggregation framework, and performance optimization.",
    issued: "December 2023",
    expires: "75% Complete",
    skills: ["MongoDB", "NoSQL", "Data Modeling", "Performance"],
    certificateUrl: "#",
    verifyUrl: "#",
  },
];

const originalBorderRadius = new WeakMap();

// Save original border radius for all elements
function saveBorderRadius(elements) {
  elements.forEach((el) => {
    if (!originalBorderRadius.has(el)) {
      const style = getComputedStyle(el);
      originalBorderRadius.set(el, style.borderRadius);
    }
  });
}

function applyBorderRadiusState(elements, isRounded) {
  elements.forEach((el) => {
    if (originalBorderRadius.has(el)) {
      el.style.borderRadius = isRounded ? originalBorderRadius.get(el) : "0";
    }
  });
}

// Load Projects
function loadProjects() {
  const projectsGrid = document.getElementById("projectsGrid");
  if (!projectsGrid) return;

  projectsGrid.innerHTML = projectsData
    .map(
      (project) => `
    <div class="project-card" data-aos="fade-up" data-search-terms="${
      project.searchTerms
    }">
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}">
        <div class="project-overlay">
          <div class="project-links">
            <a href="${project.liveDemo}" class="project-link">Live Demo</a>
            <a href="${project.github}" class="project-link">GitHub</a>
          </div>
        </div>
      </div>
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tech">
          ${project.technologies
            .map((tech) => `<span class="tech-tag">${tech}</span>`)
            .join("")}
        </div>
        <div class="project-skills">
          ${project.skills
            .map((skill) => `<span class="skill-tag">${skill}</span>`)
            .join("")}
        </div>
      </div>
    </div>
  `
    )
    .join("");

  // Save border radius for newly loaded elements and apply current state
  const newElements = projectsGrid.querySelectorAll("*:not(img)");
  saveBorderRadius(newElements);

  // Apply current rounded state if active
  const isRounded = document.body.classList.contains("rounded-borders");
  applyBorderRadiusState(newElements, isRounded);
}

// Load Skills
function loadSkills() {
  const skillsTrack = document.getElementById("skillsTrack");
  if (!skillsTrack) return;

  const skillsHTML = skillsData
    .map(
      (skill) => `
    <div class="skill-card" data-aos="fade-up" data-search-terms="${skill.searchTerms}">
      <div class="skill-icon">${skill.icon}</div>
      <h3 class="skill-title">${skill.title}</h3>
      <p class="skill-description">${skill.description}</p>
      <div class="skill-level">${skill.level}</div>
    </div>
  `
    )
    .join("");

  // Duplicate for infinite scroll
  skillsTrack.innerHTML = skillsHTML + skillsHTML;

  // Save border radius for newly loaded elements and apply current state
  const newElements = skillsTrack.querySelectorAll("*:not(img)");
  saveBorderRadius(newElements);

  // Apply current rounded state if active
  const isRounded = document.body.classList.contains("rounded-borders");
  applyBorderRadiusState(newElements, isRounded);
}

// Load Certifications
function loadCertifications() {
  const certificationsGrid = document.querySelector(".certifications-grid");
  if (!certificationsGrid) return;

  certificationsGrid.innerHTML = certificationsData
    .map(
      (cert, index) => `
    <div class="certification-card" data-aos="fade-up" data-aos-delay="${
      index * 100
    }">
      <div class="cert-status ${cert.status}">${
        cert.status === "verified" ? "Verified" : "In Progress"
      }</div>
      <div class="cert-header">
        <div class="cert-logo">${cert.logo}</div>
        <div class="cert-info">
          <h3>${cert.title}</h3>
          <div class="cert-issuer">${cert.issuer}</div>
        </div>
      </div>
      <div class="cert-details">
        <p class="cert-description">${cert.description}</p>
        <div class="cert-meta">
          <div class="cert-meta-item">
            <span class="cert-meta-label">${
              cert.status === "in-progress" ? "Started" : "Issued"
            }</span>
            <span class="cert-meta-value">${cert.issued}</span>
          </div>
          <div class="cert-meta-item">
            <span class="cert-meta-label">${
              cert.status === "in-progress" ? "Progress" : "Expires"
            }</span>
            <span class="cert-meta-value">${cert.expires}</span>
          </div>
        </div>
        <div class="cert-skills">
          ${cert.skills
            .map((skill) => `<span class="cert-skill-tag">${skill}</span>`)
            .join("")}
        </div>
      </div>
      <div class="cert-actions">
        <a href="${cert.certificateUrl}" class="cert-btn cert-btn-primary">${
        cert.status === "in-progress" ? "View Progress" : "View Certificate"
      }</a>
        <a href="${cert.verifyUrl}" class="cert-btn cert-btn-secondary">${
        cert.status === "in-progress"
          ? cert.issuer.split(" ")[0] + " U"
          : "Verify"
      }</a>
      </div>
    </div>
  `
    )
    .join("");

  // Save border radius for newly loaded elements and apply current state
  const newElements = certificationsGrid.querySelectorAll("*:not(img)");
  saveBorderRadius(newElements);

  // Apply current rounded state if active
  const isRounded = document.body.classList.contains("rounded-borders");
  applyBorderRadiusState(newElements, isRounded);
}

// Initialize Content
document.addEventListener("DOMContentLoaded", () => {
  loadProjects();
  loadSkills();
  loadCertifications();
});

// Search Functions
function searchProjects(query) {
  if (!projectsGrid) return;

  const projectCards = projectsGrid.querySelectorAll(".project-card");
  let visibleCount = 0;

  if (query === "") {
    projectCards.forEach((card) => {
      card.classList.remove("hidden");
      visibleCount++;
    });
    if (projectsResults) projectsResults.textContent = "";
    return;
  }

  const lowerQuery = query.toLowerCase();

  projectCards.forEach((card) => {
    const searchTerms = card.dataset.searchTerms || "";
    const title =
      card.querySelector(".project-title")?.textContent.toLowerCase() || "";
    const description =
      card.querySelector(".project-description")?.textContent.toLowerCase() ||
      "";
    const techTags = Array.from(card.querySelectorAll(".tech-tag"))
      .map((tag) => tag.textContent.toLowerCase())
      .join(" ");
    const skillTags = Array.from(card.querySelectorAll(".skill-tag"))
      .map((tag) => tag.textContent.toLowerCase())
      .join(" ");

    const allText = `${searchTerms} ${title} ${description} ${techTags} ${skillTags}`;

    if (allText.includes(lowerQuery)) {
      card.classList.remove("hidden");
      visibleCount++;
    } else {
      card.classList.add("hidden");
    }
  });

  // Update results info
  if (projectsResults) {
    if (visibleCount === 0) {
      projectsResults.innerHTML = `<div class="no-results">No projects found for "${query}". Try different keywords.</div>`;
    } else {
      projectsResults.textContent = `Found ${visibleCount} project${
        visibleCount !== 1 ? "s" : ""
      } for "${query}"`;
    }
  }
}
function searchSkills(query) {
  if (!skillsTrack) return;

  const skillCards = skillsTrack.querySelectorAll(".skill-card");
  let visibleCount = 0;

  if (query === "") {
    skillCards.forEach((card) => {
      card.classList.remove("hidden");
      visibleCount++;
    });
    if (skillsResults) skillsResults.textContent = "";
    if (skillsTrack) skillsTrack.classList.remove("paused");
    return;
  }

  const lowerQuery = query.toLowerCase();
  if (skillsTrack) skillsTrack.classList.add("paused");

  skillCards.forEach((card) => {
    const searchTerms = card.dataset.searchTerms || "";
    const title =
      card.querySelector(".skill-title")?.textContent.toLowerCase() || "";
    const description =
      card.querySelector(".skill-description")?.textContent.toLowerCase() || "";
    const level =
      card.querySelector(".skill-level")?.textContent.toLowerCase() || "";

    const allText = `${searchTerms} ${title} ${description} ${level}`;

    if (allText.includes(lowerQuery)) {
      card.classList.remove("hidden");
      visibleCount++;
    } else {
      card.classList.add("hidden");
    }
  });

  // Update results info
  if (skillsResults) {
    if (visibleCount === 0) {
      skillsResults.innerHTML = `<div class="no-results">No skills found for "${query}". Try different keywords.</div>`;
    } else {
      skillsResults.textContent = `Found ${visibleCount} skill${
        visibleCount !== 1 ? "s" : ""
      } for "${query}"`;
    }
  }
}

// Search Event Listeners
// Projects Search
const projectsSearch = document.getElementById("projectsSearch");
const projectsClear = document.getElementById("projectsClear");
const projectsResults = document.getElementById("projectsResults");
let projectsTimeout;

if (projectsSearch) {
  projectsSearch.addEventListener("input", (e) => {
    const query = e.target.value.trim();

    if (query) {
      projectsClear.classList.add("visible");
    } else {
      projectsClear.classList.remove("visible");
    }

    clearTimeout(projectsTimeout);
    projectsTimeout = setTimeout(() => {
      searchProjects(query);
    }, 300);
  });
}

if (projectsClear) {
  projectsClear.addEventListener("click", () => {
    projectsSearch.value = "";
    projectsClear.classList.remove("visible");
    searchProjects("");
  });
}

// Skills Search
const skillsSearch = document.getElementById("skillsSearch");
const skillsClear = document.getElementById("skillsClear");
const skillsResults = document.getElementById("skillsResults");
let skillsTimeout;

if (skillsSearch) {
  skillsSearch.addEventListener("input", (e) => {
    const query = e.target.value.trim();

    if (query) {
      skillsClear.classList.add("visible");
    } else {
      skillsClear.classList.remove("visible");
    }

    clearTimeout(skillsTimeout);
    skillsTimeout = setTimeout(() => {
      searchSkills(query);
    }, 300);
  });
}

if (skillsClear) {
  skillsClear.addEventListener("click", () => {
    skillsSearch.value = "";
    skillsClear.classList.remove("visible");
    searchSkills("");
  });
}
