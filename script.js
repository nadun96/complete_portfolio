// JSON Data Arrays
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

// Function to save border radius for elements
function saveBorderRadius(elements) {
  elements.forEach((el) => {
    if (!originalBorderRadius.has(el)) {
      const style = getComputedStyle(el);
      originalBorderRadius.set(el, style.borderRadius);
    }
  });
}

// Function to apply border radius state to elements
function applyBorderRadiusState(elements, isRounded) {
  elements.forEach((el) => {
    if (originalBorderRadius.has(el)) {
      el.style.borderRadius = isRounded ? originalBorderRadius.get(el) : "0";
    }
  });
}

// Dynamic Content Loading Functions
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

// Save original border-radius for all existing non-image elements
document.querySelectorAll("*:not(img)").forEach((el) => {
  const style = getComputedStyle(el);
  originalBorderRadius.set(el, style.borderRadius);
});

const themeButtons = document.querySelectorAll(".theme-btn");
const body = document.body;

// Load saved theme and rounded state
const savedTheme = localStorage.getItem("portfolio-theme") || "vintage";
const isRoundedSaved = localStorage.getItem("portfolio-rounded") === "true";

// Set theme on body
body.setAttribute("data-theme", savedTheme);

// Set active button for color theme
const activeBtn = document.querySelector(`[data-theme="${savedTheme}"]`);
if (activeBtn) activeBtn.classList.add("active");

// Apply saved rounded state
if (isRoundedSaved) {
  body.classList.add("rounded-borders");
  document.querySelectorAll("*:not(img)").forEach((el) => {
    el.style.borderRadius = "0";
  });
}

// Update SR button state
const srBtn = document.querySelector(".theme-sr");
if (srBtn) {
  srBtn.classList.toggle("round-mode", isRoundedSaved);
  srBtn.classList.toggle("square-mode", !isRoundedSaved);
}

// Theme buttons logic
themeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const theme = btn.dataset.theme;

    if (theme === "sr") {
      // Handle style toggle (square/rounded)
      const isCurrentlyRounded = body.classList.contains("rounded-borders");
      const newRoundedState = !isCurrentlyRounded;

      // Update body class
      body.classList.toggle("rounded-borders", newRoundedState);
      localStorage.setItem("portfolio-rounded", newRoundedState);

      // Apply border-radius changes to all elements
      const allElements = document.querySelectorAll("*:not(img)");
      applyBorderRadiusState(allElements, !newRoundedState);

      // Update button visual state
      btn.classList.toggle("round-mode", newRoundedState);
      btn.classList.toggle("square-mode", !newRoundedState);
    } else {
      // Handle color theme change
      // Remove active class from all color theme buttons (not SR)
      themeButtons.forEach((b) => {
        if (b.dataset.theme !== "sr") {
          b.classList.remove("active");
        }
      });
      btn.classList.add("active");

      // Set theme
      body.setAttribute("data-theme", theme);
      localStorage.setItem("portfolio-theme", theme);
    }
  });
});

// Search functionality for Projects
const projectsSearch = document.getElementById("projectsSearch");
const projectsClear = document.getElementById("projectsClear");
const projectsResults = document.getElementById("projectsResults");
const projectsGrid = document.getElementById("projectsGrid");
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

// Search functionality for Skills
const skillsSearch = document.getElementById("skillsSearch");
const skillsClear = document.getElementById("skillsClear");
const skillsResults = document.getElementById("skillsResults");
const skillsTrack = document.getElementById("skillsTrack");
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

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Mobile navigation toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Close mobile menu when clicking on a link
  document.querySelectorAll(".nav-link").forEach((n) =>
    n.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    })
  );
}

// Navbar background on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    if (window.scrollY > 100) {
      navbar.style.boxShadow = "0 2px 20px var(--shadow-light)";
    } else {
      navbar.style.boxShadow = "none";
    }
  }
});

// Simple AOS (Animate On Scroll) implementation
const animateOnScroll = () => {
  const elements = document.querySelectorAll("[data-aos]");

  elements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight - 100;

    if (isVisible) {
      element.classList.add("aos-animate");
    }
  });
};

// Scroll event listener
window.addEventListener("scroll", () => {
  animateOnScroll();
});

// Initial check for elements in view and load dynamic content
document.addEventListener("DOMContentLoaded", () => {
  animateOnScroll();

  // Load dynamic content
  loadProjects();
  loadSkills();
  loadCertifications();
});

// Add typing effect to home title
const typeWriter = (element, text, speed = 100) => {
  let i = 0;
  element.innerHTML = "";

  const timer = setInterval(() => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
};

// Initialize typing effect when page loads
window.addEventListener("load", () => {
  const titleElement = document.querySelector(".home-title");
  if (titleElement) {
    const originalText = titleElement.textContent;
    typeWriter(titleElement, originalText, 80);
  }
});

// Add parallax effect to home section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const homeSection = document.querySelector(".home-section");
  const profileImg = document.querySelector(".profile-img");

  if (homeSection && profileImg) {
    const rate = scrolled * -0.5;
    profileImg.style.transform = `translateY(${rate}px)`;
  }
});

// Add hover effects to project cards
document.addEventListener("click", (e) => {
  if (e.target.closest(".project-card")) {
    const card = e.target.closest(".project-card");
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px) scale(1.02)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  }
});

// Add click effect to buttons
document.addEventListener("click", (e) => {
  if (e.target.closest(".btn")) {
    const button = e.target.closest(".btn");
    const ripple = document.createElement("span");
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = x + "px";
    ripple.style.top = y + "px";
    ripple.classList.add("ripple");

    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  }
});

// Add intersection observer for better performance
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("aos-animate");
    }
  });
}, observerOptions);

// Observe all elements with data-aos attribute
document.querySelectorAll("[data-aos]").forEach((el) => {
  observer.observe(el);
});

// Add active navigation link highlighting
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Contact form handling
const contactForm = document.querySelector(".contact-form");
const submitButton = document.querySelector(".form-submit");

if (contactForm && submitButton) {
  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    // Add loading state
    submitButton.classList.add("loading");
    submitButton.disabled = true;

    // Get form data
    const formData = new FormData(this);
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });

    // Simulate form submission (replace with actual form handling)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Success feedback
      showNotification(
        "Message sent successfully! I'll get back to you soon.",
        "success"
      );
      contactForm.reset();
    } catch (error) {
      // Error feedback
      showNotification(
        "Sorry, there was an error sending your message. Please try again.",
        "error"
      );
    } finally {
      // Remove loading state
      submitButton.classList.remove("loading");
      submitButton.disabled = false;
    }
  });
}

// Notification system
function showNotification(message, type = "info") {
  // Remove existing notifications
  const existingNotification = document.querySelector(".notification");
  if (existingNotification) {
    existingNotification.remove();
  }

  // Create notification element
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <span class="notification-message">${message}</span>
      <button class="notification-close">&times;</button>
    </div>
  `;

  // Add to page
  document.body.appendChild(notification);

  // Show notification
  setTimeout(() => notification.classList.add("show"), 100);

  // Auto remove after 5 seconds
  setTimeout(() => {
    notification.classList.remove("show");
    setTimeout(() => notification.remove(), 300);
  }, 5000);

  // Close button functionality
  notification
    .querySelector(".notification-close")
    .addEventListener("click", () => {
      notification.classList.remove("show");
      setTimeout(() => notification.remove(), 300);
    });
}

// Animate statistics counters
function animateCounters() {
  const counters = document.querySelectorAll(".stat-number");

  counters.forEach((counter) => {
    const target = Number.parseInt(counter.textContent.replace(/\D/g, ""));
    const suffix = counter.textContent.replace(/\d/g, "");
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        counter.textContent = target + suffix;
        clearInterval(timer);
      } else {
        counter.textContent = Math.floor(current) + suffix;
      }
    }, 30);
  });
}

// Trigger counter animation when about section is visible
const aboutSection = document.querySelector(".about-section");
if (aboutSection) {
  const aboutObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounters();
          aboutObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  aboutObserver.observe(aboutSection);
}

// Enhanced form validation
function validateForm() {
  const inputs = document.querySelectorAll(".form-input, .form-textarea");
  let isValid = true;

  inputs.forEach((input) => {
    const value = input.value.trim();

    // Remove existing error styling
    input.classList.remove("error");

    // Check if field is empty
    if (!value) {
      input.classList.add("error");
      isValid = false;
    }

    // Email validation
    if (input.type === "email" && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        input.classList.add("error");
        isValid = false;
      }
    }
  });

  return isValid;
}

// Real-time form validation
document.querySelectorAll(".form-input, .form-textarea").forEach((input) => {
  input.addEventListener("blur", function () {
    if (this.value.trim()) {
      this.classList.remove("error");
    }
  });

  input.addEventListener("input", function () {
    if (this.classList.contains("error") && this.value.trim()) {
      this.classList.remove("error");
    }
  });
});

// Add smooth reveal animation for timeline items
const timelineObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateX(0)";
      }
    });
  },
  { threshold: 0.3 }
);

document.querySelectorAll(".timeline-item").forEach((item, index) => {
  item.style.opacity = "0";
  item.style.transition = "all 0.6s ease";

  if (index % 2 === 0) {
    item.style.transform = "translateX(-50px)";
  } else {
    item.style.transform = "translateX(50px)";
  }

  timelineObserver.observe(item);
});

// Preloader effect
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// Pause animation on hover for better UX
document.addEventListener(
  "mouseenter",
  (e) => {
    if (e.target.closest(".skill-card")) {
      const track = document.querySelector(".skills-track");
      if (track && !track.classList.contains("paused")) {
        track.style.animationPlayState = "paused";
      }
    }
  },
  true
);

document.addEventListener(
  "mouseleave",
  (e) => {
    if (e.target.closest(".skill-card")) {
      const track = document.querySelector(".skills-track");
      if (track && !track.classList.contains("paused")) {
        track.style.animationPlayState = "running";
      }
    }
  },
  true
);
