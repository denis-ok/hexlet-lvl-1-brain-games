const getRandomInt = (min, max) => Math.floor((Math.random() * (max - min)) + min);
// min included, max not included

const isEven = num => (num % 2 === 0);

const cons = (x, y) => f => f(x, y);
const car = p => p(x => x);
const cdr = p => p((x, y) => y);

export { getRandomInt, isEven, cons, car, cdr };

