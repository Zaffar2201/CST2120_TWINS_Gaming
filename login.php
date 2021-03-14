<?php

    //Include the PHP functions to be used on the page 
    include('common.php'); 
	
    //Output header and navigation 
    outputHeader("TWINS - Login");
?>

  <!--Main section of login page-->
    <div id="login-main">

        <!--Form starts here and redirects to game.php-->
        <form id="lgform" onsubmit="return loginProcess()" method="post" action="game.php">

            <!--Heading-->
            <h4>Log in</h4>

            <!--Input text box-->
            <!--Prevents autocomplete from previous input and insert placeholder for each input-->
            <input type="text" id="lguname" name="lguname" placeholder="Username" autocomplete="off" required><br><br>
            <input type="password" id="lgpword" name="lgpword" placeholder="Password" required><br><br>
			<div id="loginError"></div><br>

            <!--Button to submit-->
            <button type="submit" name="sign-in">Sign in</button><br><br><br>


            <!--Link to register in case of new user-->
            Need to register? | <a href="register.php ">Here</a><br><br>


        </form>

    </div>



<?php
     
    //Output the footer
    outputFooter();
?>




