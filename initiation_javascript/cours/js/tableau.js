// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let size = fruits.length;
// document.getElementById("demo").innerHTML = size;

// let content = fruits.content;
// document.getElementById(fruits[0]).innerHTML = content

// 1- Déclarer une variable : "fruits"
// 2- Affecter à cette variable un élément de type "array" : ['Apple', 'Banana'];
// 3- Déclarer une variable 'taille' en lui affectant la taille du tableau(array) à l'aide de la syntaxe suivante : fruits.length
// 4- A partir du terminal de votre navigateur, affichez :
    // a) la taille du tableau
    // b) le contenu du premier élément à l'aide de la syntaxe suivante : fruits[0]

var fruits;
fruits = ["Apple","Banana","Orange"];
// var tailleTab = fruits.length;
console.log(tailleTab);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[tailleTab - 1]);

// 5- Afficher le contenu du dernier élément du tableau
//  grâce à la taille du tableau : 
// taille : 3, je cherche indice 2 à partir de la taille :
// fruits[2]
// 6- Déclarer une variable "couleurs" en lui affectant un tableau contenant 3 éléments (choisir 3 différentes couleurs)
// 7- Afficher le contenu du dernier élément du tableau
// grâce à la taille de ce tableau à partir de la console
// 8- Afficher le contenu des élément du tableau en utilisant la boucle "for"

var couleurs;
couleurs = ["Bleu","rose","rouge","violet","rose","jaune"];
var tailleTab = couleurs.length;
console.log(couleurs [tailleTab-1]);
console.log(couleurs [0])
console.log(couleurs [1])
console.log(couleurs)

for (var i=0 ; i < tailleTab; i ++)
    console.log(couleurs[i])