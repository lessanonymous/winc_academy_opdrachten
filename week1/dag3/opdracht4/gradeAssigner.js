const assignGrade = number => {
    if (number <= 100 && number >= 90) {
        return 'A'
    } else if (number < 90 && number >= 80) {
        return 'B'
    } else if (number < 80 && number >= 70) {
        return 'C'
    } else if (number < 70 && number >= 60) {
        return 'D'
    } else if (number < 60 && number >= 50) {
        return 'E'
    } else {
        return 'F'
    }
};

for (i = 60; i <= 100; i++) {
    console.log(`For ${i}, you got a ${assignGrade(i)}.`);
}