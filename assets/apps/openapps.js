var appname = document.getElementById('appname'); //The Name of the App
var theapp = document.getElementById("theapp"); //The Actual App
var appwindow = document.getElementById("appwindow");
let name;


$( function() {
    $( "#appwindow" ).draggable({
      iframeFix: true
    });
  } );
function notePad() {
  name = 'Notepad';

  $(theapp).height(250 - 34);

  $( appwindow ).width( 250 );
  
  $( appwindow ).height( 250 );
  
  theapp.src = "/notepad/";
  
  $(appwindow).toggle("scale", 250);
    
  $(appname).html(name);
  
  $("#notepad").toggleClass("activeapp");
}