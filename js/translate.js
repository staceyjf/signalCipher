// defining my morse code morseDictionary
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

export const englishDictionary = Object.entries(morseDictionary).reduce(
  (dictionary, [a, b]) => {
    dictionary[b] = a;
    return dictionary;
  },
  {}
);

// ERRORS
const invalidInputError = "A string has not been provided";

export function translate(userInput, dictionary, spacer, separator) {
  if (typeof userInput !== "string") throw new Error(invalidInputError);

  return userInput
    .toUpperCase()
    .split(spacer)
    .reduce((output, char) => {
      let morseChar = dictionary[char];
      if (morseChar === undefined) morseChar = "#";
      output += morseChar + separator;
      return output;
    }, "");
}
