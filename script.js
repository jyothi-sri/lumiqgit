// To clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
}
// To display values
function display(value) {
    document.getElementById("result").value += value;
}
// Evaluates and return the result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}