module.exports = function sum(num: number, ...rest: number[]): number {
  var args = Array.prototype.slice.call(arguments, 1) as [number];
  return arguments.length == 1 ? num : num + sum.apply(null, args);
};
