/*var nombre = prompt("Introduce tu Nombre");
var apellido = prompt("Introduce tu Apelido");
document.write(nombre +" "+ apellido);*/

function mOver(obj) {
    obj.innerHTML = "hola"
    const color1 = document.querySelector(".boton2");
    color1.classList.add("color1")
  }
  

    function mOut(obj) {
      obj.innerHTML = "como estas"
      const color2 = document.querySelector(".boton2");
      classList.remove("color1");
      color2.classList.add("color2");
    }
