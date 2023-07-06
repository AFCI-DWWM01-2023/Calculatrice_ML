// DOM
// [...Permet d'insérer mes boutons dans un tableau]
const touches = [...document.querySelectorAll('.button')];
// Récuperer tout les keycode associer à nos touches !
// La fonction map prend chaque élément d'un tableau, fait quelque chose avec la fonction callback et retourne un nouveau tableau
// Pour l'instant les keycodes sont sout formes de phrases
const lesKeycode = touches.map(touche => touche.dataset.key);
const resultat = document.querySelector('.resultat')

document.addEventListener('keydown',(e) => {
    // Récupération du keycode
    const valeur = e.keyCode.toString();
    calculer(valeur)
})
document.addEventListener('click', (e)=>{
    // Récupération du keycode
    const valeur = e.target.dataset.key;
    // dès qu'un évenement se déclenche lance la fonction avec le keycode associer
    calculer(valeur)
})

const calculer = (valeur) => {
    // Eliminations de toutes les autres touches du clavier qui non pas de keycode associer dans le programme
    if(lesKeycode.includes(valeur)){
        switch (valeur){
            case '8':
                resultat.textContent = "";
                break;
            case '13' :
                const calc = eval(resultat.textContent);
                resultat.textContent = calc;
                break;
            default:
                const indexKeycode = lesKeycode.indexOf(valeur);
                const touche = touches[indexKeycode];
                resultat.textContent += touche.innerHTML;
        }
    }
}

window.addEventListener('error', (e)=>{
    alert('Une erreur de saisie est survenue dans votre calcul : '+ e.message)
})

