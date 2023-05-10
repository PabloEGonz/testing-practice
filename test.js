const stringLength = require('./stringLength.js');

test('length', () => {
    expect(stringLength('words')).toBe(5);
})

// test('null', () => {
//     expect(stringLength('')).toThrow(Error);
// })

// test('longer', () => {
//     expect(stringLength('obligations')).toThrow(new Error);
// })