// Interfaces defines how a object should look like
// It means that everytime we initialize the object it will have to follow that specific blueprint
// Interface can have inheritance from multiple interfaces

interface Named {
  name: string; // accepts readonly
  surname?: string; // option classes
}

interface Robot extends Named {
  greet(phrase: string): void;
}

class Droid implements Robot {
  name: string;
  surname?: string;
  model: string;

  constructor(_name: string, _model: string, _surname?: string) {
    this.name = _name;
    this.model = _model
    this.surname = _surname;
  }

  greet(phrase: string) {
    return `${phrase} ${this.name}`
  }
}

let r2d2: Droid;

r2d2 = {
  name: 'R2-D2',
  surname: 'Battle',
  model: 'Altra-12',
  greet(phrase: string) {
    if(this.surname) {
      return `${phrase} ${this.name} of ${this.surname}!`
    }
    return `${phrase} ${this.name}`
  }
}

console.log(r2d2.greet('Hey!'));
console.log(r2d2.model);