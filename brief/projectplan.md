Project plan
User requirements

1. Take user inputs
2. Data validation - client side
   User is update if incorrect inputs given
   \*Ux message
3. Translate to appropriate language
4. Display translated results
   • User is given an error message if something goes wrong with the translation

Understanding Morse code

1. what cant be translated
2. how to deal with spaces (use a none translatable character
3. what about numbers

Testing plan

1.Things go right

- translating function (returning a translated string)
  Words to Morse
  Example 1,2
  Morse to words
  Example 1,2
  Spaces / white is correctly handled ( words into sentances)

- displaying function / returning the right dom element ?
  Need to check how to do this
  Maybe check to see if the return matches why it should

Is the right input being captured
Letters
Morse code

2. Things go wrong with in puts

User entering the wrong data

- incorrect inputs
  \*What cant be translated eg special characters

* throw a relevant error

- blank inputs (undefined)
  • throw a relevant error

The wrong data being sent to the tadlate function
Non strings eg blank in puts
Special characters

The wrong element being updated

Actual code
Letters to Morse code
Starter thoughts

Store in an object instead of an array
Key: value
Characters: Morse

Initial a let translatefwordstrintg

User input will be a string

Capture data via a form submit button

Clean data
*For spaces add +
When splitting to array
*What is the split character
*split in words then I'll need to be split into characters
*what if I just split in charac as I know each words will be seperated by a +

Translate chars

- could I use a reduce here
- look at word elements do I need to nest into characters etc depending on the + approach
  For each char - find the matching key or value and then return the opposite
  If + return plus
  \*Is it match that produces the actually result rather than a Boolean
  • Is there a find value ?
  • for in loop ?

Add translated chars to translatefwordstrintg or setance depending on approach
\*Do I need a word and sentence string ?

Replace + with white space to create words

Return translatedstring

Ux

Header

Forms x 2 (letters and Morse)

- label
- input
- submit

Could have switch button which toggles between the different displays
Switch one for hidden to show an vs a versa

Display a results paragraph

Error paragraph to update the user if something goes wrong (could this be a modal look at bootstrap)

Dont know Morse code - starter dictionary P test Morse code to letters
Think light / dark mode
Morse vs not
