const labubu = document.getElementById("labubu");
const salto = document.getElementById("salto");labubu.addEventListener("mouseenter", () => {
    salto.style.transform = "translateZ(120px) scale(1.12) rotateX(9deg)";
});

labubu.addEventListener("mouseleave", () => {
    salto.style.transform = "translateZ(0px) scale(1) rotateX(1deg)";
});
const burbuja = document.getElementById("burbuja");
let indiceFrase = 0;  
let burbujaVisible = false;
labubu.addEventListener("click", () => {

    //if (salto.classList.contains("saltar")) return; Salto
    salto.classList.remove("saltar");
    void salto.offsetWidth;
    salto.classList.add("saltar");
const frases = [
    "¡Hola! 👋",
     "おなかすいた〜 🍙",
    "k abuso 😭",
    "サボりダメね☝️",
    "ya fue p, ya perdí 🫩",
];
burbujaVisible = !burbujaVisible;
if (burbujaVisible) {

   burbuja.textContent = frases[indiceFrase];

indiceFrase++;

if (indiceFrase >= frases.length) {
    indiceFrase = 0;
}
    burbuja.classList.add("mostrar");

} else {

    burbuja.classList.remove("mostrar");

}

    // Corazones
    for (let i = 0; i < 10; i++) {

        const corazon = document.createElement("div");

        corazon.innerHTML = "💜";
        corazon.className = "corazon";

        corazon.style.left = (Math.random() * 160 - 80) + "px";
        corazon.style.top = (Math.random() * 160 - 80) + "px";

        salto.appendChild(corazon);

        setTimeout(() => {
            corazon.remove();
        }, 1000);
    }

});
const scene = document.getElementById("scene");
const personaje = document.getElementById("personaje");

document.addEventListener("mousemove", (e) => {

    const centroX = window.innerWidth / 2;
    const centroY = window.innerHeight / 2;

    const giroY =
        ((e.clientX - centroX) / centroX) * 40;

    const giroX =
        ((centroY - e.clientY) / centroY) * 35;

    personaje.style.transform =
        `rotateX(${giroX}deg) rotateY(${giroY}deg)`;
});

document.addEventListener("mouseleave", () => {

    personaje.style.transform =
`translateX(${giroY * 0.8}px)
 translateY(${-giroX * 0.8}px)
 rotateX(${giroX}deg)
 rotateY(${giroY}deg)`;burbuja.style.transform =
`translateX(-50%)
 rotateX(${giroX}deg)
 rotateY(${giroY}deg)
 scale(${burbujaVisible ? 1 : 0})`;
}); 

scene.addEventListener("mouseleave", () => {

    personaje.style.transform =
        `rotateX(0deg) rotateY(0deg)`;
});function parpadear() {
    labubu.classList.add("parpadear");

    setTimeout(() => {
        labubu.classList.remove("parpadear");
    }, 180);
}

setInterval(() => {
    parpadear();
}, 4000);function crearParticula() {
    const particula = document.createElement("div");

    const simbolos = ["✨", "⭐", "💜", "✦"];
    const simboloAleatorio =
        simbolos[Math.floor(Math.random() * simbolos.length)];

    particula.textContent = simboloAleatorio;
    particula.classList.add("particula");

    particula.style.left = Math.random() * 100 + "vw";
    particula.style.fontSize =
        Math.random() * 18 + 14 + "px";

    particula.style.animationDuration =
        Math.random() * 5 + 5 + "s";

    document.body.appendChild(particula);

    setTimeout(() => {
        particula.remove();
    }, 10000);
}

setInterval(crearParticula, 500);document.addEventListener("mousemove", (e) => {

    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;

    document.body.style.background =
    `radial-gradient(circle at ${x}% ${y}%,
    #ff8cf8,
    #c96dff,
    #7a2cff)`;

});