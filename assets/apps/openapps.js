const appname = document.getElementById('appname'); //The Name of the App
const theapp = document.getElementById("theapp"); //The Actual App
const appwindow = document.getElementById("appwindow");
const appdetails = document.getElementById("appdetails");
const maxmini = document.getElementById("maxmini");
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
  app.style.position = "fixed";
}
$(function() {
  $(theapp).resizable({
    start: function(event, ui) {
      ui.element.append($("<div/>", {
        id: "iframe-barrier",
        css: {
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          "z-index": 10
        }
      }));
    },
    stop: function(event, ui) {
      $("#iframe-barrier", ui.element).remove();
    },
    resize: function(event, ui) {
      $("iframe", ui.element).width(ui.size.width).height(ui.size.height);
    }
  });
});
