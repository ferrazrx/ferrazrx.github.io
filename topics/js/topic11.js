var square = document.getElementsByClassName('spin')[0];
square.addEventListener('mouseover', spin);

function spin() {
  count = 0;
  var id = setInterval(rotate, 10);
  function rotate(){
    count++;
    square.style.transform = 'rotateY('+count+'deg)'
    if(count >= 360){
      clearInterval(id);
    }
  }
};
