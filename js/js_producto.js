//componente mejorado 

const productos = [
    { nombre: "otoño", precio: 20, img: "https://definicion.de/wp-content/uploads/2013/01/hojas-secas-1.jpg" },
    { nombre: "hojas secas", precio: 2000, img: "https://www.anova.es/sites/default/files/inline-images/hojas-secas.jpg" },
    { nombre: "otoño", precio: 20, img: "https://definicion.de/wp-content/uploads/2013/01/hojas-secas-1.jpg" },
    { nombre: "hojas secas", precio: 2000, img: "https://www.anova.es/sites/default/files/inline-images/hojas-secas.jpg" }



];

const contenedor = document.getElementById("contenedor");

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