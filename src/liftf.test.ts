import {
  add,
  liftf,
  mul,
} from './';

describe('liftf', () => {
  test('should return the output of the binary function which takes its arguments from the two invocations (intermediary)', () => {
    const expected = 7;
    const addf = liftf(add);
    const actual = addf(3)(4);

    expect(actual).toBe(expected);
  });

  test('should return the output of the binary function which takes its arguments from the two invocations', () => {
    const expected = 30;
    const actual = liftf(mul)(5)(6);

    expect(actual).toBe(expected);
  });
});
