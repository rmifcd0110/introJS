//

const reproductor = {
    reproducir: function(id){
        console.log(`reproduciendo la canción id ${id}`);
    },

    pausar: function(){
        console.log("pausando la canción");
    },

    borrar: function(id){
        console.log(`borrando la canción de id ${id}`);
    },

    crearPlaylist: function(nombre){
        console.log(`Creando la Playlist ${nombre}`);
    },

    reproducirPlaylist: function(nombre){
        console.log(`reproduciendo la Playlist ${nombre}`);
    }

}

reproductor.reproducir(30);
reproductor.pausar();

reproductor.borrar(20);
reproductor.crearPlaylist("Heavy Metal");
reproductor.reproducirPlaylist("Heavy Metal");