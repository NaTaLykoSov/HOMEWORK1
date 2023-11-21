//1
let password = "пароль";
let test = prompt("Введите пароль");
if (test === password) {
  alert("Пароль введен верно");
} else {
  alert("Пароль введен неправильно");
}
//2
let c = 5;
if (c > 0 && c < 10) {
  console.log("Верно");
} else {
  console.log("Неверно");
}
c = 0;
if (c > 0 && c < 10) {
    console.log("Верно");
  } else {
    console.log("Неверно");
  }
c = 10;
if (c > 0 && c < 10) {
    console.log("Верно");
  } else {
    console.log("Неверно");
  }
c = - 3;
if (c > 0 && c < 10) {
    console.log("Верно");
  } else {
    console.log("Неверно");
  }
c = 2;
if (c > 0 && c < 10) {
    console.log("Верно");
  } else {
    console.log("Неверно");
  }
//3
let d = 10;
let e = 300;
if(d > 100 || e > 100) {console.log("Верно");
} else {
  console.log("Неверно");}
//4
let a = '2';
let b = '3';
alert(Number(a) + Number(b));
//5
let monthNumber = '12';

switch (monthNumber) {
    case '1':
    case '2':
    case '12':
        alert('Зима');
        break;
    case '3':
    case '4':
    case '5':
        alert('Весна');
        break;
    case '6':
    case '7':
    case '8':
        alert('Лето');
        break;
    case '9':
    case '10':
    case '11':
        alert('Осень');
        break;
default: alert ('Неизвестный месяц');
break;
}
//7
let evenNumber = prompt('Пожалуйста, введите любое число');
if (isNaN(evenNumber)){ alert ("Введено не числовое значение");}
else if (evenNumber % 2 === 0){ alert ("Число четное")}
else {alert ("Число нечетное")};
//8
let clientOS = prompt('Ваша операционная система? 0=iOS или 1=Android');

switch (clientOS) {
  case '0':
    console.log('Установите версию приложения для iOS по ссылке');
    break;
  case '1':
    console.log('Установите версию приложения для Android по ссылке');  
    break;
  default: console.log ('Не поддерживаемая операционная система');
    break;  
}
//9
clientOS = prompt('Ваша операционная система? 0=iOS или 1=Android');
let clientDeviceYear = prompt('Год выпуска вашего телефона');
switch (clientOS) {
  case '0':
    if (clientDeviceYear < 2015){alert ('Установите облегченную версию приложения для iOS по ссылке');}
    else {alert('Установите версию приложения для iOS по ссылке');}
    break;
  case '1':
    if (clientDeviceYear < 2015){alert ('Установите облегченную версию приложения для Android по ссылке');}
    else {alert('Установите версию приложения для Android по ссылке');}  
    break;
  default: console.log ('Не поддерживаемая операционная система');
    break;  
}
