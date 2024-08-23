// Bonus 2: Mostrar datos del formulario en un alert
document.getElementById("recordarBtn").addEventListener("click", function() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    alert("Nombre: " + nombre + "\nEmail: " + email + "\nTeléfono: " + telefono);
});

// Bonus 1: Cambiar el color de fondo del formulario
document.getElementById("cambiarColorBtn").addEventListener("click", function() {
    var formulario = document.getElementById("formulario");
    var colores = ['#ffdddd', '#ddffdd', '#ddddff', '#ffffdd', '#ddffff'];
    var colorActual = formulario.style.backgroundColor;
    var nuevoColor = colores[Math.floor(Math.random() * colores.length)];
    while (nuevoColor === colorActual) {
        nuevoColor = colores[Math.floor(Math.random() * colores.length)];
    }
    formulario.style.backgroundColor = nuevoColor;
});
