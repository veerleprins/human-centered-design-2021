// DOM elements:
const toButton = document.querySelector("#to");
const changeButton = document.querySelector("#change");
const lastButton = document.querySelector("#from");

toButton.focus();

toButton.addEventListener("keyup", (event) => {
  let key = event.keyCode;
  if (key === 38) {
    lastButton.focus();
  } else if (key === 40) {
    changeButton.focus();
  } else if (key === 32) {
    console.log("enter pressed");
  }
});

changeButton.addEventListener("keyup", (event) => {
  let key = event.keyCode;
  if (key === 38) {
    toButton.focus();
  } else if (key === 40) {
    lastButton.focus();
  } else if (key === 32) {
    console.log("enter pressed");
  }
});

lastButton.addEventListener("keyup", (event) => {
  let key = event.keyCode;
  if (key === 38) {
    changeButton.focus();
  } else if (key === 40) {
    toButton.focus();
  } else if (key === 32) {
    console.log("enter pressed");
  }
});
