const reverseString = require('./reverseSring.js')

test('reverse', () => {
    expect(reverseString('tree')).toBe('eert');
})