// Array
interface TArray<T> {
  length: number;
  [index: number]: T;
}

const numbersList: TArray<number> = [1, 2, 3];
interface Student2 {
  id: number;
  name: string;
}

const studentsList: TArray<Student2> = [{ id: 1, name: "John" }];

// Object
interface TObject<T> {
  length: number;
  isAdj: boolean;
  [index: string]: T | number | boolean;
}

// Class
class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}
let pair = new KeyValuePair(1, "a");
/*--------------------------------------------------------*/
class Stack<T> {
  private elements: T[] = [];

  constructor(private size: number) {}
  isEmpty(): boolean {
    return this.elements.length === 0;
  }
  isFull(): boolean {
    return this.elements.length === this.size;
  }
  push(element: T): void {
    if (this.elements.length === this.size) {
      throw new Error("The stack is overflow!");
    }
    this.elements.push(element);
  }
  pop(): T | undefined {
    if (this.elements.length == 0) {
      throw new Error("The stack is empty!");
    }
    return this.elements.pop();
  }
}

// Function
class ArrayUtils {
  static wrapInArray<T>(value: T) {
    return [value];
  }
}
let numbers = ArrayUtils.wrapInArray(1);
/*--------------------------------------------------------*/
function getRandomElement<T>(items: T[]): T {
  let randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}
/*--------------------------------------------------------*/
function merge<U, V>(obj1: U, obj2: V) {
  return {
    ...obj1,
    ...obj2,
  };
}
let result2 = merge({ name: "John" }, { jobTitle: "Frontend Developer" });
/*--------------------------------------------------------*/
function prop<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

// Interface
interface Result<T> {
  data: T | null;
  error: string | null;
}

function fetch<T>(url: string): Result<T> {
  return { data: null, error: null };
}

interface User {
  username: string;
}

interface Product {
  title: string;
}

let result = fetch<User>("url");

result.data?.username;

// Constraints
interface User {
  name: string;
}

function echo<T extends number | string | User>(value: T): T {
  return value;
}
/*--------------------------------------------------------*/
function mergeWithConstraints<U extends object, V extends object>(
  obj1: U,
  obj2: V
) {
  return {
    ...obj1,
    ...obj2,
  };
}

//! Error
// let person = mergeWithConstraints(
//   { name: 'John' },
//   25
// );

// Constraints Class
class User {
  constructor(public name: string) {}
}

class Admin extends User {}

echo(new User("a"));
echo(new Admin("a"));

// Interface Example : Methods
interface Collection<T> {
  add(o: T): void;
  remove(o: T): void;
}
class ListGeneric<T> implements Collection<T> {
  private items: T[] = [];

  add(o: T): void {
    this.items.push(o);
  }
  remove(o: T): void {
    let index = this.items.indexOf(o);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }
}
let list = new ListGeneric<number>();

for (let i = 0; i < 10; i++) {
  list.add(i);
}

// Interface Example: Indexs
interface Options<T> {
  [name: string]: T;
}

let inputOptions: Options<boolean> = {
  disabled: false,
  visible: true,
};
