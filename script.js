class Calculator {
    constructor (previousOperandTextNumber, currentOperandTextNumber) {
        this.previousOperandTextNumber=previousOperandTextNumber
        this.currentOperandTextNumber=currentOperandTextNumber
        this.clear()
    }

    clear() {
        this.currenOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete() {

    }

    appendNumber (number) {
        this.currenOperand = this.currenOperand.toString() + number.toString()
    }

    chooseOperation (operation) {

    }

    compute () {

    }

    updateDisplay () {
        this.currentOperandTextElement.innerText = this.currenOperand
    }
}

const numberButtons=document.querySelectorAll('[data-number]')
const operationNumbers=document.querySelectorAll('[data-operation]')
const equalsButton=document.querySelector('[data-equals]')
const deleteNumber=document.querySelector('[data-delete]')
const allClearButton=document.querySelector('[data-all-clear]')
const previousOperandTextNumber=document.querySelector('[data-previous-operand]')
const currentOperandTextNumber=document.querySelector('[data-current-operand]')

calculator = new calculator (previousOperandTextNumber, currentOperandTextNumber)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})
