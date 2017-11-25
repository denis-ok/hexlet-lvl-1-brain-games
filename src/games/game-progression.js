import { getRandomInt, cons } from '../utils';
import { startGame } from '../index';

const rules = 'What number is missing in this progression?';

const getNthNumOfProg = (initNum, step, position) => initNum + ((position - 1) * step);

const getArifmProgWithSkip = (initNum, step, position) => { // iterative process
  const quantity = 10;

  const iter = (counter, acc) => {
    const current = getNthNumOfProg(initNum, step, counter);
    if (counter === position) {
      return iter(counter + 1, `${acc}.. `);
    }
    if (counter > quantity) {
      return acc;
    }
    return iter(counter + 1, `${acc}${current} `);
  };

  return iter(1, '');
};

/*
const getArifmProgWithSkip1 = (initNum, step, position, counter) => { // recursive process
  const quantity = 10;
  const current = getNthNumOfProg(initNum, step, counter);

  if (counter === position) {
    return `.. ${getArifmProgWithSkip1(initNum, step, position, counter + 1)}`;
  }
  if (counter === quantity) {
    return current;
  }

  return `${String(current)} ${getArifmProgWithSkip1(initNum, step, position, counter + 1)}`;
};
*/

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

