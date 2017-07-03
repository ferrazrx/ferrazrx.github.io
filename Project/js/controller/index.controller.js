window.onload = function() {
	//Add Event Listener
	var signUpButton = document.getElementsByClassName('button')[2];
	signUpButton.addEventListener('click', signUp);

	//Function Add new Customer
	function signUp() {
		var name = document.getElementById("name").value;
		var age = document.getElementById("age").value;
		var email = document.getElementById("email").value;
		var password = document.getElementById("newPassword").value;

		var person = new Person(name, email, age, password);
		var result = addCustomer(person);
		}
	}

	//Verify if the login is already in use
	function addCustomer(newCustomer){
		if (localStorage.getItem(newCustomer.name)){
			return "Your email is already in use, please try another one";
		} else if(newCustomer.name === ""|| newCustomer.age === "" || newCustomer.email === "" || newCustomer.password ==="") {
			return "All input must be completed! Please fill out all empty spaces."
		} else {
			localStorage.setItem(newCustomer.email, JSON.stringify(newCustomer));
			return false;
		}
	}

	function message(result){
		if(result === false){
			var signUpForm = document.getElementsByClassName("signUpForm")[0]
			signUpForm.innerHTML = "";
			var message = document.createElement("h2");
			message.innerHTML = "You sign up was successful! Please do you login!"
			message.classList.add("successful");
			message.classList.add("fontWhite");
			signUpForm.appendChild(message);
		} else {
			var message = document.getElementsByClassName("message")[0];
			message.innerHTML = 
		}
	}

}
