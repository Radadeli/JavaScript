const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

const filteredData = { 
  id: person.id,
  age: person.age,
}
const filteredJSON = JSON.stringify(filteredData)
// const json = JSON.stringify(person);

// console.log(json); // Should return: { id: 1, age: 25 }

console.log(filteredData)