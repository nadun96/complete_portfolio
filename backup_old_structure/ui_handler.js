// UI Handler - Manages all UI interactions and effects
class UIHandler {
  constructor() {
    this.originalBorderRadius = new WeakMap();
    this.init();
  }

  init() {
    this.setupTheme();
    this.setupNavigation();
    this.setupAnimations();
    this.setupFormHandling();
    this.setupScrollEffects();
  }

  // Theme Management
  setupTheme() {
    const savedTheme = localStorage.getItem('portfolio-theme') || 'vintage';
    const isRounded = localStorage.getItem('portfolio-rounded') === 'true';
    
    document.body.setAttribute('data-theme', savedTheme);
    if (isRounded) document.body.classList.add('rounded-borders');
    
    this.saveBorderRadius(document.querySelectorAll('*:not(img)'));
    this.applyBorderState(isRounded);
    
    document.querySelectorAll('.theme-btn').forEach(btn => {
      if (btn.dataset.theme === savedTheme) btn.classList.add('active');
      
      btn.addEventListener('click', () => this.handleThemeChange(btn));
    });
  }

  handleThemeChange(btn) {
    const theme = btn.dataset.theme;
    
    if (theme === 'sr') {
      const isRounded = !document.body.classList.contains('rounded-borders');
      document.body.classList.toggle('rounded-borders', isRounded);
      localStorage.setItem('portfolio-rounded', isRounded);
      this.applyBorderState(!isRounded);
      btn.classList.toggle('round-mode', isRounded);
      btn.classList.toggle('square-mode', !isRounded);
    } else {
      document.querySelectorAll('.theme-btn').forEach(b => 
        b.dataset.theme !== 'sr' && b.classList.remove('active'));
      btn.classList.add('active');
      document.body.setAttribute('data-theme', theme);
      localStorage.setItem('portfolio-theme', theme);
    }
  }

  saveBorderRadius(elements) {
    elements.forEach(el => {
      if (!this.originalBorderRadius.has(el)) {
        this.originalBorderRadius.set(el, getComputedStyle(el).borderRadius);
      }
    });
  }

  applyBorderState(isRounded) {
    document.querySelectorAll('*:not(img)').forEach(el => {
      if (this.originalBorderRadius.has(el)) {
        el.style.borderRadius = isRounded ? this.originalBorderRadius.get(el) : '0';
      }
    });
  }

  // Navigation
  setupNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger?.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger?.classList.remove('active');
        navMenu?.classList.remove('active');
      });
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href'))?.scrollIntoView({
          behavior: 'smooth', block: 'start'
        });
      });
    });
  }

  // Animations & Effects
  setupAnimations() {
    this.setupAOS();
    this.setupTypeWriter();
    this.setupParallax();
    this.setupCounters();
    this.setupInteractionEffects();
  }

  setupAOS() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('aos-animate');
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('[data-aos]').forEach(el => observer.observe(el));
  }

  setupTypeWriter() {
    window.addEventListener('load', () => {
      const titleElement = document.querySelector('.home-title');
      if (titleElement) {
        const text = titleElement.textContent;
        titleElement.innerHTML = '';
        let i = 0;
        const timer = setInterval(() => {
          if (i < text.length) {
            titleElement.innerHTML += text.charAt(i++);
          } else clearInterval(timer);
        }, 80);
      }
    });
  }

  setupParallax() {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const profileImg = document.querySelector('.profile-img');
      if (profileImg) {
        profileImg.style.transform = `translateY(${scrolled * -0.5}px)`;
      }
    });
  }

  setupCounters() {
    const aboutSection = document.querySelector('.about-section');
    if (aboutSection) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.animateCounters();
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });
      observer.observe(aboutSection);
    }
  }

  animateCounters() {
    document.querySelectorAll('.stat-number').forEach(counter => {
      const target = parseInt(counter.textContent.replace(/\D/g, ''));
      const suffix = counter.textContent.replace(/\d/g, '');
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

  setupInteractionEffects() {
    // Hover effects for project cards
    document.addEventListener('mouseenter', e => {
      const card = e.target.closest('.project-card');
      if (card) card.style.transform = 'translateY(-10px) scale(1.02)';
    }, true);

    document.addEventListener('mouseleave', e => {
      const card = e.target.closest('.project-card');
      if (card) card.style.transform = 'translateY(0) scale(1)';
    }, true);

    // Button ripple effect
    document.addEventListener('click', e => {
      const button = e.target.closest('.btn');
      if (button) {
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `width:${size}px;height:${size}px;left:${x}px;top:${y}px`;
        ripple.className = 'ripple';
        button.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
      }
    });
  }

  // Scroll Effects
  setupScrollEffects() {
    window.addEventListener('scroll', () => {
      this.updateNavbar();
      this.updateActiveNavLinks();
    });
  }

  updateNavbar() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      navbar.style.boxShadow = window.scrollY > 100 ? 
        '0 2px 20px var(--shadow-light)' : 'none';
    }
  }

  updateActiveNavLinks() {
    let current = '';
    document.querySelectorAll('section[id]').forEach(section => {
      const sectionTop = section.offsetTop;
      if (window.pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  }

  // Form Handling
  setupFormHandling() {
    const form = document.querySelector('.contact-form');
    const submitBtn = document.querySelector('.form-submit');
    
    if (form && submitBtn) {
      form.addEventListener('submit', async e => {
        e.preventDefault();
        if (!this.validateForm()) return;

        submitBtn.classList.add('loading');
        submitBtn.disabled = true;

        try {
          await new Promise(resolve => setTimeout(resolve, 2000));
          this.showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
          form.reset();
        } catch (error) {
          this.showNotification('Sorry, there was an error. Please try again.', 'error');
        } finally {
          submitBtn.classList.remove('loading');
          submitBtn.disabled = false;
        }
      });
    }

    // Real-time validation
    document.querySelectorAll('.form-input, .form-textarea').forEach(input => {
      input.addEventListener('blur', function() {
        if (this.value.trim()) this.classList.remove('error');
      });
      input.addEventListener('input', function() {
        if (this.classList.contains('error') && this.value.trim()) {
          this.classList.remove('error');
        }
      });
    });
  }

  validateForm() {
    const inputs = document.querySelectorAll('.form-input, .form-textarea');
    let isValid = true;

    inputs.forEach(input => {
      const value = input.value.trim();
      input.classList.remove('error');

      if (!value) {
        input.classList.add('error');
        isValid = false;
      }

      if (input.type === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        input.classList.add('error');
        isValid = false;
      }
    });

    return isValid;
  }

  showNotification(message, type = 'info') {
    document.querySelector('.notification')?.remove();

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
      <div class="notification-content">
        <span class="notification-message">${message}</span>
        <button class="notification-close">&times;</button>
      </div>
    `;

    document.body.appendChild(notification);
    setTimeout(() => notification.classList.add('show'), 100);
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => notification.remove(), 300);
    }, 5000);

    notification.querySelector('.notification-close').addEventListener('click', () => {
      notification.classList.remove('show');
      setTimeout(() => notification.remove(), 300);
    });
  }
}

// Initialize UI Handler
document.addEventListener('DOMContentLoaded', () => {
  new UIHandler();
  document.body.classList.add('loaded');
});