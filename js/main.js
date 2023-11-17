// Pide al usuario que ingrese su nombre
var nombre = prompt("Por favor, ingresa tu nombre:");
  // Muestra un mensaje de bienvenida con el nombre ingresado
  alert("¡Bienvenido a Marquise, " + nombre + "!");

// Carrousel
 const carouselContainer = document.querySelector('.carousel-container');
 const carouselSlides = document.querySelectorAll('.carousel-slide');
  const prevButton = document.getElementById('prev.button');
  const nextButton = document.getElementById('next.button');
  

let currentSlide = 0;
    
function showSlide() {
  carouselSlides.forEach(slide => slide.style.display = 'none');
  
  for (let i = currentSlide; i < currentSlide + 3; i++) {
    if (carouselSlides[i]) {
      carouselSlides[i].style.display = 'block';
    }
  }
}

function nextSlide() {
  currentSlide = (currentSlide + 3) % carouselSlides.length;
  showSlide();
}

function prevSlide() {
  currentSlide = (currentSlide - 3 + carouselSlides.length) % carouselSlides.length;
  showSlide();
}

showSlide();

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

