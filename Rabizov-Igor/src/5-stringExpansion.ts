module.exports = function stringExpansion(str: string): string {
  return str
    .replace(/(\d\D)/g, function(match: string): string {
      return Array.from(match)
        .slice(1)
        .map(function(word) {
          return word.repeat(+match[0]);
        })
        .join('');
    })
    .replace(/\d+/g, '');
};
