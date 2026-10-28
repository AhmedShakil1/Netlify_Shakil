const child = document.getElementById("child")
const men = document.getElementById("men")
const old = document.getElementById("old")
const pic = document.getElementById("pic")

child.addEventListener("click", () => {
    pic.src = "./images/Child.jpeg"
})

men.addEventListener("click", () => {
    pic.src = "./images/Men.jpeg"
} )
old.addEventListener("click", () => {
    pic.src = "./images/Old.jpeg"
} )