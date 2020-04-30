'use strict';

let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', "");
    time = prompt('Введите дату в формате YYYY-MM-DD', "");

    while (money === null && money === "" && isNaN(money)) {
        money = +prompt('Ваш бюджет на месяц?', "");
    }
}
start();

const appData = {
    budget: money,
    timeData: time,
    expences: {},
    optionalExpences: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i=0; i<2; i+=1) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt("Во сколько обойдется?", "");            
            
            if (a != null && a != "" && typeof(a) === 'string') {
                console.log('good result');
                appData.expences[a] = b;
            } else {
                console.log('bad result');
                i-=1;
            }
        }
    },
    detectBudgetDay: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Бюджет на день составляет " + appData.moneyPerDay + " руб");
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log ("Это минимальный уровень достатка!");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log ("Это средний уровень достатка!");
        } else if (appData.moneyPerDay > 2000) {
            console.log ("Это высокий уровень достатка!");
        } else {
            console.log ("Произошла ошибка");
        }
    },
    checkSavings: function() {
        if (appData.savings === true) {
            let save = +prompt("Какова сумма накоплений?", ""),
                percent = +prompt("Под какой процент?", "");
    
            appData.monthIncome = save/100/12 * percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i=1; i<=3; i++) {
            let optionalExp = prompt("Статья необязательных расходов?", "");
            appData.optionalExpences[i] = optionalExp;
        }
    },
    chooseIncome: function() {
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');

        if (typeof(items) === 'string' && items !== '' && typeof(items) !== null) {
            appData.income = items.split(', ');
            appData.income.push(prompt('Может что-то ещё?', ''));
            appData.income.sort();
        };
        appData.income.forEach((elem, index) => {
            alert('Способ доп. заработка: ' + (index + 1) + " - " + elem);
        });       
    }
};

for (let key in appData) {
    alert('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
}









// for (let i=0; i<2; i+=1) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");
    
//     if (a != null && b != null & a != "" && b != "" && typeof(a) === 'string') {
//         console.log('good result');
//         appData.expences[a] = b;
//     } else {
//         console.log('bad result');
//         i-=1;
//     }
// }

// Напишите цикл for двумя дыругими методами
// let i = 0;
// while (i<2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");
    
//     if (a != null && b != null & a != "" && b != "" && typeof(a) === 'string') {
//         console.log('good result');
//         appData.expences[a] = b;        
//     } else {
//         console.log('bad result');
//         i-=1;
//     }
//     i += 1;
// }


// let i = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");
    
//     if (a != null && b != null & a != "" && b != "" && typeof(a) === 'string') {
//         console.log('good result');
//         appData.expences[a] = b;       
//     } else {
//         console.log('bad result');
//         i-=1;
//     }
//     i += 1;
// } while(i < 2);




