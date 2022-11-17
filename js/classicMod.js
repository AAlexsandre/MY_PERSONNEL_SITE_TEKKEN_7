function toSend(){
    let addTo = document.getElementById("toSendResultPage");
    let newInput = document.createElement("input");
    newInput.setAttribute("type", "hidden");
    newInput.setAttribute("name", "pseudoPlayerOne");
    newInput.setAttribute("value", tab[0]);
    addTo.appendChild(newInput);
    
    addTo = document.getElementById("toSendResultPage");
    newInput = document.createElement("input");
    newInput.setAttribute("type", "hidden");
    newInput.setAttribute("name", "pseudoPlayerTwo");
    newInput.setAttribute("value", tab[2]);
    addTo.appendChild(newInput);
}

toSend();

/**
 * This function display all characters for the first player
 */
function displayAllCharactersP1(i) {
    let newImg;
    let id;

    if (i == characters.length) return;

    setTimeout(function () {
        newImg = document.createElement("img");
        newImg.setAttribute("src", characters[i].picture);
        newImg.setAttribute("id", "F" + characters[i].identifier);
        newImg.setAttribute("onclick", 'chooseP1(this)');
        id = document.getElementById("allCharactersP1");
        id.appendChild(newImg);
        displayAllCharactersP1(++i);
    }, 50);
}

displayAllCharactersP1(0);

/**
 * This function display all characters for the second player
 */
function displayAllCharactersP2(i) {
    let newImg;
    let id;

    if (i == characters.length) return;

    setTimeout(function () {
        newImg = document.createElement("img");
        newImg.setAttribute("src", characters[i].picture);
        newImg.setAttribute("id", "S" + characters[i].identifier);
        id = document.getElementById("allCharactersP2");
        newImg.setAttribute("onclick", 'chooseP2(this)');
        id.appendChild(newImg);
        displayAllCharactersP2(++i);
    }, 50);
}

displayAllCharactersP2(0);

/**
 * This function create a image and add the pseudos
 */
function addThePlayer() {
    let thePlaceForTheElement = document.getElementById("playerOne");
    let thePlaceForTheElement2 = document.getElementById("playerOneCharacterChoose");
    let pNode = document.createTextNode(tab[0]);
    sameThings(thePlaceForTheElement, thePlaceForTheElement2, pNode);

    thePlaceForTheElement = document.getElementById("playerTwo");
    thePlaceForTheElement2 = document.getElementById("playerTwoCharacterChoose");
    pNode = document.createTextNode(tab[2]);
    sameThings(thePlaceForTheElement, thePlaceForTheElement2, pNode);
}

/**
 * This function use the same caracters for the function "addThePlayer()"
 */
function sameThings(thePlaceForTheElement, thePlaceForTheElement2, pNode) {
    let newP = document.createElement("p");

    let newImg = document.createElement("img");
    newImg.setAttribute("src", "../source/question-mark-1544553868vD2.jpg");

    newP.appendChild(pNode);
    thePlaceForTheElement.appendChild(newP);
    thePlaceForTheElement2.appendChild(newImg);
    addTheCompter(thePlaceForTheElement);
}

addThePlayer();

function chooseP1(characterPicture) {
    let select = document.getElementById("playerOneCharacterChoose");
    removeAndAdd(select, characterPicture);
}

function chooseP2(characterPicture) {
    let select = document.getElementById("playerTwoCharacterChoose");
    removeAndAdd(select, characterPicture);
}


function removeAndAdd(select, characterPicture) {
    select.removeChild(select.lastChild);

    let newImg = document.createElement("img");
    newImg.setAttribute("src", characterPicture.src);
    select.appendChild(newImg);
}

function addTheCompter(select) {
    let newInput = document.createElement("input");
    newInput.setAttribute("type", "number");
    newInput.setAttribute("value", 0);
    newInput.setAttribute("min", 0);
    select.appendChild(newInput);

}