
  //Loops
  function createParagraph(){
    for(var i=0;i<5;i++){
      var p = document.createElement('p');
      var text = document.createTextNode('I was created by a \'for\' loop -'+i);
      p.appendChild(text);
      document.getElementById('loop').appendChild(p);
    }
  }

  //While
  function createList(){
    var i = 0;
    while(i<5){
      var p = document.createElement('li');
      var text = document.createTextNode('I was created by a loop \'while\' -'+i);
      p.appendChild(text);
      document.getElementById('while').appendChild(p);
      i++;
    }
  }

  //Do/while
  function createLinks(){
    var i = 0;
    do{
      var p = document.createElement('a');
      var att = document.createAttribute('href');
      att.value = '#';
      p.setAttributeNode(att);
      var text = document.createTextNode('I was created by a loop \'do\\while\' -'+i);
      p.appendChild(text);
      var br = document.createElement('br');
      document.getElementById('do-while').appendChild(br);
      document.getElementById('do-while').appendChild(p);
      i++;
    }
    while(i<5);
  }

  //If statemente
  function condition(){
    var statement = true;

    if(statement){
      var p = document.createElement('p');
      var text = document.createTextNode('I will be created if the condition is '+ statement);
      p.appendChild(text);
      document.getElementById('if').appendChild(p);
    } else {
      var p = document.createElement('p');
      var text = document.createTextNode('I will be created if the condition is '+ statement);
      p.appendChild(text);
      document.getElementById('if').appendChild(p);
    }
  }

  //Functions
  function functionRun(){
    document.getElementById('function').innerHTML = 'I run! Congratulations!';
  }

  //Variables
  function variables(){
    var a = "\"I'm a variable!\" ";
    var b = "\"Me too!\" ";
    var c = "\"Then we are siblings!\" ";

    document.getElementById('variables').innerHTML = a + '<br />' + b + '<br />' + c;

  }

  //Parameters
  function parameters(a,b){
    // This function will receive parameters from its call
    var c = a + b;
    document.getElementById('parameters').innerHTML = a + ' + ' + b + ' = ' + c;
  }

  //Array
  function arrayRun(){
    var a = ['banana', 'lemon', 'apple', 'orange'];
    var b = "";
    for(var i=0; i<a.length; i++){
      b += a[i] + " ";
    }
    document.getElementById('array').innerHTML = b;
  }

  function associative(){
    var a = {
              name:"Rafael",
              age: 27
            };
    document.getElementById('associative').innerHTML = 'My name is '+/*Fist way to retrive the array*/ a['name'] + ' and I\'m ' + /*Second way to retrive the array*/ a.age;
  }
