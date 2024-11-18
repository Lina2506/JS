class Car {

    constructor(model, producer, year, maxSpeed, volume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    }
    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    info(){
        for (const argumentsKey in this) {
            console.log(argumentsKey, this[argumentsKey]);
        }
    };
    increaseMaxSpeed=function (newSpeed){
        this.maxSpeed = this.maxSpeed + newSpeed;
    };
    changeYear(newValue){
        this.year = newValue;
    };
    addDriver(driver){
        this.drive=driver
    };
}
const car=new Car('jaskxsj', 'jkjjll', 1995, 250, 2);
console.log(car);

car.drive();
car.info();
car.increaseMaxSpeed(300);
car.changeYear();
car.addDriver({});
console.log(car);