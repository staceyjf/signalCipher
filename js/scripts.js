import { translateToEnglish, translateToMorse } from "./translate.js";

// NODES
// const toMorseBtn = document.getElementById("toMorseBtn");
// const toEnglishBtn = document.getElementById("toEnglishBtn");
const decodedOutputElement = document.getElementById("decodedOutput");
let ongoingTranslatedText = "";

//helper function
function handleBackspace() {
  // need to deal with the extra " " added by translatetoEnglish()
  if (outputResult.trimEnd().includes(" ")) {
    let lastSpaceIndex = outputResult.trimEnd().lastIndexOf(" ");
    outputResult = outputResult.slice(0, lastSpaceIndex);
  } else {
    outputResult = "";
  }
  return (decodedOutputElement.textContent = outputResult);
}

document.querySelectorAll("textarea").forEach((input) => {
  input.addEventListener("keyup", (event) => {
    decodedOutputElement.textContent = "";
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
