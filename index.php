<?php

    //Include the PHP functions to be used on the page 
   include('common.php'); 
	
    //Output header and navigation 
    outputHeader("TWINS - Home");
    
?>

    <!--Main element of index page starts here-->
    <div id="main">

        <form id="button-form" action="login.php">
            <br><button type="submit">Play</button>
        </form>

    </div>


    <!--Help section of the game-->
    <!--Game container div element-->
    <div class="game-container">

        <div class="game-container-title">The Game</div>

            <!--Image wrapped in a div-->
            <div id="game-container-pic">
                <img src="Images/game-help.jpg" alt="Game picture">

            </div>

            <!--Game introduction-->
            <div class="game-container-palabre">
                TWINS has long been a favorite game for all generations. It is easy to play, in fact it is so simple that really young children can play with ease. It requires observation, concentration and a good memory to win.The game is also known as Concentration,
                Pelmanism, Shinkei-suijaku, Pexeso and Pairs.
            </div>

        </div>

        <!--Play container div element-->
        <div class="play-container">

            <!--Tile of play-container-->
            <div class="play-container-title">How to play?</div>

                <div id="play-container-pic">
                <img src="Images/play-help.jpg" alt="Controls picture">
                </div>

            <!--Play instructions-->
            <div class="play-container-palabre">
                The player chooses a card and that card will be flipped face up. The latter then selects another card. If the two cards are a matching pair for example two Jacks then a point will be awarded to that player. If the cards are not a match they are turned
                back over.
            </div>
        </div>





    <!--Tips container div element-->
    <div class="tips-container">

        <!--Tile of play-container-->
        <div class="tips-container-title">Tips</div>


        <div id="tips-container-pic">
        <img src="Images/tips-help.jpg" alt="Tips picture">
        </div>

        <!--Tips about the game-->
        <div class="tips-container-palabre">
            Avoid playing this game alone.<br> A friend by your side to motivate you, will increase your score.
        </div>

    </div>


<br><br>

<?php
     
    //Output the footer
   
    outputFooter();
    
?>




