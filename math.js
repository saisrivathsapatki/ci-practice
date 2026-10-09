function add(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}
if (typeof module !== "undefined") {
  module.exports = { add, subtract };
}
