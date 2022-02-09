// Generic types allow flexibility when creating objects
const names: Array<string> = []; // would be the same as const names: string[];

// Here we use it to declare that a const has a Promise type and which type the object is expected to return
const promise: Promise<number> = new Promise((resolve, reject) => {
  setInterval(() => {
    resolve(10);
  }, 2000);
});

// Hence why here when we call the split() method [excluive for strings], it will display and error
/*promise.then(data => {
  data.split(' ');
});*/

// Generic functions
// Image the following situation
function combine(a: object, b: object) {
  return Object.assign(a, b);
}

// If we try to return one of the elements inside, we get an error
const combiner = combine({ name: 'Ella' }, { age: 29 });
//console.log(merge.age);
console.log(combiner);

// Potentially, we can use generics on functions
// Let's refactor the function
function merge<T extends object, U extends object>(a: T, b: U) {
  return Object.assign(a, b);
}

// Now, typescript is able to understand the we are return this object
const merged = merge({ name: 'Ella' }, { age: 29 });
console.log(`Users age: ${merged.age}`);

// We can also combine it with interfaces and tuples
interface Text {
  text: string;
}

function counter<T extends Text>(el: T): [T, string] {
  let description = 'No value';
  if (el.length < 2) {
    description = 'Got only one!';
  } else {
    description = `Got ${el.length} elements!`;
  }
  return [el, description];
}

// We also have generic classes when we don't want to be strict on types but we want it to be uniform
// Different from union as it locks a single type, while union gives the flexibility from all the given types
class Configutor<T> {
  protected data: T[] = [];

  addItems(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

// Now we can pass different types inside the class, but always uniform
const config1 = new Configutor<string>();
config1.addItems('A');
config1.addItems('B');
config1.addItems('C');
config1.removeItem('B');
console.log(config1.getItems());

const config2 = new Configutor<string | number>();
config2.addItems('A');
config2.addItems('B');
config2.addItems('C');
config2.removeItem('B');
console.log(config2.getItems());