function openApp(customerExists) {
  var customer = document.getElementById("customer");
  customer.innerHTML = "Hello " + customerExists.name.charAt(0).toUpperCase() + customerExists.name.slice(1) + "!" ;
  var app = document.getElementsByClassName('app')[0];
  app.style.display = "flex";
}

function goToApp(){
  var app = document.getElementsByClassName("welcome")[0];
  app.innerHTML = "";
  var medicineForm = document.getElementsByClassName("medicineForm")[0];
  medicineForm.style.display = "flex";
}
