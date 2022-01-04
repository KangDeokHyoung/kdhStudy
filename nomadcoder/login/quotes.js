const quotes = [
  { quote: "우리는 고통을 받아들이고 그것을 우리의 여정을 위한 연료로 태워야 한다.", author: "덕형" },

  {
    quote: "오늘의 위기는 내일의 이야기고, 그것은 당신의 이야기다. 어떤 행동을 묘사하고 싶은지 결정하라.",
    author: "현영",
  },
  {
    quote:
      "힘든 시기가 항상 지속되는 것은 아니다. 당신의 힘든 시간은 당신을 만들고 당신을 성장시키기 위해 있는 것이다.",
    author: "원석",
  },
  { quote: "꿈꿀 수 있으면, 할 수 있습니다.", author: "상균" },
  { quote: "뭣 같은 일은 매일 일어난다. 다만 그걸 어떻게 대처하느냐가 모든 차이를 만든다.", author: "영규" },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
