'use strict';

//const box = document.getElementById('box');//устаревшее
//console.log(box);

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

// const hearts = document.querySelectorAll('.heart');
// console.log(hearts);

// //c помощью этого метода мы вывели все 3 сердечка в консоль
// hearts.forEach(item => {
//    console.log(item);
// });

// //метод позволяет получить 1-й элемент со страницы
// const oneHeart = document.querySelector('.heart');
// console.log(oneHeart);


//-----------------------------------------//

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');
// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

//сделать 2-ю кнопку овальной
btns[1].style.borderRadius = '100%';
//cделать 1-й круг красным
circles[0].style.backgroundColor = 'red';

//назначаем несколько инлайн стилей
box.style.cssText = `background-color: blue; width: 500px`;


//если нужно провести действия над несколькими элементами

//цикл(редко)
// for (let i = 0; i < hearts.length; i++) {
//    hearts[i].style.backgroundColor = 'blue';
// }

//перебирающий метод(часто)
hearts.forEach(item => {
   item.style.backgroundColor = 'blue';
});


//-- ОСНОВНЫЕ МЕТОДЫ ДЛЯ РАБОТЫ С ЭЛЕМЕНТАМИ СТРАНИЦЫ --

const div = document.createElement('div');
//const text = document.createTextNode('Тут был я');

//визуальная оболочка для элемента
div.classList.add('black');

//-- cовременные методы

//добавляем див в конец родительского тега бади
document.body.append(div);

//вариант 2
//wrapper.append(div);

//обратный append (в конец элемент) есть метод который ставит в начало PREPEND
// wrapper.prepend(div);

//перед первым сердечком поставил черный квадрат
//hearts[0].before(div);

//после первого сердечка черный квадрат
//hearts[0].after(div)

//УДАЛЕНИЕ ЭЛЕМЕНТА СО СТР
//circles[0].remove();

//ОДИН ЭЛЕМЕНТ ЗАМЕНИТЬ ДРУГИМ
//hearts[0].replaceWith(circles[0]);


//-- РЕДАКТИРОВАНИИЕ ПРЯМО В ЭЛЕМЕНТЫ

