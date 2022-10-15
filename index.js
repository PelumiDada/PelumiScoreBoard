//pseudocode
//create a function 
let p1score1El = document.getElementById("p1");
let p2score1El = document.getElementById("p2");
let scoreEl = document.getElementById("score");
let resetEl = document.getElementById("reset");
let point = 0;
let score = 0;

function p1addPoint1() {
   point = parseInt(p1score1El.textContent);
    point += 1
    p1score1El.textContent = point;
}
function p1addPoint2() {
    point = parseInt(p1score1El.textContent);
    point += 2
    p1score1El.textContent = point;
}
function p1addPoint3() {
    point = parseInt(p1score1El.textContent);
    point += 3
    p1score1El.textContent = point;
}
function p2addPoint1() {
    point = parseInt(p2score1El.textContent);
    point += 1
    p2score1El.textContent = point;
}
function p2addPoint2() {
   point = parseInt(p2score1El.textContent);
    point += 2
    p2score1El.textContent = point;
}
function p2addPoint3() {
    point = parseInt(p2score1El.textContent);
    point += 3
    p2score1El.textContent = point;
}
function save() {
 if (parseInt(p1score1El.textContent) > parseInt(p2score1El.textContent)) {
     console.log ("Working");
     scoreEl.textContent = "Player 1 is the winner";
 }
 else if (parseInt(p1score1El.textContent) < parseInt(p2score1El.textContent))
 {
 console.log ("Working");
 scoreEl.textContent = "Player 2 is the winner";
}
 else if (parseInt(p1score1El.textContent) == parseInt(p2score1El.textContent))
 {
 console.log ("Working");
 scoreEl.textContent = "The match is a draw";
}
}
function reset() {
p1score1El.textContent = p2score1El.textContent = 0;
scoreEl.textContent = "Let the game begin";
console.log ("Working");
}
