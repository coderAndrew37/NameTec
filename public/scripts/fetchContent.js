import {
  testimonials,
  gallery,
  services,
  faqs,
  blogs,
  processSteps,
} from "../data/data.js";
import {
  generateBlogs,
  generateTestimonials,
  generateFAQs,
  generateProcessSteps,
  generateServices,
} from "./contentUtils.js";

import { attachImageClickHandlers } from "./galleryModal.js";

document.addEventListener("DOMContentLoaded", () => {
  generateBlogs(blogs, "#blogs .grid");
  generateTestimonials(testimonials, "#testimonials .grid");
  generateFAQs(faqs, "#faqs .space-y-4");
  generateProcessSteps(processSteps, "#process .grid");
  generateServices(services, "#services .grid");
  generateHomepageGallery("#gallery .grid");
});

export function generateHomepageGallery(containerSelector) {
  const container = document.querySelector(containerSelector);

  if (container) {
    const galleryHTML = gallery
      .slice(0, 6) // Display the first 6 images
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

    container.innerHTML = galleryHTML;

    // Attach modal functionality to the homepage gallery images
    attachImageClickHandlers("#gallery .grid img");
  }
}

// Call this in fetchContent.js
