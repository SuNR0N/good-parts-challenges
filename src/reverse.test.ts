import {
  reverse,
  sub,
} from './';

describe('reverse', () => {
  test('should return a binary function which swaps the arguments of the provided function', () => {
    const bus = reverse(sub);
    const actual = bus(3, 2);
    const expected = -1;

    expect(actual).toBe(expected);
  });
});
