// // //коллбэк функция
// 'use strict';

// function first() {
//    setTimeout(function () {
//       console.log(1);
//    }, 1000);
// }

// function second() {
//    console.log(2);
// }

// first();
// second();
// //коллбэк функция - ф. которая должна быть выполнена после того как другая функция завершила свое выполнение

// function learnJS(lang, callback) {
//    console.log(`Я учу: ${lang}`);
//    callback();
// }

// function done() {
//    console.log(`Я прошел этот урок`);
// }

// learnJS(`JavaScript`, done);
// //второй пример
// function printMyName() {
//    console.log('Bogdan');
// }

// console.log('Start');

// setTimeout(printMyName, 1000);



//Объекты, деструктуризация объектов (ES6)

// const options = {
//    name: 'test',
//    width: 1024,
//    height: 1024,
//    colors: {
//       border: 'black',
//       bg: 'red'
//    }
// };

// console.log(options['colors']['border']);

//если нужно удалить какое-то свойство из объекта - понадобится оператор delite

//удалили свойство name
// delete options.name
// console.log(options);

//если нужно удалить много свойств - проще запустить цикл


//перебор всех свойств объекта через for..in

//задаем переменную key и говорим что будем копаться в options
// for (let key in options ) {
//    console.log(`Свойство ${key} имеет значение ${options[key]}`);
// }


// for (let key in options ) {
//    if (typeof(options[key]) === 'object') {
//       for (let i in options[key]) {
//          console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//       }
//    } else {
//    console.log(`Свойство ${key} имеет значение ${options[key]}`);
//    }
// }

//с счетчиком
// let counter = 0;
// for (let key in options ) {
//    if (typeof(options[key]) === 'object') {
//       for (let i in options[key]) {
//          console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//          //counter++;
//       }
//    } else {
//    console.log(`Свойство ${key} имеет значение ${options[key]}`);
//    counter++;
//    }
// }

// console.log(counter);


//**********функции и методы которые есть внутри объекта(см документацию)
// const options = {
//    name: 'test',
//    width: 1024,
//    height: 1024,
//    colors: {
//       border: 'black',
//       bg: 'red'
//    }
// };
//получаем массив с ключ-свойство
//console.log(Object.keys(options));
// ********ВАЖНО*****узнать сколько элементов которые появятся внутри массива 
//console.log(Object.keys(options).length);



//Мы можем создавать такие методы вручную, самостоятельно
// const options = {
//    name: 'test',
//    width: 1024,
//    height: 1024,
//    colors: {
//       border: 'black',
//       bg: 'red'
//    },
//    makeTest: function() {
//       console.log('Test');
//    }
// };

// options.makeTest();
// console.log(Object.keys(options));

//******ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТА(д. - разделить на мелкие кусочки)*/

// const options = {
//    name: 'test',
//    width: 1024,
//    height: 1024,
//    colors: {
//       border: 'black',
//       bg: 'red'
//    },
//    makeTest: function() {
//       console.log('Test');
//    }
// };

// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border);

// const ship1 = {
//    name: 'MSC Seaviev',
//    passengers: 4050,
// };

// const ship2 = {
//    name: 'Costa Magica',
//    passengers: 2716,
// };

// const total = ship1.passengers + ship2.passengers;

const a = 92;
const b = 11;

const areEqual = a === b;