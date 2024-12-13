
let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let div = document.querySelector("div");

btn.addEventListener("click", function() {
    let randomcol = getcol();
    h1.innerHTML = randomcol;
    console.log("Color updated!!");
    div.style.backgroundColor = randomcol;
})

function getcol() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    let color = `rgb(${r}, ${g}, ${b})`;
    return color;
}