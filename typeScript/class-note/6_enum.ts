enum Shoes {
  Nike,
  adidas,
}

var mayShoes = Shoes.Nike;
console.log(mayShoes); //값은 0

enum Shoess {
  Nikes = "나이키",
  adidass = "아디다스",
}

var mayShoess = Shoess.Nikes;
console.log(mayShoess); //값은 나이키

enum Answer {
  Yes = "Y",
  np = "N",
}

function askQuestionS(answer: Answer) {
  if (answer === "Y") {
    console.log("정답");
  }
  if (answer === "N") {
    console.log("틀림");
  }
}

function askQuestion(answer: string) {
  if (answer === "yes") {
    console.log("정답");
  }
  if (answer === "no") {
    console.log("틀림");
  }
}

askQuestion("yes");
