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
 * This function create a image and add the pseudos
 */
function addThePlayer() {
    let thePlaceForTheElement = document.getElementById("playerOne");
    let pNode = document.createTextNode(tab[0]);
    sameThings(thePlaceForTheElement, pNode);

    thePlaceForTheElement = document.getElementById("playerTwo");
    pNode = document.createTextNode(tab[2]);
    sameThings(thePlaceForTheElement, pNode);
}

/**
 * This function use the same caracters for the function "addThePlayer()"
 */
function sameThings(thePlaceForTheElement, pNode) {
    let newP = document.createElement("p");

    newP.appendChild(pNode);
    thePlaceForTheElement.appendChild(newP);
}

addThePlayer();


const myInputP1 = document.getElementById("my-inputP1");
function stepperP1(btn){
    let id = btn.getAttribute("id");
    let min = myInputP1.getAttribute("min");
    let max = myInputP1.getAttribute("max");
    let step = myInputP1.getAttribute("step");
    let val = myInputP1.getAttribute("value");
    let calcStep = (id == "incrementP1" || id == "incrementP2") ? (step*1) : (step * -1);
    let newValue = parseInt(val) + calcStep;

    if(newValue >= min && newValue <= max){
        myInputP1.setAttribute("value", newValue);
    }
}

const myInputP2 = document.getElementById("my-inputP2");
function stepperP2(btn){
    let id = btn.getAttribute("id");
    let min = myInputP2.getAttribute("min");
    let max = myInputP2.getAttribute("max");
    let step = myInputP2.getAttribute("step");
    let val = myInputP2.getAttribute("value");
    let calcStep = (id == "incrementP2") ? (step*1) : (step * -1);
    let newValue = parseInt(val) + calcStep;

    if(newValue >= min && newValue <= max){
        myInputP2.setAttribute("value", newValue);
    }
}