import readlineSync from 'readline-sync';
import * as message from './message';
import askName from './askName';
import { car, cdr } from './pairs';

const start = (rules, funcPair, funcCompare) => {
  message.welcome();
  message.rules(rules);
  const userName = askName();
  message.hello(userName);

  if (rules === null) {
    return;
  }

  const game = (pair, rounds, turn) => {
    if (turn > rounds) {
      return message.win(userName);
    }

    const pairQA = pair;
    const question = car(pairQA);
    const trueAnswer = cdr(pairQA);

    console.log(`Question: ${question}`);

    // console.log(`answer: ${trueAnswer}, rounds: ${rounds}, turn: ${turn}`);

    const userAnswer = readlineSync.question('Your Answer: ');

    if (funcCompare(trueAnswer, userAnswer)) {
      message.correct();
      return game(funcPair(), 3, turn + 1);
    }

    message.wrong(userAnswer, trueAnswer);
    return message.tryAgain(userName);
  };

  game(funcPair(), 3, 1);
};

export default start;
