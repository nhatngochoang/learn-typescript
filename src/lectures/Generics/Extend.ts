interface Product {
   name: string
   price: number
}

class Store<T> {
   protected _objects: T[] = []
   add(obj: T): void {
      this._objects.push(obj)
   }
}

// Pass to child class
class CompressibleStore<T> extends Store<T> {
   compress() {}
}

let store = new CompressibleStore<Product>()
store.compress()

// Hạn chế
class SearchableStore<T extends { name: string }> extends Store<T> {
   find(name: string): T | undefined {
      return this._objects.find((obj) => obj.name === name)
   }
}

// Fix cứng
class ProductStore extends Store<Product> {
   filterByCategory(category: string): Product[] {
      return []
   }
}
