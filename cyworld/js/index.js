const goHome = () => {
  document.getElementById("viewFrame").setAttribute("src", "./home.html");
  document.getElementById("menuHome").style =
    "background-color: #fff; color: #000;";
  document.getElementById("menuGame").style =
    "background-color: #298EB5; color: #fff;";
  document.getElementById("menuJukebox").style =
    "background-color: #298EB5; color: #fff;";
};

const goGame = () => {
  document.getElementById("viewFrame").setAttribute("src", "./game.html");
  document.getElementById("menuGame").style =
    "background-color: #fff; color: #000;";
  document.getElementById("menuHome").style =
    "background-color: #298EB5; color: #fff;";
  document.getElementById("menuJukebox").style =
    "background-color: #298EB5; color: #fff;";
};

const goJukebox = () => {
  document.getElementById("viewFrame").setAttribute("src", "./jukebox.html");
  document.getElementById("menuJukebox").style =
    "background-color: #fff; color: #000;";
  document.getElementById("menuHome").style =
    "background-color: #298EB5; color: #fff;";
  document.getElementById("menuGame").style =
    "background-color: #298EB5; color: #fff;";
};
