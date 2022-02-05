/* Notes about the TSC compiler
 * tsc filename.js = runs compiler for specific file
 * tsc filename.js --watch or --w = automatically runs the compile everytime the files is saved
 * tsc --init = creates the tsconfig.json that allow different configuration within the files
 * tsc --watch or --w = watches all the files withing a project folder */

const button = document.querySelector('.button');

function buttonClickHandler(message: string) {
  console.log(message);
}

if(button) {
  button.addEventListener('click', buttonClickHandler.bind(null, 'Hello'));
}


// REST parameters
const add = (...numbersArray: number[]) => {
  return numbersArray.reduce((value, result) => {
    return value + result;
  }, 0);
}

const addNumbers = add(1, 2, 3, 4, 5);
console.log(addNumbers);

const projects = ['Grillo', 'Co-op', 'Exporta'];
const languages = {
  'backend': 'PHP',
  'frontend': 'JavaScript'
};

// Array and object destructiring
const [proj1, proj2] = projects;
console.log(`We are working on project ${proj1} & ${proj2}`);

const {backend: baseLang, frontend: kidLang} = languages;
console.log(`We are using ${baseLang} and ${kidLang}`); 