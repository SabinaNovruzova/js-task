let navElements = document.querySelectorAll(".nav-el");
let basketContainer = document.querySelector(".basketContainer");
let basket = document.querySelector(".basket");
let totalPriceDiv = document.querySelector(".totalPrice");
let basketFruit = document.querySelector(".basketFruit");

navElements.forEach(x => {
    x.addEventListener("click", function() {
        if (x.getAttribute("data-target") == "Basket") {
            basketContainer.classList.remove("hide");
        } else if (x.getAttribute("data-target") == "Calculation") {
            totalPriceDiv.classList.remove("hide");
        }
    })
})

let fruitType = null;
let totalPrice = 0.00;

let orange1 = document.querySelector(".orange1");
let orange2 = document.querySelector(".orange2");
let orange3 = document.querySelector(".orange3");
let dragItem;
orange1.ondragstart = function() {
    dragItem = this;
}
orange2.ondragstart = function() {
    dragItem = this;
}
orange3.ondragstart = function() {
    dragItem = this;
}


let apple1 = document.querySelector(".apple1");
let apple2 = document.querySelector(".apple2");
let apple3 = document.querySelector(".apple3");


apple1.ondragstart = function() {
    dragItem = this;
}
apple2.ondragstart = function() {
    dragItem = this;
}
apple3.ondragstart = function() {
    dragItem = this;
}

let cherry1 = document.querySelector(".cherry1");
let cherry2 = document.querySelector(".cherry2");
let cherry3 = document.querySelector(".cherry3");


cherry1.ondragstart = function() {
    dragItem = this;
}
cherry2.ondragstart = function() {
    dragItem = this;
}
cherry3.ondragstart = function() {
    dragItem = this;
}


basket.ondragover = function(e) {
    e.preventDefault();
}

basket.ondrop = function() {
    if (fruitType == dragItem.getAttribute("data-id") || !fruitType) {
        totalPriceDiv.classList.add("hide")
        basket.appendChild(dragItem);
        fruitType = dragItem.getAttribute("data-id");
        totalPrice += Number(dragItem.children[2].children[0].textContent.split(":")[1])
        totalPriceDiv.textContent = "( Total price: " + totalPrice + " )"
        basketFruit.textContent = fruitType

    }
}