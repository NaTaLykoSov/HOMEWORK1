function getSeasons(month){
    if (month >= 3 && month <= 5){
        return "Весна";
    } else if (month >= 6 && month <= 8){
        return "Лето";
    } else if (month >= 9 && month <= 11){
        return "Осень";
    } else if (month == 12 || month == 1 || month == 2){
        return "Зима";
    } else {
        return "Неизвестное значение";
    }
}
//alert(getSeasons(prompt("Введите число:")));

function words(){
    let wordsChoice = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    wordsChoice = wordsChoice.sort(() => Math.random() - 0.5);
    alert (wordsChoice);
    let firstWord = prompt("Какое было первое слово?");
    let lastWord = prompt("Какое было последнее слово?");
    
    if((firstWord === wordsChoice[0]) && (lastWord === wordsChoice[6])){
        alert("Супер! Вы победили!");
    }
    else if ((firstWord === wordsChoice[0]) || (lastWord === wordsChoice[6])){
        alert("Вы были близки к победе!");
    } else {
        alert("Вы ответили не верно(((")
    }
}
//words();