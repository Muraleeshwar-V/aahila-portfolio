// Scroll reveal
const sections = document.querySelectorAll('.flow');

window.addEventListener('scroll', () => {
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.classList.add('visible');
    }
  });
});

// Animated background particles
const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;

let particles = [];

for (let i = 0; i < 120; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1,
    dx: Math.random() * 0.5,
    dy: Math.random() * 0.5
  });
}

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = "#38bdf8";

  particles.forEach(p => {
    p.x += p.dx;
    p.y += p.dy;

    if (p.x > canvas.width || p.y > canvas.height) {
      p.x = 0;
      p.y = Math.random() * canvas.height;
    }

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
  });

  requestAnimationFrame(animate);
}

animate();

window.onresize = () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
};
