//создаем элемент и вешаем обработчик события
const btn = document.querySelector('button');
//устанавливаем тот элемент на который будем вешать событие(УСТАРЕВШИЙ)
// btn.onclick = function () {
//    alert('Second click');
// };

//современный
//пользователь кликнул на элемент, после этого запуск ф-ции
// btn.addEventListener('click', () => {
//    alert('click');
// });
//события выполняются в порядке очереди, это событие будет следующим
// btn.addEventListener('click', () => {
//    alert('Second click');
// });


const overlay = document.querySelector('.overlay');
// let i = 0;
 const deliteElement = (e) => {
 console.log(e.target);
 console.log(e.type);
//    i++;
//    if (i === 1) {
//       btn.removeEventListener('click', deliteElement);
//    }
 };

btn.addEventListener('click', deliteElement);
overlay.addEventListener('click', deliteElement);

//ЗАКОНЧИЛ НА 16.55