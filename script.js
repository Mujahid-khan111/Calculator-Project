let expression = ''; 

function clearDisplay() {
    expression = ''; 
    updateDisplay('');
}

function appendValue(value) {
    expression += value; 
    updateDisplay(expression);
}

function setOperator(op) {
    if (expression === '' || /[+\-*/]$/.test(expression)) return; 
    expression += op;
    updateDisplay(expression);
}

function calculate() {
    if (expression === '' || /[+\-*/]$/.test(expression)) return; 
    try {
        const result = eval(expression); 
        updateDisplay(result);
        expression = result.toString(); 
    } catch (error) {
        updateDisplay('Error');
        expression = ''; 
    }
}

function updateDisplay(value) {
    document.getElementById('display').value = value;
}
