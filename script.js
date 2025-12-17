function clearScreen() {
    document.getElementById("result").value = "";
}

function insert(value) {
    document.getElementById("result").value += value;
}

function calculate() {
    let result = document.getElementById("result").value;
    try {
        document.getElementById("result").value = eval(result);
    } catch (e) {
        document.getElementById("result").value = "Error";
    }
}

function deleteLast() {
    let value = document.getElementById("result").value;
    document.getElementById("result").value = value.substr(0, value.length - 1);
}
