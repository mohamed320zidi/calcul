let currentInput = '';
let operator = null;
let previousInput = '';

const display = document.getElementById('display');

function updateDisplay(value) {
    display.textContent = value;
}

function clearDisplay() {
    currentInput = '';
    operator = null;
    previousInput = '';
    updateDisplay('0');
}

function inputNumber(num) {
    if (currentInput.length >= 10) return; // Limit input length
    currentInput += num;
    updateDisplay(currentInput);
}

function inputDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay(currentInput);
    }
}

function inputOperation(op) {
    if (currentInput === '' && op === '-') {
        currentInput = '-';
        updateDisplay(currentInput);
        return;
    }
    if (previousInput !== '' && currentInput !== '') {
        calculateResult();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculateResult() {
    if (operator === null || currentInput === '' || previousInput === '') return;
    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);
    switch (operator) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = curr !== 0 ? prev / curr : 'Error';
            break;
        default:
            return;
    }
    currentInput = result.toString().slice(0, 10); // Limit display length
    operator = null;
    previousInput = '';
    updateDisplay(currentInput);
}
