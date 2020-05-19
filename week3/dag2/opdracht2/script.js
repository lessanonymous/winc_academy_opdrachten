const huiswerkMaken = (vak, callback) => {
    console.log(`Ok, ok, ik ga nu mijn ${vak} huiswerk maken`);
    setTimeout(callback, 1000);
};

const klaarMetHuiswerk = () => {
    console.log(`Kijk Paps/Mams, ik ben klaar met mijn huiswerk!`);
};

huiswerkMaken('Wiskunde', klaarMetHuiswerk);