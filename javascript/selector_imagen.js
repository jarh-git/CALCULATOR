/*Name this selector.js*/
function selectorImage(){
    document.getElementById("title-text").innerHTML= "Aplicación: La biología y la sociología usan modelos matemáticos para predecir crecimiento de poblaciones.";
}
function selectorImage2(){
    document.getElementById("title-text").innerHTML= "Aplicación: Las ecuaciones diferenciales modelan el movimiento de partículas en sistemas físicos complejos.";
}
function selectorImage3(){
    document.getElementById("title-text").innerHTML= "Aplicación: Las matemáticas son esenciales en optimización, especialmente para maximizar beneficios o minimizar costos.";
}
function selectorImage4(){
    document.getElementById("title-text").innerHTML= "Aplicación: Las matemáticas aseguran la protección de datos en transacciones digitales, usando teorías de números.";
}

function resetImage() {
    const reset = document.getElementById("carousel-image");
    const titleText = document.getElementById("title-text");

    document.addEventListener("click", (event) => {
        // Verifica si el clic ocurrió fuera del div
        if (!reset.contains(event.target)) {
            titleText.innerHTML = "Haz clic en el carrusel para más información.";
        }
    });
}
resetImage();



