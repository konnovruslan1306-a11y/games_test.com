
let welcome = confirm("welcome мой друг, игра называется 'УГАДАЙКУ' ты дольжен написать три числа трехзначный значение и у тебя 10 попытки если ты угадал то получаеш очень много денег удачи")
let number = [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9];
for (let v = 1; v <= 10; v++) {
let randtoms = Math.floor(Math.random() * number.length);
let randomblus = number[randtoms];
let randtoms1 = Math.floor(Math.random() * number.length);
let randomblus1 = number[randtoms1];
let randtoms2 = Math.floor(Math.random() * number.length);
let randomblus2 = number[randtoms2];
let my = prompt('напиши числа с трехзначный значение ' + "попытка" + v )
   if(my == randomblus + ""  + randomblus1 + '' + randomblus2 ){
        alert('ты выиграл и получили 1000000000$')
        break
    }else{
        alert("ошибся ты")
    }   
if(v == 10){
    break
}
}