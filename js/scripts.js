import { translateToEnglish, translateToMorse } from "./translate.js";

// NODES
const decodedOutputElement = document.getElementById("decodedOutput");
const inputText = document.getElementById("inputText");
const resetButton = document.getElementById("resetBtn");

// reset
resetButton.addEventListener("click", () => {
  decodedOutputElement.textContent = "";
  inputText.value = "";
});

document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const inputTextValue = inputText.value;
    let outputText = "";

    if (event.target.id === "toMorseBtn") {
      outputText = inputTextValue
        .split("")
        .map((char) => translateToMorse(char))
        .join("");
    } else if (event.target.id === "toEnglishBtn") {
      outputText = inputTextValue
        .split(" ")
        .map((morseChar) => translateToEnglish(morseChar))
        .join("");
    }
    decodedOutputElement.textContent = outputText;
  });
});
