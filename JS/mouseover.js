// Lấy danh sách các hình ảnh
const productImages = document.querySelectorAll('.product-image');

// Lặp qua từng hình ảnh và thêm sự kiện mouseover
productImages.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.transform = 'scale(1.1)';
        image.style.transition = 'transform 0.3s';
    });

    image.addEventListener('mouseout', () => {
        image.style.transform = 'scale(1)';
    });
});
    