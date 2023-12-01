console.log("hello world!");

//---------Seleccionar elementos
const title = document.getElementById("txt");
//console.log(title);

const image = document.getElementsByClassName("logo");
//console.log(image[1]);

const tags = document.getElementsByTagName("section");
//console.log(tags[6]);

const elem = document.querySelectorAll(".logo")
//console.log(elem);


//--------Crear elemento y agregar attribute
const parent = document.querySelector(".products");
const newElem = document.createElement("section");
newElem.setAttribute("class","new");

parent.append(newElem);


//------Attributes
const logo = document.querySelector(".logo");
//logo.setAttribute("src", "img/mexico.jpeg");
console.log(logo.getAttribute("src"));
console.log(logo.hasAttribute("src"));
//logo.removeAttribute("src");

if(logo.hasAttribute("src")) {
    //alert("tiene src!")
}


//-------CSS Classes
const parent2 = document.querySelector(".products");
const parent3 = parent2.firstElementChild;
const price = parent3.lastElementChild;

price.classList.add("red");
price.classList.replace("red","blue");
price.classList.remove("blue");

//----- Modificar Texto
const button = document.getElementsByTagName("button");
console.log(button[0].innerText);

button[0].innerText = "BUY";

//-----Modificar Style
console.log(button[0].style);
//button[0].style.backgroundColor = "gray";


//--------Eventos 

const elemButton = button[0];
elemButton.addEventListener('click', () => {
    elemButton.classList.toggle("toggle");
});

const iconRemove = document.querySelectorAll(".remove");
console.log(iconRemove);

iconRemove.forEach(elem => {
    elem.addEventListener("click", () => {
        const elemParent = elem.parentElement;
        elemParent.remove();
    })
});

const header = document.querySelector("header");
const cartIcon = header.lastElementChild;
const cart = document.querySelector(".cart");

cartIcon.addEventListener("click", () => {
    cart.classList.toggle("show");
});

const product = document.querySelector(".mouse");

product.addEventListener("mouseenter", () => {
    product.style.opacity = ".5";
})

product.addEventListener("mouseleave", () => {
    product.style.opacity = "1";
})



