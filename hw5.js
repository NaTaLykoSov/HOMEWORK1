//1
function comparison (a, b){
    return a < b ? a : b;
  }
 console.log(comparison (8, 4));
 console.log(comparison (6, 6));
 //2
 function evenNumber(n){
 if (n % 2 === 0){return "Число четное";}
 else {return"Число нечетное";}
  }
 let n = prompt('Пожалуйста, введите любое число');
 alert(evenNumber(n));
 //3
 //3.1
 function degree3_1(a){
     let  degree = a ** 2;
     console.log (degree);
 }
 degree3_1 (5);
 //3.2
 function degree3_2(a){
     return (a ** 2);}
 console.log (degree3_2 (4));
 //4
 function welcome () {
 let age = prompt("Сколько Вам лет?");
 if (age < 0 ){
     alert("Вы ввели неправильное значение");
 } else if (age <= 12) {alert("Привет, друг!");}
 else{alert("Добро пожаловать!");}
 }
 welcome ();
 //5
 function mult(a, b){
     if ((isNaN(Number(a))) || (isNaN(Number(b)))){return ('Одно или оба значения не являются числом');}
     else {return a * b;};
     }
   console.log(mult(5, 5));
 //6
 function degree (){
 let n = prompt('Введите число');
 let result = (n ** 3);
 if (isNaN(n)){return('Переданный параметр не является числом');}
 else  {return(`${n} в кубе равняется  ${result}`)}}
 alert (degree());
 //7
 const circle1 = {
     radius: 10,
     getArea: function (){
         return 3.14 * this.radius ** 2;
     },
     getPerimeter: function (){
         return 2 * 3.14 * this.radius;
     },
 }; 
 
 const circle2 = {
     radius: 7,
     getArea: function (){
         return 3.14 * this.radius ** 2;
     },
     getPerimeter: function (){
         return 2 * 3.14 * this.radius;
     },
 }; 
 
 console.log(circle1.getArea());
 console.log(circle1.getPerimeter());
 console.log(circle2.getArea());
 console.log(circle2.getPerimeter());
 