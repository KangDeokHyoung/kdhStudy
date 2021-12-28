// function logText(text) {
//   console.log(text);
//   return text;
// }
// logText(10); //number 10
// logText("하이"); // string 하이
// logText(true); // boolean true

function logText<T>(text: T): T {
  return text;
}

logText<number>(10);
logText<string>("강");

// ---------------------------------------------------

// function logTextss(text: string | number) {
//   console.log(text);
//   return text;
// }

// const a = logText('a')
// a.split('')  // 문자열 메서드지만 유니언(스트링 또는 넘버) 이므로 사용을 할수가 없다.

function logTextss<T>(text: T): T {
  console.log(text);
  return text;
}
const a = logTextss<string>("하이");
a.split(""); //문자열임으로 사용 가능

// logTextss("a");
// logTextss(10);

interface Dropdown<T> {
  value: T;
  selected: boolean;
}

const obj: Dropdown<string> = {
  value: "얌",
  selected: false,
};

//제네릭의 타입 제한
function logTextLength<T>(text: T[]): T[] {
  console.log(text.length);
  text.forEach(function (text) {
    console.log(text);
  });
  return text;
}

logTextLength<string>(["hi"]);

//제네릭 타입 제한 2 - 정의된 타입 이용하기

interface LengthType {
  length: number;
}

function logTextLengths<T extends LengthType>(text: T): T[] {
  text.length;
  return;
}

//제네릭 타입 제한 3 - keyof

interface ShoppingItem {
  price: number;
  name: string;
  stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}

getShoppingItemOption("name");

// getShoppingItemOption(10);

// getShoppingItemOption(10);
// getShoppingItemOption<string>("a");
