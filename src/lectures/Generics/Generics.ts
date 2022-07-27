// Array
interface TArray<T> {
  length: number;
  [index: number]: T;
}

const numbersList: TArray<number> = [1, 2, 3];
interface Student {
  id: number;
  name: string;
}

const studentsList: TArray<Student> = [{ id: 1, name: "John" }];

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

// Function
class ArrayUtils {
  static wrapInArray<T>(value: T) {
    return [value];
  }
}

let numbers = ArrayUtils.wrapInArray(1);

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

// Constraints Class
class User {
  constructor(public name: string) {}
}

class Admin extends User {}

echo(new User("a"));
echo(new Admin("a"));
