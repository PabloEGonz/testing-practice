const stringLength = require('./stringLength.js');

test('length', () => {
    expect(stringLength('words')).toBe(5);
})

test('null', () => {
    expect(stringLength('')).toBe('The string is not at least 1 character long or is longer than 10 characters');
})

test('longer', () => {
    expect(stringLength('obligations')).toBe('The string is not at least 1 character long or is longer than 10 characters');
})