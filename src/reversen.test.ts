import {
  reversen,
  sub,
} from './';

describe('reversen', () => {
  test('should return an n-ary function which swaps the arguments of the provided function', () => {
    const bus = reversen(sub);
    const actual = bus(3, 2);
    const expected = -1;

    expect(actual).toBe(expected);
  });
});
