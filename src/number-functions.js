// min included, max not included
const getRandomInt = (min, max) => Math.floor((Math.random() * (max - min)) + min);

const isEven = num => (num % 2 === 0);

export { getRandomInt, isEven };

