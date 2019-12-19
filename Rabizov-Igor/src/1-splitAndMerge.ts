module.exports = function splitAndMerge(str: string, sp: string): string {
  return str
    .split(' ')
    .map(function(word) {
      return word.split('').join(sp);
    })
    .join(' ');
};
