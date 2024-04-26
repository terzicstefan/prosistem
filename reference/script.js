document.addEventListener('DOMContentLoaded', function () {
    fetch('/data/data.json')
        .then(response => response.json())
        .then(data => {
            const swiperWrapper = document.querySelector('.mySwiper .swiper-wrapper');
            data.forEach(item => {
                // Create a slide
                const slide = document.createElement('div');
                slide.classList.add('swiper-slide');

                // Check if the item is featured
                if (item.featured) {
                    slide.classList.add('featured'); // Add the 'featured' class to the slide
                }

                // Create image container
                const imageContainer = document.createElement('div');
                imageContainer.classList.add('slide-images');
                item.images.forEach(imageUrl => { // Iterate through all images in the item
                    const image = document.createElement('img');
                    image.src = imageUrl;
                    image.style.width = '33.33%'; // Set width to cover 33% of the slide
                    imageContainer.appendChild(image);
                });
                slide.appendChild(imageContainer);

                // Create content container
                const contentContainer = document.createElement('div');
                contentContainer.classList.add('slide-content');
                const buttonContainer = document.createElement('div');
                buttonContainer.classList.add('button-container');

                // Create title
                const title = document.createElement('h2');
                title.textContent = item.title;

                // Create year
                const year = document.createElement('h4');
                year.textContent = `Year: ${item.year}`;

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
            var swiper = new Swiper(".mySwiper", {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                },
                spaceBetween: 30,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                    type: "bullets",
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
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
