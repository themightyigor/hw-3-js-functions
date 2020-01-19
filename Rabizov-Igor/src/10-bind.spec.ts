require('./10-bind');

test('Should work in an exact same way as the usual bind() ', function() {
  function addPropToNumber(this: any, number: number): number {
    return this.prop + number;
  }
  var bound = addPropToNumber.bind({ prop: 9 });
  expect(bound(1)).toBe(10);
});
