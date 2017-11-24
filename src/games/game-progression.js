import { getRandomInt, cons } from '../utils';
import { startGame } from '../index';

const rules = 'What number is missing in this progression?\n';

const getArifmProgWithSkip = (initNum, step, position) => {
  const quantity = 10;
  const iter = (counter, current, acc) => {
    if (counter > quantity) {
      return acc;
    }
    if (counter === position) {
      return iter(counter + 1, current + step, `${acc}.. `);
    }

    return iter(counter + 1, current + step, `${acc}${String(current)} `);
  };

  return iter(1, initNum, '');
};

const getNthNumOfProg = (initNum, step, position) => initNum + ((position - 1) * step);

const pairQA = () => {
  const initNum = getRandomInt(1, 10);
  const step = getRandomInt(1, 10);
  const position = 6;

  const question = getArifmProgWithSkip(initNum, step, position);
  const answer = getNthNumOfProg(initNum, step, position);

  return cons(question, answer);
};

const launch = () => startGame(rules, pairQA);

export default launch;

