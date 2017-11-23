const getRandomInt = (min, max) => Math.floor((Math.random() * (max - min)) + min);
// min included, max not included

const isEven = num => (num % 2 === 0);

const greatestCommonDiv = (num1, num2) => {
  if (num1 === 0) { // 1
    return num2;
  }

  if (num2 === 0) { // 1
    return num1;
  }

  if ((num1 === 1) || (num2 === 1)) { // 2
    return 1;
  }

  if (isEven(num1) && isEven(num2)) { // 3
    return 2 * greatestCommonDiv(num1 / 2, num2 / 2);
  }

  if (isEven(num1) && !isEven(num2)) { // 4
    return greatestCommonDiv(num1 / 2, num2);
  }

  if (!isEven(num1) && isEven(num2)) { // 5
    return greatestCommonDiv(num1, num2 / 2);
  }

  if (!isEven(num1) && !isEven(num2) && num2 > num1) { // 6
    return greatestCommonDiv(num1, (num2 - num1) / 2);
  }

  return greatestCommonDiv((num1 - num2) / 2, num2); // 7
};

const cons = (x, y) => f => f(x, y);
const car = p => p(x => x);
const cdr = p => p((x, y) => y);

export { getRandomInt, isEven, greatestCommonDiv, cons, car, cdr };

