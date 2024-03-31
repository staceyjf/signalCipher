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
  if (typeof userInput !== "string") throw new Error(invalidInputError);
  if (userInput === "") return "";

  // morse is case in-insensitive
  const englishChar = userInput.toUpperCase();

  // add separator to represent a space
  if (englishChar === " ") return "/";

  let morseChar = dictionary[englishChar];

  // deal with chars that don't have a translation
  if (morseChar === undefined) morseChar = "#";

  return morseChar;
}

export function translateToMorse(userInput) {
  if (typeof userInput !== "string") throw new Error(invalidInputError);
  if (userInput === "" || userInput === " ") return "";
  // as # can presents any english char that doesn't have a morse equivalent, we should return #
  if (userInput === "#") return "#";
  // it should translate the separator to be a space
  if (userInput === "/") return " ";

  // use the value to find the key aka englishChar
  let englishChar = Object.keys(dictionary).find(
    (key) => dictionary[key] === userInput
  );

  if (englishChar === undefined) englishChar = "#";

  return englishChar;
}
