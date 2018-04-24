import { identityf } from './identityf';

describe('identityf', () => {
  test('should return a function which returns the primitive input argument when called', () => {
    const arg = 'foo';
    const actual = identityf(arg)();

    expect(actual).toBe(arg);
  });

  test('should return a function which returns the object input argument when called', () => {
    const arg = {
      foo: 'bar',
    };
    const actual = identityf(arg)();

    expect(actual).toBe(arg);
  });
});
