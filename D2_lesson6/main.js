
//         Текстовий урок
//         JS. ДЗ 6
//         Коди з лекцій та коди з ДЗ
//
//         https://github.com/OktenSchool/javascript.git
//
//
//
//             #dFeorS3m7u
//
// – Знайти та вивести довжину наступних стрінгових значень
//  ‘hello world’
//  ‘lorem ipsum’
//  ‘javascript is cool’
//
// let string1='hello world';
// let string2='lorem ipsum';
// let string3='javascript is cool';
// console.log(string1.length);
// console.log(string2.length);
// console.log(string3.length);
// //
// let arr=[string1,string2,string3];
// for (const item of arr) {
//     console.log(item.length);
// }
// //     #8lld9HMxXWB
// // – Перевести до великого регістру наступні стрінгові значення
// //       ‘hello world’, ‘lorem ipsum’, ‘javascript is cool’
// for (let item of arr) {
//     console.log(item.toUpperCase());
// }
// //
// // #ClDsAm7xba7
// // – Перевести до нижнього регістру наступні стрінгові значення
//       let bigSrtingLetters1='HELLO WORLD';
//       let bigSrtingLetters2='LOREM IPSUM';
//       let bigSrtingLetters3='JAVASCRIPT IS COOL';
//       let arrBigStringLettters=[bigSrtingLetters1, bigSrtingLetters2, bigSrtingLetters3];
// for (let item of arrBigStringLettters) {
//     console.log(item.toLowerCase());
// }
//
// //
// //     #0b89BkYZwu
// // – Є “брудна” стрінга let str = ‘ dirty string   ‘ . Почистити її від зайвих пробілів.
// //
// let str = ' dirty string   ';
// const s = str.trim();
// console.log(s);
//
//             #bfoJuse4ZzP
// – Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//         function stringToArray(str){
//         if (str) {
//                 let split = str.split(' ');
//                 return split;
//         }
//         return [''];
//         }
//
// console.log(stringToArray('Ревуть воли як ясла повні' ));
// //
// //
// //
// //
// //         #Rbr5kEQ
// //
// // – є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об’єкти
// // в масиві на стрінгові.
// //
// const arrNumbers=[10,8,-7,55,987,-1011,0,1050,0];
// let string=arrNumbers.map(arrNumbers=>arrNumbers+'');
// console.log(string);
// //
// //     #5hqyKTfmc
// // – створити функцію sortNums(array,direction), яка приймає масив чисел, та сортує його від
// // більшого до меншого, або навпаки  – залежно від значення аргументу direction.
// function sortNums(array,direction){
//         if(direction === 'ascending')return array.sort((a,b)=>a-b);
//         if(direction === 'descending')return array.sort((a,b)=>b-a);
// }
//
// console.log(sortNums([11,21,3], 'ascending'));
// console.log(sortNums([11, 21, 3], 'descending'));
// //
// //         sortNums(nums,’ascending’) // [3,11,21]
// //         sortNums(nums,’descending’) // [21,11,3]
//
// //     ==========================
// //
// //         #yo06d74c1C
// //
// // – є масив
// let coursesAndDurationArray = [
//         {title: 'JavaScript Complex', monthDuration: 5},
//         {title: 'Java Complex', monthDuration: 6},
//         {title: 'Python Complex', monthDuration: 6},
//         {title: 'QA Complex', monthDuration: 4},
//         {title: 'FullStack', monthDuration: 7},
//         {title: 'Frontend', monthDuration: 4}
// ];
// //  — відсортувати його за спаданням за monthDuration
// const map1=coursesAndDurationArray
//     .sort((a, b) => b.monthDuration - a.monthDuration)
// //  — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців
//     .filter(value => value.monthDuration > 5)
// //  — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
//     .map((value, index) => ({id: index + 1,...value}));
// console.log(map1)
// // #4LJn7zBx
// // взяти з arrays.js масив coursesArray
// let coursesArray = [
//         {
//                 title: 'JavaScript Complex',
//                 monthDuration: 5,
//                 hourDuration: 909,
//                 modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//         },
//         {
//                 title: 'Java Complex',
//                 monthDuration: 6,
//                 hourDuration: 909,
//                 modules: ['html',
//                         'css',
//                         'js',
//                         'mysql',
//                         'mongodb',
//                         'angular',
//                         'aws',
//                         'docker',
//                         'git',
//                         'java core',
//                         'java advanced']
//         },
//         {
//                 title: 'Python Complex',
//                 monthDuration: 6,
//                 hourDuration: 909,
//                 modules: ['html',
//                         'css',
//                         'js',
//                         'mysql',
//                         'mongodb',
//                         'angular',
//                         'aws',
//                         'docker',
//                         'python core',
//                         'python advanced']
//         },
//         {
//                 title: 'QA Complex',
//                 monthDuration: 4,
//                 hourDuration: 909,
//                 modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//         },
//         {
//                 title: 'FullStack',
//                 monthDuration: 7,
//                 hourDuration: 909,
//                 modules: ['html',
//                         'css',
//                         'js',
//                         'mysql',
//                         'mongodb',
//                         'react',
//                         'angular',
//                         'aws',
//                         'docker',
//                         'git',
//                         'node.js',
//                         'python',
//                         'java']
//         },
//         {
//                 title: 'Frontend',
//                 monthDuration: 4,
//                 hourDuration: 909,
//                 modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//         }
// ];
// // –написати пошук всіх об’єктів, в яких в modules є sass
// console.log(coursesArray.filter(course => {
//        return course.modules.includes('sass')
// }));
// // –написати пошук всіх об’єктів, в яких в modules є docker
// console.log(coursesArray.filter(course => {
//         return course.modules.includes('docker')
// }));
// #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів).
// Більшу частину колоди можна описати з використанням циклу
// Після опису, використовуючи функції масивів:
const suits = ['spade', 'diamond', 'heart', 'club'];
const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
const cards=[];
for (const suit of suits) {
        for (const value of values) {
                const card={cardSuit:suit,cardValue:value};
               if (suit==='heart'||suit==='diamond') {
                       card.color='red'
               }else{
                       card.color = 'black';
               }
               cards.push(card);
        }
}
console.log(cards);
//     – знайти піковий туз
console.log(cards.find(card => card.cardValue === 'ace' && card.cardSuit === 'spade'));
//  – всі шістки
console.log(cards.filter(card => card.cardValue === '6'));
//  – всі червоні карти
console.log(cards.filter(card => card.color === 'red'));
//  – всі буби
console.log(cards.filter(card => card.cardSuit === 'diamond'));
//  – всі трефи від 9 та більше
console.log(cards.filter(card => card.cardSuit === 'club' && !['6','7','8'].includes(card.cardValue)));
// Приклад моделі об’єкту карти:
// {
//
//     cardSuit: ”, // ‘spade’, ‘diamond’,’heart’, ‘clubs’
//
//     value: ”, // ‘6’-’10’, ‘ace’,’jack’,’queen’,’king’
//
//     color:”, // ‘red’,’black’
//
// }

// #EP5I1UUzAX
// Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт
// Приклад моделі кінцевого об’єкту
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
//
// }
const sortCards=cards.reduce((accum, card) => {
        if (card.cardSuit === 'spade') {
                accum.spades.push(card);
        }
        if (card.cardSuit === 'diamond') {
                accum.diamonds.push(card);
        }
        if (card.cardSuit === 'heart') {
                accum.hearts.push(card);
        }
        if (card.cardSuit === 'club') {
                accum.clubs.push(card);
        }
        return accum;
}, {
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
});
console.log(sortCards);