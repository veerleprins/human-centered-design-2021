// DOM elements
const fromStation = document.getElementById("fromStation");
const toStation = document.getElementById("toStation");
const when = document.getElementById("when");
const time = document.getElementById("time");
const plan = document.getElementById("plan");
const output = document.getElementById("output");
const keyboard = document.getElementById("keyboard");
const legend = document.getElementById("legend");

// Internals
let journey = {
  departure: null,
  arrival: null,
  date: null,
  time: null,
};

// Create the default buttons:
const buttons = createElements(
  3,
  "button",
  ["Eindhoven CS", "Amsterdam CS", "Mijn locatie"],
  "button"
);
buttons.forEach((button) => {
  output.appendChild(button);
});
buttons[0].focus();

const buttonList = document.querySelectorAll(".button");

console.log(buttonList[0]);
// buttonList[0].addEventListener("keyup", (event) => {
//   let key = event.keyCode;
//   console.log(key);
//   if (key === 72) {
//     let indexLast = buttonList.length - 1;
//     buttonList[indexLast].focus();
//   }
// });

buttonList.forEach((button, index) => {
  button.addEventListener("keyup", (event) => {
    let key = event.keyCode;
    // 38 = up
    // 40 = down
    if (index === 0) {
      // First button
      if (key === 72 || key === 37) {
        let indexLast = buttonList.length - 1;
        buttonList[indexLast].focus();
      } else if (key === 76 || key === 39) {
        // To the right
        buttonList[index + 1].focus();
      }
    } else if (buttonList.length - 1 === index) {
      // Last button
      if (key === 76 || key === 39) {
        buttonList[0].focus();
      } else if (key === 72 || key === 37) {
        buttonList[index - 1].focus();
      }
    } else {
      if (key === 72 || key === 37) {
        buttonList[index - 1].focus();
      } else if (key === 76 || key === 39) {
        buttonList[index + 1].focus();
      }
    }
    if (key === 13) {
      console.log(button.textContent);
    }
  });
});

// buttonList[0].addEventListener("keyup", (event) => {
//   console.log(event);
// });

function createElements(amount, element, textList, className) {
  let list = [];
  for (let index = 0; index < amount; index++) {
    const el = document.createElement(element);
    el.textContent = textList[index];
    el.classList.add(className);
    list.push(el);
  }
  return list;
}
