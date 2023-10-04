let inputnum =
document.getElementById("inputnum");

let displayValue = '';

let resultDisplayed = false;
let resultSquared = false;

function numberInput(value) {
    if (resultDisplayed) {
                inputnum.value = "";
                resultDisplayed = false;
            }
            inputnum.value += value;
}
function clearInput() {
    inputnum.value = "";
}
function deleteInput() {
    inputnum.value = inputnum.value.slice(0, -1);
}
function squaredInput() {
    inputnum.value = inputnum.value * inputnum.value;
}
function changeInput() {
    if (displayValue.startsWith('-')) {
        displayValue = displayValue.slice(1);
    } else {
        displayValue = '-' + displayValue;
    }
    document.getElementById('inputnum').value = displayValue;
}
function theResult() {
    try {
        inputnum.value = eval(inputnum.value);
        resultDisplayed = true;
    } catch (error) {
        inputnum.value = "Error";
    }
}
