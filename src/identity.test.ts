import { identity } from './identity';

describe('identity', () => {
  test('should return the primitive input argument when called', () => {
    const arg = 'foo';
    const actual = identity(arg);

    expect(actual).toBe(arg);
  });

  test('should return the object input argument when called', () => {
    const arg = {
      foo: 'bar',
    };
    const actual = identity(arg);

    expect(actual).toBe(arg);
  });
});
