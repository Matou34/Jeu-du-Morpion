let tabJ1 = [];
let tabJ2 = [];
let count = 1;

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


let joueur1Text = document.querySelector('.Nom').textContent;
let joueur2Text = document.querySelector('.Nom2').textContent;
document.querySelector(".Nom1").textContent = joueur1Text + " joue";
document.addEventListener("DOMContentLoaded", function(){
    document.querySelector(".container_resultat").classList.toggle('d-none');
    let JoueurActuelle = 1;
    
    let boutons = document.querySelectorAll("span");
    boutons.forEach((bouton) => {
        bouton.addEventListener("click", () =>{
            if (JoueurActuelle === 1) {
                let image = document.createElement('img');
                image.src = `./image/boule${count}.png`;
                image.classList.add('img');
                bouton.innerHTML = ''; 
                bouton.appendChild(image);
                count = (count % 5) + 1; 
                bouton.id;
                tabJ1.push(bouton.id);
                document.querySelector(".Nom1").textContent = joueur2Text + " joue";
                JoueurActuelle = 2;
                verifierCombinaisons();
            } else {
                bouton.id;
                bouton.innerHTML = "<img src='./image/Batonmagique.png'>";
                tabJ2.push(bouton.id);
                document.querySelector("").textContent = joueur1Text + " joue";
                JoueurActuelle = 1;
                verifierCombinaisons();
            }            
            }, { once: true });
        });
    });

function verifierCombinaisons() {
    for (let i = 0; i < CombinaisonGagnante.length; i++) {
    const combinaison = Object.values(CombinaisonGagnante[i])[0];

    const combinaisonTrouverJ2 = combinaison.every(valeur => tabJ2.includes(valeur));
    const combinaisonTrouverJ1 = combinaison.every(valeur => tabJ1.includes(valeur));
    let joueur1Text = document.querySelector('#Blaze').textContent;
    let joueur2Text = document.querySelector('#Blaze2').textContent;

    if (combinaisonTrouverJ1) {
        document.querySelector(".Nom_gagnant").textContent = joueur1Text + " !";
        document.querySelector(".container_resultat").classList.toggle('d-none');

        return; 
    }
    if (combinaisonTrouverJ2) {
        document.querySelector(".Nom_gagnant").textContent = joueur2Text + " !";
        document.querySelector(".container_resultat").classList.toggle('d-none');
        return; 
    }
    if (tabJ1.length === 5 && tabJ2.length === 4 ) {
        document.querySelector(".Nom_gagnant").textContent = "Egalite !!" ;
        document.querySelector(".container_resultat").classList.toggle('d-none');
        return; 
    }
        
}
}



    








