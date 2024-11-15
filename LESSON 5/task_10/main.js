let arrayOfMinValue=(numbers)=>{
    let min = numbers [0];
    for (let i = 1; i < numbers.length; i++) {
        const number = numbers[i];
        if (number<min){
            min = number;
        }
    }
    return min;
}
console.log(arrayOfMinValue([765,4875,-87,9]))