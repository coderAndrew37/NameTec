import { gallery } from "../data/data.js";
import { showImageModal } from "./galleryModal.js"; // Import only the modal function you need
import "./menuToggle.js";

let currentIndex = 0;
const itemsPerPage = 6;

// Load more gallery items
function loadMoreGalleryItems() {
  const container = document.getElementById("gallery-container");
  const spinner = document.getElementById("loading-spinner");

  if (currentIndex < gallery.length) {
    spinner.classList.remove("hidden");

    setTimeout(() => {
      const nextItems = gallery.slice(
        currentIndex,
        currentIndex + itemsPerPage
      );
      const galleryHTML = nextItems
        .map(
          (image) => `
          <div class="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 cursor-pointer">
            <img
              src="${image.src}"
              alt="${image.alt}"
              class="w-full h-48 object-cover"
            />
          </div>
        `
        )
        .join("");

      container.innerHTML += galleryHTML;
      currentIndex += itemsPerPage;
      spinner.classList.add("hidden");

      // Rebind click events for the new images
      bindImageClickEvents();
    }, 1000); // Simulated loading delay
  }
}

// Bind click events to gallery images
function bindImageClickEvents() {
  const galleryImages = document.querySelectorAll("#gallery-container img");

  galleryImages.forEach((img) => {
    img.addEventListener("click", () => {
      showImageModal(img.src, img.alt);
    });
  });
}

// Infinite Scroll Logic
function handleInfiniteScroll() {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
    currentIndex < gallery.length
  ) {
    loadMoreGalleryItems();
  }
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  loadMoreGalleryItems(); // Initial Load
  bindImageClickEvents(); // Initial Binding
  window.addEventListener("scroll", handleInfiniteScroll);
});
