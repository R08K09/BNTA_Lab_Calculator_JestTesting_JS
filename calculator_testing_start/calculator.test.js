const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 100;
    actual = sum(64, 36);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -10;
    actual = sum(-7, -3);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 18;
    actual = sum(18, 0);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {

  test('can subtract two small positive numbers', () => {
    expected = 6;
    actual = subtract(14, 8);
    expect(actual).toBe(expected);
  });

  test('can subtract two large positive numbers', () => { 
    expected = 100;
    actual = subtract(250, 150);
    expect(actual).toBe(expected);
  });

  test('can subtract two negative numbers', () => {
    expected = -7;
    actual = subtract(-10, -3);
    expect(actual).toBe(expected);
  });

  test('can subtract zero', () => {
    expected = 18;
    actual = subtract(18, 0);
    expect(actual).toBe(expected);
  });

});

describe('multiply', () => {

  test('can multiply two small positive numbers', () => {
    expected = 48;
    actual = multiply(6, 8);
    expect(actual).toBe(expected);
  });

  test('can multiply two large positive numbers', () => { 
    expected = 1600;
    actual = multiply(40, 40);
    expect(actual).toBe(expected);
  });

  test('can multiply two negative numbers', () => {
    expected = 30;
    actual = multiply(-10, -3);
    expect(actual).toBe(expected);
  });

  test('can multiply zero', () => {
    expected = 0;
    actual = multiply(12, 0);
    expect(actual).toBe(expected);
  });

});

describe('divide', () => {

  test('can divide two small positive numbers', () => {
    expected = 6;
    actual = divide(48, 8);
    expect(actual).toBe(expected);
  });

  test('can divide two large positive numbers', () => { 
    expected = 4;
    actual = divide(1000, 250);
    expect(actual).toBe(expected);
  });

  test('can divide two negative numbers', () => {
    expected = 10;
    actual = divide(-30, -3);
    expect(actual).toBe(expected);
  });

  test('can divide zero', () => {
    expected = Infinity;
    actual = divide(12, 0);
    expect(actual).toBe(expected);
  });

});

describe('modulus', () => {

  test('can modulus of two small positive numbers', () => {
    expected = 4;
    actual = modulus(20, 8);
    expect(actual).toBe(expected);
  });

  test('can modulus of two large positive numbers', () => { 
    expected = 100;
    actual = modulus(1000, 300);
    expect(actual).toBe(expected);
  });

  test('can modulus of two negative numbers', () => { 
    expected = -2;
    actual = modulus(-30, -4);
    expect(actual).toBe(expected);
  });

  test('can modulus of zero', () => {
    expected = NaN;
    actual = modulus(12, 0);
    expect(actual).toBe(expected);
  });

});

describe('even', () => {

  test('can check positive numbers', () => {
    expected = true;
    actual = even(12);
    expect(actual).toBe(expected);
  });

  test('can check negative numbers', () => { 
    expected = true;
    actual = even(1000);
    expect(actual).toBe(expected);
  });

  test('can check number that is odd', () => { 
    expected = false;
    actual = even(53);
    expect(actual).toBe(expected);
  });

});

describe('odd', () => {

  test('can check positive numbers', () => {
    expected = true;
    actual = odd(11);
    expect(actual).toBe(expected);
  });

  test('can check negative numbers', () => { 
    expected = true;
    actual = odd(333);
    expect(actual).toBe(expected);
  });

  test('can check number that is even', () => { 
    expected = false;
    actual = odd(48);
    expect(actual).toBe(expected);
  });

});
