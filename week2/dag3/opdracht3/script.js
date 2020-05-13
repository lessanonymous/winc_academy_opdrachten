const superheroes = [
    { name: "Batman", alter_ego: "Bruce Wayne" },
    { name: "Superman", alter_ego: "Clark Kent" },
    { name: "Spiderman", alter_ego: "Peter Parker" }]

// Hier komt jouw functie
const findSpiderMan = superheroes => superheroes.find(superhero => superhero.name === 'Spiderman');

console.log(findSpiderMan(superheroes));
// Find Spiderman
// result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

const doubleArrayValues = numbers => numbers.map(number => number * 2);

console.log(doubleArrayValues([1, 2, 3]));
// result should be [2, 4, 6]

const containsNumberBiggerThan10 = numbers => numbers.some(number => number > 10);

console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]));
// result should be true

const isItalyInTheGreat7 = countries => countries.includes('Italy');

console.log(isItalyInTheGreat7(['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States']));
// result should be true

const tenfold = numbers => numbers.map(number => number * 10);

console.log(tenfold([1, 4, 3, 6, 9, 7, 11]));
// result should be [10, 40, 30, 60, 90, 70, 110]

const isBelow100 = numbers => numbers.every(number => number < 100);

console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98]))
// result should be: false

const bigSum = numbers => numbers.reduce((total, current) => total + current);

console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))
// result should be 1118