const age = 17;
const isFemale = false;
const driverStatus = 'drunk';

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