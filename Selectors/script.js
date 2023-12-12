// 2.1 ---------------------------------------------------------------------

const elementImportant = document.querySelectorAll(".important");

elementImportant.forEach(function (element) {
    element.setAttribute('title', 'This is an important item.');
})
console.log(document.querySelectorAll(".important"))
// 2.2 -------------------------------------------------------------------------

const imgElement = document.querySelectorAll('img')
imgElement.forEach(img => {
    if (!img.classList.contains('important')) {
        img.style.display = 'none';
    }
})
console.log(imgElement)

// 2.3_--------------------------------------------

const para = document.querySelectorAll('p');

para.forEach((para, index) => {
    console.log(`paragraph ${index + 1}  ${para.className} : ${para.textContent}  `)
});

// 2.4---------------------------------------------------------------
function rand() {
    return Math.floor(Math.random() * 257)
}



para.forEach((para, index )=> {
    if (!para.classList.contains('important')) {
        const red = rand();
        const green = rand();
        const blue = rand();

        para.style.color = `rgb(${red}, ${green} , ${blue})`;
    }

})



