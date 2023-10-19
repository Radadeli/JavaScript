function printName () {
    const helloName = "hello Jhon";


function inner () {
    console.log(helloName)
}

setTimeout(function () {

inner () }, 1000);

}

printName(); 