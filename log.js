const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const submitBtn = document.getElementById("submitBtn");

emailInput.addEventListener("input", checkFormValidity);
passwordInput.addEventListener("input", checkFormValidity);

function checkFormValidity() {
  const isEmailValid = validateEmail(emailInput.value);
  const isPasswordValid = validatePassword(passwordInput.value);
  emailError.style.display = isEmailValid ? "none" : "block";
  passwordError.style.display = isPasswordValid ? "none" : "block";
  submitBtn.disabled = !(isEmailValid && isPasswordValid);
}

function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}

function validatePassword(password) {
  const passwordPattern = /^(?=.*\d).{8,}$/;
  return passwordPattern.test(password);
}

function validateForm() {
  const isEmailValid = validateEmail(emailInput.value);
  const isPasswordValid = validatePassword(passwordInput.value);
  if (!isEmailValid) {
    emailError.style.display = "block";
    return false;
  }
  if (!isPasswordValid) {
    passwordError.style.display = "block";
    return false;
  }
  alert("Login exitoso");

  
  window.location.href = "index.html";
  
  return true;
}

