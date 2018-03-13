"use strict";

window.addEventListener('load', function(){
  let event;
  let frequency = 1;

  document.querySelector('#rows').addEventListener('input', resize);
  document.querySelector('#zombies').addEventListener('input', changeFrequency);
  document.querySelector('[value="Start"]').addEventListener('click', start);

  function addEventListener(){
    document.querySelectorAll('.column').forEach(function(item){
        item.addEventListener('click', function(e){point(e);});
    });
  }

  function changeFrequency(){
    clearEvent(event);
    frequency = document.querySelector('#zombies').value;
    event = setInterval(placeZombie, (1500/frequency));
  }

  function reset(){
	   clearEvent(event);
     document.querySelector('#points').value = 0;
	   document.querySelectorAll('.column').forEach(function(item){
		     item.classList.remove('zombie');
	  });
  }

  function clearEvent(e){
	if(e !=null){clearInterval(e)};
  }

  function resize(){
    let main = document.querySelector('main');
    main.innerHTML = "";
    let size = document.querySelector('#rows').value;
	  size = size <=0? 2 : size;
    for(let i=0;i<size;i++){
      let row = document.createElement('div');
      row.classList.add('row');
      for(let i=0;i<size;i++){
        let column = document.createElement('div');
        column.classList.add('column');
        row.appendChild(column);
      }
      main.appendChild(row);
    }
    addEventListener();
    reset();
  }

  function start(){
	  reset();
    addEventListener();
    event = setInterval(placeZombie, (1500/frequency));
  }

  //Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  function placeZombie(){
        var total = document.querySelectorAll('.column').length;
        var x = getRandomArbitrary(1,total).toFixed(0);
        document.querySelectorAll('.column')[x-1].classList.add('zombie');
        setTimeout(function(){
          document.querySelectorAll('.column')[x-1].classList.remove('zombie');
        },(1200/frequency));
  }

  function point(e){
    if(e.target.classList.contains('zombie')){
      let total = document.querySelector('#points').value;
      total++;
      document.querySelector('#points').value = total;
      e.target.classList.remove('zombie');
    }
  }
});
