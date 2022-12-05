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
//задание 5 
            if (favorite) {
                console.log('Добавляем любимый фильм');
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
        sortArr(films);

        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });
/*3 задание. Удаление корзинок. Вешаем обработчики событий на каждый элемент. Если пользователь кликает на нее, то удаляется родитель у этой корзинки. Вырезать фильм который был удален из базы данных. Если хотим навесить 1 событие на несколько элементов - перебираем forEach. Дальше коллбэк, говорим что надо 2 аргумента, каждая отдельная кнопка и нумерация(необходимо знать номер по порядку который удаляем)
Внутри обращаемся к каждой корзинке, навешиваем обработчик события клика, запускаем коллбэк функцию. Далее обращаемся к родительскому элементу - удались со страницы и удаляем его из базы данных. Первый аргумент i а второй, сколько нам нужно удалить из массива
ДОП - удалилась номерация = ВОСПОЛЬЗУЕМСЯ РЕКУРСИЕЙ(функция вызывает сама себя внутри - когда я буду удалять каждый раз элемент, вызываем функцию createMovieList и список заново перестраивается
ДОП - у нас есть аргументы parent films - мы их скопируем
+ 5 пункт отсортировать по алфавиту
когда мы будем запускать функцию createMovieList она будет сама себя уже сортировать
*/
    document.querySelectorAll('.delete').forEach((btn, i) => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            movieDB.movies.splice(i, 1);
            createMovieList(films, parent); 
        });
    });

    }
//когда первый раз заходим на страницу, отображаем на странице и перебираем агрументы
deliteAdv(adv);
makeChanges(); 
createMovieList(movieDB.movies, movieList);