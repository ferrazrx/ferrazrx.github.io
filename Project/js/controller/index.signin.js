//default cusotmer
var customerExists = null;

//Function Sign In
function signIn() {
  var login = document.getElementById("login").value;
  var password = document.getElementById("password").value;

  if (login == "" || password == "") {
    messageLogin(false, "To login you must fill the login and password");
    return;
  } else {
    var result = tryLogin(login, password);
  }
}

//Verify if the login exists
function tryLogin(login, password) {
  if (localStorage.getItem(login)) {
    customerExists = JSON.parse(localStorage.getItem(login));
    if(customerExists.password === password) {
      messageLogin(true);
    } else {
      messageLogin(false, "Your password is wrong, plase try again!");
    }
  } else {
    messageLogin(false,"Login not found! Plase try again or Sign Up!");
  }
}


function messageLogin(result, content = "") {
  var message = document.getElementsByClassName("message")[0];
  var signIn = document.getElementsByClassName("loginContainer")[0];
  var signUpMenu = document.getElementsByClassName('signUpForm')[0];

  if(result === true){
   signIn.remove();
   signUpMenu.remove();
   message.style.display = "none";
   sessionStore.setItem("actualCustomer", customerExists);
   openApp(sessionStorage.getItem("actualCustomer"));
  }
  if(result === false){
   message.innerHTML = content;
   message.classList.add("openMessage");
  }
}
