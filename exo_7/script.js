const dateLongue = document.getElementById("dateLongue");
const hms = document.getElementById("hms");
const progress = document.getElementById("progress");
const back = document.getElementById("back");

let width;
let couleurIndex = 0;
const couleurs = ["gray", "darkolivegreen"];
let horloge = setInterval(() => {
    dateLongue.textContent = new Date().toLocaleDateString(navigator.language, {
    day: "2-digit",
    month: "long",
    year: "numeric"
}),
    hms.textContent = new Date().toLocaleTimeString(navigator.language, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
}),
    width = new Date().getSeconds();
    progress.style.width = (width * 1.67) + 'vw';
    back.style.width = "100%";
    if (width === 0){
        couleurIndex++;
        if (couleurIndex === couleurs.length){
            couleurIndex = 0;
            back.style.backgroundColor = couleurs[couleurs.length -1];
        }
    } else if (width === 45){
        back.style.backgroundColor = "yellow";
    } else if (width === 50){
        back.style.backgroundColor = "orange";
    } else if (width === 55){
        back.style.backgroundColor = "red";
    }
    progress.style.backgroundColor = couleurs[couleurIndex];
    back.style.backgroundColor = couleurs[couleurIndex -1];
    console.log(width);
    console.log(couleurIndex);
}, 1000);
