function headerMobile() {
  const burgerEl = document.querySelector(".header__burger-img");
  const windowEl = document.querySelector(".burger__window");
  // cuando se haga click, la ventana cambia de display a heredar comportamiento que trae
  burgerEl.addEventListener("click", () => {
    windowEl.style.display = "inherit";
  });
  //   cuando se haga click en la cruz la ventana se cierra
  const closeEl = document.querySelector(".burger-window__close");
  closeEl.addEventListener("click", () => {
    windowEl.style.display = "";
    // al ponerle un string vacio hereda la que tenia antes,none
  });
}
// va a llegar el elemento desde el js del main, va a ser la section header
function headerComponent(el) {
  // creo un div y le agrego el componente html
  const headerEl = document.createElement("div");
  headerEl.innerHTML = `<header class="header">
  <a href="./index.html" class="header__link-home">
    <img src="./images/logo.png" alt="Logo" class="header__logo" />
  </a>
  <div class="header__desktop-menu">
    <nav class="header__desktop-nav">
      <a href="./portfolio.html" class="header__desktop-link">Portfolio</a>
      <a href="./servicios.html" class="header__desktop-link">Servicios</a>
      <a href="./contacto.html" class="header__desktop-link">Contacto</a>
    </nav>
  </div>
  <div class="header__burger-menu">
    <img src="./images/burger.svg" alt="menu" class="header__burger-img">
    <div class="burger__window">
      <div class="burger-window__close-container">
        <img src="./images/Vector.png" alt="" class="burger-window__close">
      </div>
      <div class="burger-window__nav">
        <a href="./portfolio.html" class="burger-window__link">Portfolio</a>
        <a href="./servicios.html" class="burger-window__link">Servicios</a>
        <a href="./contacto.html" class="burger-window__link">Contacto</a>
      </div>
    </div>
  </div>
</header>`;
  // a el, section le apendeo el componente, ya con el evento, desde el main src, proviene el,
  el.appendChild(headerEl);
}
