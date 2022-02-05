function addNumber(n1: number, n2: number, toPrint: boolean, phrase: string) {
  if(toPrint) {
    return `${phrase} ${n1 + n2}`;
  }
}

console.log(addNumber(5, 5, true, 'The result is:'));