window.onload = function() {
	//Add Event Listener
	var signUpButton = document.getElementsByClassName('button')[2];
	signUpButton.addEventListener('click', signUp);

	//Add Event Listener
	var login = document.getElementsByClassName('button')[0];
	login.addEventListener('click', signIn);

	var login = document.getElementsByClassName('button')[3];
	login.addEventListener('click', goToApp);

}
