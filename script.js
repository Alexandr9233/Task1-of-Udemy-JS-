let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

let first1 = +prompt('Введите обязательную статью расходов в этом месяце');
let second1 = +prompt('Во сколько обойдется');
let first2 = +prompt('Введите обязательную статью расходов в этом месяце');
let second2 = +prompt('Во сколько обойдется');

appData.expenses[first1] = second1;
appData.expenses[first2] = second2;

let result = second1 + second2;
result = appData.budget - result;

alert(result / 30);