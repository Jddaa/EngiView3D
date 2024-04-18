function viajar(x) {
  location.href = x + ".html";
}
//var modeloActual = "cerrado"; // Variable para llevar el registro del modelo actual

const modeloViewer = document.getElementById("modelo-viewer");
const botonCambiar = document.querySelector(".boton-cambiar");

// Nombres de los archivos GLTF
const modeloCerrado = "ESPECTRO_Cerrado.gltf";
const modeloAbierto = "ESPECTRO_Abierto.gltf";

// Estado inicial del modelo
let modeloActual = modeloCerrado;

// Función para cambiar el modelo y el texto del botón
function cambiarModeloYTexto() {
  if (modeloActual === modeloCerrado) {
    modeloViewer.src = modeloAbierto;
    botonCambiar.textContent = "Cerrar";
    modeloActual = modeloAbierto;
  } else {
    modeloViewer.src = modeloCerrado;
    botonCambiar.textContent = "Abrir";
    modeloActual = modeloCerrado;
  }
}

// Agregar el evento de clic al botón
botonCambiar.addEventListener("click", cambiarModeloYTexto);

function mostrarImagen1() {
  document.getElementById("imagen-1").style.display = "block";
  document.getElementById("imagen-2").style.display = "none";
  document.querySelector(
    "#caracteristicas-panel button:nth-of-type(1)",
  ).style.display = "none";
  document.querySelector(
    "#caracteristicas-panel button:nth-of-type(2)",
  ).style.display = "none";
  document.querySelector(
    "#caracteristicas-panel button:nth-of-type(3)",
  ).style.display = "block";
}

function mostrarImagen2() {
  document.getElementById("imagen-1").style.display = "none";
  document.getElementById("imagen-2").style.display = "block";
  document.querySelector(
    "#caracteristicas-panel button:nth-of-type(1)",
  ).style.display = "none";
  document.querySelector(
    "#caracteristicas-panel button:nth-of-type(2)",
  ).style.display = "none";
  document.querySelector(
    "#caracteristicas-panel button:nth-of-type(3)",
  ).style.display = "block";
}

function ocultarImagen() {
  document.getElementById("imagen-1").style.display = "none";
  document.getElementById("imagen-2").style.display = "none";
  document.querySelector(
    "#caracteristicas-panel button:nth-of-type(1)",
  ).style.display = "block";
  document.querySelector(
    "#caracteristicas-panel button:nth-of-type(2)",
  ).style.display = "block";
  document.querySelector(
    "#caracteristicas-panel button:nth-of-type(3)",
  ).style.display = "none";
}

function pausarVid() {
  var video = document.getElementById("videoUso");
  if (!video.paused) {
    video.pause();
  }
}
