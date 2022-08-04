const checkValldation = () => {
  let email = document.getElementById("email").value;
  let pw01 = document.getElementById("pw01").value;
  let pw02 = document.getElementById("pw02").value;
  let button = document.getElementById("button");

  if (email !== "" && pw01 !== "" && pw02 !== "") {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
  console.log("dd");
};
