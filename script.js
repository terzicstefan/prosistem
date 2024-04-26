//Slider code
document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelector(".slides");
    const slideCount = slides.childElementCount;
    let currentIndex = 0;
    document.querySelector(".slide").classList.add("active-slide");

    function goToSlide(index) {
      const slides = document.querySelectorAll(".slide");
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.classList.add("active-slide");
        } else {
          slide.classList.remove("active-slide");
        }
      });
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
  
    document.querySelector(".prev-mobile").addEventListener("click", prevSlide);
    document.querySelector(".next-mobile").addEventListener("click", nextSlide);
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

/**Slider */

document.addEventListener('DOMContentLoaded', function () {
  fetch('/data/data.json')
    .then(response => response.json())
    .then(data => {
      const swiperWrapper = document.querySelector('.mainSwiper .swiper-wrapper');
      // Iterate through the first 5 items in the data array
      data.slice(0, 5).forEach(item => {
        // Create a slide
        const slide = document.createElement('div');
        slide.classList.add('swiper-slide');

        // Create image container
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('slide-images');
        for (let i = 0; i < 3; i++) {
          if (item.images[i]) { // Check if image exists
            const image = document.createElement('img');
            image.src = item.images[i];
            image.style.width = '33.33%'; // Set width to cover 33% of the slide
            imageContainer.appendChild(image);
          }
        }
        slide.appendChild(imageContainer);

        // Create content container
        const contentContainer = document.createElement('div');
        contentContainer.classList.add('main-slide-content');
        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('main-button-container');

        // Create title
        const title = document.createElement('h2');
        title.textContent = item.title;

        // Create year
        const year = document.createElement('h4');
        year.textContent = ` ${item.year}`;

        // Create description
        const description = document.createElement('p');
        description.textContent = item.description;

        // Create button
        const button = document.createElement('a');
        button.href = item.learnMoreUrl;
        button.textContent = 'Saznaj više';

        // Create arrow in button container
        const icon = document.createElement('img');
        icon.src = '/images/arrow-toright.png';

        // Append elements to the content container
        contentContainer.appendChild(title);
        contentContainer.appendChild(year);
        contentContainer.appendChild(description);
        contentContainer.appendChild(button);
        buttonContainer.appendChild(button);
        buttonContainer.appendChild(icon);
        // Append the content container to the slide
        slide.appendChild(contentContainer);

        //button container append
        slide.appendChild(buttonContainer);
        // Append the slide to the swiper wrapper
        swiperWrapper.appendChild(slide);
      });

      // Initialize Swiper
      var swiper = new Swiper(".mainSwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 1,
          slideShadows: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
        loop: true,
        initialSlide: 2,
      });
      

      // Check if the screen size is mobile and update swiper options
      function updateSwiper() {
        if (window.innerWidth <= 640) {
          swiper.params.slidesPerView = 1;
          swiper.update(); // Update swiper
        } else {
          swiper.params.slidesPerView = 3;
          swiper.update(); // Update swiper
        }
      }

      // Call updateSwiper initially and whenever the window is resized
      updateSwiper();
      window.addEventListener('resize', updateSwiper);
    });
});










//partners loop 
var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);






  