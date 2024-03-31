// more code rules
// separator: words are separated by "/"
// space: each character is separated by a single space

import { translateToEnglish } from "../translate.js";

// ERRORS
const invalidInputError = new Error("A string has not been provided"); // be careful how you set this up

// English to morse code
// convert a single character to morse
describe("test cases for a function that translates a single char to morse code", () => {
  it("should return a translated a single char to a morse code string", () => {
    expect(translateToEnglish("h")).toBe("....");
    expect(translateToEnglish("w")).toBe(".--");
    expect(translateToEnglish("1")).toBe(".----");
    expect(translateToEnglish("!")).toBe("-.-.--");
  });

  it("should return the same result for upper and lower case letters", () => {
    expect(translateToEnglish("z")).toEqual(translateToEnglish("Z"));
  });

  it("should replace characters that can't be translated with a #", () => {
    expect(translateToEnglish("<")).toBe("#");
    expect(translateToEnglish("#")).toBe("#");
  });

  it("should return an empty string when the input is an empty string", () => {
    expect(translateToEnglish("")).toBe("");
  });

  it("should correctly translate spaces", () => {
    expect(translateToEnglish(" ")).toBe("/");
  });

  it("should throw an error when the input is not a string", () => {
    expect(() => translateToEnglish(3)).toThrow(invalidInputError);
    expect(() => translateToEnglish(true)).toThrow(invalidInputError);
    expect(() => translateToEnglish({})).toThrow(invalidInputError);
    expect(() => translateToEnglish([])).toThrow(invalidInputError);
  });
});

// Morse code to english
// convert a single code pattern to a english char
xdescribe("test cases for a function that translate a morse code letter to a single english character", () => {
  it("should return a translated a single morse code block to a char", () => {
    expect(translateToMorse("....")).toBe("H");
    expect(translateToMorse(".--")).toBe("W");
    expect(translateToMorse("--...")).toBe("7");
    expect(translateToMorse("..--..")).toBe("?");
  });

  it("should return an empty string when the input is an empty string", () => {
    expect(translateToMorse("").toBe(""));
  });

  it("should correctly translate a ' ' to be a new english char", () => {
    expect(translateToMorse(" ")).toBe("");
  });

  it("should correctly translate a " / " to a space", () => {
    expect(translateToMorse("/")).toBe(" ");
  });

  it("should throw an error when the input is not a string", () => {
    expect(() => translateToMorse(3)).toThrow(invalidInputError);
    expect(() => translateToMorse(true)).toThrow(invalidInputError);
    expect(() => translateToMorse({})).toThrow(invalidInputError);
    expect(() => translateToMorse([])).toThrow(invalidInputError);
  });
});

// convert a sentance to morse code
// describe("test cases for a function that returns a translated string", () => {
//   const invalidInputError = new Error(
//     "Invalid input: function expects a string parameter."
//   );

//   const undefinedError = new Error("A match could not be found - undefined");
//   const nullError = new Error("A match could not be found - null");

//   it("should return a morse code pattern", () => {
//     expect(translateToMorse("hello")).toBe(".... . .-.. .-.. ---");
//     expect(translateToMorse("world")).toBe(".-- --- .-. .-.. -..");
//   });

//   it("should return a translated english sentance to a morse code string", () => {
//     expect(translateToMorse("hello world")).toBe(
//       ".... . .-.. .-.. --- / .-- --- .-. .-.. -.."
//     );
//     expect(translateToMorse("i love morse code")).toBe(
//       ".. / .-.. --- ...- . / -- --- .-. ... . / -.-. --- -.. ."
//     );
//   });

//   it("should return a translated numbers to a morse code string", () => {
//     expect(translateToMorse("2024")).toBe("..--- ----- ..--- ....-");
//     expect(translateToMorse("2012")).toBe("..--- ----- .---- ..---");
//   });

//   it("should return a translated numbers to a morse code string", () => {
//     expect(translateToMorse("/!?")).toBe("-..-. -.-.-- ..--..");
//     expect(translateToMorse("$$&&")).toBe("...-..- ...-..- .-... .-...");
//   });

//   it("should return a translated mixed letters, numbers and special characters to a morse code string", () => {
//     expect(translateToMorse("I am 21")).toBe(".. / .- -- / ..--- .----");
//     expect(translateToMorse("whoo whoo!!! ")).toBe(
//       ".-- .... --- --- / .-- .... --- --- -.-.-- -.-.-- -.-.--"
//     );
//   });

//   it("should return the same result for upper and lower case letters", () => {
//     const morseForHello = ".... . .-.. .-.. ---";
//     expect(translateToMorse("hello")).toBe(morseForHello);
//     expect(translateToMorse("HELLO")).toBe(morseForHello);
//   });

//   it("should replace characters that can't be translated with a #", () => {
//     expect(translateToMorse("<tag>")).toBe("# - .- --. #");
//     expect(translateToMorse("#id")).toBe("# .. -..");
//   });

//   it("should return an empty string when the input is an empty string", () => {
//     expect(translateToMorse("").toBe(""));
//   });

//   it("should correctly translate spaces", () => {
//     expect(translateToMorse(" ")).toBe("/");
//   });

//   it("should ignore leading and trailing whitespace", () => {
//     expect(translateToMorse(" hello ")).toBe(".... . .-.. .-.. ---");
//   });

//   it("should throw an error when the input is not a string", () => {
//     expect(() => translateToMorse(123)).toThrow(invalidInputError);
//     expect(() => translateToMorse(true)).toThrow(invalidInputError);
//     expect(() => translateToMorse({})).toThrow(invalidInputError);
//     expect(() => translateToMorse([])).toThrow(invalidInputError);
//   });

//   it("should throw an error when the input is not a string", () => {
//     expect(() => translateToMorse(null)).toThrow(nullError);
//   });

//   it("should throw an error when the input is undefined", () => {
//     expect(() => translateToMorse(undefined)).toThrow(undefinedError);
//   });
// });
