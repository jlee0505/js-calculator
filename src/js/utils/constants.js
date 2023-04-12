export const MAX_DIGIT_LENGTH = 3;
export const INITIAL_NUM_COUNT = 0;
export const INITIAL_VALUE = "0";

const ADD = "+";
const SUB = "-";
const MUL = "X";
const DIV = "/";
const EQUAL = "=";
const AC = "AC";
export const OPERATORS = { ADD, SUB, MUL, DIV, EQUAL, AC };

export const SELECTORS = {
  CALC: ".calculator",
  TOTAL: "#total",
  DIGIT: ".digit",
  OPERATION: ".operation",
  MODIFIER: ".modifier",
};

export const ERROR_MESSAGES = {
  INVALID_DIGIT_LENGTH: `숫자는 최대 ${MAX_DIGIT_LENGTH}자리까지만 입력 가능합니다!`,
  INVALID_INPUT: "숫자를 먼저 입력해 주세요!",
};
