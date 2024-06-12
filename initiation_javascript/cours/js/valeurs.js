var nb1 = Number(prompt("Numero nb1 svp:"));
var nb2 = Number(prompt("Numero nb2 svp:"));
var nb3 = Number(prompt("Numero nb3 svp:"));

if (nb1 > nb2){
    nb1 = nb3 * 2;
}else {
    nb1++;
    if(nb2 > nb3){
        nb1 = nb1 + nb3 *3;
        }else{
            nb1 = 0;
            nb3 = nb3 * 2 + nb2;
        }
}

console.log(nb1);
console.log(nb2);
console.log(nb3);