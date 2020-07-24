$( function() {
    $( ".appwindow" ).draggable({
      iframeFix: true
    });
  } );
function openApp(app, height, width, appframe) {
  $( app   ).height(height + 34);
  $( app ).width(width);
  $(appframe).css("height", $("app").height());
  $( app ).toggle("fade", 100);
}
function maximizeApp(app) {
  app.style.top = "0";
  app.style.bottom = "0";
  app.style.left = "0";
  app.style.right = "0";
  $(app).css("width", $(document).width());
  $(app).css("height", $(document).height());
  $("#theapp").css("height", $(app).height());
}
