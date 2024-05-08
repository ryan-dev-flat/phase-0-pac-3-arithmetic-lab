function add(a, b) {
    return a + b
}
function subtract(a, b) {
return a - b
}
function multiply(a, b) {
return a * b
}
function divide(a, b) { 
return a / b
}
number = n;
function increment(n) {
    return n += 1
}
function decrement(n) {
    return n -= 1
}
function makeInt(n) {
    var parsed = parseInt(n, 10);
    if (isNaN(parsed)) {
        return NaN;
    } else {
        return parsed;
    }
}
function makeInt(string) {
    return parseInt(string, 10);
}

function preserveDecimal(string) {
    return parseFloat(string);
}

