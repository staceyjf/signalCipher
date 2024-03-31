import { translateToEnglish, translateToMorse } from "./translate.js";

// NODES
const toMorseBtn = document.getElementById("toMorseBtn");
const toEnglishBtn = document.getElementById("toEnglishBtn");
const translationEl = document.getElementById("decodedOutput");
let outputResult = "";

document.querySelectorAll("textarea").forEach((input) => {
  input.addEventListener("keyup", (event) => {
    translationEl.textContent = "";

    if (typeof event.key !== "string")
      throw new Error("Invalid input for the translating functions");

    let outputChar = "";

    // if the user uses an english char that needs a "shift" ignore the shift char
    if (event.key === "Shift") return;

    try {
      if (event.target.id === "englishInput") {
        if (event.key === "Backspace") {
          // need to deal with the extra " " added by translatetoEnglish()
          if (outputResult.trimEnd().includes(" ")) {
            let lastSpaceIndex = outputResult.trimEnd().lastIndexOf(" ");
            outputResult = outputResult.slice(0, lastSpaceIndex);
          } else {
            outputResult = "";
          }
          translationEl.textContent = outputResult;
          return; // we need to exit to avoid sending Backspace to the translate functions
        }

        outputChar = translateToEnglish(event.key);
      }

      if (event.target.id === "morseInput")
        outputChar = translateToMorse(event.key);

      // create the relevant dom elements
      outputResult += outputChar;

      //if the user uses the "backspace" delete the the output char that was just inputted

      translationEl.textContent = outputResult;
    } catch (error) {
      console.error("ERROR: " + error);
      throw new Error(
        "Unfortunately the code could not be translated, please try again"
      );
    }
  });
});

//   console.log(event.target.id); //textarea id
//   console.log(event.target.value); //chars
// console.log(event.key); //keys
