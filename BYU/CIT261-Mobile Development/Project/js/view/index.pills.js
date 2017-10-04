//Creat Pills
for(var a=1; a<=3;a++){
  for(var i=0;i<=10;i++){
    var y = Math.random() * 100;
    var img = document.createElement('img');
    img.src = "img/pill"+a+".png";
    img.alt = "pill";
    document.getElementsByClassName('fullPage')[0].appendChild(img);
    img.setAttribute("class", "pill");
    img.setAttribute("style", "left:"+ y + "vw;");
  }
}

//Set up the pills animations
var move = window.requestAnimationFrame(reposition);

function reposition() {
  var pills = document.getElementsByClassName('pill');
  for(var i=0; i<pills.length;i++ ){
    var y = Math.random() * 10;
    pills[i].style.animationDelay = y+"s";
  }
}
