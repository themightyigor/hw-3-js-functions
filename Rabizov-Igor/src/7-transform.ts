module.exports = function transform(arr: Array<number>) {
  return arr.map(function(item) {
    return function(): number {
      return item;
    };
  });
};
