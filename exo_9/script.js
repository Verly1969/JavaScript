window.addEventListener("DOMContentLoaded", () => {

    const hex = document.getElementById("hex");   
    const hsl = document.getElementById("hsl");
    const rgb = document.getElementById("rgb");
    const btnAlea = document.getElementById("btnAlea");
    const colorAlea = document.getElementById("colorAlea");
    const colorHue = document.getElementById("colorHue");
    const boxColors = document.getElementById("boxColors");
    const select = document.getElementById("select");
    const pMessage = document.getElementById("pMessage");

    const colorTab = 
        [
            "red", 
            "pink", 
            "purple", 
            "navy", 
            "blue", 
            "aqua", 
            "green", 
            "lime", 
            "yellow", 
            "orange"
        ];

    const url = `https://x-colors.yurace.pro/api/`;

    //#region Fonction
    async function randomColor(){
        const randomUrl = url + `random`;
        console.log(`Random url: ${randomUrl}`);
        const response = await fetch(randomUrl);
        const color = await response.json();
        hex.textContent = `Code Héxadécimal: ${color.hex}`;
        hsl.textContent = `Code HSL: ${color.hsl}`;
        rgb.textContent = `Code RGB: ${color.rgb}`;
        
        colorAlea.style.backgroundColor = color.hex;
    }

    /**
     * Fonction qui affiche 10 nuances de couleur
     * @param {string} nuance 
     */
    async function nuanceAlea(nuance){
        const nuanceUrl = `${url}random/${nuance}`;
        console.log(nuanceUrl);
        pMessage.innerText = " ⇊ click droit sur la nuance pour afficher les infos ⇊";
        for (let i = 0; i < 10; i++)
        {
            const response = await fetch(nuanceUrl);
            const color = await response.json();
            const div = document.createElement("div");
            div.classList.add("colortest");
            div.style.backgroundColor = color.hex;
            div.style.border = "solid 1px black";
            boxColors.append(div);
            console.log(color);
        }
    }

    function displayDetails(hex, rgb, hsl){
        
    }

    /**
     * Fonction de remplissage du select --> couleurs par teinte
     */
    function loadSelect(){
        for (let i = 0; i < colorTab.length; i++) {
            const option = document.createElement("option");
            option.style.backgroundColor = colorTab[i];
            option.setAttribute("value", colorTab[i]);
            select.append(option);
        }
    }

    function selectHue(){
        
    }

    /**
     * Fonction qui supprime les divs enfants des nuances
     */
    function deleteDiv(){
        if (boxColors.childElementCount !== 0){
            for (let i = 0; i < 10; i++){
                boxColors.lastElementChild.remove();
            }
        }
    }

    //#endregion

    //#region Event
    btnAlea.addEventListener("click", randomColor);

    select.addEventListener("change", () => {
        deleteDiv();
        const element = select.selectedIndex;
        if (element !== 0){
            colorHue.style.backgroundColor = select[element].value;
            console.log(select.value);
            nuanceAlea(select.value);
            console.log(`Elément sélectionné: ${element}`);
        }
        select.selectedIndex = 0;
    })

    //#endregion

    loadSelect();
    console.log(`Nombre d'enfants: ${boxColors.childElementCount}`)
})