// Interface
interface Config {
  [property: string]: {
    [validateProperty: string]: string[];
  };
}

// Register the validation objects
const registerValidation: Config = {};

// Validades using @decorators
// We pass a spread operator to make sure we're check all the properties within the object
function checkInput(target: any, propName: string) {
  registerValidation[target.constructor.name] = {
    ...registerValidation[target.constructor.name],
    [propName]: ['required']
  };
}

function checkNumber(target: any, propName: string) {
  registerValidation[target.constructor.name] = {
    ...registerValidation[target.constructor.name],
    [propName]: ['negative']
  };
}

// Validation function
// The function gets the object, assings it to the registerValidation that has a interfaced linked and tests the properties
function validateInputs(object: any) {
  const validateObjectConfig = registerValidation[object.constructor.name];
  // If there's no object to validate, it automatically sets true
  if (!validateObjectConfig) {
    return true;
  }

  // Loops through the objects and then within each property to check the inputs
  // As we don't know which type of validation is running at which time, we pass them inside a switch
  let isValid = true;
  for (let prop in validateObjectConfig) {
    for (let valid of validateObjectConfig[prop]) {
      switch (valid) {
        case 'required':
          isValid = isValid && !!object[prop];
          break;
        case 'negative':
          isValid = isValid && object[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

// Basic class
class Course {
  @checkInput
  title: string;
  @checkNumber
  price: number;

  constructor(_title: string, _price: number) {
    this.title = _title;
    this.price = _price;
  }
}

// Get elements from the DOM
const courseSubmission = document.querySelector('form');
courseSubmission?.addEventListener('submit', (e) => {
  e.preventDefault();
  const titleElement = document.getElementById(
    'course-title'
  ) as HTMLInputElement; // Otherwise TS complains it doesn't exist
  const priceElement = document.getElementById(
    'course-price'
  ) as HTMLInputElement;

  // Fetch the values and transform if necessary
  const title = titleElement.value;
  const price = parseInt(priceElement.value);
  // Create the new obj on click
  const newCourse = new Course(title, price);

  // Run validation
  if (!validateInputs(newCourse)) {
    throw new Error('Invalid submission');
  }
  console.log(newCourse);
});
