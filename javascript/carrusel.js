// Selección de elementos clave del carrusel
const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0; // Índice actual del carrusel

// Función para actualizar la posición del carrusel
function updateCarousel() {
  const width = images[0].clientWidth; // Ancho de una imagen
  carouselImages.style.transform = `translateX(-${currentIndex * width}px)`; // Mueve el carrusel
}

// Manejador para el botón "Siguiente"
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length; // Incrementa el índice (vuelve al inicio al llegar al final)
  updateCarousel();
});

// Manejador para el botón "Anterior"
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length; // Decrementa el índice (va al final si está al principio)
  updateCarousel();
});

// Actualiza el tamaño del carrusel al cambiar el tamaño de la ventana
window.addEventListener('resize', updateCarousel);
