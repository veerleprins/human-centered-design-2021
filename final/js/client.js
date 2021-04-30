// DOM elements
const fromStation = document.getElementById("fromStation");
const toStation = document.getElementById("toStation");
const when = document.getElementById("when");

// Internals
let keysToWork = [113, 119, 101, 114, 97, 115, 100, 122, 120];
let keysToHome = [116, 121, 117, 102, 103, 104, 99, 118, 98];
let keysElse = [105, 111, 112, 106, 107, 108, 110, 109];
let keysGuitarTwo = [49, 50];
let keysGuitarFour = [51, 52];
let keysGuitarSix = [53, 54];
let keysGuitarEight = [55, 56];
let keysGuitarZero = [57, 48];
let URL = "https://www.ns.nl/reisplanner/#/";
let journey = {
  departure: null,
  arrival: null,
  date: null,
  time: null,
};

// Events
document.addEventListener("keypress", (event) => {
  let pressedCode = event.charCode;
  let pressedKey = event.keyCode;
  if (keysToWork.includes(pressedCode) || keysToWork.includes(pressedKey)) {
    // Getting the current time and date
    let timestamp = getTimeAndDate();

    // The endpoint for NS:
    let endpoint = getEndpoint(
      "Eindhoven%20Centraal",
      "Amsterdam%20Centraal",
      `${timestamp.year}-${timestamp.month}-${+timestamp.day + 1}`,
      "07:30"
    );

    // Open the endpoint
    window.open(endpoint);
  } else if (
    keysToHome.includes(pressedCode) ||
    keysToHome.includes(pressedKey)
  ) {
    // Getting the current time and date
    let timestamp = getTimeAndDate();

    // The endpoint for NS:
    let endpoint = getEndpoint(
      "Amsterdam%20Centraal",
      "Eindhoven%20Centraal",
      `${timestamp.year}-${timestamp.month}-${timestamp.day}`,
      `${+timestamp.hour + 1}:${timestamp.minutes}`
    );
    window.open(endpoint);
  } else if (keysElse.includes(pressedCode) || keysElse.includes(pressedKey)) {
    window.open(
      `${window.location.origin}/final/reisplannerAnders.html`,
      "_top"
    );
  } else if (
    keysGuitarTwo.includes(pressedCode) ||
    keysGuitarTwo.includes(pressedKey)
  ) {
    let noteC = new Audio(
      "/final/sounds/distorted-guitar-palm-hit_C_major.wav"
    );
    noteC.play();
  } else if (
    keysGuitarFour.includes(pressedCode) ||
    keysGuitarFour.includes(pressedKey)
  ) {
    let noteG = new Audio("/final/sounds/guitar-bending_G_major.wav");
    noteG.play();
  } else if (
    keysGuitarSix.includes(pressedCode) ||
    keysGuitarSix.includes(pressedKey)
  ) {
    let rythm = new Audio(
      "/final/sounds/rock-guitar-rhythm-dry-distorted_150bpm_D_major.wav"
    );
    rythm.play();
  } else if (
    keysGuitarEight.includes(pressedCode) ||
    keysGuitarEight.includes(pressedKey)
  ) {
    let rythm2 = new Audio(
      "/final/sounds/rock-emo-rhythm-guitar_66bpm_C_minor.wav"
    );
    rythm2.play();
  } else if (
    keysGuitarZero.includes(pressedCode) ||
    keysGuitarZero.includes(pressedKey)
  ) {
    let rythm3 = new Audio(
      "/final/sounds/rock-guitar-riff-hard-short-loop_80bpm_C_minor.wav"
    );
    rythm3.play();
  }
});

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

function getEndpoint(departure, arrival, date, time) {
  let endpoint = `${URL}?vertrek=${departure}&vertrektype=treinstation&aankomst=${arrival}&aankomsttype=treinstation&type=vertrek&tijd=${date}T${time}&toegankelijk=true`;
  return endpoint;
}
