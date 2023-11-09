// function printAsyncName (callback, firstName) {
//    setTimeout (function() {
//     callback();
   
//    setTimeout (function() {
//     console.log(firstName);
//    }, 2000);
// }, 1000);
// }

// printAsyncName (function(){ 
//     console.log("hello");
// }, "Ramiro");

// mas sencillo: 

function printAsyncName(callback, name) {
    setTimeout(callback, 1000);
    setTimeout(() => console.log(name), 2000);
  }

printAsyncName(() => console.log("Hello"), "Ramiro")