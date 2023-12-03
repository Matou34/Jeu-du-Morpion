let nomJ1;
let nomJ2;
let bouttonPerso = document.querySelectorAll(".btn_perso");
let bouttonPerso2 = document.querySelectorAll(".btn_perso2");
let PersoJoueur1;
let PersoJoueur2;
let tabJ1 = [];
let tabJ2 = [];
let count = 1;
let JoueurActuel = 1;
let color = document.querySelector(".Nom1").style.color = '#d6da05';
let test;
let phraseDuPersonnage;
//*************************************combinaison gagnante ********************************************** */
let CombinaisonGagnante = [
    {1: ["b1","b2","b3"]},
    {2: ["b1","b5","b9"]},
    {3: ["b1","b4","b7"]},
    {4: ["b4","b5","b6"]},
    {5: ["b7","b8","b9"]},
    {6: ["b3","b5","b7"]},
    {7: ["b3","b6","b9"]},
    {8: ["b2","b5","b8"]}
];
//**************************************objet phrase personnage**********************************$ */
let phraseCulte = {
        vegeta: "C'est vrai je suis arrogant, mais pour moi c'est la toute la fierté d'un sayan.",
        goku: "KA-ME-HA-ME-HAAAAAAAAAAAAAAAAAAAAAAAAAA !!!",
        gohan: "Je suis le grand saiyaman !!",
        beerus: "La destruction précède toujours la création.",
        piccolo: "Parfois nous devons regarder au dela de ce que  nous voulons et faire ce qui est le mieux.",
        krillin: "Je vais vous faire voir le résultat de mes entrainement.",
        trunks: "Je vais te montrer ma puissance d'entré de jeu, je ne suis pas aussi indulgent que Son Goku.",
        freezer: "Ca suffit comme ca, je vais vous réduire en cendre, vous et la planète.",
        satan: "Satan miracle spécial ultra super mégaton punch !!",
        zenzen: "Zeno sama, zen-ho annule."
};

//*************************************Toggle chargement de la page****************************************/
document.addEventListener("DOMContentLoaded", function(){
    let Toggle = document.querySelectorAll(".OneJoueur, .TwoJoueurs, .container_morpion, .container_Icone_joueurs , .container_resultat");
    Toggle.forEach(function(element){
        element.classList.toggle("d-none");
    });
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

function ajoutClass(p1 , p2) {
    document.querySelector("."  + p1).classList.remove("d-none");
    document.querySelector("." + p2).classList.add("d-none");
}

//***********************************function toogle************************************************** */
function Toggle(classe) {
    document.querySelector(classe).classList.toggle("d-none");
}

//****Click du boutton choix icone et toggle de la page nom joueur puis affichage page icone joueur**** */
document.querySelector('.but').addEventListener("click", function(){
    Toggle(".container_Icone_joueurs");
    nomJ1 = document.querySelector('#j1').value;
    nomJ2 = document.querySelector('#j2').value;
    if (!nomJ1) {
        nomJ1 = "Yamcha";
    }
    if (!nomJ2) {
        nomJ2 = "Monaka";
    }
    document.querySelector(".nomJ1").innerHTML = nomJ1;
    document.querySelector(".nomJ2").innerHTML = nomJ2;
});


//*********Click du boutton retour et toggle de la page icone joueur******** */
document.querySelector('.boutton_retour').addEventListener("click", function(){
    Toggle(".container_Icone_joueurs");    
});

//*********Click du boutton play et toggle de la page nom joueur et affichage page icone joueur******** */
/////////// affiche la page de jeux et affiche la photo du personnage
document.querySelector('.boutton_play').addEventListener("click", function(){
    let Toggle = document.querySelectorAll(".container_morpion, .Container_Nom_joueurs, .container_Icone_joueurs");
    Toggle.forEach(function(element){
        element.classList.toggle("d-none");
    });
    document.querySelector(".Nom").innerHTML = nomJ1;
    document.querySelector(".Nom1").innerHTML = nomJ1 + " joue";
    document.querySelector(".Nom2").innerHTML = nomJ2;
    document.querySelector('.Personnage1').innerHTML = "<img class='Image ImageJ1' src='./image/Personnage/" + PersoJoueur1 + "1.png' alt=''>"
    document.querySelector('.Personnage2').innerHTML = "<img class='Image ImageJ2' src='./image/Personnage/" + PersoJoueur2 + "1.png' alt=''>"
});

//**********************au click change le background du boutton cliiquer****************************** */
//recupere son name 
monBouton(bouttonPerso, 1);
monBouton(bouttonPerso2, 2);
function monBouton(p1, joueur) {
    p1.forEach(function(boutton) {
            boutton.addEventListener("click", function(){
                p1.forEach(function(btn){
                    btn.classList.add('Color');
                });
                if (".Color") {
                    boutton.classList.remove('Color');
                    this.style.backgroundColor = '#21a12e';
                    if (joueur === 1) {
                        PersoJoueur1 = this.name;
                    } else if (joueur === 2) {
                        PersoJoueur2 = this.name;
                    }
                }
                PersoJoueur1 && PersoJoueur2?document.querySelector('.boutton_play').disabled = false:"";
            });
            
        })
}

//******au jeu morpion , changement des joueurs affichage des boules et des croix pour le jeux ****************/
document.querySelectorAll(".span").forEach((bouton) => {
    tourJoueurs(bouton)
    });

function tourJoueurs(bouton) {
    bouton.addEventListener("click", () =>{
        if (JoueurActuel === 1) {
            let image = document.createElement('img');
            image.src = `./image/boule${count}.png`;
            image.classList.add('img');
            bouton.innerHTML = ''; 
            bouton.appendChild(image);
            bouton.id;
            tabJ1.push(bouton.id);
            document.querySelector("#Blaze3").innerHTML = nomJ2 + " joue";
            color = document.querySelector(".Nom1").style.color = '#d00c02' ;      
            JoueurActuel = 2;
            verifierCombinaisons();
            count ++; 
        } else {
            bouton.id;
            bouton.innerHTML = "<img src='./image/Batonmagique.png'>";
            tabJ2.push(bouton.id);
            document.querySelector("#Blaze3").textContent = nomJ1 + " joue";
            color = document.querySelector(".Nom1").style.color = '#d6da05';
            JoueurActuel = 1;
            verifierCombinaisons();
        }        
        bouton.disabled = true;
    });

}
//*******************************************Fonction verifier gagnant*******************************$ */
function verifierCombinaisons() {
    for (let i = 0; i < CombinaisonGagnante.length; i++) {
    let combinaison = Object.values(CombinaisonGagnante[i])[0];
    let combinaisonTrouverJ2 = combinaison.every(valeur => tabJ2.includes(valeur));
    let combinaisonTrouverJ1 = combinaison.every(valeur => tabJ1.includes(valeur));

    if (combinaisonTrouverJ1) {
        ResultatMorpion(nomJ1 + " !", "2", "3");
        affichage('#d6da05', PersoJoueur1, "#ef2121");
        // color = document.querySelector(".Nom_gagnant").style.color = '#d6da05';
        // test = PersoJoueur1
        // phraseDuPersonnage = phraseCulte[test];
        // document.querySelector('.text').innerHTML = phraseDuPersonnage;
        // document.querySelector('.text').style.color = "#ef2121";
        return;
    }
    else if (combinaisonTrouverJ2) {
        ResultatMorpion(nomJ2 + " !", "3", "2");
        affichage('#d00c02', PersoJoueur2, "#ef7021");
        // color = document.querySelector(".Nom_gagnant").style.color = '#d00c02' ; 
        // test = PersoJoueur2
        // phraseDuPersonnage = phraseCulte[test];
        // document.querySelector('.text').innerHTML = phraseDuPersonnage;
        // document.querySelector('.text').style.color = "#ef7021";
        return;
    }
}
    if (tabJ1.length === 5 && tabJ2.length === 4 ) {
        ResultatMorpion("Egalite !!", "3", "3");
        color = document.querySelector(".Nom_gagnant").style.color = '#ef7021' ;  
        document.querySelector('.text').innerHTML = "LOOSER !!!";
        document.querySelector('.text').style.color = "#ef7021";
    
        return;
}
}

function affichage(couleur, perso, couleurPhrasePerso) {
    color = document.querySelector(".Nom_gagnant").style.color = couleur ; 
    test = perso
    phraseDuPersonnage = phraseCulte[test];
    document.querySelector('.text').innerHTML = phraseDuPersonnage;
    document.querySelector('.text').style.color = couleurPhrasePerso;

}

function ResultatMorpion(resultat, numeroJ1, numeroJ2) {
    document.querySelector(".Nom_gagnant").textContent = resultat ;
    document.querySelector(".container_resultat").classList.toggle('d-none');
    document.querySelector(".Nom1").classList.toggle('d-none');
    document.querySelector('.ImageJ1').src="./image/Personnage/" + PersoJoueur1 + numeroJ1 + ".png"
    document.querySelector('.ImageJ2').src="./image/Personnage/" + PersoJoueur2 + numeroJ2 + ".png"
}

document.querySelector("#Rejouer").addEventListener("click", function(){
    tabJ1 = [];
    tabJ2 = [];
    JoueurActuel = 1;
    count = 1;
    document.querySelector(".container_resultat").classList.toggle('d-none');
    document.querySelector(".Nom1").innerHTML = nomJ1 + " joue";
    color = document.querySelector(".Nom1").style.color = '#d6da05';
    document.querySelector(".Nom1").classList.toggle('d-none');
    document.querySelectorAll(".span").forEach((bouton) => {
        bouton.innerHTML = '';
        bouton.disabled = false; 
    });
});







    















