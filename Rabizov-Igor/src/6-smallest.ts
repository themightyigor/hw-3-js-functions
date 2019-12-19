module.exports = function smallest(): number {
  return Array.from(arguments).sort(function(a, b) {
    return a - b;
  })[0];
};
