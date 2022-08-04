const phoneFocusMove = () => {
  let phone01 = document.getElementById("phone01");
  let phone02 = document.getElementById("phone02");

  if (phone01.value.length === 3) {
    phone02.focus();
  }
};
const phoneFocusMove2 = () => {
  let phone02 = document.getElementById("phone02");
  let phone03 = document.getElementById("phone03");

  if (phone02.value.length === 4) {
    phone03.focus();
  }
};
const phoneDisabled = () => {
  let phone01 = document.getElementById("phone01");
  let phone02 = document.getElementById("phone02");
  let phone03 = document.getElementById("phone03");
  let button = document.getElementById("getNum");

  if (
    phone01.value.length === 3 &&
    phone02.value.length === 4 &&
    phone03.value.length === 4
  ) {
    button.disabled = false;
  }
};
