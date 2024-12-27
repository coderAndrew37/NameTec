import {
  testimonials,
  projects,
  services,
  faqs,
  blogs,
  processSteps,
} from "../data/data.js";
import {
  generateBlogs,
  generateTestimonials,
  generateProjects,
  generateFAQs,
  generateProcessSteps,
  generateServices,
} from "./contentUtils.js";

document.addEventListener("DOMContentLoaded", () => {
  generateBlogs(blogs, "#blogs .grid");
  generateTestimonials(testimonials, "#testimonials .grid");
  generateProjects(projects, "#projects .grid");
  generateFAQs(faqs, "#faqs .space-y-4");
  generateProcessSteps(processSteps, "#process .grid");
  generateServices(services, "#services .grid");
});
