let isStarted = false;

const getNumber = () => {
  if (isStarted === false) {
    //타이머 작동 안하고 있을 때
    isStarted = true;
    const htmlNum = document.getElementById("number"); // html인증번호 박스

    let num = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");

    console.log(num);

    htmlNum.innerText = num;
    htmlNum.style.color = "#" + num;

    let time = 3;
    const timer = document.getElementById("timer");
    const button = document.getElementById("button");
    setInterval(() => {
      if (time >= 0) {
        let min = Math.floor(time / 60);
        let sec = String(time % 60).padStart(2, "0");
        console.log(min + ":" + sec);
        time = time - 1;
        timer.innerText = min + ":" + sec;
      } else {
        button.innerText = "인증완료";
        button.disabled = "ture";
      }
    }, 1000);
  } else {
  }
};
