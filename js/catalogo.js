let articles = [
    {
        name : "Obra 1",
        img : "img/obra1.jpeg",
        precio: "$500",
        tamanio: "30x12"
    },
    { 
        name : "Obra 2",
        img : "img/obra2.jpg",
        precio: "$500",
        tamanio: "30x12"
    }
];

let fondo = document.getElementById("fondo");
let catalogoSection = document.getElementById("catalogo-section");
let articleDetails = document.getElementById("article-details");
loadArticles();
function loadArticles(){
    for(let article of articles){
        let articleElement = document.createElement("ARTICLE");
        let articleImg = document.createElement("IMG");
        articleImg.src = article.img;
        articleElement.appendChild(articleImg);
        articleElement.className= "article";
        catalogoSection.appendChild(articleElement);
        articleElement.addEventListener("click",function(){ 
            fondo.style.display = "block";
            articleElement.style.transform = "unset";
            // articleElement.style.visibility = "hidden";
            let detailsName = document.createElement("H2");
            let textNodeName = document.createTextNode(article.name);
            detailsName.appendChild(textNodeName);
            let textNodePrecio = document.createTextNode("Precio: " + article.precio);
            let detailsPrecio = document.createElement("P");
            detailsPrecio.appendChild(textNodePrecio);
            let textNodeTamanio = document.createTextNode("Tamaño: " + article.tamanio);
            let detailsTamanio = document.createElement("P");
            detailsTamanio.appendChild(textNodeTamanio);
            let detailsInfo = document.createElement("DIV");
            detailsInfo.className = "details-info";
            detailsInfo.appendChild(detailsTamanio);
            detailsInfo.appendChild(detailsPrecio);    
            articleDetails.appendChild(detailsName);
            let detailsImg = document.createElement("IMG");
            detailsImg.src=article.img;
            articleDetails.appendChild(detailsImg);
            articleDetails.appendChild(detailsInfo);
            let textNodeClose = document.createTextNode("X");
            let detailsClose = document.createElement("P");
            detailsClose.appendChild(textNodeClose);
            detailsClose.id = "close";
            articleDetails.appendChild(detailsClose);
            detailsClose.addEventListener("click", close);
        });
    }
}

function close(){
    while (articleDetails.firstChild) {
        articleDetails.removeChild(articleDetails.firstChild);
    }
    while (catalogoSection.firstChild) {
        catalogoSection.removeChild(catalogoSection.firstChild);
    }
    fondo.style.display = "none";
    loadArticles();
}



