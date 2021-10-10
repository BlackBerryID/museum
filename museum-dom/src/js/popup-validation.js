// name input
const nameInput = document.querySelector(".input-name");
const nameValidationInfo = document.querySelector(
  ".input-name-validation-info"
);

function validateName() {
  if (
    (nameInput.value.length > 0 && nameInput.value.length < 3) ||
    nameInput.value.length > 15
  ) {
    nameValidationInfo.textContent =
      "The name must contain from 3 to 15 characters";
  } else {
    nameValidationInfo.textContent = "";
  }

  if (nameInput.value.length > 0) {
    if (nameInput.value.match(/[a-zа-я\s]/gi)) {
      let correctCharactersLength =
        nameInput.value.match(/[a-zа-я\s]/gi).length;
      if (correctCharactersLength !== nameInput.value.length) {
        nameValidationInfo.textContent =
          "The name must contain only letters or spaces";
      }
    } else {
      nameValidationInfo.textContent =
        "The name must contain only letters or spaces";
    }
  }
}

nameInput.addEventListener("input", validateName);

// e-mail input
const emailInput = document.querySelector('input[type="email"]');
const emailValidationInfo = document.querySelector(
  ".input-email-validation-info"
);

function validateEmail() {
  if (emailInput.value.length > 0) {
    if (emailInput.value.match(/[\w\-]+@/i)) {
      let usernameMatch = emailInput.value.match(/[\w\-]+@/i)[0];
      usernameMatch = usernameMatch.replace("@", "");
      let usernameLength = usernameMatch.length;
      let fullUsernameLength = emailInput.value.match(/.+?@/i)[0].length;
      if (usernameLength < 3 || usernameLength > 15) {
        emailValidationInfo.textContent =
          "The email name must contain from 3 to 15 characters";
      } else {
        emailValidationInfo.textContent = "";
      }

      if (usernameLength + 1 !== fullUsernameLength) {
        emailValidationInfo.textContent =
          "Only letters, numbers, underlines or hyphens are allowed";
      }
    }

    if (emailInput.value.match(/@[a-z]+\./i)) {
      let firstDomenMatch = emailInput.value.match(/@[a-z]+\./i)[0];
      firstDomenMatch = firstDomenMatch.replace("@", "");
      firstDomenMatch = firstDomenMatch.replace(".", "");
      let firstDomenLength = firstDomenMatch.length;

      if (firstDomenLength < 4) {
        emailValidationInfo.textContent =
          "The first level domain must contain at least 4 letters";
      }

      if (emailInput.value.match(/\.[a-z]+$/i)) {
        let topDomenMatch = emailInput.value.match(/\.[a-z]+$/i)[0];
        topDomenMatch = topDomenMatch.replace(".", "");
        let topDomenLength = topDomenMatch.length;

        if (topDomenMatch)
          if (topDomenLength < 2) {
            emailValidationInfo.textContent =
              "The top level domain must contain at least 2 letters";
          }
      }
    }
  } else {
    emailValidationInfo.textContent = "";
  }
}

emailInput.addEventListener("input", validateEmail);

// phone input
const phoneInput = document.querySelector("input[type='tel']");
const phoneValidationInput = document.querySelector(
  ".input-phone-validation-info"
);

function validatePhone() {
  let phoneInputValue = phoneInput.value;
  phoneInputValue = phoneInputValue.replace(/-/g, "");
  phoneInputValue = phoneInputValue.replace(/\s/g, "");
  if (phoneInputValue.length > 0) {
    for (let i = 0, count = 0; i < phoneInputValue.length; i++) {
      if (!+phoneInputValue[i]) {
        phoneValidationInput.textContent =
          "Only digits, hyphens and spaces are allowed";
        return;
      } else {
        phoneValidationInput.textContent = "";
        if (++count > 10) {
          phoneValidationInput.textContent =
            "You can enter no more then 10 digits";
        }
      }
    }
  } else {
    phoneValidationInput.textContent = "";
  }
}

phoneInput.addEventListener("input", validatePhone);
