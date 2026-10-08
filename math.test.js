const test = require('node:test');
const assert = require('node:assert');
const { add } = require('./math.js');

test('add 2 and 3 gives 5', () => {
  assert.strictEqual(add(2, 3), 5);
});
