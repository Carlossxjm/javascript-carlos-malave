var compras = prompt ("Deseas comprar","si");

const catalogo = [
    
    { ID: 1, producto: "Pera", valor: 150},
    { ID: 2, producto: "Durazno", valor:150},
    { ID: 3, producto: "Manzana", valor: 150},
    
]

if(compras == "si" ){
    mostrarCatalogo(catalogo);
}
else{
    console.log("NO QUIERO COMPRAR");
}

function mostrarCatalogo(catalogo){

    for (let i = 0; i < catalogo.length; i++){
    console.log (catalogo[i]);
    }

    var compras2 = prompt ("Ingrese un id del producto a comprar no mayor a ")
    console.log(`haz agregado al carrito el producto con el id ${compras2}`)
    }
//mostrarCatalogo(catalogo)





var total = 0;

function agregarCarrito(precio){
    return total += precio;
}

function calcularImpuesto(total){
    return impuesto = total * 1.16; // cada ves 
}

total = agregarCarrito(300);

agregarCarrito (600);

impuesto = calcularImpuesto (total);

console.log(`El total a pagar es ${total} con impuesto es ${impuesto}`)