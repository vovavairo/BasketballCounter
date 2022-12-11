let homeEl = document.getElementById("homeEl")
let guestEl = document.getElementById("guestEl")
let count = 0

function plusone(x, htmlElement) {
    count += x
    htmlElement.innerText = count
}

function reset1() {
    count = 0
    homeEl.innerText = count
}
function reset2() {
    count = 0
    guestEl.innerText = count
}