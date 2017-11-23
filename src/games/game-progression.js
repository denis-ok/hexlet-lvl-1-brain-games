import { getRandomInt, cons, car, cdr } from '../utils';
import { start } from '../index';

const rules = 'What number is missing in this progression?\n';

const getArifmProgWithSkip = (initNum, step, quantity) => {
  let skippedNum;
  const skipPlace = 5;

  const iter = (counter, current, acc) => {
    if (counter >= quantity) {
      return cons(acc, skippedNum);
    }

    if (counter === skipPlace) {
      skippedNum = current;
      return iter(counter + 1, current + step, `${acc} ..`);
    }

    return iter(counter + 1, current + step, `${acc} ${String(current)}`);
  };

  return iter(1, initNum + step, String(initNum));
};

const pairQA = () => {
  const rndProg = getArifmProgWithSkip(getRandomInt(1, 10), getRandomInt(1, 10), 10);
  const question = car(rndProg);
  const answer = cdr(rndProg);
  const pair = cons(question, answer);
  return pair;
};

const launch = () => start(rules, pairQA);

export default launch;

