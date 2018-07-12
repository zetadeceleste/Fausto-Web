//Animaciones
//-----------

let article4P = document.getElementById("article-4-p");
let article6P = document.getElementById("article-6-p");
let article8P = document.getElementById("article-8-p");
let parkH2 = document.getElementById("park-h2");
let parkP = document.getElementById("park-p");
let catalogueH2 = document.getElementById("catalogue-h2");
let catalogueP = document.getElementById("catalogue-p");
let catalogueButton = document.getElementById("catalogue-button");
let article2H2 = document.getElementById("article-2-h2");
let article2P = document.getElementById("article-2-p");
let contactElement1 = document.getElementById("contact-element1");
let contactElement2 = document.getElementById("contact-element2");
let contactElement3 = document.getElementById("contact-element3");
let navElement1 = document.getElementById("nav-element-1");
let navElement2 = document.getElementById("nav-element-2");
let navElement3 = document.getElementById("nav-element-3");
let navElement4 = document.getElementById("nav-element-4");
let artistSection = document.getElementById("artist-section");
let parkSection = document.getElementById("park-section");
let catalogueSection = document.getElementById("catalogue-section");
let contactSection = document.getElementById("contact-section");

//Localización de los elementos
let coordsArticle4P = article4P.getBoundingClientRect().top;
let coordsArticle6P = article6P.getBoundingClientRect().top;
let coordsParkH2 = parkH2.getBoundingClientRect().top;
let coordsCatalogueH2 = catalogueH2.getBoundingClientRect().top;
let coordsContactElement = contactElement1.getBoundingClientRect().top;
let coordsArtistSection = artistSection.getBoundingClientRect().top;
let coordsParkSection = parkSection.getBoundingClientRect().top;
let coordsCatalogueSection = catalogueSection.getBoundingClientRect().top;
let coordsContactSection = contactSection.getBoundingClientRect().top;

//Smooth scroll
navElement1.addEventListener("click", function () {
    window.scroll({
        top: coordsArtistSection - 10,
        left: 0,
        behavior: 'smooth'
    });
});

navElement2.addEventListener("click", function () {
    window.scroll({
        top: coordsParkSection - 10,
        left: 0,
        behavior: 'smooth'
    });
});

navElement3.addEventListener("click", function () {
    window.scroll({
        top: coordsCatalogueSection - 10,
        left: 0,
        behavior: 'smooth'
    });
});

navElement4.addEventListener("click", function () {
    window.scroll({
        top: coordsContactSection - 10,
        left: 0,
        behavior: 'smooth'
    });
});

//Función de animación

window.onscroll = function () { article6And8Animation(); };

function article6And8Animation() {

    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
        article2H2.className = "article-h2-animation";
        article2P.className = "article-p-animation";
    }
    if (document.body.scrollTop > coordsArticle4P - (coordsArticle4P * 0.40) || document.documentElement.scrollTop > coordsArticle4P - (coordsArticle4P * 0.40)) {
        article4P.className = "article-4-animation";
    }
    if (document.body.scrollTop > coordsArticle6P - (coordsArticle6P * 0.40) || document.documentElement.scrollTop > coordsArticle6P - (coordsArticle6P * 0.40)) {
        article6P.className = "article-6-animation";
        article8P.className = "article-8-animation";
    }
    if (document.body.scrollTop > coordsParkH2 - (coordsParkH2 * 0.30) || document.documentElement.scrollTop > coordsParkH2 - (coordsParkH2 * 0.30)) {
        parkH2.className = "park-h2-animation";
        parkP.className = "park-p-animation";
    }
    if (document.body.scrollTop > coordsContactElement - (coordsContactElement * 0.20) || document.documentElement.scrollTop > coordsContactElement - (coordsContactElement * 0.20)) {
        contactElement1.className = "contact-element-1-animation";
        contactElement2.className = "contact-element-2-animation";
        contactElement3.className = "contact-element-3-animation";
    }
}

