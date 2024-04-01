//Slider code
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelector(".slides");
    const slideCount = slides.childElementCount;
    let currentIndex = 0;
  
    function goToSlide(index) {
      slides.style.transform = `translateX(-${index * 100}%)`;
      currentIndex = index;
      updateDots();
    }
  
    function updateDots() {
      const dots = document.querySelectorAll(".dot");
      dots.forEach((dot, index) => {
        if (index === currentIndex) {
          dot.classList.add("active");
        } else {
          dot.classList.remove("active");
        }
      });
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slideCount;
      goToSlide(currentIndex);
    }
  
    function prevSlide() {
      currentIndex = (currentIndex - 1 + slideCount) % slideCount;
      goToSlide(currentIndex);
    }
  
    document.querySelector(".prev").addEventListener("click", prevSlide);
    document.querySelector(".next").addEventListener("click", nextSlide);
  
    const dotsContainer = document.querySelector(".dots");
    for (let i = 0; i < slideCount; i++) {
      const dot = document.createElement("span");
      dot.classList.add("dot");
      dot.addEventListener("click", () => {
        goToSlide(i);
      });
      dotsContainer.appendChild(dot);
    }
  
    updateDots();
  });
  


  //Mobile menu code
  function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    
    // Toggle the 'show' class on the mobile menu
    mobileMenu.classList.toggle('show');
    
    // Toggle the 'rotate' class to trigger animation
    menuIcon.classList.toggle('rotate');
    
    // Toggle between hamburger and X icons using Font Awesome classes
    if (menuIcon.classList.contains('fa-bars')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-times');
    } else {
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
    }
}


  