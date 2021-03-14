<?php

    //Include the PHP functions to be used on the page 
   include('common.php'); 
	
    //Output header and navigation 
    outputHeader("TWINS - Score");
?>
    
    <!--Main element of score page starts here-->
    <div id="score-main">

        <!--Div element where table will reside-->
        <div id="scorebg">
            <table id="scoreTable">
			<tr>
                    <!--Table header-->
                    <th>Rank</th>
                    <th> Username</th>
                    <th>Scores</th>
                </tr>
            </table>
        </div>


    </div>
<?php
     
    //Output the footer
    outputFooter();
    
?>




