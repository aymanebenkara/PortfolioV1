/* Portfolio Main JavaScript */

/* Scroll Reveal Animation */
const initScrollReveal = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        
        // Animate skill bars when they become visible
        if (entry.target.classList.contains("skill-card") || 
            entry.target.classList.contains("languages-card")) {
          animateSkillBars(entry.target);
        }
      }
    });
  }, observerOptions);

  document.querySelectorAll(".fade-in").forEach((el) => {
    observer.observe(el);
  });
};

/* Skill Bars Animation */
const animateSkillBars = (container) => {
  const skillBars = container.querySelectorAll(".skill-bar-fill");
  
  skillBars.forEach((bar, index) => {
    const level = bar.getAttribute("data-level");
    
    setTimeout(() => {
      bar.style.setProperty("--skill-level", `${level}%`);
      bar.classList.add("animated");
      bar.style.width = `${level}%`;
    }, index * 100); // Stagger animation
  });
};

/* Smooth Scroll */
const initSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        // Close mobile menu if open
        const navMenu = document.querySelector(".navbar-menu");
        if (navMenu && navMenu.classList.contains("active")) {
          navMenu.classList.remove("active");
        }
      }
    });
  });
};

/* Typing Effect */
const initTypingEffect = () => {
  const subtitle = document.querySelector(".hero-subtitle");
  if (!subtitle) return;

  const text = subtitle.textContent;
  subtitle.textContent = "";
  subtitle.classList.add("typing-cursor");
  let i = 0;

  setTimeout(() => {
    const typeWriter = () => {
      if (i < text.length) {
        subtitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      } else {
        subtitle.classList.remove("typing-cursor");
      }
    };
    typeWriter();
  }, 500);
};

/* Parallax Effect */
const initParallax = () => {
  let ticking = false;

  const updateParallax = () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector(".hero");

    if (hero && scrolled < window.innerHeight) {
      hero.style.transform = `translateY(${scrolled * 0.5}px)`;
      hero.style.opacity = 1 - scrolled / window.innerHeight;
    }

    ticking = false;
  };

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  });
};

/* Mobile Menu */
const initMobileMenu = () => {
  const toggle = document.querySelector(".navbar-toggle");
  const menu = document.querySelector(".navbar-menu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("active");
      const isActive = menu.classList.contains("active");
      toggle.textContent = isActive ? "X" : "☰";
    });
  }
};

/* Active Navigation */
const initActiveNav = () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".navbar-link");

  const highlightNav = () => {
    const scrollY = window.pageYOffset;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  };

  window.addEventListener("scroll", highlightNav);
};

/* Console Easter Egg */
const initConsoleEasterEgg = () => {
  const styles = [
    "color: #cc0000",
    "font-size: 16px",
    "font-weight: bold",
    'font-family: "Space Mono", monospace',
  ].join(";");

  console.log("%c> Hola, desarrollador curioso! 👋", styles);
  console.log(
    "%c> Gracias por revisar mi código",
    'color: #ffffff; font-family: "Space Mono", monospace'
  );
  console.log(
    "%c> ¿Buscas colaborar? Contacta conmigo!",
    'color: #8b0000; font-family: "Space Mono", monospace'
  );
};

/* Initialize All Features */
const init = () => {
  // Wait for DOM to be fully loaded
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
    return;
  }

  // Initialize all features
  initScrollReveal();
  initSmoothScroll();
  initTypingEffect();
  initParallax();
  initMobileMenu();
  initActiveNav();
  initConsoleEasterEgg();

  console.log(
    "%c✓ Portfolio initialized successfully",
    "color: #00ff00; font-family: monospace"
  );
};

/* Start initialization */
init();
