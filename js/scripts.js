import { translateToEnglish, translateToMorse } from "./translate.js";

// NODES
// const toMorseBtn = document.getElementById("toMorseBtn");
// const toEnglishBtn = document.getElementById("toEnglishBtn");
const decodedOutputElement = document.getElementById("decodedOutput");
let ongoingTranslatedText = "";
let userErrorMessage = "";

//helper function
function handleBackspace() {
  // Check if ongoingTranslatedText is not empty
  if (ongoingTranslatedText.length > 0) {
    // split into english words array by the seperator and deal with trailing space of last char
    let words = ongoingTranslatedText.trimEnd().split(" / ");
    // split into char array and deal with spaces
    let chars = words[words.length - 1].split(" ");
    // remove the last char
    chars.pop();
    // rebuild words and seperate by space
    words[words.length - 1] = chars.join(" ");
    // rebuild ongoing text seperated by the seperator
    ongoingTranslatedText = words.join(" / ");
  }

  // Update the decoded output element
  decodedOutputElement.textContent = ongoingTranslatedText;
}

document.querySelectorAll("textarea").forEach((input) => {
  input.addEventListener("keydown", (event) => {
    console.log(event.key);
    let translatedChar = "";

    if (typeof event.key !== "string")
      throw new Error("Invalid input for the translating functions");

    // if the user uses an english char that needs a "shift" ignore the shift char
    if (event.key === "Shift") return;

    try {
      switch (event.target.id) {
        case "englishInput":
          if (event.key === "Backspace") {
            handleBackspace();
            return; // Avoid sending Backspace to the translate functions
          }
          translatedChar = translateToEnglish(event.key);
          break;
        case "morseInput":
          translatedChar = translateToMorse(event.key);
          break;
        default:
          //TO DO add user UX
          console.error("Invalid target id");
          return;
      }
      // Create the relevant DOM elements
      ongoingTranslatedText += translatedChar;
      decodedOutputElement.textContent = ongoingTranslatedText;
    } catch (error) {
      console.error("ERROR: " + error);
      throw new Error(
        "Unfortunately the code could not be translated, please try again"
      );
    }
  });
});
