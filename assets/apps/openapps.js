$( function() {
    $( ".appwindow" ).draggable({
      iframeFix: true
    });
  } );
function openFrameApp(app, height, width, appframe) {
  $( app   ).height(height);
  $( app ).width(width);
  $(appframe).css("height", $(app).height());
  $( app ).show("fade", 100);
}
function maximizeFrameApp(app, iframe) {
  app.style.top = "0";
  app.style.left = "0";
  app.style.marginTop = "34px";
  $(app).css("width", $(document).width());
  $(app).css("height", $(document).height());
  $(iframe).css("height", $(app).height())
  app.style.zIndex = "1000";
}
function closeApp(app) {
  $( app ).hide("fade", 100);
}
function openApp(app, body, width, height) {
  $( app ).height(height);
  $( app ).width(width);
  $( body ).height(height);
  $( body ).width(width);
  $( app ).show("fade",100);
}