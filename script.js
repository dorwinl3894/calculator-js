let keypadNumber = document.querySelectorAll(".keypad-number");
let number = document.getElementById('number');
let operators = document.querySelectorAll(".keypad-right");
let clear = document.getElementById('clear-button');
let equalButton = document.getElementById('equalButton');
let displayValue;
let secondValue;
let operatorSign;
let signChosen = false;
let firstNumToCalculate;
let tempNumHolder;

function add(a,b) {
    let num1 = parseInt(a);
    let num2 = parseInt(b);
    console.log("You just added");
    
    return num1 + num2;

}

function subtract(a,b) {
    let num1 = parseInt(a);
    let num2 = parseInt(b);
    console.log("You just subtract");
    return num1 - num2;

}

function multiply(a,b) {
    let num1 = parseInt(a);
    let num2 = parseInt(b);
    console.log("You just multiply");
    return num1 * num2;
}

function divide(a, b) {
    let num1 = parseInt(a);
    let num2 = parseInt(b);
    console.log("You just divide");
    if (num2 === 0) {
        return;
    }
    return num1 / num2;
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
    
    
    number.textContent += this.textContent; // add the number pressed
    displayValue = number.textContent; //store number into another variable
    console.log(displayValue);
}

function clearDisplay() {
    // displayValue = number.textContent;
    number.textContent = "";

}

function displaySign() {
    if (signChosen && (number.textContent) && tempNumHolder) {
        calculate();
    }

    tempNumHolder = number.textContent;
    console.log(tempNumHolder + " temp");
    // calculate();
    
    console.log(`You just stored a value of ${tempNumHolder}`);
    clearDisplay();

    if (signChosen === false) {
        clearDisplay();
        operatorSign = this.id;
        console.log(operatorSign);
        signChosen = true;
        return;
    }

}
function calculate() {
    if ((operatorSign && tempNumHolder && number.textContent) ) {  
        number.textContent = `${operate(operatorSign,tempNumHolder,number.textContent)
        }`;
        signChosen = false;
        firstNumToCalculate = number.textContent;
        console.log(firstNumToCalculate + "got this from calculate()");
    }
    else {
        return;
    }
}


keypadNumber.forEach(num => {
    num.addEventListener('click', displayNumber);
});

clear.addEventListener('click',clearDisplay);

operators.forEach(sign => {
    sign.addEventListener('click', displaySign)
});

equalButton.addEventListener('click',calculate);
