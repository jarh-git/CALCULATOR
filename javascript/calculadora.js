// Función para obtener la integral simbólica usando Wolfram Alpha
async function getSymbolicIntegral(expression, variable) {
    const apiKey = 'LQ58G8-26R5EQL4KW'; // Reemplaza con tu AppID de Wolfram Alpha
    const query = encodeURIComponent(`integrate ${expression} with respect to ${variable}`);
    const url = `https://api.wolframalpha.com/v2/query?input=${query}&format=plaintext&output=JSON&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const integralPod = data.queryresult.pods.find(pod => pod.title === "Indefinite integral");
        const integral = integralPod ? integralPod.subpods[0].plaintext : 'No integral found';
        return integral;
    } catch (error) {
        console.error("Error al obtener la integral simbólica: ", error);
        return 'Error';
    }
}

// Manejador de eventos para los botones de la calculadora
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', async (event) => {
        const value = event.target.dataset.value;
        const screen = document.querySelector('.screen'); // Seleccionamos la pantalla

        if (value === 'clear') {
            screen.value = ""; 
        } else if (value === 'equal') {
            try {
                const result = math.evaluate(screen.value); // Evaluamos usando math.js
                screen.value = result;
            } catch (error) {
                console.error("Error de evaluación: ", error); // Muestra el error en consola
                screen.value = 'Error'; // Mostramos el error en la pantalla
            }
        } else if (value === 'derivative') {
            try {
                const derivative = math.derivative(screen.value, 'x'); // Derivada con respecto a x
                screen.value = derivative.toString(); // Mostramos el resultado
            } catch (error) {
                console.error("Error al calcular la derivada: ", error); // Muestra el error en consola
                screen.value = 'Error'; // Mostramos el error en la pantalla
            }
        } else if (value === 'integral') {
            try {
                const integral = await getSymbolicIntegral(screen.value, 'x'); // Calculamos la integral simbólica usando Wolfram Alpha
                screen.value = integral; // Mostramos el resultado
            } catch (error) {
                console.error("Error al calcular la integral: ", error); // Muestra el error en consola
                screen.value = 'Error'; // Mostramos el error en la pantalla
            }
        } else if (value === 'sqrt') {
            try {
                const sqrt = math.sqrt(screen.value); // Calcula la raíz cuadrada
                screen.value = sqrt; // Mostramos el resultado
            } catch (error) {
                console.error("Error al calcular la raíz cuadrada: ", error); // Muestra el error en consola
                screen.value = 'Error'; // Mostramos el error en la pantalla
            }
        } else {
            screen.value += value; // Agrega cualquier otro valor presionado
        }
    });
});
