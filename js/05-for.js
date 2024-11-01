const ciudad = ["Maracay", "Caracas", "La Guaira", "San Juan", "Valencia"];
for (let i=0; i<ciudad.length; i++) {
    console.log(ciudad[i]) + "<br>";
}

const materias = ["Lengua y Literatura", "Matematica", "Ingles", "Historia", "Ciencias Naturales"];
for (let i=0; i<materias.length; i++) {
    console.log(materias[i]) + "<br>";
}

let text = "";

for (let i = 50; i < 1501; i++) {
    text += "a " + i + "<br>";
}

document.getElementById("numero").innerHTML = text;

console.log(text);
