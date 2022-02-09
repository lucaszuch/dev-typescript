/* function as a type */
function add(n1, n2) {
  return n1 + n2;
}

function printResult() {
  console.log('Hello!');
}

// Assings the varible to a function as type
let combine: (a: number, b: number) => number;
// let combine: Function;

combine = add;
// combine = printResult; -- won't work
console.log(combine(1, 2));

/* Never */
function generateError(message: string, code: number): never {
  throw {message: message, errorCode: code};
}

//generateError('An error occurred: ', 203);