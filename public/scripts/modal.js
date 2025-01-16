// Function to open the modal
const openModal = (serviceName, whatsappMessage) => {
  const modal = document.getElementById("whatsappModal");
  const modalServiceName = document.getElementById("modalServiceName");
  const confirmBooking = document.getElementById("confirmBooking");

  if (!modal || !modalServiceName || !confirmBooking) {
    console.error("Modal elements not found!");
    return;
  }

  // Set the modal text and WhatsApp URL
  modalServiceName.textContent = serviceName || "General Inquiry";
  const whatsappURL = `https://wa.me/254710447149?text=${encodeURIComponent(
    whatsappMessage || `Hello, I would like to book the ${serviceName} service.`
  )}`;
  confirmBooking.href = whatsappURL;

  // Show the modal
  modal.classList.remove("hidden");
};

// Add click listeners for 'Book Now' buttons
document.addEventListener("DOMContentLoaded", () => {
  // Handle floating WhatsApp button
  const floatingWhatsAppButton = document.getElementById("floatingWhatsApp");
  if (floatingWhatsAppButton) {
    floatingWhatsAppButton.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default link behavior
      const message =
        floatingWhatsAppButton.getAttribute("data-whatsapp") ||
        "Hello, I would like to discuss a project with you.";
      const whatsappLink = `https://wa.me/254710447149?text=${encodeURIComponent(
        message
      )}`;
      window.open(whatsappLink, "_blank"); // Open in a new tab
    });
  }

  // Add click listeners for 'Book Now' buttons
  document.querySelectorAll(".open-modal").forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const serviceName = button.getAttribute("data-service");
      const whatsappMessage = button.getAttribute("data-whatsapp");
      openModal(serviceName, whatsappMessage);
    });
  });

  // Add click listener for 'OK' button
  const confirmBooking = document.getElementById("confirmBooking");
  if (confirmBooking) {
    confirmBooking.addEventListener("click", (e) => {
      e.preventDefault();
      const whatsappURL = e.target.href;
      if (whatsappURL) {
        window.open(whatsappURL, "_blank");
      }
      document.getElementById("whatsappModal").classList.add("hidden");
    });
  }

  // Add click listener for 'Cancel' button
  const cancelModal = document.getElementById("cancelModal");
  if (cancelModal) {
    cancelModal.addEventListener("click", () => {
      document.getElementById("whatsappModal").classList.add("hidden");
    });
  }

  // Close modal on outside click
  const whatsappModal = document.getElementById("whatsappModal");
  if (whatsappModal) {
    whatsappModal.addEventListener("click", (e) => {
      if (e.target === whatsappModal) {
        whatsappModal.classList.add("hidden");
      }
    });
  }

  // Close modal on 'Escape' key press
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.getElementById("whatsappModal").classList.add("hidden");
    }
  });
});
