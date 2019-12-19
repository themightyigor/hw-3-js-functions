var sum = require('./8-sum');

test('Should sum all the numbers using recursion', function() {
  expect(sum(1, 3, 5, 7)).toBe(16);
});
