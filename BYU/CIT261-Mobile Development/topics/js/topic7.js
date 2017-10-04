document.getElementById('button').addEventListener('click', removeClass);
document.getElementById('button2').addEventListener('click', addClass);

function removeClass(){
  var image = document.getElementsByClassName('background')[0];
  image.classList.remove('background2');
}
function addClass(){
  var image = document.getElementsByClassName('background')[0];
  image.classList.add('background2');
}

window.addEventListener("keydown", moveSomething, false);


function moveSomething(e) {
    var ball = document.getElementById('square');
    var className = document.getElementById('className')
    switch(e.keyCode) {
        case 65:
          ball.classList="";
          ball.classList.add('flex');
          className.innerHTML = "";
          break;
        case 37:
            // left key pressed
            className.innerHTML = "Left";
            ball.classList="";
            ball.classList.add('left');
            break;
        case 38:
            // up key pressed
            className.innerHTML = "Up";
            ball.classList="";
            ball.classList.add('up');
            break;
        case 39:
            // right key pressed
            className.innerHTML = "Right";
            ball.classList="";
            ball.classList.add('right');
            break;
        case 40:
            // down key pressed
            className.innerHTML = "Down";
            ball.classList="";
            ball.classList.add('down');
            break;
    }
}
