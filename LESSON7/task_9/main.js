// *Через Array.prototype. створити власний foreach, filter
// Array.prototype.myForEach=function (callback){
//     const myArray=this;
//     for (const item of myArray) {
//         callback(item);
//     }
// };
// [11, 22, 33].myForEach((x) => console.log(x));

Array.prototype.myFilter = function (predicate) {
    const arr = [];
    for (const item of this) {
        if (predicate(item)) {
            arr.push(item);
        }
    }
    return arr;
};
let users = [
    {name: 'Vitalina', username: 'vita', password: 7638273984},
    {name: 'Paul', username: 'paulozzy', password: '83290Pjh89'},
    {name: 'Svitlana', username: 'lana', password: 384283298},
    {name: 'Margarita', username: 'rita', password: 6398742980928},
    {name: 'Anna', username: 'neuta', password: 'dhfh379879'},
    {name: 'John', username: 'jonny', password: 'jkhf9987'},
    {name: 'David', username: 'dave', password: 9348193029},
    {name: 'Mishel', username: 'mich', password: 'jdhf876876'},
    {name: 'Sandra', username: 'sun', password: 'jkshd6768'},
    {name: 'Makar', username: 'makarena', password: 93874893203}
];
const result=users.myFilter((user)=>user.password);
console.log(result);