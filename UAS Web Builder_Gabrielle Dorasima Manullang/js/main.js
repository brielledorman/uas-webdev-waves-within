/* =====================================================
   WAVES WITHIN — MAIN.JS
   Catatan:
   - JS ini dibuat sederhana & mudah dijelaskan
   - Fokus ke animasi ringan & interaksi dasar
===================================================== */

// ================= HERO ANIMATION =================
// INI: animasi masuk untuk hero text supaya website terasa hidup

window.addEventListener('load', () => {
  const heroTitle = document.querySelector('.hero-title');
  const heroTagline = document.querySelector('.hero-tagline');
  const heroDesc = document.querySelector('.hero-desc');

  heroTitle.style.opacity = 0;
  heroTagline.style.opacity = 0;
  heroDesc.style.opacity = 0;

  setTimeout(() => {
    heroTitle.style.transition = '0.6s ease';
    heroTitle.style.opacity = 1;
    heroTitle.style.transform = 'translateY(0)';
  }, 200);

  setTimeout(() => {
    heroTagline.style.transition = '0.6s ease';
    heroTagline.style.opacity = 1;
  }, 400);

  setTimeout(() => {
    heroDesc.style.transition = '0.6s ease';
    heroDesc.style.opacity = 1;
  }, 600);
});

// ================= SCROLL REVEAL =================
// INI: efek muncul saat section masuk viewport

const revealElements = document.querySelectorAll('.section-title, .exhibit-card, .collab-logo, .highlight');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.2 });

revealElements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(24px)';
  el.style.transition = '0.6s ease';
  observer.observe(el);
});

// ================= NAV SMOOTH SCROLL =================
// INI: bikin perpindahan antar section lebih halus

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ================= BOOKING MODAL INTERACTIONS =================
// Open/close booking modal and handle form submit
(() => {
  const modal = document.getElementById('booking-modal');
  const form = document.getElementById('booking-form');
  const successMsg = document.getElementById('booking-success');

  function openModal(){
    if(!modal) return;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden','false');
  }

  function closeModal(){
    if(!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden','true');
  }

  document.querySelectorAll('.open-booking').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  // close buttons / overlay
  document.querySelectorAll('[data-close]').forEach(el => el.addEventListener('click', closeModal));

  // submit handler (dummy — replace with real endpoint as needed)
  if(form){
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // show success, clear form
      successMsg.style.display = 'block';
      form.reset();
      setTimeout(() => { closeModal(); successMsg.style.display = 'none'; }, 1600);
    });
  }

})();