
// 1 задание

// let name = prompt ('Ваше имя?'),
//     age = prompt ('Возраст?');
//     city = prompt ('Город проживания?'),
//     phone = prompt ('Номер телефона?'),
//     email = prompt ('Email?'),
//     company = prompt ('В какой компании работаете?');

// document.write(`Меня зовут ${name}. Мне ${age} лет. Я проживаю в городе ${city} и работаю в компании ${company}. Мои контактные данные: ${phone}, ${email}. `);


// 2 задание

// let yearOfBirth = 2022 - age;

// document.write(`${name} родился в ${yearOfBirth} году.`);


// 3 задание

let x = 356842
    a = 3 + 5 + 6,
    b = 7 + 4 + 2;

if (a == b) {
    console.log('Да!');
} else {
    console.log('Нет!');
}


// 4 задание

let c = 5;

if (c > 0) {
    console.log('Верно');
} else {
    console.log('Неверно');
}


// 5 задание

let d = 10,
    e = 2;

console.log(10+2);
console.log(10-2);
console.log(10*2);
console.log(10/2);
console.log(12**2);


// 6 задание

(11 > d && d > 2 || 14 > e && e <= 6) ? console.log('Верно') : console.log('Неверно');


// 7 задание

let n = 24;

if (n >= 0 && n < 15) {
    console.log('Первая четверть');
} else if (n > 15 && n < 30) {
    console.log('Вторая четверть');
} else if (n > 30 && n < 45) {
    console.log('Третья четверть');
} else if (n > 45 && n < 59) {
    console.log('');
}


// 8 задание

let day = 26;

if (day >= 1 && day < 11) {
    console.log('Первая декада');
} else if (day > 10 && day < 21) {
    console.log('Вторая декада');
} else if (day > 20 && n <= 31) {
    console.log('Третья декада');
}


// 9 задание

/*let year = 365,
    month = 31,
    week = 7,
    days = prompt ('Введите количество дней?'),
    hour = 24,
    minute = hour*60,
    second = minute*60;

switch (true) {
    case days > year:
        alert(`${days/year} года`);
        break;
    case days == year:
        alert(`1 год, 12 месяцев, 52 недели`);
        break;
    case days < year && days > month:
        alert(`Менее года, ${days/month} месяцев, ${days/week} недель, ${days*hour} часов`);
        break;
    case days == month:
        alert(`1 месяц, 4 недели, 744 часа, 44640 минут`);
        break;
    case days < month && days > week:
        alert(`Менее месяца, ${days/week} недель, ${days*hour} часов, ${days*minute} минут`);
        break;
    case days == week:
        alert(`1 неделя, 168 часов, 10080 минут, 604800 секунд`);
        break;
    case days < week && days > 1:
        alert(`Менее недели, ${days*hour} часов, ${days*minute} минут, ${days*second} секунд`);
        break;
    case days == 1:
        alert('24 часа, 1440 минут, 86400 секунд');
        break;
}*/
   

// 10 задание

let DAY = prompt('Введите количество дней (1-365).')

switch (true) {
    case DAY <= 0:
        alert('Такого дня не существует!');
        break;
    case DAY > 1 && DAY <= 31:
        alert('Январь (зима)');
        break;
    case DAY > 31 && DAY <= 59:
        alert('Февраль (зима)');
        break;
    case DAY > 59 && DAY <= 90:
        alert('Март (весна)');
        break;
    case DAY > 90 && DAY <= 120:
        alert('Апрель (весна)');
        break;
    case DAY > 120 && DAY <= 151:
        alert('Май (весна)');
        break;
    case DAY > 151 && DAY <= 181:
        alert('Июнь (лето)');
        break;
    case DAY > 181 && DAY <= 212:
        alert('Июль (лето)');
        break;
    case DAY > 212 && DAY <= 243:
        alert('Август (лето)');
        break;
    case DAY > 243 && DAY <= 273:
        alert('Сентябрь (осень)');
        break;
    case DAY > 273 && DAY <= 304:
        alert('Октябрь (осень)');
        break;
    case DAY > 304 && DAY <= 334:
        alert('Ноябрь (осень)');
        break;
    case DAY > 334 && DAY <= 365:
        alert('Декабрь (зима)');
        break;
    case DAY > 365:
        alert('Перебор');
        break;
}