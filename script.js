// Handle scroll event for the bar color change
window.addEventListener("scroll", function () {
  const bar = document.getElementById("bar");
  if (window.scrollY > 50) {
    bar.classList.add("barColored");
    document.getElementById("logoArea").classList.add("logoAreaFontColor");
  } else {
    bar.classList.remove("barColored");
    document.getElementById("logoArea").classList.remove("logoAreaFontColor");
  }
});

// Select all anchor links in the menu
const menuLinks = document.querySelectorAll("#menu a");

// Function to handle smooth scrolling
const smoothScroll = (event) => {
  event.preventDefault(); // Prevent default anchor click behavior
  const targetId = event.currentTarget.getAttribute("href"); // Get the target section's ID
  const targetSection = document.querySelector(targetId); // Select the target section

  // Scroll to the target section smoothly
  targetSection.scrollIntoView({
    behavior: "smooth", // Enable smooth scrolling
    block: "start", // Scroll to the start of the section
  });
};

// Add click event listeners to each menu link
menuLinks.forEach((link) => {
  link.addEventListener("click", smoothScroll);
});

// -----------slide--------------
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".each-slide");
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  // Initially show the first slide
  showSlide(currentIndex);

  // Automatically change slide every 3 seconds
  const slideInterval = setInterval(nextSlide, 3000);

  // Add event listeners for the arrow buttons
  document.getElementById("nextSlide").addEventListener("click", function () {
    clearInterval(slideInterval); // Clear the auto-slide interval
    nextSlide();
  });

  document.getElementById("prevSlide").addEventListener("click", function () {
    clearInterval(slideInterval); // Clear the auto-slide interval
    prevSlide();
  });
});
