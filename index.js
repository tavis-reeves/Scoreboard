let points = 0
    let homePoints = points
    let awayPoints = points

let homeScoreEl = document.getElementById("homeScoreEl")
let awayScoreEl = document.getElementById("awayScoreEl")

homeScoreEl.textContent = 0
awayScoreEl.textContent = 0


function plusOneHome() {
    homePoints += 1
    homeScoreEl.textContent = homePoints
    console.log(homePoints)
}

function plusTwoHome() {
    homePoints += 2
    homeScoreEl.textContent = homePoints
    console.log(homePoints)
}

function plusThreeHome() {
    homePoints += 3
    homeScoreEl.textContent = homePoints
    console.log(homePoints)
}

function plusOneAway() {
    awayPoints += 1
    awayScoreEl.textContent = awayPoints
    console.log(awayPoints)
}

function plusTwoAway() {
    awayPoints += 2
    awayScoreEl.textContent = awayPoints
    console.log(awayPoints)
}

function plusThreeAway() {
    awayPoints += 3
    awayScoreEl.textContent = awayPoints
    console.log(awayPoints)
    
}