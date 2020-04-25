/* eslint-disable no-debugger */
// jQuery
import 'jquery';

// PopperJS
import 'popper.js';

// Bootstrap 4
import 'bootstrap';

// Material Design Bootstrap
// import '../vendors/mdb/js/mdb';
// import 'mdbootstrap';

// Fontawesome 5
import './fa';

import Calculator from './modules/calculator';

import {
  numberButtons,
  operationButtons,
  equalsButton,
  deleteButton,
  allClearButton,
  previousOperandTextElement,
  currentOperandTextElement,
} from './modules/calculatorConsts';

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.switchOperation(button.innerText);
    calculator.updateDisplay();
  });
});

equalsButton.addEventListener('click', () => {
  calculator.stateIsEqual = true;
  calculator.compute();
  calculator.updateDisplay();
});

allClearButton.addEventListener('click', () => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteButton.addEventListener('click', () => {
  calculator.delete();
  calculator.updateDisplay();
});
