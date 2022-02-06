// Optional Chaining
const fetchData = {
  id: 1,
  name: 'Lucas',
  job: {
      title: 'Developer',
      description: 'Writes colorful stuff on the screen.'
  }
}

//console.log(fetchData.job.title);
// Now, if the line above didn't exist, it would throw a runtime error
// Avoid using:
console.log(fetchData?.job?.title); // this would ensure that if the property doesn't exist, it wouldn't fetch it, avoiding run time errors


//Nullish Coalescing
const userInput = 'foo';
const storeData = userInput ?? 'Default';
console.log('It returns: ' + storeData);