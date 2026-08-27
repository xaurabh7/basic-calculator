const display = document.querySelector(".display");

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");

const equalsButton = document.querySelector('[data-action="equals"]');
const allClearButton = document.querySelector(
    '[data-action="all-clear"]'
);
const clearButton = document.querySelector(
    '[data-action="clear"]'
);
const signButton = document.querySelector(
    '[data-action="sign"]'
);
const percentButton = document.querySelector(
    '[data-action="percent"]'
);

let currentNumber = "0";
let previousNumber = null;
let operator = null;
let shouldResetDisplay = false;
let lastAction = null;

function getOperatorSymbol() {
    if (operator === "add") {
        return "+";
    }

    if (operator === "subtract") {
        return "-";
    }

    if (operator === "multiply") {
        return "×";
    }

    if (operator === "divide") {
        return "÷";
    }
}

function calculate(firstNum, secondNum, operation) {

    const first = Number(firstNum);
    const second = Number(secondNum);

    if (operation === "add") {
        return first + second;
    }

    if (operation === "subtract") {
        return first - second;
    }

    if (operation === "multiply") {
        return first * second;
    }

    if (operation === "divide") {
        return first / second;
    }
}

function updateDisplay() {

    if (previousNumber !== null && operator !== null) {

        const symbol = getOperatorSymbol();

        if (shouldResetDisplay) {
            display.textContent = previousNumber + symbol;
        } else {
            display.textContent =
                previousNumber + symbol + currentNumber;
        }

    } else if (previousNumber === null && operator !== null) {

        const symbol = getOperatorSymbol();

        display.textContent = currentNumber + symbol;

    } else {

        display.textContent = currentNumber;
    }
}

function chooseOperator(operation) {

    if (shouldResetDisplay) {

        operator = operation;
        lastAction = "operator";

        updateDisplay();

        return;
    }

    if (
        previousNumber !== null &&
        operator !== null &&
        !shouldResetDisplay
    ) {

        const result = calculate(
            previousNumber,
            currentNumber,
            operator
        );

        if (String(result).replace("-", "").length > 8) {
            showError();
            return;
        }

        currentNumber = String(result);
        previousNumber = currentNumber;

    } else if (previousNumber === null) {

        previousNumber = currentNumber;
    }

    operator = operation;
    shouldResetDisplay = true;
    lastAction = "operator";

    updateDisplay();
}

function toggleSign() {

    if (shouldResetDisplay && operator !== null) {

        currentNumber = "-0";
        shouldResetDisplay = false;
        lastAction = "number";

    } else {

        currentNumber = String(
            Number(currentNumber) * -1
        );
    }

    updateDisplay();
}

function handlePercent() {

    currentNumber = String(
        Number(currentNumber) / 100
    );

    lastAction = "number";

    updateDisplay();
}

function equalHandle() {

    if (previousNumber === null || operator === null) {
        return;
    }

    const ans = calculate(
        previousNumber,
        currentNumber,
        operator
    );

    if (String(ans).replace("-", "").length > 8) {
        showError();
        return;
    }

    currentNumber = String(ans);
    previousNumber = null;
    operator = null;
    shouldResetDisplay = true;
    lastAction = "equals";

    updateDisplay();
}

function clear() {

    if (lastAction === "number") {

        if (previousNumber !== null && operator !== null) {

            currentNumber = previousNumber;
            previousNumber = null;
            operator = null;
            shouldResetDisplay = false;

        } else {

            currentNumber = "0";
        }

    } else if (lastAction === "operator") {

        currentNumber = previousNumber;
        operator = null;
        shouldResetDisplay = false;

    } else if (lastAction === "equals") {

        currentNumber = "0";
    }

    lastAction = null;

    updateDisplay();
}

function allClear() {

    currentNumber = "0";
    previousNumber = null;
    operator = null;
    shouldResetDisplay = false;
    lastAction = null;

    updateDisplay();
}

function showError() {

    currentNumber = "ERR";
    previousNumber = null;
    operator = null;
    shouldResetDisplay = true;

    updateDisplay();
}

numberButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const value = button.dataset.value;

        if (shouldResetDisplay) {

            if (operator !== null) {
                previousNumber = currentNumber;
            }

            if (value === ".") {
                currentNumber = "0.";
            } else {
                currentNumber = value;
            }

            shouldResetDisplay = false;
            lastAction = "number";

            updateDisplay();

            return;
        }

        if (
            value === "." &&
            currentNumber.includes(".")
        ) {
            return;
        }

        if (
            value !== "." &&
            currentNumber.includes(".")
        ) {

            const decimalPart =
                currentNumber.split(".")[1];

            if (decimalPart.length >= 3) {
                return;
            }
        }

        if (value !== ".") {

            const digitCount = currentNumber
                .replace(".", "")
                .replace("-", "")
                .length;

            if (digitCount >= 8) {
                return;
            }
        }

        if (value === ".") {

            if (currentNumber === "0") {

                currentNumber = "0.";

            } else if (currentNumber === "-0") {

                currentNumber = "-0.";

            } else {

                currentNumber += ".";
            }

        } else {

            if (
                currentNumber === "0" ||
                currentNumber === "-0"
            ) {

                currentNumber =
                    currentNumber === "-0"
                        ? "-" + value
                        : value;

            } else {

                currentNumber += value;
            }
        }

        lastAction = "number";

        updateDisplay();
    });
});

operatorButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const operation =
            button.dataset.operation;

        chooseOperator(operation);
    });
});

equalsButton.addEventListener(
    "click",
    equalHandle
);

allClearButton.addEventListener(
    "click",
    allClear
);

clearButton.addEventListener(
    "click",
    clear
);

signButton.addEventListener(
    "click",
    toggleSign
);

percentButton.addEventListener(
    "click",
    handlePercent
);

