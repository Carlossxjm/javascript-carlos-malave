//Supongamos que creamos un carrito de compras desde la consola, mas adelante 
const carrito = [];

//Añadir elemento al carrito...
const producto = {
    nombre: "Monitor de 20 Pulgadas",
    precio: 500
}

const producto2 = {
    nombre: "Celular",
    precio: 500
}

carrito.push(producto);
carrito.push(producto2);


//Añadir al Inicio del carrito...

const producto3 = { 
    nombre: "Teclado",
    precio: 50
}
carrito.unshift(producto3)

console.log(carrito);

//Ejercicio

const asistencia = [];

const alumnos = {
    nombre: "carlos",
    asistio: "si"
}
const alumnos2 = {
    nombre: "carlos",
    asistio: "si"
}
const alumnos3 = {
    nombre: "carlos",
    asistio: "si"
}

asistencia.push(alumnos);
asistencia.push(alumnos2);
asistencia.push(alumnos3);


const alumnos4 = {
    nombre: "carlos",
    asistio: "si"
}
asistencia.unshift(alumnos4)

console.log(asistencia);
document.write(asistencia);
