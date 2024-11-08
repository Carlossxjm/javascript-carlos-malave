function listadoFrutas(fruta1, fruta2,...todasfrutas){

    console.log("la fruta 1 es", fruta1);
    console.log("la fruta 2 es", fruta2);
    console.log(todasfrutas);

}

//PARAMETROS REST

var frutas2 = ["mango","uvas","kiwi"];

//parametros SPREAD
listadoFrutas(...frutas2,"fresa","cambur","patilla","Durazno");
