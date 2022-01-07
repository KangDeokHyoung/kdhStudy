// import React from "react";

// const Object1 = () => {
//   function print(person) {
//     console.log(person.name);
//     console.log(person.age);
//   }

//   const ellie = { name: 'ellie', age: 30 };
//   print(ellie);

//   console.log(ellie.name);
//   console.log(ellie['name']);
//   // ellie.name =  ellie['name'];

//   const person1 = { name: 'bob', age: 12 };
//   const person2 = { name: 'steve', age: 11 };
//   const person3 = { name: 'dave', age: 10 };
//   const person4 = makePerson('min', 9);

//   const person5 = { name: 'five', age: 5 };

//   function makePerson(name, age) {
//     return {
//       name, age,
//       // name: name,
//       // age:age,
//     }

//   }
//   console.log(makePerson(person2));
//   console.log(makePerson(person3));
//   console.log(makePerson(person4));
//   console.log(person4);

//   const Array1 = [1, 2, 3, 4, 5, 6];
//   for (let i = 0; i > Array1.length; i++) {
//     console.log(Array1[i]);
//   }

//   for (const min of Array1) {
//     console.log(min)
//   }

//   Array1.forEach(Array1 => console.log(Array1));

//   Array1.forEach(function (Array1) {
//     console.log(Array1)
//   })

//   Array1.forEach(Array1 => {
//     console.log(Array1)
//   })

//   let fruits = ['바나나', '사과', '오렌지', '포도'];
//   let fruits2 = ['체리'];

//   fruits.forEach(fruits => fruits2.push(fruits));
//   console.log(fruits2);  //['체리', '바나나', '사과', '오렌지', '포도']

//   let sum = 0;
//   let numbers = [20, 11, 33, 10, 7, 77];
//   numbers.forEach(numbers => {
//     sum += numbers;
//   });
//   console.log(sum)

//   // forEach, Map
//   let numbers3 = [20, 11, 33, 10, 7, 77, 2];
//   numbers3.forEach((number, index) => {
//     if (index === 1) numbers3[index] = number * 2;
//     // numbers3[index] = number * 2;
//   });
//   console.log(numbers3)

//   const doubled = numbers3.map((num) => num * 2);
//   console.log(doubled)

//   let nums = [20, 11, 33, 10, 7, 77, 2];
//   nums.forEach(function (number, index) {

//     if (index === 1) nums[index] = number * 2;
//   });
//   //   console.log(nums);
//   nums.forEach(function (number, index) {
//     // nums[index] = number * 2;
//     if (index === 2) nums[index] = number * 2;
//   });
//   console.log(nums);

//   const ddd = nums.map(function (number, index) {
//     if (index === 2) return number * 2;
//     return number;
//   });

//   console.log(ddd)

//   // const ddd = nums.map(function(number, index){
//   //   // return nums = number * 2;
//   //   if(index === 2) return number * 2;
//   //   return number;
//   // });
//   // console.log(ddd);

//   // var num = 10;
//   // switch (num % 2) {
//   //   case 0:
//   //     alert("해당 값은 짝수!");
//   //     break;
//   //   case 1:
//   //     alert("해당 값은 홀수!");
//   //     break;
//   //   default:
//   //     alert("잘못된 입력 값!");
//   //     break;
//   // }

//   // console.log(num);

//   //ex)1
//   // const num =10;

//   //ex)1
//   // num > 0 ? console.log("양수!") : console.log("음수!");

//   //ex2
//   // const nums = 11; 
//   // const re = nums > 10 ? "양수" : "홀수" ;
//   // console.log(re); 




//   return <div></div>;
// };

// export default Object1;


