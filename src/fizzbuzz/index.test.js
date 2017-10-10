const { fizzBuzz } = require('./index');

describe('The fizzbuzz component', () => {

  describe('fizzbuzz function', () => {

    it('given no input should return 0', () => {
      const expected = 0;
      const actual = fizzBuzz();
      expect(actual).toBe(expected);
    });

    //  Comment each test as you go..

    // it('given 0 should return 0', () => {
    //   const expected = 0;
    //   const actual = fizzBuzz(0);
    //   expect(actual).toBe(expected);
    // });
    //
    // it('given 1 should return 1', () => {
    //   const expected = 1;
    //   const actual = fizzBuzz(1);
    //   expect(actual).toBe(expected);
    // });
    //
    // it('given 2 should return 2', () => {
    //   const expected = 2;
    //   const actual = fizzBuzz(2);
    //   expect(actual).toBe(expected);
    // });
    //
    // it('given 3 should return fizz', () => {
    //   const expected = 'fizz';
    //   const actual = fizzBuzz(3);
    //   expect(actual).toBe(expected);
    // });
    //
    // it('given 4 should return 4', () => {
    //   const expected = 4;
    //   const actual = fizzBuzz(4);
    //   expect(actual).toBe(expected);
    // });
    //
    // it('given 5 should return buzz', () => {
    //   const expected = 'buzz';
    //   const actual = fizzBuzz(5);
    //   expect(actual).toBe(expected);
    // });
    //
    // it('given 6 should return fizz', () => {
    //   const expected = 'fizz';
    //   const actual = fizzBuzz(6);
    //   expect(actual).toBe(expected);
    // });
    //
    // it('given 9 should return fizz', () => {
    //   const expected = 'fizz';
    //   const actual = fizzBuzz(9);
    //   expect(actual).toBe(expected);
    // });
    //
    // it('given 10 should return buzz', () => {
    //   const expected = 'buzz';
    //   const actual = fizzBuzz(10);
    //   expect(actual).toBe(expected);
    // });
    //
    // it('given 15 should return fizz buzz', () => {
    //   const expected = 'fizzbuzz';
    //   const actual = fizzBuzz(15);
    //   expect(actual).toBe(expected);
    // });
    //
    // it('given 30 should return fizzbuzz', () => {
    //   const expected = 'fizzbuzz';
    //   const actual = fizzBuzz(30);
    //   expect(actual).toBe(expected);
    // });
    //
    // it('given 90 should return fizzbuzz', () => {
    //   const expected = 'fizzbuzz';
    //   const actual = fizzBuzz(90);
    //   expect(actual).toBe(expected);
    // });
    //
    // it('given 100 should return buzz', () => {
    //   const expected = 'buzz';
    //   const actual = fizzBuzz(100);
    //   expect(actual).toBe(expected);
    // });
    //
    // it('given 101 should return buzz', () => {
    //   const expected = 101;
    //   const actual = fizzBuzz(101);
    //   expect(actual).toBe(expected);
    // });

  });

});