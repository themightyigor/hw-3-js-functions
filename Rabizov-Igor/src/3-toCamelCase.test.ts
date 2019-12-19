var toCamelCase = require('./3-toCamelCase');

test('Should convert the dash/underscore delimited words into camel casing', function() {
  expect(toCamelCase('the-stealth-warrior')).toBe('theStealthWarrior');
  expect(toCamelCase('The_Stealth_Warrior')).toBe('theStealthWarrior');
});
