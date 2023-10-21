const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");
const backBtn = document.getElementById("back");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
  backBtn.addEventListener("click", () => {
    container.classList.remove("active");
  });
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});
