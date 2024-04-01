# signalCipher

SignalCipher: Your Morse Code Companion

SignalCipher is a web application that allows users to translate text to Morse code and vice versa. It provides a simple and intuitive interface for decoding and encoding messages using Morse code.

<div align="center">

  <img src="./brief/homepage.png" alt="Homepage Screenshot" style="border: 1px solid black">

</div>
 
 <br>
Decode your text at: https://morse.staceyfanner.com

## About the Web App

A fun Morse Code Translator using Vanilla JS, CSS and HTML.

## Usage

You can:

- Enter text in the input field to translate it to Morse code.
- Click the switch input to change the translation language
- Enter Morse code in the input field to translate it to text.
- Click the reset button to clear the input field.

## Planning

### User stories

- I want to translate English to Morse code
- I want to translate Morse code to English
- I want to reset the input

## Key learning highlights

**TDD**:

SignalCipher was my first project where I embraced a true Test-Driven Development approach. By starting with the tests, I had a clear understanding of the requirements for each language translation, such as Morse code's word separation using a specific separator (in my case, '/'). This process allowed me to iteratively develop separate functions to handle translation—one for converting text to Morse code and another for translating Morse code back to English. It was a valuable learning experience and to some degree reduce smelly code.

<div align="center">

  <img src="./brief/tests.png" alt="Testing suit Screenshot" style="border: 1px solid black">

</div>

## Challenges

**Event Listener Events**:

Initially, I opted to utilize the "keydown" event listener on the textarea to facilitate real-time translation. However, this approach introduced a variety of issues, necessitating the creation of a separate function to handle key events such as Backspace and Delete. Recognizing the limitations of this approach, I took a step back and conducted further research into alternative event types.

Upon investigation, I discovered that the "input" event proved to be a far more suitable choice. Unlike "keydown," the "input" event is triggered whenever the content of the input element changes, regardless of the source (e.g., keyboard input, paste operation). Adopting this event significantly reduced complexity, as it effectively captured all relevant changes, thereby streamlining the translation process.

## Technologies Used

<div align="center">

![HTML5](https://img.shields.io/badge/-HTML5-05122A?style=flat&logo=html5)
![CSS3](https://img.shields.io/badge/-CSS3-05122A?style=flat&logo=css3)
![Sass](https://img.shields.io/badge/-Sass-05122A?style=flat&logo=sass)
![JavaScript](https://img.shields.io/badge/-JavaScript-05122A?style=flat&logo=javascript)
![Git](https://img.shields.io/badge/-Git-05122A?style=flat&logo=git)
![GitHub](https://img.shields.io/badge/-GitHub-05122A?style=flat&logo=github)
![Jest](https://img.shields.io/badge/-Jest-05122A?style=flat&logo=jest&logoColor=C21325)

</div>

</div>
