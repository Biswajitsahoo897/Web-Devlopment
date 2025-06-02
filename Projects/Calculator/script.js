let display = document.getElementById('display');
let currentInput = '0';
let operator = '';
let previousInput = '';
let waitingForNewNumber = false;

function updateDisplay() {
    display.textContent = currentInput;
}

function appendToDisplay(value) {
    if (waitingForNewNumber) {
        currentInput = '';
        waitingForNewNumber = false;
    }

    if (currentInput === '0' && value !== '.') {
        currentInput = value;
    } else if (value === '.' && currentInput.includes('.')) {
        return;
    } else {
        currentInput += value;
    }

    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    operator = '';
    previousInput = '';
    waitingForNewNumber = false;
    updateDisplay();
}

function deleteLast() {
    if (currentInput.length > 1) {
        currentInput = currentInput.slice(0, -1);
    } else {
        currentInput = '0';
    }
    updateDisplay();
}

function calculate() {
    if (operator && previousInput !== '' && !waitingForNewNumber) {
        let result;
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);

        switch (operator) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '*':
                result = prev * current;
                break;
            case '/':
                if (current === 0) {
                    alert('Cannot divide by zero!');
                    return;
                }
                result = prev / current;
                break;
            default:
                return;
        }

        currentInput = result.toString();
        operator = '';
        previousInput = '';
        waitingForNewNumber = true;
        updateDisplay();
    }
}

// Handle operator input
document.querySelectorAll('.operator').forEach(btn => {
    btn.addEventListener('click', function () {
        if (operator && previousInput !== '' && !waitingForNewNumber) {
            calculate();
        }

        operator = this.textContent === '×' ? '*' : this.textContent;
        previousInput = currentInput;
        waitingForNewNumber = true;
    });
});

// Keyboard support
document.addEventListener('keydown', function (event) {
    const key = event.key;

    if (key >= '0' && key <= '9' || key === '.') {
        appendToDisplay(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        document.querySelector(`button[onclick="appendToDisplay('${key}')"]`).click();
    } else if (key === 'Enter' || key === '=') {
        calculate();
    } else if (key === 'Escape' || key === 'c' || key === 'C') {
        clearDisplay();
    } else if (key === 'Backspace') {
        deleteLast();
    }
});