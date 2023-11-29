//*************************************Toggle chargement de la page****************************************/
document.addEventListener("DOMContentLoaded", function(){
    document.querySelector(".OneJoueur").classList.toggle("d-none");
    document.querySelector(".TwoJoueurs").classList.toggle("d-none");
    document.querySelector(".container_morpion").classList.toggle("d-none");
    document.querySelector(".container_Icone_joueurs").classList.toggle("d-none");
});

//*********************Choix un joueur ou 2 joueurs puis affichage des input texte*************************/
let joueursElements = document.querySelectorAll(".joueurs");
joueursElements.forEach(function(element) {
    element.addEventListener("click", function(){
        if (this.id === "OneJoueur") {
            ajoutClass("OneJoueur" , "TwoJoueurs");
        } else if (this.id === "TwoJoueurs"){
            ajoutClass("TwoJoueurs" , "OneJoueur");
        }
    });
});

//*****************************************Fonction ajout classe***************************************** */
function ajoutClass(p1 , p2) {
    document.querySelector("."  + p1).classList.remove("d-none");
    document.querySelector("." + p2).classList.add("d-none");
}

//*********Click du boutton choix icone et toggle de la page nom joueur puis affichage page icone joueur******** */
document.querySelector('.but').addEventListener("click", function(){
    document.querySelector(".container_Icone_joueurs").classList.toggle("d-none");
    let joueur1Text = document.querySelector('#j1').value;
    let joueur2Text = document.querySelector('#j2').value;
    document.querySelector(".nomJ1").innerHTML = joueur1Text;
    document.querySelector(".nomJ2").innerHTML = joueur2Text;

console.log(joueur1Text);
console.log(joueur2Text);

    
});

//*********Click du boutton retour et toggle de la page icone joueur******** */
document.querySelector('.boutton_retour').addEventListener("click", function(){
    document.querySelector(".container_Icone_joueurs").classList.toggle("d-none");
    
});

//*********Click du boutton play et toggle de la page nom joueur et affichage page icone joueur******** */
/////////// affiche la page de jeux
document.querySelector('.boutton_play').addEventListener("click", function(){
    document.querySelector(".container_morpion").classList.toggle("d-none");
    document.querySelector(".Container_Nom_joueurs").classList.toggle("d-none");
    document.querySelector(".container_Icone_joueurs").classList.toggle("d-none");
    let joueur1Text = document.querySelector('.nomJ1').textContent;
    let joueur2Text = document.querySelector('.nomJ2').textContent;
    document.querySelector(".Nom").innerHTML = joueur1Text;
    document.querySelector(".Nom2").innerHTML = joueur2Text;

});

//**********************au click change le background du boutton cliiquer****************************** */
//recupere son id
let bouttonPerso = document.querySelectorAll(".btn_perso");
let bouttonPerso2 = document.querySelectorAll(".btn_perso2");
monBouton(bouttonPerso);
monBouton(bouttonPerso2);

function monBouton(p1) {
    p1.forEach(function(boutton) {
            boutton.addEventListener("click", function(){
                p1.forEach(function(btn){
                    btn.classList.add('Color');
                });
                if (".Color") {
                    boutton.classList.remove('Color');
                    this.style.backgroundColor = '#21a12e';
                    monBouton = this.id;
                }
            });
        
        })
}

//****************************************************** */










