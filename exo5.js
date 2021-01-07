function controler() {
    var zoneSaisie = document.getElementById("zoneSaisie");

    if (zoneSaisie.value=="") {alert("Saississez une valeur")}
else {alert("La Zone de saisie contient : " + zoneSaisie.value + "  et a pour evaluation: " +   eval(zoneSaisie.value));} 

}
      

