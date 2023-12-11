


 document.title = "Modifying the DOM";

console.log(document.title);

document.body.style.backgroundColor = randomColor();

function rand() {
    return Math.floor(Math.random() * 257);
}

function randomColor() {
    const red = rand();
    const green = rand();
    const blue = rand();

    return `rgb(${red}, ${green}, ${blue})`;
}

const child2 = document.body;


for(const child of child2.children) {
    console.log(child)
}



