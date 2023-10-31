// Lleva un registro del índice de la imagen actual

var currentIndex = 1; 

// Construye el nombre del archivo de la imagen y actualiza la fuente de la misma

function showImage(index) {

  var imgName = "img" + index + ".jpg";

  document.getElementById("miImagen").src = imgName;

}

function previous() {

  currentIndex--;

  if (currentIndex < 1) { currentIndex = 3; }

  showImage(currentIndex);

}

function next() {

  currentIndex++;

  if (currentIndex > 3) { currentIndex = 1; }

  showImage(currentIndex);

}

// Llamamos a showImage para mostrar la imagen actual al cargar la página

showImage(currentIndex);