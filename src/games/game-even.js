import { getRandomInt, cons } from '../utils';
import { startGame } from '../index';

const rules = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => (num % 2 === 0);

const pairQA = () => {
  const num = getRandomInt(1, 100);
  const answer = isEven(num) ? 'Yes' : 'No';
  const pair = cons(num, answer);
  return pair;
};

const launch = () => startGame(rules, pairQA);

export default launch;
