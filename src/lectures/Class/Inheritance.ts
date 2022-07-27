export class Person {
   constructor(public firseName: string, public lastName: string) {}

   get fullName() {
      return this.firseName + ' ' + this.lastName
   }

   walk() {
      console.log('Walk')
   }
}

export class Student extends Person {
   constructor(public studentId: number, firseName: string, lastName: string) {
      super(firseName, lastName)
   }

   learn() {
      console.log('Learn')
   }
}

// let studentObj = new Student(1, 'John', 'Smith')

// private -- not access, not inherit
// protected -- not access, can inherit
