/**
 * Function that takes an argument and returns a function that returns that argument
 * @param a Any
 */
export function identityf(a: any) {
  return () => a;
}
