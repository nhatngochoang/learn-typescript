// export const isPositive  = (n:number)=>{
//    return n>0 ;
// }

export function isPositive(n: number): boolean {
  return n > 0;
}

export function createStudent(student: { id: number; name: string; age: number }) {
  const { id, name, age } = student;
}

let func: Function;

func = (a: number, b?: number | string) => {
  console.log(a);
  console.log(b);
};

func = (a: number, b: number | string = 10): number => {
  return a;
};

interface Person2 {
  name: string;
  age: number;
  speak(text: string): void;
  spend(amt: number): number;
}

const henry: Person2 = {
  name: 'nhat',
  age: 22,
  speak(text: string): void {
    console.log(text);
  },
  spend(amt: number): number {
    return amt;
  },
};
// Func Signature
let func2: (a: number, b: string) => void;

let mixed: (string | number | undefined)[];

interface Student {
  id: number;
  name: string;
}

// Get all student keys ➤ literal type
type StudentKeys = keyof Student;
const keyList: StudentKeys = 'id';

// 1 arg
interface List<Type> {
  length: number;
  [index: number]: Type;
}
// 2 args
interface List2<T, K> {
  id: K;
  length: number;
  [index: number]: T;
}
interface List3<T> {
  length: number;
  [index: string]: T | number; // index type must cover
}

const studentList: Array<Student> = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

const studentList2: List<Student> = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

const numberList: Array<number> = [1, 2, 3];
const numberList2: List<number> = [1, 2, 3];

const wordList: Array<string> = ['easy', 'frontend'];
const wordList2: List<string> = ['easy', 'frontend'];

// Mapped Types
type OptionsFlags<T> = {
  [Property in keyof T]: boolean;
};

type FeatureFlags = {
  darkMode: () => void;
  newUserProfile: () => void;
};

type FeatureOptions = OptionsFlags<FeatureFlags>;

// Complex Map
type Getters<T> = {
  [Property in keyof T as `get${Capitalize<string & Property>}`]: () => T[Property];
};

interface Person {
  name: string;
  age: number;
  location: string;
}

type LazyPerson = Getters<Person>;

// Record<Keys,Type>

interface Info {
  age: number;
  breed: string;
}

type Name = 'Cat1' | 'Cat2';

const cats: Record<Name, Info> = {
  Cat1: { age: 1, breed: 'name1' },
  Cat2: { age: 2, breed: 'name2' },
};

cats.Cat1;

// Pick<Type,Keys> ➤ make new type by pick some keys from old

interface Todo {
  title: string;
  desc: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, 'title' | 'desc'>;

const todo: TodoPreview = {
  title: 'Todo',
  desc: 'todo desc',
};

todo;

// Omit<Type,Keys> ➤ make new type by pick -(some keys from old)

// ReturnType ➤ make new type === return type
type T0 = ReturnType<() => string>;
