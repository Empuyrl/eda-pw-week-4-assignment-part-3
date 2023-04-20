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

function listItems(basket) {
    for (i = 0; i < basket.length; i++) {
        console.log(basket[i]);
    }
}
console.log(listItems(['noodles', 'pasta', 'alfredo', 'spices', 'toast']));
//each is separate at basket[i], unsure why they aren't showing on 47.

function isFull() {
    if(basket.length < maxItems) {
        return false;
    } else {
        return true;
    }
}
console.log(isFull());

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

function empty() {
    basket = [];
   }
   console.log('The basket is now empty', empty([]));
   
// had to move to last or it effected how removeItem was showing in log