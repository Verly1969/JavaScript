const annee = document.getElementById("annee");
const btn = document.getElementById("btn");
const resultat = document.getElementById("resultat");

btn.addEventListener("click", () => 
{
    let anneeU = annee.value; // récupération entrée utilisateur
    let anneeB = parseInt(anneeU); // string --> int

    if ((anneeB % 4 === 0 && anneeB % 100 !== 0) || anneeB % 400 === 0)
    {
        resultat.textContent = `L'année ${anneeB} est bissextile`;
    }
    else 
    {
        resultat.textContent = `L'année ${anneeB} n'est pas bissextile`;
    }
});
