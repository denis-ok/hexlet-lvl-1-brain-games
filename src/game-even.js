import readlineSync from 'readline-sync';
import askName from './askName';
import { numRnd, isEven } from './number-functions';
import * as message from './message';

message.welcome();
message.brainEvenStart();

const userName = askName();

const answerToBoolean = (str) => {
  if (str.toUpperCase() === 'YES') {
    return true;
  }
  if (str.toUpperCase() === 'NO') {
    return false;
  }
  return null;
};

const start = (rounds) => {
  const game = (num, turn, wins) => {
    if (turn > rounds) {
      if (wins === rounds) {
        return console.log(`Congratulations, ${userName}! You win! :)`);
      }
      return console.log('Sorry, you lose! :(');
    }

    console.log(`Question: ${num}`);

    const answer = readlineSync.question('Your Answer: ');
    const compare = isEven(num) === answerToBoolean(answer);

    if (compare === true) {
      console.log('Correct!\n');
      return game(numRnd(), turn + 1, wins + 1);
    }

    console.log(`"${answer}" is wrong answer! :( Correct answer was ${answerToBoolean(answer) === true ? '"No"' : '"Yes"'}.`);
    console.log(`Lets try again, ${userName}!\n`);
    return game(numRnd(), turn + 1, wins);
  };

  game(numRnd(), 1, 0);
};

export default start;
