// Nguyên mẫu
abstract class Car {
  public description: string = "Basic Car";

  public getDescription(): string {
    return this.description;
  }

  public abstract cost(): number;
}

class ModelS extends Car {
  public override description = "Model S";

  public cost(): number {
    return 73000;
  }
}

class ModelX extends Car {
  public override description = "Model X";

  public cost(): number {
    return 77000;
  }
}

// Decorator
abstract class CarOptions extends Car {
  decoratedCar: Car;
  constructor(car: Car) {
    super();
    this.decoratedCar = car;
  }

  public abstract override getDescription(): string;
  public abstract override cost(): number;
}

class EnhancedAutoPilot extends CarOptions {
  public getDescription(): string {
    return this.decoratedCar.getDescription() + ", Enhanced AutoPilot";
  }
  public cost(): number {
    return this.decoratedCar.cost() + 5000;
  }
}

class RearFacingSeats extends CarOptions {
  public getDescription(): string {
    return this.decoratedCar.getDescription() + ", Rear Facing Seats";
  }
  public cost(): number {
    return this.decoratedCar.cost() + 4000;
  }
}

let myTesla = new ModelS();
myTesla = new RearFacingSeats(myTesla);
myTesla = new EnhancedAutoPilot(myTesla);

console.log(myTesla.cost());
console.log(myTesla.getDescription());
