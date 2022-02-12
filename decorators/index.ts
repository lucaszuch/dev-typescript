// Decorators are used to write codes for other developers to use
// We build a function that returns another function to be executed, nornally nesting the constructor
function Logger(text: string) {
  // Decorator factory
  return function (constructor: Function) {
    console.log('Logging..');
    console.log(constructor);
  };
}

// The @ symbol initializes the class/function that will be called
@Logger('Starts logging..')
class Log {
  a: number;

  constructor(_a: number) {
    this.a = _a;
    console.log('Logging the number: ' + _a);
  }

  getNumber(int: number) {
    console.log(int);
  }
}

const aNumber = new Log(10);

// Generating HTML via decorators factories
function DisplayList(list: string, el: string) {
  return function (constructor: any) {
    const element = document.getElementById(el);
    const user = new constructor();
    if (element) {
      element.innerHTML = list;
      let listItem = document.createElement('li');
      if (user.name) {
        element.querySelector('ul')!.appendChild(listItem);
        element.querySelector('li')!.textContent = user.name;
      }
    }
  }
}

@DisplayList('<ul class="list"></ul>', 'container')
class User {
  name = 'Lucas';
  isAdmin = true;
}

const theUser = new User();