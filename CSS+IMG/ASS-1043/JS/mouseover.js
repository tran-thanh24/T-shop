function handleMouseOver(image) {
    // Xử lý khi rê chuột vào ảnh
    // Ví dụ: Phóng to ảnh
    image.style.transform = "scale(1.2)";
}

function handleMouseOut(image) {
    // Xử lý khi rê chuột ra khỏi ảnh
    // Ví dụ: Thoát khỏi trạng thái phóng to
    image.style.transform = "scale(1)";
}

document.addEventListener('DOMContentLoaded', function() {
    var images = document.querySelectorAll('.carousel-inner img');

    images.forEach(function(image) {
        image.addEventListener('mouseover', function() {
            handleMouseOver(this);
        });

        image.addEventListener('mouseout', function() {
            handleMouseOut(this);
        });
    });
});