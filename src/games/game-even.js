import readlineSync from 'readline-sync';
import { getRandomInt, isEven } from '../number-functions';
import * as message from '../message';

const answerToBoolean = (str) => {
  if (str.toUpperCase() === 'YES') {
    return true;
  }
  if (str.toUpperCase() === 'NO') {
    return false;
  }
  return null;
};

const start = (name, rounds) => {
  const game = (num, turn, wins) => {
    if (turn > rounds) {
      return message.win(name);
    }

    message.question(num);

    const answer = readlineSync.question('Your Answer: ');
    const compare = isEven(num) === answerToBoolean(answer);
    const correctAnswer = isEven(num) ? '"Yes"' : '"No"';

    if (compare === true) {
      message.correct();
      return game(getRandomInt(1, 100), turn + 1, wins + 1);
    }

    console.log(`"${answer}" is wrong answer! :( Correct answer was ${correctAnswer}.`);
    return message.tryAgain(name);
  };

  game(getRandomInt(1, 100), 1, 0);
};

export default start;
