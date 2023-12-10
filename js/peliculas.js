const listaPelis = document.querySelector("#tarjetasPeliculas");

const peliculasPorPagina = 20;
let paginaActual = obtenerPaginaAleatoria();
const mapGenero = {
    28: "Acción",
    12: "Aventura",
    16: "Animacion",
    35: "Comedia",
    80: "Crimen",
    99: "Documental",
    18: "Drama",
    10751: "Familia",
    14: "Fantasia",
    36: "Historia",
    27: "Horror",
    10402: "Musica",
    9648: "Misterio",
    10749: "Romance",
    878: "Ciencia ficcion",
    10770: "Pelicula de TV",
    53: "Thriller",
    10752: "Guerra",
    37: "Western",
  }

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

function cargarPeliculasPopulares() {
  const url = `https://api.themoviedb.org/3/discover/movie?language=es-ES&page=${paginaActual}&sort_by=popularity.desc`;
  
  fetch(url, options)
      .then(response => response.json())
      .then(data => {
          const peliculas = data.results;
          window.peliculas = peliculas;

          mostrarPeliculas(peliculas);
      })
      .catch(err => console.error(err));
}

function cargarPeliculasMejorPuntuadas() {
  const url = 'https://api.themoviedb.org/3/movie/top_rated?language=es-ES&page=1';

  fetch(url, options)
    .then(response => response.json())
    .then(data => {
      const peliculas = data.results;
      window.peliculas = peliculas;

      mostrarPeliculas(peliculas);
    })
    .catch(err => console.error(err));
}


function cargarPeliculasMasNuevas() {
  const url = "https://api.themoviedb.org/3/movie/now_playing?language=es-ES&page=1"

  fetch(url, options)
    .then(response => response.json())
    .then(data => {
      const peliculas = data.results;
      window.peliculas = peliculas;

      mostrarPeliculas(peliculas);
    })
    .catch(err => console.error(err));
}


  function mostrarPeliculas(peliculas) {
    listaPelis.innerHTML = '';
  
    peliculas.forEach(pelicula => {
      mostrarPeliculaEnTarjeta(pelicula);
    });
  }
  

  function cambiarPagina(nuevaPagina) {
    paginaActual = nuevaPagina;
    cargarPeliculas();
  }

  function mostrarPeliculas(peliculas) {
    const contenedorPeliculas = document.getElementById("peliculasPorGeneroContainer");
  
    if (contenedorPeliculas) {
      contenedorPeliculas.innerHTML = "";
  
      peliculas.forEach(pelicula => {
      const tarjetaPelicula = document.createElement("div");
      tarjetaPelicula.classList.add("pelicula-tarjeta");
  
      const titulo = document.createElement("h2");
      titulo.innerText = pelicula.title;
      titulo.classList.add("titulo-pelicula");
  
      const contenedorImagen = document.createElement("div");
      contenedorImagen.classList.add("contenedor-imagen");
    
      const imagen = document.createElement("img");
      imagen.src = `https://image.tmdb.org/t/p/w500${pelicula.poster_path}`;
      imagen.alt = pelicula.title;

      const puntuacion = document.createElement("p");
      puntuacion.innerText = `Puntuación: ${pelicula.vote_average.toFixed(1)}`;
      puntuacion.classList.add("puntuacion");
  
      contenedorImagen.appendChild(imagen);
      contenedorImagen.appendChild(puntuacion);

      const contenidoTexto = document.createElement("div");
      contenidoTexto.classList.add("contenido-texto");
  
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
        botonLeerMas.classList.add('botonLeerMas')
      });
  
      contenidoTexto.appendChild(titulo);
      contenidoTexto.appendChild(sinopsisEtiqueta);
      contenidoTexto.appendChild(resumenResumido);
      contenidoTexto.appendChild(resumenCompleto);
      contenidoTexto.appendChild(botonLeerMas);
  
      tarjetaPelicula.appendChild(contenedorImagen);
      tarjetaPelicula.appendChild(contenidoTexto);

  
      contenedorPeliculas.appendChild(tarjetaPelicula);
    });
  } else {
    console.error("El contenedor de películas no se encontró.");
  }
}


  
  function cambiarPagina(nuevaPagina) {
    paginaActual = nuevaPagina;
    cargarPeliculas();
  }

document.addEventListener('DOMContentLoaded', () => {
    cargarPeliculas();
  });

  document.addEventListener('DOMContentLoaded', () => {
    cargarPeliculasPopulares(); 
    const btnPeliculasPopulares = document.querySelector("button:nth-child(1)");
    const btnPeliculasMejorPuntuadas = document.querySelector("button:nth-child(2)");
    const btnPeliculasMasNuevas = document.querySelector("button:nth-child(3)");

    btnPeliculasPopulares.addEventListener('click', cargarPeliculasPopulares);
    btnPeliculasMejorPuntuadas.addEventListener('click', cargarPeliculasMejorPuntuadas);
    btnPeliculasMasNuevas.addEventListener('click', cargarPeliculasMasNuevas);
});