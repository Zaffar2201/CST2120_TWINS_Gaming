// Main function for registration form
function validateForm() {
	// Returns each input fields and stores in respectives variables
    let password = document.getElementById("pword").value;
    let confirmPassword = document.getElementById("cpword").value;
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let emailAddress = document.getElementById("email").value;
    let userName = document.getElementById("uname").value;
	let address = document.getElementById("address").value;
    let countryCode = document.getElementById("country-code");

    let phoneNumber = countryCode.options[countryCode.selectedIndex].value + document.getElementById("phone").value;
    let gender = genderValue();

	// Regular expression check
    let nameRegex = /^[a-zA-Z ]{5,50}$/;
    let emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let usernameRegex = /^(?=.{5,15}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?![_.])$/;
	let addressRegex =/^[a-zA-Z0-9, ]{5,50}$/;


	// Check if met all criteria to store user details
	// Return true if met criteria to html form
	// Return false if did not meet criteria
    if (checkForBlankField(firstName,lastName,emailAddress,document.getElementById("phone").value,address,userName,password,confirmPassword)&&validateNames(firstName, lastName, nameRegex) && validateEmail(emailAddress, emailRegex) && validatePhone(phoneNumber) &&validateAddress(address,addressRegex) && validateUserName(userName, usernameRegex) && passwordMatch(password, confirmPassword) == true) {
        // Reset all fields
		resetFields();
		// Inform user that account has been created
		alert("User has been successfully created!");
		// Calls storeUser function to store details into local storage
        storeUser(firstName, lastName, gender, phoneNumber, address,userName, emailAddress, password);
        return true;

    } else {
		// Return false to prevent submission of blank or invalid data
        return false;
    }


}
// Function to check name validation
// Use a regex expression to check if name is valid or not
function validateNames(fname, lname, name_regex) {

    if ((name_regex.test(fname)) != true) {
        // Reset all fields
		resetFields();
		// Highlights input borders and display appropriate error message
		document.getElementById("fnameError").innerHTML = "Invalid first name!";
		document.getElementById("fnameError").style.color = "red";
		document.getElementById("fname").style.border = "3px solid red";
		// Return false to prevent submission
        return false;
    } else if ((name_regex.test(lname)) != true) {
		resetFields();
        document.getElementById("lnameError").innerHTML = "Invalid last name!";
		document.getElementById("lnameError").style.color = "red";
		document.getElementById("lname").style.border = "3px solid red";
		
        return false;

    } else {
		resetFields()
        return true;

    }


}

// This function make sure that both password and confirm password are of matching pair
// Inform user if not
function passwordMatch(password, confirm_password) {

    if (password != confirm_password) {
       resetFields();
	   document.getElementById("passError").innerHTML = "Password does not match!";
	   document.getElementById("passError").style.color = "red";
		document.getElementById("pword").style.border = "3px solid red";
	   document.getElementById("cpword").style.border = "3px solid red";
	   
        return false;
    } else {

		resetFields();
        return true;
    }


}


 // Function to check validation for email
 // Uses a regular expression as a check
 // Then checks if email entered is unique
function validateEmail(email, email_regex) {


		// Valid email check
    if ((email_regex.test(email)) != true) {
		resetFields();
		document.getElementById("emailError").innerHTML = "Invalid email!";
		document.getElementById("emailError").style.color = "red";
		document.getElementById("email").style.border = "3px solid red";
       
        return false;
    } else {
		resetFields();
		
		 // Uniqueness check
		 // Return boolean value
        switch (passedDuplicateCheck(email)) {

            case false:
				document.getElementById("emailError").innerHTML = "Email address is already in use!";
				document.getElementById("emailError").style.color = "red";
				document.getElementById("email").style.border = "3px solid red";
               
                return false;
                break;

            default:
			
                return true;
                break;


        }


    }

}
/*Checks if phone is valid by:
	1. By using a pattern in html form
	2. Makes sure is unique within country*/
function validatePhone(phoneNumber) {
	resetFields();
    switch (passedDuplicateCheck(phoneNumber)) {

        case false:
			document.getElementById("phoneError").innerHTML = "Phone must be unique!";
			document.getElementById("phoneError").style.color = "red";
			document.getElementById("phone").style.border = "3px solid red";
            
            return false;
            break;

        default:
            return true;
            break;


    }



}

// Function to validate userName
// 1st check, if is a valid username by using a regex expression
// 2nd check, loop through localStorage and check if this username is already in used
function validateUserName(uname, uname_regex) {
	resetFields();
	// isFound boolean variable
    var isFound = false;

	// Valid username check
    if ((uname_regex.test(uname)) != true) {
		document.getElementById("usernameError").innerHTML = "Invalid username!";
		document.getElementById("usernameError").style.color = "red";
		document.getElementById("uname").style.border = "3px solid red";
        
        return false;
    } else {

		// Loop through localStorage
        for (var i = 0; i < localStorage.length; i++) {
	
			//Checks each username
            if (localStorage.hasOwnProperty(uname))
                isFound = true;
            break;
        }
		// Return isFound boolean ans
        switch (isFound) {

            case true:
			document.getElementById("usernameError").innerHTML = "Username is already in use!";
			document.getElementById("usernameError").style.color = "red";
			document.getElementById("uname").style.border = "3px solid red";
             
                return false;
                break;

            default:
                return true;
                break;

        }
    }


}
// Function to make sure a valid username has been entered
// Make use of a regular regex expression to test whether address entered is valid or not
function validateAddress(add, add_regex){
	resetFields();
	 if ((add_regex.test(add)) != true) {
		 document.getElementById("addError").innerHTML = "Invalid address!";
		document.getElementById("addError").style.color = "red";
		document.getElementById("address").style.border = "3px solid red";
      
        return false;
    } else {
		return true;
	}
	
	
	
}

// Function button to retrieve value of radio button
function genderValue() {
	
	// Link radio button
    var radiobtn = document.getElementsByName('gender');

	// Checks which radio button has been selected and returns value
    if (radiobtn[0].checked) {
        return radiobtn[0].value;
    } else {
        return radiobtn[1].value;
    }
	
	
	
	
	
	


}

// Function to store user data to HTML localStorage
function storeUser(fname, lname, gender, phone, add,username, email, password) {

	// Create an array of object
    var userAccount = {};

	// Stores user properties
    userAccount.firstName = fname;
    userAccount.lastName = lname;
    userAccount.gender = gender;
    userAccount.phoneNumber = phone;
	userAccount.address=add;
    userAccount.emailAddress = email;
    userAccount.password = password;
    userAccount.username = username;
    userAccount.high_score=0;

	// Convert array obj into stringify
	// Stores into localStorage
	// Use username as key
    localStorage[userAccount.username] = JSON.stringify(userAccount);






}
// Check duplicate data
function passedDuplicateCheck(data) {
	// Variable and arrayObj declaration
    let arrayObj = [];
    let counter = 0;
    let notFound = true;

    // Loop till end of localStorage
	// Key is index, username in our case
	// Convert JSON back into objects and store then in arrayObj{}
    for (let i = 0; i < localStorage.length; i++) {

        arrayObj.push(JSON.parse(localStorage.getItem(localStorage.key(i))));

    }
 
	// While loop
    while ((counter < arrayObj.length) && (notFound == true)) {

		//ForEach loop
		// Checks details of each property, index by index
        for (var propertyValue in arrayObj[counter]) {
			
			//Exit while loop if duplicate data exists
            if (data == arrayObj[counter][propertyValue]) {
                notFound = false;
                break;
            }



        }
		//Increments counter
        counter++


    }


	// return whether data has been found or not
    return notFound;

}
// Function to identify which input field is empty
// Compares by checking if value is null or an empty literal string
function checkForBlankField(fname,lname,email,phone,address,uname,pass,confirmPass){
	
	// Nested if statements to check one by one
	// Returns whether is empty or not
	// Alert to inform user by highlighting borders and display an error message
	if(fname ==null || fname==""){
		// Reset fields
		resetFields();
		// Highlights borders and displays error message
		document.getElementById("fnameError").style.color = "#F6482B";
		document.getElementById("fname").style.border = "3px solid red";
		return false;
	}else if(lname == null || lname == ""){
		resetFields();
		
		document.getElementById("lnameError").style.color = "red";
		document.getElementById("lname").style.border = "3px solid red";
		return false;
	}else if(email == null || email==""){
		resetFields();
		
		document.getElementById("emailError").style.color = "red";
		document.getElementById("email").style.border = "3px solid red";
		return false;
	}else if(phone == null || phone==""){
		resetFields();
		
		document.getElementById("phoneError").style.color = "red";
		document.getElementById("phone").style.border = "3px solid red";
		
		return false;
	}else if(address == null || address ==""){
		resetFields();
		
		document.getElementById("addError").style.color = "red";
		document.getElementById("address").style.border = "3px solid red";
		
		return false;
	}else if(uname == null || uname ==""){
		resetFields();
		
		document.getElementById("usernameError").style.color = "red";
		document.getElementById("uname").style.border = "3px solid red";
		return false;
	}else if(pass ==null || pass==""){
		resetFields();
		
		document.getElementById("passError").style.color = "red";
		document.getElementById("pword").style.border = "3px solid red";
		return false;
	}else if(confirmPass == null || confirmPass==""){
		resetFields();
		
		document.getElementById("confirmPassError").style.color = "red";
		document.getElementById("cpword").style.border = "3px solid red";
		return false;
	}else{
		
		resetFields();
		
		return true;
	}
	

	
}
// Function to reset all error messages and input borders colour
function resetFields(){
	document.getElementById("fnameError").style.color = "";
		document.getElementById("fname").style.border = "";
		document.getElementById("lnameError").style.color = "";
		document.getElementById("lname").style.border = "";
		document.getElementById("emailError").style.color = "";
		document.getElementById("email").style.border = "";
		document.getElementById("phoneError").style.color = "";
		document.getElementById("phone").style.border = "";
		document.getElementById("addError").style.color = "";
		document.getElementById("address").style.border = "";
		document.getElementById("usernameError").style.color = "";
		document.getElementById("uname").style.border = "";
		document.getElementById("passError").style.color = "";
		document.getElementById("pword").style.border = "";
		document.getElementById("confirmPassError").style.color = "";
		document.getElementById("cpword").style.border = "";
}