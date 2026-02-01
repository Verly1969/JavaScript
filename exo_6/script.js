const entry = document.getElementById("entry");
const btnC = document.getElementById("btnC");
const btnF = document.getElementById("btnF");
const btnK = document.getElementById("btnK");
const btnMi = document.getElementById("btnMi");
const result = document.getElementById("result");

function conversion(value, callback){
    const valeur = value;
    callback(valeur);
}

function versFahrenheit(value){
    return ((value * 9) / 5) + 32;
}

function versCelcius(value){
    return (value - 32 ) * 5 / 9;
}

function versKilometre(value){
    return value / 0.62137;
}

function versMiles(value){
    return value / 1.609344;
}

btnC.addEventListener("click", () => {
    const retour = versFahrenheit(entry.value);
    result.textContent = `${retour.toFixed(2)} °F.`;
})
btnF.addEventListener("click", () => {
    const retour = versCelcius(entry.value);
    result.textContent = `${retour.toFixed(2)} °C.`;
})
btnK.addEventListener("click", () => {
    const retour = versMiles(entry.value);
    result.textContent = `${retour.toFixed(2)} Mi.`;
})
btnMi.addEventListener("click", () => {
    const retour = versKilometre(entry.value);
    result.textContent = `${retour.toFixed(2)} Km.`;
})
