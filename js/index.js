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

// // 10 ЗАДАЧА: КОЛЕКЦІЯ ЗНАЧЕНЬ ВЛАСТИВОСТІ
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   const arrValues = [];

//   for (let product of products) {
//     const arrKeys = Object.keys(product);
//     for (const key of arrKeys) {
//       if (key === propName) {
//         arrValues.push(product[key]);
//       }
//     }
//   }
//   return arrValues;
// }
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("pri."));

// // 2 рішення

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   let props = [];

//   for (let product of products) {
//     if (product.hasOwnProperty(propName)) {
//       props.push(product[propName]);
//     }
//   }

//   return props;
// }
// console.log(getAllPropValues("pre"));

// // 12 РОЗШИРЮЄМО ІНВЕНТАР

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],

//   getPotions() {
//     return this.potions;
//   },

//   addPotion(newPotion) {
//     const { potions } = this;
//     for (const { name } of potions) {
//       if (name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     potions.push(newPotion);
//   },

//   removePotion(potionName) {
//     const { potions } = this;
//     for (let i = 0; i < potions.length; i += 1) {
//       const { name } = potions[i];

//       if (name === potionName) {
//         console.log("delete", potionName);
//         potions.splice(i, 1);
//       }
//     }
//   },

//   updatePotionName(oldName, newName) {
//     const { potions } = this;
//     for (let i = 0; i < potions.length; i += 1) {
//       const potion = potions[i];
//       if (potion.name === oldName) {
//         console.log("updating", potion.name);
//         potion.name = newName;
//         return;
//       }
//     }
//     return console.log(`Potion ${oldName} is not in inventory!`);
//   },
// };

// console.log(atTheOldToad);
// console.table(atTheOldToad.getPotions());
// atTheOldToad.addPotion({ name: "Power potion", price: 270 });
// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
// console.table(atTheOldToad.getPotions());
// atTheOldToad.removePotion("Dragon breath");
// console.table(atTheOldToad.getPotions());

// atTheOldToad.updatePotionName("Power poti...", "Power potion 2000");
// atTheOldToad.updatePotionName("Power potion", "Power potion 2000");

// console.table(atTheOldToad.getPotions());

// // 13 Квадрат функції

// function makePowArr(array) {
//   let total = 0;
//   for (const item of array) {
//     total += Math.pow(item, 2);
//   }
//   return total;
// }

// console.log(makePowArr([1, 2, 2]));

// // 14 СALLBACK FUNCTION

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     const isPizzaInMenu = this.pizzas.includes(pizzaName);
//     // console.log(onSuccess(pizzaName));
//     if (!isPizzaInMenu) {
//       return onError(
//         `There is no pizza with a name ${pizzaName} in the assortment.`
//       );
//     }
//     return onSuccess(pizzaName);
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));

// // 15 Чиста функція

// function changeEven(numbers, value) {
//   const changeEvenArr = [];
//   numbers.forEach((number) => {
//     if (number % 2 === 0) {
//       changeEvenArr.push(number + value);
//     } else changeEvenArr.push(number);
//   });
//   return changeEvenArr;
// }

// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));

// // 16 Метод масива
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39,
//   },
// ];

// const getUsersWithAge = (users, minAge, maxAge) =>
//   users.filter((user) => user.age > minAge && user.age < maxAge);

// console.log(getUsersWithAge(users, 20, 30));

// const calculateTotalBalance = (users) => {
//  return users.reduce((total, user) => total + user.balance, 0);
// };

// console.log(calculateTotalBalance(users));

// // 17 Метод масива - find

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// ];
// const BOOK_TITLE = "The Dream of a Ridiculous Man";
// const AUTHOR = "Robert Sheckley";
// // Change code below this line

// const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
// const bookByAuthor = books.find((book) => book.author === AUTHOR);
// console.log(bookWithTitle);
// console.log(bookByAuthor);

// // 18 Class

// class StringBuilder {
//   constructor(initialValue) {
//     this.value = initialValue;
//     }

//     // // // 1
//   getValue() {
//     return this.value;
//   }
//   padEnd(str) {
//     return (this.value += str);
//   }
//   padStart(str) {
//     return (this.value = str + this.value);
//   }
//   padBoth(str) {
//     return (this.value = str + this.value + str);
//   }
// }
// // // 2
// class StringBuilder {
//   constructor(initialValue) {
//     this.value = initialValue;
//   }

//   getValue() {
//     return this.value;
//   }
//   padEnd(str) {
//     this.value = `${this.value}${str}`;
//   }
//   padStart(str) {
//     this.value = `${str}${this.value}`;
//   }
//   padBoth(str) {
//     this.value = `${str}${this.value}${str}`;
//   }
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// // // 19 Class

// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line
//     static checkPrice(price) {

// // // 1
// if (Car.#MAX_PRICE > price) {
//   return "Success! Price is within acceptable limits";
// }
// return "Error! Price exceeds the maximum";
// // // 2
//         return Car.#MAX_PRICE > price
//           ? "Success! Price is within acceptable limits"
//           : "Error! Price exceeds the maximum";
//   }
//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// // 20 Sum Numbers(codeWars)

// const sum = (numbers) => +numbers.reduce((acc, n) => acc + n, 0).toFixed(4);

// console.log(sum([1, 5.2, 4.5457, 0, -1]));
// console.log(sum([-0.0]));
// const resalt = sum([1, 5.2, 4.5457, 0, -1]);
// if (resalt === 9.7457) {
//   console.log("Found!!!!");
// }

// // 21 Sum Numbers(codeWars)
// const array = [
//   true,
//   true,
//   true,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   true,
//   false,
//   true,
//   false,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   false,
//   true,
//   true,
// ];

// const countSheeps = function (arrayOfSheeps) {
//   const sheeps = arrayOfSheeps.filter(Boolean).length;
//   console.log(sheeps);
// };
// countSheeps(array);

// // 21 CodeWars invert

// const arrNum = [1, -2, 3, -4, 5];

// // //1
// function invert(array) {
//   const invertArr = [];
//   array.forEach((number) => {
//     if (number > 0) {
//       number = number - 2 * number;
//       invertArr.push(number);
//     } else if (number < 0) {
//       number = number + -2 * number;
//       invertArr.push(number);
//     } else if (number === 0) {
//         number = -number;
//         invertArr.push(number);
//     }
//   });
//   return invertArr;
// }
// // // 2
// function invert(array) {
//   return array.map((n) => (n = -n));
// }
// console.log(invert(arrNum));
// console.log(invert([]));
// console.log(invert([1, 0, 5]));

// // 22 CodeWars 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
// var summation = function (num) {
//   let sum = 0;
//   for (let i = 0; i <= num; i += 1) {
//     sum += i;
//   }
//   return sum;
// };

// console.log(summation(1));
// console.log(summation(2));
// console.log(summation(8));

// // 23 CodeWars камінь -ножиwі - бумага

// // // 1
// const rps = (p1, p2) => {
//   if (
//     (p1 === "scissors" && p2 === "paper") ||
//     (p1 === "paper" && p2 === "rock") ||
//     (p1 === "rock" && p2 === "scissors")
//   ) {
//     return "Player 1 won!";
//   } else if (
//     (p1 === "paper" && p2 === "scissors") ||
//     (p1 === "rock" && p2 === "paper") ||
//     (p1 === "scissors" && p2 === "rock")
//   ) {
//     return "Player 2 won!";
//   } else return "Draw!";
// };
// // // 2
// const rps = (p1, p2) => {
//   if (p1 === p2) return "Draw!";
//   var rules = { rock: "scissors", paper: "rock", scissors: "paper" };
//   if (p2 === rules[p1]) {
//     return "Player 1 won!";
//   } else {
//     return "Player 2 won!";
//   }
// };
// console.log(rps("rock", "paper"));
// console.log(rps("rock", "scissors"));
// console.log(rps("rock", "rock"));

// // 24 CodeWars
