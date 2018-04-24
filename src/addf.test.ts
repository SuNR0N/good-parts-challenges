import { addf } from './addf';

describe('addf', () => {
  test('should return the sum of the input arguments of the two invocations', () => {
    const expected = 7;
    const actual = addf(3)(4);

    expect(actual).toBe(expected);
  });
});
