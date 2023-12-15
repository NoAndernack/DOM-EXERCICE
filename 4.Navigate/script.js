const list = document.querySelector("ol");
const listOne = list.children[0];
const listLast = list.children[4];

function changePosition() {
    listOne.before(listLast)
 }
 changePosition()

//  _______________________________________



const h2SecondSection = document.querySelector('section:nth-child(2) h2');
    const h2ThirdSection = document.querySelector('section:nth-child(3) h2');

    const parentSecondSection = h2SecondSection.parentElement;
    const parentThirdSection = h2ThirdSection.parentElement;
    const p = parentSecondSection.children[1]


    parentThirdSection.insertBefore(h2SecondSection, h2ThirdSection);
    parentSecondSection.insertBefore(h2ThirdSection, p);

parentThirdSection.remove()