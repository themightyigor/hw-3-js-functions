module.exports = function reverseWords(string: string): string {
  return string
    .split('')
    .reverse()
    .join('')
    .split(' ')
    .reverse()
    .join(' ');
};
