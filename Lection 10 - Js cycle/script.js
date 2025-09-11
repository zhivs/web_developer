//Массивы в JS

// Структура данных (специальаный составной тип данных)


// Характеристики массивов
// 1. Упорядоченные - у элементов опредленный порядок и к ним можно обращаться по индексу
// 2. Динамические - можем изменять и удалять элементы по ходу работы скрипта(программы)
// 3. Позволяют хранить различные типы данных
// 4. Массивы = объекты
// 5. Массивы обладают определенными свойствами и методами (можем узнать длину массива, положить жлемент внутрь массива и т.д.)

//let fruits = new Array();

let fruits = [];

fruits = ['banana', 'apple', 'orange']

let ages = [18, 25, 63, 34]

//console.log(typeof ages)

//Методы у массивов


//Стэк - вариант применения массива. (LIFO last in first out)

// Добавить элемент в конец массива
//push
ages.push(12)
//console.log(ages)


// Удалить элемент в конце
//pop

ages.pop()

//console.log(ages)

//Очередь (FIFO first in first out) (Например, удаление сообщений)

// Удалить элемент в начале массива
ages.shift()

//console.log(ages)

// Добавить жлемент в начало массива

ages.unshift(5)

//console.log("Добавляем 5 в начало массива " + ages)

//slice() - возвращает копию части массива

some_ages = ages.slice(0,3)

//console.log("Первые 3 элемента массива ages " + some_ages)


//map() - создания нового массива, преобразуя каждый элемент

//filter() - создание массива, "фильтруя" каждый элемент

//find() - поиск элемента по заданному условию

//forEach() - перебор каждого элемента массива

//sort() - сортировка массива

//Ветвление кода - некотрий "семафор", который опредляет ход выполнения программы 

//Состояние истина - true 
//Состоние ложь - false

// Конструкиця if

// if (логическое выражение) {
//     исполнение выражений в случае истины
// }
// else
//     исполнение выражений в случае лжи

let number = Math.floor(Math.random() * 11)

// if (number % 2 == 0)
// {
//     console.log('Выпало четное число ' + number)
// }
// else {
//     console.log("Выпало нечетное число" + number)
// }


let letters = ['a', 'b', 'c']

letters_rand_index = Math.floor(Math.random() * letters.length)

let random_char = letters[letters_rand_index]

// if (random_char == 'a')
//     console.log('Выпал символ a')
// else if(random_char == 'b')
//     console.log('Выпал символ b')
// else if(random_char == 'c')
//     console.log('Выпал символ c')
// else
//     console.log('Мы не смогли обработать данный символ')

//switch


// let age = 118

// switch(age) {
//     case 11:
//         console.log('Пока рано продавать нежелательную продукцию')
//     case 17:
//         console.log('Нужно еще совсем чуть-чуть стать взрослее')
//     case 18:
//         console.log('Лааадно, продаем')
//         break
//     case 85:
//         console.log('Вообще можем, но поздновато')
//     default:
//         console.log('Ведите здоровый образ жизни!')
// }


//Циклы

//Характерные особенности:
//Начинаются с ключевого слова
//Выражения, которые выполняются в теле цикла обычно располагаются между признакомом начала цикла и завершения цикла

//Структура цикла

// начало, условие повторения 
//     набор действий Один полный набор действий в цикле называется итерацией цикла
// окончание

// Ключевые слова
//for while

// Цикл while

// let index = 0;

// while (index < 5)
// {
//     console.log(index);
//     index++;
// }

// let index = 5;

// while (index) {
//     console.log(index);
//     index--;
// }

// do {
//     тело цикла
// }
// while condition

// let  index = 0 

// do {
//     console.log(index)
//     index++;
// } while (index < 3)


//for (начало; логическое_выражение; шаг) 
// {
//     тело цикла
// }

// for(let i = 0; i <= 10; i++)
// {
//     console.log(i)
// }

//Выполняем начало цикла

// Если логическое выражене == true -> выполнить тело цикла, выполнить шаг
// Если логическое выражене == true -> выполнить тело цикла, выполнить шаг
// ...
// ...


// let i = 0

// for(; i < 10;){ // аналогична while(i < 10)
//     console.log(i++)
// }

// for(;;) - бесконечный цикл



// for(let index = 0; index < 10; index++){
//     if (index == 6){
//         break;
//     }
        
//     console.log(index)
// }


// for(let index = 0; index < 10; index++){
//     if (index % 2 == 0){
//         continue;
//     }
        
//     console.log(index)
// }

//Функция - набор выражений, который можно вызывать по имени


let mynumber = 92

let sqrt = Math.sqrt(mynumber)

//console.log(sqrt)

function show_my_name() {
    console.log('My name is Ivan')
}

// show_my_name();
// show_my_name();

//локальные переменные
function show_word()
{
    let word = 'Hello'
    console.log(word)
}

//show_word()

//console.log(word) // word is not defined


// let username = 'Ivan'

// function show_name() {
//     console.log(username)
// }

// show_name()


//Параметры функции

//Параметр - это переменная в круглых скобках
//Аргумент - это значение, которое передается функции при ее вызове

//from - параметр
//love - аргумент

// function show_message(from, text)
// {
//     console.log('From '+from+ ' with ' + text)
// }

// show_message('love', 'Russia');


//Параметр по умолчанию

function show_message(from, text='Russia')
{
    console.log('From '+from+ ' with ' + text)
}

// show_message('love');

// show_message('love', 'Belarus')


//Ключевое слово return


function sum(a, b) {
    return a + b
}


let mysum = sum(4,46)

//console.log(mysum)


//Нейминг функции

//Например:
// get_... - получить какое-либо значение
// set_... - установить значение
// update_... - обновить значение
// create_... - создать элемент\сущность ...
// show_... / print_...
// check_...

//Практика

//Вычислить сумму всех числе в массиве

// function sumArray(arr) {
//     let sum = 0;

//     let arrayLen = arr.length;

//     for(let i = 0; i < arrayLen; i++)
//     {
//         //Пропустить не число
//         if (typeof arr[i] != 'number')
//             continue

//         sum += arr[i]
//     }

//     return sum
// }


// let testArray = [1,2, "56", "das"]

// console.log(sumArray(testArray))


// Найти максимальное число в массиве

// function findMax(arr) {
    
//     let max = arr.pop()
//     let arrLen = arr.length

//     for (let i = 0; i < arrLen; i++) {
//         if(max < arr[i])
//             max = arr[i]
//     }
    
//     return max
// }


// let testarr2 = [123,5512,213,56621,213,256621]

// console.log(findMax(testarr2))


// alert('Hello, frends!')


//Отфильтровать четные числа

//Написать функцию, которая возврщает массив, содержащий только четные числа из исходного

function getEvenNumbers(arr)
{
    let resultArr = []

    for(let number of arr) {
        if (number % 2 ==0)
            resultArr.push(number)
    }
    return resultArr;
}

let testarr3 = [123,332,2,46,7,12,67,8,23,67]

// console.log(getEvenNumbers(testarr3))


//Посчитаем количество гласных в строке

function countVowels(str) {
    const vowels = ['e', 'y','u','i','o','a', 'у','е','ы','а','о','э','я','и','ю'];

    let vowels_count = 0

    for (let char of str.toLowerCase()) {
        if (vowels.includes(char))
            vowels_count++;
    }

    return vowels_count;
}

const mystring = 'Ах, не говорите мне про Австрию! Я ничего не понимаю, может быть, но Австрия никогда не хотела и не хочет войны. Она предает нас. Россия одна должна быть спасительницей Европы. Наш благодетель знает свое высокое призвание и будет верен ему. Вот одно, во что я верю. Нашему доброму и чудному государю предстоит величайшая роль в мире, и он так добродетелен и хорош, что Бог не оставит его, и он исполнит свое призвание задавить гидру революции, которая теперь еще ужаснее в лице этого убийцы и злодея. Мы одни должны искупить кровь праведника. На кого нам надеяться, я вас спрашиваю?.. Англия с своим коммерческим духом не поймет и не может понять всю высоту души императора Александра. Она отказалась очистить Мальту. Она хочет видеть, ищет заднюю мысль наших действий. Что они сказали Новосильцеву? Ничего. Они не поняли, они не могли понять самоотвержения нашего императора, который ничего не хочет для себя и все хочет для блага мира. И что они обещали? Ничего. И что обещали, и того не будет! Пруссия уже объявила, что Бонапарте непобедим и что вся Европа ничего не может против него... И я не верю ни в одном слове ни Гарденбергу, ни Гаугвицу. Cette fameuse neutralité prussienne, ce n\'est qu\'un piège 9. Я верю в одного Бога и в высокую судьбу нашего милого императора. Он спасет Европу!.. — Она вдруг остановилась с улыбкой насмешки над своею горячностью.;'

//console.log(countVowels(mystring))

//Классификатор возраста

function getAgeGroup(age)
{
    if (age < 13) return 'Ребенок'
    else if (age < 18) return 'Подросток'
    else if (age < 65) return 'Взрослый'
    else return 'Пожилой'
}

console.log(getAgeGroup(17))