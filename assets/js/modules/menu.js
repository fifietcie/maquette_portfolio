// menu
function toggleMenu() {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("is-active");
}

window.addEventListener("DOMContentLoaded", (event) => {
  const burger = document.querySelector(".fa-bars");
  burger.addEventListener("click", toggleMenu);
});

// Assure-toi que cette fonction est appelée après que la structure HTML soit chargée.
function setupPortfolioMenu() {
  const portfolio = document.getElementById("portfolio");
  const portfolioMenu = document.getElementById("portfolio-menu");

  portfolio.addEventListener("click", function () {
    // Ceci va basculer l'affichage de la grille d'images
    portfolioMenu.style.display =
      portfolioMenu.style.display === "none" ? "block" : "none";
  });
  window.addEventListener("DOMContentLoaded", (event) => {
    const burger = document.querySelector(".fa-bars");
    burger.addEventListener("click", toggleMenu);
  });
}

//TRAITEMENT SLIDER PORTFOLIO

const portfolioBtn = document.querySelector("#portfolio");
const imgArray = [
  "assets/img/p1.jpg",
  "assets/img/p2.jpg",
  "assets/img/p3.jpg",
  "assets/img/p4.jpg",
  "assets/img/p5.jpg",
  "assets/img/p6.jpg",
  "assets/img/p7.jpg",
  "assets/img/p8.jpg",
]

let displayModalPort = false;
const modalPort = ()=>{
  if(!displayModalPort){
    const modal =document.createElement("div");
    modal.classList.add("modalPort");
    imgArray.forEach((elem,index)=>{
      const img = document.createElement("img")
      img.src = elem;
      modal.append(img);
      modal.classList.add("imgModal");
      img.addEventListener("click", ()=>{
        createPano(index)})
    }) 
    portfolioBtn.append(modal);
  } else {
    document.querySelector(".modalPort").remove() 
  }
  displayModalPort = !displayModalPort;
}

portfolioBtn.addEventListener("click",modalPort)

// Fonction qui sera appelée au scroll
function onScroll() {
  let nav = document.querySelector(".navbar-fixed-top"); // Remplace par le sélecteur approprié pour ta navbar
  let section1 = document.getElementById("sec1"); // Assure-toi que tu as un élément avec l'ID 'sec1'

  // Si l'un des éléments n'est pas trouvé, on ne fait rien
  if (!nav || !section1) return;

  // Ici on vérifie si le scroll a atteint la position de la section 1
  let section1Top = section1.offsetTop - nav.offsetHeight; // On soustrait la hauteur de la navbar pour un changement juste avant d'atteindre la section

  if (window.scrollY >= section1Top) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
}

// On attache l'événement de scroll à la fenêtre et on lui associe notre fonction
window.addEventListener("scroll", onScroll);

export { setupPortfolioMenu };
export { toggleMenu };
export { onScroll };
export { modalPort };

