function powMath (number, exp) {
     var result = number;

     for (var i = 1; i < exp; i ++) {
         result *= number;
     }

     return result;
}

var number = prompt('Вводим число', '');
var exp = prompt('Вводим степень','');

powMath (number, exp); 

alert( powMath (number, exp) );

console.log('Результат = ', powMath (number, exp) );
