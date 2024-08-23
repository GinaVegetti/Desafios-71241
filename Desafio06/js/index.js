
document.getElementById("recordarBtn")?.addEventListener("click", function() {
    const nombre = document.getElementById("nombre")?.value || "No ingresado";
    const email = document.getElementById("email")?.value || "No ingresado";
    const telefono = document.getElementById("telefono")?.value || "No ingresado";
    alert(`Nombre: ${nombre}\nEmail: ${email}\nTeléfono: ${telefono}`);
});


document.getElementById("cambiarColorBtn")?.addEventListener("click", function() {
    var formulario = document.getElementById("formulario");
    if (formulario) {
        var colores = ['#ffdddd', '#ddffdd', '#ddddff', '#ffffdd', '#ddffff'];
        var colorActual = formulario.style.backgroundColor;
        var nuevoColor = colores[Math.floor(Math.random() * colores.length)];
        while (nuevoColor === colorActual) {
            nuevoColor = colores[Math.floor(Math.random() * colores.length)];
        }
        formulario.style.backgroundColor = nuevoColor;
    } else {
        console.log("El elemento con ID 'formulario' no se encontró.");
    }
});