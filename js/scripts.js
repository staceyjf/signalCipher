import { translate } from "./translate.js";
import { morseDictionary, englishDictionary } from "./dictionary.js";

// NODES
const decodedOutputElement = document.getElementById("decodedOutput");
const inputText = document.getElementById("inputText");
const resetButton = document.getElementById("resetBtn");
const toggleButton = document.getElementById("toggleBtn");

// ENUM
const translator = {
  english: "toEnglish",
  morse: "toMorse",
};

resetButton.addEventListener("click", () => {
  decodedOutputElement.textContent = "";
  inputText.value = "";
});

toggleButton.addEventListener("click", () => {
  // Toggle the translation mode with the custom html data attribute
  const currentMode = inputText.dataset.inputType;
  const newMode = currentMode === "toMorse" ? "toEnglish" : "toMorse";
  inputText.setAttribute("data-input-type", newMode);

  //reset the input and output
  decodedOutputElement.textContent = "";
  inputText.value = "";
  inputText.placeholder =
    newMode === "toMorse"
      ? "Translate English to Morse"
      : "Translate Morse to English";
});

// update in realtime via the input event
inputText.addEventListener("input", (event) => {
  // get my custom data attribute.  browser converts kebab-case to camelCase.
  const currentMode = event.target.dataset.inputType;
  let outputText = "";

  try {
    if (currentMode === "toMorse") {
      // takes a dictionary, a spacer for chars and a separator for words
      outputText = translate(inputText.value, morseDictionary, "", " ");
    } else if (currentMode === "toEnglish") {
      outputText = translate(inputText.value, englishDictionary, " ", "");
    }
    decodedOutputElement.textContent = outputText;
  } catch (error) {
    console.error("ERROR: " + error.message);
    decodedOutputElement.textContent =
      "There has been an error - please try again";
  }
});
