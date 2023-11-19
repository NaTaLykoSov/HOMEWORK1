let a = 10;
alert (a);
a = 20;
alert (a);

const iPhone = '09.01.2007';
alert(iPhone);

const creatorJS = 'Brendan Eich';
alert(creatorJS);

let x = 10;
let y = 2;
alert (x + y);
alert (x - y);
alert (x * y);
alert (x/y);

let result = 2**5;
alert (result);

a = 9;
let b = 2;
alert (a % b);

let num = 1;
num +=5;
num -=3;
num *=7;
num /=3;
num ++;
num --;
alert (num);

let age = prompt('Сколько вам лет?');
alert(age);

let user = {
    name: 'Simba',
    age: 4,
    isAdmin: false,
}
user['cityofresidence']='Chelyabinsk';
user['5'];
delete user['cityofresidence'];
let info = prompt("Что вы хотите узнать о пользователе?", "name");
alert(user[info]);

let myName = prompt ('Ваше имя?');
alert ('Привет,'+ myName + '!')