module.exports = function reverse (n) {
    const positiveNumber = Math.abs(n);
    const numberToString = positiveNumber.toString();
    const reverseString = +numberToString.split('').reverse().join('');
    const stringToNumber = +reverseString;

    return stringToNumber;
}
