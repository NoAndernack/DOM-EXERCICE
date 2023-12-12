

// function rand() {
//     return Math.floor(Math.random() * 257);
// }

// const learners = [
//     { name: "Noé Andernack" },
//     { name: "Ugur Firat" },
//     { name: "Huseyin Sasmaz" },
// ];

// const article = document.querySelector('article');

// learners.forEach(learner => {
//     const section = document.createElement('section');
//     section.classList.add("Exercice");

//     const paragraphe = document.createElement('p');
//     paragraphe.textContent = `${learner.name} `;

//     const color = `rgb(${rand()}, ${rand()}, ${rand()})`;
//     paragraphe.style.backgroundColor = color;

//     section.appendChild(paragraphe);
//     article.appendChild(section);
// });
// ----------------------------------------------------------------------------------------------
// function rand() {
//     return Math.floor(Math.random() * 257);
// }

// const learners = [
//     { name: "Noé Andernack" },
//     { name: "Ugur Firat" },
//     { name: "Huseyin Sasmaz" },
// ];

// const article = document.querySelector('article');

// learners.forEach(learner => {
//     const section = document.createElement('section');
//     section.classList.add("Exercice");

//     const paragraphe = document.createElement('p');
//     paragraphe.textContent = `${learner.name} `;

//     const backgroundColor = `rgb(${rand()}, ${rand()}, ${rand()})`;
//     paragraphe.style.backgroundColor = backgroundColor;

//     // Choix de la couleur du texte en fonction de la luminosité de la couleur de fond
//     paragraphe.style.color = isLightColor(backgroundColor) ? 'black' : 'white';

//     section.appendChild(paragraphe);
//     article.appendChild(section);
// });

// function isLightColor(color) {
//     const rgb = color.match(/\d+/g);
//     const luminance = (parseInt(rgb[0]) * 0.299 + parseInt(rgb[1]) * 0.587 + parseInt(rgb[2]) * 0.114) / 255;
//     return luminance > 0.5;}


//     ----------------------------------------------------------------------------
// function randH() {
//     return Math.floor(Math.random() * 360);
// }
// function randS() {
//     return Math.floor(Math.random() * 100);
// }
// function randL() {
//     return Math.floor(Math.random() * 100);
// }


const learners = [
    { name: "Noé Andernack" },
    { name: "Ugur Firat" },
    { name: "Huseyin Sasmaz" },
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Randomly order the learners array
const shuffledLearners = shuffleArray([...learners]);

const article = document.querySelector('article');

shuffledLearners.forEach(learner => {
    const section = document.createElement('section');
    section.classList.add("Exercice");

    const paragraphe = document.createElement('p');
    paragraphe.textContent = `${learner.name} `;
   
let randH = Math.floor(Math.random() * 360);
let randS = Math.floor(Math.random() * 100);
let randL= Math.floor(Math.random() * 100);
    paragraphe.style.backgroundColor = "hsl(" + randH+", "+ randS+"%, "+ randL+"%)"
    let lumi = randL
   

    // Choix de la couleur du texte en fonction de la luminosité de la couleur de fond
    paragraphe.style.color = lumi > 50 ? 'black' : 'white';

    section.appendChild(paragraphe);
    article.appendChild(section);
});


    // ----------------------------------------------------------------------------
