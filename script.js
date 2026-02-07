/* SIDE NAV */
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

/* CLOSE MENU ON LINK CLICK */
document.querySelectorAll("#side-nav a").forEach(link => {
  link.addEventListener("click", closeMenu);
});

/* SLIDESHOW */
const slides = document.querySelectorAll(".slide");
const slideshow = document.getElementById("slideshow");
const venueImage = document.getElementById("venue-image");

let slideIndex = 0;
let slideshowRunning = true;
let timerId;

function startSlideshow() {
  venueImage.style.display = "none";
  slideshow.style.display = "flex";

  slides.forEach(s => s.classList.remove("active"));
  slideIndex = 0;
  slides[0].classList.add("active");

  timerId = setInterval(() => {
    slides[slideIndex].classList.remove("active");
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add("active");
  }, 3500);

  slideshowRunning = true;
}

function showVenueImage() {
  clearInterval(timerId);
  slideshow.style.display = "none";
  venueImage.style.display = "block";
  slideshowRunning = false;
}

startSlideshow();

/* SCROLL SWITCH */
const venueSection = document.getElementById("venue");

window.addEventListener("scroll", () => {
  const rect = venueSection.getBoundingClientRect();
  const inVenue = rect.top < innerHeight / 2 && rect.bottom > innerHeight / 2;

  if (inVenue && slideshowRunning) showVenueImage();
  if (!inVenue && !slideshowRunning) startSlideshow();
});

/* COUNTDOWN */
const targetDate = new Date("March 8, 2026").getTime();
const timer = document.getElementById("timer");

setInterval(() => {
  const days = Math.floor((targetDate - Date.now()) / (1000 * 60 * 60 * 24));
  timer.textContent = `${days} Days to Go`;
}, 1000);

/* AUDIO */
const overlay = document.getElementById("welcome-overlay");
const music = document.getElementById("bg-music");

overlay.onclick = () => {
  music.volume = 0.4;
  music.play();
  overlay.style.display = "none";
  menuBtn.disabled = false;
};
