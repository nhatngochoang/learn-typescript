interface ProductKeyOf {
  name: string;
  price: number;
}

// keyof T => 'name' | 'price'
class Store1<T> {
  protected _objects: T[] = [];
  add(obj: T): void {
    this._objects.push(obj);
  }
  find(property: keyof T, value: unknown): T | undefined {
    return this._objects.find((obj) => obj[property] === value);
  }
}

let store1 = new Store1<ProductKeyOf>();
store1.add({ name: "Milk", price: 1 });
store1.find("name", "Milk");
store1.find("price", 1);
// store1.find('nonExistingProperty', 1)
