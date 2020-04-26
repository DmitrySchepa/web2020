// _______________1ST TASK_______________ 


let money = prompt('Ваш бюджет на месяц?', "");
let time = prompt('Введите дату в формате YYYY-MM-DD', "");

const appData = {
    budget: money,
    timeData: time,
    expences: {},
    optionalExpences: {},
    income: [],
    savings: false
};

for (let i=0; i<2; i+=1) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");
    
    if (a != null && b != null & a != "" && b != "" && typeof(a) === 'string') {
        console.log('good result');
        appData.expences[a] = b;
    } else {
        console.log('bad result');
        i-=1;
    }
}

appData.moneyPerDay = appData.budget / 30;

alert("Бюджет на день составляет " + appData.moneyPerDay + " руб");