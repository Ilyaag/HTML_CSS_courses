//создаем элемент и вешаем обработчик события
const btn = document.querySelector('button');
//устанавливаем тот элемент на который будем вешать событие(УСТАРЕВШИЙ)
// btn.onclick = function () {
//    alert('Second click');
// };

//современный
//пользователь кликнул на элемент, после этого запуск ф-ции
btn.addEventListener('click', () => {
   alert('click');
});