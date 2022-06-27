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

console.log(operate('divide', 2,3));