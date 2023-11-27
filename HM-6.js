//HM-6 

// Part 1 - 1 (for loop)

function drawTriangle(number, symbol) {
  let result = '';
  for(let i = 0; i <= number; i++){
    result += symbol.repeat(i) + '\n';
  }
  console.log(result);
} 
drawTriangle(5, '*');

// Part 1 - 2 (do while loop)

function drawTriangle(number, symbol) {
  let result = 0;
  do {
    console.log(symbol.repeat(result + 1));
    result ++;
  } while(result < number);
} 
drawTriangle(5, '*');

// Part - 2 (numbers, which are not divisible by 3)

for(let i = 1; i <= 100; i++){
  if(i % 3 !== 0) 
  console.log(i);
}

// Part - 3 (custom Math.pow())

function pow(x,y) {
  let result = 1;
  if(y < 0){
    console.log(1);
  }
  for (let i = 0; i < y; i++){
      result *= x;
  }
console.log(result);
}
pow(2,3);