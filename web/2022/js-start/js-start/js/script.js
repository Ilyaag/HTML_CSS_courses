/*
//Задача 5
const myName = 'Илья'
const mySurname = 'Агеев'
const myWork = 'барбер'

const personInfo2 = `Меня зовут так ${myName} ${mySurname} и я ${myWork} и это первая строка
а это вторая строка и следующая будет ниже
третья вот`
console.log(personInfo2) */

/* 6 задача Типы данных
const strigSt = 'TestString'
const numNum = 10
const booleanNum = true
const nullNum = null
let unNum
const object = {}
const arrayNum = []

console.log(typeof strigSt)
console.log(typeof numNum)
console.log(typeof booleanNum)
console.log(typeof nullNum)
console.log(typeof unNum)
console.log(typeof object)
console.log(typeof arrayNum)*/

//Задача 7 объявление и вызов функции
/*function printMyName() {
   let name = 'Ilya'
   console.log(name)
}
printMyName()*/


//Задача 8 Присваивание функции переменной
/*const myFunction = function(name) {
   return `Привет, ${name}`
}
console.log(myFunction('Илья'))
console.log(myFunction('Андрей'))*/


//Задача 9 стрелочная функция
//let имя переменной = (параметр, ..параметр) => выражение
/*const strelFunction = () => {
   return 'Привет, мир!' //явный возврат 
}
console.log(strelFunction())


const strelFunction = () => 'Привет, мир!' //неявный возврат можно использовать когда 1 ВЫРАЖЕНИЕ
console.log(strelFunction()) */


//Задача 10 
//комментарий перед функцией jsdock можем комментировать код в файлах js делается это путем добавления комментариев
/**
 * Возвращает разницу двух чисел
 * @param {number} a 
 * @param {number} b 
 * @returns {number} разница чисел
 */
/*function diff(a, b) {
   return a - b
}
diff(10, 5)*/


//Задача 11 колбэк функции
/*
printMyName = () => console.log('Ilya')
setTimeout(printMyName, 5000) */


//Задача 12 создание объекта
/*const object = {
   name: 'Ilya',
   surname: 'Ageev',
   favoriteNumber: 6
}
let stroka = `My name ${object.name} ${object.surname} and my favorite number ${object.favoriteNumber}`

console.log(stroka)*/

//Задача 13 Длина строки
/* let stroka = 'Капитан кек'
const dlinaStroki = stroka.length

console.log(dlinaStroki) */

//Задача 14 строка заглавными буквами
