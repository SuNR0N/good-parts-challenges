import {
  add,
  curry,
  mul,
} from './';

describe('curry', () => {
  test('should return the output of the binary function which takes its 2nd argument from the invocation (intermediary)', () => {
    const expected = 7;
    const add3 = curry(add, 3);
    const actual = add3(4);

    expect(actual).toBe(expected);
  });

  test('should return the output of the binary function which takes its 2nd argument from the invocation', () => {
    const expected = 30;
    const actual = curry(mul, 5)(6);

    expect(actual).toBe(expected);
  });
});
