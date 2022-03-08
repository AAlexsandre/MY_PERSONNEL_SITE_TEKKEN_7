let loading = 0;
let intervalLoading = setInterval(loadingBeforeTheResult, 250);

$("p").css("font-family", "Impact");
$("p").css("font-size", "1.5em");

/**
 * This function creates a loading bar after the loading is finished, everything is removed
 */
function loadingBeforeTheResult() {
    if (loading < 100) {
        loading += 5;
        $("p").text(loading + "%");
    } else {
        window.clearInterval(intervalLoading);
        $("main *").remove();
        determinateTheWinner();
    }
}

function determinateTheWinner() {
    let tabPlayers = [];
    let pseudoP1 = new URL(document.location.href).searchParams.get("pseudoPlayerOne");
    let pseudoP2 = new URL(document.location.href).searchParams.get("pseudoPlayerTwo");

    tabPlayers.push(pseudoP1);
    tabPlayers.push(pseudoP2);

    let firstPhasePlayerOneRound1 = new URL(document.location.href).searchParams.get("randomPickPlayerOneRound1");
    let firstPhasePlayerOneRound2 = new URL(document.location.href).searchParams.get("randomPickPlayerOneRound2");
    let firstPhasePlayerOneRound3 = new URL(document.location.href).searchParams.get("randomPickPlayerOneRound3");

    let firstPhasePlayerTwoRound1 = new URL(document.location.href).searchParams.get("randomPickPlayerTwoRound1");
    let firstPhasePlayerTwoRound2 = new URL(document.location.href).searchParams.get("randomPickPlayerTwoRound2");
    let firstPhasePlayerTwoRound3 = new URL(document.location.href).searchParams.get("randomPickPlayerTwoRound3");

    let secondPhasePlayerOneRound1 = new URL(document.location.href).searchParams.get("pickPlayerOneRound1");
    let secondPhasePlayerOneRound2 = new URL(document.location.href).searchParams.get("pickPlayerOneRound2");
    let secondPhasePlayerOneRound3 = new URL(document.location.href).searchParams.get("pickPlayerOneRound3");

    let secondPhasePlayerTwoRound1 = new URL(document.location.href).searchParams.get("pickPlayerTwoRound1");
    let secondPhasePlayerTwoRound2 = new URL(document.location.href).searchParams.get("pickPlayerTwoRound2");
    let secondPhasePlayerTwoRound3 = new URL(document.location.href).searchParams.get("pickPlayerTwoRound3");

    let compteurP1 = 0;
    let compteurP2 = 0;

    let resultForThePlayerOne = [firstPhasePlayerOneRound1, firstPhasePlayerOneRound2, firstPhasePlayerOneRound3,
        secondPhasePlayerOneRound1, secondPhasePlayerOneRound2, secondPhasePlayerOneRound3];

    let resultForThePlayerTwo = [firstPhasePlayerTwoRound1, firstPhasePlayerTwoRound2, firstPhasePlayerTwoRound3,
        secondPhasePlayerTwoRound1, secondPhasePlayerTwoRound2, secondPhasePlayerTwoRound3];


    for (let i = 0; i < resultForThePlayerOne.length; i++) {
        if (resultForThePlayerOne[i] != null) {
            compteurP1++;
        }
    }
    for (let i = 0; i < resultForThePlayerTwo.length; i++) {
        if (resultForThePlayerTwo[i] != null) {
            compteurP2++;
        }
    }
    showTheResult(tabPlayers[0], tabPlayers[1], compteurP1, compteurP2);


}

function showTheResult(pseudoP1, pseudoP2, compteurP1, compteurP2) {
    $("main").before("<h2>THE RESULT</h2>");
    $("main h2").css("letter-spacing", "3px");
    $("main").append("<section></section> <section></section>");
    createButton();

    if (compteurP1 > compteurP2) {
        $("main section:first").append("<h3>" + pseudoP1 + "</h3>");
        $("main section:first").append("<img src=../source/youWin.png>");

        $("main section:last").append("<h3>" + pseudoP2 + "</h3>");
        $("main section:last").append("<img src=../source/youLose.png>");
        localSave(pseudoP1);

    } else if (compteurP1 < compteurP2) {
        $("main section:first").append("<h3>" + pseudoP2 + "</h3>");
        $("main section:first").append("<img src=../source/youWin.png>");

        $("main section:last").append("<h3>" + pseudoP1 + "</h3>");
        $("main section:last").append("<img src=../source/youLose.png>");
        localSave(pseudoP2);

    } else {
        $("main section:first").append("<h3>" + pseudoP2 + "</h3>");
        $("main section:first").append("<img src=../source/draw.png>");

        $("main section:last").append("<h3>" + pseudoP1 + "</h3>");
        $("main section:last").append("<img src=../source/draw.png>");
        localSave(pseudoP1, pseudoP2);
    }

    $("main").css("display", "grid");
    $("main").css("grid-template-columns", "50% 50%");
    $("main section").css("display", "flex");
    $("main section").css("flex-direction", "column");
}

function createButton() {
    $("main").after("<aside><button onclick=Tekken.html><a href=Tekken.html>RETURN THE HOME PAGE</button></aside>");

    $("aside").css("text-align", "center");
    $("button").css("margin", "3em");

    $("button a").css("font-family", "Impact");
    $("button a").css("color", "white");
}

function localSave(pseudoP1, pseudoP2) {
    $("aside").append("<div></div>");
    $("aside div").append("<table></table>");
    $("table").append("<tr><th>PSEUDO</th><th>NUMBERS OF WINS</th></tr>");

    $("table").append("<tr><td>jackbest007</td><td>8</td></tr>");   
    $("table").append("<tr><td>ElSuano</td><td>5</td></tr>");   
    
    $("table").css("border-top", "solid red");
    $("table").css("border-bottom", "solid red");
    $("table").css("border-radius", "0");
    $("table").css("padding", "20px 0 20px 0");
    $("table").css("position", "absolute");

    $("aside div").css("margin-top", "2em");
    $("aside div").css("display", "flex");
    $("aside div").css("justify-content", "center");


    $("table th, table td").css("border", "solid red");
}