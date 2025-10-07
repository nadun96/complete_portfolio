// UI Interactions Module - Handles navigation, theme switching, and other UI interactions

export class UIManager {
  constructor() {
    this.init();
  }

  init() {
    this.setupNavigation();
    this.setupThemeSwitcher();
    this.setupSmoothScroll();
    this.setupFormHandling();
  }

  // Mobile Navigation Toggle
  setupNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
      });

      // Close menu when clicking on a nav link
      document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
          hamburger.classList.remove('active');
          navMenu.classList.remove('active');
        });
      });

      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
          hamburger.classList.remove('active');
          navMenu.classList.remove('active');
        }
      });
    }
  }

  // Theme Switcher
  setupThemeSwitcher() {
    const themeButtons = document.querySelectorAll('.theme-btn');
    const body = document.body;
    const squareModeBtn = document.querySelector('.square-mode');

    // Load saved theme
    const savedTheme = localStorage.getItem('portfolio-theme') || 'vintage';
    const savedBorderRadius = localStorage.getItem('portfolio-border-radius') || 'rounded';
    
    body.setAttribute('data-theme', savedTheme);
    if (savedBorderRadius === 'square') {
      body.classList.add('square-edges');
      squareModeBtn?.classList.add('active');
    }

    // Set active button
    themeButtons.forEach(btn => {
      if (btn.getAttribute('data-theme') === savedTheme) {
        btn.classList.add('active');
      }
    });

    // Theme button clicks
    themeButtons.forEach(button => {
      button.addEventListener('click', () => {
        const theme = button.getAttribute('data-theme');
        
        if (theme === 'sr') {
          // Toggle square/round mode
          body.classList.toggle('square-edges');
          button.classList.toggle('active');
          
          const borderRadius = body.classList.contains('square-edges') ? 'square' : 'rounded';
          localStorage.setItem('portfolio-border-radius', borderRadius);
        } else {
          // Change theme
          body.setAttribute('data-theme', theme);
          localStorage.setItem('portfolio-theme', theme);
          
          // Update active button
          themeButtons.forEach(btn => {
            if (btn.getAttribute('data-theme') !== 'sr') {
              btn.classList.remove('active');
            }
          });
          button.classList.add('active');
        }
      });
    });
  }

  // Smooth Scrolling
  setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      });
    }
  }

  // Contact Form Handling
  setupFormHandling() {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const name = contactForm.querySelector('#name').value;
        const email = contactForm.querySelector('#email').value;
        const subject = contactForm.querySelector('#subject').value;
        const message = contactForm.querySelector('#message').value;
        
        // Create mailto link
        const mailtoLink = this.createMailtoLink(name, email, subject, message);
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Show notification
        this.showNotification('Opening your email client... ✉️', 'success');
        
        // Reset form after a short delay
        setTimeout(() => {
          contactForm.reset();
        }, 1000);
      });
    }
  }

  // Create mailto link with form data
  createMailtoLink(name, email, subject, message) {
    const to = 'udarakanadun@gmail.com';
    const encodedSubject = encodeURIComponent(subject);
    const emailBody = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const encodedBody = encodeURIComponent(emailBody);
    
    return `mailto:${to}?subject=${encodedSubject}&body=${encodedBody}`;
  }

  // Show notification message
  showNotification(message, type = 'success') {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
      existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => notification.classList.add('show'), 10);
    
    // Remove after 5 seconds
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => notification.remove(), 300);
    }, 5000);
  }

  // Utility: Add active class to current nav item
  setActiveNavItem() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 100) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    });
  }
}
