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



