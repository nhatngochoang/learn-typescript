// type ReadOnlyProduct = {
//   readonly [K in keyof ProductKeyOf]: ProductKeyOf[K];
// };

// let product: ReadOnlyProduct = {
//   name: "a",
//   price: 1,
// };

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
