import { getRandomInt } from '../number-functions';
import { cons } from '../functions';
import { start } from '../index';

const rules = 'Balance the given number.\n';

const digitsSum = (num) => {
  const numStr = String(num);
  const len = String(num).length;

  const iter = (counter, acc) => {
    if (counter > len - 1) {
      return acc;
    }

    const current = Number(numStr[counter]);
    return iter(counter + 1, acc + current);
  };

  return iter(0, 0);
};

const balanceNum = (num) => {
  if (num < 10) {
    return num;
  }

  const numStr = String(num);
  const len = numStr.length;
  const sum = digitsSum(num);
  const numForFill = Math.floor(sum / len);
  const remaining = sum - (numForFill * len);

  const left = String(numForFill).repeat(len - remaining);
  const right = String(numForFill + 1).repeat(remaining);
  const result = left + right;
  /*
  console.log(`left: ${left}`);
  console.log(`right: ${right}`);
  console.log(`Length: ${len}`);
  console.log(`Digits Sum: ${sum}`);
  console.log(`Num for fill: ${numForFill}`);
  console.log(`remaining: ${remaining}`);
  console.log(`result: ${result}`);
  */
  return result;
};

const pairQA = () => {
  const randomNum = getRandomInt(1, 10000);
  const question = (`${randomNum}`);
  const answer = balanceNum(randomNum);
  const pair = cons(question, answer);
  return pair;
};

const launch = () => start(rules, pairQA);

export default launch;

