const user = {
  id: 1,
  name: "John",
  age: 25,
};

// function saveUser (userObject) {
//   try {
//     const userJSON = JSON.stringify(userObject)
//     localStorage.setItem('user', userJSON)  //Estos son los dos argumentos, clave(user) y valor (userJSON)
//     console.log('User save in localStorage')
//   }
//     catch(error) {
//       console.error('Error', error);
//     }
 
// }

// saveUser();

// Objeto guardado en localStorage utilizando .setItem 

const userFromLocalStorage = JSON.parse(localStorage.getItem('user'));
console.log(userFromLocalStorage) 
