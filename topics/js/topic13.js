window.onload = function (){
  var spinner = document.getElementsByClassName("se-pre-con")[0];
  spinner.style.display = 'none';
}
var button = document.getElementsByClassName('buttonCircle')[0];
button.addEventListener('click', show);

var menu = document.getElementById('sideMenu');
menu.addEventListener('click', close);

function show(){
  menu.classList="";
  menu.classList.add('show');
}
function close(){
  menu.classList="";
  menu.classList.add('close');
}
