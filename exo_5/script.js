const btn = document.getElementById("btn");
const entry = document.getElementById("entry");
const p = document.getElementById("p");


btn.addEventListener("click", () => {
    const chaine = entry.value.split(", ").map(Number);
    const somme = chaine.reduce((acc, value) => acc + value);
    const moyenne = somme / chaine.length;
    console.log(chaine);
    console.log(somme);
    console.log(moyenne);
    p.textContent = `[ ${chaine.join(", ")} ] = la moyenne est: ${moyenne}`;
})
/**
 * Permet de d'additionner 2 nombres
 *
 * @param {Number} nb1
 * @param {Number} nb2
 * @return {Number} nb1 + nb2
 */
function addition(nb1, nb2) {
    return nb1 + nb2;
}

/**
 *
 *
 * @param {Array} array
 * @param {Function} callback
 * @return {Array} 
 */
function numberValidator(array, callback){
    const tab = [];

    for (const elem of array){
        const nb = parseFloat(elem);
        if (!isNaN(nb) && (!callback || callback(nb))){
            tab.push(nb);
        }
    }

    return tab;
}

// utilisation de la fonction
const tabInt = [1, 3, 4, 6, 7, 8, 9, 10];
console.log(tabInt);
const pairsNb = numberValidator(tabInt, (nb) => nb % 2 === 0);
console.log(pairsNb);