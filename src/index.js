import readlineSync from 'readline-sync';
import { car, cdr } from './utils';

const askName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  return name;
};

const askAnswer = () => {
  const userAnswer = readlineSync.question('Your Answer: ');
  return userAnswer;
};

const sayWelcome = () => console.log('Welcome to the Brain Games!');
const showRules = str => console.log(str);
const sayYouWin = name => console.log(`Congratulations, ${name}! You win! :)`);
const sayTryAgain = name => console.log(`Lets try again, ${name}!\n`);
const sayCorrect = () => console.log('Correct!\n');
const showCorrectAnswer = (userAnswer, correctAnswer) => console.log(`"${userAnswer}" is wrong answer! :( Correct answer was ${correctAnswer}.`);
const showQuestion = str => console.log(`Question: ${str}`);

const isSameAnswer = (answer1, answer2) => {
  const a1 = String(answer1).toUpperCase();
  const a2 = String(answer2).toUpperCase();
  const compare = a1 === a2;
  return compare;
};

const startGame = (rules, funcPairQA) => {
  sayWelcome();
  showRules(rules);
  const userName = askName();

  const game = (pairQA, rounds, turn) => {
    if (turn > rounds) {
      return sayYouWin(userName);
    }

    const question = car(pairQA);
    const trueAnswer = cdr(pairQA);

    showQuestion(question);
    // console.log(`Answer: ${trueAnswer}, rounds: ${rounds}, turn: ${turn}`);

    const userAnswer = askAnswer();

    if (isSameAnswer(trueAnswer, userAnswer)) {
      sayCorrect();
      return game(funcPairQA(), 3, turn + 1);
    }

    showCorrectAnswer(userAnswer, trueAnswer);
    return sayTryAgain(userName);
  };

  game(funcPairQA(), 3, 1);
};

const showWelcomeText = () => {
  sayWelcome();
  askName();
};

export { startGame, showWelcomeText };
