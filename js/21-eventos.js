 function mOver(obj) {
    obj.innerHTML = "Aprendiendo en 2024"
  }

  function mOut(obj) {
    obj.innerHTML = "Java Script Moderno"
  }
  function displayDate(){
    document.getElementById("Fecha").innerHTML = Date();
  }  
  function hola(){
    document.getElementById("b3").innerHTML = "hola profe jenny";
  }

/*
  function sumar(a,b){
    document.getElementById("result").innerHTML = a+b;
  }
*/
  const calculadora = {

    sumar: function(n1,n2){
        suma = n1 + n2;
        document.getElementById("result").innerHTML = `la suma de a : ${n1} + b : ${n2} = ${suma}`;
    },
    resta: function(n1,n2){
        resta = n1 - n2;
        document.getElementById("result").innerHTML = `la resta de a : ${n1} - b : ${n2} = ${resta}`;
    },
    multiplicacion: function(n1,n2){
        multiplica = n1 * n2;
        document.getElementById("result").innerHTML = `la multiplicacion de a : ${n1} x b : ${n2} = ${multiplica}`;
    },
     division: function(n1,n2){
        divide = n1 / n2;
        document.getElementById("result").innerHTML = `la division de a : ${n1} / b : ${n2} = ${divide}`;
    }
    }
  