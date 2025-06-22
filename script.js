// Theme switching functionality
const themeButtons = document.querySelectorAll(".theme-btn");
const body = document.body;

themeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const theme = btn.dataset.theme;

    // Remove active class from all buttons
    themeButtons.forEach((b) => b.classList.remove("active"));

    // Add active class to clicked button
    btn.classList.add("active");

    // Set theme on body
    body.setAttribute("data-theme", theme);

    // Save theme preference
    localStorage.setItem("portfolio-theme", theme);
  });
});

// Load saved theme
const savedTheme = localStorage.getItem("portfolio-theme") || "vintage";
body.setAttribute("data-theme", savedTheme);
document.querySelector(`[data-theme="${savedTheme}"]`).classList.add("active");

// Search functionality for Projects
const projectsSearch = document.getElementById("projectsSearch");
const projectsClear = document.getElementById("projectsClear");
const projectsResults = document.getElementById("projectsResults");
const projectsGrid = document.getElementById("projectsGrid");
let projectsTimeout;

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

projectsClear.addEventListener("click", () => {
  projectsSearch.value = "";
  projectsClear.classList.remove("visible");
  searchProjects("");
});

function searchProjects(query) {
  const projectCards = projectsGrid.querySelectorAll(".project-card");
  let visibleCount = 0;

  if (query === "") {
    projectCards.forEach((card) => {
      card.classList.remove("hidden");
      visibleCount++;
    });
    projectsResults.textContent = "";
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
  if (visibleCount === 0) {
    projectsResults.innerHTML = `<div class="no-results">No projects found for "${query}". Try different keywords.</div>`;
  } else {
    projectsResults.textContent = `Found ${visibleCount} project${
      visibleCount !== 1 ? "s" : ""
    } for "${query}"`;
  }
}

// Search functionality for Skills
const skillsSearch = document.getElementById("skillsSearch");
const skillsClear = document.getElementById("skillsClear");
const skillsResults = document.getElementById("skillsResults");
const skillsTrack = document.getElementById("skillsTrack");
let skillsTimeout;

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

skillsClear.addEventListener("click", () => {
  skillsSearch.value = "";
  skillsClear.classList.remove("visible");
  searchSkills("");
});

function searchSkills(query) {
  const skillCards = skillsTrack.querySelectorAll(".skill-card");
  let visibleCount = 0;

  if (query === "") {
    skillCards.forEach((card) => {
      card.classList.remove("hidden");
      visibleCount++;
    });
    skillsResults.textContent = "";
    skillsTrack.classList.remove("paused");
    return;
  }

  const lowerQuery = query.toLowerCase();
  skillsTrack.classList.add("paused");

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
  if (visibleCount === 0) {
    skillsResults.innerHTML = `<div class="no-results">No skills found for "${query}". Try different keywords.</div>`;
  } else {
    skillsResults.textContent = `Found ${visibleCount} skill${
      visibleCount !== 1 ? "s" : ""
    } for "${query}"`;
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

// Navbar background on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.style.boxShadow = "0 2px 20px var(--shadow-light)";
  } else {
    navbar.style.boxShadow = "none";
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

// Initial check for elements in view
document.addEventListener("DOMContentLoaded", () => {
  animateOnScroll();
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
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px) scale(1.02)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// Add click effect to buttons
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", function (e) {
    const ripple = document.createElement("span");
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = x + "px";
    ripple.style.top = y + "px";
    ripple.classList.add("ripple");

    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
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

if (contactForm) {
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
    const target = parseInt(counter.textContent.replace(/\D/g, ""));
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

// Duplicate skills for infinite scroll
document.addEventListener("DOMContentLoaded", () => {
  const skillsTrack = document.querySelector(".skills-track");
  if (skillsTrack) {
    const skillCards = skillsTrack.innerHTML;
    skillsTrack.innerHTML = skillCards + skillCards; // Duplicate for seamless loop
  }
});

// Pause animation on hover for better UX
document.querySelectorAll(".skill-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    const track = document.querySelector(".skills-track");
    track.style.animationPlayState = "paused";
  });

  card.addEventListener("mouseleave", () => {
    const track = document.querySelector(".skills-track");
    if (!track.classList.contains("paused")) {
      track.style.animationPlayState = "running";
    }
  });
});

// Reset all border-radius styles to zero skip images
document.querySelectorAll("*").forEach((el) => {
  if (el.tagName.toLowerCase() !== "img") {
    el.style.borderRadius = "0";
  }
});
