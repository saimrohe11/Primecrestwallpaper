// Header Animation
gsap.from("header", {
  duration: 1,
  y: -50,
  opacity: 0,
  ease: "power2.out",
});

// Wallpaper Grid Animation
gsap.from(".wallpaper", {
  duration: 0.8,
  scale: 0.8,
  opacity: 0,
  stagger: 0.2,
  ease: "power2.out",
});

// Category Grid Animation
gsap.from(".category", {
  duration: 1,
  y: 50,
  opacity: 0,
  stagger: 0.3,
  ease: "back.out(1.7)",
});

// Sparkle Trail Effect on Scroll
document.addEventListener("mousemove", (e) => {
  const sparkle = document.createElement("div");
  sparkle.classList.add("sparkle");
  document.body.appendChild(sparkle);

  gsap.to(sparkle, {
    x: e.clientX,
    y: e.clientY,
    opacity: 1,
    scale: 1,
    duration: 0.5,
    ease: "power1.out",
    onComplete: () => sparkle.remove(),
  });
});

// Wallpaper Click Animation
document.querySelectorAll(".wallpaper").forEach((wallpaper) => {
  wallpaper.addEventListener("click", () => {
    gsap.to(wallpaper, {
      scale: 1.2,
      duration: 0.3,
      yoyo: true,
      repeat: 1,
    });

    // Download Confirmation Popup
    const popup = document.createElement("div");
    popup.classList.add("download-popup");
    popup.textContent = "Download Started!";
    document.body.appendChild(popup);

    gsap.to(popup, {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: "power2.out",
    });

    setTimeout(() => {
      gsap.to(popup, {
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        onComplete: () => popup.remove(),
      });
    }, 2000);

    // Simulate Wallpaper Download
    const link = document.createElement("a");
    link.href = wallpaper.src;
    link.download = "wallpaper.jpg";
    link.click();
  });
});