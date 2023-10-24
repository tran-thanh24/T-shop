const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const dkyBtn = document.getElementById('dky');
const loginBtn = document.getElementById('login');
const backBtn = document.getElementById("back");
const phone = document.getElementById('phone');
const email = document.getElementById('email');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

dkyBtn.addEventListener('click', () => {
    validatePhone(phone);
    validateEmail(email);
    container.classList.add("active");
});


loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// backBtn.addEventListener('click', () => {
//     window.location.href = "";
// });


// kiểm tra email, sđt
// validation.js

function validatePhone(phoneInput) {
    const phoneNumber = phoneInput.value;
    if (!/^\d{10,11}$/.test(phoneNumber)) {
        alert('Phone number must be 10-11 digits.')
        return false;
    } else {
        return true;
    }
}

function validateEmail(emailInput) {
    const email = emailInput.value;

    if (email.endsWith("@gmail.com")) {
        return true;
    } else {
        console.log("Email must be a Gmail address.");
        return false;
    }
}
