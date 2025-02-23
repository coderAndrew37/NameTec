// contentUtils.js
export function generateBlogs(blogs, containerSelector) {
  const container = document.querySelector(containerSelector);
  if (container) {
    blogs.forEach((blog) => {
      const blogHTML = `
        <div class="bg-idcAccent p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105">
          <img
            src="${blog.image}"
            alt="${blog.title}"
            class="rounded-lg mb-4 w-full h-48 object-cover"
          />
          <h3 class="text-2xl font-bold text-idcPrimary mb-2">${blog.title}</h3>
          <p class="text-idcText mb-4">${blog.description}</p>
          <p class="text-sm text-idcText mb-4">${new Date(
            blog.date
          ).toDateString()}</p>
          <a
            href="/blog?id=${blog.id}"
            class="px-4 py-2 bg-idcHighlight text-white rounded-lg font-bold hover:bg-opacity-90"
          >
            Read More
          </a>
        </div>
      `;
      container.innerHTML += blogHTML;
    });
  }
}

export function generateTestimonials(testimonials, containerSelector) {
  const container = document.querySelector(containerSelector);

  if (container) {
    testimonials.forEach((testimonial) => {
      const testimonialHTML = `
        <div class="p-6 rounded-lg shadow-lg bg-idcAccent hover:shadow-xl transition transform hover:scale-105">
          <img
            src="${testimonial.image || "/images/default-user.jpg"}"
            alt="${testimonial.name}"
            class="w-16 h-16 rounded-full mx-auto mb-4"
          />
          <p class="text-idcText">"${testimonial.message}"</p>
          <p class="text-idcHighlight font-bold mt-4">– ${testimonial.name}</p>
        </div>
      `;
      container.innerHTML += testimonialHTML;
    });
  }
}

/*
export function generateProjects(projects, containerSelector) {
  const container = document.querySelector(containerSelector);
  if (container) {
    projects.forEach((project) => {
      const projectHTML = `
        <div class="bg-idcAccent p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105">
          <img
            src="${project.thumbnail}"
            alt="${project.title}"
            class="rounded-lg mb-4"
          />
          <h3 class="text-xl font-bold text-idcPrimary mb-2">${project.title}</h3>
          <p class="text-idcText mb-4">${project.desc}</p>
          <a
            href="/portfolio.html?id=${project.id}"
            class="px-4 py-2 bg-idcHighlight text-white rounded-lg font-bold hover:bg-opacity-90"
          >
            View Details
          </a>
        </div>
      `;
      container.innerHTML += projectHTML;
    });
  }
}
*/

export function generateFAQs(faqs, containerSelector) {
  const container = document.querySelector(containerSelector);
  if (container) {
    faqs.forEach((faq, index) => {
      const faqHTML = `
        <div class="border border-gray-300 rounded-lg">
          <button
            class="w-full text-left px-4 py-3 flex justify-between items-center font-bold text-idcPrimary"
            data-index="${index}"
          >
            <span>${faq.question}</span>
            <svg
              class="w-5 h-5 text-idcPrimary transform transition-transform duration-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
          <div
            class="hidden px-4 py-3 text-idcText transition-all duration-300"
            id="faq-answer-${index}"
          >
            ${faq.answer}
          </div>
        </div>
      `;
      container.innerHTML += faqHTML;
    });

    // Add toggle functionality
    const faqButtons = container.querySelectorAll("button");
    faqButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const index = button.getAttribute("data-index");
        const answer = document.getElementById(`faq-answer-${index}`);
        const icon = button.querySelector("svg");

        // Toggle visibility of the answer
        answer.classList.toggle("hidden");

        // Rotate the icon
        icon.classList.toggle("rotate-180");
      });
    });
  }
}

export function generateProcessSteps(processSteps, containerSelector) {
  const container = document.querySelector(containerSelector);
  if (container) {
    processSteps.forEach((step) => {
      const processHTML = `
        <div class="p-6 rounded-lg shadow-lg bg-idcBackground hover:shadow-xl transition transform hover:scale-105">
          <i class="${step.icon} text-idcHighlight text-5xl mb-4"></i>
          <div class="text-idcHighlight text-4xl font-bold">${step.id}</div>
          <h3 class="text-xl font-semibold text-idcPrimary mt-2">${step.title}</h3>
          <p class="text-idcText">${step.desc}</p>
        </div>
      `;
      container.innerHTML += processHTML;
    });
  }
}

export function generateServices(services, containerSelector) {
  const container = document.querySelector(containerSelector);
  if (container) {
    services.forEach((service) => {
      const serviceHTML = `
        <div class="bg-idcAccent p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105">
          <img
            src="${service.image}"
            alt="${service.name}"
            class="rounded-lg mb-4 w-full h-48 object-cover"
          />
          <h3 class="text-xl font-bold text-idcPrimary mb-2">${service.name}</h3>
          <p class="text-idcText mb-4">${service.desc}</p>
          <button
            class="open-modal px-4 py-2 bg-idcHighlight text-white rounded-lg font-bold hover:bg-opacity-90"
            data-service="${service.name}"
            data-whatsapp="I am interested in booking the ${service.name} service."
          >
            Get a Quote
          </button>
        </div>
      `;
      container.innerHTML += serviceHTML;
    });
  }
}
