function Capitalize(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.get;
  descriptor.get = function () {
    const result = originalMethod?.call(this);
    return typeof result === "string" ? result.toUpperCase() : result;
  };
  return descriptor;
}
class Person1 {
  constructor(public fName: string, public lName: string) {}

  @Capitalize
  get fullName() {
    return this.fName + " " + this.lName;
  }
}

let person1 = new Person1("nhat", "hoang");
console.log(person1.fullName);
