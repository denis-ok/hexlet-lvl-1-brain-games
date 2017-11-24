import { getRandomInt, isEven, cons } from '../utils';
import { startGame } from '../index';

const rules = 'Find the greatest common divisor of given numbers.\n';

const greatestCommonDiv = (num1, num2) => {
  if (num1 === 0) { // 1
    return num2;
  }

  if (num2 === 0) { // 1
    return num1;
  }

  if ((num1 === 1) || (num2 === 1)) { // 2
    return 1;
  }

  if (isEven(num1) && isEven(num2)) { // 3
    return 2 * greatestCommonDiv(num1 / 2, num2 / 2);
  }

  if (isEven(num1) && !isEven(num2)) { // 4
    return greatestCommonDiv(num1 / 2, num2);
  }

  if (!isEven(num1) && isEven(num2)) { // 5
    return greatestCommonDiv(num1, num2 / 2);
  }

  if (!isEven(num1) && !isEven(num2) && num2 > num1) { // 6
    return greatestCommonDiv(num1, (num2 - num1) / 2);
  }

  return greatestCommonDiv((num1 - num2) / 2, num2); // 7
};

const pairQA = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const question = (`${num1} ${num2}`);
  const answer = greatestCommonDiv(num1, num2);
  const pair = cons(question, answer);
  return pair;
};

const launch = () => startGame(rules, pairQA);

export default launch;

