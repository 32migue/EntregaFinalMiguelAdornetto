const generosContainer = document.getElementById("generosContainer");

const generosData = [
    { nombre: "Acción", imagen: "https://as01.epimg.net/epik/imagenes/2019/06/03/portada/1559573314_873311_1559575720_noticia_normal_recorte1.jpg" },
    { nombre: "Aventura", imagen: "https://hips.hearstapps.com/hmg-prod/images/la-momia-1587374753.jpg" },
    { nombre: "Animación", imagen: "https://media.revistagq.com/photos/5d2f0d6e987c410008631535/master/pass/del%20reves.jpg" },
    { nombre: "Comedia", imagen: "https://img.mensxp.com/media/content/2017/Jul/most-offensive-comedy-movies-you-cant-afford-to-miss-1400x653-1500459077.jpg?w=656&h=432&cc=1" },
    { nombre: "Crimen", imagen: "https://static.stacker.com/s3fs-public/2022-12/goodfellas-cast.jpg" },
    { nombre: "Documental", imagen: "https://www.sentinelassam.com/wp-content/uploads/2019/01/film-1920x722-1476896744-1-840x420.jpg" },
    { nombre: "Drama", imagen: "https://media.glamour.com/photos/5ec2e91dccfbc8c1a8fe8cbf/master/w_320%2Cc_limit/MSDTITA_FE057.jpg" },
    { nombre: "Familia", imagen: "https://www.adslzone.net/app/uploads-adslzone.net/2020/06/Tu-a-Londres-y-yo-a-California.jpg" },
    { nombre: "Fantasía", imagen: "https://images.squarespace-cdn.com/content/v1/5bd0d577755be21b6c237d35/1621523591644-0D5NYYII77TUBAZF6KAN/LordOftheRingsTheTwoTowersPintrest.jpg" },
    { nombre: "Historia", imagen: "https://images.pagina12.com.ar/styles/focal_3_2_470x313/public/media/articles/74803/joaquin-20crowe-20web.jpeg?h=8651250a&itok=UEfa1TMY" },
    { nombre: "Horror", imagen: "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-06/scariest-horror-movies-it-stephen-king-2x1-bn-220617-e38851.jpg" },
    { nombre: "Misterio", imagen: "https://people.com/thmb/9fOQTvrvpmv5LlcwMoULKyg9hJo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(399x0:401x2)/memento-film-800-f052d4cb69b04fc08019adf53eee87ca.jpg" },
    { nombre: "Romance", imagen: "https://estacionk2.com/wp-content/uploads/2022/03/lA-LA-LAND.jpg" },
    { nombre: "Ciencia Ficción", imagen: "https://images.bauerhosting.com/legacy/media/5ece/bf26/1175/9fcb/d1d6/6dc5/main-2001.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80 "},
    { nombre: "Guerra", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQng-hknNjEzXnVyv7cfkgF2T3e-xdmYJcpag&usqp=CAU" },
    { nombre: "Western", imagen: "https://imgix.ranker.com/list_img_v2/17536/2817536/original/historically-inaccurate-western-movie-tropes?fit=crop&fm=pjpg&q=80&dpr=2&w=1200&h=720" }
];

function obtenerParametroDeConsulta(nombre) {
    const urlParams = new URLSearchParams(window.location.search);
    const valor = urlParams.get(nombre);
    console.log(`${nombre}: ${valor}`); 
    return valor;
}

function cargarPeliculasPorGenero(event) {
    const genero = event.currentTarget.dataset.genero;
    if (genero) {
        const apiKey = "8a3bc1a1e5e61eee32b5e00e5e77c4f8";
        const randomPage = Math.floor(Math.random() * 10) + 1;
        const url = `https://api.themoviedb.org/3/discover/movie?language=es-ES&with_genres=${genero}&api_key=${apiKey}&page=${randomPage}&sort_by=popularity.desc`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(`Genero: ${genero}`);
                console.log("Data:", data);
                const peliculas = data.results.slice(0, 10); 
                mostrarPeliculas(peliculas);
            })
            .catch(error => console.error(error));
    }
}

function mostrarPeliculas(peliculas) {
    const contenedorPeliculas = document.getElementById("peliculasPorGeneroContainer");
    contenedorPeliculas.innerHTML = "";
  
    peliculas.forEach(pelicula => {
      const tarjetaPelicula = document.createElement("div");
      tarjetaPelicula.classList.add("pelicula-tarjeta");
  
      const titulo = document.createElement("h2");
      titulo.innerText = pelicula.title;
  
      const imagen = document.createElement("img");
      imagen.src = `https://image.tmdb.org/t/p/w500${pelicula.poster_path}`;
      imagen.alt = pelicula.title;
  
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
      });
  
      contenidoTexto.appendChild(titulo);
      contenidoTexto.appendChild(sinopsisEtiqueta);
      contenidoTexto.appendChild(resumenResumido);
      contenidoTexto.appendChild(resumenCompleto);
      contenidoTexto.appendChild(botonLeerMas);
  
      tarjetaPelicula.appendChild(imagen);
      tarjetaPelicula.appendChild(contenidoTexto);
  
      contenedorPeliculas.appendChild(tarjetaPelicula);
    });
  }
function crearTarjetaGenero(genero) {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("genero-tarjeta");

    const nombre = document.createElement("h2");
    nombre.innerText = genero.nombre;

    const enlaceGenero = document.createElement("a");
    enlaceGenero.href = "#";
    enlaceGenero.classList.add("enlaceGenero");
    enlaceGenero.dataset.genero = genero.nombre;

    enlaceGenero.addEventListener('click', cargarPeliculasPorGenero);

    enlaceGenero.appendChild(nombre);

    tarjeta.style.backgroundImage = `url('${genero.imagen}')`;

    tarjeta.appendChild(enlaceGenero);
    generosContainer.appendChild(tarjeta);
}

generosData.forEach(crearTarjetaGenero);