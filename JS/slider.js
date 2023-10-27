document.addEventListener('DOMContentLoaded', function() {
    var carousel = document.querySelector('.carousel');
    var slides = carousel.querySelectorAll('.carousel-item');
    var currentSlide = 0;

    var indicators = carousel.querySelectorAll('.carousel-indicators li');

    function showSlide(index) {
        for (var i = 0; i < slides.length; i++) {
            if (i === index) {
                slides[i].classList.add('active');
                indicators[i].classList.add('active');
            } else {
                slides[i].classList.remove('active');
                indicators[i].classList.remove('active');
            }
        }
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    var interval = setInterval(nextSlide, 2000);

    var prevButton = document.querySelector('.carousel-control-prev');
    var nextButton = document.querySelector('.carousel-control-next');

    prevButton.addEventListener('click', function() {
        clearInterval(interval); // Dừng tự động chuyển slide khi nhấn prev
        prevSlide();
    }); 

    nextButton.addEventListener('click', function() {
        clearInterval(interval); // Dừng tự động chuyển slide khi nhấn next
        nextSlide();
    });

    indicators.forEach(function(dot, index) {
        dot.addEventListener('click', function() {
            clearInterval(interval); // Dừng tự động chuyển slide khi nhấn dot
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
});
