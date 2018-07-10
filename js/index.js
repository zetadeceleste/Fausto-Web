//Animaciones
let article4P = document.getElementById("article-4-p");
// window.onscroll = function() {article4Animation();};

// function article4Animation() {
// }

let article6P = document.getElementById("article-6-p");
let article8P = document.getElementById("article-8-p");

window.onscroll = function() {article6And8Animation();};

function article6And8Animation() {

    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        article4P.className = "article-4-animation";
    } 
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        article6P.className = "article-6-animation";
        article8P.className = "article-8-animation";
    } 
}

