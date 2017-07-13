declare module 'lodash' {

  declare type Predicate<T> =
    | ((value: T, index: number, array: Array<T>) => any)

  declare class Lodash {
    // Array
    take<T>(array: ?Array<T>, n?: number): Array<T>;
    takeRight<T>(array: ?Array<T>, n?: number): Array<T>;
  }

  declare var exports: Lodash;
}
