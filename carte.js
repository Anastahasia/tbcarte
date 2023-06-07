/*function carteCre(){


//Selecte l'element appelé ListeArticle
let ArticlesSection = document.getElementById("article");

//Créer un <div></div>
let Div = document.createElement('div');
//Rajoute la classe du div avec "articles"
Div.className = "parent";

let mage = document.createElement("img");
mage.className = "image";
mage.src = "../images/ACCEUIL.jpg";
mage.alt = "chien qui prend cbd";

let enfant = document.createElement('div');
enfant.className = "child";

let intertitre = document.createElement('h3');
intertitre.className = "intertitre";
intertitre.textContent="intertitre";

let chapeau = document.createElement('p');
chapeau.className = "chapeau";
chapeau.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit Velit fugit fuga minus ipsum. Unde fuga, voluptates mollitia ab eveniet velit enim ratione, fugiat sapiente libero, ex nobis excepturi non obcaecati?";

ArticlesSection.appendChild(Div);
Div.appendChild(mage);
Div.appendChild(enfant);
enfant.appendChild(intertitre);
enfant.appendChild(chapeau);

}

for(i=1; i<=10; i++){
    carteCre();
}*/

let tableauPrincipal = [
    ["../images/ACCEUIL.jpg", "chien qui prend cbd", "intertitre1", "article 1Lorem ipsum dolor sit amet, consectetur adipisicing elit Velit fugit fuga minus ipsum. Unde fuga, voluptates mollitia ab eveniet velit enim ratione, fugiat sapiente libero, ex nobis excepturi non obcaecati?"],
    ["../images/ACCEUIL.jpg", "article 2 chien qui prend cbd", "intertitre2", "article 2Lorem ipsum dolor sit amet, consectetur adipisicing elit Velit fugit fuga minus ipsum. Unde fuga, voluptates mollitia ab eveniet velit enim ratione, fugiat sapiente libero, ex nobis excepturi non obcaecati?"],
    ["../images/ACCEUIL.jpg", "article 2 chien qui prend cbd", "intertitre2", "article 2Lorem ipsum dolor sit amet, consectetur adipisicing elit Velit fugit fuga minus ipsum. Unde fuga, voluptates mollitia ab eveniet velit enim ratione, fugiat sapiente libero, ex nobis excepturi non obcaecati?"],
    ["../images/ACCEUIL.jpg", "article 2 chien qui prend cbd", "intertitre2", "article 2Lorem ipsum dolor sit amet, consectetur adipisicing elit Velit fugit fuga minus ipsum. Unde fuga, voluptates mollitia ab eveniet velit enim ratione, fugiat sapiente libero, ex nobis excepturi non obcaecati?"],
];


for (i = 0; i < tableauPrincipal.length; i++) {
    /*console.log(tableauPrincipal[i]);
        let container = document.querySelector(".container");
    let titrearticle = document.createElement("h3");
    titrearticle.textContent = tableauPrincipal[i][0];
    container.appendChild(titrearticle);
    console.log(tableauPrincipal[i][1]);*/

    let ArticlesSection = document.getElementById("article");


let Div = document.createElement('div');

Div.className = "parent";

let mage = document.createElement("img");
mage.className = "image";
mage.src = tableauPrincipal[i][0];
mage.alt = tableauPrincipal[i][1];

let enfant = document.createElement('div');
enfant.className = "child";

let intertitre = document.createElement('h3');
intertitre.className = "intertitre";
intertitre.textContent=tableauPrincipal[i][2];

let chapeau = document.createElement('p');
chapeau.className = "chapeau";
chapeau.innerHTML = tableauPrincipal[i][3];

ArticlesSection.appendChild(Div);
Div.appendChild(mage);
Div.appendChild(enfant);
enfant.appendChild(intertitre);
enfant.appendChild(chapeau);
    }
    ;