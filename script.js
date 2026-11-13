/* Portfolio interactions: mobile menu, contact links and footer year. */

// ============================================================
// Contact details. Edit them here; the page links read from this object.
// ============================================================
const CONFIG = {
  // International format, digits only: country code 55, area code 18, number 99699-9001.
  whatsappNumber: "5518996999001",
  whatsappMessage: "Hello Pedro, I found your portfolio and would like to talk about a website project.",
  githubProfileUrl: "https://github.com/PEDROHB-SS",
  // Text shown next to the buttons. Keep in sync with the values above.
  whatsappDisplay: "+55 18 99699-9001",
  githubDisplay: "github.com/PEDROHB-SS"
};

(function () {
  "use strict";

  // Mobile navigation
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");

  function setMenu(open) {
    if (!toggle || !nav) return;
    toggle.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("is-open", open);
  }

  if (toggle && nav) {
    toggle.addEventListener("click", () => setMenu(toggle.getAttribute("aria-expanded") !== "true"));
    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) setMenu(false);
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setMenu(false);
        toggle.focus();
      }
    });
  }

  // Contact links
  const digits = CONFIG.whatsappNumber.replace(/\D/g, "");
  document.querySelectorAll("[data-whatsapp]").forEach((link) => {
    link.href = "https://wa.me/" + digits + "?text=" + encodeURIComponent(CONFIG.whatsappMessage);
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });

  document.querySelectorAll("[data-github]").forEach((link) => {
    link.href = CONFIG.githubProfileUrl;
  });

  // Visible contact details (hidden until filled in)
  const details = document.querySelector(".contact-details");
  const waText = document.querySelector("[data-whatsapp-display]");
  const ghText = document.querySelector("[data-github-display]");
  if (details && waText && ghText) {
    waText.textContent = CONFIG.whatsappDisplay;
    ghText.textContent = CONFIG.githubDisplay;
    details.hidden = false;
  }

  // Footer year
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = String(new Date().getFullYear());
  });
})();
