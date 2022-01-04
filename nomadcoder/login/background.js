const images = ["0.jpg", "1.jpg", "2.jpg"];

// Math.floor 소수점 무시하 고 앞자리 수만 보여줌
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
