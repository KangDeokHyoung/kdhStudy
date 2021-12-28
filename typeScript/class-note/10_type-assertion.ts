//타입 단언(type assertion) as type

var a;

a = 20;
b = "a";

var b = a as string;

//DOM API 조작
<div id="app">hi</div>;
document.querySelector("div"); //id불러 올수도있고 엘리먼트 div를 부를수도 있다.
