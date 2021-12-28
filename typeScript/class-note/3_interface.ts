interface User {
  age: number;
  name: string;
}

var seho: User = {
  age: 0,
  name: "aa",
};

function getUser(user: User) {
  console.log(user);
}

const capt = {
  name: "캡틴",
  age: 30,
};
getUser(capt);

function sum(a, b) {
  return a + b;
}

interface SumFunction {
  (a: number, b: number): number;
}

var sums: SumFunction;
sums = function (a, b) {
  return a + b;
};

interface StringArray {
  [index: number]: string;
}

var arrs: StringArray = ["a", "b", "c"];

//인터페이스 확장
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
}

var capts: Developer = {
  name: "d",
  age: 0,
  language: "d",
};
