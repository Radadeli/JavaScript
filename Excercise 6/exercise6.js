
function printName () {
    const helloName = "hello Jhon";


function inner () {
    return helloName;

}
return inner;
 }
const nameFunction = printName();
console.log(nameFunction())
