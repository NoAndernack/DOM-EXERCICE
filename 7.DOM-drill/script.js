const ul = document.querySelector("ul");
const nodeUl = ul.childNodes;
console.log(nodeUl);

// ---------------------------------------------------------------------------------
for (let i = 0; i < nodeUl.length; i++) {
    if (nodeUl[i].nodeType === 1) {
        console.log(nodeUl[i]);
    }
}
console.log(nodeUl[11]);

// ---------------------------------------------------------------------------------

const fastAndFuriousElement = ul.childNodes[11];
if (fastAndFuriousElement !== ul.firstElementChild) {
    ul.insertBefore(fastAndFuriousElement, ul.firstElementChild);
}

// ---------------------------------------------------------------------------------

fastAndFuriousElement.classList.add("important");

// --------------------------------------------------------------------------------
const listItems = ul.getElementsByTagName("li");

for (let i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener("click", function () {
        if (this.classList.contains("important")) {
            alert(
                "The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family."
            );
        } else {
            alert(this.textContent);
        }
    });
}

// --------------------------------------------------------------------------------
const textUniques = [];

for (let i = 0; i < listItems.length; i++) {
    const textContent = listItems[i].textContent;

    if (textUniques.includes(textContent)) {
        listItems[i].remove();
    } else {
        textUniques.push(textContent);
    }
}

// ---------------------------------------------------------
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

document.body.addEventListener("keyup", function (event) {
    if (event.key === "r") {
        const otherListItems = Array.from(listItems).filter(item => item.textContent !== "Fast and Furious");
        shuffleArray(otherListItems);

        // Clear the existing list
        ul.innerHTML = "";

        // Add "Fast and Furious" back to the top
        ul.appendChild(fastAndFuriousElement);

        // Add the shuffled items back to the list
        otherListItems.forEach(item => ul.appendChild(item));
    }
});