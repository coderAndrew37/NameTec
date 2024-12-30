// Modal Elements
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModalButton = document.getElementById("closeModal");

// Function to Show Modal
export function showImageModal(imageSrc, imageAlt) {
  modalImage.src = imageSrc;
  modalImage.alt = imageAlt;
  modal.classList.remove("hidden");
  document.body.classList.add("overflow-hidden"); // Prevent page scrolling
}

// Function to Close Modal
function closeImageModal() {
  modal.classList.add("hidden");
  modalImage.src = ""; // Clear image source
  document.body.classList.remove("overflow-hidden"); // Restore page scrolling
}

// Add Click Handlers to Gallery Images
export function attachImageClickHandlers() {
  const galleryImages = document.querySelectorAll("#gallery .grid img");

  galleryImages.forEach((img) => {
    img.addEventListener("click", () => {
      showImageModal(img.src, img.alt);
    });
  });
}

// Close Modal on Button Click or Outside Click
closeModalButton.addEventListener("click", closeImageModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeImageModal(); // Close only if clicking outside the image
});

// Close Modal on Esc Key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeImageModal();
});

// Attach Handlers on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  attachImageClickHandlers();
});
