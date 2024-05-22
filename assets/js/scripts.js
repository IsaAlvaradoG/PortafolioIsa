// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
      colors: {
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      extend: {
        spacing: {
          '8xl': '96rem',
          '9xl': '128rem',
        },
        borderRadius: {
          '4xl': '2rem',
        }
      }
    },
  }
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  // ...
}
// Selecciona el encabezado
const header = document.querySelector('header');

// Agrega un evento de desplazamiento
window.addEventListener('scroll', () => {
  // Verifica la posición de desplazamiento
  if (window.scrollY > 100) {
    // Si el desplazamiento es más de 100px, cambia el color de fondo del encabezado
    header.classList.add('bg-gray-800');
  } else {
    // Si no, elimina el color de fondo del encabezado
    header.classList.remove('bg-gray-800');
  }
});
document.addEventListener("DOMContentLoaded", function() {
    // Función para cambiar el color de fondo del encabezado al hacer scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        header.classList.add('bg-gray-800');
      } else {
        header.classList.remove('bg-gray-800');
      }
    });
  
    // Función para mostrar/ocultar el menú móvil
    const mobileMenuButton = document.querySelector('.lg:hidden button');
    const mobileMenu = document.querySelector('.lg:hidden [role="dialog"]');
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('block');
    });
  
    // Función para cerrar el menú móvil al hacer clic en el fondo
    const mobileMenuBackdrop = document.querySelector('.lg:hidden .fixed.inset-0');
    mobileMenuBackdrop.addEventListener('click', () => {
      mobileMenu.classList.remove('block');
    });
  
    // Función para cambiar el color del botón al hacer clic
    const getStartedButton = document.querySelector('.rounded-md.bg-green-600');
    getStartedButton.addEventListener('click', () => {
      getStartedButton.classList.remove('bg-green-600');
      getStartedButton.classList.add('bg-lime-500');
    });
  
    // Función para cambiar el color del texto al pasar el mouse
    const learnMoreLink = document.querySelector('.text-sm.font-semibold.leading-6.text-white-500');
    learnMoreLink.addEventListener('mouseenter', () => {
      learnMoreLink.classList.add('text-green-500');
    });
    learnMoreLink.addEventListener('mouseleave', () => {
      learnMoreLink.classList.remove('text-green-500');
    });
  
    // Función para cargar imágenes de forma dinámica
    const dynamicImage = document.querySelector('.dynamic-image');
    dynamicImage.src = "https://unsplash.com/es/fotos/grayscale-photo-of-person-using-macbook-_UeY8aTI6d0";
  });
  // Eable Disable Script
function enabledisable(element) {
    console.log(element.style)
    if (element.style.fill != "rgb(29, 185, 84)") {
      element.style.setProperty('fill', '#1db954');
    } else {
      element.style.setProperty('fill', '#fff');
    }
  }
  
  // Greeetngs Script
  const greeting = document.getElementById("greeting");
  const hour = new Date().getHours();
  const welcomeTypes = ["Good morning", "Good afternoon", "Good evening"];
  let welcomeText = "";
  
  if (hour < 12) welcomeText = welcomeTypes[0];
  else if (hour < 18) welcomeText = welcomeTypes[1];
  else welcomeText = welcomeTypes[2];
  
  greeting.innerHTML = welcomeText;
  
  
  
  //Scrolling nav bar code
  const nav=document.querySelector("#topNav");
  const sectionOne=document.querySelector(".fw-bold");
  const sectionOneOptions={};
  const sectionOneObserver = new IntersectionObserver(function(entries , sectionOneObserver) {
    entries.forEach(entry => {
      if(!entry.isIntersecting){      
        nav.style.backgroundColor="black";
      } else{     
        nav.style.backgroundColor="transparent";
      }
    })
  } , sectionOneOptions);
  sectionOneObserver.observe(sectionOne);


// Esta función se utiliza para habilitar o deshabilitar un elemento
function enabledisable(element) {
  element.classList.toggle("ativo");
}
// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = 'BQC-i5kaO1a9W3Q0VZ7Ohd5oQ5uXtOIGHmS0Cuei6wPSCxbz0LTP3hmyOg6wpiuN1TO6zoYgd1jXmsCTgC_THXhgEWjdFzkv8iCm-hFfO6qUcH32qjqQbGJAQ73r4F_LK231oByIFBN7BtKVjch9ed7AF4lwgyekpRlcPxT8dXsMsvUSdWDMDUTIeXE4hdIY_6Ho3WiuEan0o10-nJrjKO7HtYR0OFzqGDzbtnH1D3M-fUpQlH6stwARWEeU8_R2EfIluwekGgiK_V6vjK35fOFRLJqE';
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}

async function getTopTracks(){
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  return (await fetchWebApi(
    'v1/me/top/tracks?time_range=long_term&limit=5', 'GET'
  )).items;
}

const topTracks = await getTopTracks();
console.log(
  topTracks?.map(
    ({name, artists}) =>
      `${name} by ${artists.map(artist => artist.name).join(', ')}`
  )
);

document.getElementById("ver-link").addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("new-section").classList.toggle("hidden");
  document.getElementById("new-section").classList.toggle("expanded");
});
const formularioContacto = document.getElementById('formulario-contacto');

formularioContacto.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita la recarga automática de la página

  const nombre = document.getElementById('nombre').value;
  const correo = document.getElementById('correo').value;
  const mensaje = document.getElementById('mensaje').value;

  // Validación básica de los campos (opcional)
  if (!nombre || !correo || !mensaje) {
    alert('Por favor, completa todos los campos del formulario.');
    return;
  }

  // Simulación de envío de datos (reemplazar con envío real)
  console.log('Nombre:', nombre);
  console.log('Correo:', correo);
  console.log('Mensaje:', mensaje);

  // Código para enviar datos a un servidor (por ejemplo, con Ajax o Fetch API)
  // ...

  // Mensaje de éxito (opcional)
  alert('¡Tu mensaje ha sido enviado correctamente!');

  // Limpiar el formulario (opcional)
  formularioContacto.reset();
});
// Redirecciones
function redirectToApiPage() {
  window.location.href = 'api.html';
}

document.addEventListener("DOMContentLoaded", function() {
  // Obtener el elemento <li> de Extension VivoDuoc
  const vivoDuoc = document.getElementById("vivoDuoc");

  // Agregar evento de clic al <li> de Extension VivoDuoc
  vivoDuoc.addEventListener("click", function() {
      // Redirigir a la página de Extension VivoDuoc
      window.location.href = "https://miro.com/app/board/uXjVMizyVNs=/";
  });

  // Aquí puedes agregar eventos de clic similares para los otros proyectos
});