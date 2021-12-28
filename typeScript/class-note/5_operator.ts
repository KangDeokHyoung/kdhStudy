// function logMessage(value: string) {
//   console.log(value);
// }

// logMessage("hello");
// logMessage(10);

// var sehos: string | number | boolean;

// function logMessage(value: string | number) {
//   if (typeof value === "number") {
//     value.toLocaleString();
//   }
//   if (typeof value === "string") {
//     value.toString();
//   }
// }

// logMessage("hello");
// logMessage(10);

interface Developer {
  name: string;
  skill: string;
}

interface Persons {
  name: string;
  age: number;
}

function askSomeone(sum: Developer | Persons) {

    sum.name, //공통된것만 제공된다.
    // sum.skill,
    // sum.age
    
}

var sehos: string | number | boolean;
var captss:string & number & boolean;



function askSomeoness(sum: Developer & Persons) {
    sum.name, 
    sum.skill,
    sum.age
}