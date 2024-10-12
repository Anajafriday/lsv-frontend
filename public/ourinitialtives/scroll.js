const scrollButton = document.getElementById("scrollBtn");
const carouselTrack = document.getElementById("carouselTrack");

// Function to determine the number of visible cards based on screen width
function getVisibleCards() {
  if (window.innerWidth >= 1024) {
    // Large screens (lg)
    return 3;
  } else if (window.innerWidth >= 768) {
    // Medium screens (md)
    return 2;
  } else {
    // Small screens (sm)
    return 1;
  }
}

const totalCards = document.querySelectorAll(".card-image-container").length;
let visibleCards = getVisibleCards(); // Get initial visible cards
const cardWidth = document.querySelector(".card-image-container").offsetWidth;
let maxScroll = (totalCards - visibleCards) * cardWidth; // Max scroll value
let scrollPosition = 0;

function updateMaxScroll() {
  visibleCards = getVisibleCards(); // Update visible cards
  maxScroll = (totalCards - visibleCards) * cardWidth; // Recalculate max scroll
}

function scrollOn() {
  // Scroll forward by the width of one card
  scrollPosition += cardWidth;

  // If we've reached the end, reset to the beginning
  if (scrollPosition > maxScroll) {
    scrollPosition = 0; // Go back to the first card
  }

  // Apply smooth scroll transition
  carouselTrack.style.transition = "transform 0.5s ease-in-out";
  carouselTrack.style.transform = `translateX(-${scrollPosition}px)`;
}

scrollButton.addEventListener("click", scrollOn);
document.addEventListener("keyup", (e) => {
  // Scroll if the arrow key is pressed
  if (e.key === "ArrowRight") {
    scrollOn();
  }
});

// Update max scroll on window resize
window.addEventListener("resize", updateMaxScroll);
