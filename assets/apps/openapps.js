const appname = document.getElementById('appname'); //The Name of the App
const theapp = document.getElementById("theapp"); //The Actual App
const appwindow = document.getElementById("appwindow");
let name;


$( function() {
    $( "#appwindow" ).draggable({
      iframeFix: true
    });
  } );

  
function maxFix(app) {
  app.style.top = "0";
  app.style.left = "0"; 
  app.style.borderRadius = "0";
  appname.style.display = "none";
}