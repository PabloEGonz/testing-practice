const stringLength = require('./index.js');

test('length', () => {
    expect(stringLength('words')).toBe(5);
})

test('null', () => {
    expect(stringLength('')).toBe(null);
})

test('longer', () => {
    expect(stringLength('obligations')).toBe(11);
})