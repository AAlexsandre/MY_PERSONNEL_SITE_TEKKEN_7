/**
 * This function display all characters 
 */
function displayAllCharactersP1(i) {
    let newImg;
    let id;

    if (i == characters.length) return;

    setTimeout(function () {
        newImg = document.createElement("img");
        newImg.setAttribute("src", characters[i].picture);
        id = document.getElementById("allCharactersP1");
        id.appendChild(newImg);
        displayAllCharactersP1(++i);
    }, 50);
}

displayAllCharactersP1(0);

function displayAllCharactersP2(i) {
    let newImg;
    let id;

    if (i == characters.length) return;

    setTimeout(function () {
        newImg = document.createElement("img");
        newImg.setAttribute("src", characters[i].picture);
        id = document.getElementById("allCharactersP2");
        id.appendChild(newImg);
        displayAllCharactersP2(++i);
    }, 50);
}

displayAllCharactersP2(0);


function addThePlayer() {
    let the_place_for_the_element = document.getElementById("playerOneCharacterChoose");
    let pNode = document.createTextNode(tab[0]);
    sameThings(the_place_for_the_element,pNode);

    the_place_for_the_element = document.getElementById("playerTwoCharacterChoose");
    pNode = document.createTextNode(tab[2]);
    sameThings(the_place_for_the_element,pNode);
}

function sameThings(the_place_for_the_element,pNode){
    let newP = document.createElement("p");

    let newImg = document.createElement("img");
    newImg.setAttribute("src", "../source/question-mark-1544553868vD2.jpg");

    newP.appendChild(pNode);
    the_place_for_the_element.appendChild(newP);
    the_place_for_the_element.appendChild(newImg);
}

addThePlayer();