//Task 3
let shoppingList = ["Banana"];

const groceryItem = document.getElementById("gItem");
const addButton = document.getElementById("addButton");
const shoppingCart = document.getElementById("groceryList");
const removeButton = document.getElementById("removeButton");

addButton.addEventListener("click", function(){
    const newItem = groceryItem.value;
    if (newItem.trim() === ""){
        return;
    }

    const groceryItemsList = shoppingCart.querySelectorAll("li");
    for (let i = 0; i < groceryItemsList.length; i++) {
        if (groceryItemsList[i].textContent.trim().toUpperCase() === newItem.trim().toUpperCase()) {
            alert("Item already in list");
            return;
        }
    }
    const newGroceryListItem = document.createElement("li");
    newGroceryListItem.textContent = newItem;
    shoppingCart.appendChild(newGroceryListItem);
    addItem(newItem);
    groceryItem.value = ""
})

removeButton.addEventListener("click", function(){
    const currentItems = shoppingCart.querySelectorAll("li");
    if (currentItems.length === 0) {
        alert("List is empty");
        return;
    }   
    removeLastItem();
})

function addItem(groceryItem) {
    shoppingList.push(groceryItem);
}

function removeLastItem() {
    if (shoppingCart.lastElementChild) {
        shoppingCart.removeChild(shoppingCart.lastElementChild);
        shoppingList.pop();
    }
}

function displayList() {
    console.log("Your shopping list is");
    for (item of shoppingList) {
        console.log(item);
    }
}