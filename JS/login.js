const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const backBtn = document.getElementById("back");

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});


loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

backBtn.addEventListener('click', () => {
    window.location.href = "";
});


// kiểm tra email, sđt
// validation.js

function validatePhone(phoneInput, phoneError) {
    const phoneNumber = phoneInput.value;
    if (!/^\d{10,11}$/.test(phoneNumber)) {
        phoneError.textContent = "Phone number must be 10-11 digits.";
        return false;
    } else {
        phoneError.textContent = "";
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

