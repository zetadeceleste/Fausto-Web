//Animaciones
let article4P = document.getElementById("article-4-p");
let article6P = document.getElementById("article-6-p");
let article8P = document.getElementById("article-8-p");
let artistH2 = document.getElementById("artist-h2");
let artistP = document.getElementById("artist-p");
let catalogueH2 = document.getElementById("catalogue-h2");
let catalogueP = document.getElementById("catalogue-p");
let catalogueButton = document.getElementById("catalogue-button");

window.onscroll = function() {article6And8Animation();};

function article6And8Animation() {

    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        article4P.className = "article-4-animation";
    } 
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        article6P.className = "article-6-animation";
        article8P.className = "article-8-animation";
    } 
    if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
        artistH2.className = "artist-h2-animation";
        artistP.className = "artist-p-animation";
    } 
    if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
        catalogueH2.className = "catalogue-h2-animation";
        catalogueP.className = "catalogue-p-animation";
        catalogueButton.className = "catalogue-button-animation";
    }  
}

