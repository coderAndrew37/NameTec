import { testimonials, faqs, processSteps } from "../data/data.js";
import {
  generateTestimonials,
  generateFAQs,
  generateProcessSteps,
} from "./contentUtils.js";

document.addEventListener("DOMContentLoaded", () => {
  generateProcessSteps(processSteps, "#process .grid");
  generateTestimonials(testimonials, "#testimonials .grid");
  generateFAQs(faqs, "#faqs .space-y-4");
});
