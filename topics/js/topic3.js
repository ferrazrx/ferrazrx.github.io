function showJSON() {
  var json = '{"name":"Josh", "age": 31, "job":"postman"}';
  var obj = JSON.parse(json);
    document.getElementById('string').innerHTML = json;
    document.getElementById('obj').innerHTML = 'Hello, my name is ' +
    obj.name + ', and I\'m '+
    obj.age+', and I\'m a '+
    obj.job +'!';

  var toJson = JSON.stringify(obj);
    var p = document.createElement('p');
    var t = "Now I'm a string :" + toJson;
    var text = document.createTextNode(t);
    p.appendChild(text);
    document.getElementById('obj').appendChild(p);
}
