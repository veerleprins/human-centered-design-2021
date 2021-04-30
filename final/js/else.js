// DOM elements
const fromStation = document.getElementById("fromStation");
const toStation = document.getElementById("toStation");
const when = document.getElementById("when");
const time = document.getElementById("time");
const plan = document.getElementById("plan");
const output = document.getElementById("output");
const outputDefaults = document.getElementById("outputDefaults");
const textOutput = document.getElementById("textOutput");

// Internals
let timeDateNow = getTimeAndDate();
console.log(timeDateNow);
let journey = {
  departure: "Eindhoven%20CS",
  arrival: "Amsterdam%20CS",
  date: `${timeDateNow.year}-${+timeDateNow.month + 1}-${01}`,
  time: "07:30",
};
let travelList = [fromStation, toStation, when, time, plan];

fromStation.focus();

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
    } else if (
      (key === 13 || key === 39 || key === 76) &&
      index === listLength
    ) {
      let endpoint = getEndpoint();
      window.open(endpoint);
    }
  });
});

// Functions
function createButtons(travelIndex) {
  if (travelIndex === 0) {
    // Create the default buttons:
    let ptag = createElement("p", "Defaults:");
    textOutput.appendChild(ptag);
    const alphabetButtons = getAlphabet();
    const buttons = createElements(
      4,
      "button",
      ["Eindhoven CS", "Amsterdam CS", "Utrecht CS", "Rotterdam CS"],
      "button"
    );
    // Adding to page
    appendListEl(alphabetButtons, output);
    appendListEl(buttons, outputDefaults);
    // Focussing on first button:
    buttons[0].focus();

    // Add event listeners:
    buttons.forEach((button, index) => {
      button.addEventListener("keyup", (event) => {
        let key = event.keyCode;
        // 75, 38 up
        // 74, 40 down
        let buttonLength = buttons.length - 1;
        if (key === 40 || key === 74) {
          // key down
          if (index === buttonLength) {
            buttons[0].focus();
          } else {
            buttons[index + 1].focus();
          }
        } else if (key === 38 || key === 75) {
          // key up
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
            travelList[travelIndex + 1].focus();
          } else {
            travelList[travelIndex].focus();
          }
          console.log(journey);
          removeListEl(buttons);
          removeListEl(alphabetButtons);
          ptag.remove();
        }
        if (key === 37 || key === 72) {
          // (index === 0) &
          removeListEl(buttons);
          removeListEl(alphabetButtons);
          travelList[travelIndex].focus();
          ptag.remove();
        }
      });
    });
    alphabetButtons.forEach((button, index) => {
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
            travelList[travelIndex + 1].focus();
          } else {
            travelList[travelIndex].focus();
          }
          console.log(journey);
          removeListEl(buttons);
          ptag.remove();
        }
        if ((index === 0) & (key === 37 || key === 72)) {
          removeListEl(buttons);
          travelList[travelIndex].focus();
          ptag.remove();
        }
      });
    });
  } else if (travelIndex === 1) {
    // Create the buttons:
    const alphabetButtons = getAlphabet();
    let buttons = createElements(
      4,
      "button",
      ["Eindhoven CS", "Amsterdam CS", "Utrecht CS", "Rotterdam CS"],
      "button"
    );
    // Adding to page
    appendListEl(buttons, outputDefaults);
    appendListEl(alphabetButtons, output);
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
        } else if (key === 38 || key === 75) {
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
            travelList[travelIndex + 1].focus();
          } else {
            travelList[travelIndex].focus();
          }
          removeListEl(buttons);
          removeListEl(alphabetButtons);
        }
        if (key === 37 || key === 72) {
          removeListEl(buttons);
          removeListEl(alphabetButtons);
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

function createElement(element, text, attr, attrName) {
  let elem = document.createElement(element);
  if (text) {
    let textNode = document.createTextNode(text);
    elem.appendChild(textNode);
  }
  if (attr && attrName) {
    elem.setAttribute(attr, attrName);
  }
  return elem;
}

function appendListEl(arr, parent) {
  arr.forEach((item) => {
    parent.append(item);
  });
}

function removeListEl(arr) {
  arr.forEach((item) => {
    item.remove();
  });
}

function getAlphabet() {
  let buttons = createElements(
    26,
    "button",
    [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ],
    "button"
  );
  return buttons;
}

// Necessary functions
function getTimeAndDate() {
  let now = new Date();
  let month = now.getMonth() + 1;
  month = month.toString();
  let hour = now.getHours().toString();
  let minutes = now.getMinutes().toString();
  month = checkNumbers(month);
  hour = checkNumbers(hour);
  minutes = checkNumbers(minutes);
  return {
    year: now.getFullYear().toString(),
    month: month,
    day: now.getDate().toString(),
    hour: hour,
    minutes: minutes,
  };
}

function checkNumbers(num) {
  if (num.length < 2) {
    return `0${num}`;
  } else {
    return num;
  }
}

function getEndpoint() {
  let URL = "https://www.ns.nl/reisplanner/#/";
  let endpoint = `${URL}?vertrek=${journey.departure}&vertrektype=treinstation&aankomst=${journey.arrival}&aankomsttype=treinstation&type=vertrek&tijd=${journey.date}T${journey.time}&toegankelijk=true`;
  return endpoint;
}
