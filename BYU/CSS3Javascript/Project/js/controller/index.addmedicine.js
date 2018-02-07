function addMedicine(){
	var medicine = document.getElementById("medicine").value;
	var amount = document.getElementById("amount").value;
	var days = document.getElementsByClassName("day");
	var customer = JSON.parse(sessionStorage.getItem("actualCustomer"));


	if(medicine == "" || amount == "" || days == "" ){
		errorMessage("All filds must be complete! Please don't left any black space.");
	}else{
		var week = [];
		for(var i=0;i<=6;i++){
			if(days[i].selected == true){
				week.push(days[i].value);
			}
		};
		var medicine = new Medicine(medicine,amount, week);
		customer.medicines.push(medicine);
		updateStorage(customer);

	}
}

function updateStorage(obj){
	var pacient = obj.email;
	var string = JSON.stringify(obj);
	localStorage.setItem(pacient, string);
	sessionStorage.setItem("actualCustomer", string);
	goToApp();
}
