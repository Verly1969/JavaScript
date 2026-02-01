const multiplicateur = document.getElementById("multiplicateur");
const resultat = document.getElementById("resultat");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    let table = +multiplicateur.value;
    resultat.textContent = "";
    resultat.setAttribute("style", "white-space: pre;");

    for (let index = 1; index <= 20; index++)
    {
        console.log(index * table);
        resultat.textContent += `${index} * ${table} = ${index * table}\n`;
    }
})
