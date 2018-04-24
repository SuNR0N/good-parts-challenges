import {
  BinaryFunction,
  UnaryFunction,
} from './types';

type Result = (a: number) => UnaryFunction<number>;

/**
 * Function that takes a binary function and makes it callable with two invocations
 * @param binary Binary function
 */
export function liftf(binary: BinaryFunction<number>): Result {
  return (a: number) => (b: number) => binary(a, b);
}
