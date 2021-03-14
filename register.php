<?php

    //Include the PHP functions to be used on the page 
    include('common.php'); 
	
    //Output header and navigation 
    outputHeader("TWINS - Register");
?>

    <!--Main section of registration page-->
    <div id="register-main">



        <!--Form starts here and redirects to login.php-->
        <form id="rgform" method="post" onsubmit="return validateForm()"  action="login.php">

            <!--Heading-->
            <h4>REGISTRATION FORM</h4>

            <!--Input text box-->
            <!--Prevents autocomplete from previous input and insert placeholder for each input-->
            <input class="normal-input" type="text" id="fname" name="fname" placeholder="First Name" autocomplete="off" title="First name must be greater than 5 characters"><br><br>
			<div id="fnameError" class="inputError">First name is required!</div>
			
            <input class="normal-input" type="text" id="lname" name="lname" placeholder="Last Name" autocomplete="off" title="Last name must be greater than 5 characters"><br><br>
			<div id="lnameError" class="inputError">Last name is required!</div>
			
            <input class="normal-input" type="email" id="email" name="email" placeholder="Email" autocomplete="off"><br><br>
			<div id="emailError" class="inputError">Email is required!</div>

            <!--Select dropbox-->
            <select name="Country-code" id="country-code" form="rgform">
                <option value="+44">+44</option>
                <option value="+33">+33</option>
                <option value="+230">+230</option>
            </select>

            <!--Specify pattern for phone-->
            <input class="phone-input" type="tel" id="phone" name="phone" placeholder="Phone" pattern="[0-9]{3}[0-9]{5}" title="Format 12345678" autocomplete="off"><br><br><br>
			<div id="phoneError">Phone is required!</div>

			<input class="normal-input" type="text" id="address" name="address" placeholder="Address" autocomplete="off"><br><br>
			<div id="addError" class="inputError">Address is required!</div>
			
            <input class="normal-input" type="text" id="uname" name="uname" placeholder="Username" autocomplete="off" title="Enter a valid username"><br><br>
			<div id="usernameError" class="inputError">Username is required!</div>

            <!--Password input-->
            <input class="normal-input" type="password" id="pword" name="pword" placeholder="Password" pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" title="Password must be longer than 7 characters and consists of  1 uppercase, 1 lowercase alphabet & a number!"><br><br>
			<div id="passError" class="inputError">Password is required!</div>
			
            <input class="normal-input" type="password" id="cpword" name="cpword" placeholder="Confirm Password"><br><br>
			<div id="confirmPassError" class="inputError">Confirm password is required!</div>

            <!--Radio buttons-->
            <input type="radio" name="gender" value="Male" checked><span style="color:white; font-size:18px;"> Male</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="radio" name="gender" value="Female"><span style="color:white; font-size:18px; "> Female</span><br><br>

            <!--Button to submit-->
            <button type="submit">&nbsp;&nbsp;&nbsp;Sign Up&nbsp;&nbsp;&nbsp;</button><br><br> Already one of us? | <a href="login.php"><u>Log in</u></a>
            <br><br> 
			

		</form>



    </div>

<?php
     
    //Output the footer
    outputFooter();
?>




