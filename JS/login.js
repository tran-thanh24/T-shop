const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const dkyBtn = document.getElementById('dky');
const loginBtn = document.getElementById('login');
const backBtn = document.getElementById('back');
const phone = document.getElementById('phone');
const email = document.getElementById('email');

registerBtn.addEventListener('click', () => {
        container.classList.add("active");
});

dkyBtn.addEventListener('click', () => {
    const isPhoneValid = validatePhone(phone);
    const isEmailValid = validateEmail(email);

    if (isPhoneValid && isEmailValid) {
        container.classList.add("active");
    }
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

//kiểm tra sđt
function validatePhone(phoneInput){
    const phoneNumber = phoneInput.value;
    const phoneRegex = /^\d{10,11}$/;

    if(!phoneRegex.test(phoneNumber)){
        alert('Số điện thoại phải từ 10-11 số!!!');
        return false;
    }else{
        return true;
    }
}

//kiểm tra email
function validateEmail(emailInput) {
    const email = emailInput.value;

    if (email.endsWith("@gmail.com")) {
        return true;
    } else {
        alert("Email phải có định dạng hợp lệ (@gmail.com).");
        return false;
    }
}
