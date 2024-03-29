console.log("working");

// import { morseDictionary } from "./utlis.js";

// defining my morse code dictionary
export const morseDictionary = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "'": ".----.",
  "!": "-.-.--",
  "/": "-..-.",
  "(": "-.--.",
  ")": "-.--.-",
  "&": ".-...",
  ":": "---...",
  ";": "-.-.-.",
  "=": "-...-",
  "+": ".-.-.",
  "-": "-....-",
  _: "..--.-",
  '"': ".-..-.",
  $: "...-..-",
  "@": ".--.-.",
  "¿": "..-.-",
  "¡": "--...-",
};

// more code rules
// separator: words are separated by "/"
// space: each character is separated by a single space
const invalidInputError = new Error("A string has not been provided");
const undefinedError = new Error("A match could not be found - undefined");
const nullError = new Error("A match could not be found - null");

const toMorseBtn = document.getElementById("toMorseBtn");
const toEnglishBtn = document.getElementById("toEnglishBtn");
let translatedResults = document.querySelectorAll("#translator__results");

const translateToEnglish = (event) => {
  let morseChar = "";

  if (event.key === " ") morseChar = "/";

  try{}.catch{}.finally{};

  console.log(morseChar);
 
};

const translateToMorse = () => {};

document.querySelectorAll("textarea").forEach((input) => {
  input.addEventListener("keydown", (event) => {
    // console.log(event.target.id); textarea id
    // console.log(event.target.value); chars

    if (event.target.id === "englishInput") {
      translateToEnglish(event);
    } else if (event.target.id === "morseInput") {
      translateToMorse(event);
    } else {
      throw new Error(
        "There has been an problem with translating please try again"
      );
    }
  });
});
