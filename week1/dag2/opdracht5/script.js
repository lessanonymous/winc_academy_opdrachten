const age = 17;
const isFemale = false;
const driverStatus = 'drunk';
const name = 'Jack';
const totalAmount = 50;

if (age >= 18) {
    console.log('Kom binnen!');
} else {
    console.log(`Kom terug wanneer je 18 bent.`);
}

if (isFemale) {
    console.log('Gratis entree op onze ladiesnight!');
} else {
    console.log('Wij zien je graag verschijnen in onze kroeg!');
}

if (driverStatus === 'bob') {
    console.log('Je kunt veilig naar huis rijden.');
} else {
    console.log('Wij zullen een taxi voor je bellen om je naar huis te brengen.');
}

if (age >= 18 && age <= 25) {
    console.log('50% korting op bier!');
} else {
    console.log('Geen korting voor jou helaas!');
}

if (name === 'Bram' || name === 'Sarah') {
    console.log('Bierje!');
} else {
    console.log('Helaas, geen gratis biertje voor jou!');
}

if (totalAmount > 100) {
    console.log('Champagne!');
} else if (totalAmount > 50) {
    console.log('Nachos!');
} else if (totalAmount > 25) {
    console.log('Bitterballen!');
}