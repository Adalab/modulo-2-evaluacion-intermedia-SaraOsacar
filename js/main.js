'use strict';

const button = document.querySelector('.js_button');
const quantity = document.querySelector('.js_quantity');
const userNumberSelect = document.querySelector('.js_usernumber');
const result = document.querySelector('.js_result');


let amount = 50; 

function getRandomNumber(max) { 
  return Math.ceil(Math.random() * max);
}



const userNumber = userNumberSelect.Value;
console.log(userNumber);






//FUNCIONES

const handleClickButton = (event) => {
    event.preventDefault()
}



//EVENTO
button.addEventListener('click', handleClickButton);



