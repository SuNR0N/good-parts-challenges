import { mul } from './mul';

describe('mul', () => {
  test('should return the product of the input arguments', () => {
    const expected = 12;
    const actual = mul(3, 4);

    expect(actual).toBe(expected);
  });
});
