function loginProcess() {

	resetFields();
    //Connect field with variable userNameEntered
    let userNameEntered = document.getElementById("lguname").value;
    

    //Checks if value entered in username text input exist in localStorage
    if (localStorage[userNameEntered] != undefined) {

        //User has an account
        let userAccount = JSON.parse(localStorage[userNameEntered]); //Convert to object
        let passwordEntered = document.getElementById("lgpword").value;
        if (passwordEntered === userAccount.password) { //Successful login
            sessionStorage.loggedInUsername = userAccount.username;
            alert("Welcome   " + userAccount.username);
            return true;
        } else {
			// Highlight borders and display error message
			document.getElementById("lguname").style.border = "3px solid red";
			document.getElementById("lgpword").style.border = "3px solid red";
			document.getElementById("loginError").innerHTML = "The username and password entered did not match our records. Please double-check and try again 🙁";
			document.getElementById("loginError").style.color = "red";
			
            
            return false;
        }



    } else { //User does not have an account

        //Inform user that they do not have an account
		document.getElementById("lguname").style.border = "3px solid red";
		 document.getElementById("loginError").innerHTML = "The user name that you've entered doesn't match any account in our database! Sign up for an account. 😋";
		document.getElementById("loginError").style.color = "red";
        
        return false; //Do nothing else

    }







}
// Reset all input border colour and error messages
function resetFields(){
	document.getElementById("loginError").style.color = "";
	document.getElementById("lguname").style.border = "";
	document.getElementById("lgpword").style.border = "";
	
}