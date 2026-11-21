//Task 2
const prompt = require('prompt-sync')();

let shoppingList = ["Hummus", "Toileteries", "Orange", "Chicken"];
let groceryItem = prompt("Enter an item to add to the shopping list: ");

function addItem(groceryItem) {
    let inList = false;
    for (let i = 0; i < shoppingList.length; i++) {
        if (shoppingList[i] === groceryItem) {
            inList = true;
            break;
        }
    }
    if(inList){
        console.log("Item already in list");
    }
    else{
        shoppingList.push(groceryItem);
        console.log(groceryItem, "is added to the list")
    }
}

function displayList() {
    console.log("Your shopping list is");
    for (item of shoppingList) {
        console.log(item);
    }
}

addItem(groceryItem);
displayList();