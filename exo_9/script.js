window.addEventListener("DOMContentLoaded", () => {

    const hex = document.getElementById("hex");   
    const hsl = document.getElementById("hsl");
    const rgb = document.getElementById("rgb");
    const btnAlea = document.getElementById("btnAlea");
    const colorAlea = document.getElementById("colorAlea");
    const colorHue = document.getElementById("colorHue");
    const boxColors = document.getElementById("boxColors");

    const url = `https://x-colors.yurace.pro/api/`;

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

    async function nuanceAlea(nuance){
        const nuanceUrl = `${url}random/${nuance}`;
        console.log(nuanceUrl);

        for (let i = 0; i < 10; i++)
        {
            const response = await fetch(nuanceUrl);
            const color = await response.json();
            const div = document.createElement("div");
            div.classList.add("colortest");
            div.style.backgroundColor = color.hex;
            boxColors.append(div);
            console.log(color);
        }
    }

    btnAlea.addEventListener("click", randomColor);

    nuanceAlea("000");
    
})