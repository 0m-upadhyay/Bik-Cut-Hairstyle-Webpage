// ============ WHATSAPP CONFIG ============
// Replace with the demo number, international format, digits only
// (no +, no spaces, no dashes). Example: "919876543210"
const WHATSAPP_NUMBER = "917003161456";

// ============ MOBILE NAV TOGGLE ============
(function () {
  const toggleBtn = document.getElementById('nav-toggle');
  const panel = document.getElementById('navbar-panel');

  toggleBtn.addEventListener('click', function () {
    const isOpen = panel.classList.toggle('is-open');
    toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close the mobile panel after tapping a link
  panel.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      panel.classList.remove('is-open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });
})();

// ============ WHATSAPP FLOAT BUTTON ============
(function () {
  const floatBtn = document.querySelector('.whatsapp-float');
  if (!floatBtn) return;

  const message = "Hi Bik Cut Hairstyle, I'd like to know more about your services.";
  floatBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  floatBtn.target = '_blank';
  floatBtn.rel = 'noopener';
})();

// ============ BOOKING FORM -> WHATSAPP ============
(function () {
  const form = document.querySelector('.booking__form');
  if (!form) return;

  const serviceLabels = {
    'haircut': 'Haircut',
    'beard': 'Beard Styling',
    'haircut-beard': 'Haircut + Beard',
    'hair-spa': 'Hair Spa',
    'straightening': 'Hair Straightening',
    'facial': 'Facial'
  };

  function formatDate(value) {
    if (!value) return '';
    const [year, month, day] = value.split('-');
    return `${day}/${month}/${year}`;
  }

  function formatTime(value) {
    if (!value) return '';
    const [hourStr, minute] = value.split(':');
    let hour = parseInt(hourStr, 10);
    const period = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12;
    return `${hour}:${minute} ${period}`;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = form.querySelector('#booking-name').value.trim();
    const phone = form.querySelector('#booking-phone').value.trim();
    const service = form.querySelector('#booking-service').value;
    const date = form.querySelector('#booking-date').value;
    const time = form.querySelector('#booking-time').value;

    const serviceLabel = serviceLabels[service] || service;

    const message =
      `Hi Bik Cut Hairstyle, I'd like to book an appointment.\n\n` +
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Service: ${serviceLabel}\n` +
      `Date: ${formatDate(date)}\n` +
      `Time: ${formatTime(time)}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener');
  });
})();

// ============ ANIMATIONS ============
// Hero entrance is handled in CSS for now. Next pass: GSAP for the
// hero sequence, scroll-based reveals, and the hero tilt/parallax,
// replacing the plain CSS keyframes above where it makes sense.