// const registerName = document.forms("inp1");
const registerForm = document.forms[0];
const span = document.querySelector("span");
const registerUserName = registerForm.elements[0];
const registerPassword = registerForm.elements[1];
registerForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (!registerUserName.value) {
    registerUserName.nextElementSibling.textContent = "Username is required";
  } else {
    registerUserName.nextElementSibling.textContent = "";
  }
  if (registerPassword.value.length < 8) {
    registerPassword.nextElementSibling.textContent =
      "Password must be at least 8 character";
  } else {
    registerPassword.nextElementSibling.textContent = "";
  }
  if (
    registerPassword.nextElementSibling.textContent == "" &&
    registerUserName.nextElementSibling.textContent == ""
  ) {
    window.location.href = "../pages/home.html";
  }
});
