const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

// [id, firstName,lastName, age = id, name, surname, old]  error!!!

const {id, firstName: name, lastName: surname, age: old} = person;  
// const {id, name, surname, old} = person;
console.log(id, name, surname, old);

