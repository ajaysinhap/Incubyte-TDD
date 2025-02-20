const { add } = require('./index');

describe('String Calculator', () => {
  it('should return 0 for an empty string', () => {
    expect(add('')).toBe(0);
  });

  it('should return the number itself for a single number', () => {
    expect(add('1')).toBe(1);
  });

  it('should return the sum of two numbers', () => {
    expect(add('1,5')).toBe(6);
  });

  it('should handle new lines between numbers', () => {
    expect(add('1\n2,3')).toBe(6);
  });

  it('should support a custom delimiter', () => {
    expect(add('//;\n1;2')).toBe(3);
  });

  it('should throw an exception for negative numbers', () => {
    expect(() => add('1,-2,3')).toThrow('Negative numbers not allowed: -2');
  });
});
