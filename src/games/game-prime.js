import { getRandomInt, cons } from '../utils';
import { startGame } from '../index';

const rules = 'Is this number prime?\n';

const isPrime = (num) => {
  if (num <= 1 || num === 2) {
    return false;
  }
  if (num % 2 === 0) {
    return false;
  }

  const iter = (current) => {
    if (current > Math.sqrt(num)) {
      return true;
    }
    if (num % current === 0) {
      return false;
    }

    return iter(current + 2);
  };

  return iter(3);
};

const pairQA = () => {
  const numRnd = getRandomInt(1, 100);
  const question = (`${numRnd}`);
  const answer = isPrime(numRnd) ? 'yes' : 'no';
  return cons(question, answer);
};

const launch = () => startGame(rules, pairQA);

export default launch;
