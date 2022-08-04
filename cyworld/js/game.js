function getLottoNum() {
  const lottoUl = document.querySelector(".lotto_num");

  if (lottoUl.children.length < 6) {
    for (let i = 0; i < 6; i++) {
      let landomLotto = Math.floor(Math.random() * 45 + 1);
      const li = document.createElement("li");
      li.innerText = landomLotto;
      lottoUl.appendChild(li);
    }
  } else {
    while (lottoUl.firstChild) {
      lottoUl.removeChild(lottoUl.firstChild);
    }
    for (let i = 0; i < 6; i++) {
      let landomLotto = Math.floor(Math.random() * 45 + 1);
      const li = document.createElement("li");
      li.innerText = landomLotto;
      lottoUl.appendChild(li);
    }
  }
}

const startWord = () => {
  let myWord = document.getElementById("myWord").value;
  let word = document.getElementById("word").innerText;
  let firstWord = myWord[0];
  let lastWord = word[word.length - 1];

  if (firstWord === lastWord) {
    document.getElementById("result").innerText = "정답입니다.";
    document.getElementById("word").innerText = myWord;
    document.getElementById("myWord").value = "";
  } else {
    document.getElementById("result").innerText = "땡!!";
    document.getElementById("myWord").value = "";
  }
};
