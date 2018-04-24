import {
  BinaryFunction,
  NAryFunction,
} from './types';

/**
 * Function that takes two binary functions and returns a function that calls them both
 * @param f Binary function
 * @param g Binary function
 */
export function composeb(f: BinaryFunction<number>, g: BinaryFunction<number>): NAryFunction<number> {
  return (a: number, b: number, c: number) => g(f(a, b), c);
}
