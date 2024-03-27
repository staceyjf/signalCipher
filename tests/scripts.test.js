// more code rules
// separator: words are separated by "/"
// space: each character is separated by a single space i

// English to morse code
// convert a single character to morse
describe("test cases for a function that translates a single char to morse code", () => {
  const nullOrUndefinedError = new Error(
    "Invalid input: a null and an undefined parameter was provided."
  );

  it("should return a translated a single char to a morse code string", () => {
    expect(charToMorse("h")).toBe("....");
    expect(charToMorse("w")).toBe(".--");
  });

  it("should throw a 'The char cannot be found' Error if a null or undefined parameter is given", () => {
    expect(() => {
      charToMorse(null);
    }).toThrow(nullOrUndefinedError);
  });

  it("should throw a 'The char cannot be found' Error if a null or undefined parameter is given", () => {
    expect(() => {
      charToMorse(undefined);
    }).toThrow(nullOrUndefinedError);
  });
});

// convert a sentance to morse code
describe("test cases for a function that returns a translated string", () => {
  const invalidInputError = new Error(
    "Invalid input: function expects a string parameter."
  );

  const undefinedError = new Error("A match could not be found - undefined");
  const nullError = new Error("A match could not be found - null");

  it("should return a morse code pattern", () => {
    expect(translateToMorse("hello")).toBe(".... . .-.. .-.. ---");
    expect(translateToMorse("world")).toBe(".-- --- .-. .-.. -..");
  });

  it("should return a translated english sentance to a morse code string", () => {
    expect(charToMorse("hello world")).toBe(
      ".... . .-.. .-.. --- / .-- --- .-. .-.. -.."
    );
    expect(charToMorse("i love morse code")).toBe(
      ".. / .-.. --- ...- . / -- --- .-. ... . / -.-. --- -.. ."
    );
  });

  it("should return a translated numbers to a morse code string", () => {
    expect(charToMorse("2024")).toBe("..--- ----- ..--- ....-");
    expect(charToMorse("2012")).toBe("..--- ----- .---- ..---");
  });

  it("should return a translated numbers to a morse code string", () => {
    expect(charToMorse("/!?")).toBe("-..-. -.-.-- ..--..");
    expect(charToMorse("$$&&")).toBe("...-..- ...-..- .-... .-...");
  });

  it("should return a translated mixed letters, numbers and special characters to a morse code string", () => {
    expect(charToMorse("I am 21")).toBe(".. / .- -- / ..--- .----");
    expect(charToMorse("whoo whoo!!! ")).toBe(
      ".-- .... --- --- / .-- .... --- --- -.-.-- -.-.-- -.-.--"
    );
  });

  it("should return the same result for upper and lower case letters", () => {
    const morseForHello = ".... . .-.. .-.. ---";
    expect(charToMorse("hello")).toBe(morseForHello);
    expect(charToMorse("HELLO")).toBe(morseForHello);
  });

  it("should replace characters that can't be translated with a #", () => {
    expect(charToMorse("<tag>")).toBe("# - .- --. #");
    expect(charToMorse("#id")).toBe("# .. -..");
  });

  it("should return an empty string when the input is an empty string", () => {
    expect(charToMorse("").toBe(""));
  });

  it("should correctly translate spaces", () => {
    expect(charToMorse(" ")).toBe("/");
  });

  it("should ignore leading and trailing whitespace", () => {
    expect(charToMorse(" hello ")).toBe(".... . .-.. .-.. ---");
  });

  it("should throw an error when the input is not a string", () => {
    expect(() => charToMorse(123)).toThrow(invalidInputError);
    expect(() => charToMorse(true)).toThrow(invalidInputError);
    expect(() => charToMorse({})).toThrow(invalidInputError);
    expect(() => charToMorse([])).toThrow(invalidInputError);
  });

  it("should throw an error when the input is not a string", () => {
    expect(() => charToMorse(null)).toThrow(nullError);
  });

  it("should throw an error when the input is undefined", () => {
    expect(() => charToMorse(undefined)).toThrow(undefinedError);
  });
});

//
