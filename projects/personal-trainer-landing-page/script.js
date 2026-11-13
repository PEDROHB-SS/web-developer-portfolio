/*
 * CONFIG
 * whatsappNumber: international format, digits only (country code 55, area code 18, number 99699-9001).
 *   In this demo it is the developer's number, so the WhatsApp buttons start a chat with the developer.
 *   For a real client, replace it with the trainer's own number.
 * message: the pre-filled text the visitor sees in WhatsApp.
 */
const CONFIG = {
  whatsappNumber: "5518996999001",
  message: "Hello Pedro, I am looking at the personal trainer demo and would like to talk about a website project like this one."
};

(function () {
  "use strict";

  /* ---------- WhatsApp links ---------- */
  const waLink = "https://wa.me/" + CONFIG.whatsappNumber.replace(/\D/g, "") + "?text=" + encodeURIComponent(CONFIG.message);

  document.querySelectorAll("[data-whatsapp]").forEach(function (el) {
    el.href = waLink;
    el.target = "_blank";
    el.rel = "noopener noreferrer";
  });

  /* ---------- Mobile menu ---------- */
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");

  function setMenu(open) {
    toggle.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("is-open", open);
  }
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      setMenu(toggle.getAttribute("aria-expanded") !== "true");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setMenu(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setMenu(false);
        toggle.focus();
      }
    });
    document.addEventListener("click", function (e) {
      if (toggle.getAttribute("aria-expanded") === "true" && !e.target.closest(".site-header")) {
        setMenu(false);
      }
    });
    window.matchMedia("(min-width: 900px)").addEventListener("change", function () {
      setMenu(false);
    });
  }

  /* ---------- Reveal on scroll ---------- */
  const reveals = document.querySelectorAll(".reveal");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if ("IntersectionObserver" in window && !reduce) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- Lightbox ---------- */
  const dialog = document.getElementById("lightbox");
  const items = Array.prototype.slice.call(document.querySelectorAll(".g-item"));
  if (!dialog || !items.length || typeof dialog.showModal !== "function") return;

  const imgEl = document.getElementById("lightbox-img");
  const capEl = document.getElementById("lightbox-caption");
  let index = 0;
  let opener = null;

  function show(i) {
    index = (i + items.length) % items.length;
    const btn = items[index];
    imgEl.src = btn.dataset.full;
    imgEl.alt = btn.querySelector("img").alt;
    capEl.textContent = btn.dataset.caption || "";
  }
  function open(i) {
    opener = items[i];
    show(i);
    dialog.showModal();
  }
  function close() {
    dialog.close();
  }

  items.forEach(function (btn, i) {
    btn.setAttribute("aria-haspopup", "dialog");
    btn.addEventListener("click", function () { open(i); });
  });
  document.getElementById("lb-prev").addEventListener("click", function () { show(index - 1); });
  document.getElementById("lb-next").addEventListener("click", function () { show(index + 1); });
  document.getElementById("lb-close").addEventListener("click", close);

  dialog.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") { show(index - 1); }
    else if (e.key === "ArrowRight") { show(index + 1); }
  });
  // Click on the backdrop closes the dialog.
  dialog.addEventListener("click", function (e) {
    if (e.target === dialog) close();
  });
  // Escape (native) and every other close path return focus to the opener.
  dialog.addEventListener("close", function () {
    if (opener) opener.focus();
  });
})();
