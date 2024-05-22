// Obtener referencias a los elementos del DOM
const ciudadInput = document.getElementById('ciudad');
const obtenerPronosticoBtn = document.getElementById('obtenerPronostico');
const pronosticoDiv = document.getElementById('pronostico');

// Agregar un evento click al botón "Obtener Pronóstico"
obtenerPronosticoBtn.addEventListener('click', obtenerPronostico);

// Función para obtener el pronóstico del tiempo
function obtenerPronostico() {
    const ciudad = ciudadInput.value.trim();
    
    if (ciudad === '') {
        mostrarError('Por favor, ingresa una ciudad');
        return;
    }
    
    const apiKey = '5c17ca2e5056838a2336ae2a5a50295f'; // Tu API key de OpenWeather
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== 200) {
                throw new Error(data.message);
            }
            mostrarPronostico(data);
        })
        .catch(error => {
            mostrarError('Error al obtener el pronóstico. Por favor, intenta nuevamente.');
        });
}

// Función para mostrar el pronóstico en el DOM
function mostrarPronostico(data) {
    const { name, main, weather } = data;
    const temperatura = main.temp;
    const sensacion = main.feels_like;
    const humedad = main.humidity;
    const descripcion = weather[0].description;
    const icono = weather[0].icon;

    const pronosticoHTML = `
        <div class="clima-actual">
            <h2>${name}</h2>
            <img src="http://openweathermap.org/img/wn/${icono}@2x.png" alt="${descripcion}">
            <p>Temperatura: ${temperatura}°C</p>
            <p>Sensación de: ${sensacion}°C</p>
            <p>Humedad: ${humedad}%</p>
            <p>Descripción: ${descripcion}</p>
        </div>
    `;
    
    pronosticoDiv.innerHTML = pronosticoHTML;
}

// Función para mostrar un mensaje de error
function mostrarError(mensaje) {
    const errorHTML = `
        <div class="alert alert-danger" role="alert">
            ${mensaje}
        </div>
    `;
    
    pronosticoDiv.innerHTML = errorHTML;
}
