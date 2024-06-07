function clearDisplay() {
    document.getElementById("result").innerText = "";
}

function deleteLast() {
    let currentDisplay = document.getElementById("result").innerText;
    document.getElementById("result").innerText = currentDisplay.slice(0, -1);
}

function appendNumber(number) {
    document.getElementById("result").innerText += number;
}

function appendSymbol(symbol) {
    document.getElementById("result").innerText += symbol;
}

function calculateResult() {
    let currentDisplay = document.getElementById("result").innerText;
    try {
        document.getElementById("result").innerText = eval(currentDisplay);
    } catch (error) {
        document.getElementById("result").innerText = "Error";
    }
}
