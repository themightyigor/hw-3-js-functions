var largest = require('./6-largest');

test('Should return the largest number', function() {
  expect(largest(2, 0.1, -5, 100, 3)).toBe(100);
});
