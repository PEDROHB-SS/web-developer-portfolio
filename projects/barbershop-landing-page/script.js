/* Marlow & Finch Barbers - demo project script (vanilla JS, no dependencies) */

/* ==========================================================================
   CONFIG
   --------------------------------------------------------------------------
   whatsappNumber : WhatsApp number in international format, digits only
                    (country code 55, area code 18, number 99699-9001).
                    In this demo it is the developer's number, so every
                    "Book on WhatsApp" button starts a chat with the developer.
                    For a real client, replace it with the shop's own number.
   bookingMessage : the pre-filled message shown in WhatsApp.
   ========================================================================== */
const CONFIG = {
  whatsappNumber: "5518996999001",
  bookingMessage: "Hello Pedro, I am looking at the Marlow & Finch Barbers demo and would like to talk about a website project like this one."
};

/* ---------- WhatsApp links ---------- */
(function setupWhatsApp() {
  var digits = String(CONFIG.whatsappNumber).replace(/\D/g, "");
  var url = "https://wa.me/" + digits + "?text=" + encodeURIComponent(CONFIG.bookingMessage);
  document.querySelectorAll("[data-whatsapp]").forEach(function (el) {
    el.setAttribute("href", url);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
  });
})();

/* ---------- Mobile menu ---------- */
(function setupMenu() {
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.getElementById("site-nav");
  if (!toggle || !nav) return;

  function setOpen(open) {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  }

  toggle.addEventListener("click", function () {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  nav.addEventListener("click", function (e) {
    if (e.target.closest("a")) setOpen(false);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setOpen(false);
      toggle.focus();
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 860) setOpen(false);
  });
})();

/* ---------- Gallery lightbox (<dialog>) ---------- */
(function setupLightbox() {
  var dialog = document.getElementById("lightbox");
  if (!dialog) return;
  var img = document.getElementById("lightbox-img");
  var caption = document.getElementById("lightbox-caption");
  var closeBtn = document.getElementById("lb-close");
  var prevBtn = document.getElementById("lb-prev");
  var nextBtn = document.getElementById("lb-next");
  var buttons = Array.prototype.slice.call(document.querySelectorAll(".g-btn"));
  var index = 0;
  var opener = null;

  function show(i) {
    index = (i + buttons.length) % buttons.length;
    var b = buttons[index];
    var thumb = b.querySelector("img");
    img.src = b.getAttribute("data-full");
    img.alt = thumb ? thumb.alt : "";
    caption.textContent = b.getAttribute("data-caption") || "";
  }

  function open(i, trigger) {
    opener = trigger;
    show(i);
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
    closeBtn.focus();
  }

  function close() {
    if (typeof dialog.close === "function") dialog.close();
    else dialog.removeAttribute("open");
  }

  buttons.forEach(function (b, i) {
    b.setAttribute("aria-haspopup", "dialog");
    b.addEventListener("click", function () { open(i, b); });
  });

  closeBtn.addEventListener("click", close);
  prevBtn.addEventListener("click", function () { show(index - 1); });
  nextBtn.addEventListener("click", function () { show(index + 1); });

  /* Click on the backdrop closes the dialog */
  dialog.addEventListener("click", function (e) {
    if (e.target === dialog) close();
  });

  dialog.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") { show(index - 1); }
    else if (e.key === "ArrowRight") { show(index + 1); }
    else if (e.key === "Escape" && !dialog.showModal) { close(); }
  });

  /* Return focus to the thumbnail that opened the dialog */
  dialog.addEventListener("close", function () {
    if (opener) opener.focus();
  });
})();

/* ---------- Reveal on scroll (content is visible without JS) ---------- */
(function setupReveal() {
  var items = document.querySelectorAll(".reveal");
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!("IntersectionObserver" in window) || reduce) {
    items.forEach(function (el) { el.classList.add("is-visible"); });
    return;
  }
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
  items.forEach(function (el) { observer.observe(el); });
})();
