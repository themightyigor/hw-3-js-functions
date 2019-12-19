var smallest = require('./6-smallest');

test('Should return the smallest number', function() {
  expect(smallest(2, 0.1, -5, 100, 3)).toBe(-5);
});
