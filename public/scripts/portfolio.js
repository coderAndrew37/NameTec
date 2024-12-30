import { projects } from "../data/data.js";

document.addEventListener("DOMContentLoaded", () => {
  const portfolioGrid = document.getElementById("portfolioGrid");
  const imageModal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const closeModal = document.getElementById("closeModal");

  let zoomLevel = 1;

  // Preload images
  const preloadImages = () => {
    projects.forEach((project) => {
      const img = new Image();
      img.src = project.image;
    });
  };

  // Generate portfolio grid
  if (portfolioGrid) {
    projects.forEach((project) => {
      const imageElement = document.createElement("div");
      imageElement.classList.add(
        "rounded-lg",
        "overflow-hidden",
        "shadow-lg",
        "cursor-pointer"
      );
      imageElement.innerHTML = `
        <img
          src="${project.image}"
          alt="${project.title}"
          class="w-full h-48 object-cover hover:scale-105 transition-transform"
        />
      `;
      imageElement.addEventListener("click", () => {
        modalImage.src = project.image;
        zoomLevel = 1;
        modalImage.style.transform = `scale(${zoomLevel})`;
        imageModal.classList.remove("hidden");
      });
      portfolioGrid.appendChild(imageElement);
    });
  }

  // Close modal
  const closeImageModal = () => {
    imageModal.classList.add("hidden");
  };

  if (closeModal) {
    closeModal.addEventListener("click", closeImageModal);
  }

  // Close modal on outside click
  imageModal.addEventListener("click", (e) => {
    if (e.target === imageModal) {
      closeImageModal();
    }
  });

  // Close modal on Esc key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !imageModal.classList.contains("hidden")) {
      closeImageModal();
    }
  });

  // Zoom in and out
  document.addEventListener("keydown", (e) => {
    if (!imageModal.classList.contains("hidden")) {
      if (e.key === "+" || e.key === "=") {
        zoomLevel += 0.1;
        modalImage.style.transform = `scale(${zoomLevel})`;
      }
      if (e.key === "-" && zoomLevel > 1) {
        zoomLevel -= 0.1;
        modalImage.style.transform = `scale(${zoomLevel})`;
      }
    }
  });

  // Preload images on load
  preloadImages();
});
