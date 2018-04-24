/**
 * Function that adds from two invocations
 * @param a Number
 */
export function addf(a: number): (b: number) => number {
  return (b: number) => a + b;
}
