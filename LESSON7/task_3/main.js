// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
function User(id,name,surname,email,phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let users = [
    new User(1, 'dcsc', 'sdjkjnkjn', 'jkj@gmai,com', '+3473928287798'),
    new User(2,'sdsh','sjnfkjsn','kjsnckj@.com','+3847873898'),
    new User(3,'jdknckn','ksjdnckjn','kjnkcjn@.gmail','+387890809890'),
    new User(4,'jdkj','jndcknlk','kjcklkd@.com','+3897987798'),
    new User(5,'fvdc','jdcwdxx','fvdecd@.com','+3898749890'),
    new User(6,'jdcas','jkjhkjjl','okölölölö@.com','+389908099'),
    new User(7,'lskajxlk','jpkölköl','dcsdxsx@.com','+380000000'),
    new User(8,'skhssx','oskklkxlk','dcsx.com','+3878679873987'),
    new User(9,'jdcwx','aslxklasmxklm','dcdsxa.com','+387364982739'),
    new User(10,'wedec','dclkxmlkm','pokkjnkx.com','+3887492349'),
];
console.log(users.sort((a, b) => a.id - b.id));