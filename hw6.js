//1
const  numbers = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbers.length; i++){
    if (numbers [i] == 10)break;
    console.log (numbers [i]);
}
//2
const num = [1, 5, 4, 10, 0, 3];
console.log(num.indexOf(4));
//3
const date = [1, 3, 5, 10, 20];
console.log(date.join(['  ']));
//4
const arr = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
];
//5
const user = [1, 1, 1];
user.push(2, 2, 2);
console.log(user);
//6
const userNum = [9, 8, 7, 'a', 6, 5];
userNum.sort();
userNum.pop();
console.log(userNum);
//7
const riddle = [9, 8, 7, 6, 5];
const answer = Number(prompt('Угадайте число'));
if (riddle.includes(answer)){ alert ("Угадал");}
else {alert ("Не угадал")};
//8
const letter = 'abcdef';
const str = letter.split("").reverse().join("");
console.log(str);
//9
const arrNum = [
    [1, 2, 3],
    [4, 5, 6],
];
const flat = arrNum.flat();
console.log(flat);
//10
const sum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(let i = 0; i < sum.length - 1; i++){
    console.log(sum[i] + sum[i + 1]);
}
//11
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const squares = nums.map(function (num) {
  return num * num
})
console.log(squares)
//12
function getLengthWords(words){
    return words.map((word) => word.length);
} 
console.log(getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']));
//13
function filterPositive(array) {
    let outArray = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] < 0)
        outArray.push(array[i]);
   }
    return outArray;
}
console.log(filterPositive([-1, 0, 5, -10, 56])); 
console.log(filterPositive([-25, 25, 0, -1000, -2])); 
//14
function evenNumbers(){
    let meaning = [];
    for(let i=0; i<10;i++) {meaning.push(Math. floor(Math.random()*10))}
    let evenMeaning = [];   
    for(let i = 0; i < meaning.length; i++){
        if(meaning [i] % 2 === 0)
        evenMeaning.push(meaning[i]);
    }
    console.log(meaning);
    console.log(evenMeaning);   
}
evenNumbers();
//15
function elements(){
    let elemetsArray = [];
    for(let i = 0; i < 6; i++) {elemetsArray.push(Math.floor(Math.random()*10))}
    let elSum = 0;   
    for(let i = 0; i < elemetsArray.length; i++){
        elSum = elSum + elemetsArray[i];
        }
    //console.log(elemetsArray);
    console.log(elSum / 6);
    }
elements();