//написать модуль, который будет включать в себя следующие методы:

//1.1.преобразование строки к нижнему регистру, но первая буква большая.
function toLowerCase(word) {
    const length = word.length;
    let newFirstLetter= word[0].toUpperCase();
      let newLetters;
    let newWord = newFirstLetter;
    for(let i = 1; i < length; i++) {
      newLetters = word[i].toLowerCase();
       newWord += newLetters;
    } 
     
     console.log(newWord);
    }
    
    

    //1.2. преобразование строки с целью правильной расстановки пробелов. "вот пример строки,в которой используются знаки препинания.после знаков должны стоять пробелы ,а перед знаками их быть не должно.  если есть лишние подряд идущие пробелы, они должны быть устранены".
    
    function placementOfSpaces(sentence) {
           let string = sentence.replace(/\s*([,.!?:;])[,.!?:;]*\s*/g, '$1 ');
         console.log(string);
     
    }
    
    
    //1.3. подсчитывающие количество слов в строке
    function countOfWords(str) {
    let newStr = str.replace(/[^a-zа-яё]/gi, ' ') //удаляем все символы кроме букв и пробелов
     newStr = newStr.replace(/\s+/g,' ').trim()
     console.log(newStr.split(' ').length);
    }
    
    
      
    //1.4. подсчитывающий уникальные слова. "Текст, в котором слово текст несколько раз встречается и слово тоже" - в ответе, что слово - 2 раза, текст - 2 раза, в - 1 раз, несколько - 1 раз. Самостоятельно придумать наиболее удачную структуру данных для ответа.
    
      function uniqueWords(str) {
      let newStr = str.replace(/[^a-zа-яё]/gi, ' '); 
      // удаляем все символы кроме букв и пробелов;
       newStr = newStr.replace(/  +/g, ' ').trim().toLowerCase(); //приводим к нижнему регистру и удаляем двойные пробелы и пробелы по краям
        let arr = newStr.split(' ');
       let count = {};
    for (let elem of arr) {
        if (count[elem] === undefined) {
        count[elem] = 1;
        } else {
        count[elem]++;
        }
    }
        let key;
        let countKey;
        let text;
        let result = "Повторения слов в данном предложении: "
    for (let key in count) {
      key = key;
      countKey = count[key];
      text = key + "-" + count[key] + "раз(а), ";
        result += text;
    }
        console.log(result);
      }
    
    
toLowerCase('тАНЕЧКА');   
placementOfSpaces('вот пример строки,в которой используются знаки препинания.после знаков должны стоять пробелы !а перед знаками их быть не должно .  если есть лишние подряд идущие пробелы      ,      они должны быть устранены');   
countOfWords('   сколько,  слов в этом , предложении.');
uniqueWords('Текст, в котором слово текст несколько раз встречается и слово тоже');