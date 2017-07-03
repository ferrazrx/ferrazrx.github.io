    //target Elements
    var SignUpButton = document.getElementsByClassName('button')[1];
    SignUpButton.addEventListener('click', show);

    //functions
    function show() {
    	var signUpMenu = document.getElementsByClassName('signUpForm')[0];
    	signUpMenu.classList.toggle('openSignUp');
  	  signUpMenu.classList.toggle('hiddenSignUp');
     }
