class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }


JSON (person){ 
return {
  id:this.id, 
  firstName:this.firstName,
  lastName:this.lastName,
  age:this.age
};
}
}
const developer = new Person(1, 'Mario', 'Rossi', 25);
// Print developer as json object

const developerJSON = JSON.stringify(developer);
console.log(developerJSON);
