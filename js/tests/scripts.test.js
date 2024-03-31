// more code rules
// separator: words are separated by "/"
// space: each character is separated by a single space

import { translateToEnglish, translateToMorse } from "../translate.js";

// ERRORS
const invalidInputError = new Error("A string has not been provided"); // be careful how you set this up

// English to morse code
// convert a single character to morse
describe("test cases for a function that translates a single char to morse code", () => {
  it("should return a translated a single char to a morse code string", () => {
    expect(translateToMorse("h")).toBe("....");
    expect(translateToMorse("w")).toBe(".--");
    expect(translateToMorse("1")).toBe(".----");
    expect(translateToMorse("!")).toBe("-.-.--");
  });

  it("should return the same result for upper and lower case letters", () => {
    expect(translateToMorse("z")).toEqual(translateToMorse("Z"));
  });

  it("should replace characters that can't be translated with a #", () => {
    expect(translateToMorse("<")).toBe("#");
    expect(translateToMorse("#")).toBe("#");
  });

  it("should return an empty string when the input is an empty string", () => {
    expect(translateToMorse("")).toBe("");
  });

  it("should correctly translate spaces", () => {
    expect(translateToMorse(" ")).toBe("/");
  });

  it("should throw an error when the input is not a string", () => {
    expect(() => translateToMorse(3)).toThrow(invalidInputError);
    expect(() => translateToMorse(true)).toThrow(invalidInputError);
    expect(() => translateToMorse({})).toThrow(invalidInputError);
    expect(() => translateToMorse([])).toThrow(invalidInputError);
  });
});

// Morse code to english
// convert a single code pattern to a english char
describe("test cases for a function that translate a morse code letter to a single english character", () => {
  it("should return a translated a single morse code block to a char", () => {
    expect(translateToEnglish("....")).toBe("H");
    expect(translateToEnglish(".--")).toBe("W");
    expect(translateToEnglish("--...")).toBe("7");
    expect(translateToEnglish("..--..")).toBe("?");
  });

  it("should return an empty string when the input is an empty string", () => {
    expect(translateToEnglish("")).toBe("");
  });

  it("should correctly translate a ' ' to be a new english char", () => {
    expect(translateToEnglish(" ")).toBe("");
  });

  it("should correctly translate a " / " to a space", () => {
    expect(translateToEnglish("/")).toBe(" ");
  });

  it("should throw an error when the input is not a string", () => {
    expect(() => translateToEnglish(3)).toThrow(invalidInputError);
    expect(() => translateToEnglish(true)).toThrow(invalidInputError);
    expect(() => translateToEnglish({})).toThrow(invalidInputError);
    expect(() => translateToEnglish([])).toThrow(invalidInputError);
  });
});
