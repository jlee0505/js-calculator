import {
  INITIAL_VALUE,
  ERROR_MESSAGES,
  Operators,
} from "../utils/constants.js";
import { SELECTORS, INITIAL_NUM_COUNT } from "../utils/constants.js";
import { $ } from "../utils/dom.js";
import { operation } from "./operation.js";

let numberCount = INITIAL_NUM_COUNT;

export const handleCalculator = ({ target }) => {
  switch (target.classList[0]) {
    case "digit":
      handleDigit(target.textContent);
      return;
    case "operation":
      handleOperation(target.textContent);
      return;
    case "modifier":
      handleModifier();
      return;
  }
};

const handleDigit = (digit) => {
  if (numberCount >= 3) {
    alert(ERROR_MESSAGES.INVALID_DIGIT_LENGTH);
    throw new Error(ERROR_MESSAGES.INVALID_DIGIT_LENGTH);
  }

  const $total = $(SELECTORS.TOTAL);
  if ($total.textContent === INITIAL_VALUE) {
    $total.textContent = digit;
    numberCount++;
  } else {
    $total.textContent += digit;
    numberCount++;
  }
};

const handleOperation = (operator) => {
  if ($(SELECTORS.TOTAL).textContent === INITIAL_VALUE) {
    alert(ERROR_MESSAGES.INVALID_INPUT);
    throw new Error(ERROR_MESSAGES.INVALID_DIGIT_LENGTH);
  }

  if (operator === Operators.EQUAL) {
    getResult();
    numberCount = INITIAL_NUM_COUNT;
    return;
  }
  $(SELECTORS.TOTAL).innerText += operator;

  return;
};

const handleModifier = () => {
  $(TOTAL).textContent = INITIAL_VALUE;
  numberCount = INITIAL_NUM_COUNT;
};

const getResult = () => {
  const operator = [...$(SELECTORS.TOTAL).textContent].find((e) => isNaN(e));

  const [num1, num2] = $(SELECTORS.TOTAL).textContent.split(operator);
  $(SELECTORS.TOTAL).textContent = operation({ num1, num2, operator });
};
