// getting HTML elements and initialize variables
let usernameInput = document.querySelector("#usernameInput");
let emailInput = document.querySelector("#emailInput");
let passwordInput = document.querySelector("#passwordInput");
let openEyeBtn = document.querySelector(".fa-eye");
let slashedEyeBtn = document.querySelector(".fa-eye-slash");
let checkbox = document.querySelector("#checkbox");
let submitBtn = document.querySelector("#submitBtn");
let smallerScreen = window.matchMedia("(max-width: 857px)");
let clicked = false;

// adding events to the elements
slashedEyeBtn.addEventListener("click", showPassword);
openEyeBtn.addEventListener("click", hidePassword);
checkbox.addEventListener("click", checkBox);
submitBtn.addEventListener("click", checkFields);
usernameInput.addEventListener("click", hideBalloon);
passwordInput.addEventListener("click", hideBalloon);

// functions
function showPassword() {
  // when user click in the show password button
  slashedEyeBtn.style.display = "none";
  openEyeBtn.style.display = "inline";

  passwordInput.setAttribute("type", "text");
}

function hidePassword() {
  // when user click in the hide password button
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
  // if   
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
      "Your password must contain at least: 5-25 characters, 1 number, 1 capital letter and 1 special character"
    );

    if (smallerScreen.matches) {
      passwordInput.parentElement.setAttribute("data-balloon-pos", "down");
    } else {
      passwordInput.parentElement.setAttribute("data-balloon-pos", "left");
    }
  }

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
  let element = event.target.parentElement;

  element.removeAttribute("data-balloon-length");
  element.removeAttribute("data-balloon-visible");
  element.removeAttribute("aria-label");
  element.removeAttribute("data-balloon-pos");
}
