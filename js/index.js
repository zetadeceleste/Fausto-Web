//Animaciones
let article4P = document.getElementById("article-4-p");
let article6P = document.getElementById("article-6-p");
let article8P = document.getElementById("article-8-p");
let artistH2 = document.getElementById("artist-h2");
let artistP = document.getElementById("artist-p");
let catalogueH2 = document.getElementById("catalogue-h2");
let catalogueP = document.getElementById("catalogue-p");
let catalogueButton = document.getElementById("catalogue-button");
let article2H2 = document.getElementById("article-2-h2");
let article2P = document.getElementById("article-2-p");
let contactElement1 = document.getElementById("contact-element1");
let contactElement2 = document.getElementById("contact-element2");
let contactElement3 = document.getElementById("contact-element3");

window.onscroll = function() {article6And8Animation();};

function article6And8Animation() {

    if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
        article2H2.className = "article-h2-animation";
        article2P.className = "article-p-animation";
    } 
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
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
    if (document.body.scrollTop > 1800 || document.documentElement.scrollTop > 1800){
        contactElement1.className = "contact-element-1-animation";
        contactElement2.className = "contact-element-2-animation";
        contactElement3.className = "contact-element-3-animation";
    }
}

