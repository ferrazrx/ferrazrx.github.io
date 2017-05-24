document.getElementsByClassName('subtopic')[0].addEventListener('click', increase);
  function increase(){
    var count = 0;
    var id = setInterval(spin, 100);
    function spin(){
      count +=5;
      document.getElementsByTagName('body')[0].style.transform = 'skewY('+count+'deg)';
      if(count ==180){
        clearInterval(id);
      }
    }
  }
