<?php

//This function will be used to output header and navigation bar
//$title is a parameter which will be the title of the website
 function outputHeader($title){
    echo '<!DOCTYPE html>';
    echo '<html>';
    echo '<head>';
    echo '<title>' . $title . '</title>';
    echo '<!-- Link to external style sheet-->';

    //If statement to determine css for header and footer and javascript sheet
    // Game.php has a different header
    if($title == "TWINS"){
      echo '<link rel="stylesheet" type="text/css" href="Styles/gamestyles.css">';
	  echo '<script src="JS/game.js" async></script>';

    }else{

      echo '<link rel="stylesheet" type="text/css" href="Styles/headerFooter.css">';
    
    // Make use of associative array and for each loop to determine styling sheet for the current page
    $css=array("TWINS - Home"=>"Styles/indexstyles.css","TWINS - Register"=>"Styles/registerstyles.css","TWINS - Login"=>"Styles/loginstyles.css","TWINS - Score"=>"Styles/scorestyles.css");
      foreach($css as $currentPage => $correspondingStyle){
         if($currentPage==$title){
            echo'<link rel="stylesheet" type="text/css" href="'.$correspondingStyle.'">';
            break;
         }
    }
	
	
	// Make use of associative array and for each loop to determine javascript code sheet for the current page
    $js=array("TWINS - Register"=>"JS/register.js","TWINS - Login"=>"JS/login.js","TWINS - Score"=>"JS/score.js");
      foreach($js as $currentPage => $correspondingJS){
         if($currentPage==$title){
			 echo'<script src="'.$correspondingJS.'" async></script>';
            break;
         }
    }
	
	
      }

    echo '</head>';
    echo'<!--Body section-->';
	if($title=="TWINS - Score"){
            echo '<body onload="populateTable()">';
         }else{
    echo '<body>';
		 }
    echo'<!--Header element with unique id header-->';
    echo'<header id="header">';
    echo'<!--Div element to wrap navigation bar into header-->';
    echo'<div class="nav">';
    echo'<!--Display game main logo and specifying its source as class logo for styling-->';
    echo'<div class="logo">';
    echo'<img src="Images/game-logo.png" alt="Game main logo">';
    echo'</div>';
    echo'<!--Navigation bar links-->';

    // Game.php consists of only one link i.e log out
    if($title == "TWINS"){
       echo'<a href="index.php" onclick="sessionStorage.clear();">Log out</a>';
    }else{

      //Array to link each link to appropriate php
    $pageLink=array("Home","Register", "Login","Score");
    $phpLink=array("index.php", "register.php", "login.php", "score.php");

    //Output navigation
    for($i = 0; $i < count($pageLink); $i++){
      echo '<a href="'.$phpLink[$i].'">'.$pageLink[$i].'</a>'; 
 }
    }
    echo'</div>';
    echo'</header>';
 }

// To display footer for every pages
 function outputFooter(){
    echo'<footer id="footer">';
    echo'<!--Short notes about the company and social media-->';
    echo'<div id="footer-contact-right">';
    echo'<span style="font-size:17px; font-weight:bold;margin-bottom:20px">About the company</span>';
    echo'<p id="notes">Mejor juego de la historia<br>Siéntete libre de jugar</p>';
    echo'<!--&nbsp; for extra space-->';
    echo'<img src="Images/facebook.png" alt="facebook">&nbsp;&nbsp;';
    echo'<img src="Images/twitter.png" alt="twitter">&nbsp;&nbsp;';
    echo'<img src="Images/linkedin.png" alt="linkedin">&nbsp;&nbsp;';
    echo'<img src="Images/instagram.png" alt="instagram">&nbsp;&nbsp;';
    echo'</div>';
    echo'<!--Contact info-->';
    echo'<div id="footer-contact-left">';
    echo'<img src="Images/placeholder.png" alt="location">&nbsp;&nbsp;Port Louis, Mauritius<br><br>';
    echo'<img src="Images/phone.png" alt="phone">&nbsp;&nbsp;+230 5 949 5577<br><br>';
    echo'<img src="Images/mail.png" alt="email">&nbsp;&nbsp;<span style="color:#4d8af3">mf828@live.mdx.ac.uk</span>';
    echo'</div>';
    echo'<!--Owner info-->';
    echo'<div id="footer-owner-info">';
    echo'Fakeermahamood Mohammad Zaffar Ally<br><br> M00685151';
    echo'<br><br> Middlesex University Mauritius';
    echo'</div>';
    echo'</footer>';
    echo'</body>';
    echo'</html>';
    
 }
















?>
 

