// #iz6emEsP2BA
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration
//     Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції
console.log(coursesAndDurationArray.map((course, index) => ({id: index + 1, ...course})));
// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.
function deepCloner(obj){
    //перевіряємо на null undefined
    if (obj===null||obj===undefined){
        return obj;
    }
    //перевірка NaN
    if (typeof obj==='number'&&isNaN(obj)){
        return NaN;
    }
    //якщо це функція просто повернемо її щоб вона залишилась в копії
    if (typeof obj==='function'){
        return obj;
    }
    //якщо це масив - копіюємо всі елементи
    if (Array.isArray(obj)){
        return obj.map(item=>deepCloner(item));
    }
    // якщо це обєкт копіюємо всі поля
    if (typeof obj==='object'){
        const cloned={};
        for (const key in obj){
            if(obj.hasOwnProperty(key)){
                cloned[key] = deepCloner(obj[key]);
            }
        }
        return cloned;
    }
    // якщо це щось просте: число рядок булеве значення поверне як є
    return obj;
}
let person = {
    name: "Olia",
    age: 22,
    isStudent: true,
    address: {
        city: "Lviv"
    },
    sayHi: function () {
        console.log("Hi!");
    },
    value: NaN
};

let copy = deepCloner(person);

console.log(copy);
copy.sayHi();