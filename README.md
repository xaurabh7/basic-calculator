# Basic Calculator

A simple and interactive calculator built using **HTML, CSS, and Vanilla JavaScript**. This project implements the core functionality of a calculator while handling input limits, arithmetic operations, clearing operations, errors, and decimal calculations.

## Features

* Displays the current number entered or the result of the last operation.
* Supports the following arithmetic operations:

  * Addition `+`
  * Subtraction `-`
  * Multiplication `*`
  * Division `/`
  * Equals `=`
* Supports digits from `0–9`.
* Supports numbers up to **8 digits**.
* Ignores additional digit input after the 8-digit limit.
* `C` button clears the current number or reverses the last operation.
* `AC` button clears all calculator state and resets the display to `0`.
* Displays `ERR` when an operation produces a value exceeding the 8-digit limit.
* Supports changing the sign of the current number using `+/-`.
* Supports decimal numbers.
* Allows floating-point calculations up to **3 decimal places**.
* Preserves the required decimal precision during calculations.

## Technologies Used

* **HTML5** — Structure and calculator interface
* **CSS3** — Layout, styling, and responsive design
* **JavaScript (Vanilla JS)** — Calculator logic, state management, input handling, and arithmetic operations

## Calculator Logic

The calculator keeps track of:

* The number currently being entered
* The previous number
* The selected arithmetic operator
* Whether the display should be reset for the next number
* The current calculator state and errors

The JavaScript handles user input and performs calculations when an operator or the equals button is pressed.

## Input Rules

### Maximum Digits

Numbers can contain a maximum of **8 digits**.

For example:

```text
12345678  → Valid
123456789 → Ignored
```

### Decimal Numbers

Decimal values are supported with up to **3 decimal places**.

```text
12.5
3.141
99.999
```

### Error Handling

If a calculation produces a value that exceeds the calculator's 8-digit limit, the display shows:

```text
ERR
```

## Controls

| Button | Function                               |
| ------ | -------------------------------------- |
| `0–9`  | Enter digits                           |
| `+`    | Addition                               |
| `-`    | Subtraction                            |
| `*`    | Multiplication                         |
| `/`    | Division                               |
| `=`    | Calculate result                       |
| `C`    | Clear the current entry/last operation |
| `AC`   | Clear the entire calculator            |
| `+/-`  | Change the sign                        |
| `.`    | Enter decimal values                   |

## Project Structure

```text
calculator/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## How to Run

1. Clone or download the repository.
2. Open the project folder in VS Code.
3. Open `index.html` in your browser.

Alternatively, use the **Live Server** extension in VS Code for a better development experience.

## What I Practiced

This project helped me practice:

* DOM selection and manipulation
* Event listeners
* Handling button clicks
* JavaScript variables and state
* Conditional logic
* Functions
* Arithmetic operations
* Input validation
* Error handling
* Working with strings and numbers
* Managing calculator state
* Handling decimal calculations
* Building an interactive UI with Vanilla JavaScript

## Future Improvements

Possible improvements include:

* Keyboard support
* Calculation history
* Backspace button
* Percentage `%` operation
* More advanced mathematical operations
* Improved mobile responsiveness
* Dark/light theme switching

## License

This project is created for **learning and practice purposes**.

