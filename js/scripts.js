console.log("scripts is working");

import { translateToEnglish, translateToMorse } from "./translate.js";

// NODES
const toMorseBtn = document.getElementById("toMorseBtn");
const toEnglishBtn = document.getElementById("toEnglishBtn");
let translatedResults = document.querySelectorAll("#translator__results");

document.querySelectorAll("textarea").forEach((input) => {
  input.addEventListener("keyup", (event) => {
    //   console.log(event.target.id); //textarea id
    //   console.log(event.target.value); //chars
    //   console.log(event.key); //keys

    // DO I NEED SOME ERROR HANDLING

    //TODO: FIX THIS - move this to first
    if (event.key === "Backspace") console.log(" need to deal with backspace");

    if (event.target.id === "englishInput") translateToEnglish(event.key);

    if (event.target.id === "morseInput") translateToMorse(event.key);
  });
});
