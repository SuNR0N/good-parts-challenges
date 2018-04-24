import {
  BinaryFunction,
  UnaryFunction,
} from './types';

/**
 * Function that takes a binary function that returns a unary function that passes its argument
 * to the binary function twice
 * @param binary Binary function
 */
export function twice(binary: BinaryFunction<number>): UnaryFunction<number> {
  return (a: number) => binary(a, a);
}
