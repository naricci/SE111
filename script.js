//Nicholas Ricci - SE 111.22 - Campaign Website:  Part 5

window.onload = function(){
	
	var submit = document.getElementById("submit");
	
	submit.onclick = validate;
	
	function validate(){
		var firstName = document.getElementById("first-name");
		var lastName = document.getElementById("last-name");
		var emailAddress = document.getElementById("email-address");
		var emailConfirm = document.getElementById("email-address-confirm");
		
		
		var firstNameError = document.getElementById("first-name-error");
		var lastNameError = document.getElementById("last-name-error");
		var emailAddressError = document.getElementById("email-address-error");
		var emailConfirmError = document.getElementById("email-address-confirm-error");
		
		if (firstName.value == ""){
			firstNameError.innerHTML = " Enter Your First Name...and Vote for Stephen Colbert  ";		
		}
        
		else {
			firstNameError.innerHTML = "";
		}
		
		if (lastName.value == ""){
			lastNameError.innerHTML = " Enter Your Last Name...and Vote for Stephen Colbert  ";	
		}
        
		else {
			lastNameError.innerHTML = "";
		}
		if (emailAddress.value == ""){
			emailAddressError.innerHTML = " Enter Your Email Address, or Don't...and Vote for Stephen Colbert  ";		
		}
		else {
			emailAddressError.innerHTML = "";
		}
		
		if (emailConfirm.value == ""){
			emailConfirmError.innerHTML = " Enter Your Email Address Again, or Don't...and Vote for Stephen Colbert  ";			
		}
        
		else {
			emailConfirmError.innerHTML = "";
		}
		
		var message = "Please Press OK if the Following Message is Correct";
		
		if (firstName.value != "" && lastName.value != "" && emailAddress.value != "" && emailConfirm.value != " " && emailAddress.value == emailConfirm.value){
			alert(message + "\n" + firstName.value + "\n" + lastName.value + "\n" + emailAddress.value);
			
            window.location.assign("thank_you.html");
		}
	}
}