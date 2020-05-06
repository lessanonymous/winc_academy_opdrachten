const name = prompt('Welkom, wat is je naam?');
alert(`Hey ${name}`);
const min = Number(prompt('wat is het kleinste getal dat je wilt raden'));
const max = Number(prompt('wat is het grootste getal dat je wilt raden'));
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
let remainingGuesses = 5;
let guess;

do {
    guess = prompt(`Voer een nummer in van ${min} tot ${max} om te beginnen met raden...`);
    if (Number(guess) !== randomNumber) {
        remainingGuesses--;
        if (!remainingGuesses) {
            break;
        }
        alert('Dat is niet correct');
        alert(`Je hebt nog ${remainingGuesses} pogingen over`);
    }
} while (randomNumber !== Number(guess) && remainingGuesses);

remainingGuesses ? alert('Gefeliciteerd je hebt gewonnen') : alert('Helaas, je hebt verloren');
alert(`Dag ${name}. Tot de volgende keer`);