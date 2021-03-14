<?php

    //Include the PHP functions to be used on the page 
    include('common.php'); 
	
    //Output header and navigation 
    outputHeader("TWINS");
?>

   <!--Main section of game page-->


	<!--COntainer to display level-->
    <div id="level-container">
        Level&nbsp;<span id="level"></span>
    </div>
	
	
	
	<!--Text to show after loading game.js, sow class to make it visible-->
   <div class="text-start show">
        Choose difficulty level
    
		<!--Display game difficulty level-->
		<span class="difficulty-level">
			<input type="radio" name="level" value="1" checked> Easy&nbsp;&nbsp;
			<input type="radio" name="level" value="2"> Normal&nbsp;&nbsp;
			<input type="radio" name="level" value="3"> Hard&nbsp;&nbsp;
		</span>
	
	</div>
	
	<!--Victory text-->
	<div class="text-victory">
        Victory!!!
    
		<!--Victory pts-->
		<div class="victory-points">
			Total pts: <span id="displayVictoryPts"> </span>
		</div>
	
		<span class="replay">
			<input type="radio" name="playDescision" value="1" checked> Play again&nbsp;&nbsp;&nbsp;&nbsp;
			<input type="radio" name="playDescision" value="2"> Exit
		</span>
	</div>
	
	<!--Game Over text-->
	<div class="text-gameOver">
        Game Over!!!
    
		<!--Motivating text-->
		<span class="good-luck">Better luck next time 🙂</span>
		<span class="replay">
			<input type="radio" name="playDescision2" value="1" checked> Play again&nbsp;&nbsp;&nbsp;&nbsp;
			<input type="radio" name="playDescision2" value="2"> Exit
		</span>
	
	</div>
	
	
	<!--Main container for game-->
    <div class="game-play">

	<!--Display game info-->
        <div class="game-info">

			<!--Display Time-->
            <div class="game-time">

                Time <span id="time-left"> </span>

            </div>
			
			<!--Display current score-->
            <div class="game-score">

                Score <span id="score-obtained"> </span>

            </div>



        </div>


	<!--Individual card-->
        <div class="gameCard">
			
			<!--Back of card-->
            <div class="back-card cardProp">
                <img src="../Images/cardBack.png">

            </div>

			<!--Front of card-->
            <div class="front-card cardProp">
                <img class="card-image-value" src="../Images/JC.png">
            </div>


        </div>



        <div class="gameCard">

            <div class="back-card cardProp">
                <img src="../Images/cardBack.png">

            </div>

            <div class="front-card cardProp">
                <img class="card-image-value" src="../Images/JC.png">

            </div>



        </div>
        <div class="gameCard">
            <div class="back-card cardProp">
                <img src="../Images/cardBack.png">

            </div>

            <div class="front-card cardProp">
                <img class="card-image-value" src="../Images/QH.png">
            </div>
        </div>
        <div class="gameCard">
            <div class="back-card cardProp">
                <img src="../Images/cardBack.png">

            </div>

            <div class="front-card cardProp">
                <img class="card-image-value" src="../Images/QH.png">
            </div>
        </div>
        <div class="gameCard">
            <div class="back-card cardProp">
                <img src="../Images/cardBack.png">

            </div>

            <div class="front-card cardProp">
                <img class="card-image-value" src="../Images/KD.png">
            </div>
        </div>
        <div class="gameCard">
            <div class="back-card cardProp">
                <img src="../Images/cardBack.png">

            </div>

            <div class="front-card cardProp">
                <img class="card-image-value" src="../Images/KD.png">
            </div>
        </div>
        <div class="gameCard">
            <div class="back-card cardProp">
                <img src="../Images/cardBack.png">

            </div>

            <div class="front-card cardProp">
                <img class="card-image-value" src="../Images/AS.png">
            </div>
        </div>
        <div class="gameCard">
            <div class="back-card cardProp">
                <img src="../Images/cardBack.png">

            </div>

            <div class="front-card cardProp">
                <img class="card-image-value" src="../Images/AS.png">
            </div>
        </div>
        <div class="gameCard">
            <div class="back-card cardProp">
                <img src="../Images/cardBack.png">

            </div>

            <div class="front-card cardProp">
                <img class="card-image-value" src="../Images/5H.png">
            </div>
        </div>
        <div class="gameCard">
            <div class="back-card cardProp">
                <img src="../Images/cardBack.png">

            </div>

            <div class="front-card cardProp">
                <img class="card-image-value" src="../Images/5H.png">
            </div>
        </div>
        <div class="gameCard">
            <div class="back-card cardProp">
                <img src="../Images/cardBack.png">

            </div>

            <div class="front-card cardProp">
                <img class="card-image-value" src="../Images/7S.png">
            </div>
        </div>

        <div class="gameCard">

            <div class="back-card cardProp">
                <img src="../Images/cardBack.png">

            </div>

            <div class="front-card cardProp">
                <img class="card-image-value" src="../Images/7S.png">

            </div>



        </div>


	</div>





