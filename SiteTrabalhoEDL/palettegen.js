const container = document.querySelector(".container");
const refreshBTN1 = document.querySelector(".refresh-palette");

const MaxPaletteBoxes1 = 16;

const refreshBTN2 = document.querySelector(".refresh-palette2");

const generatePalette1 = () => {
    container.innerHTML = "";
    for (let i = 0; i < MaxPaletteBoxes1; i++) {
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6, "0")}`;


        const color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML = `<div class="rect-box" style="background: ${randomHex}"></div>
                           <span class="hex-value">${randomHex}</span>`;
        container.appendChild(color);
    }
    
}
/*const generatePalette2 = () => {
    for (let j = 0; j < MaxPaletteBoxes2; j++) {
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6, "0")}`;


        const color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML = `<div class="rect-box" style="background: ${randomHex}"></div>
                           <span class="hex-value">${randomHex}</span>`;
        container.appendChild(color);
    }
} */
refreshBTN1.addEventListener("click", generatePalette1);
