// // 1 Цикл

// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 10;
// let totalSalary = 0;

// for (let i = 1; i <= employees; i += 1) {
//   const salary = Math.round(
//     Math.random() * (maxSalary - minSalary) + minSalary
//   );
//   console.log(`ЗП працівника ${i} складає ${salary}`);
//   totalSalary += salary;
// }
// console.log(`Загальна сума зарплати: ${totalSalary}`);

// // 2 Цикл

// const min = 7;
// const max = 55;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//   console.log(i);

//   if (i % 10 === 0) {
//     total += i;
//     console.log(`Кратні 10ти ${i}`);
//   }
// }
// console.log(total);

// // 3 - Відображення часу (if...else)

// Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді рядка
// формату `"14 г. 26 хв."`. Якщо значення змінної `minutes` дорівнює `0`, то
// виводь рядок `"14 г."`, без хвилин.

// const hours = 14;
// const minutes = 15;
// let results = `${hours} г.`;
// if (minutes !== 0) {
//   results += ` ${minutes} хв.`;
// }
// console.log(results);

// // 4 Цикл на спадання

// const min = 5;
// const max = 14;
// let total = 0;

// for (i = 14; i > 5; i -= 1) {
//   console.log(i);

//   if (i % 2 !== 0) {
//     console.log(`Не парне число ${i}`);
//     total += i;
//   }
// }
// console.log(total);

// // 5- Дедлайн здачі проекту (if...else)

// Напиши скрипт для відображення часу дедлайну здачі проекту. Використовуй
// конструкцію `if...else`.

// - Якщо до дедлайну 0 днів - виведи рядок `"Сьогодні"`
// - Якщо до дедлайну 1 день - виведи рядок `"Завтра"`
// - Якщо до дедлайну 2 дні - виведи рядок `"Післязавтра"`
// - Якщо до дедлайну 3+ днів - виведи рядок `"Дата у майбутньому"`

// const daysUntilDeadline = 5;
// if (daysUntilDeadline === 0) {
//   console.log("Сьогодні");
// } else if (daysUntilDeadline === 1) {
//   confirm.log("Завтра");
// } else if (daysUntilDeadline === 2) {
//     console.log("Післязавтра");
// } else if(daysUntilDeadline >= 3) {
//     console.log("Дата у майбутньому")
// }

// // switch

// const daysUntilDeadline = 5;
// switch (daysUntilDeadline) {
//   case 0:
//     console.log("Сьогодні");
//     break;
//   case 1:
//     console.log("Завтра");
//     break;
//   case 2:
//     console.log("Післязавтра");
//     break;
//   default:
//     console.log("Дата у майбутньому");
// }

// // 6 - Введення користувача та розгалуження

// Напиши скрипт, який питатиме логін за допомогою `prompt` та логувати
// результат у консоль браузера.

// - Якщо відвідувач вводить `"Адмін"`, то `prompt` запитує пароль
// - Якщо нічого не введено або натиснуто клавішу Esc - вивести рядок `"Скасовано"`
// - В іншому випадку вивести рядок `"Я вас не знаю"`

// Пароль перевіряти так:

// - Якщо введено пароль `"Я адмін"`, то вивести рядок `"Здрастуйте!"`
// - Інакше виводити рядок `"Невірний пароль"`

// const loginName = prompt("Enter login");

// if (loginName === "Адмін") {
//   const password = prompt("Enter password");

//   if (password === "Я адмін") {
//     console.log("Здрастуйте!");
//   } else {
//     console.log("Невірний пароль");
//   }
// } else if (!loginName) {
//   console.log("Скасовано");
// } else {
//   console.log("Я вас не знаю");
// }

// // 7 - Slug - це завжди рядок у нижньому регістрі, слова якого розділені тире.

// function slugify(title) {
//   //1

//   // let titleLowerCase = title.toLowerCase();
//   // let titleSplit = titleLowerCase.split(" ");
//   // let slug = titleSplit.join("-");
//   // return slug;

//   //2
//   let titleLowerCase = title.toLowerCase();
//   let slug = titleLowerCase.replaceAll(" ", "-");
//   return slug;
// }

// console.log(slugify("WeddggrEDF DDRFFFFF DfcE"));
// console.log(slugify("WeddggrEDF Dse Dddfr DDRFFFFF DfcE"));

// // 8 ЗАДАЧА: КОМПОЗИЦІЯ МАСИВІВ

// function makeArray(firstArray, secondArray, maxLength) {

//   const newArrey = firstArray.concat(secondArray).slice(0, maxLength);
//   return newArrey;
// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));

// // 9 ЗАДАЧА: ПОШУК НАЙДОВШОГО СЛОВА

// function findLongestWord(string) {
//   const arrayWords = string.split(" ");
//   let longestWord = arrayWords[0];
//   console.log(longestWord);
//   let maxLength = longestWord.length;
//   console.log(maxLength);

//   for (let i = 1; i < arrayWords.length; i += 1) {
//     if (longestWord.length < arrayWords[i].length) {
//       longestWord = arrayWords[i];
//     }
//   }
//   return longestWord;
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// // 10
