

const reproductor = {
  
reproducir: function(id){
    console.log(`Reproduciendo canciòn id ${id}`);
},
pausar: function(id){
    console.log(`Pausando la Cancion con id: ${id}`);
},
borrar: function(id){
    console.log(`Borrando la Canciòn con id ${id}`);
},   
crearPlaylist: function(nombre){
    console.log(`Creando la Playlist ${nombre}`);
},   
reproducirPlaylist: function(nombre){
    console.log(`Reproduciendo la Playlist ${nombre}`);
}
}
reproductor.borrar(15);
reproductor.crearPlaylist("Rock and Roll");
reproductor.reproducirPlaylist("Rock and Roll");

console.log("")

const carro = {
    
drive: function(marca){
    console.log(`El carro ${marca} Arrancando`)
},
neutro: function(marca){
    console.log(`El carro ${marca} en Neutro`)
},   
reversa: function(marca){
    console.log(`El carro ${marca} en Reversa`)
},    
stop: function(marca){
    console.log(`El carro ${marca} en Stop`)
},    
frenoMano: function(marca){
    console.log(`El carro ${marca} esta el Freno de Mano Puesto`)
},
}

//carro.drive("")
//carro.neutro("")
//carro.reversa("")
//carro.stop("")
carro.frenoMano("Fiat")

console.log("")
document.write(carro.frenoMano)
