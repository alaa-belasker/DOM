//var container = window.document.getElementById("container");
//console.log(container.innerHTML);

var container = document.getElementById("container");
console.log(container.innerHTML);

var paragraphes = document.getElementsByTagName("p");
for (let paragraphe of paragraphes) {
    console.log(paragraphe.innerHTML);
}

var bleus = container.getElementsByClassName("blue");
for (let bleu of bleus) {
    console.log(bleu.innerHTML);
}
var parConteneurs = document.getElementsByName("parConteneur");
for (let parConteneur of parConteneurs) {
    console.log(parConteneur.innerHTML);
}

var pbleus = document.querySelectorAll("p.blue");
for (let pbleu of pbleus) {
    console.log(pbleu.innerHTML);
}

var prouge = document.querySelector("p.red");
console.log(prouge.innerHTML)

var lien = document.querySelector("a");
var href = lien.getAttribute("href");
console.log(href);

lien.setAttribute("href","https://myappgit.herokuapp.com/");
console.log(lien.href);

//lien.removeAttribute("href");

var container = document.getElementById("container");

var parent = container.parentNode;
console.log(parent);
console.log(parent.nodeName);

//var premierFils = container.firstElementChild;
var premierFils = container.firstChild ;
console.log(premierFils.nodeName);

var dernierFils = container.lastElementChild;
console.log(dernierFils.nodeName);

var enfants = container.childNodes;
//var enfants = container.children;
for ( let enfant of enfants) {
    console.log(enfant);
}

container.innerHTML += "<p>Hello</p>";
console.log(container.innerHTML);
console.log(container.textContent);

container.className = "blue";
console.log(container.className);

container.className += " red";
console.log(container.className);
var list = container.classList ;
list.add("green");
list.remove("red");
console.log(list);


function myFunction(){
    document.getElementById("mydiv").classList.add("mystyle");
    var x = document.getElementById("mydiv").classList.length("mystyle");
console.log(x);
    var y = document.getElementById("mydiv").classList.contains("mystyle");
console.log(y);
}
var x = document.getElementById("mydiv").classList.length("mystyle");
console.log(x);
var y = document.getElementById("mydiv").classList.contains("mystyle");
console.log(y);

function affichePrenom() {
    var x = document.getElementById("premon").value ;
    document.getElementById("demo").innerHTML = x ;
}