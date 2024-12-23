const { app, add } = require('./index'); 
// const app = require('./index');
const http = require('http');

let server;

beforeAll((done) => {
    server = http.createServer(app);
    server.listen(4000, done);
});

afterAll((done) => {
    server.close(done);
});

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
