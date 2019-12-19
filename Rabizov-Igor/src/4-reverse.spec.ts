var reverseWords = require('./4-reverse');

test('Should convert the dash/underscore delimited words into camel casing', function() {
  expect(reverseWords(' A fun little challenge! ')).toBe(
    ' A nuf elttil !egnellahc '
  );
});
