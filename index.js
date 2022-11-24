let homePoints = 0
let guestPoints = 0
const homeInc = document.getElementById("home-increase")
const guestInc = document.getElementById("guest-increase")


//Home
function one () {
    homePoints += 1
    homeInc.textContent = homePoints
}

function two () {
    homePoints += 2
    homeInc.textContent = homePoints
}

function three () {
    homePoints += 3
    homeInc.textContent = homePoints
}
//Home

//Guest
function oneGuest () {
    guestPoints += 1
    guestInc.innerText = guestPoints
}

function twoGuest () {
    guestPoints += 2
    guestInc.innerText = guestPoints
}

function threeGuest () {
    guestPoints += 3
    guestInc.innerText = guestPoints
}
//Guest