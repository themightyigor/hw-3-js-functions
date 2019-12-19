var stringExpansion = require('./5-stringExpansion');

test('Should return the expansion of the given string', function() {
  expect(stringExpansion('3D2a5d2f')).toBe('DDDaadddddff');
  expect(stringExpansion('3d332f2a')).toBe('dddffaa');
  expect(stringExpansion('abcde')).toBe('abcde');
});
