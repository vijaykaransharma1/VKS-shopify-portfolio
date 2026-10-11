/* ================================================================
   Premium Glassmorphism Background (Pure Canvas 2D)
   100% Crash-Free, High Performance
   ================================================================ */

(function () {
  const canvas = document.createElement("canvas");
  canvas.id = "premium-bg-canvas";
  canvas.style.position = "fixed";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.width = "100vw";
  canvas.style.height = "100vh";
  canvas.style.zIndex = "-2";
  canvas.style.pointerEvents = "none";
  canvas.style.filter = "blur(80px) saturate(150%)";
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");

  let w, h;
  function resize() {
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
  }
  window.addEventListener("resize", resize);
  resize();

  // Create 4 large slow moving orbs
  const orbs = [
    { x: w * 0.2, y: h * 0.3, vx: 0.5, vy: 0.3, r: Math.max(w, h) * 0.3, color: "rgba(6, 182, 212, 0.5)" }, // Cyan
    { x: w * 0.8, y: h * 0.7, vx: -0.4, vy: -0.6, r: Math.max(w, h) * 0.35, color: "rgba(91, 33, 182, 0.5)" }, // Purple
    { x: w * 0.5, y: h * 0.5, vx: 0.2, vy: -0.2, r: Math.max(w, h) * 0.4, color: "rgba(0, 128, 96, 0.4)" }, // Shopify Green
    { x: w * 0.7, y: h * 0.2, vx: -0.3, vy: 0.4, r: Math.max(w, h) * 0.25, color: "rgba(30, 58, 138, 0.5)" } // Deep Blue
  ];

  let mouseX = w / 2;
  let mouseY = h / 2;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animate() {
    requestAnimationFrame(animate);

    // 1. Draw solid dark background to ensure it is always dark theme
    ctx.fillStyle = "#0a0a12"; // very dark slate
    ctx.fillRect(0, 0, w, h);

    // 2. Update and draw orbs
    for (let i = 0; i < orbs.length; i++) {
      let o = orbs[i];
      
      // Slow drift
      o.x += o.vx;
      o.y += o.vy;

      // Bounce off walls (with huge padding since they are large)
      if (o.x < -o.r) o.vx *= -1;
      if (o.x > w + o.r) o.vx *= -1;
      if (o.y < -o.r) o.vy *= -1;
      if (o.y > h + o.r) o.vy *= -1;

      // Slight attraction to mouse for interactivity (very weak)
      o.x += (mouseX - o.x) * 0.002;
      o.y += (mouseY - o.y) * 0.002;

      // Draw orb
      const grad = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r);
      grad.addColorStop(0, o.color);
      grad.addColorStop(1, "rgba(0,0,0,0)");
      
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  animate();
})();
