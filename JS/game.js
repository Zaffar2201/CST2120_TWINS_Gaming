
// Twins class
class Twins {
	// Twins class constructor
    constructor(timeAllocated, cards, pointsPerCorrect, currentLevel) {
		// Link attributes to appropriate parameters
        this.cardsArray = cards;
        this.timeAllocated = timeAllocated;
        this.pointsPerCorrect = pointsPerCorrect;
        this.timeLeft = timeAllocated;
        this.gameTimer = document.getElementById('time-left');
        this.score = document.getElementById('score-obtained');
		//  Create istances of music class
        this.flipSound = new Music();
		this.victoryAudio = new Music();
		this.gameOverAudio = new Music();
        this.currentGameLevel = document.getElementById('level');
		this.victoryPoints = document.getElementById('displayVictoryPts');
        




    }

	// PlayGame function is like the main method of Twins class
	// Allows user to play and calls appropriate functions when needed
    playGame() {
		// By default cardToBeChecked should be null
        this.cardToBeChecked = null;
        this.totalScore = 0;
        this.timeLeft = this.timeAllocated;
		// Array to be used when cards have been flipped
        this.similarCardsRetrieved = [];
		// CardIsBeingFlipped as name suggests is the animation when a card is being flipped over
        this.cardIsBeingFlipped = true;
		//Connects js to html doc
        this.currentGameLevel.innerText = levelToBeDisplayed;
		this.pointToAllocate = this.pointsPerCorrect;
		// Shuffle cards algorithm
		this.shuffle();



        //Execute rarely, wait 100ms then start
        setTimeout(() => {
			// Starts to countdown , and stores to this.CountingDown
            this.countingDown = this.startingToCountDown();
			// Set animation to false
            this.cardIsBeingFlipped = false;
        }, 100);

        //Create function to turn over cards
        this.unFlipCards();

		//Link timeLeft to HTML DOM
         this.gameTimer.innerText = this.timeLeft;

    }


	//unFLipCards function
	// For each card,simply remove  flip-effects
	// Implemets by looping an array
    unFlipCards() {
        this.cardsArray.forEach(card => {
            card.classList.remove('flip-effects');
        });


    }
	
	//startingToCountDown function
	//Decrease time left by 1 after each seconds
    startingToCountDown() {
        //AFter each 1 sec, return time
		// SetInterval repeats desired function after each xms set a parameter
        return setInterval(() => {
			// Decrease timeLeft by 1
            this.timeLeft -= 1;
            //Update timer on screen
            this.gameTimer.innerText = this.timeLeft;

			// If statement to check if timeLeft is 0
            if (this.timeLeft === 0) {
				//Calls current object's gameOver function
                this.gameOver();
            }

        }, 1000);




    }


	//gameOver function
	//Inform user that he/she lost the game
	//Redirects to main index of website
    gameOver() {
		// Stop counting down
        clearInterval(this.countingDown);
        
		gameOverText.forEach(loseText =>{
				// Display game over text
				this.gameOverAudio.playGameOver();
				loseText.classList.add('show2');
				
			
		});
			// Switch screen after 7 seconds
		setTimeout(() => {
			// Call replay function to determine descision
			switch(replayDescision("gameOver")){
				case "1":
				//reload window if user wants to replay
				window.location.reload(true);
				break;
				//Else clear session
				//Exit page
				default:
				sessionStorage.clear();
                window.location.href = "index.php";
				break;
			}
            }, 7000);
		
        

    }

	//victory function
	//Inform user that he/she won the game
	//Store pts
	//Outputs pts
	//Checks if user wants to replay or not
    victory() {

        // Calculate total socres
        this.totalScore = this.totalScore + Math.round(this.timeLeft / 2) * bonusPoint;
        
		//Stops timer
        clearInterval(this.countingDown);
		
		//Flips back all card
        this.unFlipCards();
		
		// Store pts
		this.StoreUserPts(this.totalScore);
		
		
		// Link pts to victory text
		this.victoryPoints.innerText=this.totalScore;
		
		victoryText.forEach(winText =>{
				//Display victory text
				this.victoryAudio.playVictory();
				winText.classList.add('show1');
				
			
		});
		// Redirects to main page after 6 seconds
		// Clears current user session
		setTimeout(() => {
			// Call replay function to determine descision
			switch(replayDescision("victory")){
				case "1":
				//reload window if user wants to replay
				window.location.reload(true);
				break;
				//Else clear session
				//Exit page
				default:
				sessionStorage.clear();
                window.location.href = "index.php";
				break;
			}
			
            }, 6000);
		
       


    }
	//Store user score function
	StoreUserPts(totalScore){
		// Retrieve current user session and stores in username
		let username = sessionStorage.loggedInUsername;
		
		//Retrieves all data(fname,lname,score etc..) of the user and converts, stores into currentUserAccount obj
		let currentUserAccount = JSON.parse(localStorage[username]);
		
		//Update new high score
		if(totalScore > currentUserAccount.high_score ){
			
			currentUserAccount.high_score=totalScore;
			localStorage[username] = JSON.stringify(currentUserAccount);
		}
		
	}


    // FLip card
    // Gets each card, one by one from the array of card
    // currentCard refers to the selected card that user chosed.
    flipTheCard(currentCard) {

        //Calls allowToFlipCard function which determines whether to flip or not
        if (this.allowToFlipCard(currentCard)) {
			//Prevents same card to be clicked 
			if(currentCard===this.cardToBeChecked) return;
			
            this.flipSound.playFlipped();
            currentCard.classList.add('flip-effects');
			

            // 1st card selected, cardToBeChecked is null,hence stores in CardToBeChecked
            // When nth card is selected, then calls mathing function with nth card, cardToBeChecked = n-1
            if (this.cardToBeChecked) {
                this.checkIfCardsMatch(currentCard);


            } else {

                this.cardToBeChecked = currentCard;

            }



        }
       
    }

    //Checks if current card value(n) match with previous card value(n-1)
    // Works by, comparing returned image value of both cards
    //Calls cardHasMatched if true
    checkIfCardsMatch(selectedCard) {
        if (this.returnImageValue(selectedCard) === this.returnImageValue(this.cardToBeChecked))
            this.cardHasMatched(selectedCard, this.cardToBeChecked);
        else
            this.cardMisMatched(selectedCard, this.cardToBeChecked);

        //Returns null to cardToBeChecked
        // When we compared 2 cards, whether it is a match or not
        // CardToBeChecked returns to null for further comparison
        this.cardToBeChecked = null;




    }

    //Return image value
    // Checks card-image-value class in parent gameCard class
    // Gets value by src attribute, [0] as contains only one image
    returnImageValue(selectedCard) {

        return selectedCard.getElementsByClassName('card-image-value')[0].src;


    }


    // If both cards are of matching values
    //Put them in similarCardRetrievedArray
    cardHasMatched(currentCardSelected, previousCardSelected) {
        this.similarCardsRetrieved.push(currentCardSelected);
        this.similarCardsRetrieved.push(previousCardSelected);
		// Points to allocate per correct match
		switch(levelToBeDisplayed){
			case "Easy":
				this.totalScore+=1;
				break;
			case "Normal":
				this.totalScore +=2;
				break;
			case "Hard":
			this.totalScore +=3;
				break
		}
		
        //Update score on DOM
        this.score.innerText = this.totalScore;

		// Checks if all cards have been match by comparing array length
        if (this.similarCardsRetrieved.length === this.cardsArray.length) {

            setTimeout(() => {
                this.victory();
            }, 500);
        }

    }

    //Removes flip animation from cards if a mismatch
    cardMisMatched(currentCardSelected, previousCardSelected) {
        this.cardIsBeingFlipped = true;
        //Wait 0.65 second
        setTimeout(() => {

            currentCardSelected.classList.remove('flip-effects');
            previousCardSelected.classList.remove('flip-effects');
            this.cardIsBeingFlipped = false;
        }, 650);

    }

	//Checks whether a card can be flipped over or not
    allowToFlipCard(thisCard) {

        return !this.cardIsBeingFlipped  && thisCard !== this.cardTobeChecked && !this.similarCardsRetrieved.includes(thisCard);
    }

	//shuffling algorithm
	 shuffle(){
		
		memoryCard.forEach(card =>{
			
			//Generate a random index to shuffle cards
			let randomIndexPosition = Math.floor(Math.random()*12);
			card.style.order = randomIndexPosition;
		});
		
		
	}


} //end of class TWINS

// Music class
class Music {
	// Music class constrcutor
    constructor() {

		// Link flipsound to flipCard
        this.flipCard = new Audio('../Music/flippSound.wav');
		// Link victorysound 
		this.victorySound = new Audio('../Music/victory.mp3');
		// Link gameOversound
		this.gameOverSound = new Audio('../Music/gameOver.mp3');

    }


	// Method of Music class
    playFlipped() {
		// Play flip sound
        this.flipCard.play();

    }
	
	playVictory(){
		// Play victory sound
		this.victorySound.play();
	}
	
	playGameOver(){
		// Play game over sound
		this.gameOverSound.play();
	}

} //End of class Audio



//Global variable to be used in the game
var gamelevel;
var levelToBeDisplayed;
var bonusPoint;
var victoryText = Array.from(document.getElementsByClassName('text-victory'));
var gameOverText = Array.from(document.getElementsByClassName('text-gameOver'));
// Using jQuery to put all cards in a constant
const memoryCard = document.querySelectorAll('.gameCard');


//Main function of the script
function start() {

	// Create variable and link them from DOM
    let gameCard = Array.from(document.getElementsByClassName('gameCard'));
    let playText = Array.from(document.getElementsByClassName('text-start'));
	
	
   

	// game variable to be used as an object
	let game;

	//Upon clicking text ("choose difficulty level"), remove class ("show") and perform below request
    playText.forEach(text => {
        text.addEventListener('click', () => {
            text.classList.remove('show');
			// retrieve level chosen by user and stores in gameLevel
			gamelevel = difficutlyLevel();
			// Switch statement depending on gameLevel
			switch(gamelevel){
				// Create an instance of Twins with appropiate parameters
				case "1":
					 levelToBeDisplayed = "Easy";
						bonusPoint=1;
					 game = new Twins(40, gameCard, 1, levelToBeDisplayed);
					break;
				case "2":
					levelToBeDisplayed = "Normal";
					bonusPoint=2;
					game = new Twins(35, gameCard, 2, levelToBeDisplayed);
					break;
				default:
					levelToBeDisplayed = "Hard";
				    bonusPoint=4;
					game = new Twins(15, gameCard, 3, levelToBeDisplayed);
					break;
			
			}
			// calls playGame() funcion
            game.playGame();
        });
    });


	//Remove text start after being clicked
    gameCard.forEach(card => {
        card.addEventListener('click', () => {
            game.flipTheCard(card);
        });
    });


}
// Return difficulty level chosen by user before starting game
// Loop through each radio button, and checks which radio button user has selected
// Return desired level by the user
function difficutlyLevel() {

    let levels = document.getElementsByName('level');
	let selectedLevel;

	// Looping to determine value
    for(var i = 0; i < levels.length; i++) {
   if(levels[i].checked){
       selectedLevel = levels[i].value;
	   break;
   }
 }
 
 // return level selected by user
  return selectedLevel;
 
}
// Return replay descision chosen by user after a match
// Examines each radio button, and checks which radio button user has selected
// Return descision desired by the user
// Used a parameter so that js can differentiate between victory radio button and gameOver radio button
function replayDescision(type) {
let descision;
	switch(type){
		
		case "victory":
		 descision = document.getElementsByName('playDescision');
		break;
		
		default:
		 descision = document.getElementsByName('playDescision2');
		break;
		
	}

	
	// If 1st button is checked
	if (descision[0].checked) {
		
        return descision[0].value;
    } else {
		
        return descision[1].value;
    }
 
}


//Make sure everything has been loaded
//If not, wait
// If yes, call start function
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start());
} else {
	//Calls start method
    start();
}