// 1.REMOVE a member of a Union Type
type Letters = "a" | "b" | "c";

type RemoveC<T> = T extends "c" ? never : T;

type WithoutC = RemoveC<Letters>;

// 2.Improving OBJECT.KEYS in TypeScript
const myObject = {
  a: 1,
  b: 2,
  c: 3,
};

const objectKeys = <Obj>(obj: Obj) => Object.keys(obj) as Array<keyof Obj>;

objectKeys(myObject).forEach((key) => console.log(myObject[key]));
