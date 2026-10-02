/**
 * Subham Agrahari - Portfolio Interactivity & Modern Animations
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileNav();
  initContactForm();
  initBackToTop();
  initDynamicYear();
  initActiveNavLink();
  initMetricCounter();
});

/* -------------------------------------------------------------
 * 1. THEME TOGGLING (Dark / Light)
 * ------------------------------------------------------------- */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;

  // Retrieve saved theme or system preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme) {
    htmlElement.setAttribute('data-theme', savedTheme);
  } else if (!systemPrefersDark) {
    htmlElement.setAttribute('data-theme', 'light');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      htmlElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }
}

/* -------------------------------------------------------------
 * 2. MOBILE NAVIGATION
 * ------------------------------------------------------------- */
function initMobileNav() {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

/* -------------------------------------------------------------
 * 3. CONTACT FORM SIMULATION
 * ------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');
  const submitBtn = document.getElementById('submit-btn');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        alert('Please fill out all required fields.');
        return;
      }

      // Show submitting state
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Sending...</span>';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        form.reset();

        if (feedback) {
          feedback.textContent = `Thank you, ${name}! Your message has been sent to Subham. I'll get back to you shortly.`;
          feedback.className = 'form-feedback success';
          feedback.style.display = 'block';

          setTimeout(() => {
            feedback.style.display = 'none';
          }, 6000);
        }
      }, 900);
    });
  }
}

/* -------------------------------------------------------------
 * 4. BACK TO TOP
 * ------------------------------------------------------------- */
function initBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

/* -------------------------------------------------------------
 * 5. DYNAMIC COPYRIGHT YEAR
 * ------------------------------------------------------------- */
function initDynamicYear() {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

/* -------------------------------------------------------------
 * 6. ACTIVE NAVIGATION ON SCROLL
 * ------------------------------------------------------------- */
function initActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });
}

/* -------------------------------------------------------------
 * 7. METRIC COUNTER ANIMATION
 * ------------------------------------------------------------- */
function initMetricCounter() {
  const metricCards = document.querySelectorAll('.metric-number');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        metricCards.forEach(card => {
          const target = parseInt(card.getAttribute('data-count'), 10);
          if (isNaN(target)) return;

          let count = 0;
          const duration = 1000; // ms
          const step = Math.max(1, Math.ceil(target / (duration / 30)));

          const timer = setInterval(() => {
            count += step;
            if (count >= target) {
              clearInterval(timer);
              if (target === 3) card.textContent = '3.5+';
              else if (target === 60) card.textContent = '60%';
              else if (target === 40) card.textContent = '40%';
              else if (target === 9) card.textContent = '9.48';
            } else {
              if (target === 9) {
                card.textContent = (count * 1.05).toFixed(1);
              } else if (target === 3) {
                card.textContent = count + '+';
              } else {
                card.textContent = count + '%';
              }
            }
          }, 30);
        });
      }
    });
  }, { threshold: 0.3 });

  const metricsSection = document.querySelector('.metrics-section');
  if (metricsSection) {
    observer.observe(metricsSection);
  }
}
