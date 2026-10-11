/*------------------------ Cached Element References ------------------------*/

const numberElements = document.querySelectorAll('.number')
const operatorElements = document.querySelectorAll('.operator')
const equalsElement = document.querySelector('.equals')
const displayElement = document.querySelector('.display')
const clearElement = document.querySelector('#clear')

console.log(numberElements)
console.log(operatorElements)
console.log(equalsElement)
console.log(displayElement)
console.log(clearElement)

/*-------------------------------- Constants --------------------------------*/


/*-------------------------------- Variables --------------------------------*/

let num1
let num2
let operator

/*-------------------------------- Functions --------------------------------*/

function handleClickNumber(event) {
    console.log(event.target.textContent)

    if (!num1 && !num2 && !operator) {
        num1 = event.target.textContent
        displayElement.textContent = num1
    }
    else if (num1 && !num2 && !operator) {
        num1 = num1 + event.target.textContent
        displayElement.textContent = num1

    }
    else if (num1 && !num2 && operator) {
        num2 = event.target.textContent
        displayElement.textContent = num1 + operator + num2

    }
    else if (num1 && num2 && operator) {
        num2 = num2 + event.target.textContent
        displayElement.textContent = num1 + operator + num2
    }

    console.log(`Number 1: ${num1}`)
    console.log(`Number 2: ${num2}`)
    console.log(`Operator: ${operator}`)
}

function handleClickOperator(event) {
    console.log(event.target.textContent)

    if (num1 && !num2 && !operator) {
        operator = event.target.textContent
        displayElement.textContent = num1 + operator
    }

    console.log(`Number 1: ${num1}`)
    console.log(`Number 2: ${num2}`)
    console.log(`Operator: ${operator}`)
}

function handleClickEquals() {
    if (operator === '/') {
        result = Number(num1) / Number(num2)
        displayElement.textContent = result
    }
    else if (operator === '*') {
        result = Number(num1) * Number(num2)
        displayElement.textContent = result
    }
    else if (operator === '-') {
        result = Number(num1) - Number(num2)
        displayElement.textContent = result
    }
    else if (operator === '+') {
        result = Number(num1) + Number(num2)
        displayElement.textContent = result
    }
}

function clear(){
    num1 = null
    num2 = null
    operator = null
    displayElement.textContent = ''

    console.log(`Number 1: ${num1}`)
    console.log(`Number 2: ${num2}`)
    console.log(`Operator: ${operator}`)
}

/*----------------------------- Event Listeners -----------------------------*/

for (let oneNumElement of numberElements) {
    oneNumElement.addEventListener('click', handleClickNumber)
}
for (let oneOperatorElement of operatorElements) {
    oneOperatorElement.addEventListener('click', handleClickOperator)
}
equalsElement.addEventListener('click', handleClickEquals)
clearElement.addEventListener('click', clear)