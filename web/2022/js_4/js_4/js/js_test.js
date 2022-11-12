//коллбэк функция
'use strict';

function first() {
   setTimeout(function () {
      console.log(1);
   }, 1000);
}

function second() {
   console.log(2);
}

first();
second();
//коллбэк функция - ф. которая должна быть выполнена после того как другая функция завершила свое выполнение

function learnJS(lang, callback) {
   console.log(`Я учу: ${lang}`);
   callback();
}

learnJS(`JavaScript`, function() {
   console.log(`Я прошел этот урок`);
});