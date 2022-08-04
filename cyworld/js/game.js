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
