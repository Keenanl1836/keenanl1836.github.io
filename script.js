// Simple image carousel functionality
const slide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
let counter = 0;

function updateCarousel() {
  slide.style.transform = `translateX(${-counter * 100}%)`;
}

nextBtn.onclick = () => {
  counter = (counter + 1) % images.length;
  updateCarousel();
};
prevBtn.onclick = () => {
  counter = (counter - 1 + images.length) % images.length;
  updateCarousel();
};

// Initialize position
updateCarousel();