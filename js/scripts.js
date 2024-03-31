import { translateToEnglish, translateToMorse } from "./translate.js";

// NODES
const decodedOutputElement = document.getElementById("decodedOutput");
const inputText = document.getElementById("inputText");
const resetButton = document.getElementById("resetBtn");
const toggleButton = document.getElementById("toggleBtn");

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
      outputText = inputText.value
        .split("")
        .map((char) => translateToMorse(char) + " ") // separator is handled in translateToMorse
        .join("");
    } else if (currentMode === "toEnglish") {
      outputText = inputText.value
        .split(" ")
        .map((morseChar) => translateToEnglish(morseChar)) // separator is handled in translateToMorse
        .join("");
    }
    decodedOutputElement.textContent = outputText;
  } catch (error) {
    console.error("ERROR: " + error.message);
    decodedOutputElement.textContent =
      "There has been an error - please try again";
  }
});
