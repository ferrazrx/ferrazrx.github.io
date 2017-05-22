document.getElementById('button').addEventListener('click', newWindow);
document.getElementById('button2').addEventListener('click', message);

function newWindow() {

  var name = document.getElementById('name').value || "unknown";
  var surname = document.getElementById('surname').value || "";

  var obj = {
     name: name,
     surname: surname
  }
  var json = JSON.stringify(obj);

localStorage.setItem('data', json);

 var newPage = window.open();
 newPage.document.open();
 newPage.document.write(
   "<!DOCTYPE html>"+"<html lang='en'>"+
   "<head>"+
     "<meta charset='utf-8'>"+
     "<meta http-equiv='X-UA-Compatible' content='IE=edge'>"+
     "<meta name='viewport' content='width=device-width, initial-scale=1'>"+
     "<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->"+
     "<meta name='description' content='CIT 261 codes'>"+
     "<meta name='author' content='Rafael Ferraz'>"+
     "<link rel='icon' href='favicon.ico'>"+
     "<title>CIT 261| New Page Created with JS</title>"+
     "</head>"+
     "<body>"+
     "<script>"+
     "var div = document.createElement('div');" +
     "var h1 = document.createElement('h1');"+
     "var h3 = document.createElement('h3');"+
     "h3.innerHTML ='Close your browser and get the message from the planet on previous webpage!' ;"+
     "var p = document.createElement('p');"+
     "p.innerHTML ='"+ name +" "+ surname +", welcome! This planet was created by our mighty master programmer! He used JavaScript as his main material!"+
     "My master send me this message:"+ localStorage.getItem('data') +", I do not know what it means, but I will keep it. It must be important!  I will keep it even if you close your browser!';"+
     "h1.innerHTML = 'Hello "+ name +" to the white Planet!';"+
     "div.appendChild(h1);" +
     "div.appendChild(p);"+
     "div.appendChild(h3);"+
     "document.getElementsByTagName('body')[0].appendChild(div);"+
     "console.log(Storage);"+
     "</script>"+
     "</body>");
 newPage.document.close();
}

function message(){
  var json = localStorage.getItem('data');
  if(json === null){
      document.getElementById('localStorage').innerHTML = "Sorry you didn't visit our planet yet! Give it a try!"
  }

  var obj = JSON.parse(json);
  document.getElementById('localStorage').innerHTML = "We know who you are " + obj.name + " " + obj.surname +"! We are watching you!";

}
