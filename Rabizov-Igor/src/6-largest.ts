module.exports = function largest(): number {
  return Array.from(arguments).sort(function(a, b) {
    return b - a;
  })[0];
};
