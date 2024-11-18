// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model,producer,year,maxSpeed,volume){
    this.model=model
    this.producer=producer
    this.year=year
    this.maxSpeed=maxSpeed
    this.volume=volume
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    this.info=function(){
        for (const argumentsKey in this) {
            console.log(argumentsKey, this[argumentsKey]);
        }
    }
    this.increaseMaxSpeed=function (newSpeed){
        this.maxSpeed = this.maxSpeed + newSpeed;
    }
    this.changeYear=function (newValue){
        this.year = newValue;
    }
    this.addDriver=function (driver){
        this.drive=driver
    }
}

const car=new Car('jaskxsj', 'jkjjll', 1995, 250, 2);
console.log(car);

car.drive();
car.info();
car.increaseMaxSpeed(300);
car.changeYear();
car.addDriver({});
console.log(car);
