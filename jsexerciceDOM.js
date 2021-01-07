function changerstyle() {
    var x = document.getElementById("parag1");
    x.style.color="white";
    x.style.backgroundColor="black";
    x.style.padding="15px";
    x.style.border="black,1px" ;

}
function changerstyle2() {
    document.getElementById("parag1").classList.add("active");
}

function getAttributes() {
    var lien = document.querySelector("a");
var href = lien.getAttribute("href");
var hreflang = lien.getAttribute("hreflang");
var rel = lien.getAttribute("rel");
var target = lien.getAttribute("target");
var type = lien.getAttribute("type");
console.log(href);
console.log(hreflang);
console.log(rel);
console.log(target);
console.log(type);

}
function getFormvalue() {
    var x = document.getElementById("form1").elements ;
    //console.log(x)
    alert(x[0].value + x.item(1).value);
    
}

window.onload  = showAlert

function showAlert(){
    alert('hiiii')
}

function changecolor() {
    var x = document.getElementById("color");
    x.style.backgroundColor="red";
}
function resetcolor() {
    var x = document.getElementById("color");
    x.style.backgroundColor="white";
}
function changePic1() {
    var x = document.getElementById("myImg");
    x.src = "img4.jpg";
       }

  function  changePic2() {
    document.getElementById("myImg").src = "img2.png";
  }