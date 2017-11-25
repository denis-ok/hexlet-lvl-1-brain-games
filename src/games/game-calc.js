import { getRandomInt, cons } from '../utils';
import { startGame } from '../index';

const rules = 'What is the result of the expression?';

const getRandomOperator = () => {
  const numToOperator = (num) => {
    switch (num) {
      case 1:
        return '+';

      case 2:
        return '-';

      default:
        return '*';
    }
  };
  return numToOperator(getRandomInt(1, 4));
};

const calc = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;

    case '-':
      return num1 - num2;

    default:
      return num1 * num2;
  }
};

const pairQA = () => {
  const num1 = getRandomInt(1, 11);
  const num2 = getRandomInt(1, 11);
  const randomOp = getRandomOperator();
  const expression = (`${num1} ${randomOp} ${num2}`);
  const answer = calc(num1, num2, randomOp);
  const pair = cons(expression, answer);
  return pair;
};

const launch = () => startGame(rules, pairQA);

export default launch;

