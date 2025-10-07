// =================== Theme & Border Logic ===================

const themeButtons = document.querySelectorAll(".theme-btn");
const body = document.body;

// Load saved theme and border state
const savedTheme = localStorage.getItem("portfolio-theme") || "vintage";
const isRoundedSaved = localStorage.getItem("portfolio-rounded") === "true";

body.setAttribute("data-theme", savedTheme);
if (isRoundedSaved) {
  body.classList.add("rounded-borders");
  document.querySelectorAll("*:not(img)").forEach((el) => {
    el.style.borderRadius = "0";
  });
}

const activeBtn = document.querySelector(`[data-theme="${savedTheme}"]`);
if (activeBtn) activeBtn.classList.add("active");

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

// =================== UI Animations ===================

window.addEventListener("scroll", () => {
  /* Navbar shadow & active nav link */
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    if (window.scrollY > 100) {
      navbar.style.boxShadow = "0 2px 20px var(--shadow-light)";
    } else {
      navbar.style.boxShadow = "none";
    }
  }
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  /* Smooth scrolling */
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

// Animate on Scroll
window.addEventListener("scroll", animateOnScroll);
document.addEventListener("DOMContentLoaded", animateOnScroll);

// Intersection Observer for animations
document.querySelectorAll("[data-aos]").forEach((el) => {
  observer.observe(el);
});

// Parallax effect
window.addEventListener("scroll", () => {
  /* Parallax for profile image */
  const scrolled = window.pageYOffset;
  const homeSection = document.querySelector(".home-section");
  const profileImg = document.querySelector(".profile-img");

  if (homeSection && profileImg) {
    const rate = scrolled * -0.5;
    profileImg.style.transform = `translateY(${rate}px)`;
  }
});

// Typing effect
window.addEventListener("load", () => {
  /* Typing effect for home title */
  const titleElement = document.querySelector(".home-title");
  if (titleElement) {
    const originalText = titleElement.textContent;
    typeWriter(titleElement, originalText, 80);
  }
});

// Stats counter animation
// Intersection Observer for stats
if (aboutSection) {
  /* Counter logic same as before */
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

// Timeline animation
document.querySelectorAll(".timeline-item").forEach((item, index) => {
  /* Timeline animation */
  item.style.opacity = "0";
  item.style.transition = "all 0.6s ease";

  if (index % 2 === 0) {
    item.style.transform = "translateX(-50px)";
  } else {
    item.style.transform = "translateX(50px)";
  }

  timelineObserver.observe(item);
});

// Preloader
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// Pause animation on hover
document.addEventListener(
  "mouseenter",
  (e) => {
    /* Pause skills track on hover */
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
    /* Resume skills track on leave */
    if (e.target.closest(".skill-card")) {
      const track = document.querySelector(".skills-track");
      if (track && !track.classList.contains("paused")) {
        track.style.animationPlayState = "running";
      }
    }
  },
  true
);

// =================== Contact Form ===================

const contactForm = document.querySelector(".contact-form");
const submitButton = document.querySelector(".form-submit");

if (contactForm && submitButton) {
  contactForm.addEventListener("submit", async function (e) {
    /* Form submission logic */
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

function showNotification(message, type = "info") {
  /* Notification function */
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

// =================== Form Validation ===================

function validateForm() {
  /* Validation logic */
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

document.querySelectorAll(".form-input, .form-textarea").forEach((input) => {
  /* Real-time validation */
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

// =================== Button Click Effect ===================

document.addEventListener("click", (e) => {
  /* Ripple effect for buttons */
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

// =================== Project Card Hover Effects ===================

document.addEventListener("click", (e) => {
  /* Hover effects for project cards */
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
