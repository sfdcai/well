// main.js

// Simple smooth scroll for same-page links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");
    if (!targetId || targetId === "#") return;
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Fake contact form handler (no backend yet)
const form = document.getElementById("contact-form");
const statusEl = document.getElementById("contact-status");

if (form && statusEl) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    statusEl.textContent = "Thank you! This demo form does not send real emails yet.";
  });
}
