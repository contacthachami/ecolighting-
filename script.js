/**
 * Ecolighting Social Media Hub
 * Interactive loading animation and smooth transitions
 */

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get elements
  const loader = document.getElementById("loader");
  const mainContent = document.getElementById("mainContent");
  const socialCards = document.querySelectorAll(".social-card");

  // Loading duration (in milliseconds)
  const LOADING_DURATION = 2500;

  /**
   * Initialize the page
   */
  function init() {
    // Hide loader and show main content after loading duration
    setTimeout(() => {
      hideLoader();
    }, LOADING_DURATION);

    // Add staggered animation to social cards
    animateSocialCards();

    // Add click tracking (optional - for analytics)
    trackSocialClicks();

    // Add touch feedback for mobile devices
    addTouchFeedback();

    // Initialize scroll animations
    initScrollAnimations();
  }

  /**
   * Hide loader with fade animation
   */
  function hideLoader() {
    loader.classList.add("fade-out");

    // Wait for fade animation to complete before showing content
    setTimeout(() => {
      loader.style.display = "none";
      mainContent.classList.add("show");
    }, 500);
  }

  /**
   * Animate social cards with stagger effect
   */
  function animateSocialCards() {
    socialCards.forEach((card, index) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(20px)";

      // Stagger animation delay
      setTimeout(
        () => {
          card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        },
        LOADING_DURATION + index * 100,
      );
    });
  }

  /**
   * Track social media clicks (console log for now)
   * You can integrate with analytics tools like Google Analytics
   */
  function trackSocialClicks() {
    socialCards.forEach((card) => {
      card.addEventListener("click", function (e) {
        const platform = this.classList[1]; // Get the platform class name
        const url = this.href;

        // Optional: Add Google Analytics or other tracking here
        if (typeof gtag !== "undefined") {
          gtag("event", "social_click", { platform: platform, url: url });
        }
      });
    });
  }

  /**
   * Add touch feedback for mobile devices
   */
  function addTouchFeedback() {
    socialCards.forEach((card) => {
      card.addEventListener("touchstart", function () {
        this.style.opacity = "0.8";
      });

      card.addEventListener("touchend", function () {
        this.style.opacity = "1";
      });
    });
  }

  /**
   * Initialize scroll animations for better UX
   */
  function initScrollAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    // Observe social cards after initial animation
    setTimeout(() => {
      socialCards.forEach((card) => {
        observer.observe(card);
      });
    }, LOADING_DURATION + 1000);
  }

  /**
   * Add ripple effect on click (optional enhancement)
   */
  function createRipple(event, element) {
    const ripple = document.createElement("span");
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = x + "px";
    ripple.style.top = y + "px";
    ripple.classList.add("ripple");

    element.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  }

  // Add ripple effect to cards (optional)
  socialCards.forEach((card) => {
    card.addEventListener("click", function (e) {
      createRipple(e, this);
    });
  });

  /**
   * Prevent right-click on logo (optional protection)
   */
  const logos = document.querySelectorAll(".loader-logo, .main-logo");
  logos.forEach((logo) => {
    logo.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
  });

  /**
   * Add keyboard navigation support for accessibility
   */
  function enhanceAccessibility() {
    socialCards.forEach((card, index) => {
      card.setAttribute("tabindex", index + 1);

      card.addEventListener("keypress", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          this.click();
        }
      });

      card.addEventListener("focus", function () {
        this.style.outline = "3px solid var(--primary-yellow)";
        this.style.outlineOffset = "2px";
      });

      card.addEventListener("blur", function () {
        this.style.outline = "none";
      });
    });
  }

  enhanceAccessibility();

  /**
   * Performance optimization - Lazy load if needed
   */
  if ("loading" in HTMLImageElement.prototype) {
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
      img.loading = "lazy";
    });
  }

  /**
   * Add PWA-like features - Detect online/offline status
   */
  window.addEventListener("online", () => {
    // Connection restored - could show user notification
    showConnectionStatus(true);
  });

  window.addEventListener("offline", () => {
    // No internet connection - could show user notification
    showConnectionStatus(false);
  });

  /**
   * Copy to clipboard functionality (optional - for email/phone)
   */
  function addCopyToClipboard() {
    const emailCard = document.querySelector(".social-card.email");
    const phoneCard = document.querySelector(".social-card.phone");

    [emailCard, phoneCard].forEach((card) => {
      card.addEventListener("contextmenu", function (e) {
        e.preventDefault();
        const text = this.querySelector(".social-info p").textContent;

        navigator.clipboard.writeText(text).then(() => {
          showCopyNotification(this);
        });
      });
    });
  }

  /**
   * Show copy notification
   */
  function showCopyNotification(element) {
    const notification = document.createElement("div");
    notification.textContent = "✓ Copied!";
    notification.style.cssText = `
            position: absolute;
            top: 50%;
            right: 10px;
            transform: translateY(-50%);
            background: var(--primary-green);
            color: white;
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: 500;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;

    element.style.position = "relative";
    element.appendChild(notification);

    setTimeout(() => {
      notification.style.opacity = "1";
    }, 10);

    setTimeout(() => {
      notification.style.opacity = "0";
      setTimeout(() => notification.remove(), 300);
    }, 2000);
  }

  addCopyToClipboard();

  // Initialize everything
  init();

  // Mark initialization as complete
  document.body.setAttribute("data-app-loaded", "true");
});

/**
 * Service Worker Registration (Optional - for PWA features)
 * Uncomment if you want offline support
 */
/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('✅ Service Worker registered:', registration);
            })
            .catch(error => {
                console.log('❌ Service Worker registration failed:', error);
            });
    });
}
*/

/**
 * Add CSS for ripple effect
 */
const style = document.createElement("style");
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(10, 107, 60, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
