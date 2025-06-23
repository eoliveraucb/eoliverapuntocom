// Portfolio data
const portfolioData = [
  {
    id: 1,
    title: "Church of Emergence",
    category: "Branding & Identity",
    image: "assets/work--church_1750639835231.png"
  },
  {
    id: 2,
    title: "Business Energy Checkup",
    category: "Corporate Design",
    image: "assets/b6494416084587.562a5300002a5_1750639835231.jpg"
  },
  {
    id: 3,
    title: "WorldNet Digital Services",
    category: "Logo Design",
    image: "assets/worldnet-new-logo_1750639835232.png"
  },
  {
    id: 4,
    title: "Cleaning Concepts",
    category: "Brand Identity",
    image: "assets/cleaning-concets_1750639835232.png"
  },
  {
    id: 5,
    title: "SOMOS Identity",
    category: "Cultural Design",
    image: "assets/Untitled-2_1750639835232.jpg"
  },
  {
    id: 6,
    title: "Focus Fest 2013",
    category: "Event Design",
    image: "assets/Screenshot-2025-01-29-at-1.03.48PM_1750639835233.png"
  },
  {
    id: 7,
    title: "Finanzgruppe Interface",
    category: "Digital Design",
    image: "assets/1604098117810_1750639835233.jpg"
  },
  {
    id: 8,
    title: "Chili Fest 2009",
    category: "Event Branding",
    image: "assets/chili_1750639835233.png"
  },
  {
    id: 9,
    title: "Student Journey Map",
    category: "UX Design",
    image: "assets/Screenshot-2025-02-05-at-6.49.02PM_1750639835233.png"
  },
  {
    id: 10,
    title: "Arte + Tecnología",
    category: "Educational Design",
    image: "assets/Untitled-5_1750639835233.jpg"
  },
  {
    id: 11,
    title: "Pride Campaign",
    category: "Social Impact",
    image: "assets/Screenshot-2025-02-18-at-3.24.00PM_1750639835233.png"
  },
  {
    id: 12,
    title: "Disaster Response Cards",
    category: "Information Design",
    image: "assets/DISASTERCARDS_1750639835233.png"
  }
];

// Courses data
const coursesData = [
  {
    id: 1,
    title: "Digital Design 4",
    category: "Interactive Design",
    description: "Examine digital design through future-oriented perspectives, emphasizing transformative social and cultural relationships in designing with emerging technologies. A participatory design experience fostering critical thinking about post-humanist and transhumanist design practice.",
    duration: "1 Semester",
    level: "Advanced",
    format: "Online (Zoom)",
    skills: ["Speculative Design", "Systems Thinking", "Emerging Technologies", "UX/UI Design"],
    media: {
      type: "youtube",
      src: "https://www.youtube.com/embed/PuGE5PVlhic?autoplay=1&mute=1&controls=0&loop=1&playlist=PuGE5PVlhic"
    }
  },
  {
    id: 2,
    title: "Sensory Design Workshop",
    category: "Speculative Design",
    description: "Students collaborate in groups using futures thinking and speculative design concepts to create presentation web prototypes with native HTML, CSS, and JavaScript. This example showcases a futuristic service using neuralink-type devices to create 3D printed textures of specific memories.",
    duration: "4 weeks",
    level: "Intermediate",
    format: "Hybrid",
    skills: ["Futures Thinking", "Speculative Design", "Web Prototyping", "Neural Interface Design"],
    media: {
      type: "youtube",
      src: "https://www.youtube.com/embed/w3ZcEwXYIt0?autoplay=1&mute=1&controls=0&loop=1&playlist=w3ZcEwXYIt0"
    }
  },
  {
    id: 3,
    title: "Digital Realities & AR/XR",
    category: "Extended Reality",
    description: "Explore AR, XR, and projection mapping using Studio Lens and TouchDesigner. Analyze reality persistence in emerging technologies from Plato's cave to modern projection mapping, including LLM prompt design and machine learning exercises.",
    duration: "6 weeks",
    level: "Advanced",
    format: "Online",
    skills: ["AR/XR Development", "Projection Mapping", "Machine Learning", "Prompt Design"],
    media: {
      type: "youtube",
      src: "https://www.youtube.com/embed/-Nwveq3EAZo?autoplay=1&mute=1&controls=0&loop=1&playlist=-Nwveq3EAZo"
    }
  },
  {
    id: 4,
    title: "Systems in Digital Design",
    category: "Creative Coding",
    description: "Learn creative coding with p5.js and AI-assisted programming. Introduction to systems mapping, workflow optimization, and bridging visual identity with digital systems through brand standards.",
    duration: "8 weeks",
    level: "Intermediate",
    format: "Online",
    skills: ["Creative Coding", "p5.js", "Systems Mapping", "Brand Systems"],
    media: {
      type: "image",
      src: "assets/Digital Design 4 _ Digital Workshop 4_1750640874282.jpeg"
    }
  },
  {
    id: 5,
    title: "Memory Box Sensorial Memory",
    category: "Sensory Design",
    description: "Design a box containing a sensorial memory using binaural sound reproduction and scent composition. Students create low-fidelity prototypes that limit visual stimuli while opening experiences through binaural audio combined with olfactory elements, accompanied by explanatory haiku poetry.",
    duration: "3 weeks",
    level: "Intermediate",
    format: "Hybrid",
    skills: ["Binaural Audio", "Scent Design", "Haiku Poetry", "Sensory Prototyping"],
    media: {
      type: "video",
      src: "assets/ExperienciaMemoryBox_1750642203857.mp4"
    }
  },
  {
    id: 6,
    title: "Double-Diamond Exercise",
    category: "Design Process",
    description: "Students collectively use a Miro board to apply the double-diamond methodology for understanding divergent and convergent creative ideation in product design process. This collaborative exercise deepens comprehension of design thinking frameworks through hands-on practice.",
    duration: "2 weeks",
    level: "Intermediate",
    format: "Online",
    skills: ["Design Thinking", "Miro Collaboration", "Divergent Thinking", "Convergent Thinking"],
    media: {
      type: "youtube",
      src: "https://www.youtube.com/embed/xYo3_4T4owY?autoplay=1&mute=1&controls=0&loop=1&playlist=xYo3_4T4owY"
    }
  }
];

// Theme management
class ThemeManager {
  constructor() {
    this.theme = localStorage.getItem('theme') || 'light';
    this.init();
  }

  init() {
    this.applyTheme();
    this.bindEvents();
  }

  applyTheme() {
    if (this.theme === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
    this.updateThemeIcon();
  }

  updateThemeIcon() {
    const icon = document.querySelector('#theme-toggle i');
    if (icon) {
      icon.className = this.theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
  }

  toggle() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', this.theme);
    this.applyTheme();
  }

  bindEvents() {
    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => this.toggle());
    }
  }
}

// Mobile menu management
class MobileMenu {
  constructor() {
    this.isOpen = false;
    this.init();
  }

  init() {
    this.bindEvents();
  }

  toggle() {
    this.isOpen = !this.isOpen;
    const menu = document.getElementById('mobile-menu');
    const body = document.body;
    
    if (this.isOpen) {
      menu.classList.add('open');
      body.style.overflow = 'hidden';
    } else {
      menu.classList.remove('open');
      body.style.overflow = '';
    }
  }

  close() {
    this.isOpen = false;
    const menu = document.getElementById('mobile-menu');
    const body = document.body;
    
    menu.classList.remove('open');
    body.style.overflow = '';
  }

  bindEvents() {
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => this.toggle());
    }

    // Close menu when clicking on a link
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => this.close());
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      const menu = document.getElementById('mobile-menu');
      const toggleBtn = document.getElementById('mobile-menu-toggle');
      
      if (this.isOpen && !menu.contains(e.target) && !toggleBtn.contains(e.target)) {
        this.close();
      }
    });
  }
}

// Scroll effects
class ScrollEffects {
  constructor() {
    this.init();
  }

  init() {
    this.bindScrollEvents();
    this.setupSmoothScrolling();
  }

  bindScrollEvents() {
    let ticking = false;
    
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          this.handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  handleScroll() {
    const header = document.getElementById('header');
    const scrolled = window.scrollY > 50;
    
    if (scrolled) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const headerHeight = document.getElementById('header').offsetHeight;
          const targetPosition = targetElement.offsetTop - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }
}

// Portfolio renderer
class PortfolioRenderer {
  constructor() {
    this.container = document.getElementById('portfolio-grid');
    this.render();
  }

  render() {
    if (!this.container) return;

    this.container.innerHTML = portfolioData.map(item => `
      <div class="portfolio-item" data-category="${item.category}">
        <img src="${item.image}" alt="${item.title}" loading="lazy">
        <div class="portfolio-overlay">
          <div class="portfolio-info">
            <div class="portfolio-category">${item.category}</div>
            <div class="portfolio-title">${item.title}</div>
          </div>
        </div>
      </div>
    `).join('');
  }
}

// Courses renderer
class CoursesRenderer {
  constructor() {
    this.container = document.getElementById('courses-grid');
    this.render();
  }

  render() {
    if (!this.container) return;

    this.container.innerHTML = coursesData.map(course => `
      <div class="course-item">
        <div class="course-media">
          ${this.renderMedia(course.media)}
        </div>
        <div class="course-content">
          <div class="course-header">
            <span class="course-category">${course.category}</span>
            <span class="course-format">${course.format}</span>
          </div>
          <h3 class="course-title">${course.title}</h3>
          <p class="course-description">${course.description}</p>
          <div class="course-skills">
            ${course.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
          </div>
        </div>
      </div>
    `).join('');
  }

  renderMedia(media) {
    switch (media.type) {
      case 'youtube':
        return `<iframe src="${media.src}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      case 'video':
        return `<video src="${media.src}" autoplay muted loop playsinline></video>`;
      case 'image':
      default:
        return `<img src="${media.src}" alt="Course media" loading="lazy">`;
    }
  }
}

// Contact form handler
class ContactForm {
  constructor() {
    this.form = document.getElementById('contact-form');
    this.init();
  }

  init() {
    if (!this.form) return;
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
  }

  handleSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(this.form);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to a server
    // For now, we'll just show a success message
    this.showSuccess();
    this.form.reset();
  }

  showSuccess() {
    // Create and show success message
    const message = document.createElement('div');
    message.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: var(--accent-primary);
      color: white;
      padding: 1rem 2rem;
      border-radius: 8px;
      z-index: 10000;
      box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    `;
    message.textContent = 'Thank you! Your message has been sent.';
    
    document.body.appendChild(message);
    
    setTimeout(() => {
      message.remove();
    }, 3000);
  }
}

// Intersection Observer for animations
class AnimationObserver {
  constructor() {
    this.init();
  }

  init() {
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observe elements
    const elements = document.querySelectorAll('.focus-card, .portfolio-item, .course-item, .feature-item');
    elements.forEach(el => observer.observe(el));
  }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new ThemeManager();
  new MobileMenu();
  new ScrollEffects();
  new PortfolioRenderer();
  new CoursesRenderer();
  new ContactForm();
  new AnimationObserver();
});

// Handle page visibility changes
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    // Pause any animations or videos if needed
  } else {
    // Resume animations or videos if needed
  }
});

// Preload critical images
const preloadImages = [
  'assets/profile2.png',
  'assets/emlogo.svg',
  'assets/motif.svg'
];

preloadImages.forEach(src => {
  const img = new Image();
  img.src = src;
});