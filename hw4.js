//1
for(let i = 0; i<2; i++){
    console.log("Привет");
}
//2
let i = 1;
do{console.log(i);
    i++;}while(i<6);
//3
i = 7;
do{console.log(i);
    i++;}while(i<23);
//4
const name = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400',
    };
"<salary> является з.п <name>"
for(let salary in name){console.log(`${salary} — зарплата ${name[salary]} долларов.`)};
//5
let n = 1000;
let num = 0;
while(n >= 50){
                n /= 2;
                num++;} 
                console.log (n);
                console.log (num);
//6
let fridayFirst = 5; 
for( let i = fridayFirst; i <= 31; i += 7) {
    console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет."`)
};