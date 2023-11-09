let ourPromise = new Promise((resolve, reject) => {

const number = 15;

if (number > 10) {
    resolve("La variable es mayor que 10");
} else {
    reject ("La variable es menor que 10")
}
})
ourPromise
.then((message) =>  console.log ("resolve", message))
.catch((message) => console.log ("reject", message))
