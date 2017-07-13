declare module 'lodash' {

  declare class Lodash {
    // Array
    take<T>(array: ?Array<T>, n?: number): Array<T>;
    takeRight<T>(array: ?Array<T>, n?: number): Array<T>;
  }

  declare var exports: Lodash;
}
