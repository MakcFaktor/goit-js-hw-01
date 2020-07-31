'use strict';

let sum = 0;
while (true) {
  let value = +prompt("Введите число");
  if (!value) break;
  sum += value;
}
alert(`Общая сумма чисел равна ` + sum);