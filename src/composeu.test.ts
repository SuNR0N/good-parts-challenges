import {
  add,
  composeu,
  mul,
  twice,
} from './';

describe('composeu', () => {
  test('should return the result of the two unary functions called with the provided argument', () => {
    const double = twice(add);
    const square = twice(mul);
    const actual = composeu(double, square)(5);
    const expected = 100;

    expect(actual).toBe(expected);
  });
});
