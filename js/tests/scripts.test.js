// morse code rules
// separator: words are separated by "/"
// space: each character is separated by a single space

import { translate } from "../translate.js";
import { morseDictionary, englishDictionary } from "../dictionary.js";

// ERRORS
const invalidInputError = new Error("A string has not been provided"); // be careful how you set this up

// English to morse code
// convert a single character to morse
describe("test cases for a function that translates a single char to morse code", () => {
  it("should return a translated a single char to a morse code string", () => {
    expect(translate("h", morseDictionary, "", " ")).toBe("....");
    expect(translate("w", morseDictionary, "", " ")).toBe(".--");
    expect(translate("1", morseDictionary, "", " ")).toBe(".----");
    expect(translate("!", morseDictionary, "", " ")).toBe("-.-.--");
  });

  it("should return the same result for upper and lower case letters", () => {
    expect(translate("z", morseDictionary, "", " ")).toEqual(
      translate("Z", morseDictionary, "", " ")
    );
  });

  it("should replace characters that can't be translated with a #", () => {
    expect(translate("<", morseDictionary, "", " ")).toBe("#");
    expect(translate("#", morseDictionary, "", " ")).toBe("#");
  });

  it("should return an empty string when the input is an empty string", () => {
    expect(translate("", morseDictionary, "", " ")).toBe("");
  });

  it("should correctly translate spaces", () => {
    expect(translate(" ", morseDictionary, "", " ")).toBe("/");
  });

  it("should throw an error when the input is not a string", () => {
    expect(() => translate(3, morseDictionary, "", " ")).toThrow(
      invalidInputError
    );
    expect(() => translate(true, morseDictionary, "", " ")).toThrow(
      invalidInputError
    );
    expect(() => translate({}, morseDictionary, "", " ")).toThrow(
      invalidInputError
    );
    expect(() => translate([], morseDictionary, "", " ")).toThrow(
      invalidInputError
    );
  });
});

// Morse code to english
// convert a single code pattern to a english char
describe("test cases for a function that translate a morse code letter to a single english character", () => {
  it("should return a translated a single morse code block to a char", () => {
    expect(translate("....", englishDictionary, " ", "")).toBe("H");
    expect(translate(".--", englishDictionary, " ", "")).toBe("W");
    expect(translate("--...", englishDictionary, " ", "")).toBe("7");
    expect(translate("..--..", englishDictionary, " ", "")).toBe("?");
  });

  it("should return an empty string when the input is an empty string", () => {
    expect(translate("", englishDictionary, " ", "")).toBe("");
  });

  it("should correctly translate a ' ' to be a new english char", () => {
    expect(translate("..--.. ..--..", englishDictionary, " ", "")).toBe("??");
  });

  it("should correctly translate a ' / ' to a space", () => {
    expect(translate("/", englishDictionary, " ", "")).toBe(" ");
  });

  it("should throw an error when the input is not a string", () => {
    expect(() => translate(3, englishDictionary, " ", "")).toThrow(
      invalidInputError
    );
    expect(() => translate(true, englishDictionary, " ", "")).toThrow(
      invalidInputError
    );
    expect(() => translate({}, englishDictionary, " ", "")).toThrow(
      invalidInputError
    );
    expect(() => translate([], englishDictionary, " ", "")).toThrow(
      invalidInputError
    );
  });
});
