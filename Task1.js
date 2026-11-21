//Task 1
const prompt = require('prompt-sync')();

let groceryItem = prompt("Enter an item to add to the shopping list: ");
let shoppingList = [];

function addItem(groceryItem) {
    shoppingList.push(groceryItem);
    console.log(groceryItem, "is added to the list");
}

function removeLastItem() {
    shoppingList.pop;
}

function displayList() {
    console.log("Your shopping list is: ");
    for (item of shoppingList) {
        console.log(item);
    }
}

addItem(groceryItem);
removeLastItem();
displayList();