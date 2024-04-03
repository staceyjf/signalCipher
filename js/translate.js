// defining my morse code morseDictionary
const morseDictionary = {
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
  "": "", //check if this works
  " ": "/",
};

const englishDictionary = Object.entries(morseDictionary).reduce(
  (dictionary, [a, b]) => {
    dictionary[b] = a;
    return dictionary;
  },
  {}
);

// ERRORS
const invalidInputError = "A string has not been provided";

export function translateToMorse(userInput) {
  if (typeof userInput !== "string") throw new Error(invalidInputError);

  return userInput
    .toUpperCase()
    .split("")
    .reduce((output, char) => {
      let morseChar = morseDictionary[char];
      if (morseChar === undefined) morseChar = "#";
      output += char;
      return morseChar;
    }, "");

  // // morse is case in-insensitive
  // const englishChar = englishUserInput.toUpperCase();

  // add separator to represent a space
  // if (englishChar === " ") return "/";
}

export function translateToEnglish(morseUserInput) {
  if (typeof morseUserInput !== "string") throw new Error(invalidInputError);
  if (morseUserInput === "" || morseUserInput === " ") return "";
  // as # can presents any english char that doesn't have a morse equivalent, we should return #
  if (morseUserInput === "#") return "#";
  // it should translate the separator to be a space
  if (morseUserInput === "/") return " ";

  // use the value to find the key aka englishChar
  let englishChar = Object.keys(morseDictionary).find(
    (key) => morseDictionary[key] === morseUserInput
  );

  if (englishChar === undefined) englishChar = "#";

  return englishChar;
}
