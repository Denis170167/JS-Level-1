// Задание с температурой
//alert('Задание №1')
//let T = prompt('Введите температуру в Цельсиях');
//T =+T;
//let answer = (9/5)*T+32;
//alert('Температура в Фаренгейтах равна ' + answer);

//Задание второе
//alert('Задание №2')
//let name = prompt('Введите имя Администратора');
//let admin = name;
//alert('Имя администратора ' + admin);

//Задание №3
//let A = prompt('Чему будет равно выражение 1000 + "108" в JS?');
//A = 1008 + '108';
//alert(A);

//Задание №4

// HomeWork 2
//  Задание 1
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 Если ++ стоит перед операндом, то значение переменной записывается на единицу больше
d = b++; alert(d);           // 1 Если ++ стоит после операнда, то прибавляется единица, но остается при этом исходное значение
c = (2+ ++a); alert(c);      // 5 2+ (1 + 2) = 5
d = (2+ b++); alert(d);      // 4 2+ (1 + 1) = 4
alert(a);                    // 3 
alert(b);                    // 3
//
// 

//  Задание 2 Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2); //1 + (a = a * 2) = 1 + 4 = 5
//

//   Задание 3
// Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. 
//Затем написать скрипт, который работает по следующему принципу:

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let a = getRandomInt(-20, 50);
let b = getRandomInt(-10, 30);

if(a > 0 && b > 0) {
   alert(a - b);
}
    else if(a < 0 && b < 0) {
        alert(a * b);
    }
    else if (a < 0 && b > 0 || a > 0 && b < 0)
  alert(a + b);

// Задание 4
//Присвоить переменной а значение в промежутке [0..15]. 
//С помощью оператора switch организовать вывод чисел от a до 15.



// Задание 5 
//Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
 var a = 3; b = 4;

 function addition(a, b) {
     return a + b;
 }
 function subtraction(a, b) {
     return a - b;
 }
 function multiplication(a, b) {
     return a * b;
 }
function division(a, b) {
    return a / b;
}


// Задание 6
// Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 – значения аргументов, operation – строка с названием операции. 
//В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).

function mathOperation(arg1, arg2, operation){
    switch(operation){
            case 'addition':
                function addition(arg1, arg2) {
                    return arg1 + arg2;
                }
                break;
            case 'subtraction':
                function subtraction(arg1, arg2) {
                    return arg1 - arg2;
                }
             break;
         case 'multiplication':
                       function multiplication(arg1, arg2) {
                        return arg1 * arg2;
                    }
             break;
            case 'division':
                function division(arg1, arg2) {
                    return arg1 / arg2;
                }
             break;
       }
}