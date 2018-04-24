import { NAryFunction } from './types';

/**
 * Function that reverses the arguments of an n-ary function
 * @param nary N-ary function
 */
export function reversen<T>(nary: NAryFunction<T>): NAryFunction<T> {
  return (...args: T[]) => nary(...args.reverse());
}
