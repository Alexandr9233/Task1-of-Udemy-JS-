// 1-ый цикл
{
  let cont;
  let money;
  let time;
  for (let i = 0; i < 1; i++) {
    money = prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");
    if (money == "" || time == "") {
      alert("empty!");
    } else {
      cont = true;
    }
    if (!cont) {
      i = -1;
    }
  }
  let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
  };

  let first;
  let second;
  let result = 0;
  for (let i = 0; i < 2; i++) {
    first = prompt("Введите обязательную статью расходов в этом месяце");
    second = prompt("Во сколько обойдется");
    if (typeof first === "string" && first != "" && second != "") {
      appData.expenses.first = first[i] + ": " + second;
      result = result + Number(second);
    } else {
      alert("Заполните все поля!");
      i = -1;
      result = 0;
    }
  }
  result = Number(appData.budget) - result;

  alert("После обязательных расходов остаток составит: " + result);
  alert("Расход составит: " + result / 30 + " денег в день на 1 мес.");
}

// 2-ой/3-ий цикл

let count;
let money;
let time;
let countDo = 0;

do {
  money = prompt("Ваш бюджет на месяц?");
  time = prompt("Введите дату в формате YYYY-MM-DD");
  if (money == "" || time == "") {
    alert("empty!");
  } else {
    count = true;
    countDo++;
  }
  if (!count) {
    count = -1;
  }
} while (count < 1);

{
  let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
  };

  let first;
  let second;
  let result = 0;
  let countWhile = 0;

  while (countWhile < 2) {
    first = prompt("Введите обязательную статью расходов в этом месяце");
    second = prompt("Во сколько обойдется");
    if (typeof first === "string" && first != "" && second != "") {
      appData.expenses.first = second;
      result = result + Number(second);
      countWhile++;
    } else {
      alert("Заполните все поля!");
      countWhile = -1;
      result = 0;
    }
  }

  result = Number(appData.budget) - result;

  alert("После обязательных расходов остаток составит: " + result);
  alert("Расход составит: " + result / 30 + " денег в день на 1 мес.");
}



// let first1 = +prompt('Введите обязательную статью расходов в этом месяце');
// let second1 = +prompt('Во сколько обойдется');
// let first2 = +prompt('Введите обязательную статью расходов в этом месяце');
// let second2 = +prompt('Во сколько обойдется');

// appData.expenses[first1] = second1;
// appData.expenses[first2] = second2;

// let result = second1 + second2;
// result = appData.budget - result;

// alert(result / 30);