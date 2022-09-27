// Triangle Perimeter Assignment By Aarush
document.getElementById("button").addEventListener("click", btnClicked);

function btnClicked() {
  let xA = +document.getElementById("x1").value;
  let xB = +document.getElementById("x2").value;
  let xC = +document.getElementById("x3").value;
  let yA = +document.getElementById("y1").value;
  let yB = +document.getElementById("y2").value;
  let yC = +document.getElementById("y3").value;

  //Variables for sides
  let AB = dist(xA, yA, xB, yB);
  let AC = dist(xA, yA, xC, yC);
  let BC = dist(xB, yB, xC, yC);

  //Calculate and Output Area and Perimeter
  document.getElementById("ab").innerHTML = dist(xA, yA, xB, yB);
  document.getElementById("ac").innerHTML = dist(xA, yA, xC, yC);
  document.getElementById("bc").innerHTML = dist(xB, yB, xC, yC);
  document.getElementById("perimeter").innerHTML = AB + AC + BC;
}
function dist(x1, y1, x2, y2) {
  return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}
