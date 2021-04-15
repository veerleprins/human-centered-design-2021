// DOM elements:
const li = document.querySelector("li");
const workButton = document.querySelector("#work");
const elseButton = document.querySelector("#else");

const trip = {
  from: "",
  to: "",
  date: "",
  time: "",
};

// Sets focus on start button:
workButton.focus();

workButton.addEventListener("keyup", (event) => {
  let key = event.keyCode;
  if (key === 38) {
    elseButton.focus();
  } else if (key === 40) {
    elseButton.focus();
  } else if (key === 13) {
    console.log("enter pressed");
  }
});

elseButton.addEventListener("keyup", (event) => {
  let key = event.keyCode;
  if (key === 38) {
    workButton.focus();
  } else if (key === 40) {
    workButton.focus();
  } else if (key === 13) {
    console.log("enter pressed");
  }
});

function createElement(element, text, attr, attrName) {
  let elem = document.createElement(element);
  let textNode = document.createTextNode(text);
  elem.appendChild(textNode);
  elem.setAttribute(attr, attrName);
  return elem;
}

function removeButtons(elementArray) {
  elementArray.forEach((element) => {
    element.parentNode.removeChild(element);
  });
  return false;
}
