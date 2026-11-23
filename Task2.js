//Task 2
const prompt = require('prompt-sync')();
let shoppingList = ["Hummus", "Toileteries", "Orange", "Chicken"];

function addItem() {
    let groceryItem = prompt("Enter an item to add to the shopping list: ");
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

function searchItem(){
    let sItem = prompt("Enter an item to search the shopping list: ");
    
    let itemMatch = shoppingList.filter(item => item.trim().toLowerCase() === sItem.trim().toLowerCase()); 
    
    if (itemMatch.length > 0) {
        console.log("Item in list!");
    } 
    else {
        console.log("Item does not exist in the cart!");
    }
}

function displayList() {
    console.log("Your shopping list is");
    for (item of shoppingList) {
        console.log(item);
    }
}

//addItem();
//displayList();
searchItem();