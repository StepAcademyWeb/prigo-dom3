
alert("задание №3");

let numb = prompt("укажите число");

function numbProst(numb){
    return typeof(numb);
}

//alert(numbProst(numb));
alert(numbProst(+numb));



alert("задание №4");

let numDay = prompt("укажите число от 1 до 7");

let calendar = (+numDay == 1) ? 'Понедельник' :
(numDay == 2) ? 'Вторник' :
(numDay == 3) ? 'Среда' :
(numDay == 4) ? 'Четверг' :
(numDay == 5) ? 'Пятница' :
(numDay == 6) ? 'Суббота' :
(numDay == 7) ? 'Воскресение' :
'указываете что-то не то';
alert(calendar);




alert("Задание №5");

let perem = prompt("выберите число: 5, 0, -3, 2");

let peremennaya = (perem == 0 || perem == 2) ? +perem + 7 :
+perem / 10;
alert(peremennaya);


alert("задание №9")
let min = prompt("укажите число от 0 до 59");
function time(min){
    if(min <= 15){
        alert("это первая четверть часа");
    }
    else if(min > 15 && min <= 30){
        alert("это вторая четверть часа");
    }
    else if(min > 30 && min <= 45){
        alert("это третья четверть часа");
    }
    else if(min > 45 && min <= 60){
        alert("это четвертая четверть часа");
    }
    else {
        alert("не то жмакаете!!");
    }
}
time(min);


alert("задание №10");
//let a; 
function numb10(){
    let x; //= a;
    do{
        x = prompt("укажите число");
        if(x != 10){
            alert("неверно!");
        }
    }while(x != 10)
    if(x == 10){
        alert("верно!");
    }
}
numb10();

alert("задание №11");
let day = prompt("укажите количество дней");
function second(day){
    let hour = day * 24;
    alert(`в секундах это будет ${hour * 3600}`);
}
second(day);

//задание №9
alert("задание №12");
let number_1 = prompt("укажите первое число");
let number_2 = prompt("укажите второе число");
function max(number_1, number_2){
    if(number_1 > number_2){
        alert(`большее число ${number_1}`);
    }
    else if(number_1 < number_2){
        alert(`большее число ${number_2}`);
    }
}
max(number_1, number_2);

alert("задание №13");

let numb_1 = prompt("укажите первое число");
let numb_2 = prompt("укажите второе число");
let numb_3 = prompt("укажите третье число");
function sort(numb_1, numb_2, numb_3){
    if(numb_1 > numb_2 && numb_2 > numb_3)
{
    alert(`${numb_1}, ${numb_2}, ${numb_3}`);
}
else if(numb_1 > numb_3 && numb_3 > numb_2)
{
    alert(`${numb_1}, ${numb_3}, ${numb_2}`);
}
else if(numb_1 < numb_2 && numb_1 > numb_3)
{
    alert(`${numb_2}, ${numb_1}, ${numb_3}`);
}
else if(numb_3 < numb_2 && numb_3 > numb_1)
{
    alert(`${numb_2}, ${numb_3}, ${numb_1}`);
}
else if(numb_3 > numb_1 && numb_1 > numb_2)
{
    alert(`${numb_3}, ${numb_1}, ${numb_2}`);
}
else if(numb_3 > numb_2 && numb_2 > numb_1)
{
    alert(`${numb_3}, ${numb_2}, ${numb_1}`);
}
}
sort(numb_1, numb_2, numb_3);

alert("задание №14");

function crat_3_5(){
    let sum = 0;
    let sum1 = 0;
    for(i = 0; i < 20; i++){
        if(i % 3 == 0){
            sum += i;
        }
    }
    for(i = 0; i < 20; i++){
        if(i % 5 == 0){
            sum1 += i;
        }
    }
    alert(sum + sum1);
}
crat_3_5();