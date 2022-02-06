import { createModuleResolutionCache } from "typescript";

// Guard types support the code to ensure the correct type is being passed
type Department = {
  name: string;
  access: string[];
}

type Employee = {
  name: string;
  privilages: string;
}

type newEmployee = Department | Employee;

let e1 = {
  name: 'Lucas',
  access: ['A1'],
  privilages: 'Admin'
}

function printEmployeeInfo(emp: newEmployee) {
  console.log(`Name: ${emp.name}`);
  if('privilages' in emp) { // we chech if privilage is a thing inside the newEmployee
    console.log(`Starting date: ${emp.privilages}`);
  }

  if('access' in emp) {
    console.log(`Access level: ${emp.access}`);
  }
}

printEmployeeInfo(e1);

// When using classes, we're able to use instanceof
class Car {
  honk() {
    console.log('Bi bi!');
  }
}

class PickUp {
  honk() {
    console.log('Too too!');
  }

  loadPickUp(load: number) {
    console.log(`Loading: ${load} into the pickup!`);
  }
}

type MyCar = Car | PickUp;

// So we create a function that accepts the union type MyCar, but only one of them acceps loadPickUp()
function useVehicle(vehicle: MyCar) {
  vehicle.honk();
  if(vehicle instanceof PickUp)  { // We then check if it belongs to that instance
    vehicle.loadPickUp(100);
  }
}

const car1 = new Car();
const car2 = new PickUp();

useVehicle(car1);
useVehicle(car2);

// Descrimited union can be used as a pattern to object unions
interface Cat {
  type: 'cat';
  runningSpeed: number;
}

interface Parrot {
  type: 'parrot';
  flyingSpeed: number;
}

type Animal = Cat | Parrot;

function moveAnimal(animal: Animal) {
  let speed;
  switch(animal.type)  {
    case 'cat':
      speed = animal.runningSpeed;
      break;
    case 'parrot':
      speed = animal.flyingSpeed;
      break; 
  }
  console.log(`Moving at speed: ${speed} km/h! Woo!!`);
}

moveAnimal({type: 'cat', runningSpeed: 10});
