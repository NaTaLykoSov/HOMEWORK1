//1
let str = 'js';
console.log(str.toUpperCase());

//2
function searchStart(){
    const searchArray = ['яблоко', 'груша', 'гриб', 'огурец'];
    const stringBegins = 'гр';
    const outArray = [];
   for(let i = 0; i < searchArray.length; i++) {
    if (searchArray[i].toLowerCase().startsWith(stringBegins.toLowerCase()))
    outArray.push(searchArray[i]);
    }
        return outArray;
}
console.log(searchStart());

//3
let number = 32.58884;
console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.round(number));

//4
const numbers = [52, 53, 49, 77, 21, 32];
console.log(Math.max(...numbers));
console.log(Math.min(...numbers));

//5
function evenNumbers(){
    console.log(Math. floor(Math.random()*10) + 1); 
}
 
evenNumbers();
evenNumbers();
evenNumbers();

//6
function randomV(N){
    const outArray = [];
    for(let i = 0; i < (Math.floor(N/2)); i++)
    {outArray.push(Math.floor(Math.random()*N))}
    return outArray;
}
console.log(randomV(13));

//7
function getRandomInt(minValue, maxValue) {
return Math.round(Math.random() * (maxValue- minValue)) + minValue;
}
console.log(getRandomInt(8, 16));

//8
let myDate = new Date("06 December 2023");
console.log(myDate); 
//9
let currentDate = new Date("06 December 2023");
let dateNew = currentDate.getDate();
let dateSet = currentDate.setDate(dateNew + 73);

console.log(currentDate);

//10

function task10(){
const days = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
myDate = new Date();
let fullDate = "Дата " + myDate.getDate() + " " + months[myDate.getMonth()] + 
" " + myDate.getFullYear() + "- это " + days[myDate.getDay()] + "."; 
let hour = myDate.getHours();
let minute = myDate.getMinutes(); 
let second = myDate.getSeconds(); 
if (minute < 10) { 
	minute = "0" + minute;
    }
if (second < 10) { 
        second = "0" + second;
}
let timeNow = "Время: " + hour + ":" + minute + ":" + second;
console.log (fullDate);
console.log(timeNow);}
task10();