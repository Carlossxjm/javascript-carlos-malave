/*const carrito = [ 
    {nombre:"Monitor 20 Pulgadas", precio:500},
    {nombre:"Televisiòn 50 Pulgadas", precio:700},
    {nombre:"Tablet", precio:800},
    {nombre:"Audifonos", precio:500},
    {nombre:"Teclado", precio:150},
    {nombre:"Celular", precio:750},
]

const nuevoArray = carrito.map( function(producto){
    return `Articulo: ${ producto.nombre} Precio: ${producto.precio*2}` 
})

/*const nuevoArray2 = carrito.forEach( function(producto){
    return `Articulo: ${ producto.nombre} Precio: ${producto.precio}` 
})*/

//carrito.forEach((producto) => console.log(`Articulo: ${ producto.nombre} Precio: ${producto.precio*2}`));

/*console.log(nuevoArray)
//console.log(nuevoArray2)

console.log("")

const fruteria = [
    {nombre: "Mango", precio: 150},
    {nombre: "Fresa", precio: 300},
    {nombre: "Cambur", precio: 50},
];

fruteria.forEach((fruta) => console.log(`Fruta: ${fruta.nombre } Precio ${ fruta.precio} `))*/

const puntos = [
    {nombre: "player 1", puntos: 123},
    {nombre: "player 2", puntos:54},
    {nombre: "player 3", puntos:654},
    {nombre: "player 4", puntos:136},
    {nombre: "player 5", puntos:431},
    {nombre: "player 6", puntos:135},
]
const puntaje = puntos.map( function(racha){
    return `El jugador ${racha.nombre} tiene un Puntaje de ${racha.puntos}`
})

//console.log(puntaje)

puntos.forEach((racha) => console.log(`El jugador ${racha.nombre} tiene un Puntaje de ${racha.puntos}`));
