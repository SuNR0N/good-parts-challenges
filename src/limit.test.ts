import {
  add,
  limit,
} from './';

describe('limit', () => {
  test('should return undefined if the limit is less than or equal to zero', () => {
    const limitedAdd = limit(add, 0);
    const actual = limitedAdd(3, 4);

    expect(actual).toBeUndefined();
  });

  test('should return the result of the binary function if the limit is not yet reached', () => {
    const limitedAdd = limit(add, 2);
    const actual = limitedAdd(3, 4);
    const expected = 7;

    expect(actual).toBe(expected);
  });

  test('should return the result of the binary function if the limit has just been reached', () => {
    const limitedAdd = limit(add, 2);
    limitedAdd(3, 4);
    const actual = limitedAdd(3, 4);
    const expected = 7;

    expect(actual).toBe(expected);
  });

  test('should return undefined if the limit is reached', () => {
    const limitedAdd = limit(add, 1);
    limitedAdd(3, 4);
    const actual = limitedAdd(3, 4);

    expect(actual).toBeUndefined();
  });
});
