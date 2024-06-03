var n1 = 10;
var n2 = 5;
var add = n1 + n2;
var moi = n1 - n2;
var mul = n1 * n2;
var div = n1 / n2;
console.log(add);
// (typeof pour donner le type ex console.log(typeof add))
console.log(moi);

console.log(mul);

console.log(div);

// document.write(add + " " + moi + " " + mul + " " + div);

// --5. Modulo
// -- le Modulo retourne le reste d'une division
// -- modulo de nb1% nb2% avec l'operateur "%"
resultat = n1 % n2;
console.log(resultat);

var n3 = 12;
var n4 = 28;
var resModulo = n3 % n4;
console.log(resModulo);

// Afficher le texte suivant sur la page du navigateur en utilisant les variables :
//  "Le reste de la division de 100 par 17 est égal à : ? "
document.write(
  "Le reste de la division de " +
    n3 +
    " par " +
    n4 +
    " est égal à :" +
    resModulo
);