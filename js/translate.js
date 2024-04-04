// morse code rules
// separator: words are separated by "/"
// space: each character is separated by a single space

// ERRORS
const invalidInputError = "A string has not been provided";

export function translate(userInput, dictionary, spacer, separator) {
  if (typeof userInput !== "string") throw new Error(invalidInputError);
  if (userInput === "") return "";

  return userInput
    .toUpperCase()
    .split(spacer)
    .map((char) => {
      let morseChar = dictionary[char];
      if (morseChar === undefined) morseChar = "#";
      return morseChar;
    })
    .join(separator);
}
