function addMedicine(){
	var medicine = document.getElementById("medicine").value;
	var amount = document.getElementById("amount").value;
	var days = document.getElementById("days").value;
	var customer = JSON.parse(sessionStorage.getItem("actualCustomer"));
	
	if(medicine == "" || amount == "" || days == "" ){
		errorMessage("All filds must be complete! Please don't left any black space.");
	}
	
}