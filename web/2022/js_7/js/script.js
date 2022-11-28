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


//cобытие при наведении мышки на элемент в консоль пишем ХОВЕР
btn.addEventListener('mouseenter', () => {
   console.log('Hover');
});