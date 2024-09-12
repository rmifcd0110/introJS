// como se comunican las funciones entre si

iniciarApp();

function iniciarApp(){
    console.log("Iniciando la App...");
    segundaApp();
}

function segundaApp(){
    console.log('Desde la segunda App');
    usuarioAutenticado('Pepe');
}

function usuarioAutenticado(usuario){
    console.log('validando...');
    console.log(`usuario verificado con éxito ${usuario}`);
}

