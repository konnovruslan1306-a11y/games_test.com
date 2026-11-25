let start = confirm(`Слова: программа, чай, мир, море, небо
    Запомните длину слов. Нужно будет угадать слово по количеству символов.
    Нажмите OK для начала игры`)

    if(start == true){
        let words = ['программа', "чай", "мир", "море", "небо" , "чай", "мир", "море", "небо" ]
        let stages = [
            '_________         ', "\n", 
            '         |         ', '\n',
            '         0         ', '\n',
            '        /|\\       ', '\n',
            '        / \\        ',
        ];
        let wrong = 0; //счетчик ошибок
        let e =0; // счетчик ошибок умноженный на 2
        let answerArray = [] // массив выбрпнного слова в виде символов
        
        let word = words[Math.floor(Math.random() * 10)];// выбор случайного слова из массива

        for(c = 0; c < word.length; c++){
            answerArray[c] = '_'
        }

        let remainingLetters = word.length; //показывает сколько еще надо угадать

        while(remainingLetters > 0){
            alert(answerArray);//показывает каккие буквы угаданы и какие остались
            let guess = prompt('Угадайте букву')//догака пользователя

            if(guess.length != 1){
                alert('Пожалуйста, введите одну букву!');
            }else{
                if(word.indexOf(guess) != -1){
                    let index = word.indexOf(guess);
                    answerArray[index] = guess;
                    remainingLetters--;

                }else{
                    wrong++;
                    e = wrong * 2;
                    if(e <= 8){
                        alert(stages.slice(0, e))
                    }else{
                        alert(stages.slice(0, e))
                        alert("Проиграли!");
                        break;
                    }
                }
            }
        }
        if(answerArray.indexOf('_') == -1){
        alert('Вы победили!');
        }
    }    
