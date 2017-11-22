import { getRandomInt } from '../number-functions';
import { cons } from '../pairs';
import start from '../index';

const rules = 'What is the result of the expression?\n';

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

const rndOperand = () => getRandomInt(1, 11);
const rndOperator = () => numToOperator(getRandomInt(1, 4));

const calc = (op1, op2, operatorStr) => {
  switch (operatorStr) {
    case '+':
      return op1 + op2;

    case '-':
      return op1 - op2;

    default:
      return op1 * op2;
  }
};

const pairQA = () => {
  const op1 = rndOperand();
  const op2 = rndOperand();
  const oper = rndOperator();
  const expression = (`${op1} ${oper} ${op2}`);
  const answer = calc(op1, op2, oper);
  const pair = cons(expression, answer);
  return pair;
};

const compare = (answer, userAnswer) => answer === Number(userAnswer);

const launch = () => start(rules, pairQA, compare);
export default launch;
