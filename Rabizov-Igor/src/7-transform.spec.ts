var transform = require('./7-transform');

test('Should transform array of numbers to array of functions', function() {
  expect(transform([10, 20, 30, 40, 50])[3]()).toBe(40);
});

test('Should transform array of numbers to array of functions', function() {
  expect(transform([10, 20, 30, 40, 50])[4]()).toBe(50);
});
