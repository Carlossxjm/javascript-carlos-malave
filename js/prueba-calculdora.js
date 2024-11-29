const calculadora = {

suma: function(n1,n2){
    console.log(`la suma de a: ${n1} + b: ${n2}=`, n1 + n2);
},
resta: function(n1,n2){
    console.log(`la resta de a: ${n1} - b: ${n2}=`, n1 - n2);
},
multiplicacion: function(n1,n2){
   console.log(`la multiplicacion de a: ${n1} x b: ${n2}=`, n1 * n2);
},
 division: function(n1,n2){
    console.log(`la division de a: ${n1} / b: ${n2}=`, n1 / n2);
}
}
calculadora.suma(15,20)
calculadora.resta(150,200)
calculadora.multiplicacion(151,20)
calculadora.division(143,20)

console.log("")