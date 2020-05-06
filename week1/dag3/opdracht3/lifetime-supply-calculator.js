const calculateSupply = (age, amountPerDay) => console.log(`You will need ${Math.round((100 - age) * 365 * amountPerDay)} to last you until the ripe old age of 100`);

calculateSupply(34, 15.35);
calculateSupply(24, 34.77);
calculateSupply(45, 25.25);