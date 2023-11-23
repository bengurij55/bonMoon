
// Значения для конвертации км в м
//var unitValueName = 'km';
//var unitValueNumber = 1;

// Значения для конвертации часов в минуты
 //var unitValueName = 'hours';
 //var unitValueNumber = 1;

// Значения для конвертации кг в г
 //var unitValueName = 'kg';
 //var unitValueNumber = 1;

var result;

switch(unitValueName) {
  case 'km':
  console.log(result = unitValueNumber*1000 + ' m');
  break;

  case 'hours':
  console.log(result = unitValueNumber*60 + ' min');
  break;

   case 'kg':
  console.log(result = unitValueNumber*1000 + ' g');
  break;

  default:{
console.log('Not valid input. Please use hours, kg or km as a unit.')
  }
}