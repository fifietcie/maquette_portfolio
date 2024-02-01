const coverUrl = "";
//va chercher les infos dans le DOM
const sliderHTML = document.querySelector("#slider");

// arrete le timer 
const stopTimer = () => {
clearInterval(timer)
}


const initSlider = (index) => {
  console.log(index);
  // créer button prev
  const prevBTN = document.createElement("div");
  prevBTN.id = "prevBTN";
  prevBTN.innerHTML = "<span><</span>";
  sliderHTML.append(prevBTN);
  prevBTN.addEventListener("click", () => {
    stopTimer();
    slider(index,"prev");
  });

  // créer button next
  const nextBTN = document.createElement("div");
  nextBTN.id = "nextBTN";
  nextBTN.innerHTML = "<span>></span>";
  sliderHTML.append(nextBTN);
  nextBTN.addEventListener("click", ()=> {
    stopTimer();
    slider(index,"next")});

  // je cree une première image d'arriere plan fixe
  const coverSlider = document.createElement("img");
  coverSlider.src = coverUrl + catalogue[index].cover;
  coverSlider.id = "coverSlider";
  sliderHTML.append(coverSlider);
  // je cree une deuxieme image supperposée destiné à l'effet(transform)
  const imgA = document.createElement("img");
  imgA.src = coverUrl + catalogue[index].cover;
  imgA.id = "imgA";
  sliderHTML.append(imgA);

  //Création d'un premier element texte
  const textesA = document.createElement("div");
  textesA.id = "textesA";
  sliderHTML.append(textesA);
  const pA1 = document.createElement("p");
  pA1.innerText = catalogue[index].titre;
  textesA.append(pA1);
  const pA2 = document.createElement("p");
  pA2.innerText = catalogue[index].artiste;
  textesA.append(pA2);
  //Création d'un deuxieme element texte
  const textesB = document.createElement("div");
  textesB.id = "textesB";
  sliderHTML.append(textesB);
  const pB1 = document.createElement("p");
  pB1.innerText = catalogue[index].titre;
  textesB.append(pB1);
  const pB2 = document.createElement("p");
  pB2.innerText = catalogue[index].artiste;
  textesB.append(pB2);
};
const nextSlider = (index) => {
  if (index < catalogue.length - 1) {
    index++;
  } else {
    index = 0;
  }
  document.querySelector("#coverSlider").src =
    coverUrl + catalogue[index].cover;
  // modifier le texte quand le slide change
  document.querySelector("#textesB p:first-child").innerText =
    catalogue[index].titre;
  document.querySelector("#textesB p:last-child").innerText =
    catalogue[index].artiste;
  // ajout du mouvement de droite gauche en suivant l'img
  document.querySelector("#imgA").classList.add("transSlider", "slideRight");
  document.querySelector("#textesA").classList.add("transSlider", "slideRight");
  setTimeout(() => {
    document.querySelector("#imgA").src =
      coverUrl + catalogue[index].cover;
    document.querySelector("#textesA p:first-child").innerText =
      catalogue[index].titre;
    document.querySelector("#textesA p:last-child").innerText =
      catalogue[index].artiste;
    document
      .querySelector("#imgA")
      .classList.remove("transSlider", "slideRight");
    document
      .querySelector("#textesA")
      .classList.remove("transSlider", "slideRight");
  }, 500);
};
const prevSlider = (index) => {
  if (index > 0) {
    index--;
  } else {
    index = -1;
  }
  document.querySelector("#coverSlider").src =
    coverUrl + catalogue[index].cover;
  // modifier le texte quand le slide change
  document.querySelector("#textesB p:first-child").innerText =
    catalogue[index].titre;
  document.querySelector("#textesB p:last-child").innerText =
    catalogue[index].artiste;
  // ajout du mouvement de droite gauche en suivant l'img
  document.querySelector("#imgA").classList.add("transSlider", "slideLeft");
  document.querySelector("#textesA").classList.add("transSlider", "slideLeft");

  setTimeout(() => {
    document.querySelector("#imgA").src =
      coverUrl + catalogue[index].cover;
    document.querySelector("#textesA p:first-child").innerText =
      catalogue[index].titre;
    document.querySelector("#textesA p:last-child").innerText =
      catalogue[index].artiste;
    document
      .querySelector("#imgA")
      .classList.remove("transSlider", "slideLeft");
    document
      .querySelector("#textesA")
      .classList.remove("transSlider", "slideLeft");
  }, 500);
};

const slider = (index, status = "init") => {
  // appeller que des fonctions dans un switch
  switch (status) {
    case "init":
      // fonction declarée plus haut
      initSlider(index);
      break;
    case "next":
      // fonction declarée plus haut
      nextSlider(index);
      break;
    case "prev":
      // fonction declarée plus haut
      prevSlider(index);
      break;
    default:
      break;
  }
};

const timer = setInterval(() => slider(index,"next"), 4000);


export { slider };
