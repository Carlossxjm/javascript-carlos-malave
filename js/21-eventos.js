function mOver(obj) {
  obj.innerHTML = "Aprendiendo en 2024"
  const boton = document.querySelector(".boton");
  boton.classList.add("red")
}

  function mOut(obj) {
    obj.innerHTML = "Java Script Moderno"
    const ancho = document.querySelector(".boton");
    ancho.classList.add("ancho")

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

    function upperCase(){
      const x = document.getElementById("fname");
      x.value = x.value.toLowerCase();//para Minusculas
      //x.value = x.value.toUpperCase();//para Mayusculas

    }  
//document.getElementById("myButton").addEventListener("click", mostrar);//function() {
  //alert("Ella Me mira con pena y me pide disculpas Viendo como me hundo en esta laguna Que derrama cada que ella piensa en el Ella Me comparte la alegría que caduca Cuando se avecina la rabia nocturna De una almohada flaca con hedor a infiel Yo me ahogo Mientras te sostengo soy tu suelo Aunque tenga huesos muy pequeños, con tus lágrimas yo jugaré Tu te ocultas, bajo una risa de caramelos Ya te escuche llorar en silencio por alguiеn que lleva mi nombre Ella Hay еn sus ojeras la mano de ayuda Pa' aliviar canciones más que inoportuna De Leonardo Fabio o José José");l
//})

//function mostrar() {
  //alert("Ya es navidad")
//}

var x = document.getElementById("myButton");
x.addEventListener("click", mostrar);
x.addEventListener("click", quieroRegalo);
x.addEventListener("mouseover", cambiarColor);
x.addEventListener("mouseout", cambiarColor2);
function mostrar(){
  alert("ya es navidad");
}
function quieroRegalo(){
  alert("Feliz Navidad");
}
function cambiarColor(){
  x.classList.add("red");
}function cambiarColor2(){
  x.classList.remove,("red");
  x.classList.add("blanco");
}

var title = document.querySelector(".title2");
x.addEventListener("click", pequeño);
x.addEventListener("mouseover", grande);

function grande(){
  title.classList.add("grande")

}
function pequeño(){
  title.classList.add("pequeño")
}

const para = document.createElement("p");
const node = document.createTextNode("Esto es nuevo");
para.appendChild(node);
const element = document.getElementById("div1");
element.appendChild(para);
