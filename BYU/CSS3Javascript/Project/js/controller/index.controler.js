window.onload = function() {
	//Add Event Listener
	var signUpButton = document.getElementsByClassName('button')[2];
	signUpButton.addEventListener('click', signUp);

	//Add Event Listener
	var login = document.getElementsByClassName('button')[0];
	login.addEventListener('click', signIn);

	var app = document.getElementsByClassName('button')[4];
	app.addEventListener('click', goToApp);
	
	var add = document.getElementsByClassName('button')[5];
	add.addEventListener('click', addMedicine);

}
