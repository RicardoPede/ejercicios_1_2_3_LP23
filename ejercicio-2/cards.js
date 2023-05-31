const listado = [
    {
        titulo: "GOKU",
        descripcion: "Fiel a su raza, Goku posee un espíritu combativo sumamente marcado, y es incapaz de resistirse a pelear con alguien que le parezca fuerte aun en los momentos más inoportunos. Es extremadamente competitivo y entrena constantemente, ya que nunca está satisfecho con su fuerza actual y siempre busca ir más allá.",
        imagen_src: "https://phantom-marca.unidadeditorial.es/395fb9e7fc8446fa08d22d50739a2ca1/resize/1200/f/jpg/assets/multimedia/imagenes/2023/05/09/16836279502970.jpg",
    },
    {
      titulo: "VEGETA",
      descripcion: "Vegeta es el príncipe de una raza guerrera extraterrestre conocida como los Saiyajin. Es extremadamente arrogante, orgulloso y trabajador; constantemente se refiere a su herencia y estatus real a lo largo de la serie.",
      imagen_src: "https://i.blogs.es/5f3997/dragon-ball-todo-lo-que-sabemos-sobre-la-madre-de-vegeta-la-reina-de-los-saiyajin/1366_2000.jpeg",
    },
    {
      titulo: "GOHAN",
      descripcion: "Gohan es un joven bastante tímido desde su infancia, con carácter bondadoso (inculcado por sus padres) y su inteligencia lo destacan por sobre el resto de los personajes de la serie.",
      imagen_src: "https://www.cinepremiere.com.mx/wp-content/uploads/2022/07/gohan-dragon-ball-super-super-hero-doblaje-latino.jpg",
    },
  ];
  
  let main = document.getElementById("main");
  
  main.setAttribute('class', 'container d-flex flex-column flex-md-row gap-3');
  
  listado.map((item) => {
    main.insertAdjacentHTML(
      `beforeend`,
      `<div class="card w-100">
          <img src="${item.imagen_src}" class="card-img-top" alt="imagen">
          <div class="card-body">
              <h5 class="card-title">${item.titulo}</h5>
              <p class="card-text">${item.descripcion}</p>
          </div>
      </div>    
      `
    );
  });