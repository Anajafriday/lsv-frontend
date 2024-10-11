// Toggle dropdown visibility
function toggleDropdown(id) {
  const dropdown = document.getElementById(id);
  dropdown.classList.toggle("show"); // Toggle the show class
}

// Toggle mobile menu visibility
const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const closeMenu = document.getElementById("close-menu");

mobileMenuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden"); // Toggle the mobile menu visibility
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.add("hidden"); // Close the mobile menu
});
// Swipe functionality using JavaScript
const container = document.getElementById("card-container");

let isDown = false;
let startX;
let scrollLeft;

container.addEventListener("mousedown", (e) => {
  isDown = true;
  container.classList.add("active");
  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
});

container.addEventListener("mouseleave", () => {
  isDown = false;
  container.classList.remove("active");
});

container.addEventListener("mouseup", () => {
  isDown = false;
  container.classList.remove("active");
});

container.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - container.offsetLeft;
  const walk = (x - startX) * 3; // scroll-fast
  container.scrollLeft = scrollLeft - walk;
});

document
  .getElementById("scrollLink")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default behavior

    // Get the target element by its ID
    const target = document.getElementById("impact");

    // Get the position of the target element
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;

    // Set the scrolling duration (1000ms = 1 second)
    const duration = 1000;

    // Smooth scroll function
    const smoothScrollTo = (targetPosition, duration) => {
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      let startTime = null;

      const animationScroll = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);

        if (timeElapsed < duration) requestAnimationFrame(animationScroll);
      };

      // Easing function to smoothen the scroll effect
      const ease = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };

      requestAnimationFrame(animationScroll);
    };

    // Call the smooth scroll function
    smoothScrollTo(targetPosition, duration);
  });
