var prenomLogin = window.prompt("Prenom svp");
alert(prenomLogin);
var prenom = "nolann"
if (prenomLogin == prenom){
    alert ('banger la suite')
    var ageLogin = window.prompt("Age svp");
    alert(ageLogin)
    var age = 18
    if (ageLogin == age){
        alert('age confirme')
    }else {
        alert('ca degage')
    }
}else{
    alert('ca degage mauvais prenom')

}