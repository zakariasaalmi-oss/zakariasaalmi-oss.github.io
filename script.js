// ===== PARTICLES =====
const particlesContainer = document.getElementById('particles');
const colors = ['#1a8fff', '#ff7a00', '#ffffff', '#3ddc84', '#ffaa44'];

function createParticle() {
  const p = document.createElement('div');
  p.className = 'particle';
  const size = Math.random() * 6 + 2;
  const color = colors[Math.floor(Math.random() * colors.length)];
  const left = Math.random() * 100;
  const duration = Math.random() * 12 + 8;
  const delay = Math.random() * 5;
  p.style.cssText = `
    width:${size}px; height:${size}px;
    background:${color};
    left:${left}%;
    bottom:-20px;
    animation-duration:${duration}s;
    animation-delay:${delay}s;
  `;
  particlesContainer.appendChild(p);
  setTimeout(() => p.remove(), (duration + delay) * 1000);
}

setInterval(createParticle, 400);
for (let i = 0; i < 20; i++) createParticle();

// ===== SCROLL REVEAL =====
const revealEls = document.querySelectorAll('.feature-card, .section-title, .section-desc, .download h2, .download p');
revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ===== DOWNLOAD BUTTON =====
document.getElementById('downloadBtn').addEventListener('click', function(e) {
  e.preventDefault();
  // ضع رابط الـ APK هنا
  window.location.href = 'salmi.apk';
  
});

// ===== NAVBAR SCROLL =====
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  nav.style.background = window.scrollY > 50
    ? 'rgba(5,10,24,0.95)'
    : 'rgba(5,10,24,0.7)';
});
