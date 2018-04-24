import {
  BinaryFunction,
  UnaryFunction,
} from './types';

/**
 * Function that takes a binary function and an argument and returns a function that can take a second argument
 * @param binary Binary function
 * @param a Number
 */
export function curry(binary: BinaryFunction<number>, a: number): UnaryFunction<number> {
  return (b: number) => binary(a, b);
}
