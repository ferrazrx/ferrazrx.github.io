//Function Add new Customer
function signUp() {
  console.log("test");
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("newPassword").value;

  var person = new Person(name, email, age, password);
  var message = addCustomer(person);
  verify(person, message);
  }

//Verify if the login is already in use
function addCustomer(newCustomer){
  if (localStorage.getItem(newCustomer.email)){
    return "Your email is already in use, please try another one";
  } else if(newCustomer.name === ""|| newCustomer.age === "" || newCustomer.email === "" || newCustomer.password ==="") {
    return "All input must be completed! Please fill out all empty spaces."
  } else {
    localStorage.setItem(newCustomer.email, JSON.stringify(newCustomer));
    return "You sign up was successful! Please do you login!";
  }
}

//Display messages depending on the input
function verify(customer, content){
  if (localStorage.getItem(customer.email)) {
    messageSignUp(true, content);
  } else {
    messageSignUp(false, content);
  }
}

//print message
function messageSignUp(result, content){
  var message = document.getElementsByClassName("message")[0];
  var signUpForm = document.getElementsByClassName("signUpForm")[0];
  if(result){
   signUpForm.innerHTML = "";
   var h2 = document.createElement("h2");
   h2.innerHTML = content;
   signUpForm.classList.add("successful");
   h2.classList.add("fontWhite");
   signUpForm.appendChild(h2);
   message.style.display = "none";
 }
 if(result===false){
   message.innerHTML = content;
   message.classList.add("openMessage");
 }
}
