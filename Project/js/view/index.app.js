function openApp(customerExists) {
  var customer = document.getElementById("customer");
  customer.innerHTML = "Hello " + customerExists.name.charAt(0).toUpperCase() + customerExists.name.slice(1) + "!" ;
  var app = document.getElementsByClassName('app')[0];
  app.style.display = "flex";
}

function goToApp(){
	var pacient = JSON.parse(sessionStorage.getItem("actualCustomer"));

  var app = document.getElementsByClassName("welcome")[0];
  app.innerHTML = "";

  var medicineForm = document.getElementsByClassName("medicineForm")[0];
  medicineForm.style.display = "flex";

  var name = document.getElementById("pacient");
  var age = document.getElementById("year");
  var medications = document.getElementById("medications");

  name.innerHTML = "<strong>Name: </strong>" + pacient.name;
  age.innerHTML = "<strong>Age: </strong>" + pacient.age;
  medications.innerHTML =  "<strong>Medications: </strong>" + pacient.medicines.length;

  var sunday = document.getElementById("Sunday").innerHTML = "Pills:";
  var monday = document.getElementById("Monday").innerHTML = "Pills:";
  var tuesday = document.getElementById("Tuesday").innerHTML = "Pills:";
  var wednesday = document.getElementById("Wednesday").innerHTML = "Pills:";
  var thursday = document.getElementById("Thursday").innerHTML = "Pills:";
  var friday = document.getElementById("Friday").innerHTML = "Pills:";
  var saturday = document.getElementById("Saturday").innerHTML = "Pills:";

  if(pacient.medicines.length>0){
	for(var item in pacient.medicines){
		var name = pacient.medicines[item].name;
		var amount = pacient.medicines[item].amount;
		var days = pacient.medicines[item].days;
		for(var day in days){
			var weekDay = document.getElementById(days[day]);
			var div = document.createElement("div");
			var img1 = document.createElement("img");
      var img2 = document.createElement("img");
			var p1 = document.createElement("p");
			var p2 = document.createElement("p");

			img1.src = "img/pill1.png";
			img1.alt = "pillIgm";
			img1.style.width = "20px";

      img2.src = "img/close-icon.png";
      img2.alt = "close";
      img2.setAttribute("id",item);
      img2.style.width = "15px";
      img2.style.cursor="pointer";
      img2.setAttribute("onclick","remove(this)");

			p1.innerHTML = "Name: " + name;
			p2.innerHTML = "Amount: " + amount;

			div.classList.add("transparent");
			div.appendChild(img1);
      div.appendChild(img2);
			div.appendChild(p1);
			div.appendChild(p2);

			weekDay.appendChild(div);
		}
	}
}
}

function remove(id){
  console.log(id.id);
  var pacient = JSON.parse(sessionStorage.getItem("actualCustomer"));
  pacient.medicines.splice(id,1);
  updateStorage(pacient);
}
