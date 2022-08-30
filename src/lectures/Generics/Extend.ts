type TypeName<T> = T extends string
  ? "string"
  : T extends number
  ? "number"
  : T extends boolean
  ? "boolean"
  : T extends undefined
  ? "undefined"
  : T extends Function
  ? "function"
  : "object";

type T0 = TypeName<string>; // "string"
type T1 = TypeName<"a">; // "string"
type T2 = TypeName<true>; // "boolean"
type T3 = TypeName<() => void>; // "function"
type T4 = TypeName<string[]>; // "object"

// -------------------------------------------------------
interface Product {
  name: string;
  price: number;
}

class Store<T> {
  protected _objects: T[] = [];
  add(obj: T): void {
    this._objects.push(obj);
  }
}

// Pass to child class
class CompressibleStore<T> extends Store<T> {
  compress() {}
}

let store = new CompressibleStore<Product>();
store.compress();

// Hạn chế
class SearchableStore<T extends { name: string }> extends Store<T> {
  find(name: string): T | undefined {
    return this._objects.find((obj) => obj.name === name);
  }
}

// Fix cứng
class ProductStore extends Store<Product> {
  filterByCategory(category: string): Product[] {
    return [];
  }
}
