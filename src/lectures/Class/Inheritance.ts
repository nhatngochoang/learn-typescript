export class Person {
   constructor(public firstName: string, public lastName: string) {}

   get fullName() {
      return this.firstName + ' ' + this.lastName
   }

   walk() {
      console.log('Walk')
   }
}

export class Student extends Person {
   constructor(public studentId: number, firstName: string, lastName: string) {
      super(firstName, lastName)
   }

   learn() {
      console.log('Learn')
   }
}

// let studentObj = new Student(1, 'John', 'Smith')

// private -- not access, not inherit
// protected -- not access, can inherit
