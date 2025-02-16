import { OPERATORS } from "../utils/constants.js";

const [ADD, SUB, MUL, DIV] = Object.values(OPERATORS);

const operators = {
  [ADD]: (num1, num2) => Number(num1) + Number(num2),
  [SUB]: (num1, num2) => Number(num1) - Number(num2),
  [MUL]: (num1, num2) => Number(num1) * Number(num2),
  [DIV]: (num1, num2) => (Number(num1) / Number(num2)).toFixed(2),
};

export const operation = ({ num1, num2, operator }) => {
  if (!operators[operator]) {
    throw new Error(`Invalid operator: ${operator}`);
  }
  return operators[operator](num1, num2);
};
