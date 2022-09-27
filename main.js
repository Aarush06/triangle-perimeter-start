// Triangle Perimeter Assignment By Aarush
document.getElementById('button').addEventListener('click', btnClicked);

function btnClicked() {
    let xA = +document.getElementById("x1").value;
    let xB = +document.getElementById("x2").value;
    let xC = +document.getElementById("x3").value;
    let yA = +document.getElementById("y1").value;
    let yB = +document.getElementById("y2").value;
    let yC = +document.getElementById("y3").value;

    //Calculate and Output Area and Perimeter
    document.getElementById("ab").innerHTML = dist(xA, yA, yA, yB);
    document.getElementById("ac").innerHTML = dist(xA, yA, xC, yC);
    document.getElementById("bc").innerHTML = dist(xB, yB, xC, yC);
    document.getElementById("perimeter").innerHTML = dist(xA, yA, xB, yB) + dist(xA, yA, xC, yC) + dist(xB, yB, xC, yC);
}
function dist(x1, x2, y1, y2) {
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)
}
// Side note: Im proud of myself for doing it in 20 lines I couldnt find anyone who did it in less 🥱