const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;
// Modify the property `firstName` of the `person2` in "Simon".
// person2.firstName = "Simon"; 
person2.firstName = "Simon";

console.log(person1);
console.log(person2);
// Explicación: 
// Luego de declarar los valores de person1, hemos dicho que person2 es igual a person1 por lo que apuntan a la misma memoria.
// De esta manera, cualquier modificación que exista tanto en person1 o person2 modificará también al otro. 
