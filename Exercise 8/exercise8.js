function multiplyByTwo(value) {
  let number = 2;
  
  function inner () {
    return value * number;
  }
  return inner;
}

let result = multiplyByTwo(5)();

console.log(result)

  




