console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5;
console.log(basket);
console.log(maxItems);

 function addItem(item) {
    if (isFull() === false){
    basket.push(item);
    return true; }
   else { 
     return false;
    }
 } 
 

function listItems(array) {
    for (i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
 
console.log(`Basket is`, basket);
console.log('Adding noodles (expect true)', addItem('noddles'));
console.log('Basket is', basket);

console.log('Basket is', basket);
console.log('Adding shrimp (expect true)', addItem('shrimp'));
console.log('Basket is', basket);

console.log('Basket is', basket);
console.log('Adding alfredo (expect true)', addItem('alfredo'));
console.log('Basket is', basket);

console.log('Basket is', basket);
console.log('Adding spices (expect true)', addItem('spices'));
console.log('Basket is', basket);

console.log('Basket is', basket);
console.log('Adding toast (expect true)', addItem('toast'));
console.log('Basket is', basket);

console.log('Basket is', basket);
console.log('Adding peaches (expect false)', addItem('peaches'));
console.log('Basket is', basket);

function isFull() {
    if(basket.length < maxItems) {
        return false;
    } else {
        return true;
    }
}
console.log(isFull());

function empty() {
 basket = [];
}
console.log('The basket is now empty');

function removeItem(item) {
    let index = basket.indexOf(item);
    if (index !== -1) {
        basket.splice(index, 1);
    } else {
        return basket
    }
}
console.log(removeItem('toast'));
console.log(basket);
