import { translateToEnglish, translateToMorse } from "./translate.js";

// NODES
const toMorseBtn = document.getElementById("toMorseBtn");
const toEnglishBtn = document.getElementById("toEnglishBtn");
const translationEl = document.getElementById("decodedOutput");
let outputResult = "";

document.querySelectorAll("textarea").forEach((input) => {
  input.addEventListener("keyup", (event) => {
    if (typeof event.key !== "string")
      throw new Error("Invalid input for the translating functions");

    //TODO: FIX THIS - move this to first
    if (event.key === "Backspace") console.log(" need to deal with backspace");
    //TODO: how do test with shift
    if (event.key === "Shift") return;

    let outputChar = "";

    try {
      if (event.target.id === "englishInput")
        outputChar = translateToEnglish(event.key);

      if (event.target.id === "morseInput")
        outputChar = translateToMorse(event.key);
    } catch (error) {
      console.error("ERROR: " + error);
      throw new Error(
        "Unfortunately the code could not be translated, please try again"
      );
    }

    // create the relevant dom elements
    outputResult += outputChar;
    console.log(outputResult);
    translationEl.textContent = outputResult;
  });
});

//   console.log(event.target.id); //textarea id
//   console.log(event.target.value); //chars
// console.log(event.key); //keys
