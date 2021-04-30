// DOM elements
const fromStation = document.getElementById("fromStation");
const toStation = document.getElementById("toStation");
const when = document.getElementById("when");
const time = document.getElementById("time");
const plan = document.getElementById("plan");
const output = document.getElementById("output");

// Internals
let journey = {
  departure: null,
  arrival: null,
  date: null,
  time: null,
};
let travelList = [fromStation, toStation, when, time, plan];

fromStation.focus();

// // Create the default buttons:
// const buttons = createElements(
//   7,
//   "button",
//   [
//     "Eindhoven CS",
//     "Amsterdam CS",
//     "Utrecht CS",
//     "Rotterdam CS",
//     "Schiphol Airport",
//     "Almere Centrum",
//     "Anders...",
//   ],
//   "button"
// );

travelList.forEach((item, index) => {
  item.addEventListener("keyup", (event) => {
    let key = event.keyCode;
    // event.charCode
    let listLength = travelList.length - 1;
    if (key === 74 || key === 40) {
      // KEY DOWN (J / arrow)
      if (index === listLength) {
        travelList[0].focus();
      } else {
        travelList[index + 1].focus();
      }
    } else if (key === 75 || key === 38) {
      // KEY UP (K / arrow)
      if (index === 0) {
        travelList[listLength].focus();
      } else {
        travelList[index - 1].focus();
      }
    } else if (
      (key === 13 || key === 39 || key === 76) &&
      index !== listLength
    ) {
      createButtons(index);
    }
  });
});

// Functions
function createButtons(travelIndex) {
  if (travelIndex === 0) {
    // Create the default buttons:
    const buttons = createElements(
      7,
      "button",
      [
        "Eindhoven CS",
        "Amsterdam CS",
        "Utrecht CS",
        "Rotterdam CS",
        "Schiphol Airport",
        "Almere Centrum",
        "Anders...",
      ],
      "button"
    );
    // Adding to page
    buttons.forEach((button) => {
      output.appendChild(button);
    });
    // Focussing on first button:
    buttons[0].focus();

    // Add event listeners:
    buttons.forEach((button, index) => {
      button.addEventListener("keyup", (event) => {
        let key = event.keyCode;
        let buttonLength = buttons.length - 1;
        if (key === 40 || key === 74) {
          if (index === buttonLength) {
            buttons[0].focus();
          } else {
            buttons[index + 1].focus();
          }
        } else if (key === 38 || key === 72) {
          if (index === 0) {
            buttons[buttonLength].focus();
          } else {
            buttons[index - 1].focus();
          }
        }
        if (key === 32 || key === 13) {
          // Space = 32
          // Enter = 13
          let text = button.textContent;
          let replaced = text.replace(" ", "%20");
          if (journey.arrival !== replaced) {
            changeText(fromStation, text);
            journey.departure = replaced;
            buttons.forEach((button) => {
              button.remove();
            });
            travelList[travelIndex + 1].focus();
          } else {
            buttons.forEach((button) => {
              button.remove();
            });
            travelList[travelIndex].focus();
          }
          console.log(journey);
          buttons.forEach((button) => {
            button.remove();
          });
        }
        if ((index === 0) & (key === 37 || key === 72)) {
          buttons.forEach((button) => {
            button.remove();
          });
          travelList[travelIndex].focus();
        }
      });
    });
  } else if (travelIndex === 1) {
    // Create the default buttons:
    let buttons = createElements(
      7,
      "button",
      [
        "Eindhoven CS",
        "Amsterdam CS",
        "Utrecht CS",
        "Rotterdam CS",
        "Schiphol Airport",
        "Almere Centrum",
        "Anders...",
      ],
      "button"
    );
    // Adding to page
    buttons.forEach((button) => {
      output.appendChild(button);
    });
    // Focussing on first button:
    buttons[0].focus();
    // Add event listeners:
    buttons.forEach((button, index) => {
      button.addEventListener("keyup", (event) => {
        let key = event.keyCode;
        let buttonLength = buttons.length - 1;
        if (key === 40 || key === 74) {
          if (index === buttonLength) {
            buttons[0].focus();
          } else {
            buttons[index + 1].focus();
          }
        } else if (key === 38 || key === 72) {
          if (index === 0) {
            buttons[buttonLength].focus();
          } else {
            buttons[index - 1].focus();
          }
        }
        if (key === 32 || key === 13) {
          // Space = 32
          // Enter = 13
          let text = button.textContent;
          let replaced = text.replace(" ", "%20");
          if (journey.departure !== replaced) {
            changeText(toStation, text);
            journey.arrival = replaced;
            buttons.forEach((button) => {
              button.remove();
            });
            travelList[travelIndex + 1].focus();
          } else {
            buttons.forEach((button) => {
              button.remove();
            });
            travelList[travelIndex].focus();
          }
        }
        if ((index === 0) & (key === 37 || key === 72)) {
          buttons.forEach((button) => {
            button.remove();
          });
          travelList[travelIndex].focus();
        }
      });
    });
  } else if (travelIndex === 2) {
    // Check if other inputs;
  } else if (travelIndex === 3) {
    // Check if other inputs;
  }
}

// Functions

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

function changeText(element, station) {
  element.textContent = station;
}
