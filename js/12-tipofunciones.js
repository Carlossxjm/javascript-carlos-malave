//funciones de declaracion
//lo que va dentro de los parentesis se llaman parametros
function suma1(a,b){
    //cuerpo de la function o cojunto de intruciones que va a ejecutar la function
    console.log(a+b);

}
suma1(15,20);

//funciones de expresion

const suma2 = function(a,b){

    console.log(a+b);

}
//dentro de los parentesis son valoreso argumentos
suma2(25,45);

//asi se llama a una funcion y se le pasan argumentos o valores reales

//PLANTILLAS LITERALES

function registro(nombre="no tiene nOMBRE", apellido="no tiene apellido"){
    console.log(`${nombre} Se ha registrado con exito y su apellido es ${apellido}`);
    document.write(`<h1>${nombre} Se ha registrado con exito y su apellido es ${apellido}</h1>`)

}

registro("jenny", "rojas");

