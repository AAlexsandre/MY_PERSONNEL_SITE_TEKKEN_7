let pseudoPlayer1 = new URL(document.location.href).searchParams.get("playerOnePseudo");
let pseudoPlayer2 = new URL(document.location.href).searchParams.get("playerTwoPseudo");

let tab = [pseudoPlayer1,pseudoPlayer2];

/**
 * This function takes the players' nicknames in the url and displays it on the screen 
 */
function DisplayPlayersPseudo() {
    for (let i = 0; i < tab.length; ++i) {
        create_the_elements_and_nodes(tab[i]);
    }
}


/**
 * This function create and add the nicknames in the element (section id=pseudos)
 * @param {String} data 
 */
function create_the_elements_and_nodes(data){

    let the_place_for_the_element = document.getElementById("pseudos");
    let new_p = document.createElement("p");
    let p_node = document.createTextNode(data);

    new_p.appendChild(p_node);
    the_place_for_the_element.appendChild(new_p);
}