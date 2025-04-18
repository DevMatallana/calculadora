const d = document
const $ = el => document.querySelector(el)

const btn1 = $(".one")
const btn2 = $(".two")
const btn3 = $(".three")
const btn4 = $(".four")
const btn5 = $(".five")
const btn6 = $(".six")
const btn7 = $(".seven")
const btn8 = $(".eight")
const btn9 = $(".nine")
const btn0 = $(".cero")
const btnClear = $(".clear")
const btnAdd = $(".add")
const btnSubtract = $(".subtract")
const btnMultiply = $(".multiply")
const btnDivide = $(".divide")
const btnEquals = $(".equals")
const display = $(".display")
const tarjeta = $(".tarjeta")

let number = [];
let symbol = "";
display.textContent = "0"

// Buttons number
btn0.addEventListener("click",() => {
    number.push(0)
    display.textContent = number.join("")
})
btn1.addEventListener("click",() => {
    number.push(1)
    display.textContent = number.join("")
})
btn2.addEventListener("click",() => {
    number.push(2)
    display.textContent = number.join("")
})
btn3.addEventListener("click",() => {
    number.push(3)
    display.textContent = number.join("")
})
btn4.addEventListener("click",() => {
    number.push(4)
    display.textContent = number.join("")
})
btn5.addEventListener("click",() => {
    number.push(5)
    display.textContent = number.join("")
})
btn6.addEventListener("click",() => {
    number.push(6)
    display.textContent = number.join("")
})
btn7.addEventListener("click",() => {
    number.push(7)
    display.textContent = number.join("")
})
btn8.addEventListener("click",() => {
    number.push(8)
    display.textContent = number.join("")
})
btn9.addEventListener("click",() => {
    number.push(9)
    display.textContent = number.join("")
})

// Buttons operation
btnAdd.addEventListener("click",() => {
    symbol = "+"
    number.push(symbol)
    display.textContent = number.join("")
})
btnSubtract.addEventListener("click", () => {
    symbol = '-'
    number.push(symbol)
    display.textContent = number.join("")
})
btnMultiply.addEventListener("click",() => {
    symbol = '*'
    number.push(symbol)
    display.textContent = number.join("")
})
btnDivide.addEventListener("click",() => {
    symbol = '/'
    number.push(symbol)
    display.textContent = number.join("")
})
btnEquals.addEventListener("click",() => {
    display.textContent = eval(number.join(""))
    number = []
})
btnClear.addEventListener("click", () => {
    number = []
    display.textContent = "0"
})




const add = function(num1, num2) { return num1 + num2}
const subtract = function(num1, num2) { return num1 - num2}
const multiply = function(num1, num2) { return num1 * num2}
const divide = function(num1, num2) { return num1 / num2}

function operate(num1, symbol, num2) {
    switch (symbol) {
        case '+':
            return add(num1, num2)
        case '-':
            return subtract(num1, num2)
        case '*':
            return multiply(num1, num2)
        case '/':
            return divide(num1, num2)
    }       
}
