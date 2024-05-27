document.addEventListener("DOMContentLoaded", function() {
  // Función para cambiar el color de fondo del encabezado al hacer scroll
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        header.classList.add('bg-gray-800');
      } else {
        header.classList.remove('bg-gray-800');
      }
    });
  }

  // Event listener para el botón de Dino Game
  const dinoGameBtn = document.getElementById('dinoGameBtn');
  if (dinoGameBtn) {
    dinoGameBtn.addEventListener('click', function() {
      redirectToGitHub('https://github.com/IsaAlvaradoG/Dino-Game');
    });
  }

  // Función para redirigir a GitHub
  function redirectToGitHub(repoURL) {
    console.log("Redireccionando a:", repoURL);
    window.location.href = repoURL;
  }


  // Obtener el botón por su ID
const groundZeroBtn = document.getElementById('groundZeroBtn');

// Verificar si el botón existe
if (groundZeroBtn) {
  // Agregar event listener al botón
  groundZeroBtn.addEventListener('click', function() {
    redirectToGitHub('https://github.com/martinagonz/Prueba1');
  });
}

// Obtener el botón por su ID
const casinoStyleBtn = document.getElementById('casinoStyleBtn');

// Verificar si el botón existe
if (casinoStyleBtn) {
  // Agregar event listener al botón
  casinoStyleBtn.addEventListener('click', function() {
    redirectToGitHub('https://github.com/IsaAlvaradoG/Perro-Salchicha');
  });
}

// Obtener el botón por su ID
const empresaDesignBtn = document.getElementById('empresaDesignBtn');

// Verificar si el botón existe
if (empresaDesignBtn) {
  // Agregar event listener al botón
  empresaDesignBtn.addEventListener('click', function() {
    // Redirigir al enlace del trabajo en Google Drive
    window.location.href = 'https://drive.google.com/drive/folders/1XdEmlhiWUjJjWcFj_YwTN882ofsB9rw9?usp=sharing';
  });
}

// Obtener el botón por su ID
const vivoDuocBtn = document.getElementById('vivoDuocBtn');

// Verificar si el botón existe
if (vivoDuocBtn) {
  // Agregar event listener al botón
  vivoDuocBtn.addEventListener('click', function() {
    // Redirigir al enlace de Miro
    window.location.href = 'https://miro.com/app/board/uXjVMizyVNs=/?share_link_id=195277841898';
  });
}


 
// Obtener el botón por su ID
const portafolioBtn = document.getElementById('portafolioBtn');

// Verificar si el botón existe
if (portafolioBtn) {
  // Agregar event listener al botón
  portafolioBtn.addEventListener('click', function() {
    // Redirigir al enlace de Canva
    window.location.href = 'https://www.canva.com/design/DAFXk2rGnRg/APr2BVWChRa4wQ1EQoGXlw/view?utm_content=DAFXk2rGnRg&utm_campaign=designshare&utm_medium=link&utm_source=editor';
  });
}

// Obtener el botón por su ID
const logosBtn = document.getElementById('logosBtn');

// Verificar si el botón existe
if (logosBtn) {
  // Agregar event listener al botón
  logosBtn.addEventListener('click', function() {
    // Redirigir al enlace de Canva
    window.location.href = 'https://www.canva.com/design/DAGFObgZ1UQ/OfafA_9Se9ALYo4muIIZrA/view?utm_content=DAGFObgZ1UQ&utm_campaign=designshare&utm_medium=link&utm_source=editor';
  });
}

// Obtener el botón por su ID
const curriculumBtn = document.getElementById('curriculumBtn');

// Verificar si el botón existe
if (curriculumBtn) {
  // Agregar event listener al botón
  curriculumBtn.addEventListener('click', function() {
    // Redirigir al enlace de Canva
    window.location.href = 'https://www.canva.com/design/DAF3P5SBtps/mLDCYvw3TeSsOIG_3eFZvQ/view?utm_content=DAF3P5SBtps&utm_campaign=designshare&utm_medium=link&utm_source=editor';
  });
}

// Obtener el botón por su ID
const instagramBtn = document.getElementById('instagramBtn');

// Verificar si el botón existe
if (instagramBtn) {
  // Agregar event listener al botón
  instagramBtn.addEventListener('click', function() {
    // Redirigir al perfil de Instagram
    window.location.href = 'https://www.instagram.com/isalvaradogonzali/';
  });
}

// Obtener el botón por su ID
const githubBtn = document.getElementById('githubBtn');

// Verificar si el botón existe
if (githubBtn) {
  // Agregar event listener al botón
  githubBtn.addEventListener('click', function() {
    // Redirigir al perfil de GitHub
    window.location.href = 'https://github.com/IsaAlvaradoG';
  });
}

// Obtener el botón por su ID
const linkedinBtn = document.getElementById('linkedinBtn');

// Verificar si el botón existe
if (linkedinBtn) {
  // Agregar event listener al botón
  linkedinBtn.addEventListener('click', function() {
    // Redirigir al perfil de LinkedIn
    window.location.href = 'https://www.linkedin.com/in/maria-isabel-a-78aa72288/';
  });
}

// Obtener el botón por su ID
const spotifyBtn = document.getElementById('spotifyBtn');

// Verificar si el botón existe
if (spotifyBtn) {
  // Agregar event listener al botón
  spotifyBtn.addEventListener('click', function() {
    // Redirigir a la playlist de Spotify
    window.location.href = 'https://open.spotify.com/playlist/6ZSjpRErdJCDCIO8A0SfI9?si=47b49b75258548d5&nd=1&dlsi=127d5f1195ae4f17';
  });
}

 // Función para mostrar/ocultar el menú móvil
 const mobileMenuButton = document.querySelector('.lg:hidden button');
 const mobileMenu = document.querySelector('.lg:hidden [role="dialog"]');
 if (mobileMenuButton && mobileMenu) {
   mobileMenuButton.addEventListener('click', () => {
     mobileMenu.classList.toggle('block');
   });
 }

 // Función para cerrar el menú móvil al hacer clic en el fondo
 const mobileMenuBackdrop = document.querySelector('.lg:hidden .fixed.inset-0');
 if (mobileMenuBackdrop) {
   mobileMenuBackdrop.addEventListener('click', () => {
     mobileMenu.classList.remove('block');
   });
 }

 

 // Animación de elementos al hacer scroll
 window.addEventListener('scroll', function() {
   document.querySelectorAll('.fade-in').forEach(function(element) {
     if (element.getBoundingClientRect().top < window.innerHeight) {
       element.classList.add('show');
     }
   });
 });

  // Envío de formulario de contacto
  const formularioContacto = document.getElementById('formulario-contacto');
  if (formularioContacto) {
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

      // Mensaje de éxito (opcional)
      alert('¡Tu mensaje ha sido enviado correctamente!');

      // Limpiar el formulario (opcional)
      formularioContacto.reset();
    });
  }

  // Redes sociales
  const redesSociales = document.querySelectorAll('.contact-social');

  // Agrega un evento de clic a cada enlace de red social
  redesSociales.forEach(redSocial => {
    redSocial.addEventListener('click', (event) => {
      event.preventDefault(); // Evita que el enlace redirija
      const redSocialURL = redSocial.href;
      window.open(redSocialURL, '_blank'); // Abre el enlace en una nueva pestaña
    });
  });
});
