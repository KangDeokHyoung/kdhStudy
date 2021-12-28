interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return { name: "토니", age: 30, skill: "스킬!" };
}

const tony = introduce();

console.log(tony.name);
console.log(tony.skill); // 공통된 부분이 아니므로 접근 할수가 없다.

//타입 단언

if ((tony as Developer).skill) {
  console.log((tony as Developer).skill);
}



