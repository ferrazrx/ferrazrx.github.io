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
  document.querySelector('.spinner').style.display = 'inline-block';
  document.querySelector('#button').style.display = 'none';
  //https://jsonplaceholder.typicode.com/users
  loadGET('https://jsonplaceholder.typicode.com/users', function(res){
    localStorage.setItem('users', res);
    document.querySelector('.spinner').style.display = 'none';

    var string = localStorage.getItem('users');
    var users = JSON.parse(string);
    users.forEach(function(user){

      //Heading
      var p = document.createElement('div');
      p.setAttribute("class", "panel-heading")
      p.onmouseover = function(){
        var nonSelected = document.querySelectorAll('.panel-body');
        nonSelected.forEach(function(item){
          item.classList.remove('Apper');
          item.classList.add('noApper');
          console.log(item.classList);
        });
        document.getElementById(user.id).classList.remove('noApper');
        document.getElementById(user.id).classList.add('Apper');
      }
      p.innerHTML = user.name;

      //body
      var b = document.createElement('div');
      b.setAttribute('class', 'panel-body');
      b.setAttribute('id', user.id);

      b.innerHTML = user.website;
      b.classList.add('noApper');

      //Send to HTML
      document.getElementById('ajax').appendChild(p);
      document.getElementById('ajax').appendChild(b);
    });
  });
};

//Exemple 2

function request(url, callback){
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200 ){
      console.log(this);
      callback(this.responseText);
    }
  }

  request.open(
    'GET',
    url,
    true
  );
  request.send();
}

function table(){
  document.querySelector('.spinner1').style.display = 'inline-block';
  document.querySelector('#button1').style.display = 'none';
  request('https://jsonplaceholder.typicode.com/albums',
    function(response){
        var table = document.createElement('table');
        table.setAttribute('class', 'table');
        var tr = document.createElement('tr');
        var th1 = document.createElement('th');
        var th2 = document.createElement('th');
        var th3 = document.createElement('th');
        th1.innerHTML = 'id';
        th2.innerHTML = 'UserID';
        th3.innerHTML = 'Title';
        table.appendChild(tr);
        tr.appendChild(th1);
        tr.appendChild(th2);
        tr.appendChild(th3);
        var obj = JSON.parse(response);
        obj.forEach(function(item){
            var tr = document.createElement('tr');
            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
            var td3 = document.createElement('td');
            td1.innerHTML = item.id;
            td2.innerHTML = item.userId;
            td3.innerHTML = item.title;
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            table.appendChild(tr);
        })
        document.getElementById('rows').setAttribute('class', 'panel-body');
        document.getElementById('rows').appendChild(table);
        document.getElementById('table').style.display = 'block';
        document.querySelector('.spinner1').style.display = 'none';
    }
  );
}
