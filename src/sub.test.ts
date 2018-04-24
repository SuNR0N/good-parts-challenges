import { sub } from './sub';

describe('sub', () => {
  test('should return the difference of the input arguments', () => {
    const expected = -1;
    const actual = sub(3, 4);

    expect(actual).toBe(expected);
  });
});
