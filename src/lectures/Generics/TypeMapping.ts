// type ReadOnlyProduct = {
//   readonly [K in keyof ProductKeyOf]: ProductKeyOf[K];
// };

// let product: ReadOnlyProduct = {
//   name: "a",
//   price: 1,
// };

// ! Create new type base on old types, not interface
type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

type Optional<T> = {
  [K in keyof T]?: T[K];
};

type Nuallable<T> = {
  [K in keyof T]: T[K] | null;
};

let product: ReadOnly<ProductKeyOf> = {
  name: "a",
  price: 1,
};

interface Student {
  name: string;
  age: number;
}

type MappedTypes = {
  [K in keyof Student]: boolean; // change string and number to boolean
};
