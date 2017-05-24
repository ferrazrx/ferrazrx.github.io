window.onload = function (){
  var spinner = document.getElementsByClassName("se-pre-con")[0];
  spinner.style.display = 'none';
};

document.getElementById('button').addEventListener('click', createCloud);
document.getElementById('button2').addEventListener('click', createSun);
document.getElementById('button3').addEventListener('click', createHelicopter);


function createCloud(){
  var y = Math.abs(Math.random()*300);
  var x = Math.abs(Math.random()*700);


  console.log(x+","+y);
  var sky = document.getElementById('sky');
  var cloud = document.createElement('img');
  cloud.src = "img/bigCloud.png";
  cloud.setAttribute('class', 'cloud');
  cloud.setAttribute('style', 'top:'+y+"px;"+"left:"+x+"px;");
  sky.appendChild(cloud);

}

function createSun(){
  var sky = document.getElementById('sky');
  var sun = document.createElement('img');
  sun.src = "img/sun.png";
  sun.setAttribute('class', 'sun');
  sky.appendChild(sun);
  document.getElementById('button2').style.display = 'none';

}

function createHelicopter(){
  var sky = document.getElementById('sky');
  var sun = document.createElement('img');
  sun.src = "img/helicopter.gif";
  sun.setAttribute('class', 'helicopter');
  sky.appendChild(sun);

}
