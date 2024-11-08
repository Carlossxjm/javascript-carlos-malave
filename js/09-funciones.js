function porConsola(n1, n2){
    
    console.log("La suma de n1 + n2 es: "+(n1 + n2));
    console.log("La resta de n1 - n2 es: "+(n1 - n2));
    console.log("La multiplicacion de n1 x n2 es: "+(n1 * n2));
    console.log("La division es: "+(n1/n2));
    console.log("*****************");


}

function porPantalla(n1, n2){

    document.write("La suma de n1 + n2 es: "+(n1 + n2)+"</br>");
    document.write("La resta de n1 - n2 es: "+(n1 - n2)+"</br>");
    document.write("La multiplicacion de n1 x n2 es: "+(n1 * n2)+"</br>");
    document.write("La division es: "+(n1/n2)+"</br>");

}


function calculadora(n1,n2, mostrar=false){
    //cojunto de instrucciones que va a ejecutar esa funcion


    if(mostrar==false){
    porConsola(n1,n2);

}
else{
    porPantalla(n1,n2);

}
return true
}
calculadora(5, 10, true)
calculadora(5, 10, true)
