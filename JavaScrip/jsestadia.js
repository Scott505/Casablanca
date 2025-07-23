const btnAnt = document.getElementById("btnAnt");
const btnSig = document.getElementById("btnSig");
const carrusel = document.querySelector(".carrusel");
const images = [
  "img/imagen1.jpeg",
  "img/imagen2.jpeg",
  "img/imagen3.jpeg",
  "img/imagen4.jpeg",
];
let indexActual = 0;

images.forEach((src) => {
  const img = new Image();
  img.src = src;
});

function mostrarImg(index) {
  const imageSrc = images[index];
  const img = document.createElement("img");
  img.src = imageSrc;
  img.alt = `Imagen ${index + 1}`;
  
  carrusel.innerHTML = "";  
  carrusel.appendChild(img);
  
}

function imgSig() {
  indexActual = (indexActual + 1) % images.length;
  mostrarImg(indexActual);
}

function imgAnt() {
  indexActual = (indexActual - 1 + images.length) % images.length;
  mostrarImg(indexActual);
}

btnAnt.addEventListener("click", imgAnt);
btnSig.addEventListener("click", imgSig);

mostrarImg(indexActual);
