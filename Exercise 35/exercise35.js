function repeatHello (callback) {
    setInterval (callback, 1000)
}
const myCallback = () => {
    console.log("Hello")
}

repeatHello(myCallback);

// Utilizamos una "arrow function" porque es mucho más sencillo, ya que al solo imprimir Hello 
// no es necesario modificar el valor de this anteriormente. De esta manera el codigo es más sencillo de escribir con arrow.