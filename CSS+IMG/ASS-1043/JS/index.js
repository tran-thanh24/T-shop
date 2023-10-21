//countdown clock
function updateCountdown() {
  var targetDate = new Date("2023-10-30T23:59:59");
  var now = new Date();
  var timeRemaining = targetDate - now;

  var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  var countdownElement = document.getElementById("countdown");
  // countdownElement.innerHTML = days + ' days, ' + hours + ' hours, ' + minutes + ' minutes, ' + seconds + ' seconds';
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial call to set the initial countdown value
updateCountdown();

//mouseover
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

document.addEventListener("DOMContentLoaded", function () {
  var images = document.querySelectorAll(".carousel-inner img");

  images.forEach(function (image) {
    image.addEventListener("mouseover", function () {
      handleMouseOver(this);
    });

    image.addEventListener("mouseout", function () {
      handleMouseOut(this);
    });
  });
});
