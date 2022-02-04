console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form submitted sucessfully!")
}


let form = document.querySelector('form#contact');
let duck = document.querySelector("img")
let colorBtn = document.querySelector("#color");
let place = document.querySelector("#place")
let ritual = document.querySelector("#ritual")


duck.addEventListener('mouseover',()=>{alert("Your Smart!")})
colorBtn.addEventListener('click',()=>{alert("My favorite Color is Midnight Blue!")})
place.addEventListener('click',()=>{alert("No place like Home!")})
ritual.addEventListener('click',()=>{alert("Divination is my favorite ritual!")})
form.addEventListener('submit', handleSubmit);