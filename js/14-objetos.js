const curso = {

    nombre: "programación", // llave o propiedad a la cual se le asigna un valor 
    duracion: "40 horas", // cada llave debe ir separada por coma y el valor asignado por puntos
    disponible: true,
    informacion:{

        modulos: 15,
        modalidad:{
            presencial: true,
            online: false
        }

    }

}

//console.log(curso, curso.informacion);
//document.write(curso);

const carro = {

    marca: "ford",
    modelo: "Explorer",
    caracteristicas: {

        color: "negro",
        año: 2014,
        kilometraje: 340000,
        dueños: 1,
        seguro: "1 año de poliza de seguro"

    },
    precio: "3000 usd"
}

const { informacion:{modulos}, informacion ,informacion:{modalidad:{presencial}}} = curso;
console.log(modulos);
console.log(informacion);
console.log(presencial);

//curso.descripcion="aprende desde cero a programar"// agrego nueva propiedades a mi objeto

//delete curso.descripcion;// borro propiedad de mi objeto

//console.log(curso)
//console.log(carro)

const {caracteristicas:{color}, caracteristicas} = carro;
console.log(caracteristicas)