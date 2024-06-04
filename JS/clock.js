//countdown clock
function updateCountdown() {
    var targetDate = new Date('2024-12-31T23:59:59');
    var now = new Date();
    var timeRemaining = targetDate - now;

    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    var countdownElement = document.getElementById('countdown');
    countdownElement.innerHTML = days + ' days, ' + hours + ' hours, ' + minutes + ' minutes, ' + seconds + ' seconds';
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial call to set the initial countdown value
updateCountdown();


