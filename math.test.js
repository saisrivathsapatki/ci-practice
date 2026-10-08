const test = require('node:test');
const assert = require('node:assert');
const { add, subtract } = require('./math.js');

test('add works for different numbers', () => {
  assert.strictEqual(add(2, 3), 5);       // normal numbers
  assert.strictEqual(add(-4, 1), -3);     // negative number
  assert.strictEqual(add(0, 0), 0);       // zeros
  assert.strictEqual(add(100, 250), 350); // bigger numbers
});

test('subtract works for different numbers', () => {
  assert.strictEqual(subtract(5, 3), 2);      // normal numbers
  assert.strictEqual(subtract(3, 5), -2);     // answer below zero
  assert.strictEqual(subtract(10, 10), 0);    // same numbers
});
