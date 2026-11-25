
    let start = confirm('Мы загадываем число от 0 до 100. Вы готвы к игре?')
    if(start == true){
        let number = Math.floor(Math.random() * 10);
        let win = false;
        while(win == false){
            let guess = prompt('Введите чило');
            if(guess < number){  
                alert('Загадонное чиcло побольше!');
            }else if(guess > number){
                alert('Загадонное чиcло поменьше!');
            }else{
                alert('Успех!');
                alert('Было загадано число ' + number);
                win = true;
            }
        }
    }
