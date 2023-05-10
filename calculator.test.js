const Calculator = require('./calculator.js')

describe('sum', () => {
    test('even', () => {
        expect(new Calculator(2, 2).add()).toBe(4);
    });
    test('uneven', () => {
        expect(new Calculator(2, 7).add()).toBe(9);
    });
    test('big numbers', () => {
        expect(new Calculator(500000, 500000).add()).toBe(1000000);
    });
});

describe('subtract', () => {
    test('even', () => {
        expect(new Calculator(4, 2).subtract()).toBe(2);
    });
    test('uneven', () => {
        expect(new Calculator(7, 3).subtract()).toBe(4);
    });
    test('big numbers', () => {
        expect(new Calculator(500000, 500000).subtract()).toBe(0);
    });
});

describe('divide', () => {
    test('even', () => {
        expect(new Calculator(4, 2).divide()).toBe(2);
    });
    test('uneven', () => {
        expect(new Calculator(9, 3).divide()).toBe(3);
    });
    test('big numbers', () => {
        expect(new Calculator(500000, 500000).divide()).toBe(1);
    });
});

describe('multiply', () => {
    test('even', () => {
        expect(new Calculator(4, 2).multiply()).toBe(8);
    });
    test('uneven', () => {
        expect(new Calculator(4, 3).multiply()).toBe(12);
    });
    test('big numbers', () => {
        expect(new Calculator(500000, 2).multiply()).toBe(1000000);
    });
});