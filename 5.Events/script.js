const _initTime = Date.now();

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + "s";
};

const clickOnSquare = (e) => {
  console.log(e.target.classList[1]);
  console.log(getElapsedTime());
};

const actionSquares = document.querySelectorAll(".actionsquare");
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener("click", clickOnSquare);
}

// ---------------------------------------------------------------------------
// Attend que le document HTML soit complètement chargé
document.addEventListener("DOMContentLoaded", function () {
  // Sélectionne l'élément qui contiendra les carrés affichés
  const displaySquareWrapper = document.querySelector(
    ".displayedsquare-wrapper"
  );
  const logList = document.querySelector("ul");

  // Fonction pour créer et ajouter un nouveau carré
  function createAndAppendSquare(color) {
    // Crée un nouvel élément <div> avec la classe .displayedsquare et la couleur
    const newSquare = document.createElement("div");
    newSquare.classList.add("displayedsquare", color);
    const newLog = document.createElement("li");
    newLog.innerText = getElapsedTime();

    // Ajoute le nouveau carré à la section .displayedsquare-wrapper
    displaySquareWrapper.appendChild(newSquare);
    logList.appendChild(newLog);
  }

  // Sélectionne tous les carrés d'action
  const actionSquares = document.querySelectorAll(".actionsquare");

  // Ajoute un écouteur de clic à chaque carré d'action
  for (let actionSquare of actionSquares) {
    actionSquare.addEventListener("click", function (e) {
      // Récupère la couleur du carré d'action cliqué
      const color = e.target.classList[1];

      // Appelle la fonction pour créer et ajouter un nouveau carré avec la même couleur
      createAndAppendSquare(color);
    });
  }
});

// const originalSection = document.querySelector(".actionsquare-wrapper");
// const newSection = document.querySelector(".displayedsquare-wrapper")

// function newSquares (){
//   const newSquare = document.createElement("div")

//   newSection.appendChild(newSquare)}
// --------------------------------------------------------------------------------------
function rand() {
  return Math.floor(Math.random() * 256);
}

document.body.addEventListener("keydown", function (event) {
  const body = document.body;

  if (event.keyCode === 32) {
    const red = rand();
    const green = rand();
    const blue = rand();

    const rgb = `rgb(${red},${green},${blue})`;
    body.style.backgroundColor = rgb;
    const logList = document.querySelector("ul");
    const newLog = document.createElement("li");
    newLog.innerText = getElapsedTime();
    logList.appendChild(newLog);
  }
});
//---------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  document.body.addEventListener("keypress", function (event) {
    if (event.key === "l") {
      const myList = document.querySelector("ul");
      console.log(myList);
      while (myList.firstChild) {
        myList.removeChild(myList.firstChild);
      }
    }
  });

  ////----------------------------------------------------------------------------------------

  document.body.addEventListener("keydown", function (event) {
    if (event.key === "s") {
      const displaySquareWrapper = document.querySelector(
        ".displayedsquare-wrapper"
      );

      while (displaySquareWrapper.firstChild) {
        displaySquareWrapper.removeChild(displaySquareWrapper.firstChild);
      }
    }
  });
  // ---------------------------------------------------
  newSquare.addEventListener("click", function () {
    const squareColor = newSquare.style.backgroundColor;
    alert("Square color: " + squareColor);
  });
});
document
  .querySelector(".displayedsquare-wrapper")
  .addEventListener("click", (e) => {
    if (e.target.classList.contains("displayedsquare")) {
      const color = e.target.classList[1];
      alert(`Couleur du carré : ${color}`);
    }
  });

