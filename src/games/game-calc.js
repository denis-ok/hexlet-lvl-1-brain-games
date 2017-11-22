import readlineSync from 'readline-sync';
import { getRandomInt } from '../number-functions';
import * as message from '../message';

const numToOperator = (num) => {
  switch (num) {
    case 1:
      return '+';

    case 2:
      return '-';

    default:
      return '*';
  }
};

const calc = (op1, op2, operatorStr) => {
  switch (operatorStr) {
    case '+':
      return op1 + op2;

    case '-':
      return op1 - op2;

    default:
      return op1 * op2;
  }
};

const rndOperand = () => getRandomInt(1, 11);
const rndOperator = () => numToOperator(getRandomInt(1, 4));

const start = (name, rounds) => {
  const game = (op1, op2, operation, turn) => {
    if (turn > rounds) {
      return message.win(name);
    }

    message.question(`${op1} ${operation} ${op2}`);
    const userAnswer = readlineSync.question('Your Answer: ');

    const result = calc(op1, op2, operation);
    const compare = result === Number(userAnswer);
    const correctAnswer = result;

    if (compare === true) {
      message.correct();
      return game(rndOperand(), rndOperand(), rndOperator(), turn + 1);
    }

    message.wrong(userAnswer, correctAnswer);
    return message.tryAgain(name);
  };

  game(rndOperand(), rndOperand(), rndOperator(), 1);
};

export default start;
