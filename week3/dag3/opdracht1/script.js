const sum = (...numbers) => numbers.reduce((sum, current) => sum + current);

console.log(sum(1, 2, 3, 4));

const sum2 = (num1, num2, num3) => num1 + num2 + num3;

const numbers = [1, 2, 3];

console.log(sum2(...numbers));