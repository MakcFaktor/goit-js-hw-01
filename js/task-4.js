'use strict';

const credits = 23580;
const pricePerDroid = 3000;
const amountDroids = prompt('Сколько дроидов Вы хотите купить:');
let totalPrice;

if (amountDroids === null) {
  console.log('Отменено пользователем!');
} else {
  totalPrice = amountDroids * pricePerDroid;
  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
  } else {
    console.log(`Вы купили ${amountDroids} дроидов, на счету осталось ${credits - totalPrice} кредитов`);
  }
}