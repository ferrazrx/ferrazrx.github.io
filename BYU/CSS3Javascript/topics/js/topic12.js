window.onload = function(){
	if(localStorage.getItem("email")){
		round(localStorage.getItem("email"));
	}
}


document.getElementsByClassName('subtopic')[0].addEventListener('click', increase);
  function increase(){
    var count = 0;
    var id = setInterval(spin, 100);
    function spin(){
      count +=5;
      document.getElementsByTagName('body')[0].style.transform = 'skewY('+count+'deg)';
      if(count ==180){
        clearInterval(id);
      }
    }
  }

  document.getElementById('submit').addEventListener('click', sendForm);

function sendForm(){
	var email = document.getElementById("email").value;
	var Password = document.getElementById("password").value;
	
	if(email==""){
		email="guest";
	}
	
	localStorage.setItem("email", email);
	localStorage.setItem("password", Password);
	
	round(localStorage.getItem("email"));
} 

function round(name){
		var message = document.getElementById("message");
		message.innerHTML = "Hello " + name + "!";
		
		var x = 0;
		
		var rotate =  setInterval(rot, 50);
		
		function rot(){
		if(x>=180){
			clearInterval(rotate);
		}
		document.getElementById("rotate").style.transform = "rotateX("+x+"deg)";
		x+=10;
	}
} 