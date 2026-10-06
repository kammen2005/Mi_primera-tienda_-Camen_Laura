const productos = [
  {
    id: 1,
    nombre: "Reloj Q&Q Mujer Plateado",
    descripcion: "Resistente al agua: 3 BAR (no sumergible).",
    precio: 89900,
    imagen: "https://relojesw.com/cdn/shop/files/QB47J201Y.jpg?v=1763049758"
  },
  {
    id: 2,
    nombre: "Reloj Q&Q Mujer Original Dorado",
    descripcion: "Resistencia al agua: 3 BAR (no sumergible)",
    precio: 109900,
    imagen: "https://relojesw.com/cdn/shop/files/QC27J021Y.jpg?v=1754408148"
  },
  {
    id: 3,
    nombre: "Reloj Casio Mujer Plateado",
    descripcion: "Movimiento: Cuarzo (a batería).",
    precio: 165900,
    imagen: "https://relojesw.com/cdn/shop/files/LTP-V007SG-9E.jpg?v=1771545364"
  },
  {
    id: 4,
    nombre: "Reloj Q&Q Superior Hombre Plateado",
    descripcion: "Resistente al agua: 5 BAR (no sumergible)",
    precio: 124900,
    imagen: "https://relojesw.com/cdn/shop/files/CS28J803Y.jpg?v=1762960685"
  },
  {
    id: 5,
    nombre: "Reloj Kosmo Hombre Original Plateado",
    descripcion: "Reloj Kosmo Original 💯",
    precio: 349520,
    imagen: "https://relojesw.com/cdn/shop/files/K-645-PLAG.jpg?v=1756569231"
  }
];


/* ==============================
   CARRITO
================================ */

const carrito = [];

const contenedorProductos = document.getElementById("productos");
const listaCarrito = document.getElementById("lista-carrito");
const totalCarrito = document.getElementById("total");


/* ==============================
   MOSTRAR PRODUCTOS
================================ */

function mostrarProductos() {

  contenedorProductos.innerHTML = "";

  productos.forEach(prod => {

    const div = document.createElement("div");

    div.className = "producto";

    div.innerHTML = `
      <img src="${prod.imagen}" alt="${prod.nombre}">

      <h3>${prod.nombre}</h3>

      <p class="descripcion">
        ${prod.descripcion}
      </p>

      <p class="precio">
        ${prod.precio.toLocaleString("es-CO", {
          style: "currency",
          currency: "COP",
          minimumFractionDigits: 0
        })}
      </p>

      <button onclick="agregarAlCarrito(${prod.id})">
        Agregar al carrito
      </button>
    `;

    contenedorProductos.appendChild(div);

  });

}


/* ==============================
   AGREGAR AL CARRITO
================================ */

function agregarAlCarrito(id) {

  const productoExistente =
    carrito.find(p => p.id === id);

  if (productoExistente) {

    productoExistente.cantidad++;

  } else {

    const producto =
      productos.find(p => p.id === id);

    carrito.push({
      ...producto,
      cantidad: 1
    });

  }

  actualizarCarrito();

}


/* ==============================
   ACTUALIZAR CARRITO
================================ */

function actualizarCarrito() {

  listaCarrito.innerHTML = "";

  let total = 0;
  let totalItems = 0;

  carrito.forEach(item => {

    const li =
      document.createElement("li");

    const subtotal =
      item.precio * item.cantidad;

    li.textContent =
      `${item.nombre} x${item.cantidad} — ` +
      subtotal.toLocaleString("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0
      });

    listaCarrito.appendChild(li);

    total += subtotal;
    totalItems += item.cantidad;

  });

  totalCarrito.textContent =
    total.toLocaleString("es-CO");

  actualizarTituloCarrito(totalItems);

}


/* ==============================
   CONTADOR DEL CARRITO
================================ */

function actualizarTituloCarrito(cantidad) {

  const titulo =
    document.querySelector(".carrito h2");

  titulo.textContent =
    `🧾 Carrito de Compras (${cantidad})`;

}


/* ==============================
   VACIAR CARRITO
================================ */

function vaciarCarrito() {

  if (carrito.length === 0) {

    alert("🛒 El carrito ya está vacío.");

    return;

  }

  if (
    confirm(
      "¿Estás seguro de que quieres vaciar el carrito?"
    )
  ) {

    carrito.length = 0;

    actualizarCarrito();

  }

}


/* ==============================
   FINALIZAR COMPRA
================================ */

function finalizarCompra() {

  if (carrito.length === 0) {

    alert(
      "🛒 Tu carrito está vacío. Agrega productos antes de finalizar la compra."
    );

    return;

  }

  alert(
    "🎉 ¡Pedido simulado confirmado!\n\n" +
    "En un eCommerce real, ahora entrarían en acción " +
    "el backend, la pasarela de pago y la logística."
  );

  carrito.length = 0;

  actualizarCarrito();

}


/* ==============================
   INICIAR TIENDA
================================ */

mostrarProductos();
