
//Person Type
function Person(name,email,age, password){
	this.name = name;
	this.email= email;
	this.age = age;
	this.password = password;
	this.medicines = [];
	
}

//CSS
var SignUpButton = document.getElementsByClassName('button')[1];
SignUpButton.addEventListener('click', show);

function show(){
	document.getElementsByClassName('signUpForm')[0].classList.add('open');
}