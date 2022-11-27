'use strict';

const box = document.getElementById('box');//устаревшее
console.log(box);

//выведет сразу всю коллекцию
//const btns = document.getElementsByTagName('button');
//console.log(btns);

//получаем отдельную кнопку
//const btns = document.getElementsByTagName('button')[1];
//console.log(btns);

//2-й способ
//const btns = document.getElementsByTagName('button');
//console.log(btns[1]);


// const circles = document.getElementsByClassName('circle');
// console.log(circles);

//-----БОЛЕЕ СОВРЕМЕННЫЕ МЕТОДЫ НИЖЕ---------

const hearts = document.querySelectorAll('.heart');
console.log(hearts);

//c помощью этого метода мы вывели все 3 сердечка в консоль
hearts.forEach(item => {
   console.log(item);
});

//метод позволяет получить 1-й элемент со страницы
const oneHeart = document.querySelector('.heart');
console.log(oneHeart);
