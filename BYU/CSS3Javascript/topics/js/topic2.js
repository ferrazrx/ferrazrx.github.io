//object
function createObject(){
    //Creating a object with {}
  var person = {name: 'Rafael', age: 25, status: 'single'};
    //Creating a object using the kewyword new
  var car = new Object();
  car.color = 'white';
  car.passangers = 4;
    //Creating a function to create a object
  function house(rooms, size, floors){
    this.rooms = rooms;
    this.size = size;
    this.floors = floors;
    this.getBigger = function(){ this.rooms += 1; this.size +=100 };
  }
  var myHouse = new house(4,200,2);
      myHouse.getBigger(); //Add one room and more size
    //Retriving the properties
  var text = 'Hello, my name is ' + person.name + ', I\'m ' +
             person['age'] + ' and I have a car ' + car.color +
             ' that can hold ' + car.passangers + ' passangers. I also have '+
             'a house with ' + myHouse.rooms +' rooms. That is nice!';

  var target = document.getElementById('object').innerHTML = text;
}

function showInheritance(){

  function Person() {
    this.getOld = function(){this.age +=1};
  };
  //Inheritance using prototype
  Person.prototype.getYounger = function (){
      this.age -=1;
    }
  //Inheritance using object.create
  var maria = new Person();
  console.log(maria);
  maria.age = 20
  maria.getOld();
  maria.getYounger();//Inherited this function from person prototype

  document.getElementById('inheritance').innerHTML = 'Maria is ' + maria.age + '!';
}
