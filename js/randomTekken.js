/* GLOBAL VARIABLE */
let character;
let meterRandomPick = 1;
let meterP1 = 3;
let meterP2 = 3;
let y = 1;

/* PHASE ONE */
/*-----------*/

/**
 * This function takes the players' nicknames in the url and displays it on the screen 
 */
function playersPseudo() {
    let pseudoPlayer1 = new URL(document.location.href).searchParams.get("playerOnePseudo");
    let pseudoPlayer2 = new URL(document.location.href).searchParams.get("playerTwoPseudo");

    $("section header:first").text(pseudoPlayer1);
    $("section header:first").append("<input name=pseudoPlayerOne value=" + pseudoPlayer1 + ">");
    $("section header:first input").css("display", "none");

    $("section header:last").text(pseudoPlayer2);
    $("section header:last").append("<input name=pseudoPlayerTwo value=" + pseudoPlayer2 + ">");
    $("section header:last input").css("display", "none");

    $("section header").css("font-family", "Impact");

    while (y < 7) {
        character = Math.floor((Math.random() * 51));
        $("#randomPick" + y).append("<img src=../source/question-mark-1544553868vD2.jpg alt=?>");
        y++;
    }
}

/**
 * This function create squares
 */
function createSquare() {
    for (let i = 0; i < 7; i++) {
        $("#randomPick" + i).css("display", "inline-block");
        $("#randomPick" + i).css("border", "solid red");
    }
}

/**
 * This function choose randomly characters and display on screen
 */
function randomPick() {

    while (y > 0) {
        $("#randomPick" + y + " img").remove();
        y--;
    }
    while (meterRandomPick < 7) {
        character = Math.floor((Math.random() * 51));
        $("#randomPick" + meterRandomPick).append("<img src=" + characters[character].picture + " alt=" + characters[character].identifier +
            " id=" + characters[character].identifier + ">");

        meterRandomPick++;
    }

    if (meterRandomPick == 7) {
        $("<button id=endOfPhaseOne onclick=partOneRoundFight()>CONFIRM THE SELECTIONS</button>").replaceAll("aside button");
        $("aside").append("<h2>JOKERS PHASE</h2>");

        $("aside button").click(function () {
            $("aside #endOfPhaseOne").remove();

            $(".locationPlayerOne").off();
            $(".locationPlayerTwo").off();

            $("aside h2").remove();
        });
        removeJokersPlayerOne();
        removeJokersPlayerTwo();
    }
}

/**
 * This function change the character and remove the jokers for the player one
 */
function removeJokersPlayerOne() {
    $(".locationPlayerOne").click(function () {
        $(this).empty();
        character = Math.floor((Math.random() * 51));
        $(this).append("<img src=" + characters[character].picture + " alt=" + characters[character].identifier +
            " id=" + characters[character].identifier + ">");

        $(".jokerPlayerOne:last").remove();
        meterP1 = meterP1 - 1;
        if (meterP1 == 0) {
            $(".locationPlayerOne").off();
        }
    });
}

/**
 * This function change the character and remove the jokers for the player two
 */
function removeJokersPlayerTwo() {
    $(".locationPlayerTwo").click(function () {
        $(this).empty();
        character = Math.floor((Math.random() * 51));
        $(this).append("<img src=" + characters[character].picture + " alt=" + characters[character].identifier +
            " id=" + characters[character].identifier + ">");

        $(".jokerPlayerTwo:last").remove();
        meterP2 = meterP2 - 1;
        if (meterP2 == 0) {
            $(".locationPlayerTwo").off();
        }
    });
}

/**
 * This function create the input to the next phase
 */
function partOneRoundFight() {
    for (let i = 1; i <= 6; i++) {
        if (i < 4) {
            $("#randomPick" + i).append("<span>round " + i + "</span>");
            $("#randomPick" + i).append("<div id=checkboxBtn" + i + "></div>");
            $("#checkboxBtn" + i).append("<input type=checkbox name=randomPickPlayerOneRound" + i + ">");
            $("#checkboxBtn" + i).append("<div><span class=slide></span></div>");
        } else {
            $("#randomPick" + i).append("<span>round " + (i - 3) + "</span>");
            $("#randomPick" + i).append("<div id=checkboxBtn" + i + "></div>");
            $("#checkboxBtn" + i).append("<input type=checkbox name=randomPickPlayerTwoRound" + (i - 3) + ">");
            $("#checkboxBtn" + i).append("<div><span class=slide></span></div>");
        }

        $("#randomPick" + i).css("margin-bottom", "3em");
    }

    $(".locationPlayerOne, .locationPlayerTwo").css("text-align", "center");
    $(".locationPlayerOne label, .locationPlayerTwo label").css("font-family", "Impact");
    $("span").css("font-family", "Impact");
    $(".locationPlayerOne label, .locationPlayerTwo label").css("font-size", "1.5em");

    createTheSecondPhaseButton();
}

/**
 * This function create button to pass the second phase
 */
function createTheSecondPhaseButton() {
    $("aside").append("<button onclick=DisplayTheChampions()>PASS THE SECOND PHASE</button>");
}

/*-----------*/
/*-----------*/

/* PHASE TWO */
/*-----------*/
/**
 * This function displays all characters and the user can select any of them
 */
function DisplayTheChampions() {
    $(".jokerPlayerOne, .jokerPlayerTwo").remove();
    $("#structure section:first article:nth-child(4)").remove();
    $("#structure section:last article:nth-child(4)").remove();
    $("aside button").remove();

    for (let i = 0; i < 51; i++) {
        $("#displayCharactersPlayerOne").append("<img src=" + characters[i].picture + " alt=" + characters[i].identifier +
            " id=" + characters[i].identifier + ">");
        $("#displayCharactersPlayerTwo").append("<img src=" + characters[i].picture + " alt=" + characters[i].identifier +
            " id=" + characters[i].identifier + ">");
    }
    selectTheCharacterPlayerOne();
    selectTheCharacterPlayerTwo();
}


/**
 * This function places the chosen character for the player 1 in its reserved slot 
 */
function selectTheCharacterPlayerOne() {
    $("#displayCharactersPlayerOne img").click(function () {
        $(this).remove().appendTo("#pickPlayerOne");
        $("#displayCharactersPlayerOne img").off();
        removeTheCharacterPlayerOne();
        validPlayerOne();
    });
}

/**
 * This function removes the chosen character for the player 1 in its reserved slot 
 */
function removeTheCharacterPlayerOne() {
    $("#pickPlayerOne img").click(function () {
        $(this).remove().appendTo("#displayCharactersPlayerOne");
        selectTheCharacterPlayerOne();
        validPlayerOne();
    });
}
/**
 * This function places the chosen character for the player 2 in its reserved slot 
 */
function selectTheCharacterPlayerTwo() {
    $("#displayCharactersPlayerTwo img").click(function () {
        $(this).remove().appendTo("#pickPlayerTwo");
        $("#displayCharactersPlayerTwo img").off();
        removeTheCharacterPlayerTwo();
        validPlayerTwo();

    });
}

/**
 * This function removes the chosen character for the player 2 in its reserved slot 
 */
function removeTheCharacterPlayerTwo() {
    $("#pickPlayerTwo img").click(function () {
        $(this).remove().appendTo("#displayCharactersPlayerTwo");
        selectTheCharacterPlayerTwo();
        validPlayerTwo();
    });
}
/*-----------*/
/*-----------*/

/* PHASE THREE */
/*-----------*/

/**
 * This function create button when the first player user choose him character
 */
function validPlayerOne() {
    if (pickPlayerOne.childNodes.length == 1) {
        $("#displayCharactersPlayerOne").before("<button onclick=finalMatchsPlayerOne()> VALIDATE </button>");
    } else {
        $("#validYourSelectionPlayerOne button:first").remove();
    }

    $("button").css("margin", "1em 0 3em 1em");
}

/**
 * This function create button when the second player user choose him character
 */
function validPlayerTwo() {
    if (pickPlayerTwo.childNodes.length == 1) {
        $("#pickPlayerTwo").before("<button onclick=finalMatchsPlayerTwo()> VALIDATE </button>");
    } else {
        $("#validYourSelectionPlayerTwo button:first").remove();
    }

    $("button").css("margin", "1em 1em 3em 0");
}

/**
 * This function removes the character selection and creates 3 rounds as in the first game for the first player
 */
function finalMatchsPlayerOne() {
    $("#validYourSelectionPlayerOne button").remove();
    $("#pickPlayerOne img").off();
    $("#displayCharactersPlayerOne").remove();

    for (let i = 1; i <= 3; i++) {
        $("#validYourSelectionPlayerOne").append("<div id=round" + i + "PlayerOne>round" + i + "</div>");
        $("#validYourSelectionPlayerOne #round" + i + "PlayerOne").append("<div id=finalCheckboxBtn" + i + "></div>");
        $("#finalCheckboxBtn" + i).append("<input type=checkbox name=pickPlayerOneRound" + i + ">");
        $("#finalCheckboxBtn" + i).append("<div><span class=finalSlide></span></div>");
        $("#round" + i + "PlayerOne").css("padding", "1em 0 1.5em 1em");
    }

    $("#validYourSelectionPlayerOne div").css("font-family", "Impact");
    thirdPhase();
}
/**
 * This function removes the character selection and creates 3 rounds as in the first game for the second player
 */
function finalMatchsPlayerTwo() {
    $("#validYourSelectionPlayerTwo button").remove();
    $("#pickPlayerTwo img").off();
    $("#displayCharactersPlayerTwo").remove();
    for (let i = 4; i <= 6; i++) {
        $("#validYourSelectionPlayerTwo").append("<div id=round" + (i - 3) + "PlayerTwo>round" + (i - 3) + "</div>");
        $("#validYourSelectionPlayerTwo #round" + (i - 3) + "PlayerTwo").append("<div id=finalCheckboxBtn" + i + "></div>");
        $("#finalCheckboxBtn" + i).append("<input type=checkbox name=pickPlayerTwoRound" + (i - 3) + ">");
        $("#finalCheckboxBtn" + i).append("<div><span class=finalSlide></span></div>");
        $("#round" + (i - 3) + "PlayerTwo").css("padding", "1em 1em 1.5em 0");
        $("#validYourSelectionPlayerTwo #finalCheckboxBtn" + i).css("right", "10px");
    }

    $("#validYourSelectionPlayerTwo div").css("font-family", "Impact");
    thirdPhase();
}

/**
 * This function create the last button for the last phase
 */
function thirdPhase() {
    $("#finalPhase button").remove();
    if (pickPlayerOne.childNodes.length == 1 && pickPlayerTwo.childNodes.length == 1) {
        $("form").append("<aside id=finalPhase></aside>");
        $("#finalPhase").append("<button type=submit value=result>VALIDATION THIRD PHASE</button>");
        $("#finalPhase").css("text-align", "center");
    } else {
        $("#finalPhase button").remove();
    }

}