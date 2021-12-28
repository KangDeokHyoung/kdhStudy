// const rim = document.querySelector("#title");
// querySelector 는 오직 첫번째것 하나만 가져오게 되어있다.
// querySelectorAll 이건 다 가져 올수 있다.

const h1 = document.querySelector("div.hello:first-child h1");
h1.innerText = "더켱스";

// const hanleTitleClick = () => {
//   // h1.className = "active";
//   const clickedClass = "active";
//   if (h1.classList.contains(clickedClass)) {
//     h1.classList.remove(clickedClass);
//   } else {
//     h1.classList.add(clickedClass);
//   }
// };


const hanleTitleClick = () => {
    CLICKED = "active";
    if(h1.classList.contains(CLICKED)){
        h1.classList.remove(CLICKED)
    }else {
        h1.classList.add(CLICKED)
    }
}

// function hanleTitleClick() {
//   //   console.log(title.style.color);
//   //   h1.style.color = "blue";
//   //   console.log(title.style.color);
//   const currentColor = h1.style.color;
//   let newColor;
//   if (currentColor === "blue") {
//     newColor = "red";
//   } else {
//     newColor = "blue";
//   }
//   h1.style.color = newColor;
// }

h1.addEventListener("click", hanleTitleClick);
// title.onclick = hanleTitleClick;
