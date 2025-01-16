document.addEventListener("DOMContentLoaded", () => {
  const reviewModal = document.getElementById("reviewModal");
  const leaveReviewBtn = document.getElementById("leaveReviewBtn");
  const closeReviewModal = document.getElementById("closeReviewModal");
  const reviewForm = document.getElementById("reviewForm");
  const testimonialsContainer = document.querySelector("#testimonials .grid");

  // Show the review modal
  leaveReviewBtn.addEventListener("click", () => {
    reviewModal.classList.remove("hidden");
  });

  // Close the review modal
  closeReviewModal.addEventListener("click", () => {
    reviewModal.classList.add("hidden");
  });

  // Submit the review form
  reviewForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("reviewName").value;
    const message = document.getElementById("reviewMessage").value;

    if (!name || !message) return alert("Please fill out all fields!");

    // Add the new testimonial
    const newTestimonialHTML = `
      <div class="p-6 rounded-lg shadow-lg bg-idcAccent hover:shadow-xl transition transform hover:scale-105">
        <img
          src="/images/default-user.jpg"
          alt="${name}"
          class="w-16 h-16 rounded-full mx-auto mb-4"
        />
        <p class="text-idcText">"${message}"</p>
        <p class="text-idcHighlight font-bold mt-4">– ${name}</p>
      </div>
    `;
    testimonialsContainer.innerHTML += newTestimonialHTML;

    // Close modal and reset the form
    reviewModal.classList.add("hidden");
    reviewForm.reset();
  });
});
