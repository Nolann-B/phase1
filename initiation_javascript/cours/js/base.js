// syntaxe de base 

// -- 1 : Declarer une variable 
var prenom,
    monNom = "izadi";
var prenomPourMonProjet;
// -- 2 : Afffecter une valeur à une variable 
prenom= "Mila";

// alert (prenom);
// alert (monNom);

// -- 3 : Une instruction se temrine TOUIJOURS par un point-virgule, aussi il est possible d'écrire plusioeursd instructions sur une seule lige 
//  inst_1;
// inst_2; inst_3

//  -- 5 : Afficher dans la conssole (ici, la valeur de ma variable Prenom)
console.log(prenom);

document.write(prenom + "<br>")
document.write("A la pause on se la met")

// MITRA /////

// syntaxe de base

/* 

Commentaire

*/
/*
    Ici, je fais un commentaire sur
    plusieurs lignes
*/

// Déclarer une variable :
var prenom,
    monNom = "Mostefa sba";
// alert("Ben ghazala");
// alert(monNom);
var prenomPourMonProjet;

// -- 2 : Affecter une valeur à une variable
prenom = "Mila";

var prenom2 = "Sirine";
// alert(prenom);

// -- 3 : une instruction se termine TOUJOURS par un point-virgule, aussi il est possible d'écrire plusieurs instructions sur une seule ligne
// inst_1;
// inst_2; inst_3;

// -- 5 : Afficher dans la console (ici, la valeur de ma variable Prenom)
console.log(prenom);

// -- 6 : Afficher dans la page web
// document.write(monNom + "<br>");
// document.write(prenom + "<br>");
// document.write("A la pause vous aurez des Haribos Pik !");

var jourSemaine = window.prompt(
    "Question: on est quel jour ?",
    "jour de la semaine"
);

document.write(jourSemaine);
console.log("jour de la semaine");
console.log("Mercredi");
console.log(jourSemaine);

// -- 9 : Une variable ne peut pas commencer par un chiffre, ne doit contenir que des caractères alphanumériques, et ne peut pas être un mot réservé (var, for... des éléments natifs du langage JS)
var chaineDeCaractere = "ma variable";
var unChiffre = 2;
var cetteAnnee = 2024;
var stringAddition = "2+5";
var addition2Number = 2 + 6;

// ENZO ///

// syntaxe de base 

// -- 1 : Déclarer une variable :
var prenom; // pour nom simple
var prenomPourMonProjet; // pour nom composée

// -- 2 : Affecter une valeur à une variable:
prenom ="Mila"

// -- 3 : Déclarer une variable et attribuer le nom sur la même ligne :
var prenomPourMonProjet = "Sirine";

// -- 4 : Déclarer plusieurs valeurs et attribuer leurs noms sur la même ligne :
var prenom ="Mila", prenomPourMonProjet ="Sirine"

// -- 5 : Une instruction se termine TOUJOURS par ";" aussi il est possible d'écrire plusieurs instructions sur la même ligne
var prenom ="Mila", prenomPourMonProjet ="Sirine"; alert(prenomPourMonProjet)

// -- 6 : Afficher dans la console (ici, la variable de ma valeur "prenom")
console.log(prenom);

// -- 7 : Afficher dans la page web (peut-être soumis à condition)
document.write("A la pause vous aurez des Haribo Pik !" + "<br></br>")
// -- exemple condition :
var reponsestate = window.prompt (
    "Comment tu vas l'ancien?",
    "Bien ou BIEN?"
);

// -- 8 : Afficher un prompt
        // window.prompt (
            // "Comment tu vas l'ancien?",
            // "Bien ou BIEN?" 
        // );

// -- on peut afficher le résultat du prompt dans les logs :
console.log(reponsestate);

// -- 9 : Une variable ne peut pas commencer paru un chiffre, ne doit contenir que des caractères alphanumériques, et ne peut pas être  un mot réservé (éléments natifs du langage js):
var chaineDeCaractere = "ma variable"
var unChiffre = 2;
var cetteAnnee = 2024;
var stringAddtion ="2+5";
var addition2number = 2+6;

alert (chaineDeCaractere); document.write(unChiffre); console.log(cetteAnnee  , stringAddtion , addition2number); 