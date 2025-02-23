import "./fetchContent.js";
import "./contact.js";
import "./modal.js";
import "./menuToggle.js";
import "./galleryModal.js";
import "./estimator.js";
import "./animations.js";
import "./geolocation.js";
import "./plan.js";
import "./reviews.js";

document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll effect
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});
