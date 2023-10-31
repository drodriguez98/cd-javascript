// Llevamos un registro del número de imagen actual

var imagenActual = 1;

function cambiarImagen() {

    // Aumentamos el número de imagen actual

    imagenActual++;
    
    // Verificamos si hemos alcanzado la última imagen (asumiendo que las imágenes están numeradas secuencialmente)

    if (imagenActual > 3) { imagenActual = 1; }
    
    // Construimos el nombre del archivo de imagen

    var nombreImagen = "img" + imagenActual + ".jpg";
    
    // Actualizamos la fuente de la imagen

    document.getElementById("miImagen").src = nombreImagen;
    
}