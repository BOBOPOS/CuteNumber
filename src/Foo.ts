
export class Foo {
  bar() {
    return 'bar'
  }
}

export function isCuteNumber(numbers:number[]):boolean {
  var evenNumbers = findEvenNumbers(numbers)
  var maxNumber = findMaxNumber(evenNumbers)
  return maxNumber>10;
}

function findEvenNumbers(numbers:number[]):number[]{
  return numbers.filter(num => num%2 === 0);
}
function findMaxNumber(numbers:number[]):number {
  return Math.max(...numbers)
}

