// English to morse code
describe("test cases for a function that translates a string", () => {
  const invalidDataTypeError = new Error(
    "Only standard letters and numbers can be translated"
  );

  const invalidParameterAmountError = new Error(
    "This function needs one parameter"
  );

  it("should return a translated english string to a morse code string", () => {
    expect(translateToMorse("hello")).toBe(".... . .-.. .-.. ---");
    expect(translateToMorse("hello world")).toBe(
      ".... . .-.. .-.. --- / .-- --- .-. .-.. -.."
    );
    expect(translateToMorse("I am 21")).toBe(".. / .- -- / ..--- .----");
  });

  it("should throw a `Only standard letters and numbers can be translated` error if a character other than standard characters and numbers are entered", () => {
    expect(() => {
      translateToMorse("nology", "apple");
    }).toThrow(invalidDataTypeError);
    expect(() => {
      translateToMorse(12, "not valid");
    }).toThrow(invalidDataTypeError);
    expect(() => {
      translateToMorse(false, 1);
    }).toThrow(invalidDataTypeError);
    expect(() => {
      translateToMorse("12", 1);
    }).toThrow(invalidDataTypeError);
  });

  it("should throw 'This function needs one parameter", () => {
    expect(() => {
      translateToMorse();
    }).toThrow(invalidParameterAmountError);
    expect(() => {
      translateToMorse(1);
    }).toThrow(invalidParameterAmountError);
    expect(() => {
      translateToMorse("1");
    });
  });
});
