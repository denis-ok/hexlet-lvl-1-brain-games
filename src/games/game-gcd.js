import { getRandomInt, greatestCommonDiv } from '../number-functions';
import { cons } from '../functions';
import { start } from '../index';

const rules = 'Find the greatest common divisor of given numbers.\n';

const pairQA = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const question = (`${num1} ${num2}`);
  const answer = greatestCommonDiv(num1, num2);
  const pair = cons(question, answer);
  return pair;
};

const launch = () => start(rules, pairQA);

export default launch;

