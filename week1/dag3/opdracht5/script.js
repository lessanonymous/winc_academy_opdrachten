const colors = ['yellow', 'blue', 'red', 'orange'];

const colorsObject = {
    colors1: colors,
    colors2: colors,
    colors3: colors,
    colors4: colors,
    colors5: colors
}

let i = 0;

while (i < colors.length) {
    console.log(colors[i]);
    i++;
}

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

colors.forEach(color => console.log(color));

Object.keys(colorsObject).forEach((key) => console.log(`key: ${key}`));

// 1. 3 regels
// 2. 1 regel
// 3. makkelijk toegang tot index en value
// 4. Ja
