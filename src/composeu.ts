import { UnaryFunction } from './types';

/**
 * Function that takes two unary functions and returns a unary function that calls them both
 * @param f Unary function
 * @param g Unary function
 */
export function composeu(f: UnaryFunction<number>, g: UnaryFunction<number>): UnaryFunction<number> {
  return (a: number) => g(f(a));
}
