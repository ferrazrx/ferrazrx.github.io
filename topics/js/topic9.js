window.addEventListener('load', function(){

    var box2 = document.getElementById('box2'),
    boxleft, // left position of moving box
    startx, // starting x coordinate of touch point
    dist = 0, // distance traveled by touch point
    touchobj = null; // Touch object holder

    square.addEventListener('touchenter', function(e){
        var quantity = e.changedTouches[].length; // reference first touch point
        document.getElementById('quantity').innerHTML = 'You pressed ' + quantity + ' times!';
        e.preventDefault(); // prevent default click behavior
    }, false)

    box2.addEventListener('touchstart', function(e){
        touchobj = e.changedTouches[0]; // reference first touch point
        boxleft = parseInt(box2.style.left); // get left position of box
        startx = parseInt(touchobj.clientX); // get x coord of touch point
        document.getElementById('h1').innerHTML = 'Touch Start';
        document.getElementById('p').innerHTML = 'Touch Object:' + touchobj + '<br>' + "Left:" + boxleft + '<br>' + "ClientX:"+ startx;
        e.preventDefault(); // prevent default click behavior
    }, false)

    box2.addEventListener('touchmove', function(e){
        touchobj = e.changedTouches[0]; // reference first touch point for this event
        var dist = parseInt(touchobj.clientX) - startx; // calculate dist traveled by touch point
        // move box according to starting pos plus dist
        // with lower limit 0 and upper limit 380 so it doesn't move outside track:
        box2.style.left = ( (boxleft + dist > 240)? 240 : (boxleft + dist < 0)? 0 : boxleft + dist ) + 'px';
        e.preventDefault();
    }, false)

}, false)
