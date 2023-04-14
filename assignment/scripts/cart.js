console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
console.log(basket);

function addItem(item) {
basket.push(item);
return true
}
console.log(addItem);

function listItems(basket) {
    for (i = 0; i < basket.length; i++) {
        console.log(basket[i]);
    }
}
console.log(listItems);

console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem('apples'));
console.log(`Basket is now ${basket}`);

console.log(`Basket is ${basket}`);
console.log('Adding caramel (expect true)', addItem('caramel'));
console.log(`Basket is now ${basket}`);