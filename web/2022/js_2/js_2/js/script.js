'use strict';

// if (4 == 9) {
//     console.log('okay');
// } else {
//     console.log('error');
// }



// if (num < 49) {
//     console.log('ERROR');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('ok!');
// }

//(num === 50) ? console.log('ok!') : console.log('ERROR');

// const num = 50;
// switch (num) { //конструкция свитч идет ВСЕГДА на строгое сравнение
//     case 49:
//         console.log('Неверно');
//         break;
//     case 100:
//         console.log('Неверно');
//         break;
//     case 50:
//         console.log('в точку!');
//         break;
//     default:
//         console.log('Не в этот раз');
//         break;
// }; 

let num = 50;

// while (num <= 55) { //первый вариант цикла. тикает счетчик пока число не станет <=55
//     console.log(num);
//     num++;
// }

//второй вариант цикла, при помощи него заставим цикл что-то сделать, а потом уже проверить условие, если необходимо - выйти из цикла

// do {
//     console.log(num);
//     num++;
// }
// //цикл отработал и мы проверяем условия while ниже
// while(num < 55);

//Третий вариант через FOR
for(let i = 1; i < 10; i++) {
    if (i === 6) {
        //break; //оператор break остановил цикл когда дотикал до 6
        continue;//оператор continue пропустил 6 и не прервал цикл(на практике когда мы не хотим избежать включения четные/нечетные или определенные значения)
    }
    console.log(i);
};