document.addEventListener("keydown", deplacer);
function deplacer(event) {
  let positionX = document.getElementById("c1").offsetLeft;
  let positionY = document.getElementById("c1").offsetTop;
  let hauteurFenetre = window.innerHeight;
  let largeurFenetre = window.innerWidth;
  if (event.key === "ArrowDown") {
    if (positionY + 10 < hauteurFenetre) {
      document.getElementById("c1").style.top = positionY + 10 + "px";
    }
  } else {
    if (event.key === "ArrowRight") {
      if (positionX + 10 < largeurFenetre) {
        document.getElementById("c1").style.left = positionX + 10 + "px";
      }
    } else {
      if (event.key === "ArrowUp") {
        if (positionY - 10 > 0) {
          document.getElementById("c1").style.top = positionY - 10 + "px";
        }
      } else {
        if (event.key === "ArrowLeft") {
          if (positionX - 10 > 0) {
            document.getElementById("c1").style.left = positionX - 10 + "px";
          }
        }
      }
    }
  }
}
