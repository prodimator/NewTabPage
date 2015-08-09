
function init(){

  $( ".quote" ).click(function() {
    $( ".quote" ).fadeToggle("slow");
    $( ".great" ).fadeToggle("slow");
  });

  /*
  var h1tags = document.getElementsByTagName("h1");
  var h2tags = document.getElementsByTagName("h2");
  var h3tags = document.getElementsByTagName("h3");


  h1tags[0].onclick = changeColor;
  h2tags[0].onclick = changeColor;
  h3tags[0].onclick = fadeOut;
  */
}

function changeColor(){
  //this.innerHTML = "Click Again";

  var randomcolor = '#'+Math.floor(Math.random()*16777215).toString(16);

  this.style.color = randomcolor;
}

onload=init;

