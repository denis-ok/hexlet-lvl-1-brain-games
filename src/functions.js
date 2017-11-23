import readlineSync from 'readline-sync';

const askName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  return name;
};

const askAnswer = () => {
  const userAnswer = readlineSync.question('Your Answer: ');
  return userAnswer;
};

const cons = (x, y) => f => f(x, y);
const car = p => p(x => x);
const cdr = p => p((x, y) => y);

export { askName, askAnswer, cons, car, cdr };

