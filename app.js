const container = document.getElementsByClassName('container');
const displayScreen = document.getElementsByClassName('display');
const displayNum = document.getElementsByTagName('h3');
const keys = document.getElementsByClassName('key');
const numberKeys = document.querySelectorAll('numbers');
const plusKey = document.getElementById('add');
const minusKey = document.getElementById('minus');
const multiplyKey = document.getElementById('multiply');
const divideKey = document.getElementById('divide');
const clear = document.getElementById('clear');
const equals = document.getElementById('equals');
const decimal = document.getElementById('decimal');
const percent = document.getElementById('percent');



container.addEventListener('click', function(){ container.style.background = 'lightblue'});
console.log(displayNum.innerHTML = 'hello');







let add = (num1, num2) => num1 + num2;
let minus = (num1, num2) => num1 - num2;
let multiply = (num1, num2) => num1 * num2;
let divide = (num1, num2) => num1 / num2;




console.log(add(2, 2));
console.log(minus(85, 17));
console.log(multiply(3, 21));
console.log(divide(7, 3));

function operate(operator) {
    return operator;
}

// console.log(operate(add(2, 3)))