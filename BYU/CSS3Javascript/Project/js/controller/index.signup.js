//Function Add new Customer
function signUp() {
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("newPassword").value;
  var message = "";

  var person = new Person(name, email, age, password);
  var result = addCustomer(person);
  messagePrint(result);
  }

//Verify if the login is already in use
function addCustomer(newCustomer){
  if (localStorage.getItem(newCustomer.email)){  
    message = "Your email is already in use, please try another one";
	return false;
  } else if(newCustomer.name === ""|| newCustomer.age === "" || newCustomer.email === "" || newCustomer.password ==="") {
    message = "All input must be completed! Please fill out all empty spaces."
	return false;
  } else {
    localStorage.setItem(newCustomer.email, JSON.stringify(newCustomer));
	message = "You sign up was successful! Please do you login!";
	return true;
  }
}

//Display messages depending on the input
function verify(result){
  if (localStorage.getItem(customer.email)) {
    messageSignUp(true, content, customer);
  } else {
    messageSignUp(false, content, customer);
  }
}

//print message
function messagePrint(result){
  var messageContainer = document.getElementsByClassName("message")[0];
  var signUpForm = document.getElementsByClassName("signUp")[0];
  if(result){
	signUpForm.innerHTML = "";
	var h2 = document.createElement("h2");
	var buttonBack = document.createElement('div');
	buttonBack.innerHTML = "Back";
	buttonBack.classList.add('button');
	buttonBack.addEventListener("click", show);
	h2.innerHTML = message;
	h2.classList.add("fontWhite");
	signUpForm.appendChild(h2);
	signUpForm.appendChild(buttonBack);
	message.classList.toggle("openMessage");
	setTimeout(
    function () {
		signUpForm.classList.toggle('openSignUp');
    }, 2000);
 } else {
   errorMessage(message);
 }
}

function errorMessage(message){
	 var messageContainer = document.getElementsByClassName("message")[0];
	 messageContainer.innerHTML = message;
	 messageContainer.classList.add("openMessage");
}
