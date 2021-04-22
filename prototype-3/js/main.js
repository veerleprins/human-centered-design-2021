// DOM elements
const fromStation = document.getElementById("fromStation");
const toStation = document.getElementById("toStation");
const when = document.getElementById("when");
const time = document.getElementById("time");
const plan = document.getElementById("plan");
const output = document.getElementById("output");
const keyboard = document.getElementById("keyboard");
const legend = document.getElementById("legend");
const buttons = document.querySelectorAll(".button");

// Internals
let keysToWork = [113, 119, 101, 114, 97, 115, 100, 122, 120];
let keysToHome = [116, 121, 117, 102, 103, 104, 99, 118, 98];
let keysElse = [105, 111, 112, 106, 107, 108, 110, 109];
let URL = "https://www.ns.nl/reisplanner/#/";
let journey = {
  departure: null,
  arrival: null,
  date: null,
  time: null,
};

// Events
document.addEventListener("keypress", (event) => {
  let pressedKey = event.charCode;
  console.log(pressedKey);
  if (keysToWork.includes(pressedKey)) {
    // Change text
    changeText(fromStation, "Eindhoven CS");
    changeText(toStation, "Amsterdam CS");
    changeText(when, "Morgenochtend");
    changeText(time, "08:00");

    // Focus on a tag
    plan.focus();

    // Change journey object
    journey.departure = "Eindhoven%20Centraal";
    journey.arrival = "Amsterdam%20Centraal";
    let timestamp = getTimeAndDate();
    timestamp.hour = "08";
    timestamp.minutes = "00";
    let day = +timestamp.day + 1;
    journey.date = `${timestamp.year}-${timestamp.month}-${day}`;
    journey.time = `${timestamp.hour}:${timestamp.minutes}`;

    // Change a tag attributes
    plan.setAttribute("target", "_blank");
    plan.setAttribute(
      "href",
      `${URL}?vertrek=${journey.departure}&vertrektype=treinstation&aankomst=${journey.arrival}&aankomsttype=treinstation&type=vertrek&tijd=${journey.date}T${journey.time}&toegankelijk=true`
    );
  } else if (keysToHome.includes(pressedKey)) {
    // Change text
    changeText(fromStation, "Amsterdam CS");
    changeText(toStation, "Eindhoven CS");
    changeText(when, "Vandaag");
    changeText(time, "Over een uur");

    // Focus on a tag
    plan.focus();

    journey.departure = "Amsterdam%20Centraal";
    journey.arrival = "Eindhoven%20Centraal";
    let timestamp = getTimeAndDate();
    hour = +timestamp.hour + 1;
    journey.date = `${timestamp.year}-${timestamp.month}-${timestamp.day}`;
    journey.time = `${hour}:${timestamp.minutes}`;

    // Change a tag attributes
    plan.setAttribute("target", "_blank");
    plan.setAttribute(
      "href",
      `${URL}?vertrek=${journey.departure}&vertrektype=treinstation&aankomst=${journey.arrival}&aankomsttype=treinstation&type=vertrek&tijd=${journey.date}T${journey.time}&toegankelijk=true`
    );
  } else if (keysElse.includes(pressedKey)) {
    window.location.href =
      window.location.origin + "/prototype-3/prototype-3-else.html";
    // console.log(window.location.origin + "/prototype-3/prototype-3-else");
    // window.location.href = `${window.location.origin}/newpage`;
    // // Change image
    // keyboard.setAttribute("src", "/prototype-3/images/keyboard-anders.svg");

    // // Remove
    // legend.remove();

    // // Change text
    // changeText(fromStation, "__________");
    // changeText(toStation, "__________");
    // changeText(when, "__________");
    // changeText(time, "__________");

    // // Create the default buttons:
    // const buttons = createElements(
    //   3,
    //   "button",
    //   ["Eindhoven CS", "Amsterdam CS", "Mijn locatie"],
    //   "button"
    // );
    // buttons.forEach((button) => {
    //   output.appendChild(button);
    // });
  }
});

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

function getTimeAndDate() {
  // const query = `${year}-${month}-${day}T${hour}:${minutes}`;
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

if (buttons.length > 1) {
  console.log("YESS");
  console.log(buttons);
}

// const buttonList = document.querySelectorAll(".button");
// buttonList[0].focus();
// buttonList[0].addEventListener("keyup", (event) => {
//   let key = event.charCode;
//   console.log(key);
//   // if (key === )
// });
// buttonList[1].addEventListener("keyup", (event) => {
//   let key = event.charCode;
// });
// buttonList[2].addEventListener("keyup", (event) => {
//   let key = event.charCode;
// });
// console.log(buttonList);
// } else if (pressedKey === 13) {
// console.log("Enter key is pressed");
// }
