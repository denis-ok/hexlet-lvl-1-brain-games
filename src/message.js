const welcome = () => console.log('Welcome to the Brain Games!');
const hello = name => console.log(`Hello, ${name}!\n`);

const brainEvenStart = () => console.log('Answer "yes" if number even otherwise answer "no".\n');

const win = name => console.log(`Congratulations, ${name}! You win! :)`);
const lose = () => console.log('Sorry, you lose! :(');
const tryAgain = name => console.log(`Lets try again, ${name}!\n`);

const correct = () => console.log('Correct!\n');

const question = str => console.log(`Question: ${str}`);

export { welcome, hello, win, lose, correct, question, brainEvenStart, tryAgain };
