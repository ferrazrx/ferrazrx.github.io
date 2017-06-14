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
  //menu.classList.remove('close');
}
function close(){
  menu.classList="";
  menu.classList.add('close');
}

document.getElementById('more').addEventListener('click', open);

function open(){
  var info = document.getElementById('info');
  info.classList.toggle('closed');
  info.classList.toggle('open');

}
