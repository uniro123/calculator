let inputnum = document.getElementById("inputnum");

function numberInput(value) {
    inputnum.value += value;
}

function squaredInput() {
    inputnum.value = inputnum.value * inputnum.value;
}

function deleteInput() {
    inputnum.value = inputnum.value.slice(0, -1);
}

function clearInput() {
    inputnum.value = "";
}

function changeInput() {
    if(inputnum.value.startsWith("-")) {
        inputnum.value = inputnum.value.slice(1);
    }

    else {
        inputnum.value = "-" + inputnum.value;
    }
}
function theResult() {
    try {
        inputnum.value = eval(inputnum.value);
    }

    catch (error) {
        inputnum.value = "Error";
    }
}
