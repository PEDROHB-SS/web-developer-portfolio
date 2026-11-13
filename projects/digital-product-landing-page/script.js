// Tidewell demo page: vanilla JavaScript, no dependencies.
(function () {
  'use strict';

  // Footer year
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Mobile navigation toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  function setNav(open) {
    toggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('open', open);
  }
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      setNav(toggle.getAttribute('aria-expanded') !== 'true');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setNav(false);
        toggle.focus();
      }
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setNav(false);
    });
  }

  // Interactive demo: a local progress ring. Nothing is stored or sent.
  var demo = document.getElementById('demo');
  if (demo) {
    var ring = demo.querySelector('[data-ring]');
    var fill = demo.querySelector('.ring-fill');
    var label = demo.querySelector('[data-ring-label]');
    var status = demo.querySelector('[data-demo-status]');
    var boxes = Array.prototype.slice.call(demo.querySelectorAll('input[data-priority]'));
    var allBoxes = demo.querySelectorAll('input[type="checkbox"]');
    var circumference = 2 * Math.PI * 52;
    var messages = [
      'Tick a priority when it is done. The ring keeps count.',
      'One down. Nice start.',
      'Two done. One to go.',
      'All three done. Day closed, and that is enough.'
    ];
    var update = function () {
      var done = boxes.filter(function (b) { return b.checked; }).length;
      var ratio = done / boxes.length;
      fill.style.strokeDashoffset = String(circumference * (1 - ratio));
      label.textContent = done + ' of ' + boxes.length;
      status.textContent = messages[done];
      ring.classList.toggle('complete', done === boxes.length);
    };
    boxes.forEach(function (b) { b.addEventListener('change', update); });
    var reset = demo.querySelector('[data-demo-reset]');
    if (reset) {
      reset.addEventListener('click', function () {
        allBoxes.forEach(function (b) { b.checked = false; });
        update();
      });
    }
    update();
  }

  // Pricing toggle: updates displayed prices only. No billing happens.
  var billing = document.querySelector('[data-billing]');
  if (billing) {
    billing.hidden = false; // Without JavaScript the monthly prices stay visible and the toggle is hidden.
    var buttons = billing.querySelectorAll('button');
    var setPeriod = function (period) {
      buttons.forEach(function (b) {
        b.setAttribute('aria-pressed', String(b.getAttribute('data-period') === period));
      });
      document.querySelectorAll('.amount[data-monthly]').forEach(function (el) {
        el.textContent = el.getAttribute('data-' + period);
      });
      document.querySelectorAll('[data-billed]').forEach(function (el) {
        el.textContent = el.getAttribute('data-' + period);
      });
    };
    buttons.forEach(function (b) {
      b.addEventListener('click', function () { setPeriod(b.getAttribute('data-period')); });
    });
  }

  // Demo dialog.
  // INTEGRATION POINT: in a real project, replace openDemoDialog() with your
  // signup form, waitlist API call, or redirect to a checkout provider.
  var dialog = document.getElementById('demo-dialog');
  function openDemoDialog() {
    if (dialog && typeof dialog.showModal === 'function') {
      dialog.showModal();
      return true;
    }
    return false;
  }
  document.querySelectorAll('[data-demo-cta]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      // If the dialog is unsupported, the link falls back to the footer notice.
      if (openDemoDialog()) e.preventDefault();
    });
  });
  if (dialog) {
    dialog.addEventListener('click', function (e) {
      if (e.target === dialog) dialog.close();
    });
  }
})();
