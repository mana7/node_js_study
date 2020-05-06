let Car = class {
  constructor (name) {
    this.name = name;
  }

  drive() {
    console.log("zoom zoom ...");
  }
};

Car.drive();

let Lamborghini = class extends Car {
  constructor(name) {
    super(name);
  }

  echo() {
    super.drive();
  }

  drive() {
    console.log(`fire ${this.name}`);
  }
};

let car = new Lamborghini("lamborghini");
car.echo();
car.drive();
