import { SELECTORS } from "./utils/constants.js";
import { $ } from "./utils/dom.js";
import { handleCalculator } from "./handlers/handleCalculator.js";

const calculator = () => {
  const $calculator = $(SELECTORS.CALC);
  $calculator.addEventListener("click", handleCalculator);
};

window.addEventListener("DOMContentLoaded", () => calculator());
