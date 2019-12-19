module.exports = function convert<T extends object>(
  hash: T
): (keyof T | T[keyof T])[][] {
  var keys = Object.keys(hash) as (keyof T)[];

  return keys.map(function(key) {
    return [key, hash[key]];
  });
};
