function add(a,b) {
    console.log("You just added");
    return a + b;
    

}

function subtract(a,b) {
    console.log("You just subtract");
    return a - b;

}

function multiply(a,b) {
    console.log("You just multiply");
    return a * b;
}

function divide(a, b) {
    console.log("You just divide");
    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
        case "add" :
            return add(a,b);
            break;
        case "subtract" :
            return subtract(a,b);
            break;
        case "multiply" :
            return multiply(a,b);
            break;
        case "divide" :
            return divide(a,b);
            break;
    }

}
let keypadNumber = document.querySelectorAll(".keypad-number");
let number = document.getElementById('number');
let operators = document.querySelectorAll(".keypad-right");
let clear = document.getElementById('clear-button');
let displayValue;
let secondValue;
let operatorSign;
//display number pressed and cap number to 14
function displayNumber() {
    if (number.textContent.length > 13) {
        return;
    };
    
    if (number.textContent.includes(".")) {
        if (this.textContent === ".")  {
            return;
        }
    };
    
    console.log(typeof number.textContent);
    
    number.textContent += this.textContent; // add the number pressed
    displayValue = number.textContent; //store number into another variable
}

function clearDisplay() {
    displayValue = number.textContent;
    number.textContent = "";
    console.log(displayValue);
}

function displaySign() {
    if (operatorSign) {  //if user already pressed a operator sign, break out of function
        return;
    }
    operatorSign = this.id;
    console.log(operatorSign);

}

keypadNumber.forEach(num => {
    num.addEventListener('click', displayNumber);
});

clear.addEventListener('click',clearDisplay);

operators.forEach(sign => {
    sign.addEventListener('click', displaySign)
});


