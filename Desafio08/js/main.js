
const menuItems = [
    { id: 1, name: "Pizza", description: "Pizza con queso y salsa", price: 10000 },
    {
        id: 2,
        name: "Hamburguesa",
        description: "Hamburguesa con papas fritas",
        price: 8000,
    },
    { id: 3, name: "Sushi", description: "Rollos de sushi variados", price: 12000 },
];


const menuContainer = document.getElementById("menu");
menuItems.forEach((item) => {
    menuContainer.innerHTML += `
        <div class="menu-item">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p>Precio: $${item.price}</p>
            <input type="number" min="1" id="quantity-${item.id}" placeholder="Cantidad">
        </div>
        `;
});


document
    .getElementById("order-form")
    .addEventListener("submit", function (event) {
        event.preventDefault(); 

        const name = document.getElementById("name").value;
        const address = document.getElementById("address").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;

        if (!name || !address || !phone || !email) {
            alert("Por favor, complete todos los campos.");
            return;
        }

        placeOrder();
    });


function placeOrder() {
    const order = [];
    let totalCost = 0;

    menuItems.forEach((item) => {
        const quantity = document.getElementById(`quantity-${item.id}`).value;
        if (quantity > 0) {
            order.push({
                item: item.name,
                quantity: quantity,
                price: item.price * quantity,
            });
            totalCost += item.price * quantity;
        }
    });

    if (order.length > 0) {
        sendOrderToRestaurant(order, totalCost);
    } else {
        alert("No ha seleccionado ningún artículo.");
    }
}


function sendOrderToRestaurant(order, totalCost) {
    console.log("Enviando pedido al restaurante...");
    console.log(order);
    console.log(`Total a pagar: $${totalCost}`);
    alert(`Su pedido ha sido enviado correctamente. Total: $${totalCost}`);
}
