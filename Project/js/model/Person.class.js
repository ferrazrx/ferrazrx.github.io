class Person {
	constructor(name,email,age, password){
		this.name = name;
		this.email= email;
		this.age = age;
		this.password = password;
		this.medicines = [];
    this.addMedine = function (name){ this.medicines.push(name);}
	}
}
