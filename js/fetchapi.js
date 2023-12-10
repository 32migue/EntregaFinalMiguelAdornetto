const listaPelis = document.querySelector("#tarjetasPeliculas");
let paginaActual = obtenerPaginaAleatoria(); 
let peliculas = []
const mapGenero = {
  28: "Acción",
  16: "Animación",
  12: "Aventura",
  878: "Ciencia Ficción",
  35: "Comedia",
  80: "Crimen",
  99: "Documental",
  18: "Drama",
  10751: "Familia",
  14: "Fantasía",
  10752: "Guerra",
  36: "Historia",
  27: "Horror",
  10402: "Musica",
  9648: "Misterio",
  10770: "Pelicula De TV",
  10749: "Romance",
  53: "Thriller",
  37: "Western",
}

//PROBLEMA CON GUERRA ANIMACION HISTORIA

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTNiYzFhMWU1ZTYxZWVlMzJiNWUwMGU1ZTc3YzRmOCIsInN1YiI6IjY1NmY5MjQxOTQ2MzE4MDBhZDRiNzJiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Gp6ydcHuKYKdgDZEdr0qIiw7BxX7i2RZ8EuBbLyWQzo'
  }
};

function obtenerPaginaAleatoria() {
  return Math.floor(Math.random() * 100) + 1;
}

function obtenerURLPeliculas(pagina) {
  return `https://api.themoviedb.org/3/discover/movie?language=es-ES&page=${pagina}&sort_by=popularity.desc`;
}

fetch(obtenerURLPeliculas(paginaActual), options)
  .then(response => response.json())
  .then(data => {
    peliculas = data.results;  
    window.peliculas = peliculas;
    cargarPeliculas();
  })
  .catch(err => console.error(err));


function cargarPeliculas() {
      listaPelis.innerHTML = '';

      peliculas.forEach(pelicula => {
        const li = document.createElement("li");
        const generoNombres = pelicula.genre_ids.map(id => mapGenero[id]);
        li.innerText = `Géneros: ${generoNombres.join(', ')}`;
        listaPelis.append(li);

        li.style.display = "none"
      });
    }




document.getElementById("btnBuscar").addEventListener("click", function () {
  paginaActual = obtenerPaginaAleatoria();
  cargarPeliculas();
  buscarPelicula();
});

document.getElementById("btnRandom").addEventListener("click", function () {
  paginaActual = obtenerPaginaAleatoria();
  cargarPeliculas();
  buscarPelicula()
});


function buscarPelicula() {
  const selectGenero1 = document.getElementById("selectGenero1");
  const selectGenero2 = document.getElementById("selectGenero2");

  const genero1 = parseInt(selectGenero1.options[selectGenero1.selectedIndex].value, 10);
  const genero2 = parseInt(selectGenero2.options[selectGenero2.selectedIndex].value, 10);

  if (genero1 && genero2) {
    const totalPaginas = 20; 

    const promesas = Array.from({ length: totalPaginas }, (_, i) => {
      const url = obtenerURLPeliculas(i + 1);
      return fetch(url, options).then(response => response.json());
    });

    Promise.all(promesas)
      .then(resultados => {
        const peliculasPorGenero1 = resultados
          .flatMap(resultado => resultado.results)
          .filter(pelicula => pelicula.genre_ids.includes(genero1));

        const peliculasFiltradas = peliculasPorGenero1.filter(pelicula => pelicula.genre_ids.includes(genero2));

        if (peliculasFiltradas.length > 0) {
          const peliculaAleatoria = peliculasFiltradas[
            Math.floor(Math.random() * peliculasFiltradas.length)
          ];

          listaPelis.innerHTML = '';
          mostrarPeliculaEnTarjeta(peliculaAleatoria);
        } else {
          Swal.fire({
            title: 'Error!',
            text: 'No tenemos películas disponibles :(',
            icon: 'error',
            confirmButtonText: 'Buscar de nuevo'
          });
        }
      })
      .catch(error => console.error(error));
  } else {
    Swal.fire({
      title: 'Error!',
      text: 'Selecciona ambos géneros por favor',
      icon: 'error',
      confirmButtonText: 'Buscar de nuevo'
    })
  }
}
function mostrarPeliculaAleatoria() {
  if (peliculas && peliculas.length > 0) {
    const peliculaAleatoria = peliculas[Math.floor(Math.random() * peliculas.length)];
    listaPelis.innerHTML = '';
    mostrarPeliculaEnTarjeta(peliculaAleatoria);
  } else {
    Swal.fire({
      title: 'Error!',
      text: 'Selecciona ambos géneros por favor',
      icon: 'error',
      confirmButtonText: 'Buscar de nuevo'
    })
  }
}

function mostrarPeliculaEnTarjeta(pelicula) {
  const tarjeta = document.createElement("div");
  tarjeta.classList.add("pelicula-tarjeta");

  const contenedorImagenPuntuacion = document.createElement("div");
  contenedorImagenPuntuacion.classList.add("contenedor-imagen-puntuacion");

  const imagen = document.createElement("img");
  imagen.src = `https://image.tmdb.org/t/p/w500${pelicula.poster_path}`;
  imagen.alt = pelicula.title;
  imagen.classList.add("imagen-pelicula");

  const puntuacion = document.createElement("p");
  puntuacion.innerText = `Puntuación: ${pelicula.vote_average.toFixed(1)}`;
  puntuacion.classList.add("puntuacion");

  contenedorImagenPuntuacion.appendChild(imagen);
  contenedorImagenPuntuacion.appendChild(puntuacion);

  const contenidoTexto = document.createElement("div");
  contenidoTexto.classList.add("contenido-texto");

  const titulo = document.createElement("h2");
  titulo.innerText = pelicula.title;
  titulo.classList.add('titulo-pelicula');

  const generosEtiqueta = document.createElement("p");
  generosEtiqueta.innerText = 'Géneros:';
  generosEtiqueta.classList.add('etiqueta-generos');

  const generos = document.createElement("p");
  const generoNombres = pelicula.genre_ids.map(id => mapGenero[id]);
  generos.innerText = generoNombres.join(', ');

  const sinopsisEtiqueta = document.createElement("p");
  sinopsisEtiqueta.innerText = 'Sinopsis:';
  sinopsisEtiqueta.classList.add('etiqueta-sinopsis');

  const resumenResumido = document.createElement("p");
  const sinopsisResumida = pelicula.overview.slice(0, 100);
  resumenResumido.innerHTML = `${sinopsisResumida + "..."}`;

  const resumenCompleto = document.createElement("p");
  const sinopsisCompleta = pelicula.overview;
  resumenCompleto.innerHTML = `${sinopsisCompleta}`;
  resumenCompleto.style.display = "none";

  const botonLeerMas = document.createElement("button");
  botonLeerMas.innerText = "Leer más";
  botonLeerMas.id = "botonLeerMas";
  botonLeerMas.addEventListener("click", function () {
    resumenResumido.style.display = "none";
    resumenCompleto.style.display = "block";
    botonLeerMas.style.display = "none";
  });

contenedorImagenPuntuacion.appendChild(imagen);
contenedorImagenPuntuacion.appendChild(puntuacion);

  tarjeta.appendChild(contenedorImagenPuntuacion);

contenidoTexto.appendChild(titulo);
contenidoTexto.appendChild(generosEtiqueta);
contenidoTexto.appendChild(generos);
contenidoTexto.appendChild(sinopsisEtiqueta);
contenidoTexto.appendChild(resumenResumido);
contenidoTexto.appendChild(resumenCompleto);
contenidoTexto.appendChild(botonLeerMas);

tarjeta.appendChild(contenedorImagenPuntuacion);
tarjeta.appendChild(contenidoTexto);

  listaPelis.appendChild(tarjeta);
}



cargarPeliculas();


document.addEventListener("DOMContentLoaded", function () {
  let currentImage = 1;

  function changeImage() {
      const totalImages = 5;
      const nextImage = (currentImage % totalImages) + 1;

      document.querySelectorAll(".imagenes").forEach(img => {
          img.classList.remove("imagen-activa");
      });

      document.querySelector(`.imagen${nextImage}`).classList.add("imagen-activa");

      currentImage = nextImage;

      setTimeout(changeImage, 3000);
  }

  changeImage();
});

// function buscarPelicula() {
//   const selectGenero = document.getElementById("selectGenero");
//   const selectedGenero = selectGenero.value;
  
//   const generoId = Object.keys(mapGenero).find(
//       key => mapGenero[key].toLowerCase() === selectedGenero.toLowerCase()
//   );

//   if (generoId) {
//       const peliculasFiltradas = peliculas.filter(pelicula =>
//           pelicula.genre_ids.includes(parseInt(generoId, 10))
//       );

//       if (peliculasFiltradas.length > 0) {
//           const peliculaAleatoria = peliculasFiltradas[
//               Math.floor(Math.random() * peliculasFiltradas.length)
//           ];

//           listaPelis.innerHTML = '';
//           mostrarPeliculaEnTarjeta(peliculaAleatoria);
//       } else {
//           alert("No hay películas disponibles para el género seleccionado.");
//       }
//   } else {
//       alert("Género no encontrado. Por favor, seleccione un género válido.");
//   }
// }
