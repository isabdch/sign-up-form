// HTML elements and variables
let usernameInput = document.querySelector("#usernameInput");
let emailInput = document.querySelector("#emailInput");
let passwordInput = document.querySelector("#passwordInput");
let openEyeBtn = document.querySelector(".fa-eye");
let slashedEyeBtn = document.querySelector(".fa-eye-slash");
let checkbox = document.querySelector("#checkbox");
let submitBtn = document.querySelector("#submitBtn");
let textAnimation = document.querySelector(".textAnimation");
let smallerScreen = window.matchMedia("(max-width: 857px)");
let clicked = false;

// events
slashedEyeBtn.addEventListener("click", showPassword);
openEyeBtn.addEventListener("click", hidePassword);
checkbox.addEventListener("click", checkBox);
submitBtn.addEventListener("click", checkFields);
usernameInput.addEventListener("click", hideBalloon);
passwordInput.addEventListener("click", hideBalloon);
window.addEventListener("DOMContentLoaded", () => {
  // animated text
  textAnimation.style.animation = "flipInX 2s ease 0s 1 normal both";
  setTimeout(() => {
    textAnimation.style.animation = "flipOutX 2s ease 0s 1 normal both";
  }, 5000);

  setInterval(() => {
    textAnimation.style.animation = "flipInX 2s ease 0s 1 normal both";
    setTimeout(() => {
      textAnimation.style.animation = "flipOutX 2s ease 0s 1 normal both";
    }, 5000);
  }, 7700);
});

// functions
function showPassword() {
  // when user click in the button the password will show
  slashedEyeBtn.style.display = "none";
  openEyeBtn.style.display = "inline";

  passwordInput.setAttribute("type", "text");
}

function hidePassword() {
  // when user click in the button the password will hide
  slashedEyeBtn.style.display = "inline";
  openEyeBtn.style.display = "none";

  passwordInput.setAttribute("type", "password");
}

function checkBox() {
  // add or remove class 'checked' when user click in the checkbox
  if (checkbox.classList.contains("checked") == false) {
    checkbox.classList.add("checked");
  } else {
    checkbox.classList.remove("checked");
  }
}

function checkFields(event) {
  // if some field is empty, user is not allowed to continue and the pop-up will appear
  if (
    usernameInput.value == "" ||
    emailInput.value == "" ||
    passwordInput == "" ||
    checkbox.classList.contains("checked") == false
  ) {
    event.preventDefault();

    submitBtn.setAttribute("data-balloon-length", "fit");
    submitBtn.setAttribute("data-balloon-visible", "");
    submitBtn.setAttribute("aria-label", "You must fill out all fields");

    if (smallerScreen.matches) {
      submitBtn.setAttribute("data-balloon-pos", "down");
    } else {
      submitBtn.setAttribute("data-balloon-pos", "left");
    }
  }

  // if username field has less than 4 characters, user is not allowed to continue and the pop-up will appear
  if (usernameInput.value.length < 4) {
    event.preventDefault();

    usernameInput.parentElement.setAttribute("data-balloon-length", "fit");
    usernameInput.parentElement.setAttribute("data-balloon-visible", "");
    usernameInput.parentElement.setAttribute(
      "aria-label",
      "Your username must contain at least 4 characters"
    );

    if (smallerScreen.matches) {
      usernameInput.parentElement.setAttribute("data-balloon-pos", "down");
    } else {
      usernameInput.parentElement.setAttribute("data-balloon-pos", "left");
    }
  }

  // email input must be valid
  if (
    emailInput.value
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  ) {
  } else {
    event.preventDefault();

    emailInput.parentElement.setAttribute("data-balloon-length", "fit");
    emailInput.parentElement.setAttribute("data-balloon-visible", "");
    emailInput.parentElement.setAttribute(
      "aria-label",
      "Value must be a valid email address"
    );

    if (smallerScreen.matches) {
      emailInput.parentElement.setAttribute("data-balloon-pos", "down");
    } else {
      emailInput.parentElement.setAttribute("data-balloon-pos", "left");
    }
  }

  // if password field has less than 5 characters, does not include 1 upper case letter, 1 lower case letter and 1 special character, user is not allowed to continue and the pop-up will appear
  if (
    passwordInput.value.match(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{5,25}$/
    )
  ) {
  } else {
    event.preventDefault();

    passwordInput.parentElement.setAttribute("data-balloon-length", "fit");
    passwordInput.parentElement.setAttribute("data-balloon-visible", "");
    passwordInput.parentElement.setAttribute(
      "aria-label",
      "Your password must contain at least: 5-25 characters, 1 number, 1 upper case letter, 1 lower case letter and 1 special character"
    );

    if (smallerScreen.matches) {
      passwordInput.parentElement.setAttribute("data-balloon-pos", "down");
    } else {
      passwordInput.parentElement.setAttribute("data-balloon-pos", "left");
    }
  }

  // if password field includes spaces user is not allowed to continue and the pop-up will appear
  if (passwordInput.value.indexOf(" ") >= 0) {
    event.preventDefault();

    passwordInput.parentElement.setAttribute("data-balloon-length", "fit");
    passwordInput.parentElement.setAttribute("data-balloon-visible", "");
    passwordInput.parentElement.setAttribute(
      "aria-label",
      "Your password can not contain spaces"
    );

    if (smallerScreen.matches) {
      passwordInput.parentElement.setAttribute("data-balloon-pos", "down");
    } else {
      passwordInput.parentElement.setAttribute("data-balloon-pos", "left");
    }
  }
}

function hideBalloon(event) {
  // when clicked, input's pop-up will desappear
  let element = event.target.parentElement;

  element.removeAttribute("data-balloon-length");
  element.removeAttribute("data-balloon-visible");
  element.removeAttribute("aria-label");
  element.removeAttribute("data-balloon-pos");
}
