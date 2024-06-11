var noteNegative = 0;
var noteReca1 = 10;
var noteRecu = 12;
var noteBien = 20;
var moyenne = window.prompt("veuillez saisir votre moyenne");
moyenne = parseInt(moyenne);

var valeurSaisie1 = "string";
var valeursaisie2 = 45;
console.log(
  "Si le type d'une variable est le string de la fontion 'isNaN' retourne 'true' : " +
    isNaN(valeurSaisie1)
);
console.log(
  "si le type d'une variable est nimber la fontion 'isNaN' retourne 'false' : " +
    isNaN(valeurSaisie2)
);

if (moyenne < 10) {
  alert("vous êtes recalé");
} else if (moyenne >= 10 && moyenne < 12) {
  document.write("Vous êtes reçu !");
} else if (moyenne > 12);

var valeur = window.prompt ("Saisissez une valeur string");

if (isNaN(valeur)){
    console.log(valeur)
}else {
    document.write("Not A string")
}
while (isNaN(valeur)){
    var valeur = window.prompt ("Saisissez une valeur string");
} else {
    document.write("bravo")
}

// MITRA

var noteNegative = 0;
var noteRecal = 10;
var noteRecu = 12;
var noteBien = 20;
var moyenne = window.prompt("Veuillez saisir votre moyenne ... ");
moyenne = parseInt(moyenne);

moyenne = parseFloat(moyenne);
moyenne = parseInt(moyenne);
console.log(moyenne);
console.log(typeof moyenne);
moyenne = Number(moyenne);
console.log(moyenne);
console.log(typeof moyenne);

while (isNaN(moyenne) || moyenne > noteBien || moyenne < noteNegative) {
  moyenne = window.prompt("Veuillez saisir une valeur correct entre 0 et 20 !");
}

if (moyenne < noteRecal) {
  alert("vous êtes recalé");
} else if (moyenne >= noteRecal && moyenne < noteRecu) {
  document.write("Vous êtes reçu !");
} else if (moyenne >= noteRecu && moyenne <= noteBien) {
  document.write("vous êtes reçu avec mention");
}

var maValeur = window.prompt("Saisissez une valeur ...");
var resBoolean = isNaN(maValeur);

si la valeur de resBoolean est false afficher le message : le type de votre valeur est numérique

// La meme fonction 
if(!isNaN(maValeur)){}
if (!resBoolean) {
  document.write("Le type de votre saissi est 'number'");
}
// 

if (resBoolean) {
    document.write("Le type de votre saissi est 'string'");
}else {
  document.write("Le type de votre saissi est 'number'");
}
document.write();
alert();
console.log();
parseInt();
parseFloat();
window.prompt();