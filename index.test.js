// const { add } = require('./index'); // Import the add function

// describe('add function', () => {
//   test('should return the sum of two numbers', () => {
//     expect(add(5, 3)).toBe(8);
//     expect(add(-5, -3)).toBe(-8);
//     expect(add(10, 0)).toBe(10);
//   });

//   test('should handle invalid inputs', () => {
//     expect(add('a', 5)).toBe('Invalid Input');
//     expect(add(5, 'b')).toBe('Invalid Input');
//     expect(add('abc', 'xyz')).toBe('Invalid Input');
//   });

//   test('should handle string numbers', () => {
//     expect(add('5', '3')).toBe(8);
//     expect(add('10', 5)).toBe(15);
//     expect(add(5, '10')).toBe(15);
//   });
// });


const { add } = require('./index'); // Import only the add function

describe('add function', () => {
    test('should return the sum of two numbers', () => {
        expect(add(2, 3)).toBe(5);
    });

    test('should return "Invalid Input" for non-numeric inputs', () => {
        expect(add('a', 3)).toBe('Invalid Input');
        expect(add(2, 'b')).toBe('Invalid Input');
    });

    test('should work with string representations of numbers', () => {
        expect(add('4', '5')).toBe(9);
    });
});
