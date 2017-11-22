const welcome = () => console.log('Welcome to the Brain Games!');
const hello = name => console.log(`Hello, ${name}!\n`);

const rules = (str) => {
  if (str === null) {
    return;
  }
  console.log(str);
};

const win = name => console.log(`Congratulations, ${name}! You win! :)`);
const lose = () => console.log('Sorry, you lose! :(');
const tryAgain = name => console.log(`Lets try again, ${name}!\n`);

const correct = () => console.log('Correct!\n');
const wrong = (userAnswer, correctAnswer) => console.log(`"${userAnswer}" is wrong answer! :( Correct answer was ${correctAnswer}.`);

const question = str => console.log(`Question: ${str}`);

export { welcome, hello, win, lose, correct, wrong, question, rules, tryAgain };
