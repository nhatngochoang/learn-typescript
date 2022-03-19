// export const isPositive  = (n:number)=>{
//    return n>0 ;
// }

export function isPositive(n:number):boolean{
   return n>0 ;
}

export function createStudent(student: {id:number, name:string, age:number}){
   const {id, name, age} = student
}


interface Student {
   id: number;
   name: string;
}

// Get all student keys ➤ literal type
type StudentKeys = keyof Student;
const keyList: StudentKeys = 'id'

// 1 arg
interface List<Type>{
   length: number;
   [index: number]: Type
}
// 2 args
interface List2<T, K>{
   id: K;
   length: number;
   [index: number]: T;
}
interface List3<T>{
   length: number;
   [index: string]: T | number; // index type must cover 
}

const studentList: Array<Student> = [
   { id: 1, name: 'Alice'},
   { id: 2, name: 'Bob'}
]

const studentList2: List<Student> = [
   { id: 1, name: 'Alice'},
   { id: 2, name: 'Bob'}
]

const numberList: Array<number> = [1, 2, 3];
const numberList2: List<number> = [1,2,3]

const wordList: Array<string> = ['easy', 'frontend'];
const wordList2: List<string> = ['easy', 'frontend'];
      
// Mapped Types
type OptionsFlags<T> = {
   [Property in keyof T]: boolean
}

type FeatureFlags = {
   darkMode: () => void;
   newUserProfile: () => void
}

type FeatureOptions = OptionsFlags<FeatureFlags>

// Complex Map
type Getters<T> ={
   [Property in keyof T as `get${Capitalize<string & Property>}`]:()=> T[Property]
}

interface Person {
   name: string;
   age: number;
   location: string;
}

type LazyPerson = Getters<Person>