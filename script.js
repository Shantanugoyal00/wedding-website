/* ===============================
   SIDE NAV
================================ */
const menuBtn = document.getElementById("menu-btn");
const sideNav = document.getElementById("side-nav");
const closeNav = document.getElementById("close-nav");
const navOverlay = document.getElementById("nav-overlay");

menuBtn.onclick = () => {
  sideNav.classList.add("open");
  navOverlay.style.display = "block";
};

function closeMenu() {
  sideNav.classList.remove("open");
  navOverlay.style.display = "none";
}

closeNav.onclick = closeMenu;
navOverlay.onclick = closeMenu;

document.querySelectorAll("#side-nav a").forEach(link => {
  link.addEventListener("click", closeMenu);
});


/* ===============================
   SLIDESHOW (5 IMAGES)
================================ */
const slides = document.querySelectorAll(".slide");
let slideIndex = 0;

setInterval(() => {
  slides[slideIndex].classList.remove("active");
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add("active");
}, 3500);


/* ===============================
   COUNTDOWN
================================ */
/* ===============================
   ROYAL COUNTDOWN (D:H:M:S)
================================ */
const targetDate = new Date("March 10, 2026 00:00:00").getTime();
const timer = document.getElementById("timer");

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    timer.textContent = "The Wedding Day Is Here 👑";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  timer.textContent =
    `${days} Days : ${hours} Hrs : ${minutes} Min : ${seconds} Sec Left`;
}

updateCountdown();
setInterval(updateCountdown, 1000);


/* ===============================
   CINEMATIC WELCOME OVERLAY
================================ */
const overlay = document.getElementById("welcome-overlay");
const enterBtn = document.getElementById("enter-btn");
const music = document.getElementById("bg-music");

// Safety: disable menu until user enters
menuBtn.disabled = true;

enterBtn.addEventListener("click", () => {

  music.volume = 0;
  music.play().catch(() => {});

  // 🎻 Soft fade-in
  let fadeInterval = setInterval(() => {
    if (music.volume < 0.4) {
      music.volume = Math.min(music.volume + 0.02, 0.4);
    } else {
      clearInterval(fadeInterval);
    }
  }, 100);
  // Fade out overlay smoothly
  overlay.classList.add("fade-out");

  setTimeout(() => {
    overlay.style.display = "none";
  }, 900);

  // Enable menu after entry
  menuBtn.disabled = false;
});
