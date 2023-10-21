function activateSlider() {
    var myCarousel = document.getElementById('carouselExampleControls');
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 2000 // Thời gian chuyển đổi giữa các slide (đơn vị là mili giây)
    });
}

document.addEventListener('DOMContentLoaded', function() {
    activateSlider();
});