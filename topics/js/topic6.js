//HTML DOM
  //HTML DOM EventListener
  document.getElementById("button").addEventListener("click", display);
  document.getElementById("button2").addEventListener("click", remove);

  var text1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis arcu sed gravida condimentum. Praesent efficitur, ex et posuere efficitur, ex augue fermentum lacus, interdum mattis nisl sapien ac turpis. Nunc dictum elit vitae dictum mattis. Aenean tristique imperdiet ex, sed imperdiet nunc hendrerit et. Pellentesque convallis tempus justo at volutpat. Donec pharetra efficitur auctor. Duis in feugiat magna, dapibus rhoncus tortor. Sed scelerisque, sem a lacinia egestas, purus nunc iaculis arcu, in imperdiet lacus purus at urna. Etiam orci mi, euismod vel tincidunt in, dapibus at diam. Pellentesque at neque at lacus varius finibus sed ac lorem. Nullam nec tortor a odio dictum molestie et eu odio. Aliquam tristique, tortor ut congue luctus, libero lacus ultrices mauris, et eleifend risus magna in erat. Vestibulum vel sagittis eros. Nunc eget dapibus libero. Nam lacinia ultrices consectetur. Integer in venenatis felis. Mauris lacinia sapien id quam semper lobortis. Praesent lobortis et tellus eget accumsan. Nam non justo lorem. Praesent sit amet scelerisque neque. Vestibulum euismod libero vitae ligula vulputate sodales. Quisque sed sagittis velit, vel venenatis libero. Nulla et tincidunt orci, et tincidunt tortor.";

  var text2 = 'Aliquam aliquet sem id feugiat cursus. Aenean interdum iaculis mattis. Integer sagittis sagittis urna at ultricies. Sed a iaculis dolor. Proin eu viverra diam, quis gravida est. Nunc mattis commodo cursus. Morbi elementum arcu enim, nec lacinia est gravida a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere elementum nisi, consectetur porttitor purus pulvinar a. Ut ante lacus, lacinia nec venenatis vitae, molestie in est. In hac habitasse platea dictumst. Vivamus elit lorem, bibendum sed dignissim in, tempus id odio.';
  //document.getElementsByTagName
  function display(){
    //Creating Elements
    var p = document.createElement('p');
    var p2 = document.createElement('p');
    //Inner HTML
    p.innerHTML = text1;
    p2.innerHTML = text2;
    //Style elements
    p.style.color = "blue";
    p2.style.color = "red";
    //Seting new attributes
    var article = document.getElementsByTagName('article');
    article[0].setAttribute('class', 'font-light');
    //Appending the element
    article[0].appendChild(p);
    article[0].appendChild(p2);
  }

  function remove(){
    var article = document.getElementsByTagName('article');
    console.log(article[0]);
    //removing elements
    //In the HTML DOM (Document Object Model), everything is a node:
    //The document itself is a document node
    //All HTML elements are element nodes
    //All HTML attributes are attribute nodes
    //Text inside HTML elements are text nodes
    //Comments are comment nodes

    article[0].removeChild(article[0].childNodes[2]);
  }
