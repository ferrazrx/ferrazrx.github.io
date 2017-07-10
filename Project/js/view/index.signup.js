    //target Elements
    var SignUpButton = document.getElementsByClassName('button')[1];
    SignUpButton.addEventListener('click', show);
	var hiddenForm = document.getElementsByClassName('button')[3];
	hiddenForm.addEventListener('click', show);

    //functions
    function show() {
    	var signUpMenu = document.getElementsByClassName('signUp')[0];
    	signUpMenu.classList.toggle('openSignUp');
     }
