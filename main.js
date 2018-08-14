
"use strict";

/* wait for DOM to load to hook up event listeners */
window.addEventListener("load", function(event) {

/*
  let a=[0,1,2,3,4,5,6,7];
  for (var i=0;i<a.length;i++) {
    if (a[i] % 2 === 0)
      console.log(a[i]+", ");
  }*/

    /* Custom error when "username" entry doesn't match pattern
     -------------------------------------------------------- */
  const eUsername = document.getElementById("username");
  const eUsernameLabel = document.getElementById("username-label");
  eUsername.addEventListener("input", function(event) {
    if (eUsername.validity.patternMismatch) {
      eUsername.setCustomValidity("Please enter 1-15 alpha-numeric characters, single hyphens can be entered between characters");
      eUsernameLabel.classList.add("text-label-error");
    }
    else {
      eUsername.setCustomValidity("");  // clear this or element remains invalid
      eUsernameLabel.classList.remove("text-label-error");
    }
  })

  /* Addl error checking for "password"
     --------------------------------- */
  const ePassword = document.getElementById("password");
  const ePasswordLabel = document.getElementById("password-label");
  ePassword.addEventListener("input", function(event) {
    let sPassword = ePassword.value;
    ePassword.setCustomValidity("");  // reset this, otherwise can get stuck in invalid state

    // DEFAULT TEST, TOO SHORT BASED MIN LENGTH SETTING FOR ELEMENT
    if (ePassword.validity.tooShort) {
      // console.log("invalid too short: "+ePassword.value);
      ePasswordLabel.classList.add("text-label-error");
    }
    // TEST RULES
    else if (sPassword.length &&           // don't test empty string
             !(/[a-z]/.test(sPassword) &&
               /[A-Z]/.test(sPassword) &&
               /[0-9]/.test(sPassword))) {
      // console.log("invalid regexp: "+ePassword.value);
      ePassword.setCustomValidity("Please use at least one letter, one numeral, and 7-15 characters");
      ePasswordLabel.classList.add("text-label-error");
      }
    // IS VALID
    else {
      // console.log("valid: "+ePassword.value);
      ePasswordLabel.classList.remove("text-label-error");
    }
  })

  /* Custom error when "email" entry doesn't match pattern
     ----------------------------------------------------- */
  const eEmail = document.getElementById("email");
  const eEmailLabel = document.getElementById("email-label");
  eEmail.addEventListener("input", function(event) {
    eEmail.setCustomValidity("");  // reset this, otherwise can get stuck in invalid state
    // DEFAULT TEST OF VALIDITY AND PATTERN
    if (eEmail.validity.typeMismatch || eEmail.validity.patternMismatch) {
      // console.log("invalid: "+eEmail.value);
      eEmail.setCustomValidity("Please enter a valid email address");
      eEmailLabel.classList.add("text-label-error");
    }
    // IS VALID
    else {
      // console.log("valid: "+eEmail.value);
      eEmailLabel.classList.remove("text-label-error");
    }
  })

  /* OnSubmit, Check for req'd fields
     -------------------------------- */
  const eSubmitBtn = document.getElementById("submit-btn");
  eSubmitBtn.addEventListener("click", function(event) {
    // Don't need to prevent default since setCustomValidity() will cause default to prevent submit.
    // I'm not using the required setting for the element becuase I don't want them
    //   to all show with red border and red x's when the form loads.
    // console.log("submitting....");

    /* USERNAME */
    if (eUsername.value==="") {
      eUsername.setCustomValidity("Username is required");
      eUsernameLabel.classList.add("text-label-error");
    }
    /* EMAIL */
    if (eEmail.value==="") {
      eEmail.setCustomValidity("Email is required");
      eEmailLabel.classList.add("text-label-error");
    }
    /* PASSWORD */
    if (ePassword.value==="") {
      ePassword.setCustomValidity("Password is required");
      ePasswordLabel.classList.add("text-label-error");
    }
  })

});
