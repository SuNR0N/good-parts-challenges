import {
  add,
  mul,
  twice,
} from './';

describe('twice', () => {
  test('should return a function which doubles its argument if the provided binary function is add', () => {
    const double = twice(add);
    const expected = 22;
    const actual = double(11);

    expect(actual).toBe(expected);
  });

  test('should return a function which squares its argument if the provided binary function is mul', () => {
    const square = twice(mul);
    const expected = 121;
    const actual = square(11);

    expect(actual).toBe(expected);
  });
});
