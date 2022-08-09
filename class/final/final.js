//휴대폰 입력시 다음칸으로 포커스 이동하기

const movePhone01 = () => {
  let phoneInput = document.getElementById("registerPhone01");

  let nextPhoneInput = document.getElementById("registerPhone02");

  if (phoneInput.value.length === 3) {
    nextPhoneInput.focus();
  }
};

const movePhone02 = () => {
  let phoneInput = document.getElementById("registerPhone02");

  let nextPhoneInput = document.getElementById("registerPhone03");

  if (phoneInput.value.length === 4) {
    nextPhoneInput.focus();
  }
};

const onPhoneNum = () => {
  let phoneInput01 = document.getElementById("registerPhone01").value;
  let phoneInput02 = document.getElementById("registerPhone02").value;
  let phoneInput03 = document.getElementById("registerPhone03").value;

  if (
    phoneInput01.length === 3 &&
    phoneInput02.length === 4 &&
    phoneInput03.length === 4
  ) {
    document.getElementById("sendPhoneNum").disabled = false;
  }
};

let timerStart = false;
let time = 180;

const onPhoneNumSend = (event) => {
  event.preventDefault();
  if (timerStart === true) {
    alert("인증번호 요청중입니다. 잠시 후 다시 요청해주세요.");
    return false;
  } else {
    timerStart = true;
  }

  //인증번호 토큰 생성

  let getPhoneNum = String(Math.floor(Math.random() * 1000000)).padStart(
    6,
    "0"
  );

  document.getElementById("phoneNumView").innerText = getPhoneNum;

  //타이머
  let timer = setInterval(function () {
    if (timerStart === true) {
      if (time >= 0) {
        let min = Math.floor(time / 60);

        let sec = String(time % 60).padStart(2, "0");

        time = time - 1;

        document.getElementById("phoneNumTime").innerText = `${min} : ${sec}`;

        //인증완료 활성화
        document.getElementById("phoneNumCom").disabled = false;
      } else {
        timerStart = false;
        alert("시간이 초과되었습니다. 잠시 후 다시 시도해주시기 바랍니다.");
        document.getElementById("phoneNumTime").innerText = "3 : 00";
        document.getElementById("phoneNumView").innerText = "000000";
        document.getElementById("phoneNumCom").disabled = true;
        time = 180;
        clearInterval(timer);
      }
    }
  }, 1000);
};

const onPhoneNumCom = (event) => {
  event.preventDefault();
  alert("인증이 완료 되었습니다.");
  timerStart = false;
  document.getElementById("sendPhoneNum").disabled = true;
  document.getElementById("phoneNumCom").disabled = true;
  document.getElementById("register__submit").disabled = false;
};

//회원가입 완료 검증

const registerConfirm = (event) => {
  event.preventDefault();
  let email = document.getElementById("registerId");
  let name = document.getElementById("registerName");
  let pw01 = document.getElementById("registerPw01");
  let pw02 = document.getElementById("registerPw02");
  let phone01 = document.getElementById("registerPhone01");
  let phone02 = document.getElementById("registerPhone02");
  let phone03 = document.getElementById("registerPhone03");
  let area = document.getElementById("areaSelect");
  let genderMan = document.getElementById("man");
  let genderGirl = document.getElementById("girl");

  //검증 유무
  let isCom = true;

  //이메일 검증
  if (email.value === "") {
    document.getElementById("errorEmail").innerText = "이메일을 입력해주세요.";
    isCom = false;
  } else {
    document.getElementById("errorEmail").innerText = "";
  }
  //   if (email.includes("@") === false) {
  //     document.getElementById("errorEmail").innerText =
  //       "이메일 형식이 올바르지 않습니다.";
  //     isCom = false;
  //   } else {
  //     document.getElementById("errorEmail").innerText = "";
  //   }

  //이름 검증
  if (name.value === "") {
    document.getElementById("errorName").innerText = "이름을 입력해주세요.";
    isCom = false;
  } else {
    document.getElementById("errorName").innerText = "";
  }

  //비밀번호 검증
  if (pw01.value === "") {
    document.getElementById("errorPw01").innerText = "비밀번호를 입력해주세요.";
    isCom = false;
  } else {
    document.getElementById("errorPw01").innerText = "";
  }
  if (pw02.value === "") {
    document.getElementById("errorPw02").innerText = "비밀번호를 입력해주세요.";
    isCom = false;
  } else {
    document.getElementById("errorPw02").innerText = "";
  }
  //   if (pw01.value !== pw02.value) {
  //     document.getElementById("errorPw01").innerText =
  //       "비밀번호가 서로 다릅니다.";
  //     document.getElementById("errorPw02").innerText =
  //       "비밀번호가 서로 다릅니다.";
  //     isCom = false;
  //   } else {
  //     document.getElementById("errorPw01").innerText = "";
  //     document.getElementById("errorPw02").innerText = "";
  //   }

  //휴대폰 검증
  if (phone01.value === "") {
    document.getElementById("errorPhone").innerText =
      "휴대폰 번호를 입력해주세요.";
    isCom = false;
  } else {
    document.getElementById("errorPhone").innerText = "";
  }
  if (phone02.value === "") {
    document.getElementById("errorPhone").innerText =
      "휴대폰 번호를 입력해주세요.";
    isCom = false;
  } else {
    document.getElementById("errorPhone").innerText = "";
  }
  if (phone03.value === "") {
    document.getElementById("errorPhone").innerText =
      "휴대폰 번호를 입력해주세요.";
    isCom = false;
  } else {
    document.getElementById("errorPhone").innerText = "";
  }

  //   지역 검증
  if (area.value === "") {
    document.getElementById("errorArea").innerText = "지역을 선택해주세요.";
    isCom = false;
  } else {
    document.getElementById("errorArea").innerText = "";
  }

  //성별 검증
  if (man.checked === false && girl.checked === false) {
    document.getElementById("errorGender").innerText = "성별을 선택해주세요.";
    isCom = false;
  } else {
    document.getElementById("errorGender").innerText = "";
  }

  if (isCom === true) {
    alert("코드캠프 회원가입이 완료되었습니다.");
  }
};
