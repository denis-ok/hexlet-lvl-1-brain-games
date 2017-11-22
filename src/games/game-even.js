import { getRandomInt, isEven } from '../number-functions';
import { cons } from '../pairs';
import start from '../index';

const rules = 'Answer "yes" if number even otherwise answer "no".\n';

const pairQA = () => {
  const num = getRandomInt(1, 100);
  const answer = isEven(num) ? 'Yes' : 'No';
  const pair = cons(num, answer);
  return pair;
};

const compare = (answer, userAnswer) => {
  const a1 = answer.toUpperCase();
  const a2 = userAnswer.toUpperCase();

  if (a1 === a2) {
    return true;
  }
  return false;
};

const launch = () => start(rules, pairQA, compare);
export default launch;
