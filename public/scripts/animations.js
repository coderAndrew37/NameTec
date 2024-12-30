gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;

  switch (page) {
    case "homepage":
      animateHomepage();
      break;
    case "about":
      animateAboutPage();
      break;
    case "gallery":
      animateGalleryPage();
      break;
    case "blog":
      animateBlogPage();
      break;
    case "contact":
      animateContactPage();
      break;
    default:
      console.warn("No animations defined for this page.");
  }
});

// Animations for Homepage
function animateHomepage() {
  // Hero Section Fade-In
  gsap.from("#hero h1", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
  });

  gsap.from("#hero p", {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.5,
    ease: "power2.out",
  });

  gsap.from("#hero a", {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 1,
    ease: "power2.out",
  });

  // Lottie animation for hero icon
  const heroLottie = Lottie.loadAnimation({
    container: document.querySelector("#hero .lottie-icon"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "/animations/hero-animation.json", // Replace with actual path
  });

  // Scroll-triggered animations
  ScrollTrigger.batch("#why-us .grid div", {
    start: "top 90%",
    onEnter: (batch) => {
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
      });
    },
    onLeaveBack: (batch) => {
      gsap.to(batch, { opacity: 0, y: 50 });
    },
  });
}

// Animations for About Page
function animateAboutPage() {
  // Fade-In Story Section
  gsap.from("#about img", {
    opacity: 0,
    x: -50,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
    },
  });

  gsap.from("#about p", {
    opacity: 0,
    x: 50,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
    },
  });

  // Lottie animation for process steps
  const processLottie = Lottie.loadAnimation({
    container: document.querySelector("#process .lottie-icon"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "/animations/process-animation.json", // Replace with actual path
  });
}

// Animations for Gallery Page
function animateGalleryPage() {
  // Animate gallery images on scroll
  ScrollTrigger.batch("#gallery-container div", {
    start: "top 90%",
    onEnter: (batch) => {
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.8,
      });
    },
    onLeaveBack: (batch) => {
      gsap.to(batch, { opacity: 0, y: 50 });
    },
  });
}

// Animations for Blog Page
function animateBlogPage() {
  // Animate blog cards
  ScrollTrigger.batch("#blogs .grid div", {
    start: "top 90%",
    onEnter: (batch) => {
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.8,
      });
    },
    onLeaveBack: (batch) => {
      gsap.to(batch, { opacity: 0, y: 50 });
    },
  });

  // Lottie spinner for loading
  const spinnerLottie = Lottie.loadAnimation({
    container: document.querySelector("#loading-spinner"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "/animations/spinner.json", // Replace with actual path
  });
}

// Animations for Contact Page
function animateContactPage() {
  // Animate form fields
  gsap.from(
    ".js-contact-form input, .js-contact-form textarea, .js-contact-form button",
    {
      opacity: 0,
      y: 20,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".js-contact-form",
        start: "top 90%",
      },
    }
  );
}
