export type BinaryFunction<T> = (a: T, b: T) => T;
export type NAryFunction<T> = (...args: T[]) => T;
export type UnaryFunction<T> = (a: T) => T;
