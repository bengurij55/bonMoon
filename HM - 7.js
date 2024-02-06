HM - 7

// Custom IsNaN

function customIsNaN(value) {
    if (typeof value !== 'number') return true;
    return (value !== value);
  };

////////////////////////////////////////////////////////////////////

  //Custom PadStart
function customPadStart(str, targetLength, padString) {
  str = String(str);
  if (targetLength <= str.length) return str;

  while (str.length < targetLength) {
    str = padString + str;
  }
  return str;
}

//Custom PadEnd
function customPadEnd(str, targetLength, padString) {
  str = String(str);
  if (targetLength <= str.length) return str;

  while (str.length < targetLength) {
    str = str + padString;
  }
  return str;
}
// Test scenarios
console.log(customPadStart('hello', 10, 'X')); // 'XXXXXhello'
console.log(customPadEnd('hello', 10, 'X')); // 'helloXXXXX'
console.log(customPadEnd('hello', 6, 'X')); // 'helloX'

////////////////////////////////////////////////////////////////////

//Custom function for check probability theory
function checkProbabilityTheory(count) {
    let sumOfNumbers = 0;
    let evenCount = 0;
    let oddCount = 0;
    for (let i = 0; i < count; i++) {
        let randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
        if (randomNumber % 2 === 0) evenCount++
         else oddCount++;
    }
    console.log('Even numbers total count = ' + evenCount);
    console.log('Odd numbers total count = ' + oddCount);

    sumOfNumbers = evenCount + oddCount;
    console.log('Number of all generated numbers ' + sumOfNumbers);

    let evenPercentage = (evenCount / count) * 100;
    let oddPercentage = (oddCount / count) * 100;
    console.log('Percentage of even numbers = ' + evenPercentage.toFixed(2) + '%');
    console.log('Percentage of odd numbers = ' + oddPercentage.toFixed(2) + '%');
}

checkProbabilityTheory(1000);


