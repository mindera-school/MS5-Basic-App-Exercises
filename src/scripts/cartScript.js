const cartBtns = document.getElementsByClassName("shopping-cart");
const userInventory = document.getElementById("userInventoryList");
const inventoryBtn = document.getElementById("inventoryBtn");
let timeToExpire = 86400000;
let inventory = [];
let simplifiedInventory = [];

class StorageObject {
    constructor(payload, expireDate) {
        this.payload = payload;
        this.expireDate = expireDate;
    }
};

class Item {
    constructor(imageSrc, nameOfItem, price) {
        this.imageSrc = imageSrc;
        this.nameOfItem = nameOfItem;
        this.price = price;
        this.quantity = 1;
    }
};

const quackman = new Item("storeImgs/0B34F818-81BD-4EEC-90BF-A01F47B8AC57.jpeg", "QuackMan", "17.99");
const quacktopus = new Item("storeImgs/23206NEW_grande.webp", "Quacktopus", "18.99");
const classyDuck = new Item("storeImgs/31001_white_hot_safety_bath_ducky.jpeg", "ClassyDuck", "4.99");
const quickit = new Item("storeImgs/63d35d04fbc549b7a482b7eb45ba3ca7xl.webp", "Quickit", "17.99");
const quackuaman = new Item("storeImgs/dc-comics-paladone-aquaman-rubber-duck.jpeg", "Quackuaman", "5.99");
const quackespeare = new Item("storeImgs/IMG_0524.jpeg", "Quackespeare", "6.99");
const duckyliberty = new Item("storeImgs/liberty-rubber-duck-leaning.jpeg", "Ducky Liberty", "8.99");
const duckyoda = new Item("storeImgs/joda-rubber-duck.jpg.webp", "Duckyoda", "18.99");
const duckStorage = [];

window.addEventListener("load", () => {
    duckStorage.push(quackman, quacktopus, classyDuck, quickit, quackuaman, quackespeare, duckyliberty, duckyoda);
});

inventoryBtn.addEventListener("click", () => {
    generateInventory();
});

//generates an li element for each item in the user
function generateInventory() {
    inventory = localStorageGetter("inventory");
    userInventory.innerHTML = "";
    if(inventory.length === 0){
        const emptyInventoryTitle = document.createElement("h3");
        emptyInventoryTitle.innerHTML = "Your cart is empty 😔"
        userInventory.appendChild(emptyInventoryTitle);
        return;
    }
    const inventoryTitle = document.createElement("h3");
    inventoryTitle.innerHTML = "Your cart:"
    const newList = document.createElement("ul");
    for (let i = 0; i < inventory.length; i++) {
        const item = document.createElement("li");
        const imgOfItem = document.createElement("img");
        imgOfItem.src = inventory[i].imageSrc;
        const descSpan = document.createElement("span");
        const priceSpan = document.createElement("span");
        const quantitySpan = document.createElement("span");
        descSpan.innerHTML = inventory[i].nameOfItem;
        priceSpan.innerHTML = inventory[i].price+"$";
        quantitySpan.innerHTML = "Quant: " + inventory[i].quantity;
        item.appendChild(imgOfItem);
        item.appendChild(descSpan);
        item.appendChild(priceSpan);
        item.appendChild(quantitySpan);
        newList.appendChild(item);
    }
    const checkoutPrice = document.createElement("div");
    checkoutPrice.setAttribute("id","totalCheckout");
    checkoutPrice.innerHTML = "TOTAL: " + sumCheckout() +"$";
    const buyBtn = document.createElement("button");
    buyBtn.innerHTML = "Buy";
    userInventory.appendChild(inventoryTitle);
    userInventory.appendChild(newList);
    userInventory.appendChild(checkoutPrice);
    userInventory.appendChild(buyBtn);
};

//sums the value of all items in the inventory and returns it
function sumCheckout(){
    let finalValue = 0;
    for (let i = 0; i < inventory.length; i++) {
        finalValue +=(inventory[i].price * inventory[i].quantity);
    }
    return finalValue;
}

//checks if the item is already part of the user inventory
function checkIfInInventory(item){
    for (let i = 0; i < inventory.length; i++) {
        if(item.nameOfItem === inventory[i].nameOfItem){
            return true;
        }
    }
    return false;
};

//finds the index of an item in the user inventory
function findIndexInInventory(item){
    for (let i = 0; i < inventory.length; i++) {
        if(item.nameOfItem === inventory[i].nameOfItem){
            return i;
        }
    }
};

//adds the object to be added to the inventory for each cart button. If the item already exists it only adds quantity in inventory of said item
for (let i = 0; i < cartBtns.length; i++) {
    cartBtns[i].addEventListener("click", () => {
        const itemForThisBtn = duckStorage[i];
        if(checkIfInInventory(itemForThisBtn)){
           const indexInInventory = findIndexInInventory(itemForThisBtn);
           inventory[indexInInventory].quantity +=1;
        }else{
            console.log("new");
            inventory.push(itemForThisBtn);
        }
        localStorageSetter("inventory", inventory);
    });
};

function localStorageSetter(id, obj) {
    const date = Date.now() + timeToExpire;
    const stringifiedObj = JSON.stringify(new StorageObject(obj, date));
    localStorage.setItem(id, stringifiedObj);
};

function localStorageGetter(id) {
    const objComing = JSON.parse(localStorage.getItem(id));
    if(!objComing){
        return 0;
    }
    const currentTime = Date.now();
    let objReturn = null;
    if (currentTime < objComing.expireDate) {
        objReturn = objComing.payload;
    }
    return objReturn;
};

function localStorageRemover(id) {
    localStorage.removeItem(id);
};




