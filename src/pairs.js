const cons = (x, y) => f => f(x, y);

const car = p => p((x, y) => x);
const cdr = p => p((x, y) => y);

export { cons, car, cdr };
