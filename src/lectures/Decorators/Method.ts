function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value as Function;
  descriptor.value = function (...args: any) {
    console.log("Before");
    originalMethod.call(this, args);
    console.log("After");
  };
}

class Person {
  @Log
  greet(message: string) {
    console.log("Greet: ", message);
  }
}

let person = new Person();
person.greet("Hello");
