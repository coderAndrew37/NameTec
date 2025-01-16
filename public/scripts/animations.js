document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;

  // Hero Section Animation
  gsap.from("#hero h1", { opacity: 0, y: 50, duration: 1, ease: "power2.out" });
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

  // Animate all sections on scroll
  document.querySelectorAll("section").forEach((section) => {
    gsap.from(section, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: { trigger: section, start: "top 80%" },
    });
  });

  // Specific animations for the homepage
  if (page === "homepage") {
    ScrollTrigger.batch("#why-us .grid div", {
      start: "top 90%",
      onEnter: (batch) => {
        gsap.to(batch, { opacity: 1, y: 0, stagger: 0.2, duration: 1 });
      },
      onLeaveBack: (batch) => {
        gsap.to(batch, { opacity: 0, y: 50 });
      },
    });
  }
});
