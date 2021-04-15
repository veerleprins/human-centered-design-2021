// DOM elements:
const toButton = document.querySelector("#to");
const changeButton = document.querySelector("#change");
const lastButton = document.querySelector("#from");

toButton.focus();

toButton.addEventListener("keyup", (event) => {
  let key = event.keyCode;
  if (key === 75) {
    lastButton.focus();
  } else if (key === 74) {
    changeButton.focus();
  } else if (key === 32) {
    console.log("enter pressed");
  }
});

changeButton.addEventListener("keyup", (event) => {
  let key = event.keyCode;
  if (key === 75) {
    toButton.focus();
  } else if (key === 74) {
    lastButton.focus();
  } else if (key === 32) {
    console.log("enter pressed");
  }
});

lastButton.addEventListener("keyup", (event) => {
  let key = event.keyCode;
  if (key === 75) {
    changeButton.focus();
  } else if (key === 74) {
    toButton.focus();
  } else if (key === 32) {
    console.log("enter pressed");
  }
});
