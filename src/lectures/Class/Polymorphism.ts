import { Person, Student } from './Inheritance'
import { Teacher } from './MethodOverride'

// Object has many Form
function printNames(people: Person[]) {
   for (let person of people) console.log(person.fullName)
}

class Principal extends Person {
   override get fullName() {
      return 'Principal: ' + super.fullName
   }
}

printNames([
   new Student(1, 'John', 'Smith'),
   new Teacher('Mosh', 'Hamedani'),
   new Principal('Mary', 'Jane'),
])

// --new code instead of changing old code--
