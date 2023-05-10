const capitalize = require('./capitalizeString');

test('CamelCase', () => {
    expect(capitalize('america')).toBe('America');
})