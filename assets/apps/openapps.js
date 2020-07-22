var appname = document.getElementById('appname'); //The Name of the App
var theapp = document.getElementById("theapp"); //The Actual App
var appwindow = document.getElementById("appwindow");

$( function() {
    $( "#appwindow" ).draggable({
      iframeFix: true
    });
  } );
function notePad() {
    theapp.src = "/notepad/";
    $("#appwindow").toggle();
    appname.innerHTML = "Notepad";
}