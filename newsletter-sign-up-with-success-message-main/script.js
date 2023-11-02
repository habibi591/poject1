const form = document.querySelector("#form-newsletter");
const submittedEmail = document.querySelector("#get-email");
const signUp = document.querySelector("#sign-up");
const dismiss = document.querySelector("#dismiss");
const success = document.querySelector("#success");
function updateEmail(email) {
  submittedEmail.textContent = email;
}

function switchTab() {
  success.classList.toggle("hidden");
  signUp.classList.toggle("hidden");
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.querySelector("#email-input");
  updateEmail(email.value);
  switchTab();
});

dismiss.addEventListener("click", function () {
  switchTab();
  updateEmail("");
});
