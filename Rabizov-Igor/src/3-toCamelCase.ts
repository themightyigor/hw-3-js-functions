module.exports = function toCamelCase(string: string): string {
  var regex = /(_|-)([a-z])/g;

  return string.toLowerCase().replace(regex, function(string: string): string {
    return string[1].toUpperCase();
  });
};
