let matahari = document.getElementById("matahari");
let text = document.getElementById("text");
let train = document.getElementById("train");

let bulan = document.getElementById("bulan");
let orang = document.getElementById("orang");

window.addEventListener("scroll", ()=>{
    let value = window.scrollY;
    matahari.style.top = value * .5 + "px";
    text.style.top = 90 + value * -0.2 + "%";
    train.style.left = value * 1.5 + "px";

    orang.style.left= value * .4 + "px";
})
