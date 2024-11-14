let arr = [48759, 'text', false];
let foobar =()=>{
    document.write(`<ul>`);
    for ( const item of arr) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`<ul>`);
}
foobar()