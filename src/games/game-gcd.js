import { getRandomInt, cons } from '../utils';
import { startGame } from '../index';

const rules = 'Find the greatest common divisor of given numbers.\n';

const greatestCommonDiv = (num1, num2) => {
  if (num2) {
    return greatestCommonDiv(num2, num1 % num2);
  }
  return num1;
};

const pairQA = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const question = (`${num1} ${num2}`);
  const answer = greatestCommonDiv(num1, num2);
  return cons(question, answer);
};

const launch = () => startGame(rules, pairQA);

export default launch;

