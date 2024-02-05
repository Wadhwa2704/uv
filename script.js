// Author: BAANI
// Date: 04-02-24
// Graded Learning Activity 1

// Writing full name
const writename = "Baani Baani";
const heading = document.createElement("h1");

heading.textContent = writename;
heading.style.textAlign = "center";
heading.style.color = "#A9A9A9";

// Appending full name to the body
document.body.appendChild(heading);

const body = document.body;

const input1 = createInputElement("number", "input1");
const input2 = createInputElement("number", "input2");

const button = createButtonElement("Sum");
button.addEventListener("click", calculateSum);

// Appending inputs and button to the body
appendElementsToBody([input1, input2, button]);

// Calculating sum
function calculateSum() {
    const number1 = parseFloat(input1.value) || 0;
    const number2 = parseFloat(input2.value) || 0;
    const total = number1 + number2;

    const displaySum = createParagraphElement(`Sum: ${total}`);
    body.appendChild(displaySum);
}

// Validating input
const validateInput = () => {
    try {
        validateNumber(input1.value);
        validateNumber(input2.value);
    } catch (error) {
        showError(error);
    }
};

const validateNumber = (value) => {
    const parsedValue = parseFloat(value);
    if (isNaN(parsedValue)) {
        throw "Your input must be a number";
    }
    return parsedValue;
};

// Showing error
const showError = (errorMessage) => {
    const errorMsg = createParagraphElement(errorMessage);
    errorMsg.style.color = "red";
    body.appendChild(errorMsg);

    applyErrorStyle([input1, input2]);
};

button.addEventListener("click", validateInput);

// Helper functions
function createInputElement(type, id) {
    const inputElement = document.createElement("input");
    inputElement.type = type;
    inputElement.id = id;
    return inputElement;
}

function createButtonElement(textContent) {
    const buttonElement = document.createElement("button");
    buttonElement.textContent = textContent;
    return buttonElement;
}

function createParagraphElement(textContent) {
    const paragraphElement = document.createElement("p");
    paragraphElement.textContent = textContent;
    return paragraphElement;
}

function appendElementToBody(element) {
    body.appendChild(element);
}

function appendElementsToBody(elements) {
    elements.forEach((element) => appendElementToBody(element));
}

function applyErrorStyle(elements) {
    elements.forEach((element) => {
        element.style.border = "1px solid red";
    });
}
