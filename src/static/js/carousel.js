const carouselContainer = document.querySelector('.carousel-container');
const carouselControls = document.querySelector('.carousel-controls');

// Add event listeners or other functionality here

window.addEventListener('scroll', () => {
  const mediumScreen = window.matchMedia('(min-width: 1024px)').matches;
  
  if (mediumScreen) {
    const offsetTop = 50; // Adjust this value as needed
    const scrollY = window.scrollY;
    
    if (scrollY > offsetTop) {
      carouselContainer.classList.add('fixed');
    } else {
      carouselContainer.classList.remove('fixed');
    }
  }
});








