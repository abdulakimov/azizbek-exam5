// const registerName = document.forms("inp1");
const registerForm = document.forms[0];
const span = document.querySelector("span");
const registerUserName = registerForm.elements[2];
const registerFirstName = registerForm.elements[0];
const registerLastName = registerForm.elements[1];
const registerPassword = registerForm.elements[3];
const registerConfirmPassword = registerForm.elements[4];
registerForm.addEventListener("click", function (e) {
  e.preventDefault();
  if (!registerFirstName.value) {
    registerFirstName.nextElementSibling.textContent = "Firstname is required";
  } else {
    registerFirstName.nextElementSibling.textContent = "";
  }
  if (!registerLastName.value) {
    registerLastName.nextElementSibling.textContent = "Lastname is required";
  } else {
    registerLastName.nextElementSibling.textContent = "";
  }
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
  if (!registerConfirmPassword.value) {
    registerConfirmPassword.nextElementSibling.textContent =
      "Confirm Password is required";
  } else if (registerPassword.value !== registerConfirmPassword.value) {
    registerConfirmPassword.nextElementSibling.textContent =
      "Confirm Password should be the same with password";
  } else {
    registerConfirmPassword.nextElementSibling.textContent = "";
  }
  if (
    registerConfirmPassword.nextElementSibling.textContent == "" &&
    registerPassword.nextElementSibling.textContent == "" &&
    registerUserName.nextElementSibling.textContent == "" &&
    registerLastName.nextElementSibling.textContent == "" &&
    registerFirstName.nextElementSibling.textContent == ""
  ) {
    window.location.href = "../pages/login.html";
  }
});
