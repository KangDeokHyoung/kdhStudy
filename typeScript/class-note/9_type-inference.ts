//타입 추론 기본 1

// var a;

function getB(b = 10) {
  var c = "hi";
  return b + c;
}

// 10 + '10' = 1010

//타입 추론 기본 20

interface Dropdown<T> {
  value: T;
  title: string;
}

var shppingItem: Dropdown<string> = {
  value: "hi",
  title: "gg",
};

//타입 추론 기본 3

// interface rim<T> {
//   value: T;
//   title: string;
// }

// interface suum extends rim<string> {
//   age: number;
// }

interface Dropdowns<T> {
  value: T;
  title: string;
}

interface DetailedDropdown<T> extends Dropdowns<T> {
  age: number;
}

var shppingItems: DetailedDropdown<string> = {
  value: "hi",
  title: "gg",
  age: 10,
};

//best Common Type
var arr = [1, 2, true];
