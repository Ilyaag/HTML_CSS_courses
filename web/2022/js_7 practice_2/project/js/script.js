/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */


'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list'),
      addForm = document.querySelector('form.add'),
      addImput = addForm.querySelector('.adding__input'),
      checkbox = document.querySelector('[type="checkbox"]');


/*назначаем обработчик события на форму submit
сначала отменяем стандартное поведение браузера
что именно пользователь ввел и поставил ли галочку
cначала обратились к импуту с которым взаимодействовал пользователь, в велюе будет содержаться то, что ввел пользователь
далее обращаемся к чекбоксу переменная фейворит. Это свойство checked можем получить в ДЖС чтобы получить булиновое значение
далее обращаемся к фильмам, фильмы это массив и тот фильм который был введен пользователем - пушится.
Когда мы запушили новый фильм - сортируем по алфавиту 
Далее берем пример как мы создавали массив ниже, и на его основании делаем то,что сначала надо удалить список фильмов, занести туда данные и снова заполнить его
Далее оптимизируем функцию на строке 74...
2 задача. Берем нью филм, проверяем в первую очередь сколько символов там будет строка 58*/
addForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let newFilm = addImput.value;
    const favorite = checkbox.checked;
//если пользователь ввел фильм - т.е тру, выполняется 
    if(newFilm) {

            if (newFilm.length > 21) {
                //c помощью метода строк заменить старую строчку на новый вариант
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

        movieDB.movies.push(newFilm);
        sortArr(movieDB.movies);
    //cейчас строим список фильмов
        createMovieList(movieDB.movies, movieList); 
    }

    event.target.reset();

});


const deliteAdv = (arr) => {
    arr.forEach(item => {
        item.remove();
    });
};


const makeChanges = () => {
    genre.textContent = 'Драма';

    poster.style.backgroundImage = `url('img/bg.jpg')`;
};


const sortArr = (arr) => {
    arr.sort();
};


function createMovieList(films, parent ) {
        parent.innerHTML = '';

        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });
    }
//когда первый раз заходим на страницу, отображаем на странице и перебираем агрументы
deliteAdv(adv);
makeChanges(); 
sortArr(movieDB.movies);
createMovieList(movieDB.movies, movieList);