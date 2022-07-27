import { Person } from './Inheritance'

// Method Override
export class Teacher extends Person {
   override get fullName() {
      return 'Teacher:' + super.fullName
   }
}

// let teacherObj = new Teacher('Thu', 'Huong')

// console.log(teacherObj.fullName)
