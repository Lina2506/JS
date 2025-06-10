// #67kfznmiMl
// – Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = [1, 'fnv', true, {value: 1}, [1, 2, 3, 4, 5], 23, "kfnvkn", NaN, undefined, '10'];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4][2]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);
//
//
// #LARqoUj5I
//
// – Створити 3 об’єкти які описують книги. Поля об’єкту : title ,pageCount, genre.
//
let book1 = {
    title: 'kvvf',
    pageCount: 980,
    genre: 'tale'
}
let book2 = {
    title: 'fvfvv',
    pageCount: 50,
    genre: 'tale'
}
let book3 = {
    title: 'wopskxdc',
    pageCount: 10,
    genre: 'tale'
}
console.log(book1, book2, book3)
//
//     #sA3Gg1sCp
//
// – Створити 3 об’єкти, які описують книги. Поля об’єкту : title ,pageCount, genre, authors. Поле “автори” – являється  масивом. Кожен автор має поля name та age.
//
let book4 = {title: 'wopskxdc', pageCount: 980, genre: 'tale', authors: [{name: 'jkdbckdjvf', age: 34}]};
let book5 = {title: 'wopskxdc', pageCount: 980, genre: 'tale', authors: [{name: 'jkdbckdjvf', age: 34}]};
let book6 = {title: 'wopskxdc', pageCount: 980, genre: 'tale', authors: [{name: 'jkdbckdjvf', age: 34}]};
console.log(book4, book5, book6)
//
//
//     #jCHFnEbdmFd
//
// – Створити масив з 10 об’єктами, які описують сутніть “користувач”. Поля: name, username,password. Вивести в консоль пароль кожного користувача
//
let users=[
    {name: '1',username: '',password: '43434'},
    {name: '2',username: '',password: '43434'},
    {name: '3',username: '',password: '43434'},
    {name: '4',username: '',password: '43434'},
    {name: '5',username: '',password: '43434'},
    {name: '6',username: '',password: '43434'},
    {name: '7',username: '',password: '43434'},
    {name: '8',username: '',password: '43434'},
    {name: '9',username: '',password: '43434'},
    {name: '10',username: '',password: '43434'},

]
console.log(users[0].password, users[1].password, users[2].password, users[3].password, users[4].password, users[5].password, users[6].password, users[7].password, users[8].password, users[9].password)
//
// #coYydZuaeEB
//
// – описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив – вам потрібно подумати.
// Нормальних варіантів опису – 2. Варіант, коли в вас буде одновимірний масив з 21 значенням виключаємо одразу
//

let temps=[
    {day:'MON',
        morT: 3,dayT:4,evT:8},
    {day:'T',
        morT: 3,dayT:4,evT:8},
    {day:'W',
        morT: 3,dayT:4,evT:8},
    {day:'TH',
        morT: 3,dayT:4,evT:8},
    {day:'FR',
        morT: 3,dayT:4,evT:8},
    {day:'SAT',
        morT: 3,dayT:4,evT:8},
    {day:'SUN',
        morT: 3,dayT:4,evT:8},

]
console.log(temps)
//
// #bAUsaq6LI
//
// – Є змінна х, якій ви надаєте довільне числове значення.
//
//     Якщо змінна x не дорівнює нулю, виведіть ‘Вірно’, інакше виведіть ‘Невірно’. Перевірте  скрипт при a, що дорівнює 1, 0, -3
//
let x=-3;
if (x!==0){
    console.log(true)
}else{
    console.log(false)
}
//
// #3ckURgvs
//
// – Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю або четверту частину години).
//
let time=45
if (time>=0 && time<=15){
    console.log('first')
}else if (time>15&&time<=30){
    console.log('second');
}else if (time>30&&time<=45){
    console.log('third');
}else if (time>45&&time<=59){
    console.log('fourth');
}
//
// #UMoNq4biWGe
//
// – У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину (декаду) місяця потрапляє це число (у першу, другу чи третю).
//
let day=20;
if (day>0&&day<11){
    console.log('first');
}else if (day>=11&&day<21){
    console.log('second');
}else if (day>=12&&day<31){
    console.log('third');
}
// #KzrtqyQ
//
// – Скласти розклад на тиждень за домопогою switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа,
// що заплановано на цей день (можна замість плану на день, назву дня англійською).
//
let plan=+prompt('which day?');
switch (plan){
    case 1:
        console.log('Monday');
        break;
    case 2:
            console.log('Tuesday');
            break;
    case 3:
        console.log('Wednesday');
        break;
   case 4:
        console.log('Thursday');
        break;
  case 5:
      console.log('Friday');
                break;
  case 6:
      console.log('Saturday');
      break;
 case 7:
     console.log('Sunday');
     break;
     default:
         console.log('????');
}
//     #uwsz1RnTQJ1
//
// – Користувач вводить або має два числа.Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати, коли введені рівні числа.
//
let number1=+prompt('number first?');
let number2=+prompt('number second?');
if (number1<number2){
    console.log(number2);
}else if (number1>number2){
    console.log(number1);
}else if (number1===number2){
    console.log("???");
}
//         #iBvqtjEm
//
// – є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код, який
// буде присвоювати змінній х значення “default”,  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні,
// тобто ті, які приводиться до false, а це 0 null undefined і тд).
//
let x2=34545;
if (!x2){
    console.log('default');
}else {
    console.log(x2);
}
//     #awLXL6TBzg
//     з файлу arrays.js ( лежить у вкладеннях)  взяти масив coursesAndDurationArray.
//     За допомогою іф перевірити кожен його елемент на тривалість навчання.
//     У випадку, якщо тривалість довша за 5 місяців, вивести в консоль “Супер”.
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration>=5){
    console.log(coursesAndDurationArray[0].title + '-'+ 'Super')
}
if (coursesAndDurationArray[1].monthDuration>=5){
    console.log(coursesAndDurationArray[1].title + '-'+ 'Super')
}
if (coursesAndDurationArray[2].monthDuration>=5){
    console.log(coursesAndDurationArray[2].title + '-'+ 'Super')
}
if (coursesAndDurationArray[3].monthDuration>=5){
    console.log(coursesAndDurationArray[3].title + '-'+ 'Super')
}
if (coursesAndDurationArray[4].monthDuration>=5){
    console.log(coursesAndDurationArray[4].title + '-'+ 'Super')
}
if (coursesAndDurationArray[5].monthDuration>=5){
    console.log(coursesAndDurationArray[5].title + '-'+ 'Super')
}
