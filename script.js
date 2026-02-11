const form = document.querySelector(".form-grid");
const queryElement = document.querySelector(".query-element");
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const consentInput = document.getElementById("consent");
const messageWindow = document.querySelector(".success-message");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const isValidEmail = (email) => emailRegex.test(email);

const showError = (input) =>
  input.closest(".form-element").classList.add("error");
const clearError = (input) =>
  input.closest(".form-element").classList.remove("error");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let isValid = true;

  const checkedRadioInput = document.querySelector(
    'input[name="query-type"]:checked',
  );

  if (!firstNameInput.value.trim()) {
    isValid = false;
    showError(firstNameInput);
  } else {
    clearError(firstNameInput);
  }
  if (!lastNameInput.value.trim()) {
    isValid = false;
    showError(lastNameInput);
  } else {
    clearError(lastNameInput);
  }

  if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
    isValid = false;
    showError(emailInput);
  } else {
    clearError(emailInput);
  }

  if (!checkedRadioInput) {
    isValid = false;
    showError(queryElement);
  } else {
    clearError(queryElement);
  }

  if (!messageInput.value.trim()) {
    isValid = false;
    showError(messageInput);
  } else {
    clearError(messageInput);
  }

  if (!consentInput.checked) {
    isValid = false;
    showError(consentInput);
  } else {
    clearError(consentInput);
  }

  if (isValid) {
    messageWindow.classList.add("active");
    form.reset();
    messageWindow.focus();

    setTimeout(() => {
      messageWindow.classList.remove("active");
    }, 5000);
  }
});

form.addEventListener("input", (e) => {
  const target = e.target;
  if (target.closest(".form-element").classList.contains("error")) {
    if (target.name === "query-type") {
      clearError(queryElement);
    } else {
      clearError(target);
    }
  }
});

form.addEventListener("change", (e) => {
  if (e.target.name === "query-type") clearError(queryElement);
  if (e.target.id === "consent") clearError(consentInput);
});
