import { add } from './add';

describe('add', () => {
  test('should return the sum of the input arguments', () => {
    const expected = 7;
    const actual = add(3, 4);

    expect(actual).toBe(expected);
  });
});
