async function registrarUsuario() {
  const { value: nombreUsuario } = await Swal.fire({
    title: "Nombre de Usuario",
    input: "text",
    inputLabel: "Nombre de Usuario",
    inputPlaceholder: "Ingrese su nombre de usuario",
    inputAttributes: {
      required: true
    }
  });

  const { value: email } = await Swal.fire({
    title: "Email",
    input: "email",
    inputLabel: "Su dirección de email",
    inputPlaceholder: "Ingrese su dirección de email",
    inputAttributes: {
      required: true
    }
  });

  const { value: contraseña } = await Swal.fire({
    title: "Contraseña",
    input: "password",
    inputLabel: "Contraseña",
    inputPlaceholder: "Ingrese su contraseña",
    inputAttributes: {
      required: true
    }
  });

  const { value: generoFav } = await Swal.fire({
    title: "Género Favorito",
    input: "select",
    inputOptions: {
      accion: "Acción",
      animacion: "Animación",
      aventura: "Aventura",
      cienciaFiccion: "Ciencia Ficción",
      comedia: "Comedia",
      crimen: "Crimen",
      documental: "Documental",
      drama: "Drama",
      familia: "Familia",
      fantasía: "Fantasía",
      guerra: "Guerra",
      historia: "Historia",
      horror: "Horror",
      musica: "Música",
      misterio: "Misterio",
      peliculaTV: "Pelicula de TV",
      romance: "Romance",
      thriller: "Thriller",
      western: "Western",
    },
    inputPlaceholder: "Seleccione su género favorito",
    showCancelButton: true,
    inputValidator: (value) => {
      return new Promise((resolve) => {
        if (value) {
          resolve();
        } else {
          resolve("Debe seleccionar su género favorito");
        }
      });
    }
  });

  if (nombreUsuario && email && contraseña && generoFav) {
    const usuario = {
      nombreUsuario: nombreUsuario,
      email: email,
      contraseña: contraseña,
      generoFav: generoFav
    };
    const usuarioJSON = JSON.stringify(usuario);
    localStorage.setItem("usuarioRegistrado", usuarioJSON);
    Swal.fire("Usuario registrado con éxito");
  }
}


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