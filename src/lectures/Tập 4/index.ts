// 1 Arg same
const lastT = <T>(arr: Array<T>) => arr[arr.length - 1];
const lNum = lastT([1, 2, 3]);
const lStr = lastT(["a", "b", "c"]);
const lDynamic = lastT<boolean>([true, false, false]);

const makeArr = <T>(x: T) => [x];
const arrNum = makeArr(1);

// 2 Args
const makeTupleWithDefault = <X, Y = number>(x: X, y: Y): [X, Y] => [x, y];

/*----------------------------------------------------------------*/
// Make new data base on old data
const makeFullName = <T extends { fName: string; lName: string }>(obj: T) => ({
  ...obj,
  fullName: obj.fName + obj.lName,
});

const fullname1 = makeFullName({ fName: "Nhat", lName: "Hoang", age: 20 });
console.log(fullname1);

// Make new data not base on old data
const addId = <T extends object>(item: T) => {
  const uid = Math.floor(Math.random() * 100);
  return {
    ...item,
    uid,
  };
};

const item1 = addId({ name: "Nhat", age: 20 });
console.log(item1);

/*----------------------------------------------------------------*/
// Generics in Interface
// 1 arg
interface List<Type> {
  length: number;
  [index: number]: Type;
}
interface List3<T> {
  length: number;
  [index: string]: T | number; // index type must cover length type
}
// 2 args
interface List2<T, K> {
  id: K;
  length: number;
  [index: number]: T;
}
// Index Signature
class SeatAssignment {
  [seatNumber: string]: string;
}

let seats = new SeatAssignment();
seats.A1 = "Mosh";
seats["A2"] = "John";
console.log(seats);
/*----------------------------------------------------------------*/
interface Student {
  id: number;
  name: string;
}

// Example 1
const numberList: Array<number> = [1, 2, 3];
const numberList2: List<number> = [1, 2, 3];

const wordList: Array<string> = ["easy", "frontend"];
const wordList2: List<string> = ["easy", "frontend"];

// Example 2
interface Source<T> {
  uid: number;
  name: string;
  data: T;
}

type ListSource = Source<number[]>;
const listSource: ListSource = {
  uid: 12,
  name: "nhat",
  data: [1, 2, 3],
};
// Get all student keys ➤ literal type
type StudentKeys = keyof Student;
const keyList: StudentKeys = "id";

const studentList: Array<Student> = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

const studentList2: List<Student> = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

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
  [Property in keyof T as `get${Capitalize<
    string & Property
  >}`]: () => T[Property];
};

interface Person {
  name: string;
  age: number;
  location: string;
}

type LazyPerson = Getters<Person>;
