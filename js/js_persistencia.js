const productos = [
    { nombre: "otoño", precio: 20, img: "https://definicion.de/wp-content/uploads/2013/01/hojas-secas-1.jpg" },
    { nombre: "hojas secas", precio: 2000, img: "https://www.anova.es/sites/default/files/inline-images/hojas-secas.jpg" },
    { nombre: "otoño", precio: 20, img: "https://definicion.de/wp-content/uploads/2013/01/hojas-secas-1.jpg" },
    { nombre: "hojas secas", precio: 2000, img: "https://www.anova.es/sites/default/files/inline-images/hojas-secas.jpg" }
];

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const carritoLista = document.getElementById("carritoLista");
const contenedor = document.getElementById("contenedor");

if(carrito.lenght>0){
    renderCarrito();
}

function renderCarrito() {
    carritoLista.innerHTML = "";
    carrito.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        carritoLista.appendChild(li);
    });
}

renderCarrito();

productos.forEach(prod => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <img src="${prod.img}" alt="${prod.nombre}">
        <h3>${prod.nombre}</h3>
        <p>${prod.precio}</p>
        <button>Agregar</button>
    `;

    contenedor.appendChild(card);
});

contenedor.addEventListener("click", e => {
    if (e.target.tagName === "BUTTON") {
        const nombre = e.target.parentElement.querySelector("h3").textContent;
        carrito.push(nombre);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        renderCarrito();
    }
});
