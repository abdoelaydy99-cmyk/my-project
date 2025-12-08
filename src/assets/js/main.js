document.addEventListener("DOMContentLoaded", () => {
  // 🎨 خلفية Vanta.js
VANTA.WAVES({
  el: "#vanta-bg",
  mouseControls: true,
  touchControls: true,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x0a0a0a,          // أسود ناعم (مش أزرق)
  shininess: 30.00,         // لمعان خفيف
  waveHeight: 20.00,        // ارتفاع الموجة
  waveSpeed: 1.00,          // سرعة الموجة
  zoom: 0.9,                // تقليل التكبير يعطي عمق بسيط
  lightColor: 0x2a2a2a,     // رمادي فاتح خفيف لتباين بسيط
  waveColor: 0x111111       // موجات أغمق شوي
});


  // ✨ GSAP SplitText Animation
  gsap.registerPlugin(SplitText);

  const title = new SplitText("#hero-name", { type: "chars" });
  gsap.from(title.chars, {
    duration: 1,
    opacity: 0,
    y: 40,
    stagger: 0.05,
    ease: "back.out(1.7)",
  });
});
 
