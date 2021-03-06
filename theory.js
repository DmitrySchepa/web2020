// JavaScript является высокоуровневым языком, тоесть команды воспринимаются браузером как есть, 
// без перевода в двоичный код

// _______________1ST LESSON(INTRODUCTION/SCRIPT CONNECTION WAYS)_______________ 

// var leftBorderWidth = 1; // undefined до объявленния, значение после объявления
// let second = 2; // ReferenceError до объявления/Всплытие переменных
// Объявление через let также эффективнее с точки зрения занимаемой памяти браузера, ищет там где объявлена,
// а так область видимости может быть ограничена фигурными скобками
// const pi = 3.14;


// _______________2ND LESSON(DATA TYPES)_______________ 

// Number, string, boolean, Symbol, null, undefined

// NaN и infinity - числовые типы данных
// null - необъявленная переменная, то, чего не существует, ссылка
// undefined - переменная объявлена, значение не установлено

// let person = {
//     name: "John",
//     age: 25,
//     isMarried: false
// };

// console.log(person.name); // person["name"]


// _______________3RD LESSON(USER COMMUNICATION)_______________ 

// alert("Hello World!");

// let answer = confirm("Are you here?"); // true or false
// console.log(answer);

// let answer = prompt("How old are you", "18");
// console.lot(answer);

// Все данные  от пользователя приходят в виде строки
// Официально признанная ошибка JS, null приходит как object


// _______________4TH LESSON(OPERATORS)_______________ 

let increment = 10,
    decrement = 10;

// префиксная форма возвращает изменённое значение
console.log(++increment > 10); // true "11>10"

// постфиксная возвращает старое значение
console.log(increment++ > 10); // false "10=10"

// "==" проверка на равенство
// "===" сравнение по типам данных


// _______________5TH LESSON(GIT)_______________ 

// 1. git init
// 2. git config
// working directory - index - remote(commit)
// 3. git checkout -- <file> сбрасывает(discard) изменения
// 4. git log показывает коммиты 
// 5. git add <file> - создаёт файл
// 6. git pull - при работе в команде над одним проектом для внесения изменений, а также
// если были сделаны изменения на удалённном репозитории, а мы хотим внести свои изменения
// с рабочей директории
// wq! -> Enter


// _______________6TH LESSON()_______________ 

let num = 50;

switch (num) {
    case num < 49:
        console.log('Not enough!');
        break;
    case num > 100: 
        console.log('Too much!');
        break;
    case 50:    /*!NOT case num == 50!!! */
        console.log('What`s wright!');
        break;
    default: 
        console.log('Something is wrong!');
        break;
}

// _______________7TH LESSON(FUNCTIONS)_______________ 

// Замыкание - функция со всеми внешними переменными, которые ей доступны.


// _______________8TH LESSON(FUNCTIONS)_______________

let options = {
    width: 1024,
    height: 768,
    name: "test"
};

// Работа с ключами объекта
console.log(Object.keys(options).length);

// _______________9TH LESSON(OBJECT ORIENTED PROGRAMMING)_______________

let soldier = {
    health: 400,
    armor: 100
};

let John = {
    health: 100
};

John.__proto__ = soldier;

console.log(John);
console.log(John.armor);

// _______________10TH LESSON(CONSTRUCTOR)_______________

// создание 

function User(name) {
    this.name = name,
    this.sayHi = function() {
        console.log('Привет, меня зовут ' + this.name);
    };
} 

// вызов 

let dima = new User('Dima');

dima.sayHi();