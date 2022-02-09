/* Type Aliases */
type Combiner = number | string;
type resultCombier = 'returnString' | 'returnNumber';

/* Union Types */
const answer = []

function combine(input1: number | string, input2: number | string) {
  let result;
  if(typeof input1 == 'number' && typeof input2 == 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  answer.push(result);
}

const combineNumber = combine(10, 10);
const combineString = combine('Lucas', 'Ella');
console.log(answer);

/* Literal types */
const options = [];
function calculateArea(input1: Combiner, input2: Combiner, resultType: 'returnString' | 'returnNumber', ) {
  let result: Combiner;
  if(resultType == 'returnString') {
    result = input1.toString() + input2.toString();
  } else if(resultType == 'returnNumber'){
    result = +input1 + +input2;
  }

  options.push(result);
}

calculateArea('10', '10', 'returnNumber');
calculateArea(20, 20, 'returnString')
console.log(options);