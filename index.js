let homeScoreEl = document.getElementById("home-points-text");
let homeScore = 0;
let guestScoreEl = document.getElementById("guest-points-text");
let guestScore = 0;

function newGame() {
  window.location.reload();
}

function homeAddOne() {
  homeScore += 1;
  homeScoreEl.textContent = homeScore;
}

function homeAddTwo() {
  homeScore += 2;
  homeScoreEl.textContent = homeScore;
}
function homeAddThree() {
  homeScore += 3;
  homeScoreEl.textContent = homeScore;
}

function guestAddOne() {
  guestScore += 1;
  guestScoreEl.textContent = guestScore;
}

function guestAddTwo() {
  guestScore += 2;
  guestScoreEl.textContent = guestScore;
}
function guestAddThree() {
  guestScore += 3;
  guestScoreEl.textContent = guestScore;
}

