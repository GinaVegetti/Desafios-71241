document.addEventListener("DOMContentLoaded", function () {
    const buttonPresentar = document.getElementById('botonPresentar');

    buttonPresentar.style.cssText = `
        background-color: #fff;
        color: #000;
        font-size: 24px;
        padding: 10px 20px;
        text-align: center;
        margin: 20px auto;
        width: 150px;
        cursor: pointer;
        transition: transform 0.2s ease-in-out;
    `;

    buttonPresentar.addEventListener('mouseover', function () {
        this.style.transform = 'scale(1.1)';
    });
    buttonPresentar.addEventListener('mouseout', function () {
        this.style.transform = 'scale(1)';
    });
    buttonPresentar.addEventListener('mousedown', function () {
        this.style.transform = 'scale(0.9)';
    });
    buttonPresentar.addEventListener('mouseup', function () {
        this.style.transform = 'scale(1)';
    });

    buttonPresentar.addEventListener('click', function () {
        let personaje = prompt("¿Quién se presenta hoy? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)");

        console.log(personaje);

        const nombresCompletos = {
            mario: "Mario",
            luigi: "Luigi",
            bowser: "Bowser Morton Koopa",
            peach: "Princesa Peach Toadstool",
            yoshi: "T. Yoshisaur Munchakoopas",
            toad: "Toad",
            toadette: "Toadette",
            daisy: "Princesa Daisy"
        };

        const personajeKey = personaje ? personaje.toLowerCase() : "";

        let nombreCompleto = nombresCompletos[personajeKey] || "(desconocido)";
        document.querySelector("h1 > span").innerText = nombreCompleto;

        const personajeDiv = document.getElementById(personajeKey);
        if (personajeDiv) {
            document.querySelectorAll('#cajas > div').forEach(div => {
                div.removeAttribute('title');
            });
            personajeDiv.setAttribute('title', 'Presentado');
        }
    });

    document.querySelectorAll('#cajas > div').forEach(div => {
        div.addEventListener('click', function () {
            const estaVisible = this.getAttribute('title') === 'Presentado';
            document.querySelectorAll('#cajas > div').forEach(div => {
                div.removeAttribute('title');
            });
            if (!estaVisible) {
                this.setAttribute('title', 'Presentado');
            }
        });
    });
});
