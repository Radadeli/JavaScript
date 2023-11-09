const promise1 = (isLogged) => {
    return new Promise((resolve, reject) => {
        setTimeout (() => { 
        if (isLogged === true) {
            resolve(Math.random())
        }
            else { 
                reject ("error")
            }
        }, 1000);
    })
};

const promise2 = (number) => { 
    return new Promise((resolve, reject) => {
        setTimeout (() => { 
        if (number > 0.5) {
            resolve (`{name: "John", age: 24}`)
        } else {
            reject ("error")
        } 
    }, 1000);
    })
;}

const isLogged = true; 
const number = 5; 

promise1(isLogged) 
.then((randomNumber) => {
    console.log(randomNumber);
    return promise2 (number)
})
.then ((userData) => {
    console.log(userData)
})

.catch((error) => {
    console.log (error)
})