let points = 0
    let homePoints = points
    let guestPoints = points

let homeScoreEl = document.getElementById("homeScoreEl")
let guestScoreEl = document.getElementById("guestScoreEl")

homeScoreEl.textContent = 0
guestScoreEl.textContent = 0


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

function plusOneGuest() {
    guestPoints += 1
    guestScoreEl.textContent = guestPoints
    console.log(guestPoints)
}

function plusTwoGuest() {
    guestPoints += 2
    guestScoreEl.textContent = guestPoints
    console.log(guestPoints)
}

function plusThreeGuest() {
    guestPoints += 3
    guestScoreEl.textContent = guestPoints
    console.log(guestPoints)
    
}