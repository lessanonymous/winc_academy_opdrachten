// makeCheeseSandwich
//  add slice of bread.
//  add slice of cheese.
//  add slice of bread.

const makeCheeseSandwich = () => {
    console.log('add slice of bread.');
    console.log('add slice of cheese.');
    console.log('add slice of bread.');
};

makeCheeseSandwich();

// function declaration(arrow notation)
const makeSandwich = topping => console.log(`There you go, a sandwich with ${topping}`);

// function call
makeSandwich('Cheese');
makeSandwich('Chicken');

const calculateDiscountedPrice = (totalAmount, discount) => Math.round(totalAmount - discount);

console.log(calculateDiscountedPrice(120, 23.45));

const newCalculateDiscountedPrice = (totalAmount, discount) => {
    if (totalAmount > 25) {
        return Math.round(totalAmount - discount);
    }
    return totalAmount;
};

console.log(newCalculateDiscountedPrice(120, 23.45));
console.log(newCalculateDiscountedPrice(20, 23.45));