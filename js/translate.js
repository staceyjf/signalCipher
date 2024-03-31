// defining my morse code dictionary
const dictionary = {
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

// ERRORS
const invalidInputError = "A string has not been provided";

export function translateToEnglish(userInput) {
  if (userInput === "") return "";
  if (typeof userInput !== "string") throw new Error(invalidInputError);

  let englishChar = userInput.toUpperCase();
  let morseChar;

  // add seperator for spaces
  if (englishChar === " ") return "/";

  morseChar = dictionary[englishChar];

  // deal with chars that don't have a translation
  if (morseChar === undefined) morseChar = "#";

  return morseChar;
}

// function translateToMorse() {
//   return null;
// };
