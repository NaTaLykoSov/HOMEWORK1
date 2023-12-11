//1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 function sorting(a, b) {
    return a.age - b.age;
 };
console.log (people.sort(sorting));

//2
function isPositive(a) {
    if (a > 0) return 1;
    else {return 0;}
    }
    function isMale(b) {
    if (b.gender ===  'male') return 1;
    else {return 0;}
    }
    function filter(arr, ruleFunction) {
        const output = [];

        for (let i = 0; i < arr.length; i++) {
          if (ruleFunction(arr[i])) 
          output.push(arr[i]);
        }
      
        return output;
    }
console.log(filter([3, -4, 1, 9], isPositive)); 
const people1 = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];
console.log(filter(people1, isMale));

//3
const interval = setInterval(() => {
        console.log(new Date());
    }, 3000);
    setTimeout(() => {
        clearInterval(interval)
        console.log('30 секунд прошло');
    }, 30000);

//4
function delayForSecond(callback) {
    setTimeout(callback, 1000);
 }
delayForSecond(function () {
    console.log('Привет, Глеб!');
 });

//5
function delayForSecond5(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}
delayForSecond5(() => sayHi('Глеб'))