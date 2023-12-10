class peliculaComedia {
    constructor(nombre, genero, subgenero, duracion, imagen) {
        this.nombre = nombre
        this.genero = genero
        this.subgenero = subgenero
        this.duracion = duracion
        this.imagen = imagen;
    }
}

const listaComedia = [
    new peliculaComedia("El dictador", "Comedia", "Comedia negra", "1h 23m", "https://pics.filmaffinity.com/El_dictador-138905408-large.jpg"),
    new peliculaComedia("El Gran Lebowski", "Comedia", "Independiente", "1h 57m", "https://www.aceprensa.com/wp-content/uploads/1998/06/el-gran-lebowsky.jpg"),
    new peliculaComedia("Pixeles", "Comedia", "Ciencia ficcion", "1h 46m", "https://m.media-amazon.com/images/M/MV5BMTIzNDYzMzgtZWMzNS00ODc2LTg2ZmMtOTE2MWZkNzIxMmQ0XkEyXkFqcGdeQXVyNjQ3MDg0MTY@._V1_FMjpg_UX1000_.jpg"),
    new peliculaComedia("Norbit", "Comedia", "Romance", "1h 48m", "https://es.web.img3.acsta.net/medias/nmedia/18/69/54/60/20056273.jpg"),
    new peliculaComedia("Piña express", "Comedia", "Acción", "1h 52m", "https://m.media-amazon.com/images/S/pv-target-images/dc859316b30fcf397b5822878c1f20046af4137d1d1812cd2a8a7c7b49c92e4c.jpg"),
    new peliculaComedia("Zoolander", "Comedia", "Drama", "1h 29m", "https://es.web.img3.acsta.net/medias/nmedia/18/71/01/85/20076456.jpg"),
]


class PeliculaDrama {
    constructor(nombre, genero, subgenero, duracion, imagen) {
        this.nombre = nombre
        this.genero = genero
        this.subgenero = subgenero
        this.duracion = duracion
        this.imagen = imagen;
    }
}

const listaDrama = [
    new PeliculaDrama("Forrest Gump", "Drama", "Romance", "2h 22m", "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"),
    new PeliculaDrama("Sueño de Fuga", "Drama", "Crimen", "2h 22m", "https://mx.web.img3.acsta.net/pictures/19/07/30/21/54/2985567.jpg"),
    new PeliculaDrama("La Lista de Schindler", "Drama", "Historia", "3h 15m", "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"),
    new PeliculaDrama("Una Mente Brillante", "Drama", "Biografía", "2h 15m", "https://es.web.img3.acsta.net/pictures/16/02/24/14/29/284758.jpg"),
    new PeliculaDrama("La Milla Verde", "Drama", "Fantasía", "3h 9m", "https://static.wikia.nocookie.net/cine/images/c/ce/Green_mile.jpg/revision/latest?cb=20121018232112"),
    new PeliculaDrama("En Busca de la Felicidad", "Drama", "Inspiracional", "1h 57m", "https://pics.filmaffinity.com/En_busca_de_la_felicidad-784018303-large.jpg")
]



class PeliculaTerror {
    constructor(nombre, genero, subgenero, duracion, imagen) {
        this.nombre = nombre
        this.genero = genero
        this.subgenero = subgenero
        this.duracion = duracion
        this.imagen = imagen;
    }
}

const listaTerror = [
    new PeliculaTerror("El Exorcista", "Terror", "Drama", "2h 2m", "https://www.ecartelera.com/carteles/5100/5147/001_m.jpg"),
    new PeliculaTerror("El Resplandor", "Terror", "Psicológico", "2h 26m", "https://es.web.img3.acsta.net/pictures/14/04/15/10/46/568345.jpg"),
    new PeliculaTerror("Halloween", "Terror", "Slasher", "1h 31m", "https://m.media-amazon.com/images/M/MV5BNzk1OGU2NmMtNTdhZC00NjdlLWE5YTMtZTQ0MGExZTQzOGQyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"),
    new PeliculaTerror("El Conjuro", "Terror", "Sobrenatural", "1h 52m", "https://static.wikia.nocookie.net/doblaje/images/e/eb/ElConjuroPoster.jpg/revision/latest?cb=20170907214450&path-prefix=es"),
    new PeliculaTerror("Pesadilla en la Calle Elm", "Terror", "Surreal", "1h 31m", "https://musicart.xboxlive.com/7/933c1200-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080")
]



class PeliculaThriller {
    constructor(nombre, genero, subgenero, duracion, imagen) {
        this.nombre = nombre
        this.genero = genero
        this.subgenero = subgenero
        this.duracion = duracion
        this.imagen = imagen;
    }
}

const listaThriller = [
    new PeliculaThriller("La Isla Siniestra", "Thriller", "Psicológico", "2h 18m", "https://musicart.xboxlive.com/7/7e811100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080"),
    new PeliculaThriller("Se7en", "Thriller", "Crimen", "2h 7m", "https://pics.filmaffinity.com/Seven_Se7en-498520078-large.jpg"),
    new PeliculaThriller("El Silencio de los Inocentes", "Thriller", "Suspenso", "1h 58m", "https://pics.filmaffinity.com/El_silencio_de_los_corderos-767447992-mmed.jpg"),
    new PeliculaThriller("Perdida", "Thriller", "Drama", "2h 29m", "https://pics.filmaffinity.com/Perdida-189954804-large.jpg"),
    new PeliculaThriller("Prisioneros", "Thriller", "Misterio", "2h 33m", "https://pics.filmaffinity.com/Prisioneros-721879978-large.jpg")
]




// function recomendarPelicula(genero) {
//     let recomendacion = "";

//     switch (genero.toLowerCase()) {
//         case "comedia":
//             const comediaAleatorio = listaComedia[parseInt(Math.random() * listaComedia.length)];
//             recomendacion = [comediaAleatorio];
//             break;
//         case "drama":
//             const dramaAleatorio = listaDrama[parseInt(Math.random() * listaDrama.length)];
//             recomendacion = [dramaAleatorio];
//             break;
//         case "terror":
//             const terrorAleatorio = listaTerror[parseInt(Math.random() * listaTerror.length)];
//             recomendacion = [terrorAleatorio];
//             break;
//         case "thriller":
//             const thrillerAleatorio = listaThriller[parseInt(Math.random() * listaThriller.length)];
//             recomendacion = [thrillerAleatorio];
//             break;
//         default:
//             recomendacion = [];
//     }

//     mostrarPeliculasEnTarjetas(recomendacion);
// }

function recomendarPelicula(genero) {
    const recomendacion = genero.toLowerCase() === "comedia" ? [listaComedia[Math.floor(Math.random() * listaComedia.length)]] :
                          genero.toLowerCase() === "drama" ? [listaDrama[Math.floor(Math.random() * listaDrama.length)]] :
                          genero.toLowerCase() === "terror" ? [listaTerror[Math.floor(Math.random() * listaTerror.length)]] :
                          genero.toLowerCase() === "thriller" ? [listaThriller[Math.floor(Math.random() * listaThriller.length)]] : []

    mostrarPeliculasEnTarjetas(recomendacion)
}
 //En este caso use el math.floor en lugar del parseInt para lograr un resultado aleatorio, no se bien cual es la diferencia

function ingresarGenero() {
    let generoPeli = document.querySelector("#inputGenero").value
    // if (generoPeli !==null) {  
    //     generoPeli = generoPeli.toLowerCase()
        generoPeli = generoPeli !== null ? generoPeli.toLowerCase() : null;
        if (generoPeli === "comedia" || generoPeli === "drama" || generoPeli === "terror" || generoPeli === "thriller") {
            recomendarPelicula(generoPeli)
            listaPlataformas()
        //     let respuesta = confirm("¿Quieres consultar por otro título?")
        //     if (respuesta === true) {
        //         ingresarGenero()
        //     } else {
        //         alert("A continuación podrás elegir un género y ver todas las películas disponibles dentro de el!")    
        //         }
            
         }
        else {
            alert("Ingresa un género válido (Comedia, Drama, Terror, Thriller)")
            
       }
        
}   


function listaPlataformas() {
    console.log("Puedes ver todos los títulos en las siguientes plataformas:")
    const plataformas = ["Netflix", "HBO", "Star+", "PrimeVideo"]  
    for (let i = 0; i < plataformas.length; i++) {
        console.log(i + 1, plataformas[i])
    }
}
//CREAR CSS PARA MOSTRAR LISTA


// ingresarGenero()



function agruparPeliculasPorGenero() {
    let genero = prompt("Ingresa un género (Comedia, Drama, Terror o Thriller) para ver las películas disponibles")

    if (genero === null) {alert("Función cancelada, serás redirigidx!")
        return        
}
    genero = genero.toLowerCase()
    let listaGenero

    switch (genero) {
        case "comedia":
            listaGenero = listaComedia
            break
        case "drama":
            listaGenero = listaDrama
            break
        case "terror":
            listaGenero = listaTerror
            break
        case "thriller":
            listaGenero = listaThriller
            break
        default:
            alert("Género no válido. Ingresa Comedia, Drama, Terror o Thriller.")
            agruparPeliculasPorGenero()
        return
    }

    
    let resultado = listaGenero.filter((pelicula) => pelicula.genero.toLowerCase() === genero)

    if (resultado.length > 0 && resultado !== null && genero !== null) {
        
     let nombresPeliculas = resultado.map((pelicula) => pelicula.nombre)
        
        
        alert("Películas disponibles en el género " + genero + ":\n" + nombresPeliculas.join("\n"))
        let respuesta = confirm("¿Quieres ver la lista de otro género?")
            if (respuesta === true) 
                agruparPeliculasPorGenero()
                else {
                     alert("Gracias por elegirnos!")
            }
    }      else {
         alert("Por favor, ingresa un genero válido! (Comedia, Drama, Terror, Thriller)")
    }
}


function mostrarPeliculasEnTarjetas(lista) {
    const contenedorTarjetas = document.getElementById("tarjetasPeliculas")
    contenedorTarjetas ?
        (contenedorTarjetas.innerHTML = "",
        lista.forEach((pelicula) => {
            const tarjeta = document.createElement("div")
            tarjeta.classList.add("pelicula-tarjeta")

            const imagen = document.createElement("img")
            imagen.src = pelicula.imagen
            imagen.alt = pelicula.nombre
            tarjeta.appendChild(imagen)

            const detalles = document.createElement("div")
            detalles.innerHTML = `<p><strong>Nombre:</strong> ${pelicula.nombre}</p>
            <p><strong>Género:</strong> ${pelicula.genero}</p>
            <p><strong>Subgénero:</strong> ${pelicula.subgenero}</p>
            <p><strong>Duración:</strong> ${pelicula.duracion}</p>`
            tarjeta.appendChild(detalles)

            contenedorTarjetas.appendChild(tarjeta)
        })) :
        console.error("No se encontró el contenedor de tarjetas (tarjetasPeliculas).")
}


document.addEventListener("DOMContentLoaded", function () {    
    const btnBuscar = document.getElementById("btnBuscar")
    btnBuscar.addEventListener("click", function () {
        ingresarGenero()
    })})

document.addEventListener("DOMContentLoaded", function () {    
         const inputGenero = document.querySelector("#inputGenero")
        inputGenero.addEventListener("keypress", function (event) {
            if (event.key === "Enter")
            ingresarGenero()
        })})

document.getElementById("btnRandom").addEventListener("click", function() {
    const generos = ["comedia", "drama", "terror", "thriller"]
    const generoAleatorio = generos[Math.floor(Math.random() * generos.length)]

    let peliculaAleatoria
    switch (generoAleatorio) {
        case "comedia":
            peliculaAleatoria = listaComedia[Math.floor(Math.random() * listaComedia.length)]
            break
        case "drama":
            peliculaAleatoria = listaDrama[Math.floor(Math.random() * listaDrama.length)]
            break
        case "terror":
            peliculaAleatoria = listaTerror[Math.floor(Math.random() * listaTerror.length)]
            break
        case "thriller":
            peliculaAleatoria = listaThriller[Math.floor(Math.random() * listaThriller.length)]
            break
        default:
        break
    }
    mostrarPeliculasEnTarjetas([peliculaAleatoria])
})




// filtrarPeliculasPorGenero()

// function buscarPelicula() {
//     let generoIngresado = document.getElementById("inputGenero").value

//     if (generoIngresado.trim() !== "") {
//         recomendarPelicula(generoIngresado)
//     } else {
//         alert("Ingresa un género válido en el campo de búsqueda.")
//     }
// }