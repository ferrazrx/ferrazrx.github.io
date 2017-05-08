//Ajax request

function loadGET (url, callback){
  var request = new XMLHttpRequest();
  /*0: request not initialized
    1: server connection established
    2: request received
    3: processing request
    4: request finished and response is ready*/
  request.onreadystatechange = function(){
    if(this.readyState == 0){
      console.log('request not initialized');
    }
    if(this.readyState == 1){
      console.log('server connection established');
    }
    if(this.readyState == 2){
      console.log('request received');
    }
    if(this.readyState == 3){
      console.log('processing request');
    }
    if(this.readyState == 4 && this.status == 200){
      console.log('request finished and response is ready');
      callback(request.responseText);
    }
  }

  request.open(
    'GET',
    url,
    true
  );
  request.send();
}

function ajax(){
  document.querySelector('.fa').style.display = 'inline-block';
  document.querySelector('#button').style.display = 'none';
  //https://jsonplaceholder.typicode.com/users
  loadGET('https://jsonplaceholder.typicode.com/users', function(res){
    localStorage.setItem('users', res);
    document.querySelector('.fa').style.display = 'none';

    var string = localStorage.getItem('users');
    var users = JSON.parse(string);
    users.forEach(function(user){

      //Heading
      var p = document.createElement('div');
      p.setAttribute("class", "panel-heading")
      p.onmouseover = function(){
        var nonSelected = document.querySelectorAll('.panel-body');
        nonSelected.forEach(function(item){
          item.style.display = 'none';
        });
        document.getElementById(user.id).style.display = 'block';
      }
      p.innerHTML = user.name;

      //body
      var b = document.createElement('div');
      b.setAttribute('class', 'panel-body');
      b.setAttribute('id', user.id);
      b.innerHTML = user.website;
      b.style.display = 'none';
      b.style.transition = 'display .7s easy-in';

      //Send to HTML
      document.getElementById('ajax').appendChild(p);
      document.getElementById('ajax').appendChild(b);
    });
  });
};
