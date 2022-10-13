/**
 * This function takes the players' nicknames in the url and displays it on the screen 
 */
function DisplayPlayersPseudo() {
    let pseudoPlayer1 = new URL(document.location.href).searchParams.get("playerOnePseudo");
    let pseudoPlayer2 = new URL(document.location.href).searchParams.get("playerTwoPseudo");

    $("section header").append("<p>"+pseudoPlayer1+"</p>");
    $("section header").append("<p>"+pseudoPlayer2+"</p>");
}