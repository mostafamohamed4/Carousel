var boxcontainer = document.getElementById("boxcontainer")
var cardEl = Array.from(document.querySelectorAll(".card img"))
var innerBox = document.getElementById("innerBox")
var closeEl = document.getElementById("closeEl")
var nextEl = document.getElementById("next")
var prevEl = document.getElementById("prev")
let Index;
// chickbox
for (let i = 0; i < cardEl.length; i++) {
    cardEl[i].addEventListener("click", clickbox)
}
var src;
function clickbox(e) {
    src = e.target.getAttribute("src")
    boxcontainer.style.display = "flex"
    innerBox.style.backgroundImage = `url(${src})`
    Index = cardEl.indexOf(e.target)

}
//closeEl 
closeEl.style.cursor = "pointer"
// boxcontainer
boxcontainer.addEventListener('click', function(e) {
   
    if (e.target.id == "boxcontainer") {
        Close()
    }

})
closeEl.addEventListener('click', Close)
function Close(e) {
    boxcontainer.style.display = "none"
}
// NextEl
nextEl.addEventListener("click", next)
function next() {
    Index++
    if (Index == cardEl.length) {
        Index = 0
    }
    imgnext = cardEl[Index].src
    innerBox.style.backgroundImage = `url(${imgnext})`

}
// prevEl
prevEl.addEventListener("click", prev)
function prev(e) {
    Index--
    if (Index < 0) {
        Index = cardEl.length - 1
    }
    imgprev = cardEl[Index].src
    innerBox.style.backgroundImage = `url(${imgprev})`

}

// keybord
document.addEventListener("keyup", function (e) {
    if (e.key == "ArrowRight") {
        next()
    }
    else if (e.key == "ArrowLeft") {
        prev();
    } else if (e.key == "Escape") {
        Close()
    }
})



